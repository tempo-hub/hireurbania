'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Info, Zap } from 'lucide-react';
import { FLEET_MODELS } from '@/lib/routesData';

export default function FareCalculator({ onOpenModal }) {
  const [selectedSeater, setSelectedSeater] = useState(12);
  const [totalKm, setTotalKm] = useState(600);
  const [numDays, setNumDays] = useState(3);

  const currentModel = FLEET_MODELS.find(m => m.seater === selectedSeater) || FLEET_MODELS[1];

  // Calculations
  const minBillableKm = numDays * currentModel.minKmPerDay;
  const billableKm = Math.max(totalKm, minBillableKm);
  const baseKmFare = billableKm * currentModel.ratePerKm;
  const totalDriverAllowance = numDays * currentModel.driverAllowance;
  const estimatedTotal = baseKmFare + totalDriverAllowance;

  return (
    <section className="section-padding" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Calculator size={14} /> Instant Online Estimator</div>
          <h2 className="section-title">Transparent <span className="text-gradient-blue">Fare Calculator</span></h2>
          <p className="section-subtitle">No hidden fees. Calculate your total estimated fare including base kilometer rates and driver allowance instantly.</p>
        </div>

        <div className="calculator-card">
          <div className="calc-controls">
            {/* Seater Variant Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="form-label">Select Seater Variant</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.5rem' }}>
                {[9, 12, 16, 17, 20].map(seater => (
                  <button
                    key={seater}
                    type="button"
                    onClick={() => setSelectedSeater(seater)}
                    style={{
                      padding: '0.6rem 0.4rem',
                      borderRadius: 'var(--radius-sm)',
                      border: selectedSeater === seater ? '2px solid var(--blue-600)' : '1px solid var(--border-light)',
                      background: selectedSeater === seater ? 'var(--blue-100)' : 'var(--bg-light)',
                      color: selectedSeater === seater ? 'var(--blue-600)' : 'var(--text-dark)',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: '0.2s',
                      textAlign: 'center'
                    }}
                  >
                    {seater} Seater
                  </button>
                ))}
              </div>
            </div>

            {/* Total KM Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <span className="form-label">Estimated Roundtrip KM</span>
                <span className="slider-value">{totalKm} KM</span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>200 KM</span>
                <span>1,200 KM</span>
                <span>2,500 KM</span>
              </div>
            </div>

            {/* Days Slider */}
            <div className="slider-group">
              <div className="slider-header">
                <span className="form-label">Trip Duration (Days)</span>
                <span className="slider-value">{numDays} Days</span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>1 Day</span>
                <span>7 Days</span>
                <span>15 Days</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.8rem', color: 'var(--text-body)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Info size={16} style={{ color: 'var(--blue-600)', flexShrink: 0 }} />
              <span>Min. billing cap for outstation trips is {currentModel.minKmPerDay} KM/day. State toll taxes & parking billed actuals.</span>
            </div>
          </div>

          {/* Fare Summary Box */}
          <div className="calc-summary-box">
            <div>
              <div className="calc-price-title">Estimated Total Fare</div>
              <div className="calc-price-amount">₹ {estimatedTotal.toLocaleString('en-IN')}</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', marginBottom: '1.25rem' }}>
                For {currentModel.name} ({numDays} Days / {billableKm} KM)
              </p>

              <ul className="price-breakdown-list">
                <li className="price-breakdown-item">
                  <span>Base Rate:</span>
                  <span>₹{currentModel.ratePerKm}/KM</span>
                </li>
                <li className="price-breakdown-item">
                  <span>Billable KM ({billableKm} KM):</span>
                  <span>₹{baseKmFare.toLocaleString('en-IN')}</span>
                </li>
                <li className="price-breakdown-item">
                  <span>Driver Allowance ({numDays} Days):</span>
                  <span>₹{totalDriverAllowance.toLocaleString('en-IN')}</span>
                </li>
                <li className="price-breakdown-item">
                  <span>Doorstep Pickup & Drop:</span>
                  <span style={{ color: '#00A86B' }}>INCLUDED</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onOpenModal({ vehicle: currentModel.name, estKm: totalKm, days: numDays, fare: estimatedTotal })}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Zap size={18} /> Book This Vehicle Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
