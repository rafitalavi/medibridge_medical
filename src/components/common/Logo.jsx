import React from 'react';

export default function Logo({ size = 38, showText = true, className = '' }) {
  return (
    <div className={`medic-visa-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Shield background in deep teal */}
        <path
          d="M22 3.5C22 3.5 10 7.5 10 16.5C10 27.5 18 36.5 22 40.5C26 36.5 34 27.5 34 16.5C34 7.5 22 3.5 22 3.5Z"
          fill="#0c3f49"
        />
        {/* Medical Heart Motif */}
        <path
          d="M22 13C20.3 11 17.5 11 15.8 12.8C14 14.7 14 17.7 16 19.8L22 25.5L28 19.8C30 17.7 30 14.7 28.2 12.8C26.5 11 23.7 11 22 13Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Medical Cross Accent in emerald green */}
        <path
          d="M22 15V21M19 18H25"
          stroke="#00a76f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-family-base)',
            fontWeight: 800,
            fontSize: '1.45rem',
            letterSpacing: '-0.03em',
            color: 'var(--color-brand-primary)',
            userSelect: 'none',
          }}
        >
          Medic<span style={{ color: 'var(--color-brand-emerald)' }}>Visa</span>
        </span>
      )}
    </div>
  );
}
