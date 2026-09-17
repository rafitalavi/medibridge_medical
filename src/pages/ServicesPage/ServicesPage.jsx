import React from 'react';
import {
  FileText,
  Plane,
  Building2,
  FolderCheck,
  Globe,
  HeartHandshake,
  ArrowRight,
  UserCheck,
  Sparkles,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import './ServicesPage.css';

export default function ServicesPage({ onEnquire }) {
  const serviceCards = [
    {
      id: 'visa-support',
      icon: <FileText size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Medical Visa Support',
      description:
        'Expert guidance through the complexities of international medical visa applications and local embassy requirements.',
      whoItsFor: 'Patients needing a visa quickly for medical treatment.',
      keyBenefit: 'Reduced application error and higher approval likelihood.',
    },
    {
      id: 'travel-coord',
      icon: <Plane size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Travel Coordination',
      description:
        'Full logistics planning including specialized transport, flights, and long-term stay accommodation for patients and companions.',
      whoItsFor: 'Patients traveling across multiple transit routes.',
      keyBenefit: 'Seamless logistics managed by travel experts.',
    },
    {
      id: 'clinic-matching',
      icon: <Building2 size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Clinic Matching',
      description:
        'Helping you find the right hospital or specialist based on your medical requirements, destination preference, and budget.',
      whoItsFor: 'People requiring international specialist opinions.',
      keyBenefit: 'Access to verified and accredited world-class clinics.',
    },
    {
      id: 'doc-guidance',
      icon: <FolderCheck size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Documentation Guidance',
      description:
        'Assisting in the collection, translation, and verification of medical records and journey-related documentation.',
      whoItsFor: 'Patients with records from various medical sources.',
      keyBenefit: 'Organized and clear cases for foreign specialists.',
    },
    {
      id: 'arrival-support',
      icon: <Globe size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Arrival & Local Support',
      description:
        'Dedicated support upon landing, including airport meet & greet, translators, and help navigating the destination country.',
      whoItsFor: 'Patients traveling to unfamiliar foreign countries.',
      keyBenefit: 'Immediate local assistance and cultural navigation.',
    },
    {
      id: 'followup-coord',
      icon: <HeartHandshake size={24} strokeWidth={2} color="#0c3f49" />,
      title: 'Follow-Up Coordination',
      description:
        'Coordinating post-op consultations and ensuring medical reports are shared with your home-based doctors.',
      whoItsFor: 'Post-recovery patients returning to home care.',
      keyBenefit: 'Continuity of care across international borders.',
    },
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-page-header">
        <div className="container">
          <h1 className="services-page-title">Our Core Support Services</h1>
          <p className="services-page-subtitle">
            MediBridge provides end-to-end guidance for international medical travel,
            ensuring every administrative and logistical detail is professionally managed.
          </p>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section className="services-cards-section">
        <div className="container">
          <div className="services-cards-grid">
            {serviceCards.map((card) => (
              <div key={card.id} className="service-detail-card">
                <div className="service-card-top">
                  <div className="service-card-icon-wrap" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h2 className="service-detail-title">{card.title}</h2>
                  <p className="service-detail-desc">{card.description}</p>
                </div>

                <div className="service-card-info-blocks">
                  {/* Who It's For */}
                  <div className="info-block">
                    <div className="info-block-header">
                      <span className="info-block-icon" aria-hidden="true">
                        <UserCheck size={14} color="#00a76f" />
                      </span>
                      <span className="info-block-label">Who It's For:</span>
                    </div>
                    <p className="info-block-text">{card.whoItsFor}</p>
                  </div>

                  {/* Key Benefit */}
                  <div className="info-block">
                    <div className="info-block-header">
                      <span className="info-block-icon" aria-hidden="true">
                        <Sparkles size={14} color="#d5a145" />
                      </span>
                      <span className="info-block-label">Key Benefit:</span>
                    </div>
                    <p className="info-block-text">{card.keyBenefit}</p>
                  </div>
                </div>

                <div className="service-card-footer">
                  <button
                    type="button"
                    className="btn-pill btn-primary service-enquire-btn"
                    onClick={() => onEnquire && onEnquire(card.title)}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={16} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards Banner */}
      <section className="standards-banner-section">
        <div className="container standards-container">
          <div className="standards-content">
            <h3 className="standards-title">Professional Standards in Every Service</h3>
            <p className="standards-desc">
              Our services are delivered with a commitment to medical professionalism and
              operational excellence. We do not provide medical advice or guarantee visa approval,
              but we provide the highest standard of support for those navigating these processes.
            </p>
            <div className="standards-badges-row">
              <div className="standards-badge">
                <ShieldCheck size={16} color="#00a76f" />
                <span>SECURE DATA</span>
              </div>
              <div className="standards-badge">
                <Headphones size={16} color="#0c3f49" />
                <span>24/7 SUPPORT</span>
              </div>
            </div>
          </div>

          <div className="standards-image-wrap">
            <img
              src="/medical_desk.jpg"
              alt="Professional medical visa administrative workstation with reports and laptop"
              className="standards-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
