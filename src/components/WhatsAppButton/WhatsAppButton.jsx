import React, { useState } from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '8801805209666';
  const displayPhone = '01805209666';
  const defaultMessage = encodeURIComponent(
    'Hello MediBridge, I would like to inquire about medical travel, hospital coordination, and visa support.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      className="whatsapp-float-container"
      aria-label="WhatsApp Care Coordinator"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expandable / hover pill label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pill-badge"
        id="whatsapp-pill-cta"
      >
        <span className="whatsapp-online-dot" aria-hidden="true" />
        <span className="whatsapp-pill-text">
          <strong>Chat on WhatsApp</strong>
          <small className="whatsapp-pill-number">{displayPhone}</small>
        </span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        id="whatsapp-float-btn"
        aria-label={`Chat with MediBridge on WhatsApp at ${displayPhone}`}
      >
        {/* Animated Ripple Pulse Rings */}
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        <span className="whatsapp-pulse-ring-2" aria-hidden="true" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="whatsapp-icon-svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C8.268 2 2 8.268 2 16c0 2.68.75 5.185 2.052 7.32L2.5 29.5l6.388-1.52A13.923 13.923 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm-1.07 7.025c.315 0 .63.003.905.016.326.015.688.083.99.73.376.804 1.284 3.128 1.396 3.356.113.228.188.496.037.795-.15.3-.225.485-.45.748-.225.263-.473.587-.676.788-.225.225-.46.469-.197.92.263.45 1.168 1.928 2.505 3.12 1.718 1.532 3.167 2.006 3.618 2.231.45.225.713.188.975-.113.263-.3.1126-1.313 1.426-1.763.3-.45.6-.375.976-.225.375.15 2.378 1.123 2.791 1.329.413.206.688.31.788.479.1.169.1 1.002-.239 1.958-.338.956-1.956 1.874-2.707 1.922-.713.045-1.385.197-4.664-1.127-3.955-1.597-6.474-5.63-6.671-5.892-.197-.263-1.602-2.133-1.602-4.068 0-1.936 1.013-2.888 1.373-3.284.36-.395.787-.495 1.05-.495z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </aside>
  );
}
