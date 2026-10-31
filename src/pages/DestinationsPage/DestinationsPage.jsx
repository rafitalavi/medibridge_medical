import React from 'react';
import { Globe, ArrowRight, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';
import './DestinationsPage.css';

export default function DestinationsPage({ onEnquireDestination }) {
  const destinations = [
    {
      id: 'thailand',
      region: 'Asia',
      name: 'Thailand',
      image: '/germany_destination.jpg',
      description:
        'Renowned for clinical precision, high-tech oncology, and cardiac surgery. German healthcare is synonymous with efficiency and advanced research.',
      highlights: [
        'Academic medical centers',
        'Specialized robotic surgery',
      ],
    },
    {
      id: 'china',
      region: 'Asia',
      name: 'China',
      image: '/turkey_destination.jpg',
      description:
        'A global hub for cosmetic procedures, dental work, and fertility treatments. Offering premium JCI-accredited facilities with competitive pricing.',
      highlights: [
        'Modern boutique clinics',
        'High English proficiency',
      ],
    },
    {
      id: 'malaysia',
      region: 'Asia',
      name: 'Malaysia',
      image: '/uae_destination.jpg',
      description:
        'Luxury medical travel destination featuring world-class hospital brands and highly specialized international medical teams.',
      highlights: [
        'Ultra-modern infrastructure',
        'Medical visa city programs',
      ],
    },
  ];

  return (
    <div className="destinations-page">
      {/* Top Header */}
      <section className="destinations-header-section">
        <div className="container">
          <h1 className="destinations-page-title">World-Class Medical Destinations</h1>
          <p className="destinations-page-subtitle">
            We support medical travel to carefully selected countries recognized globally
            for their medical excellence, safety, and advanced healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* 3 Destination Cards Section */}
      <section className="destinations-grid-section">
        <div className="container">
          <div className="destinations-grid">
            {destinations.map((dest) => (
              <div key={dest.id} className="destination-card">
                {/* Image Container with Floating Region Badge */}
                <div className="dest-image-wrap">
                  <img
                    src={dest.image}
                    alt={`${dest.name} medical travel landscape`}
                    className="dest-image"
                    loading="lazy"
                  />
                  <span className="dest-region-badge">{dest.region}</span>
                </div>

                {/* Content */}
                <div className="dest-card-body">
                  <h2 className="dest-card-name">{dest.name}</h2>
                  <p className="dest-card-desc">{dest.description}</p>

                  <ul className="dest-highlights-list">
                    {dest.highlights.map((item, idx) => (
                      <li key={idx} className="dest-highlight-item">
                        <CheckCircle2
                          size={15}
                          className="dest-check-icon"
                          color="#00a76f"
                          strokeWidth={2.2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="btn-pill dest-enquire-btn"
                    onClick={() => onEnquireDestination && onEnquireDestination(dest.name)}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Global Network (Using Main Deep Teal & Emerald Brand Theme) */}
      <section className="global-network-section">
        <div className="container network-container">
          <div className="network-icon-box" aria-hidden="true">
            <Globe size={28} strokeWidth={1.8} />
          </div>

          <h3 className="network-title">Comprehensive Global Network</h3>

          <p className="network-description">
            Beyond these featured destinations, we maintain coordination partnerships in India,
            Thailand, and the United Kingdom. Every destination is vetted for healthcare quality,
            safety, and patient rights.
          </p>

          <div className="network-badges-row">
            <div className="network-badge">
              <ShieldCheck size={16} color="#00a76f" />
              <span>50+ Vetted Clinics</span>
            </div>
            <div className="network-badge">
              <Scale size={16} color="#00a76f" />
              <span>Full Legal Compliance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
