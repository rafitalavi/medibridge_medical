import React from 'react';
import { Shield, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenConsultation, onOpenHowItWorks }) {
  return (
    <section className="hero-section" id="about">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">
              <Shield size={15} strokeWidth={2.2} />
            </span>
            <span className="hero-badge-text">Trusted Medical Support Platform</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Trusted Medical Travel and{' '}
            <span className="hero-title-highlight">Visa Support</span>, Guided with Care
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            MedicVisa helps patients and families navigate medical travel, treatment
            coordination, and visa support with clarity, professionalism, and peace of mind.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn-pill btn-primary hero-btn-primary"
              onClick={onOpenConsultation}
              id="hero-book-btn"
            >
              <span>Book Consultation</span>
              <ArrowRight size={18} strokeWidth={2.2} className="btn-arrow" />
            </button>

            <button
              type="button"
              className="btn-pill btn-secondary hero-btn-secondary"
              onClick={onOpenHowItWorks}
              id="hero-how-it-works-btn"
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="hero-visual-wrapper">
          {/* Ambient Glow */}
          <div className="hero-ambient-glow" aria-hidden="true" />

          {/* Main Visual Frame */}
          <div className="hero-image-card">
            <img
              src="/hospital_lobby.jpg"
              alt="State-of-the-art international medical center reception lounge"
              className="hero-image"
              loading="eager"
            />

            {/* Floating Overlay 1: Verified Partners Only */}
            <div className="floating-card verified-card">
              <span className="verified-badge-icon" aria-hidden="true">
                <CheckCircle2 size={20} strokeWidth={2.5} color="#16a34a" />
              </span>
              <span className="verified-text">Verified Partners Only</span>
            </div>

            {/* Floating Overlay 2: Compassionate Care */}
            <div className="floating-card care-card">
              <div className="care-header">
                <div className="care-icon-box" aria-hidden="true">
                  <Heart size={16} fill="#ffffff" color="#ffffff" strokeWidth={1} />
                </div>
                <h2 className="care-title">Compassionate Care</h2>
              </div>
              <p className="care-text">
                We don't just handle papers; we handle people. Your comfort and health are our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
