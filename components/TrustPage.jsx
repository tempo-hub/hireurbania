"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Mail, MessageSquare, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const whatsappNumber = "918448445504";

export default function TrustPage({ title, eyebrow, intro, children }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <section className="trust-hero">
        <div className="container trust-hero-inner">
          <Link href="/" className="trust-back-link">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <p className="badge-pill">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="trust-content section-padding">
        <div className="container trust-content-inner">{children}</div>
      </section>

      <Footer onOpenModal={() => setModalOpen(true)} />

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

export function ContactActions() {
  return (
    <div className="trust-actions">
      <a className="btn btn-primary" href="tel:+918448445504">
        <Phone size={17} /> Call +91 84484 45504
      </a>
      <a
        className="btn btn-whatsapp"
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Hire%20Urbania,%20I%20need%20a%20tempo%20traveller%20booking%20quote.`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageSquare size={17} /> WhatsApp us
      </a>
      <a
        className="btn btn-outline"
        href="mailto:booking@hireurbaniatempotraveller.com"
      >
        <Mail size={17} /> Email booking team
      </a>
    </div>
  );
}

export function TrustArticle({ title, children }) {
  return (
    <article className="trust-article">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

export function BlogCard({ title, excerpt }) {
  return (
    <article className="trust-blog-card">
      <div className="trust-blog-icon">
        <Calendar size={18} />
      </div>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Link href="/contact-us" className="text-link">
        Plan this journey with us
      </Link>
    </article>
  );
}
