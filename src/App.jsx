import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutOverview from './components/AboutOverview/AboutOverview';
import ServicesSection from './components/ServicesSection/ServicesSection';
import GlobalTrust from './components/GlobalTrust/GlobalTrust';
import TrustBar from './components/TrustBar/TrustBar';
import Footer from './components/Footer/Footer';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import DestinationsPage from './pages/DestinationsPage/DestinationsPage';
import ConsultationModal from './components/ConsultationModal/ConsultationModal';
import HowItWorksModal from './components/HowItWorksModal/HowItWorksModal';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('');
  const [selectedDestinationForModal, setSelectedDestinationForModal] = useState('');

  // Sync hash routing with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('destinations')) {
        setCurrentPage('destinations');
      } else if (hash.includes('services') && !hash.includes('#services-anchor')) {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };

    const initialHash = window.location.hash.toLowerCase();
    if (initialHash.includes('destinations')) {
      setCurrentPage('destinations');
    } else if (initialHash.includes('services')) {
      setCurrentPage('services');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#home' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireService = (serviceName) => {
    setSelectedServiceForModal(serviceName);
    setSelectedDestinationForModal('');
    setIsConsultationOpen(true);
  };

  const handleEnquireDestination = (destName) => {
    setSelectedDestinationForModal(destName);
    setSelectedServiceForModal('');
    setIsConsultationOpen(true);
  };

  const handleOpenGeneralConsultation = () => {
    setSelectedServiceForModal('');
    setSelectedDestinationForModal('');
    setIsConsultationOpen(true);
  };

  return (
    <div className="medibridge-app">
      {/* Clean Main Navigation Bar (Header) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={handleOpenGeneralConsultation}
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
      />

      {/* Conditional Page Rendering */}
      {currentPage === 'home' && (
        <main>
          {/* Hero Section */}
          <Hero
            onOpenConsultation={handleOpenGeneralConsultation}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
          />

          {/* Bridging the Gap in Global Healthcare */}
          <AboutOverview />

          {/* Support Every Step of the Way (Services Preview) */}
          <ServicesSection
            onSelectService={() => navigateTo('services')}
            onNavigateToServicesPage={() => navigateTo('services')}
          />

          {/* Professional Support Built on Global Trust */}
          <GlobalTrust />

          {/* Trust & Accreditations */}
          <TrustBar />
        </main>
      )}

      {currentPage === 'services' && (
        <main>
          {/* Dedicated Services Page */}
          <ServicesPage
            onEnquire={handleEnquireService}
          />
        </main>
      )}

      {currentPage === 'destinations' && (
        <main>
          {/* Dedicated Destinations Page */}
          <DestinationsPage
            onEnquireDestination={handleEnquireDestination}
          />
        </main>
      )}

      {/* Footer with Contact Strip and Emerald Accent Line */}
      <Footer
        onOpenConsultation={handleOpenGeneralConsultation}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialSpecialty={selectedServiceForModal}
        initialDestination={selectedDestinationForModal}
      />

      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onProceedToConsultation={handleOpenGeneralConsultation}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
