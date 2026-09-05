'use client';

import { useState } from 'react';
import {
  Star,
  Wind,
  Wifi,
  Search,
  Calculator,
  Compass,
  MapPin,
  Navigation,
  Bus,
  Calendar,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { CITY_HUBS } from '@/lib/routesData';

export default function HeroSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('outstation');
  const [pickup, setPickup] = useState('');
  const [dest, setDest] = useState('');
  const [vehicle, setVehicle] = useState('Force Urbania 12 Seater');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onOpenModal({
      tripType: activeTab,
      origin: pickup,
      destination: dest,
      vehicle,
      date,
    });
  };

  return (
    <section className="hero-section" id="hero">
      <img
        src="/images/hero.png"
        alt="Force Urbania Luxury Tempo Traveller Rental India"
        className="hero-bg"
      />

      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-grid">

          {/* =========================
              HERO CONTENT
          ========================== */}
          <div className="hero-content">

            <div className="badge-pill hero-badge">
              <Star
                size={14}
                fill="#FFB800"
                color="#FFB800"
              />
              <span>#1 Rated Force Urbania Fleet in India</span>
            </div>

            <h1>
              Book{' '}
              <span className="text-gradient-gold">
                Ultra Luxury
              </span>{' '}
              Force Urbania Tempo Traveller
            </h1>

            <p className="hero-desc">
              First-class luxury road trips across Delhi, Noida,
              Indore, Ujjain, Jaipur, Rishikesh & 100+ outstation
              routes. Equipped with air-suspension, Italian leather
              recliners, Android Smart TV & certified hill drivers.
            </p>

            {/* Feature Tags */}
            <div className="hero-feature-tags">

              <span className="feature-tag">
                <ShieldCheck size={16} />
                <span>Air Suspension Comfort</span>
              </span>

              <span className="feature-tag">
                <Wind size={16} />
                <span>Individual Roof AC Vents</span>
              </span>

              <span className="feature-tag">
                <Wifi size={16} />
                <span>Smart TV & High-Speed Charging</span>
              </span>

              <span className="feature-tag">
                <Award size={16} />
                <span>Certified Mountain Drivers</span>
              </span>

            </div>

            {/* Trust Stats */}
            <div className="hero-trust-stats">

              <div className="trust-stat">
                <div className="trust-stat-value">
                  4.9 ★
                </div>

                <div className="trust-stat-label">
                  2,500+ Verified Trips
                </div>
              </div>

              <div className="trust-stat trust-stat-bordered">
                <div className="trust-stat-value">
                  100%
                </div>

                <div className="trust-stat-label">
                  On-Time Guarantee
                </div>
              </div>

              <div className="trust-stat trust-stat-bordered">
                <div className="trust-stat-value">
                  ₹0
                </div>

                <div className="trust-stat-label">
                  Hidden Charges
                </div>
              </div>

            </div>

            {/* Hero Buttons */}
            <div className="hero-actions">

              <a
                href="#calculator"
                className="btn btn-primary"
              >
                <Calculator size={18} />
                <span>Calculate Fare Online</span>
              </a>

              <a
                href="#fleet"
                className="btn btn-outline"
              >
                <Compass size={18} />
                <span>View Fleet Variants</span>
              </a>

            </div>
          </div>

          {/* =========================
              QUICK BOOKING CARD
          ========================== */}
          <div className="quick-booking-card">

            {/* Tabs */}
            <div className="booking-tabs">

              <button
                type="button"
                onClick={() => setActiveTab('outstation')}
                className={`booking-tab ${
                  activeTab === 'outstation' ? 'active' : ''
                }`}
              >
                Outstation Round Trip
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('local')}
                className={`booking-tab ${
                  activeTab === 'local' ? 'active' : ''
                }`}
              >
                Local / Sightseeing
              </button>

            </div>

            {/* Card Header */}
            <div className="card-header-title">
              <Star size={18} />
              <span>Instant Fare & Availability</span>
            </div>

            <p className="card-header-sub">
              Get transparent quotes in 60 seconds with
              100% door-step pickup
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              <div className="booking-form-grid">

                {/* Pickup */}
                <div className="form-group">

                  <label className="form-label">
                    <MapPin size={14} />
                    <span>Pickup City</span>
                  </label>

                  <select
                    className="form-select"
                    value={pickup}
                    onChange={(e) =>
                      setPickup(e.target.value)
                    }
                    required
                  >
                    <option value="">
                      Select Pickup Hub
                    </option>

                    {CITY_HUBS.map((hub) => (
                      <option
                        key={hub.slug}
                        value={hub.name}
                      >
                        {hub.name} ({hub.state})
                      </option>
                    ))}
                  </select>

                </div>

                {/* Destination */}
                <div className="form-group">

                  <label className="form-label">
                    <Navigation size={14} />
                    <span>Destination</span>
                  </label>

                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Manali / Kedarnath / Ujjain"
                    value={dest}
                    onChange={(e) =>
                      setDest(e.target.value)
                    }
                    required={activeTab === 'outstation'}
                  />

                </div>

                {/* Seating */}
                <div className="form-group">

                  <label className="form-label">
                    <Bus size={14} />
                    <span>Seating Capacity</span>
                  </label>

                  <select
                    className="form-select"
                    value={vehicle}
                    onChange={(e) =>
                      setVehicle(e.target.value)
                    }
                    required
                  >
                    <option value="Force Urbania 9 Seater">
                      9 Seater VIP Recliner
                    </option>

                    <option value="Force Urbania 12 Seater">
                      12 Seater Executive
                    </option>

                    <option value="Force Urbania 16 Seater">
                      16 Seater Premium
                    </option>
                  </select>

                </div>

                {/* Date */}
                <div className="form-group">

                  <label className="form-label">
                    <Calendar size={14} />
                    <span>Travel Date</span>
                  </label>

                  <input
                    type="date"
                    className="form-input"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    required
                  />

                </div>

              </div>

              <button
                type="submit"
                className="btn btn-primary booking-submit-btn"
              >
                <Search size={18} />
                <span>
                  Check Availability & Instant Quote
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}