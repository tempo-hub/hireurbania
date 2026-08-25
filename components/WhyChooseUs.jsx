'use client';

import { ShieldCheck, HeartHandshake, MapPin, Sparkles, Clock, Award, UserCheck, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles size={28} className="text-blue" />,
      title: "First-Class Comfort",
      desc: "Plush Italian leather recliners, extra legroom, individual AC vents, and smooth air suspension for fatigue-free travel."
    },
    {
      icon: <UserCheck size={28} className="text-blue" />,
      title: "Certified Mountain Drivers",
      desc: "All our chauffeurs have 10+ years experience in Himalayan & hill-station routes (Kedarnath, Badrinath, Manali, Shimla)."
    },
    {
      icon: <Clock size={28} className="text-blue" />,
      title: "100% On-Time Doorstep Pickup",
      desc: "Guaranteed on-time arrival at your home, hotel, or airport in Delhi NCR, Noida, Indore, Jaipur & pan-India."
    },
    {
      icon: <ShieldCheck size={28} className="text-blue" />,
      title: "ABS & Crash Safe Monocoque",
      desc: "Built on Force Motors modern monocoque chassis featuring ABS, EBD, and crash safety design standards."
    },
    {
      icon: <HeartHandshake size={28} className="text-blue" />,
      title: "Transparent Fixed Pricing",
      desc: "Zero hidden charges. Transparent billing based on per-km rates, clear minimum billing, and driver allowance."
    },
    {
      icon: <PhoneCall size={28} className="text-blue" />,
      title: "24/7 Dedicated Support",
      desc: "Live GPS tracking and 24x7 customer helpline for smooth coordination throughout your trip."
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-pill"><Award size={14} /> Why Choose Hire Urbania</div>
          <h2 className="section-title">The <span className="text-gradient-blue">Force Urbania</span> Advantage</h2>
          <p className="section-subtitle">Why discerning travelers prefer Force Urbania over conventional tempo travellers and luxury buses.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {features.map((item, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
              transition: 'var(--transition-normal)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--blue-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--blue-600)'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.65' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
