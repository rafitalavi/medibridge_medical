import React, { useEffect } from 'react';
import { X, FileText, Building2, Plane, HeartHandshake, CheckCircle } from 'lucide-react';
import './HowItWorksModal.css';

export default function HowItWorksModal({ isOpen, onClose, onProceedToConsultation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Free Case Assessment',
      desc: 'Submit your diagnostic reports securely. Our medical team analyzes treatment feasibility within 24 hours.',
      icon: <FileText size={22} color="#0f3b5c" />,
    },
    {
      num: '02',
      title: 'Top Specialist Match',
      desc: 'Choose from 1,200+ vetted, JCI-accredited global hospitals and get upfront, transparent cost estimates.',
      icon: <Building2 size={22} color="#0f3b5c" />,
    },
    {
      num: '03',
      title: 'Online Hospital Communications',
      desc: 'We arrange direct video consultations between you and the specialist to finalize treatment.',
      icon: <Plane size={22} color="#0f3b5c" />,
    },
    {
      num: '04',
      title: 'Priority Medical Visa',
      desc: 'We prepare government-compliant medical visa invitations, expediting approvals in as fast as 48 hours.',
      icon: <Plane size={22} color="#0f3b5c" />,
    },
    {
      num: '05',
      title: 'Bedside Care & Return',
      desc: 'Airport transfer, translation assistance, and a dedicated personal care coordinator with you every step.',
      icon: <HeartHandshake size={22} color="#0f3b5c" />,
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="how-it-works-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="how-it-works-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="how-it-works-content">
          <div className="how-header">
            <span className="how-badge">Seamless 4-Step Process</span>
            <h2 id="how-it-works-title" className="how-title">
              How MediBridge Guides Your Care
            </h2>
            <p className="how-subtitle">
              From your initial inquiry to full recovery back home, we eliminate administrative stress so you can focus on healing.
            </p>
          </div>

          <div className="how-steps-grid">
            {steps.map((step) => (
              <div key={step.num} className="step-card">
                <div className="step-header">
                  <div className="step-icon-box">{step.icon}</div>
                  <span className="step-number">{step.num}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="how-footer">
            <button
              type="button"
              className="btn-pill btn-primary"
              onClick={() => {
                onClose();
                onProceedToConsultation();
              }}
            >
              Start Your Free Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
