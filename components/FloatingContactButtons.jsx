"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function FloatingContactButtons() {
  const whatsappNumber = "916280820037";
  const defaultMsg = encodeURIComponent(
    "Hi, I want to book a Force Urbania Tempo Traveller. Please share details and pricing."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`;
  const phoneUrl = `tel:+${whatsappNumber}`;

  return (
    <div className="floating-buttons-container">
      {/* Floating WhatsApp Button (Bottom-Left) */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </Link>

      {/* Floating Calling Button (Bottom-Right) */}
      <Link
        href={phoneUrl}
        className="floating-btn floating-btn-call"
        aria-label="Call Us"
        title="Call 24/7 Helpline"
      >
        <FaPhoneAlt size={22} />
      </Link>
    </div>
  );
}
