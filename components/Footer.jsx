"use client";

import Link from "next/link";
import { Phone, MessageSquare, MapPin, Mail } from "lucide-react";
import { CITY_HUBS } from "@/lib/routesData";

export default function Footer({ onOpenModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="brand-logo" style={{ marginBottom: "1.25rem" }}>
              <div
                className="logo-badge"
                style={{ background: "var(--blue-600)" }}
              >
                HU
              </div>
              <div className="brand-text">
                <span className="brand-title" style={{ color: "#FFF" }}>
                  HIRE URBANIA
                </span>
                <span
                  className="brand-sub"
                  style={{ color: "var(--blue-400)" }}
                >
                  LUXURY TEMPO TRAVELLER
                </span>
              </div>
            </div>

            <p
              style={{
                color: "var(--text-on-dark-muted)",
                fontSize: "0.85rem",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              Hire Urbania Luxury Tempo Traveller for comfortable and
              hassle-free group travel. Enjoy premium Urbania vehicles,
              experienced chauffeurs, transparent pricing, and doorstep pickup
              for family trips, weddings, pilgrimages, corporate tours, and
              outstation journeys across India.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <button
                onClick={() => onOpenModal?.()}
                className="btn btn-primary btn-sm"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  minHeight: "40px",
                  padding: "0.65rem 1.2rem",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                <MessageSquare size={14} />
                <span>Quick Inquiry</span>
              </button>

              <a
                href="tel:+918448445504"
                className="call-helpline-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  minHeight: "40px",
                  padding: "0.65rem 1.2rem",
                  borderRadius: "8px",
                  color: "#ffffff",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition:
                    "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#0052CC";
                  e.currentTarget.style.borderColor = "#ffffff";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Phone size={14} />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Trust Hire</h3>

            <ul className="footer-links">
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/refund-cancellation">Refund & Cancellation</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* City Hubs */}
          <div className="footer-col">
            <h3>Popular City Hubs</h3>
            <ul className="footer-links">
              {CITY_HUBS.slice(0, 8).map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`}>
                    Force Urbania in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>24/7 Booking Helpline</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                color: "var(--text-on-dark-muted)",
                fontSize: "0.88rem",
              }}
            >
              <div
                style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <Phone size={16} style={{ color: "var(--blue-400)" }} />
                <span>+91 84484 45504</span>
              </div>

              <div
                style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <Mail size={16} style={{ color: "var(--blue-400)" }} />
                <span>booking@hireurbaniatempotraveller.com</span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                }}
              >
                <MapPin
                  size={16}
                  style={{
                    color: "var(--blue-400)",
                    marginTop: "0.2rem",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Headquartered in Noida, Uttar Pradesh • Serving clients across
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Hire Urbania Tempo Traveller Services.
            All Rights Reserved. Designed for Maximum Comfort & Travel Safety
            across India.
          </p>

          <p>
            Designed by <strong>Geogo Infotech Pvt. Ltd.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
