'use client';

import { TOUR_PACKAGES } from '@/lib/routesData';
import { Calendar, CheckCircle2, MessageSquare, Compass, ShieldAlert } from 'lucide-react';

export default function TourPackages({ onOpenModal }) {
  return (
    <section className="section-padding" id="packages" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Compass size={14} /> Curated Holiday Itineraries</div>
          <h2 className="section-title">Popular <span className="text-gradient-blue">Tour Packages</span></h2>
          <p className="section-subtitle">All-inclusive tour packages with Force Urbania luxury transport, dedicated mountain chauffeur, tolls, and taxes included.</p>
        </div>

        <div className="package-grid">
          {TOUR_PACKAGES.map(pkg => (
            <div key={pkg.id} className="package-card">
              <div className="pkg-duration">
                <Calendar size={14} /> {pkg.duration}
              </div>
              <h3 className="pkg-title">{pkg.title}</h3>
              <p className="pkg-cities"><strong>Covering:</strong> {pkg.citiesCovered}</p>

              <div style={{ background: 'var(--bg-blue-soft)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-xs)', fontSize: '0.78rem', color: 'var(--blue-700)', fontWeight: '600', marginBottom: '1.25rem' }}>
                Recommended: {pkg.recommendedSeater}
              </div>

              <ul className="pkg-highlights-list">
                {pkg.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} /> {h}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Starting From</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)' }}>{pkg.priceStarting}</div>
                </div>
                <button 
                  onClick={() => onOpenModal({ destination: pkg.title, notes: `Tour package request: ${pkg.title}` })}
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={14} /> Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
