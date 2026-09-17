import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <aside className="topbar" aria-label="Quick contact and location">
      {/* Top emerald accent line */}
      <div className="topbar-accent-strip" />

      <div className="container topbar-container">
        {/* Left: Contact Information */}
        <div className="topbar-left">
          <a href="tel:+8801711083126" className="topbar-item" title="Call our support lines">
            <span className="topbar-icon" aria-hidden="true">
              <Phone size={14} fill="#d5a145" color="#d5a145" />
            </span>
            <span className="topbar-text">+880 1711-083126 / +880 1805-209666</span>
          </a>

          <a href="mailto:medibridgetravel@gmail.com" className="topbar-item" title="Email us">
            <span className="topbar-icon" aria-hidden="true">
              <Mail size={14} color="#d5a145" />
            </span>
            <span className="topbar-text">medibridgetravel@gmail.com</span>
          </a>
        </div>

        {/* Right: Office Location */}
        <div className="topbar-right">
          <div className="topbar-item">
            <span className="topbar-icon" aria-hidden="true">
              <MapPin size={14} color="#d5a145" />
            </span>
            <span className="topbar-text">Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
