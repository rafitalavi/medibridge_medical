import React from 'react';
import { Award, CheckCircle, Globe2, HeartPulse, Clock } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  const stats = [
    {
      value: '1,200+',
      label: 'Accredited Partner Hospitals',
      icon: <Award size={20} color="#0f3b5c" />,
    },
    {
      value: '99.4%',
      label: 'Visa Approval Success Rate',
      icon: <CheckCircle size={20} color="#16a34a" />,
    },
    {
      value: '45+',
      label: 'Global Medical Destinations',
      icon: <Globe2 size={20} color="#0f3b5c" />,
    },
    {
      value: '24/7',
      label: 'Dedicated Care Coordinator',
      icon: <Clock size={20} color="#2563eb" />,
    },
  ];

  return (
    <section className="trust-section" id="services">
      <div className="container trust-container">
        <div className="trust-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="accreditation-row">
          <span className="accreditation-label">Accreditation Standards & Global Compliance:</span>
          <div className="badge-pill-group">
            <span className="pill-badge">JCI Accredited Centers</span>
            <span className="pill-badge">ISO 9001:2015 Certified</span>
            <span className="pill-badge">HIPAA Compliant Data</span>
            <span className="pill-badge">MTQUA Top Ranked</span>
          </div>
        </div>
      </div>
    </section>
  );
}
