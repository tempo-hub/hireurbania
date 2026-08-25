'use client';

import { useState } from 'react';
import { FLEET_MODELS } from '@/lib/routesData';
import { Crown, Zap, Check, Users, Luggage, Fuel, ShieldAlert } from 'lucide-react';

export default function FleetShowcase({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const filteredModels = FLEET_MODELS.filter(model => {
    if (filter === 'all') return true;
    if (filter === '9') return model.seater === 9;
    if (filter === '12-16') return model.seater === 12 || model.seater === 16;
    if (filter === '17-20') return model.seater === 17 || model.seater === 20;
    return true;
  });

  return (
    <section className="section-padding" id="fleet" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Crown size={14} /> Official Force Urbania Range</div>
          <h2 className="section-title">Explore Force Urbania <span className="text-gradient-blue">Seater Variants</span></h2>
          <p className="section-subtitle">From 9-seater luxury VIP recliners to 20-seater Maharaja coaches, choose the perfect seating arrangement for your journey.</p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifySelf: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
          {[
            { id: 'all', label: 'All Fleet Models' },
            { id: '9', label: '9 Seater VIP Recliner' },
            { id: '12-16', label: '12 - 16 Seater Executive' },
            { id: '17-20', label: '17 - 20 Seater Maharaja' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`filter-pill ${filter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="fleet-grid">
          {filteredModels.map(model => (
            <div key={model.id} className="fleet-card">
              <div className="fleet-img-wrapper">
                <img src={model.image} alt={`${model.name} Rental`} className="fleet-img" />
                <span className="fleet-badge">
                  <Crown size={12} style={{ display: 'inline', marginRight: '4px' }} /> {model.capacity}
                </span>
              </div>
              <div className="fleet-body">
                <h3 className="fleet-title">{model.name}</h3>
                <p className="fleet-tagline">{model.tagline}</p>

                <div className="fleet-specs-grid">
                  <div className="spec-item"><Users size={14} /> <strong>Seats:</strong> {model.specs.seatingConfig}</div>
                  <div className="spec-item"><Luggage size={14} /> <strong>Trunk:</strong> {model.luggageCapacity}</div>
                  <div className="spec-item"><Fuel size={14} /> <strong>Engine:</strong> 115 HP Diesel</div>
                  <div className="spec-item"><ShieldAlert size={14} /> <strong>Comfort:</strong> Air Springs</div>
                </div>

                <div className="fleet-features-tags">
                  {model.features.slice(0, 4).map((f, i) => (
                    <span key={i} className="mini-tag"><Check size={12} /> {f}</span>
                  ))}
                </div>

                <div className="fleet-footer">
                  <div className="fleet-rate">
                    <span className="rate-amount">₹{model.ratePerKm}</span>
                    <span className="rate-label">per km (Min {model.minKmPerDay} km/day)</span>
                  </div>
                  <button 
                    onClick={() => onOpenModal({ vehicle: model.name })}
                    className="btn btn-primary btn-sm"
                  >
                    <Zap size={14} /> Book Fleet
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
