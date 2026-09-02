'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FleetShowcase from '@/components/FleetShowcase';
import FareCalculator from '@/components/FareCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import RouteExplorer from '@/components/RouteExplorer';
import TourPackages from '@/components/TourPackages';
import { ReviewsSection, FaqSection } from '@/components/ReviewsSection';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState({});

  const handleOpenModal = (data = {}) => {
    setPrefillData(data);
    setModalOpen(true);
  };

  return (
    <main>
      <HeroSection onOpenModal={handleOpenModal} />
      <FleetShowcase onOpenModal={handleOpenModal} />
      <FareCalculator onOpenModal={handleOpenModal} />
      <WhyChooseUs />
      <RouteExplorer onOpenModal={handleOpenModal} />
      <TourPackages onOpenModal={handleOpenModal} />
      <ReviewsSection />
      <FaqSection />
      <BookingModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        prefillData={prefillData} 
      />
    </main>
  );
}
