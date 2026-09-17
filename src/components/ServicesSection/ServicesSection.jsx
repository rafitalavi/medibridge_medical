import React from 'react';
import { FileText, Globe, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import './ServicesSection.css';

export default function ServicesSection({ onSelectService, onNavigateToServicesPage }) {
  const services = [
    {
      id: 'visa',
      icon: <FileText size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Medical Visa Support',
      description:
        'Expert guidance through complex documentation and application processes for international health travel.',
      checklist: [
        'Document Preparation',
        'Application Review',
        'Rejection Assistance',
      ],
    },
    {
      id: 'travel',
      icon: <Globe size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Travel Coordination',
      description:
        'Full-scale logistical planning for patients and family members, from flights to specialized transport.',
      checklist: [
        'Flight & Hotel Booking',
        'Airport Assistance',
        'Local Transit Support',
      ],
    },
    {
      id: 'treatment',
      icon: <Calendar size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Treatment Journey',
      description:
        'Direct coordination with international clinics and hospitals to secure appointments and clear pathways.',
      checklist: [
        'Hospital Matching',
        'Appointment Management',
        'Post-Care Coordination',
      ],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        {/* Header with Title and "View All Services" link */}
        <div className="services-header">
          <div className="services-header-left">
            <h2 className="services-title">Support Every Step of the Way</h2>
            <p className="services-subtitle">
              Comprehensive guidance tailored to your specific medical and travel needs.
            </p>
          </div>

          <div className="services-header-right">
            <a
              href="#services"
              className="view-all-services-link"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToServicesPage) {
                  onNavigateToServicesPage();
                } else if (onSelectService) {
                  onSelectService('all');
                }
              }}
            >
              <span>View All Services</span>
              <ChevronRight size={17} strokeWidth={2.5} className="link-chevron" />
            </a>
          </div>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => onSelectService && onSelectService(service.id)}
            >
              <div className="service-icon-box" aria-hidden="true">
                {service.icon}
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              <ul className="service-checklist">
                {service.checklist.map((item, idx) => (
                  <li key={idx} className="checklist-item">
                    <span className="checklist-icon" aria-hidden="true">
                      <CheckCircle2 size={16} strokeWidth={2} />
                    </span>
                    <span className="checklist-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
