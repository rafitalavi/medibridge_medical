import React from 'react';
import logoMarkLight from '../../assets/logo-mark.png';
import logoMarkDark from '../../assets/logo-mark-dark.png';
import logoFullLight from '../../assets/logo.png';
import logoFullDark from '../../assets/logo-dark.png';

export default function Logo({
  size = 52,
  showText = true,
  showTagline = true,
  isDarkBg = false,
  layout = 'horizontal', // 'horizontal' | 'stacked'
  className = '',
}) {
  const primaryTeal = isDarkBg ? '#ffffff' : '#05686D';
  const brandGold = '#EDB141';
  const taglineColor = isDarkBg ? '#a4c2c6' : '#05686D';

  const markSrc = isDarkBg ? logoMarkDark : logoMarkLight;
  const fullLogoSrc = isDarkBg ? logoFullDark : logoFullLight;

  if (layout === 'stacked' || layout === 'full') {
    return (
      <div
        className={`medibridge-logo-stacked ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <img
          src={fullLogoSrc}
          alt="MediBridge - Travel to Heal"
          style={{
            height: `${size}px`,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
          loading="eager"
        />
      </div>
    );
  }

  // Horizontal Layout: Mark on left + MEDIBRIDGE text & tagline on right
  const markHeight = size;
  // Aspect ratio of the emblem mark is approximately 199 / 239 (~0.83)
  const markWidth = Math.round(markHeight * 0.83);

  return (
    <div
      className={`medibridge-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${Math.max(10, Math.round(size * 0.22))}px`,
        textDecoration: 'none',
      }}
    >
      {/* Official Stethoscope & Medical Cross Emblem */}
      <img
        src={markSrc}
        alt="MediBridge Emblem"
        style={{
          height: `${markHeight}px`,
          width: `${markWidth}px`,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
        }}
        loading="eager"
      />

      {/* Brand Typography matching official logo */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-family-base, sans-serif)',
                fontWeight: 800,
                fontSize: `${Math.round(size * 0.44)}px`,
                letterSpacing: '-0.02em',
                color: primaryTeal,
                userSelect: 'none',
              }}
            >
              MEDI
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-base, sans-serif)',
                fontWeight: 800,
                fontSize: `${Math.round(size * 0.44)}px`,
                letterSpacing: '-0.02em',
                color: brandGold,
                userSelect: 'none',
              }}
            >
              BRIDGE
            </span>
          </div>

          {showTagline && (
            <span
              style={{
                fontFamily: 'var(--font-family-base, sans-serif)',
                fontWeight: 600,
                fontSize: `${Math.max(Math.round(size * 0.19), 10)}px`,
                letterSpacing: '0.18em',
                color: taglineColor,
                marginTop: `${Math.max(3, Math.round(size * 0.08))}px`,
                textTransform: 'uppercase',
                userSelect: 'none',
                opacity: isDarkBg ? 0.9 : 0.85,
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
