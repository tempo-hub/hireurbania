'use client';

import { useState } from 'react';
import { Star, Shield, Wind, Wifi, Search, Calculator, Compass, MapPin, Navigation, Bus, Calendar, CheckCircle2, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { CITY_HUBS } from '@/lib/routesData';

export default function HeroSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('outstation');
  const [pickup, setPickup] = useState('');
  const [dest, setDest] = useState('');
  const [vehicle, setVehicle] = useState('Force Urbania 12 Seater');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal({ tripType: activeTab, origin: pickup, destination: dest, vehicle, date });
  };

  return (
    <section className="hero-section" id="hero">
      <img src="/images/hero.png" alt="Force Urbania Luxury Tempo Traveller Rental India" className="hero-bg" />
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Left */}
          <div className="hero-content">
            <div className="badge-pill">
              <Star size={14} fill="#FFB800" color="#FFB800" /> #1 Rated Force Urbania Fleet in India
            </div>

            <h1>
              Book <span className="text-gradient-gold">Ultra Luxury</span> Force Urbania Tempo Traveller
            </h1>

            <p className="hero-desc">
              First-class luxury road trips across Delhi, Noida, Indore, Ujjain, Jaipur, Rishikesh & 100+ outstation routes. Equipped with air-suspension, Italian leather recliners, Android Smart TV & certified hill drivers.
            </p>

            <div className="hero-feature-tags">
              <span className="feature-tag"><ShieldCheck size={16} /> Air Suspension Comfort</span>
              <span className="feature-tag"><Wind size={16} /> Individual Roof AC Vents</span>
              <span className="feature-tag"><Wifi size={16} /> Smart TV & High-Speed Charging</span>
              <span className="feature-tag"><Award size={16} /> Certified Mountain Drivers</span>
            </div>

            {/* Trust Stats Bar */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '2rem',
              padding: '1rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              maxWidth: '520px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF', lineHeight: 1 }}>4.9 ★</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '0.2rem' }}>2,500+ Verified Trips</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '0.2rem' }}>On-Time Guarantee</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFF', lineHeight: 1 }}>₹0</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '0.2rem' }}>Hidden Charges</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#calculator" className="btn btn-primary">
                <Calculator size={18} /> Calculate Fare Online
              </a>
              <a href="#fleet" className="btn btn-outline">
                <Compass size={18} /> View Fleet Variants
              </a>
            </div>
          </div>

          {/* Quick Query Widget Right */}
          <div className="quick-booking-card">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('outstation')}
                style={{
                  flex: 1,
                  padding: '0.45rem 0.5rem',
                  borderRadius: 'var(--radius-xs)',
                  border: 'none',
                  background: activeTab === 'outstation' ? 'var(--blue-600)' : 'transparent',
                  color: activeTab === 'outstation' ? '#FFF' : 'var(--text-body)',
                  fontWeight: '600',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                Outstation Round Trip
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('local')}
                style={{
                  flex: 1,
                  padding: '0.45rem 0.5rem',
                  borderRadius: 'var(--radius-xs)',
                  border: 'none',
                  background: activeTab === 'local' ? 'var(--blue-600)' : 'transparent',
                  color: activeTab === 'local' ? '#FFF' : 'var(--text-body)',
                  fontWeight: '600',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: '0.2s'
                }}
              >
                Local / Sightseeing
              </button>
            </div>

            <div className="card-header-title">
              <Star size={18} style={{ color: 'var(--orange)' }} /> Instant Fare & Availability
            </div>
            <p className="card-header-sub">Get transparent quotes in 60 seconds with 100% door-step pickup</p>

            <form onSubmit={handleSubmit}>
              <div className="booking-form-grid">
                <div className="form-group">
                  <label className="form-label"><MapPin size={14} /> Pickup City</label>
                  <select 
                    className="form-select" 
                    value={pickup} 
                    onChange={(e) => setPickup(e.target.value)} 
                    required
                  >
                    <option value="">Select Pickup Hub</option>
                    {CITY_HUBS.map(hub => (
                      <option key={hub.slug} value={hub.name}>{hub.name} ({hub.state})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label"><Navigation size={14} /> Destination</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. Manali / Kedarnath / Ujjain"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    required={activeTab === 'outstation'}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label"><Bus size={14} /> Seating Capacity</label>
                  <select 
                    className="form-select"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    required
                  >
                    <option value="Force Urbania 9 Seater">9 Seater VIP Recliner</option>
                    <option value="Force Urbania 12 Seater">12 Seater Executive</option>
                    <option value="Force Urbania 16 Seater">16 Seater Premium</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label"><Calendar size={14} /> Travel Date</label>
                  <input 
                    type="date"
                    className="form-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Search size={18} /> Check Availability & Instant Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
