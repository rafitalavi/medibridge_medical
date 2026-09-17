import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Logo from '../common/Logo';
import './Footer.css';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="footer-wrapper">
      {/* Contact Bar with Emerald Accent Line & Golden Icons (from user reference) */}
      <div className="footer-contact-strip">
        <div className="footer-emerald-strip" />
        <div className="container footer-contact-container">
          <div className="footer-contact-left">
            <a href="tel:+8801711083126" className="footer-contact-item" title="Call support">
              <span className="contact-icon-gold" aria-hidden="true">
                <Phone size={14} fill="#d5a145" color="#d5a145" />
              </span>
              <span className="contact-text">+880 1711-083126 / +880 1805-209666</span>
            </a>

            <a href="mailto:medibridgetravel@gmail.com" className="footer-contact-item" title="Email support">
              <span className="contact-icon-gold" aria-hidden="true">
                <Mail size={14} color="#d5a145" />
              </span>
              <span className="contact-text">medibridgetravel@gmail.com</span>
            </a>
          </div>

          <div className="footer-contact-right">
            <div className="footer-contact-item">
              <span className="contact-icon-gold" aria-hidden="true">
                <MapPin size={14} color="#d5a145" />
              </span>
              <span className="contact-text">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main">
        <div className="container footer-main-container">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrap">
              <Logo size={36} showText={false} />
              <span className="footer-brand-name">
                Medic<span className="emerald-text">Visa</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              Your trusted partner for international medical travel, hospital coordination, and expedited medical visa assistance. Connecting patients in Bangladesh and worldwide to top-tier healthcare.
            </p>
            <div className="footer-support-badge">
              <ShieldCheck size={16} color="#00a76f" />
              <span>Government Approved & Hospital Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About MedicVisa</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#treatments">Specialist Treatments</a></li>
              <li><a href="#destinations">Global Destinations</a></li>
            </ul>
          </div>

          {/* Medical Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Medical Visa Guidance</a></li>
              <li><a href="#services">Hospital & Doctor Match</a></li>
              <li><a href="#services">Travel & Hotel Logistics</a></li>
              <li><a href="#services">Interpreter & Local Transit</a></li>
              <li><a href="#services">Post-Treatment Follow-up</a></li>
            </ul>
          </div>

          {/* Consultation CTA Column */}
          <div className="footer-col footer-col-cta">
            <h4 className="footer-col-title">Start Your Journey</h4>
            <p className="footer-cta-text">
              Have questions about medical visas or hospital options? Speak directly with our care coordinators today.
            </p>
            <button
              type="button"
              className="btn-pill footer-cta-btn"
              onClick={onOpenConsultation}
            >
              <span>Book Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} MedicVisa / MediBridge Travel. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            MedicVisa facilitates logistics, hospital appointments, and visa documentation. We do not provide direct medical advice or clinical diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}
