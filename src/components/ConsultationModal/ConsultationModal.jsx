import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, Stethoscope, Globe, ArrowRight } from 'lucide-react';
import './ConsultationModal.css';

export default function ConsultationModal({ isOpen, onClose, initialSpecialty = '', initialDestination = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: 'Cardiology',
    destination: 'Germany',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let prefilledNotes = '';
    let dest = 'Germany';

    if (initialDestination) {
      if (initialDestination.includes('Turkey')) dest = 'Turkey';
      else if (initialDestination.includes('UAE')) dest = 'UAE';
      else if (initialDestination.includes('Germany')) dest = 'Germany';
      prefilledNotes = `Inquiring for medical travel to ${initialDestination}`;
    }

    if (initialSpecialty) {
      prefilledNotes = prefilledNotes ? `${prefilledNotes} - ${initialSpecialty}` : `Inquiring regarding: ${initialSpecialty}`;
    }

    if (prefilledNotes || initialDestination) {
      setFormData((prev) => ({
        ...prev,
        destination: dest || prev.destination,
        notes: prefilledNotes || prev.notes,
      }));
    }
  }, [initialSpecialty, initialDestination, isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-badge">
                <ShieldCheck size={14} />
                <span>Confidential & Free Medical Assessment</span>
              </div>
              <h2 id="modal-title" className="modal-title">
                Book Your Consultation
              </h2>
              <p className="modal-subtitle">
                Our medical visa advisors and care coordinators will review your case and contact you within 4 hours.
              </p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Johnathan Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="treatment">
                    <Stethoscope size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    Specialty / Treatment
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                  >
                    <option value="Cardiology">Cardiology & Heart Surgery</option>
                    <option value="Oncology">Oncology & Cancer Therapy</option>
                    <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                    <option value="Neurology">Neurology & Neurosurgery</option>
                    <option value="Cosmetic">Cosmetic & Reconstructive Surgery</option>
                    <option value="Checkup">Comprehensive Executive Health Check</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="destination">
                    <Globe size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    Preferred Country
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option value="Germany">Germany</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Thailand">Thailand</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Brief Medical Background or Travel Timeframe</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Tell us about the current diagnosis or planned treatment schedule..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-pill btn-primary modal-submit-btn">
                <span>Confirm Consultation Request</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={54} color="#16a34a" />
            </div>
            <h3 className="success-title">Consultation Requested!</h3>
            <p className="success-text">
              Thank you, <strong>{formData.fullName}</strong>. A senior medical travel case coordinator has been assigned to your request and will reach out via WhatsApp / email within 4 hours.
            </p>
            <div className="success-summary">
              <div className="summary-item">
                <span>Treatment:</span> <strong>{formData.treatment}</strong>
              </div>
              <div className="summary-item">
                <span>Destination:</span> <strong>{formData.destination}</strong>
              </div>
            </div>
            <button
              type="button"
              className="btn-pill btn-primary"
              onClick={onClose}
              style={{ marginTop: '20px' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
