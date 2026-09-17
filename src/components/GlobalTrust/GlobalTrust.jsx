import React from 'react';
import { Shield, MessageSquare, CheckCircle2, Star } from 'lucide-react';
import './GlobalTrust.css';

export default function GlobalTrust() {
  const trustPoints = [
    {
      icon: <Shield size={20} strokeWidth={2} />,
      title: 'Confidential & Secure',
      desc: 'Your personal and medical information is handled with the highest level of data security and confidentiality.',
    },
    {
      icon: <MessageSquare size={20} strokeWidth={2} />,
      title: '24/7 Journey Support',
      desc: 'We are with you every step of the way, providing guidance from first enquiry to after you return home.',
    },
    {
      icon: <CheckCircle2 size={20} strokeWidth={2} />,
      title: 'Verified Professional Network',
      desc: 'We only work with accredited hospitals and vetted travel partners globally.',
    },
  ];

  return (
    <section className="global-trust-section" id="trust">
      <div className="container global-trust-container">
        {/* Left Column: Heading & Feature Points */}
        <div className="global-trust-left">
          <h2 className="global-trust-title">
            Professional Support Built on Global Trust
          </h2>

          <div className="trust-points-list">
            {trustPoints.map((point, index) => (
              <div key={index} className="trust-point-item">
                <div className="trust-point-icon-box" aria-hidden="true">
                  {point.icon}
                </div>
                <div className="trust-point-text">
                  <h3 className="trust-point-title">{point.title}</h3>
                  <p className="trust-point-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hospital Visual & Patient Testimonial Card */}
        <div className="global-trust-right">
          <div className="trust-testimonial-card">
            {/* Hospital Building Image */}
            <div className="trust-card-image-wrap">
              <img
                src="/hospital_building.jpg"
                alt="Partner International Medical Center Exterior"
                className="trust-card-image"
                loading="lazy"
              />
            </div>

            {/* 5 Golden Stars */}
            <div className="trust-stars-row" aria-label="5 out of 5 stars rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#d5a145"
                  color="#d5a145"
                  strokeWidth={0}
                />
              ))}
            </div>

            {/* Patient Testimonial Quote */}
            <blockquote className="trust-quote">
              "MediBridge made what seemed impossible feel completely manageable. They handled my medical visa and coordinated my travel with such professionalism and care."
            </blockquote>

            {/* Patient Signature */}
            <div className="trust-patient-profile">
              <div className="trust-patient-avatar" aria-hidden="true" />
              <div className="trust-patient-info">
                <span className="patient-name">Sarah Henderson</span>
                <span className="patient-role">INTERNATIONAL PATIENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
