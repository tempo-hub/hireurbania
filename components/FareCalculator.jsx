'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Info, Zap } from 'lucide-react';
import { FLEET_MODELS } from '@/lib/routesData';

export default function FareCalculator({ onOpenModal }) {
  const [selectedSeater, setSelectedSeater] = useState(12);
  const [totalKm, setTotalKm] = useState(600);
  const [numDays, setNumDays] = useState(3);

  const currentModel =
    FLEET_MODELS.find((m) => m.seater === selectedSeater) || FLEET_MODELS[1];

  // Calculations
  const minBillableKm = numDays * currentModel.minKmPerDay;
  const billableKm = Math.max(totalKm, minBillableKm);
  const baseKmFare = billableKm * currentModel.ratePerKm;
  const totalDriverAllowance = numDays * currentModel.driverAllowance;
  const estimatedTotal = baseKmFare + totalDriverAllowance;

  return (
    <section className="section-padding fare-calculator-section" id="calculator">
      <div className="container fare-calculator-container">

        {/* Header */}
        <div className="section-header fare-calculator-header">
          <div className="badge-pill">
            <Calculator size={14} />
            <span>Instant Online Estimator</span>
          </div>

          <h2 className="section-title">
            Transparent{' '}
            <span className="text-gradient-blue">Fare Calculator</span>
          </h2>

          <p className="section-subtitle">
            No hidden fees. Calculate your total estimated fare including base
            kilometer rates and driver allowance instantly.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="calculator-card">

          {/* Controls */}
          <div className="calc-controls">

            {/* Seater Variant Selector */}
            <div className="seater-selector-group">
              <label className="form-label">
                Select Seater Variant
              </label>

              <div className="seater-options">
                {[9, 12, 16, 17, 20].map((seater) => (
                  <button
                    key={seater}
                    type="button"
                    onClick={() => setSelectedSeater(seater)}
                    className={`seater-option ${
                      selectedSeater === seater ? 'active' : ''
                    }`}
                  >
                    {seater} Seater
                  </button>
                ))}
              </div>
            </div>

            {/* Total KM Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <span className="form-label">
                  Estimated Roundtrip KM
                </span>

                <span className="slider-value">
                  {totalKm} KM
                </span>
              </div>

              <input
                type="range"
                min="200"
                max="2500"
                step="50"
                value={totalKm}
                onChange={(e) => setTotalKm(Number(e.target.value))}
                className="custom-slider"
              />

              <div className="slider-range-labels">
                <span>200 KM</span>
                <span>1,200 KM</span>
                <span>2,500 KM</span>
              </div>
            </div>

            {/* Days Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <span className="form-label">
                  Trip Duration (Days)
                </span>

                <span className="slider-value">
                  {numDays} Days
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={numDays}
                onChange={(e) => setNumDays(Number(e.target.value))}
                className="custom-slider"
              />

              <div className="slider-range-labels">
                <span>1 Day</span>
                <span>7 Days</span>
                <span>15 Days</span>
              </div>
            </div>

            {/* Information */}
            <div className="calculator-info">
              <Info size={16} className="calculator-info-icon" />

              <span>
                Min. billing cap for outstation trips is{' '}
                {currentModel.minKmPerDay} KM/day. State toll taxes & parking
                billed actuals.
              </span>
            </div>
          </div>

          {/* Fare Summary */}
          <div className="calc-summary-box">

            <div className="calc-summary-content">

              <div className="calc-price-title">
                Estimated Total Fare
              </div>

              <div className="calc-price-amount">
                ₹ {estimatedTotal.toLocaleString('en-IN')}
              </div>

              <p className="calc-price-subtitle">
                For {currentModel.name} ({numDays} Days / {billableKm} KM)
              </p>

              <ul className="price-breakdown-list">

                <li className="price-breakdown-item">
                  <span>Base Rate:</span>
                  <span>₹{currentModel.ratePerKm}/KM</span>
                </li>

                <li className="price-breakdown-item">
                  <span>Billable KM ({billableKm} KM):</span>
                  <span>
                    ₹{baseKmFare.toLocaleString('en-IN')}
                  </span>
                </li>

                <li className="price-breakdown-item">
                  <span>
                    Driver Allowance ({numDays} Days):
                  </span>

                  <span>
                    ₹{totalDriverAllowance.toLocaleString('en-IN')}
                  </span>
                </li>

                <li className="price-breakdown-item">
                  <span>Doorstep Pickup & Drop:</span>

                  <span className="included-text">
                    INCLUDED
                  </span>
                </li>

              </ul>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenModal({
                  vehicle: currentModel.name,
                  estKm: totalKm,
                  days: numDays,
                  fare: estimatedTotal,
                })
              }
              className="btn btn-primary calculator-book-btn"
            >
              <Zap size={18} />
              <span>Book This Vehicle Now</span>
              <ArrowRight size={16} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}