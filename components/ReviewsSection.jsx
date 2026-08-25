'use client';

import { useState } from 'react';
import { REVIEWS, FAQS } from '@/lib/routesData';
import { Star, ChevronDown, ChevronUp, Quote, MessageSquare, HelpCircle, ShieldCheck } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section className="section-padding" id="reviews">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Star size={14} fill="#FFB800" color="#FFB800" /> Customer Testimonials</div>
          <h2 className="section-title">Loved by <span className="text-gradient-blue">2,500+ Travelers</span></h2>
          <p className="section-subtitle">Real experiences shared by families, pilgrimage groups, and corporate travelers across India.</p>
        </div>

        <div className="reviews-carousel">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              <p className="review-text">"{rev.comment}"</p>
              <div className="review-user">
                <div className="user-avatar">{rev.name.charAt(0)}</div>
                <div className="user-meta">
                  <h4>{rev.name} ({rev.city})</h4>
                  <p>{rev.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage Structured Data for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <section className="section-padding" id="faqs" style={{ background: 'var(--bg-light)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><HelpCircle size={14} /> Knowledge Base</div>
          <h2 className="section-title">Frequently Asked <span className="text-gradient-blue">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about Force Urbania booking, seaters, rates, and amenities.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(idx)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} style={{ color: 'var(--blue-600)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
