'use client';

import { useState } from 'react';
import FareCalculator from '@/components/FareCalculator';
import BookingModal from '@/components/BookingModal';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function UrbaniaFareCalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState({});

  const handleOpenModal = (data = {}) => {
    setPrefillData(data);
    setModalOpen(true);
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="badge-pill">
              <span>Urbania Fare Calculator</span>
            </div>
            <h1 className="section-title">
              Calculate Your <span className="text-gradient-blue">Urbania Trip Fare</span>
            </h1>
            <p className="section-subtitle">
              Estimate your fare for Force Urbania bookings with transparent per-km pricing,
              driver allowance, and trip duration details.
            </p>
          </div>
        </div>
      </section>

      <FareCalculator onOpenModal={handleOpenModal} />
      <WhyChooseUs />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillData={prefillData}
      />
    </main>
  );
}
