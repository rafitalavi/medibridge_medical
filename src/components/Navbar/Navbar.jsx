import React, { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenConsultation, onOpenHowItWorks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (target, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
    } else if (target === 'destinations') {
      if (onNavigate) onNavigate('destinations');
    } else if (target === 'home' || target === 'about') {
      if (onNavigate) onNavigate('home');
    } else if (target === 'how-it-works') {
      if (onOpenHowItWorks) onOpenHowItWorks();
    } else {
      if (onNavigate) onNavigate('home');
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          aria-label="MedicVisa Homepage"
          onClick={(e) => handleNav('home', e)}
        >
          <Logo size={36} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNav('home', e)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                onClick={(e) => handleNav('services', e)}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#how-it-works"
                className="nav-link"
                onClick={(e) => handleNav('how-it-works', e)}
              >
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#treatments"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenConsultation();
                }}
              >
                Treatments
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#destinations"
                className={`nav-link ${currentPage === 'destinations' ? 'active' : ''}`}
                onClick={(e) => handleNav('destinations', e)}
              >
                Destinations
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-cta desktop-cta">
          <button
            type="button"
            className="btn-pill btn-primary navbar-btn"
            onClick={onOpenConsultation}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a
                href="#about"
                className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNav('home', e)}
              >
                About
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#services"
                className={`mobile-nav-link ${currentPage === 'services' ? 'active' : ''}`}
                onClick={(e) => handleNav('services', e)}
              >
                Services
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={(e) => handleNav('how-it-works', e)}
              >
                How It Works
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#treatments"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Treatments
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#destinations"
                className={`mobile-nav-link ${currentPage === 'destinations' ? 'active' : ''}`}
                onClick={(e) => handleNav('destinations', e)}
              >
                Destinations
              </a>
            </li>
          </ul>
          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="btn-pill btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
            >
              Book Consultation
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
