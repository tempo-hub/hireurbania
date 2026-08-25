'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITEMAP_ROUTES, CITY_HUBS } from '@/lib/routesData';
import { Search, MapPin, Road, Clock, ArrowRight, Compass } from 'lucide-react';

export default function RouteExplorer({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Pilgrimage', 'Hill Station', 'Heritage', 'Adventure'];

  const filteredRoutes = SITEMAP_ROUTES.filter(route => {
    const matchesCategory = activeCategory === 'All' || route.category === activeCategory;
    const matchesSearch = 
      route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.routeSlug.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-padding" id="routes">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Compass size={14} /> Sitemap Dynamic Directory</div>
          <h2 className="section-title">Explore <span className="text-gradient-blue">100+ Outstation Routes</span></h2>
          <p className="section-subtitle">Doorstep delivery of Force Urbania across all major North & Central India destinations.</p>
        </div>

        {/* City Hub Quick Links */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.06em' }}>
            Popular City Hubs:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {CITY_HUBS.map(city => (
              <Link 
                key={city.slug} 
                href={`/${city.slug}`}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--bg-light)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-dark)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: '0.2s'
                }}
                className="city-hub-chip"
              >
                📍 {city.name} ({city.tag})
              </Link>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="explorer-controls">
          <div className="search-box">
            <Search size={18} />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search destination (e.g. Kedarnath, Manali, Ujjain, Jaipur)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-pills">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="routes-grid">
          {filteredRoutes.slice(0, 24).map(route => (
            <div key={route.routeSlug} className="route-card">
              <div>
                <div className="route-header">
                  <span className="route-origin-badge"><MapPin size={12} /> From {route.origin}</span>
                  <span className="badge-pill" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem', margin: 0 }}>
                    {route.category}
                  </span>
                </div>
                <h3 className="route-dest">{route.origin} to {route.destination}</h3>
                <div className="route-meta">
                  <span><Road size={14} /> {route.distanceKm} KM</span>
                  <span><Clock size={14} /> {route.durationHrs}</span>
                </div>
              </div>

              <div className="route-footer">
                <span className="route-est-price">Est. ₹{Math.round(route.distanceKm * 2 * 29 + 600).toLocaleString('en-IN')}</span>
                <Link href={`/${route.routeSlug}`} className="btn btn-primary btn-sm">
                  View Route <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length > 24 && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Showing 24 of {filteredRoutes.length} sitemap routes. Use search above to find any exact destination.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
