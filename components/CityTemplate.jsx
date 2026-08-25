"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Road,
  Users,
  Star,
  Shield,
  Clock as ClockIcon,
  ChevronRight,
  Luggage,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { FAQS } from "@/lib/routesData";
import { useState } from "react";

// ========== FAQ COMPONENT ==========
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: isOpen ? "1px solid #0052CC" : "1px solid #ecf0f7",
        transition: "all 0.3s ease",
        overflow: "hidden",
        boxShadow: isOpen ? "0 8px 24px rgba(0, 82, 204, 0.08)" : "none",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1.2rem 1.5rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontSize: "1rem",
          fontWeight: 600,
          color: isOpen ? "#0052CC" : "#0b1a2e",
          transition: "color 0.3s ease",
          fontFamily: "inherit",
        }}
      >
        <span>{question}</span>
        <span style={{ flexShrink: 0, marginLeft: "1rem" }}>
          {isOpen ? (
            <ChevronUp size={20} color="#0052CC" />
          ) : (
            <ChevronDown size={20} color="#7a8a9e" />
          )}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            padding: "0 1.5rem 1.5rem 1.5rem",
            color: "#4a5a6e",
            fontSize: "0.95rem",
            lineHeight: "1.7",
            borderTop: isOpen ? "1px solid #ecf0f7" : "none",
            paddingTop: isOpen ? "1.2rem" : "0",
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

// ========== SEO COMPONENT (can be moved to a separate file) ==========
function CitySeo({ city }) {
  const title =
    city.metaTitle ||
    `Urbania Tempo Traveller Hire in ${city.name} | Premium Group Travel`;
  const description =
    city.metaDescription ||
    `Book luxury Urbania Tempo Traveller in ${city.name}. ${city.desc} Doorstep pickup, ${city.tag} fleet with experienced chauffeurs.`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <link
        rel="canonical"
        href={`https://hireurbaniatempotraveller.com/city/${city.id}`}
      />

      {/* City-specific structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Urbania Tempo Traveller ${city.name}`,
            description: description,
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.state || "",
              addressCountry: city.country || "India",
            },
            areaServed: city.name,
            serviceType: "Tempo Traveller Rental",
            telephone: "+918448445504",
          }),
        }}
      />
    </>
  );
}

// ========== MAIN COMPONENT ==========
export default function CityTemplate({ city, routes, fleet }) {
  const whatsappNumber = "918448445504";
  const relatedRoutes = Array.isArray(routes) ? routes : [];
  const whatsappText = encodeURIComponent(
    `Booking Query for Urbania Tempo Traveller Hire in ${city.name}`,
  );

  // FAQ state
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Helper to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* ===== SEO ===== */}
      <CitySeo city={city} />

      <main className="city-template">
        <Navbar />

        {/* ===== HERO SECTION ===== */}
        <section
          className="hero-section"
          style={{
            paddingTop: "8.5rem",
            paddingBottom: "4rem",
            background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
            color: "#FFF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background element */}
          <div
            style={{
              position: "absolute",
              top: "-40%",
              right: "-10%",
              width: "60%",
              height: "80%",
              background:
                "radial-gradient(circle, rgba(255,184,0,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.85rem",
                marginBottom: "1.5rem",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
              >
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/cities"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "0.2s",
                }}
              >
                Cities
              </Link>
              <ChevronRight size={14} />
              <span style={{ color: "#FFB800", fontWeight: 600 }}>
                {city.name}
              </span>
            </nav>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.9fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Left Column - Content */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    padding: "0.3rem 1.2rem",
                    borderRadius: "40px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#fff",
                  }}
                >
                  <Award size={14} /> {city.tag || "Premium Service"}
                </div>

                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    margin: "1rem 0 0.85rem",
                    lineHeight: 1.15,
                    color: "#FFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Urbania Tempo Traveller <br />
                  Hire in <span style={{ color: "#FFB800" }}>{city.name}</span>
                </h1>

                <p
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    maxWidth: "600px",
                  }}
                >
                  {city.desc} Doorstep pickup, luxury seating, and experienced
                  chauffeurs for local and outstation travel across India.
                </p>

                {/* Trust badges */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Star size={16} fill="#FFB800" color="#FFB800" /> 4.9/5
                    Rating
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Users size={16} /> 500+ Happy Groups
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Shield size={16} /> Insurance Covered
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginTop: "1.8rem",
                  }}
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.8rem 2rem",
                      borderRadius: "50px",
                      background: "#25D366",
                      color: "#fff",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "0.2s",
                      border: "none",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <MessageSquare size={20} /> Get Instant Quote
                  </a>
                  <a
                    href={`tel:+${whatsappNumber}`}
                    className="btn btn-outline"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.8rem 2rem",
                      borderRadius: "50px",
                      background: "transparent",
                      color: "#FFF",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "0.2s",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <Phone size={20} /> Call Us
                  </a>
                </div>
              </div>

              {/* Right Column - Quick Booking Card */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "28px",
                  padding: "2rem 2rem 2.2rem",
                  boxShadow: "0 24px 48px -12px rgba(0, 30, 80, 0.35)",
                  color: "#1a2634",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  <Calendar size={20} style={{ color: "#0052CC" }} />
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                    }}
                  >
                    Plan Your City Trip
                  </h3>
                </div>
                
                <p
                  style={{
                    color: "#5b6b7e",
                    fontSize: "0.9rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Tell us your group size and travel requirement.
                </p>

                <form
                  action={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  method="GET"
                  onSubmit={(e) => {
                    const select = e.currentTarget.querySelector("select");
                    const hidden = e.currentTarget.querySelector(
                      'input[type="hidden"]',
                    );
                    if (hidden && select) {
                      hidden.value = `Quote for Urbania in ${city.name} - ${select.value}`;
                    }
                  }}
                >
                  <input
                    type="hidden"
                    name="text"
                    value={`Quote for Urbania in ${city.name}`}
                  />

                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#1f2b3a",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <MapPin size={14} /> Pickup City
                    </label>
                    <input
                      type="text"
                      value={city.name}
                      readOnly
                      style={{
                        width: "100%",
                        padding: "0.7rem 1rem",
                        border: "1px solid #dfe6ef",
                        borderRadius: "14px",
                        fontSize: "0.95rem",
                        background: "#f0f4fe",
                        color: "#1f2b3a",
                        fontWeight: 500,
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.2rem" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#1f2b3a",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <Users size={14} /> Seater Variant
                    </label>

                    <select
                      name="seaterVariant"
                      defaultValue="9 Seater VIP Recliner"
                      style={{
                        width: "100%",
                        padding: "0.7rem 1rem",
                        border: "1px solid #dfe6ef",
                        borderRadius: "14px",
                        fontSize: "0.95rem",
                        background: "#fafcff",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="9 Seater VIP Recliner">
                        9 Seater VIP Recliner
                      </option>

                      <option value="12 Seater Executive Urbania">
                        12 Seater Executive Urbania
                      </option>

                      <option value="16 Seater Premium Urbania">
                        16 Seater Premium Urbania
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "50px",
                      background: "#0052CC",
                      color: "#fff",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#003d99")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#0052CC")
                    }
                  >
                    <MessageSquare size={18} /> Request Fare
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#7a8a9e",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  ⚡ Response within 2 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY HIRE SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#f9fafc" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} /> Why Hire Urbania
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Comfortable Group Travel in {city.name}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: <Users size={32} />,
                  title: "All Group Sizes",
                  desc: "9, 12, 16, 17 and 20 seater options for every group.",
                },
                {
                  icon: <MapPin size={32} />,
                  title: "Doorstep Pickup",
                  desc: "Pickup from hotels, homes, stations and airports.",
                },
                {
                  icon: <Award size={32} />,
                  title: "Trusted Chauffeurs",
                  desc: "Experienced drivers for city and highway travel.",
                },
                {
                  icon: <Shield size={32} />,
                  title: "Safety Assured",
                  desc: "GPS tracking, sanitized vehicles, and 24/7 support.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    padding: "2rem 1.5rem",
                    borderRadius: "24px",
                    textAlign: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.02)",
                    border: "1px solid #ecf0f7",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    transform: "scale(1)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0, 82, 204, 0.12)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.02)";
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  <div
                    style={{
                      color: "#0052CC",
                      marginBottom: "0.6rem",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "0.3rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0052CC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0b1a2e";
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "#4a5a6e",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1a2634";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4a5a6e";
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT URBANIA IN CITY SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#ffffff" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
              }}
            >
              {/* Left Column - Content */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#eef3ff",
                    color: "#0052CC",
                    padding: "0.25rem 1.2rem",
                    borderRadius: "40px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  <Award size={14} /> About Urbania
                </div>

                <h2
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#0b1a2e",
                    lineHeight: 1.2,
                  }}
                >
                  Premium Tempo Traveller Service in{" "}
                  <span style={{ color: "#0052CC" }}>{city.name}</span>
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#4a5a6e",
                    lineHeight: "1.8",
                    marginBottom: "1.5rem",
                  }}
                >
                  Urbania Tempo Traveller is the premier choice for group travel
                  in {city.name}. Our fleet of modern Force Urbania vehicles
                  combines luxury, comfort, and reliability to ensure your
                  journey is unforgettable. Whether you're planning a family
                  trip, corporate outing, or pilgrimage tour, we have the
                  perfect vehicle for your needs.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    {
                      icon: <Users size={20} color="#0052CC" />,
                      title: "Group Travel Specialists",
                      desc: `Expertise in handling groups of all sizes in ${city.name}`,
                    },
                    {
                      icon: <Shield size={20} color="#0052CC" />,
                      title: "Safety Certified",
                      desc: "All vehicles are GPS-tracked and regularly sanitized",
                    },
                    {
                      icon: <Clock size={20} color="#0052CC" />,
                      title: "Punctual Service",
                      desc: `On-time pickup and drop-off across ${city.name}`,
                    },
                    {
                      icon: <MapPin size={20} color="#0052CC" />,
                      title: "Local Expertise",
                      desc: `Experienced drivers familiar with ${city.name} routes`,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ marginTop: "0.2rem", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#0b1a2e",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "#7a8a9e",
                            lineHeight: "1.4",
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.8rem 2rem",
                      borderRadius: "50px",
                      background: "#25D366",
                      color: "#fff",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "0.2s",
                      border: "none",
                      fontSize: "0.95rem",
                      cursor: "pointer",
                    }}
                  >
                    <MessageSquare size={18} /> Book Now in {city.name}
                  </a>
                  <Link
                    href="/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.8rem 2rem",
                      borderRadius: "50px",
                      background: "transparent",
                      color: "#0052CC",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "0.2s",
                      border: "2px solid #0052CC",
                      fontSize: "0.95rem",
                      cursor: "pointer",
                    }}
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right Column - Image/Stats */}
              <div>
                <div
                  style={{
                    background: "#f9fafc",
                    borderRadius: "24px",
                    padding: "2rem",
                    border: "1px solid #ecf0f7",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {[
                      { number: "50+", label: "Happy Groups" },
                      { number: "4.9/5", label: "Average Rating" },
                      { number: "98%", label: "On-Time Service" },
                      { number: "24/7", label: "Customer Support" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        style={{
                          textAlign: "center",
                          padding: "1rem",
                          background: "#ffffff",
                          borderRadius: "16px",
                          border: "1px solid #ecf0f7",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            color: "#0052CC",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {stat.number}
                        </div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            color: "#4a5a6e",
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      background: "#eef3ff",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      🚐
                    </div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#0b1a2e",
                        marginBottom: "0.3rem",
                      }}
                    >
                      Why Choose Urbania in {city.name}?
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#4a5a6e",
                        lineHeight: "1.6",
                      }}
                    >
                      Experience the perfect blend of luxury, comfort, and
                      affordability with our premium tempo traveller service in{" "}
                      {city.name}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FLEET SECTION ===== */}
        <section
          className="section-padding fleet-section"
          style={{ padding: "4rem 0", background: "#f9fafc" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Award size={14} /> Our Fleet
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Urbania Fleet in {city.name}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Choose the vehicle that fits your group and luggage.
              </p>
            </div>

            <div
              className="fleet-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {fleet.map((model) => (
                <div
                  key={model.id}
                  className="fleet-card"
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid #f0f4fe",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {/* Card Image */}
                  <div
                    className="fleet-image-wrapper"
                    style={{
                      position: "relative",
                      height: "220px",
                      background: "#eef3ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={model.image}
                      alt={model.name}
                      width={400}
                      height={220}
                      className="fleet-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <span
                      className="fleet-badge"
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "#0052CC",
                        color: "#fff",
                        padding: "0.25rem 1rem",
                        borderRadius: "40px",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        zIndex: 2,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {model.capacity}
                    </span>
                    {/* Rating Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        color: "#FFB800",
                        padding: "0.2rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        zIndex: 2,
                      }}
                    >
                      <Star size={14} fill="#FFB800" /> 4.9
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "1.5rem 1.2rem 1.8rem" }}>
                    <h3
                      className="fleet-title"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.2rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {model.name}
                    </h3>
                    <p
                      className="fleet-tagline"
                      style={{
                        color: "#4a5a6e",
                        fontSize: "0.85rem",
                        marginBottom: "0.75rem",
                        minHeight: "40px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {model.tagline}
                    </p>

                    {/* Key Specs */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        marginBottom: "0.75rem",
                        padding: "0.5rem 0",
                        borderTop: "1px solid #f0f4fe",
                        borderBottom: "1px solid #f0f4fe",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem", color: "#4a5a6e" }}>
                        <Users
                          size={14}
                          style={{ display: "inline", marginRight: "0.2rem" }}
                        />
                        {model.seater} Seats
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#4a5a6e" }}>
                        <Luggage
                          size={14}
                          style={{ display: "inline", marginRight: "0.2rem" }}
                        />
                        {model.luggageCapacity}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                          Starting from
                        </span>
                        <p
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "#0b1a2e",
                            margin: 0,
                          }}
                        >
                          {formatCurrency(model.ratePerKm)}
                          <span
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 400,
                              color: "#7a8a9e",
                            }}
                          >
                            /km
                          </span>
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#7a8a9e",
                          background: "#f0f4fe",
                          padding: "0.2rem 0.8rem",
                          borderRadius: "20px",
                        }}
                      >
                        {model.minKmPerDay}+ km/day
                      </span>
                    </div>

                    {/* Book Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Book ${model.name} in ${city.name}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="book-button"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        width: "100%",
                        padding: "0.7rem 1.5rem",
                        borderRadius: "40px",
                        background: "#0052CC",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        border: "none",
                        marginTop: "0.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <MessageSquare size={16} /> Book This Vehicle
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== URBANIA FARE & PRICING SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#ffffff" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Section Header */}
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Award size={14} /> Transparent Pricing
              </div>

              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Urbania Tempo Traveller Fare & Pricing in{" "}
                <span style={{ color: "#0052CC" }}>{city.name}</span>
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Check estimated Urbania Tempo Traveller rates for popular routes
                from {city.name}. Final fare may vary depending on travel dates,
                route, tolls, parking, taxes, and trip duration.
              </p>
            </div>

            {/* ===== VEHICLE PRICING TABLE ===== */}
            <div
              style={{
                overflowX: "auto",
                borderRadius: "16px",
                border: "1px solid #ecf0f7",
                boxShadow: "0 8px 24px rgba(0,20,50,0.04)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "700px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background:
                        "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                      color: "#FFF",
                      textAlign: "left",
                    }}
                  >
                    <th
                      style={{
                        padding: "1rem 1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Vehicle
                    </th>

                    <th
                      style={{
                        padding: "1rem 1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Rate
                    </th>

                    <th
                      style={{
                        padding: "1rem 1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Minimum KM / Day
                    </th>

                    <th
                      style={{
                        padding: "1rem 1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      Driver Allowance
                    </th>

                    <th
                      style={{
                        padding: "1rem 1.2rem",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {fleet.map((model, index) => (
                    <tr
                      key={model.id}
                      style={{
                        borderBottom:
                          index < fleet.length - 1
                            ? "1px solid #ecf0f7"
                            : "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      className="route-table-row"
                    >
                      {/* Vehicle */}
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                        }}
                      >
                        <div>
                          <strong
                            style={{
                              display: "block",
                              color: "#0b1a2e",
                              fontSize: "0.95rem",
                            }}
                          >
                            {model.name}
                          </strong>

                          <small
                            style={{
                              color: "#7a8a9e",
                              fontSize: "0.75rem",
                            }}
                          >
                            {model.capacity} · {model.luggageCapacity}
                          </small>
                        </div>
                      </td>

                      {/* Rate */}
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          fontWeight: 600,
                          color: "#0b1a2e",
                        }}
                      >
                        {formatCurrency(model.ratePerKm)}

                        <span
                          style={{
                            fontWeight: 400,
                            color: "#7a8a9e",
                            fontSize: "0.85rem",
                          }}
                        >
                          /km
                        </span>
                      </td>

                      {/* Minimum KM */}
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          color: "#4a5a6e",
                          fontWeight: 500,
                        }}
                      >
                        {model.minKmPerDay} km
                      </td>

                      {/* Driver Allowance */}
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          color: "#4a5a6e",
                          fontWeight: 500,
                        }}
                      >
                        {formatCurrency(model.driverAllowance)}
                        <span
                          style={{
                            color: "#7a8a9e",
                            fontSize: "0.8rem",
                            marginLeft: "0.2rem",
                          }}
                        >
                          /day
                        </span>
                      </td>

                      {/* Action */}
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          textAlign: "center",
                        }}
                      >
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `I want to book ${model.name} in ${city.name}. Please share the latest fare and availability.`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="table-book-btn"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: "0.4rem 1.2rem",
                            borderRadius: "40px",
                            background: "#0052CC",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <MessageSquare size={14} /> Get Quote
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ===== POPULAR ROUTE ESTIMATES ===== */}
            {relatedRoutes.length > 0 && (
              <div style={{ marginTop: "3rem" }}>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Popular Urbania Routes from {city.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#7a8a9e",
                    }}
                  >
                    Explore popular destinations and get an estimated fare for
                    your group journey.
                  </p>
                </div>

                <div
                  style={{
                    overflowX: "auto",
                    borderRadius: "16px",
                    border: "1px solid #ecf0f7",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "800px",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          background: "#f0f4fe",
                          color: "#0b1a2e",
                          textAlign: "left",
                        }}
                      >
                        <th
                          style={{
                            padding: "1rem 1.2rem",
                            fontWeight: 600,
                          }}
                        >
                          Route
                        </th>

                        <th
                          style={{
                            padding: "1rem 1.2rem",
                            fontWeight: 600,
                          }}
                        >
                          Distance
                        </th>

                        <th
                          style={{
                            padding: "1rem 1.2rem",
                            fontWeight: 600,
                          }}
                        >
                          Travel Time
                        </th>

                        <th
                          style={{
                            padding: "1rem 1.2rem",
                            fontWeight: 600,
                          }}
                        >
                          Starting Fare
                        </th>

                        <th
                          style={{
                            padding: "1rem 1.2rem",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {relatedRoutes.slice(0, 8).map((route, index) => {
                        const distance = Number(route.distanceKm) || 0;

                        /*
                         * Use the cheapest fleet vehicle as the
                         * starting fare calculation.
                         */
                        const cheapestVehicle =
                          fleet.length > 0
                            ? fleet.reduce((cheapest, current) =>
                                current.ratePerKm < cheapest.ratePerKm
                                  ? current
                                  : cheapest,
                              )
                            : null;

                        const estimatedFare = cheapestVehicle
                          ? Math.round(
                              distance * 2 * cheapestVehicle.ratePerKm +
                                cheapestVehicle.driverAllowance * 2,
                            )
                          : 0;

                        return (
                          <tr
                            key={route.routeSlug || index}
                            style={{
                              borderBottom:
                                index < Math.min(relatedRoutes.length, 8) - 1
                                  ? "1px solid #ecf0f7"
                                  : "none",
                              transition: "all 0.2s ease",
                            }}
                            className="route-table-row"
                          >
                            {/* Route */}
                            <td
                              style={{
                                padding: "1rem 1.2rem",
                              }}
                            >
                              <Link
                                href={`/routes/${route.routeSlug}`}
                                style={{
                                  color: "#0052CC",
                                  fontWeight: 600,
                                  textDecoration: "none",
                                }}
                              >
                                {route.origin} to {route.destination}
                              </Link>
                            </td>

                            {/* Distance */}
                            <td
                              style={{
                                padding: "1rem 1.2rem",
                                color: "#4a5a6e",
                                fontWeight: 500,
                              }}
                            >
                              {route.distanceKm} KM
                            </td>

                            {/* Duration */}
                            <td
                              style={{
                                padding: "1rem 1.2rem",
                                color: "#4a5a6e",
                              }}
                            >
                              {route.durationHrs}
                            </td>

                            {/* Estimated Fare */}
                            <td
                              style={{
                                padding: "1rem 1.2rem",
                                fontWeight: 700,
                                color: "#0b1a2e",
                              }}
                            >
                              {formatCurrency(estimatedFare)}
                              <span
                                style={{
                                  display: "block",
                                  fontSize: "0.7rem",
                                  fontWeight: 400,
                                  color: "#7a8a9e",
                                  marginTop: "0.15rem",
                                }}
                              >
                                approx. round trip
                              </span>
                            </td>

                            {/* Action */}
                            <td
                              style={{
                                padding: "1rem 1.2rem",
                                textAlign: "center",
                              }}
                            >
                              <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                  `I want to book an Urbania Tempo Traveller from ${route.origin} to ${route.destination}. Please share the latest fare and availability.`,
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="table-book-btn"
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "0.4rem",
                                  padding: "0.4rem 1.2rem",
                                  borderRadius: "40px",
                                  background: "#0052CC",
                                  color: "#fff",
                                  fontWeight: 600,
                                  fontSize: "0.8rem",
                                  textDecoration: "none",
                                  transition: "all 0.2s ease",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                <MessageSquare size={14} /> Get Quote
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p
              style={{
                fontSize: "0.8rem",
                color: "#7a8a9e",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              * Fare estimates are indicative only. Actual pricing may vary
              based on vehicle availability, travel dates, route conditions,
              tolls, parking, taxes, driver allowance, and trip duration.
              Contact us for the latest Urbania fare in {city.name}.
            </p>
          </div>
        </section>

        {/* ===== ROUTES SECTION ===== */}
        {relatedRoutes.length > 0 && (
          <section className="section-padding">
            <div
              className="container"
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 1.5rem",
              }}
            >
              <div className="section-header">
                <h2 className="section-title">More Routes</h2>
              </div>

              <div className="routes-grid">
                {relatedRoutes.map((item) => (
                  <div key={item.routeSlug} className="route-card">
                    <h3 className="route-dest">
                      {item.origin} to {item.destination}
                    </h3>
                    <p className="route-meta">
                      <Road size={14} /> {item.distanceKm} KM ·{" "}
                      <Clock size={14} /> {item.durationHrs}
                    </p>
                    <Link
                      href={`/routes/${item.routeSlug}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Route
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== PERFECT FOR EVERY JOURNEY SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#ffffff" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Star size={14} /> Perfect for Every Journey
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Your Ideal Travel Companion in {city.name}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Whether it's a family vacation, corporate event, or pilgrimage
                tour, Urbania Tempo Traveller is perfect for every journey in{" "}
                {city.name}.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Family Trips",
                  desc: `Spacious and comfortable travel for the whole family in ${city.name}.`,
                },
                {
                  icon: "💼",
                  title: "Corporate Events",
                  desc: `Professional and reliable transport for business meetings and events.`,
                },
                {
                  icon: "🛕",
                  title: "Pilgrimage Tours",
                  desc: `Comfortable journeys to temples and religious sites in and around ${city.name}.`,
                },
                {
                  icon: "🎉",
                  title: "Wedding Parties",
                  desc: `Luxury travel for wedding guests and family members in ${city.name}.`,
                },
                {
                  icon: "🏖️",
                  title: "Sightseeing Tours",
                  desc: `Explore the best attractions of ${city.name} with our premium fleet.`,
                },
                {
                  icon: "✈️",
                  title: "Airport Transfers",
                  desc: `Reliable and punctual pickup and drop-off to ${city.name} airport.`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f9fafc",
                    padding: "1.5rem",
                    borderRadius: "20px",
                    textAlign: "center",
                    border: "1px solid #ecf0f7",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  className="journey-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(0, 82, 204, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.background = "#f9fafc";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#0b1a2e",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4a5a6e",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW BOOKING WORKS SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#f9fafc" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Calendar size={14} /> How Booking Works
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Book Your Urbania in {city.name} in 4 Simple Steps
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Quick and hassle-free booking process for your Urbania Tempo
                Traveller in {city.name}.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                position: "relative",
              }}
            >
              {[
                {
                  step: "1",
                  icon: <MessageSquare size={28} />,
                  title: "Contact Us",
                  desc: `Reach out via WhatsApp or phone with your travel details in ${city.name}.`,
                },
                {
                  step: "2",
                  icon: <Calendar size={28} />,
                  title: "Get Quote",
                  desc: `Receive a transparent quote based on your itinerary and group size.`,
                },
                {
                  step: "3",
                  icon: <CheckCircle2 size={28} />,
                  title: "Confirm Booking",
                  desc: `Pay a token advance to confirm your Urbania booking in ${city.name}.`,
                },
                {
                  step: "4",
                  icon: <Users size={28} />,
                  title: "Enjoy Travel",
                  desc: `Our chauffeur arrives on time for your comfortable journey in ${city.name}.`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    background: "#fff",
                    padding: "2rem 1.5rem",
                    borderRadius: "24px",
                    textAlign: "center",
                    border: "1px solid #ecf0f7",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                    cursor: "pointer",
                    transform: "scale(1)",
                  }}
                  className="step-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0, 82, 204, 0.12)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.02)";
                    e.currentTarget.style.background = "#fff";
                  }}
                >
                  {/* Step Number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      margin: "0 auto 1rem",
                      background: "#eef3ff",
                      color: "#0052CC",
                      borderRadius: "50%",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      transition: "all 0.3s ease",
                    }}
                    className="step-number"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0052CC";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#eef3ff";
                      e.currentTarget.style.color = "#0052CC";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      color: "#0052CC",
                      marginBottom: "0.5rem",
                      transition: "transform 0.3s ease",
                    }}
                    className="step-icon"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#0b1a2e",
                      transition: "color 0.3s ease",
                    }}
                    className="step-title"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0052CC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0b1a2e";
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4a5a6e",
                      lineHeight: "1.6",
                      transition: "color 0.3s ease",
                    }}
                    className="step-desc"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1a2634";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4a5a6e";
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Decorative bottom line on hover */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #0052CC 0%, #0770E3 100%)",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition:
                        "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="step-bottom-line"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scaleX(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scaleX(0)";
                    }}
                  />

                  {/* Connector Line (except last) - Only visible on desktop */}
                  {index < 3 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "30%",
                        right: "-1rem",
                        width: "2rem",
                        height: "2px",
                        background: "#0052CC",
                        opacity: 0.3,
                        display: "none",
                      }}
                      className="step-connector"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Quick Booking CTA */}
            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                padding: "2rem",
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #ecf0f7",
                transition: "all 0.3s ease",
              }}
              className="booking-cta"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0052CC";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0, 82, 204, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ecf0f7";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "#4a5a6e",
                  marginBottom: "1rem",
                }}
              >
                Ready to book your Urbania in {city.name}?
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.8rem 2.5rem",
                  borderRadius: "50px",
                  background: "#25D366",
                  color: "#fff",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                className="booking-cta-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37, 211, 102, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageSquare size={20} /> Book Now
              </a>
            </div>
          </div>
        </section>

        {/* ===== CUSTOMER REVIEWS SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#ffffff" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Star size={14} /> Customer Reviews
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                What Our Customers Say
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Real reviews from happy travelers who booked Urbania Tempo
                Traveller in {city.name}.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  name: "Rahul Sharma",
                  location: city.name,
                  rating: 5,
                  text: `Excellent service! The Urbania was spotless and the driver was very professional. Highly recommend for group travel in ${city.name}.`,
                  date: "2 weeks ago",
                  avatar: "R",
                },
                {
                  name: "Priya Patel",
                  location: city.name,
                  rating: 5,
                  text: `Booked for a family trip from Delhi to ${city.name}. The vehicle was comfortable and the pricing was transparent. Will book again!`,
                  date: "1 month ago",
                  avatar: "P",
                },
                {
                  name: "Amit Kumar",
                  location: city.name,
                  rating: 4,
                  text: `Great experience with Urbania. The 12-seater was perfect for our corporate team outing in ${city.name}. Punctual and well-maintained.`,
                  date: "3 weeks ago",
                  avatar: "A",
                },
                {
                  name: "Sneha Reddy",
                  location: city.name,
                  rating: 5,
                  text: `We had an amazing trip to ${city.name} with Urbania. The vehicle was luxurious and the driver was very knowledgeable about local spots.`,
                  date: "2 months ago",
                  avatar: "S",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f9fafc",
                    padding: "1.5rem",
                    borderRadius: "20px",
                    border: "1px solid #ecf0f7",
                    transition: "all 0.3s ease",
                  }}
                  className="review-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(0, 82, 204, 0.08)";
                    e.currentTarget.style.background = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "#f9fafc";
                  }}
                >
                  {/* Rating Stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? "#FFB800" : "none"}
                        color={i < review.rating ? "#FFB800" : "#d1d5db"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    style={{
                      color: "#1a2634",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                      fontStyle: "italic",
                    }}
                  >
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      borderTop: "1px solid #ecf0f7",
                      paddingTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#0052CC",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#0b1a2e",
                          fontSize: "0.95rem",
                        }}
                      >
                        {review.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#7a8a9e",
                        }}
                      >
                        {review.date} · {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#ffffff" }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <MessageSquare size={14} /> FAQ
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Common questions about Urbania Tempo Traveller hire in{" "}
                {city.name}.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                maxWidth: "820px",
                margin: "0 auto",
              }}
            >
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section
          style={{
            padding: "4rem 0",
            background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              Ready to Explore {city.name}?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                opacity: 0.9,
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Book your Urbania Tempo Traveller today and experience luxury
              group travel.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 3rem",
                borderRadius: "50px",
                background: "#25D366",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "0.2s",
                border: "none",
                cursor: "pointer",
              }}
            >
              <MessageSquare size={22} /> Get Instant Quote
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
