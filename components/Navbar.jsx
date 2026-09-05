"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappNumber = "918448445504";

  const whatsappText =
    "Hi, I want to get an instant quote for a Force Urbania Tempo Traveller.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleQuote = () => {
    setMobileOpen(false);

    const message =
      whatsappText ||
      "Hi, I want to get an instant quote for a Force Urbania Tempo Traveller.";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link href="/" className="brand-logo" onClick={closeMobileMenu}>
            <div className="logo-badge">HU</div>

            <div className="brand-text">
              <span className="brand-title">HIRE URBANIA</span>

              <span className="brand-sub">LUXURY TEMPO TRAVELLER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/#fleet" className="nav-link">
                  Fleet Variants
                </Link>
              </li>

              <li>
                <Link href="/#calculator" className="nav-link">
                  Fare Calculator
                </Link>
              </li>

              <li>
                <Link href="/#routes" className="nav-link">
                  Popular Routes
                </Link>
              </li>

              <li>
                <Link href="/#packages" className="nav-link">
                  Tour Packages
                </Link>
              </li>

              <li>
                <Link href="/#reviews" className="nav-link">
                  Reviews
                </Link>
              </li>

              <li>
                <Link href="/#faqs" className="nav-link">
                  FAQs
                </Link>
              </li>

              <li>
                <Link href="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="nav-cta-group">
            {/* Phone */}
            <a
              href="tel:+918448445504"
              className="phone-quicklink"
              title="Call 24/7 Helpline"
            >
              <Phone size={17} />
              <span>+91 84484 45504</span>
            </a>

            {/* Instant Quote */}
            <button
              type="button"
              onClick={handleQuote}
              className="btn btn-whatsapp btn-sm quote-button"
            >
              <MessageSquare size={16} />
              <span>Instant Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
            ===================================================== */}
        <div
          className={`mobile-menu-drawer ${
            mobileOpen ? "mobile-menu-open" : ""
          }`}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="mobile-nav-link active"
          >
            Home
          </Link>

          <Link
            href="/#fleet"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Fleet Variants
          </Link>

          <Link
            href="/#calculator"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Fare Calculator
          </Link>

          <Link
            href="/#routes"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Popular Outstation Routes
          </Link>

          <Link
            href="/#packages"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Tour Packages
          </Link>

          <Link
            href="/#reviews"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Customer Reviews
          </Link>

          <Link
            href="/#faqs"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            FAQs
          </Link>

          <Link
            href="/blogs"
            onClick={closeMobileMenu}
            className="mobile-nav-link"
          >
            Blogs
          </Link>

          {/* Mobile Quote Button */}
          <button
            type="button"
            onClick={handleQuote}
            className="mobile-quote-button"
          >
            <MessageSquare size={17} />
            Get Instant Quote
          </button>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </header>

      {/* =====================================================
          RESPONSIVE CSS
          Desktop styles are NOT changed.
          ===================================================== */}
      <style jsx>{`
        /* =====================================================
           DESKTOP DEFAULT
           Existing desktop UI remains untouched.
           ===================================================== */

        .desktop-nav {
          display: block;
        }

        .mobile-toggle {
          display: none;
        }

        .mobile-menu-drawer {
          display: none;
        }

        .mobile-menu-overlay {
          display: none;
        }

        /* =====================================================
           1024px - TABLET
           Switch to mobile navigation
           ===================================================== */

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 42px;
            height: 42px;

            padding: 0;
            margin: 0;

            border: 1px solid #e5e7eb;
            border-radius: 10px;

            background: #ffffff;
            color: #0b1a2e;

            cursor: pointer;
            flex-shrink: 0;

            line-height: 0;
            vertical-align: middle;
          }

          .mobile-toggle svg {
            display: block;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }

          .nav-container {
            display: flex;
            align-items: center;
            width: 100%;
          }

          .nav-cta-group {
            margin-left: auto;

            display: flex;
            align-items: center;

            gap: 0.75rem;
          }

          /*
           * Mobile drawer
           */
          .mobile-menu-drawer {
            display: flex;

            position: absolute;

            top: 100%;
            left: 0;
            right: 0;

            z-index: 1002;

            flex-direction: column;

            background: #ffffff;

            border-bottom: 1px solid #e5e7eb;

            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

            padding: 0.75rem 1.25rem;

            box-sizing: border-box;

            opacity: 0;
            visibility: hidden;

            transform: translateY(-10px);

            pointer-events: none;

            transition:
              opacity 0.2s ease,
              transform 0.2s ease,
              visibility 0.2s ease;
          }

          .mobile-menu-drawer.mobile-menu-open {
            opacity: 1;
            visibility: visible;

            transform: translateY(0);

            pointer-events: auto;
          }

          /*
           * Mobile links
           */
          .mobile-nav-link {
            display: flex;

            align-items: center;

            width: 100%;
            min-height: 48px;

            padding: 0.75rem 0.5rem;

            box-sizing: border-box;

            color: #0b1a2e;

            text-decoration: none;

            font-size: 0.95rem;
            font-weight: 500;

            border-bottom: 1px solid #f0f2f5;
          }

          .mobile-nav-link.active {
            color: #0052cc;
            font-weight: 600;
          }

          .mobile-nav-link:last-of-type {
            border-bottom: none;
          }

          /*
           * Mobile quote button
           */
          .mobile-quote-button {
            display: flex;

            align-items: center;
            justify-content: center;

            gap: 0.5rem;

            width: 100%;

            min-height: 46px;

            margin-top: 0.75rem;

            padding: 0.75rem 1rem;

            border: none;
            border-radius: 50px;

            background: #25d366;
            color: #ffffff;

            font-size: 0.9rem;
            font-weight: 600;

            cursor: pointer;
          }

          /*
           * Overlay
           */
          .mobile-menu-overlay {
            display: block;

            position: fixed;

            inset: 0;

            z-index: 1001;

            background: rgba(0, 0, 0, 0.25);
          }

          /*
           * Keep navbar above overlay
           */
          .navbar {
            position: relative;
            z-index: 1000;
          }
        }

        /* =====================================================
           768px - SMALL TABLET
           ===================================================== */

        @media (max-width: 768px) {
          .nav-container {
            gap: 0.75rem;
          }

          .phone-quicklink span {
            display: none;
          }

          .phone-quicklink {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            flex-shrink: 0;
          }

          .quote-button {
            white-space: nowrap;
          }
        }

        /* =====================================================
           600px - MOBILE
           ===================================================== */

        @media (max-width: 600px) {
          .nav-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .nav-cta-group {
            gap: 0.5rem;
          }

          .quote-button {
            padding-left: 0.7rem !important;
            padding-right: 0.7rem !important;
          }

          /*
           * Keep quote icon but hide text
           */
          .quote-button span {
            display: none;
          }

          .mobile-toggle {
            width: 40px;
            height: 40px;
          }

          .mobile-menu-drawer {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* =====================================================
           480px - SMALL MOBILE
           ===================================================== */

        @media (max-width: 480px) {
          .nav-container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          /*
           * Hide brand text only on very small screens.
           * HU logo remains.
           */
          .brand-text {
            display: none;
          }

          .logo-badge {
            flex-shrink: 0;
          }

          .phone-quicklink {
            width: 38px;
            height: 38px;

            display: inline-flex;

            align-items: center;
            justify-content: center;
          }

          .mobile-toggle {
            width: 38px;
            height: 38px;
          }

          .nav-cta-group {
            gap: 0.4rem;
          }

          .mobile-menu-drawer {
            padding: 0.5rem 0.85rem;
          }

          .mobile-nav-link {
            min-height: 46px;

            font-size: 0.9rem;
          }

          .mobile-quote-button {
            margin-top: 0.6rem;
          }
        }

        /* =====================================================
           360px - EXTRA SMALL MOBILE
           ===================================================== */

        @media (max-width: 360px) {
          .nav-container {
            padding-left: 0.6rem;
            padding-right: 0.6rem;
          }

          .logo-badge {
            width: 38px;
            height: 38px;
          }

          .phone-quicklink {
            width: 36px;
            height: 36px;
          }

          .mobile-toggle {
            width: 36px;
            height: 36px;
          }

          .mobile-menu-drawer {
            padding-left: 0.7rem;
            padding-right: 0.7rem;
          }

          .mobile-nav-link {
            font-size: 0.88rem;
          }
        }

        /* =====================================================
           TOUCH DEVICES
           ===================================================== */

        @media (hover: none) {
          .mobile-toggle:active {
            transform: scale(0.96);
          }

          .mobile-nav-link:active {
            background: #f8fafc;
          }
        }

        /* =====================================================
           REDUCED MOTION
           ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-drawer {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
