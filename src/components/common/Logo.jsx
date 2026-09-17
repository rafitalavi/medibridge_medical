import React from 'react';

export default function Logo({
  size = 44,
  showText = true,
  showTagline = true,
  isDarkBg = false,
  className = '',
}) {
  const primaryColor = isDarkBg ? '#ffffff' : '#0c3f49';
  const tubeColor = isDarkBg ? '#dbe5e7' : '#263b40';
  const taglineColor = isDarkBg ? '#cbd7d9' : '#55696d';

  return (
    <div
      className={`medibridge-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
    >
      {/* SVG Icon matching the banner exactly */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-label="MediBridge Logo"
      >
        {/* Left arm & top-left vertical arm */}
        <rect x="22" y="44" width="26" height="12" rx="2" fill={primaryColor} />
        <rect x="36" y="30" width="12" height="14" rx="2" fill={primaryColor} />

        {/* Golden Amber Modular Bridge Blocks */}
        {/* Top-right vertical block */}
        <rect x="50" y="30" width="12" height="14" rx="2" fill="#d5a145" />
        {/* Right horizontal arm */}
        <rect x="50" y="44" width="18" height="12" rx="2" fill="#d5a145" />
        {/* Bottom-left vertical block */}
        <rect x="36" y="58" width="12" height="14" rx="2" fill="#d5a145" />
        {/* Bottom-right vertical block */}
        <rect x="50" y="58" width="12" height="14" rx="2" fill="#d5a145" />

        {/* Stethoscope Tubing - curves under left arm, loops high above cross, connects to chestpiece */}
        <path
          d="M 22 54 C 23 63 36 67 47 62 C 49 61 50 56 50 48 L 50 24 C 50 12 60 7 69 11 C 77 15 80 25 78 35 C 76 43 72 50 68 54"
          fill="none"
          stroke={tubeColor}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Stethoscope Chestpiece / Diaphragm */}
        <circle cx="68" cy="55" r="7.5" fill={isDarkBg ? '#0c3f49' : '#ffffff'} stroke={tubeColor} strokeWidth="3" />
        <circle cx="68" cy="55" r="4.5" fill="#d5a145" />
        <circle cx="68" cy="55" r="1.8" fill="#ffffff" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-family-base)',
                fontWeight: 900,
                fontSize: `${size * 0.44}px`,
                letterSpacing: '-0.02em',
                color: primaryColor,
                userSelect: 'none',
              }}
            >
              MEDI
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-base)',
                fontWeight: 900,
                fontSize: `${size * 0.44}px`,
                letterSpacing: '-0.02em',
                color: '#d5a145',
                userSelect: 'none',
              }}
            >
              BRIDGE
            </span>
          </div>

          {showTagline && (
            <span
              style={{
                fontFamily: 'var(--font-family-base)',
                fontWeight: 600,
                fontSize: `${Math.max(size * 0.22, 10)}px`,
                letterSpacing: '0.14em',
                color: taglineColor,
                marginTop: '3px',
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              Travel to Heal
            </span>
          )}
        </div>
      )}
    </div>
  );
}
