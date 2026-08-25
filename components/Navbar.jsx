'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="brand-logo">
          <div className="logo-badge">HU</div>
          <div className="brand-text">
            <span className="brand-title">HIRE URBANIA</span>
            <span className="brand-sub">LUXURY TEMPO TRAVELLER</span>
          </div>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><a href="/#fleet" className="nav-link">Fleet Variants</a></li>
            <li><a href="/#calculator" className="nav-link">Fare Calculator</a></li>
            <li><a href="/#routes" className="nav-link">Popular Routes</a></li>
            <li><a href="/#packages" className="nav-link">Tour Packages</a></li>
            <li><a href="/#reviews" className="nav-link">Reviews</a></li>
            <li><a href="/#faqs" className="nav-link">FAQs</a></li>
          </ul>
        </nav>

        <div className="nav-cta-group">
          <a href="tel:+918448445504" className="phone-quicklink" title="Call 24/7 Helpline">
            <Phone size={17} /> <span>+91 84484 45504</span>
          </a>
          <button onClick={() => onOpenModal?.()} className="btn btn-whatsapp btn-sm">
            <MessageSquare size={16} /> Instant Quote
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-md)'
        }} className="mobile-menu-drawer">
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '600' }}>Home</Link>
          <a href="/#fleet" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>Fleet Variants</a>
          <a href="/#calculator" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>Fare Calculator</a>
          <a href="/#routes" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>Popular Outstation Routes</a>
          <a href="/#packages" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>Tour Packages</a>
          <a href="/#reviews" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>Customer Reviews</a>
          <a href="/#faqs" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-dark)', textDecoration: 'none', fontWeight: '500' }}>FAQs</a>
        </div>
      )}
    </header>
  );
}
