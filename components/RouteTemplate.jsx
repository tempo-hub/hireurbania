"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  MessageSquare,
  Phone,
  Road,
  Users,
  ArrowRight,
  MapPin,
  Shield,
  Star,
  Luggage,
  Car,
  Wallet,
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Calendar,
  Lightbulb,
  Fuel,
  Camera,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  ShieldCheck,
  IndianRupee,
  UserCheck,
  Headphones,
  BusFront,
  MapPinned,
  Sparkles,
  CalendarCheck,
  Route,
  Info,
  Coffee,
  Utensils,
  Hotel,
} from "lucide-react";
import CityGuide from "./CityGuide";
import Footer from "./Footer";
import {
  getRoadType,
  getHighwayName,
  getRoadCondition,
  getBestSeason,
  getStopovers,
  getTravelTips,
} from "@/lib/routesData";

// ========== FAQ ITEM COMPONENT ==========
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

// ========== SEO COMPONENT ==========
function RouteSeo({ route }) {
  const title =
    route.metaTitle ||
    `Force Urbania ${route.origin} to ${route.destination} | Tempo Traveller Hire`;
  const description =
    route.metaDescription ||
    `Book Force Urbania tempo traveller from ${route.origin} to ${route.destination}. ${route.distanceKm}km, ${route.durationHrs} journey with luxury seating, AC, and experienced chauffeurs.`;

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
        href={`https://hireurbaniatempotraveller.com/routes/${route.routeSlug}`}
      />

      {/* Route-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Urbania Tempo Traveller ${route.origin} to ${route.destination}`,
            description: description,
            brand: {
              "@type": "Brand",
              name: "Force Urbania",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceType: "https://schema.org/RentalCarReservation",
                unitText: "km",
              },
            },
          }),
        }}
      />
    </>
  );
}

// ========== MAIN COMPONENT ==========
export default function RouteTemplate({
  city,
  route,
  relatedRoutes,
  fleet,
  cityGuide,
}) {
  const whatsappNumber = "918448445504";

  const whatsappText = encodeURIComponent(
    `Booking Query for Force Urbania ${route.origin} to ${route.destination}`,
  );
  const roundTripDistance = route.distanceKm * 2;

  // ========== FAQ STATE ==========
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

  // ========== DYNAMIC FAQS FOR ROUTE ==========
  const generateRouteFAQs = (route) => {
    const estimatedFare = Math.round(
      roundTripDistance * 28 + 600 * 3,
    ).toLocaleString("en-IN");

    return [
      {
        q: `What is the distance and travel time from ${route.origin} to ${route.destination}?`,
        a: `The distance from ${route.origin} to ${route.destination} is approximately ${route.distanceKm} kilometers, and the travel time is around ${route.durationHrs}. The actual time may vary depending on road conditions, traffic, and weather.`,
      },
      {
        q: `How much does it cost to hire a Force Urbania from ${route.origin} to ${route.destination}?`,
        a: `The estimated fare for a round trip from ${route.origin} to ${route.destination} starts from ₹${estimatedFare}. This includes the base fare, driver allowance, and minimum kilometer charges. Final fare may vary based on the seater variant, actual route taken, tolls, taxes, and additional halts. Contact us for a precise quote tailored to your itinerary.`,
      },
      {
        q: `What seater options are available for the ${route.origin} to ${route.destination} route?`,
        a: `We offer multiple Force Urbania variants for this route including 9-Seater VIP, 12-Seater Executive, 16-Seater Deluxe, 17-Seater Super Luxury, and 20-Seater Maharaja. Each variant comes with premium features like reclining leather seats, individual AC vents, USB charging ports, and ample luggage space.`,
      },
      {
        q: `What amenities are included in the Force Urbania for the ${route.origin} to ${route.destination} trip?`,
        a: `Our Force Urbania fleet comes equipped with plush pushback seats, powerful air conditioning with individual vents, entertainment systems (TV/Music), USB charging ports, reading lights, curtains for privacy, and spacious luggage storage. All vehicles are regularly sanitized and maintained to the highest standards.`,
      },
      {
        q: `Can I book a one-way trip from ${route.origin} to ${route.destination}?`,
        a: `Yes, we offer both one-way and round-trip bookings. For one-way trips from ${route.origin} to ${route.destination}, the fare is calculated based on the total distance with applicable rates. Please contact us for a customized one-way quote as charges may vary based on availability and vehicle type.`,
      },
      {
        q: `What is the booking process for ${route.origin} to ${route.destination}?`,
        a: `Booking is simple and quick! Click the "Book on WhatsApp" button or call us directly. Share your travel dates, group size, and specific requirements. We'll provide an instant quote, and once you confirm, we'll send vehicle details, driver information, and trip confirmation within 24 hours of departure.`,
      },
      {
        q: `How early should I book the Urbania for ${route.origin} to ${route.destination}?`,
        a: `We recommend booking at least 2-3 days in advance to ensure availability, especially during peak seasons, weekends, and holidays. For last-minute bookings, please contact us directly, and we'll do our best to accommodate your request.`,
      },
      {
        q: `Are there any hidden charges for the ${route.origin} to ${route.destination} trip?`,
        a: `No, we believe in complete transparency. Our pricing is all-inclusive with no hidden charges. The final fare may include tolls, state taxes, parking fees, and driver allowances, which will be clearly mentioned in your quote before booking. We recommend confirming all charges at the time of booking.`,
      },
      {
        q: `Do you provide drivers for the ${route.origin} to ${route.destination} route?`,
        a: `Yes, all our Force Urbania rentals come with experienced, verified, and professional chauffeurs. Our drivers are familiar with the ${route.origin} to ${route.destination} route, ensuring a safe, comfortable, and timely journey.`,
      },
      {
        q: `Can I customize the itinerary for my ${route.origin} to ${route.destination} trip?`,
        a: `Absolutely! We offer customized itineraries for ${route.origin} to ${route.destination} travel. Whether you want to add sightseeing stops, visit local attractions, or plan multiple halts, we can tailor the trip to your preferences. Just let us know your requirements when booking.`,
      },
    ];
  };

  const routeFAQs = generateRouteFAQs(route);

  // ========== ROUTE GUIDE STATE ==========
  const [expandedSections, setExpandedSections] = useState({
    stopovers: true,
    tips: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <RouteSeo route={route} />

      <main className="route-template">
        {/* ===== HERO SECTION ===== */}
        <section
          className="route-hero"
          style={{
            paddingTop: "8.5rem",
            paddingBottom: "4rem",
            background: "linear-gradient(160deg, #003ea6 0%, #0770E3 100%)",
            color: "#FFF",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background */}
          <div
            style={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: "50%",
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
                }}
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/cities"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                }}
              >
                Cities
              </Link>
              <span>/</span>
              <span style={{ color: "#FFB800", fontWeight: 600 }}>
                {route.origin} to {route.destination}
              </span>
            </nav>

            <div
              className="route-hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.9fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Left Column */}
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
                    marginBottom: "0.5rem",
                  }}
                >
                  <Award size={14} /> Premium Route
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    color: "#FFF",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: "0.5rem",
                  }}
                >
                  Force Urbania{" "}
                  <span style={{ color: "#FFB800" }}>
                    {route.origin} to {route.destination}
                  </span>
                </h1>

                <p
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "1.05rem",
                    lineHeight: "1.7",
                    maxWidth: "660px",
                  }}
                >
                  Hire a luxury Force Urbania for your{" "}
                  {route.category?.toLowerCase() || "comfortable"} journey.
                  Enjoy plush pushback seats, powerful AC, spacious luggage
                  storage, and a verified chauffeur.
                </p>

                {/* Route Stats */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    margin: "1.5rem 0",
                    padding: "1rem 0",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <Road size={18} /> {route.distanceKm} KM
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <Clock size={18} /> {route.durationHrs}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <Users size={18} /> Up to 20 Seats
                  </span>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                    <MessageSquare size={20} /> Book on WhatsApp
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

              {/* Right Column - Quick Info Card */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  padding: "2rem",
                  boxShadow: "0 24px 48px -12px rgba(0, 30, 80, 0.35)",
                  color: "#1a2634",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.2rem",
                  }}
                >
                  Quick Trip Info
                </h3>
                <p
                  style={{
                    color: "#5b6b7e",
                    fontSize: "0.9rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Everything you need to know at a glance
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    <MapPin size={18} color="#0052CC" />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        From
                      </div>
                      <strong>{route.origin}</strong>
                    </div>
                    <ArrowRight
                      size={16}
                      color="#7a8a9e"
                      style={{ margin: "0 0.2rem" }}
                    />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        To
                      </div>
                      <strong>{route.destination}</strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    <Road size={18} color="#0052CC" />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        Distance
                      </div>
                      <strong>{route.distanceKm} KM</strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    <Clock size={18} color="#0052CC" />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        Duration
                      </div>
                      <strong>{route.durationHrs}</strong>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    <Car size={18} color="#0052CC" />
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        Vehicle Type
                      </div>
                      <strong>Force Urbania Tempo Traveller</strong>
                    </div>
                  </div>

                  {route.popularAttractions &&
                    route.popularAttractions.length > 0 && (
                      <div
                        style={{
                          marginTop: "0.5rem",
                          padding: "1rem",
                          background: "#f0f4fe",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#7a8a9e",
                            marginBottom: "0.3rem",
                          }}
                        >
                          Popular Attractions
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.3rem",
                          }}
                        >
                          {route.popularAttractions
                            .slice(0, 3)
                            .map((attraction, idx) => (
                              <span
                                key={idx}
                                style={{
                                  background: "#0052CC",
                                  color: "#fff",
                                  padding: "0.1rem 0.6rem",
                                  borderRadius: "12px",
                                  fontSize: "0.7rem",
                                }}
                              >
                                {attraction}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ROUTE HIGHLIGHTS ===== */}
        <section
          className="route-highlights-section"
          style={{
            padding: "4rem 0",
            background: "#ffffff",
          }}
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
                margin: "0 auto 2.5rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.3rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.2px",
                }}
              >
                <Road size={14} />
                Route Information
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                  fontWeight: 700,
                  margin: "0.7rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                {route.origin} to {route.destination} Route Highlights
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#4a5a6e",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Get complete travel information including distance, travel time,
                road condition, and the recommended Force Urbania for your
                journey.
              </p>
            </div>

            {/* Highlight Cards */}
            <div
              className="route-highlights-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.25rem",
              }}
            >
              {/* Distance */}
              <div
                className="route-highlight-card"
                style={{
                  background: "#f9fafc",
                  border: "1px solid #e8edf5",
                  borderRadius: "18px",
                  padding: "1.5rem 1.2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 82, 204, 0.10)";
                  e.currentTarget.style.borderColor = "#0052CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e8edf5";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 auto 0.8rem",
                    borderRadius: "50%",
                    background: "#eef3ff",
                    color: "#0052CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Road size={25} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#7a8a9e",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                  }}
                >
                  Distance
                </div>

                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                  }}
                >
                  {route.distanceKm} KM
                </div>
              </div>

              {/* Travel Time */}
              <div
                className="route-highlight-card"
                style={{
                  background: "#f9fafc",
                  border: "1px solid #e8edf5",
                  borderRadius: "18px",
                  padding: "1.5rem 1.2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 82, 204, 0.10)";
                  e.currentTarget.style.borderColor = "#0052CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e8edf5";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 auto 0.8rem",
                    borderRadius: "50%",
                    background: "#eef3ff",
                    color: "#0052CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Clock size={25} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#7a8a9e",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                  }}
                >
                  Travel Time
                </div>

                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                  }}
                >
                  {route.durationHrs}
                </div>
              </div>

              {/* Road Condition */}
              <div
                className="route-highlight-card"
                style={{
                  background: "#f9fafc",
                  border: "1px solid #e8edf5",
                  borderRadius: "18px",
                  padding: "1.5rem 1.2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 82, 204, 0.10)";
                  e.currentTarget.style.borderColor = "#0052CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e8edf5";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 auto 0.8rem",
                    borderRadius: "50%",
                    background: "#eef3ff",
                    color: "#0052CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={25} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#7a8a9e",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                  }}
                >
                  Road Condition
                </div>

                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#16803c",
                  }}
                >
                  {route.roadCondition || "Excellent"}
                </div>
              </div>

              {/* Recommended Vehicle */}
              <div
                className="route-highlight-card"
                style={{
                  background: "#f9fafc",
                  border: "1px solid #e8edf5",
                  borderRadius: "18px",
                  padding: "1.5rem 1.2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 82, 204, 0.10)";
                  e.currentTarget.style.borderColor = "#0052CC";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#e8edf5";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 auto 0.8rem",
                    borderRadius: "50%",
                    background: "#eef3ff",
                    color: "#0052CC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Car size={25} />
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#7a8a9e",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                  }}
                >
                  Recommended Vehicle
                </div>

                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                    lineHeight: "1.4",
                  }}
                >
                  {route.recommendedVehicle || "12 Seater Force Urbania"}
                </div>
              </div>
            </div>

            {/* Route Summary */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.2rem 1.5rem",
                background: "#f0f4fe",
                borderRadius: "16px",
                border: "1px solid #dce7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                textAlign: "center",
                color: "#0b1a2e",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              <MapPin size={18} color="#0052CC" style={{ flexShrink: 0 }} />

              <span>
                <strong>{route.origin}</strong>
                {" → "}
                <strong>{route.destination}</strong>
                {" · "}
                {route.distanceKm} KM · {route.durationHrs} · Comfortable Force
                Urbania travel with a professional chauffeur.
              </span>
            </div>
          </div>

          {/* Responsive Styles */}
          <style jsx>{`
            @media (max-width: 1000px) {
              .route-highlights-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }

            @media (max-width: 600px) {
              .route-highlights-section {
                padding: 3rem 0 !important;
              }

              .route-highlights-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }

              .route-highlight-card {
                padding: 1.3rem 1rem !important;
              }
            }
          `}</style>
        </section>

        {/* ===== FARE ESTIMATE TABLE ===== */}
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
                <Wallet size={14} /> Route Details
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                {route.origin} to {route.destination} Fare Estimate
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Final fare depends on dates, tolls, taxes, and trip duration.
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
                  minWidth: "600px",
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
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Vehicle
                    </th>
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Rate
                    </th>
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Estimated Round Trip
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
                        transition: "0.2s",
                        cursor: "pointer",
                      }}
                      className="route-table-row"
                    >
                      <td style={{ padding: "1rem 1.2rem" }}>
                        <div>
                          <strong style={{ display: "block" }}>
                            {model.name}
                          </strong>
                          <small
                            style={{ color: "#7a8a9e", fontSize: "0.75rem" }}
                          >
                            {model.capacity} · {model.luggageCapacity}
                          </small>
                        </div>
                      </td>
                      <td style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
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
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          fontWeight: 700,
                          color: "#0b1a2e",
                        }}
                      >
                        {formatCurrency(
                          Math.round(
                            roundTripDistance * model.ratePerKm +
                              model.driverAllowance * 3,
                          ),
                        )}
                      </td>
                      <td
                        style={{ padding: "1rem 1.2rem", textAlign: "center" }}
                      >
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Book ${model.name} from ${route.origin} to ${route.destination}`,
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
                            transition: "0.2s",
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

            <p
              style={{
                fontSize: "0.8rem",
                color: "#7a8a9e",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              * Estimates include driver allowance for 3 days. Final fare may
              vary based on actual route, tolls, and taxes.
            </p>
          </div>
        </section>

        {/* ===== WHY BOOK URBANIA WITH US ===== */}
        <section className="why-urbania-section">
          <div className="why-urbania-container">
            {/* Header */}
            <div className="why-urbania-header">
              <div className="why-urbania-badge">
                <ShieldCheck size={15} />
                Why Choose HireUrbania
              </div>

              <h2 className="why-urbania-title">
                Why Book Force Urbania With Us?
              </h2>

              <p className="why-urbania-description">
                Premium Urbania rentals with professional service, transparent
                pricing, and comfortable travel across India.
              </p>
            </div>

            {/* Features */}
            <div className="why-urbania-grid">
              {/* Transparent Pricing */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <IndianRupee size={24} />
                </div>

                <h3>Transparent Pricing</h3>

                <p>Clear fares with no hidden charges.</p>
              </div>

              {/* Verified Drivers */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <UserCheck size={24} />
                </div>

                <h3>Verified Drivers</h3>

                <p>Experienced and professional chauffeurs.</p>
              </div>

              {/* 24x7 Support */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <Headphones size={24} />
                </div>

                <h3>24×7 Customer Support</h3>

                <p>Assistance before and throughout your journey.</p>
              </div>

              {/* Premium Urbania */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <BusFront size={24} />
                </div>

                <h3>Premium Force Urbania</h3>

                <p>Clean, comfortable, and well-maintained vehicles.</p>
              </div>

              {/* GPS */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <MapPinned size={24} />
                </div>

                <h3>GPS Enabled Vehicles</h3>

                <p>Track your journey with GPS-enabled vehicles.</p>
              </div>

              {/* Sanitized */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <Sparkles size={24} />
                </div>

                <h3>Sanitized Vehicles</h3>

                <p>Clean and hygienic vehicles for every trip.</p>
              </div>

              {/* Instant Booking */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <CalendarCheck size={24} />
                </div>

                <h3>Quick & Easy Booking</h3>

                <p>Book your Urbania online or through WhatsApp.</p>
              </div>

              {/* Trip Assistance */}
              <div className="why-urbania-card">
                <div className="why-urbania-icon">
                  <Route size={24} />
                </div>

                <h3>Trip Assistance</h3>

                <p>Get route, travel, and trip-planning assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CITY GUIDE SECTION ===== */}
        {cityGuide && (
          <section className="city-guide-section">
            <div className="city-guide-container">
              <CityGuide cityData={cityGuide} route={route} />
            </div>

            <style jsx>{`
              .city-guide-section {
                width: 100%;
                background: #ffffff;
                padding: 4rem 0;
                overflow: hidden;
              }

              .city-guide-container {
                width: 100%;
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 1.5rem;
                box-sizing: border-box;
              }

              @media (max-width: 1024px) {
                .city-guide-section {
                  padding: 3.5rem 0;
                }

                .city-guide-container {
                  padding: 0 1.25rem;
                }
              }

              @media (max-width: 768px) {
                .city-guide-section {
                  padding: 3rem 0;
                }

                .city-guide-container {
                  padding: 0 1rem;
                }
              }

              @media (max-width: 480px) {
                .city-guide-section {
                  padding: 2.5rem 0;
                }

                .city-guide-container {
                  padding: 0 0.75rem;
                }
              }

              @media (max-width: 359px) {
                .city-guide-section {
                  padding: 2rem 0;
                }

                .city-guide-container {
                  padding: 0 0.6rem;
                }
              }
            `}</style>
          </section>
        )}

        {/* ===== HOW BOOKING WORKS SECTION ===== */}
        <section className="how-booking-section">
          <div className="how-booking-container">
            {/* ================= SECTION HEADER ================= */}
            <div className="booking-section-header">
              <div className="booking-section-badge">
                <Calendar size={14} />
                <span>How Booking Works</span>
              </div>

              <h2 className="booking-section-title">
                Book Your{" "}
                <span>
                  {route.origin} to {route.destination}
                </span>{" "}
                Urbania in 4 Simple Steps
              </h2>

              <p className="booking-section-description">
                Quick and hassle-free booking process for your {route.origin} to{" "}
                {route.destination} Urbania Tempo Traveller journey.
              </p>
            </div>

            {/* ================= BOOKING STEPS ================= */}
            <div className="booking-steps-grid">
              {[
                {
                  step: "1",
                  icon: <MessageSquare size={28} />,
                  title: "Contact Us",
                  desc: `Reach out via WhatsApp or phone with your ${route.origin} to ${route.destination} travel details.`,
                },
                {
                  step: "2",
                  icon: <Calendar size={28} />,
                  title: "Get Quote",
                  desc: `Receive a transparent quote based on your ${route.origin} to ${route.destination} itinerary and group size.`,
                },
                {
                  step: "3",
                  icon: <CheckCircle2 size={28} />,
                  title: "Confirm Booking",
                  desc: `Pay a token advance to confirm your Urbania booking for the ${route.origin} to ${route.destination} route.`,
                },
                {
                  step: "4",
                  icon: <Users size={28} />,
                  title: "Enjoy Travel",
                  desc: `Our chauffeur arrives on time for your comfortable ${route.origin} to ${route.destination} journey.`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="booking-step-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0, 82, 204, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.02)";
                  }}
                >
                  {/* Step Number */}
                  <div className="booking-step-number">{item.step}</div>

                  {/* Icon */}
                  <div className="booking-step-icon">{item.icon}</div>

                  {/* Title */}
                  <h3 className="booking-step-title">{item.title}</h3>

                  {/* Description */}
                  <p className="booking-step-description">{item.desc}</p>

                  {/* Decorative Bottom Line */}
                  <div className="booking-step-accent" />

                  {/* Connector */}
                  {index < 3 && <div className="booking-step-connector" />}
                </div>
              ))}
            </div>

            {/* ================= QUICK BOOKING CTA ================= */}
            <div
              className="booking-quick-cta"
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
              <p className="booking-cta-text">
                Ready to book your Urbania for the{" "}
                <strong>
                  {route.origin} to {route.destination}
                </strong>{" "}
                route?
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Book Force Urbania from ${route.origin} to ${route.destination} - Trip Date: [Your Date] - Group Size: [Number]`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-cta-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(37, 211, 102, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageSquare size={20} />
                <span>Book Now</span>
              </a>
            </div>
          </div>

          {/* =========================================================
      RESPONSIVE CSS
  ========================================================= */}
          <style jsx>{`
            /* =====================================================
       MAIN SECTION
    ===================================================== */

            .how-booking-section {
              width: 100%;
              background: #f9fafc;
              padding: 4rem 0;
              overflow: hidden;
              box-sizing: border-box;
            }

            .how-booking-container {
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
            }

            /* =====================================================
       SECTION HEADER
    ===================================================== */

            .booking-section-header {
              width: 100%;
              max-width: 780px;
              margin: 0 auto 3rem;
              text-align: center;
            }

            .booking-section-badge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;

              background: #eef3ff;
              color: #0052cc;

              padding: 0.25rem 1.2rem;
              border-radius: 40px;

              font-size: 0.8rem;
              font-weight: 600;

              box-sizing: border-box;
            }

            .booking-section-title {
              margin: 0.5rem 0 0.75rem;

              font-size: 2.3rem;
              font-weight: 700;
              line-height: 1.25;

              color: #0b1a2e;

              overflow-wrap: anywhere;
            }

            .booking-section-title span {
              color: #0052cc;
            }

            .booking-section-description {
              margin: 0;

              font-size: 1.05rem;
              color: #4a5a6e;
              line-height: 1.6;

              overflow-wrap: anywhere;
            }

            /* =====================================================
       BOOKING STEPS GRID
    ===================================================== */

            .booking-steps-grid {
              width: 100%;

              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));

              gap: 2rem;

              position: relative;

              box-sizing: border-box;
            }

            /* =====================================================
       STEP CARD
    ===================================================== */

            .booking-step-card {
              position: relative;

              width: 100%;
              min-width: 0;

              background: #ffffff;

              padding: 2rem 1.5rem;

              border-radius: 24px;
              border: 1px solid #ecf0f7;

              text-align: center;

              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);

              cursor: pointer;

              overflow: hidden;

              box-sizing: border-box;

              transition:
                transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s ease,
                box-shadow 0.3s ease;
            }

            /* =====================================================
       STEP NUMBER
    ===================================================== */

            .booking-step-number {
              width: 50px;
              height: 50px;

              margin: 0 auto 1rem;

              display: flex;
              align-items: center;
              justify-content: center;

              background: #eef3ff;
              color: #0052cc;

              border-radius: 50%;

              font-size: 1.5rem;
              font-weight: 700;

              box-sizing: border-box;

              transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
            }

            .booking-step-card:hover .booking-step-number {
              background: #0052cc;
              color: #ffffff;
              transform: scale(1.08);
            }

            /* =====================================================
       STEP ICON
    ===================================================== */

            .booking-step-icon {
              display: flex;
              align-items: center;
              justify-content: center;

              color: #0052cc;

              margin-bottom: 0.5rem;

              transition: transform 0.3s ease;
            }

            .booking-step-card:hover .booking-step-icon {
              transform: scale(1.1);
            }

            /* =====================================================
       STEP TITLE
    ===================================================== */

            .booking-step-title {
              margin: 0 0 0.5rem;

              font-size: 1.1rem;
              font-weight: 700;
              line-height: 1.4;

              color: #0b1a2e;

              transition: color 0.3s ease;
            }

            .booking-step-card:hover .booking-step-title {
              color: #0052cc;
            }

            /* =====================================================
       STEP DESCRIPTION
    ===================================================== */

            .booking-step-description {
              margin: 0;

              font-size: 0.9rem;
              color: #4a5a6e;
              line-height: 1.6;

              overflow-wrap: anywhere;

              transition: color 0.3s ease;
            }

            .booking-step-card:hover .booking-step-description {
              color: #1a2634;
            }

            /* =====================================================
       BOTTOM ACCENT
    ===================================================== */

            .booking-step-accent {
              position: absolute;

              bottom: 0;
              left: 0;
              right: 0;

              height: 3px;

              background: linear-gradient(90deg, #0052cc 0%, #0770e3 100%);

              transform: scaleX(0);
              transform-origin: left;

              transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .booking-step-card:hover .booking-step-accent {
              transform: scaleX(1);
            }

            /* =====================================================
       CONNECTOR
    ===================================================== */

            .booking-step-connector {
              position: absolute;

              top: 50%;
              right: -2rem;

              width: 2rem;
              height: 2px;

              background: #0052cc;
              opacity: 0.3;

              transform: translateY(-50%);

              pointer-events: none;
            }

            /* =====================================================
       QUICK CTA
    ===================================================== */

            .booking-quick-cta {
              width: 100%;

              margin-top: 3rem;

              padding: 2rem;

              background: #ffffff;

              border-radius: 20px;
              border: 1px solid #ecf0f7;

              text-align: center;

              box-sizing: border-box;

              transition:
                border-color 0.3s ease,
                box-shadow 0.3s ease;
            }

            .booking-cta-text {
              margin: 0 0 1rem;

              font-size: 1rem;
              color: #4a5a6e;

              line-height: 1.5;

              overflow-wrap: anywhere;
            }

            .booking-cta-text strong {
              color: #0b1a2e;
              font-weight: 700;
            }

            .booking-cta-btn {
              display: inline-flex;

              align-items: center;
              justify-content: center;

              gap: 0.6rem;

              min-height: 46px;

              padding: 0.8rem 2.5rem;

              border-radius: 50px;

              background: #25d366;
              color: #ffffff;

              font-size: 1rem;
              font-weight: 700;

              text-decoration: none;

              cursor: pointer;

              box-sizing: border-box;

              transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
            }

            .booking-cta-btn :global(svg) {
              flex-shrink: 0;
            }

            /* =====================================================
       LARGE LAPTOP
    ===================================================== */

            @media (max-width: 1200px) {
              .how-booking-container {
                padding: 0 1.25rem;
              }

              .booking-steps-grid {
                gap: 1.5rem;
              }

              .booking-step-card {
                padding: 1.75rem 1.25rem;
              }

              .booking-step-connector {
                right: -1.5rem;
                width: 1.5rem;
              }
            }

            /* =====================================================
       TABLET / SMALL LAPTOP
    ===================================================== */

            @media (max-width: 1024px) {
              .how-booking-section {
                padding: 3.5rem 0;
              }

              .booking-section-header {
                margin-bottom: 2.5rem;
              }

              .booking-section-title {
                font-size: 2rem;
              }

              .booking-steps-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1.5rem;
              }

              .booking-step-card {
                padding: 1.75rem 1.25rem;
              }

              /* Hide connector on 2x2 layout */
              .booking-step-connector {
                display: none;
              }

              .booking-quick-cta {
                margin-top: 2.5rem;
              }
            }

            /* =====================================================
       TABLET
    ===================================================== */

            @media (max-width: 768px) {
              .how-booking-section {
                padding: 3rem 0;
              }

              .how-booking-container {
                padding: 0 1rem;
              }

              .booking-section-header {
                margin-bottom: 2rem;
              }

              .booking-section-badge {
                font-size: 0.75rem;
                padding: 0.25rem 1rem;
              }

              .booking-section-title {
                font-size: 1.8rem;
                line-height: 1.3;
              }

              .booking-section-description {
                font-size: 0.95rem;
              }

              .booking-steps-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
              }

              .booking-step-card {
                display: grid;
                grid-template-columns: 52px 1fr;
                grid-template-areas:
                  "number icon"
                  "number title"
                  "number desc";

                column-gap: 1rem;
                text-align: left;

                padding: 1.25rem;

                border-radius: 18px;
              }

              .booking-step-number {
                grid-area: number;

                width: 48px;
                height: 48px;

                margin: 0;

                align-self: center;

                font-size: 1.3rem;
              }

              .booking-step-icon {
                grid-area: icon;

                justify-content: flex-start;

                margin-bottom: 0.15rem;
              }

              .booking-step-title {
                grid-area: title;

                margin-bottom: 0.2rem;

                font-size: 1rem;
              }

              .booking-step-description {
                grid-area: desc;

                font-size: 0.84rem;
                line-height: 1.5;
              }

              .booking-step-accent {
                height: 2px;
              }

              .booking-quick-cta {
                margin-top: 2rem;
                padding: 1.5rem;
                border-radius: 17px;
              }

              .booking-cta-text {
                font-size: 0.92rem;
              }
            }

            /* =====================================================
       LARGE MOBILE
    ===================================================== */

            @media (max-width: 600px) {
              .booking-step-card {
                grid-template-columns: 46px 1fr;
                column-gap: 0.85rem;

                padding: 1.1rem;
              }

              .booking-step-number {
                width: 44px;
                height: 44px;

                font-size: 1.2rem;
              }

              .booking-step-icon :global(svg) {
                width: 22px;
                height: 22px;
              }

              .booking-step-title {
                font-size: 0.95rem;
              }

              .booking-step-description {
                font-size: 0.8rem;
              }
            }

            /* =====================================================
       MOBILE
    ===================================================== */

            @media (max-width: 480px) {
              .how-booking-section {
                padding: 2.5rem 0;
              }

              .how-booking-container {
                padding: 0 0.75rem;
              }

              .booking-section-header {
                margin-bottom: 1.5rem;
              }

              .booking-section-badge {
                gap: 0.4rem;

                padding: 0.25rem 0.85rem;

                font-size: 0.7rem;
              }

              .booking-section-badge :global(svg) {
                width: 13px;
                height: 13px;
              }

              .booking-section-title {
                font-size: 1.5rem;
                line-height: 1.3;
              }

              .booking-section-description {
                font-size: 0.84rem;
                line-height: 1.55;
              }

              .booking-steps-grid {
                gap: 0.8rem;
              }

              .booking-step-card {
                grid-template-columns: 40px 1fr;
                column-gap: 0.75rem;

                padding: 1rem;

                border-radius: 15px;
              }

              .booking-step-number {
                width: 38px;
                height: 38px;

                font-size: 1rem;
              }

              .booking-step-icon {
                margin-bottom: 0.1rem;
              }

              .booking-step-icon :global(svg) {
                width: 20px;
                height: 20px;
              }

              .booking-step-title {
                font-size: 0.9rem;
                margin-bottom: 0.15rem;
              }

              .booking-step-description {
                font-size: 0.76rem;
                line-height: 1.45;
              }

              .booking-quick-cta {
                margin-top: 1.5rem;
                padding: 1.1rem 0.9rem;

                border-radius: 14px;
              }

              .booking-cta-text {
                font-size: 0.8rem;
                line-height: 1.5;
              }

              .booking-cta-btn {
                width: 100%;

                min-height: 44px;

                padding: 0.7rem 1rem;

                border-radius: 12px;

                font-size: 0.85rem;
              }

              .booking-cta-btn :global(svg) {
                width: 18px;
                height: 18px;
              }
            }

            /* =====================================================
       VERY SMALL PHONES - 320px / 359px
    ===================================================== */

            @media (max-width: 359px) {
              .how-booking-section {
                padding: 2rem 0;
              }

              .how-booking-container {
                padding: 0 0.6rem;
              }

              .booking-section-title {
                font-size: 1.35rem;
              }

              .booking-section-description {
                font-size: 0.77rem;
              }

              .booking-section-badge {
                font-size: 0.65rem;
                padding: 0.22rem 0.7rem;
              }

              .booking-step-card {
                grid-template-columns: 36px 1fr;
                column-gap: 0.65rem;

                padding: 0.85rem;
                border-radius: 13px;
              }

              .booking-step-number {
                width: 34px;
                height: 34px;

                font-size: 0.9rem;
              }

              .booking-step-icon :global(svg) {
                width: 18px;
                height: 18px;
              }

              .booking-step-title {
                font-size: 0.84rem;
              }

              .booking-step-description {
                font-size: 0.7rem;
                line-height: 1.4;
              }

              .booking-quick-cta {
                padding: 0.9rem 0.7rem;
                border-radius: 12px;
              }

              .booking-cta-text {
                font-size: 0.72rem;
              }

              .booking-cta-btn {
                min-height: 42px;
                font-size: 0.78rem;
                padding: 0.65rem 0.75rem;
              }
            }

            /* =====================================================
       TOUCH DEVICES
    ===================================================== */

            @media (hover: none) {
              .booking-step-card,
              .booking-step-number,
              .booking-step-icon,
              .booking-step-accent,
              .booking-quick-cta,
              .booking-cta-btn {
                transition: none;
              }
            }

            /* =====================================================
       REDUCED MOTION
    ===================================================== */

            @media (prefers-reduced-motion: reduce) {
              .booking-step-card,
              .booking-step-number,
              .booking-step-icon,
              .booking-step-accent,
              .booking-quick-cta,
              .booking-cta-btn {
                transition: none;
              }
            }
          `}</style>
        </section>

        {/* ===== ROUTE GUIDE SECTION ===== */}
        <section className="route-guide-section">
          <div className="route-guide-container">
            {/* Section Header */}
            <div className="route-guide-header">
              <div className="route-guide-badge">
                <Route size={14} />
                <span>Route Guide</span>
              </div>

              <h2 className="route-guide-title">
                Complete Travel Guide for{" "}
                <span>
                  {route.origin} to {route.destination}
                </span>
              </h2>

              <p className="route-guide-description">
                Everything you need to know about your {route.origin} to{" "}
                {route.destination} journey including route details, stopovers,
                and travel tips.
              </p>
            </div>

            {/* Main Route Guide Content */}
            <div className="route-guide-card">
              {/* Route Overview Grid */}
              <div className="route-overview-grid">
                {[
                  {
                    icon: <MapPin size={20} color="#0052CC" />,
                    label: "Route",
                    value: `${route.origin} → ${route.destination}`,
                  },
                  {
                    icon: <Road size={20} color="#0052CC" />,
                    label: "Distance",
                    value: `${route.distanceKm} KM`,
                  },
                  {
                    icon: <Clock size={20} color="#0052CC" />,
                    label: "Travel Time",
                    value: route.durationHrs,
                  },
                  {
                    icon: <Car size={20} color="#0052CC" />,
                    label: "Road Type",
                    value: getRoadType(route.category),
                  },
                ].map((item, index) => (
                  <div className="route-overview-item" key={index}>
                    <div className="route-overview-icon">{item.icon}</div>

                    <div className="route-overview-content">
                      <div className="route-overview-label">{item.label}</div>

                      <div className="route-overview-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Route Details Grid */}
              <div className="route-details-grid">
                {/* Left Column - Route Information */}
                <div className="route-detail-column">
                  <h3 className="route-detail-title">
                    <Info size={18} color="#0052CC" />
                    <span>Route Information</span>
                  </h3>

                  <div className="route-info-list">
                    <div className="route-info-row">
                      <span className="route-info-label">Highway Name</span>

                      <span className="route-info-value">
                        {getHighwayName(route.origin, route.destination)}
                      </span>
                    </div>

                    <div className="route-info-row">
                      <span className="route-info-label">Road Condition</span>

                      <span
                        className="route-info-value"
                        style={{
                          color: route.distanceKm > 400 ? "#b33d00" : "#16803c",
                        }}
                      >
                        {getRoadCondition(route.distanceKm)}
                      </span>
                    </div>

                    <div className="route-info-row">
                      <span className="route-info-label">Night Travel</span>

                      <span
                        className="route-info-value"
                        style={{
                          color: route.distanceKm < 300 ? "#16803c" : "#b33d00",
                        }}
                      >
                        {route.distanceKm < 300
                          ? "✓ Safe"
                          : "⚠️ Not Recommended"}
                      </span>
                    </div>

                    <div className="route-info-row">
                      <span className="route-info-label">Best Season</span>

                      <span className="route-info-value">
                        {getBestSeason(route.destination)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Quick Tips */}
                <div className="route-detail-column">
                  <h3 className="route-detail-title">
                    <Lightbulb size={18} color="#F59E0B" />
                    <span>Quick Tips</span>
                  </h3>

                  <div className="quick-tips-list">
                    <div className="quick-tip quick-tip-green">
                      <CheckCircle2 size={16} color="#10b981" />

                      <span>
                        Start early from {route.origin} to avoid traffic
                      </span>
                    </div>

                    <div className="quick-tip quick-tip-yellow">
                      <Fuel size={16} color="#d97706" />

                      <span>Fuel up before entering remote stretches</span>
                    </div>

                    <div className="quick-tip quick-tip-blue">
                      <Camera size={16} color="#0284c7" />

                      <span>Carry camera for scenic views on the route</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stopovers Section */}
              <div className="route-guide-accordion-section">
                <button
                  type="button"
                  onClick={() => toggleSection("stopovers")}
                  className="route-guide-accordion-button"
                  aria-expanded={expandedSections.stopovers}
                >
                  <span className="route-guide-accordion-title">
                    <MapPinned size={18} color="#0052CC" />
                    <span>Recommended Stopovers</span>
                  </span>

                  {expandedSections.stopovers ? (
                    <ChevronUp size={20} color="#7a8a9e" />
                  ) : (
                    <ChevronDown size={20} color="#7a8a9e" />
                  )}
                </button>

                {expandedSections.stopovers && (
                  <div className="stopovers-grid">
                    {getStopovers(route.distanceKm).map((stopover, index) => (
                      <div key={index} className="stopover-card">
                        <div className="stopover-icon">
                          {stopover.icon === "coffee" && <Coffee size={16} />}

                          {stopover.icon === "food" && <Utensils size={16} />}

                          {stopover.icon === "hotel" && <Hotel size={16} />}

                          {stopover.icon === "rest" && <Users size={16} />}
                        </div>

                        <div className="stopover-content">
                          <div className="stopover-name">{stopover.name}</div>

                          <div className="stopover-purpose">
                            {stopover.purpose}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Travel Tips Section */}
              <div className="travel-tips-section">
                <button
                  type="button"
                  onClick={() => toggleSection("tips")}
                  className="route-guide-accordion-button"
                  aria-expanded={expandedSections.tips}
                >
                  <span className="route-guide-accordion-title">
                    <Shield size={18} color="#0052CC" />
                    <span>Pro Travel Tips</span>
                  </span>

                  {expandedSections.tips ? (
                    <ChevronUp size={20} color="#7a8a9e" />
                  ) : (
                    <ChevronDown size={20} color="#7a8a9e" />
                  )}
                </button>

                {expandedSections.tips && (
                  <div className="travel-tips-grid">
                    {getTravelTips(route).map((tip, index) => (
                      <div key={index} className="travel-tip-card">
                        <span className="travel-tip-check">✓</span>

                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ===== RESPONSIVE STYLES ===== */}
          <style jsx>{`
            /* ================================
       ROUTE GUIDE - BASE
    ================================= */

            .route-guide-section {
              width: 100%;
              background: #ffffff;
              padding: 4rem 0;
              overflow: hidden;
            }

            .route-guide-container {
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
            }

            /* ================================
       SECTION HEADER
    ================================= */

            .route-guide-header {
              width: 100%;
              max-width: 780px;
              margin: 0 auto 2.5rem;
              text-align: center;
            }

            .route-guide-badge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              background: #eef3ff;
              color: #0052cc;
              padding: 0.3rem 1.2rem;
              border-radius: 40px;
              font-size: 0.8rem;
              font-weight: 600;
              letter-spacing: 0.2px;
              line-height: 1.4;
            }

            .route-guide-title {
              margin: 0.7rem 0 0.75rem;
              color: #0b1a2e;
              font-size: clamp(1.8rem, 3vw, 2.3rem);
              font-weight: 700;
              line-height: 1.25;
              overflow-wrap: anywhere;
            }

            .route-guide-title span {
              color: #0052cc;
            }

            .route-guide-description {
              margin: 0;
              color: #4a5a6e;
              font-size: 1rem;
              line-height: 1.7;
            }

            /* ================================
       MAIN CARD
    ================================= */

            .route-guide-card {
              width: 100%;
              background: #ffffff;
              border: 1px solid #ecf0f7;
              border-radius: 24px;
              padding: 2rem;
              box-shadow: 0 8px 24px rgba(0, 20, 50, 0.04);
              box-sizing: border-box;
            }

            /* ================================
       ROUTE OVERVIEW
    ================================= */

            .route-overview-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 1.25rem;
              margin-bottom: 2rem;
              padding-bottom: 2rem;
              border-bottom: 1px solid #ecf0f7;
            }

            .route-overview-item {
              min-width: 0;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              padding: 0.75rem;
              background: #f9fafc;
              border-radius: 12px;
              transition:
                background-color 0.3s ease,
                transform 0.3s ease;
            }

            .route-overview-item:hover {
              background: #f0f4fe;
              transform: translateY(-2px);
            }

            .route-overview-icon {
              flex: 0 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .route-overview-content {
              min-width: 0;
            }

            .route-overview-label {
              font-size: 0.7rem;
              color: #7a8a9e;
              line-height: 1.3;
              margin-bottom: 0.15rem;
            }

            .route-overview-value {
              color: #0b1a2e;
              font-size: 0.9rem;
              font-weight: 600;
              line-height: 1.4;
              overflow-wrap: anywhere;
              word-break: break-word;
            }

            /* ================================
       ROUTE DETAILS
    ================================= */

            .route-details-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1.5rem;
              margin-bottom: 2rem;
              padding-bottom: 2rem;
              border-bottom: 1px solid #ecf0f7;
            }

            .route-detail-column {
              min-width: 0;
            }

            .route-detail-title {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin: 0 0 1rem;
              color: #0b1a2e;
              font-size: 1rem;
              font-weight: 700;
              line-height: 1.4;
            }

            .route-info-list,
            .quick-tips-list {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }

            .route-info-row {
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              gap: 1rem;
              min-width: 0;
              padding: 0.65rem 0.75rem;
              background: #f9fafc;
              border-radius: 8px;
              font-size: 0.9rem;
              line-height: 1.4;
            }

            .route-info-label {
              color: #4a5a6e;
              flex: 0 0 auto;
            }

            .route-info-value {
              color: #0b1a2e;
              font-weight: 600;
              text-align: right;
              min-width: 0;
              overflow-wrap: anywhere;
            }

            /* ================================
       QUICK TIPS
    ================================= */

            .quick-tip {
              display: flex;
              align-items: flex-start;
              gap: 0.5rem;
              padding: 0.65rem 0.75rem;
              border-radius: 8px;
              font-size: 0.85rem;
              color: #1a2634;
              line-height: 1.5;
            }

            .quick-tip :global(svg) {
              flex: 0 0 auto;
              margin-top: 2px;
            }

            .quick-tip-green {
              background: #f0fdf4;
            }

            .quick-tip-yellow {
              background: #fef3c7;
            }

            .quick-tip-blue {
              background: #e0f2fe;
            }

            /* ================================
       ACCORDION
    ================================= */

            .route-guide-accordion-section {
              margin-bottom: 1.5rem;
              padding-bottom: 1.5rem;
              border-bottom: 1px solid #ecf0f7;
            }

            .travel-tips-section {
              width: 100%;
            }

            .route-guide-accordion-button {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 1rem;
              padding: 0.35rem 0;
              border: none;
              background: transparent;
              color: #0b1a2e;
              cursor: pointer;
              font-family: inherit;
              text-align: left;
            }

            .route-guide-accordion-title {
              min-width: 0;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              color: #0b1a2e;
              font-size: 1rem;
              font-weight: 700;
              line-height: 1.4;
            }

            .route-guide-accordion-title span {
              overflow-wrap: anywhere;
            }

            /* ================================
       STOPOVERS
    ================================= */

            .stopovers-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 1rem;
              margin-top: 1rem;
            }

            .stopover-card {
              min-width: 0;
              display: flex;
              align-items: flex-start;
              gap: 0.75rem;
              padding: 1rem;
              background: #f9fafc;
              border-radius: 12px;
              transition:
                background-color 0.3s ease,
                transform 0.3s ease;
            }

            .stopover-card:hover {
              background: #f0f4fe;
              transform: translateY(-2px);
            }

            .stopover-icon {
              flex: 0 0 32px;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #eef3ff;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #0052cc;
            }

            .stopover-content {
              min-width: 0;
            }

            .stopover-name {
              color: #0b1a2e;
              font-size: 0.85rem;
              font-weight: 600;
              line-height: 1.4;
              overflow-wrap: anywhere;
            }

            .stopover-purpose {
              color: #4a5a6e;
              font-size: 0.75rem;
              line-height: 1.45;
              margin-top: 0.15rem;
              overflow-wrap: anywhere;
            }

            /* ================================
       TRAVEL TIPS
    ================================= */

            .travel-tips-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 0.75rem;
              margin-top: 1rem;
            }

            .travel-tip-card {
              min-width: 0;
              display: flex;
              align-items: flex-start;
              gap: 0.5rem;
              padding: 0.75rem;
              background: #f0f4fe;
              border-radius: 10px;
              color: #1a2634;
              font-size: 0.85rem;
              line-height: 1.5;
            }

            .travel-tip-check {
              flex: 0 0 auto;
              color: #0052cc;
              font-weight: 700;
            }

            /* ================================
       LARGE TABLET
    ================================= */

            @media (max-width: 1199px) {
              .route-guide-container {
                padding: 0 1.25rem;
              }

              .route-guide-card {
                padding: 1.75rem;
              }

              .route-overview-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }

              .stopovers-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            /* ================================
       TABLET
    ================================= */

            @media (max-width: 768px) {
              .route-guide-section {
                padding: 3rem 0;
              }

              .route-guide-container {
                padding: 0 1rem;
              }

              .route-guide-header {
                margin-bottom: 2rem;
              }

              .route-guide-title {
                font-size: clamp(1.6rem, 5vw, 2rem);
                line-height: 1.3;
              }

              .route-guide-description {
                font-size: 0.92rem;
                line-height: 1.65;
              }

              .route-guide-card {
                padding: 1.25rem;
                border-radius: 18px;
              }

              .route-overview-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.85rem;
                margin-bottom: 1.5rem;
                padding-bottom: 1.5rem;
              }

              .route-overview-item {
                padding: 0.7rem;
                gap: 0.6rem;
              }

              .route-overview-value {
                font-size: 0.82rem;
              }

              .route-details-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
                margin-bottom: 1.5rem;
                padding-bottom: 1.5rem;
              }

              .stopovers-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }

              .travel-tips-grid {
                grid-template-columns: 1fr;
              }
            }

            /* ================================
       MOBILE
    ================================= */

            @media (max-width: 480px) {
              .route-guide-section {
                padding: 2.5rem 0;
              }

              .route-guide-container {
                padding: 0 0.75rem;
              }

              .route-guide-header {
                margin-bottom: 1.5rem;
              }

              .route-guide-badge {
                padding: 0.3rem 0.9rem;
                font-size: 0.75rem;
              }

              .route-guide-title {
                margin-top: 0.65rem;
                font-size: 1.5rem;
                line-height: 1.3;
              }

              .route-guide-description {
                font-size: 0.85rem;
                line-height: 1.6;
              }

              .route-guide-card {
                padding: 1rem;
                border-radius: 16px;
              }

              .route-overview-grid {
                grid-template-columns: 1fr;
                gap: 0.7rem;
                margin-bottom: 1.25rem;
                padding-bottom: 1.25rem;
              }

              .route-overview-item {
                padding: 0.75rem;
              }

              .route-overview-label {
                font-size: 0.68rem;
              }

              .route-overview-value {
                font-size: 0.85rem;
              }

              .route-details-grid {
                gap: 1.25rem;
                margin-bottom: 1.25rem;
                padding-bottom: 1.25rem;
              }

              .route-detail-title,
              .route-guide-accordion-title {
                font-size: 0.92rem;
              }

              .route-info-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.25rem;
                padding: 0.65rem 0.7rem;
                font-size: 0.82rem;
              }

              .route-info-value {
                text-align: left;
              }

              .quick-tip {
                padding: 0.65rem;
                font-size: 0.8rem;
              }

              .route-guide-accordion-section {
                margin-bottom: 1.25rem;
                padding-bottom: 1.25rem;
              }

              .stopovers-grid {
                grid-template-columns: 1fr;
                gap: 0.7rem;
              }

              .stopover-card {
                padding: 0.8rem;
              }

              .stopover-name {
                font-size: 0.82rem;
              }

              .stopover-purpose {
                font-size: 0.72rem;
              }

              .travel-tips-grid {
                grid-template-columns: 1fr;
                gap: 0.65rem;
              }

              .travel-tip-card {
                font-size: 0.8rem;
                padding: 0.7rem;
              }
            }

            /* ================================
       VERY SMALL MOBILE
    ================================= */

            @media (max-width: 359px) {
              .route-guide-section {
                padding: 2rem 0;
              }

              .route-guide-container {
                padding: 0 0.6rem;
              }

              .route-guide-card {
                padding: 0.8rem;
                border-radius: 14px;
              }

              .route-guide-title {
                font-size: 1.35rem;
              }

              .route-guide-description {
                font-size: 0.8rem;
              }

              .route-overview-item {
                padding: 0.65rem;
              }

              .route-overview-value {
                font-size: 0.8rem;
              }

              .route-info-row {
                font-size: 0.78rem;
              }

              .quick-tip {
                font-size: 0.76rem;
              }

              .stopover-card {
                padding: 0.7rem;
              }

              .travel-tip-card {
                font-size: 0.76rem;
              }
            }

            /* ================================
       TOUCH DEVICES
    ================================= */

            @media (hover: none) {
              .route-overview-item:hover,
              .stopover-card:hover {
                transform: none;
                background: #f9fafc;
              }
            }

            /* ================================
       REDUCED MOTION
    ================================= */

            @media (prefers-reduced-motion: reduce) {
              .route-overview-item,
              .stopover-card {
                transition: none;
              }
            }
          `}</style>
        </section>

        {/* ===== TRAVEL SOLUTIONS SECTION ===== */}
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
                <Sparkles size={14} /> Travel Solutions
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Perfect Travel Solutions for{" "}
                <span style={{ color: "#0052CC" }}>
                  {route.origin} to {route.destination}
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Whether you're traveling with family, friends, or colleagues, we
                have the perfect Urbania solution for your {route.origin} to{" "}
                {route.destination} journey.
              </p>
            </div>

            {/* Travel Solutions Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Family Travel",
                  description: `Comfortable and spacious Urbania for family trips from ${route.origin} to ${route.destination}. Perfect for vacations, reunions, and weekend getaways.`,
                  features: [
                    "Comfortable for elderly & kids",
                    "Ample luggage space",
                    "Flexible stops for rest",
                    "AC comfort throughout journey",
                  ],
                  recommendedSeater:
                    route.distanceKm < 300 ? "9/12 Seater" : "12/16 Seater",
                  gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
                },
                {
                  icon: "👥",
                  title: "Group Tours",
                  description: `Plan your group trip from ${route.origin} to ${route.destination} with our spacious Urbania fleet. Ideal for friends, colleagues, and tour groups.`,
                  features: [
                    "Large group capacity",
                    "Multiple vehicle booking",
                    "Coordination support",
                    "Flexible itinerary",
                  ],
                  recommendedSeater:
                    route.distanceKm < 300 ? "12/16 Seater" : "16/20 Seater",
                  gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
                },
                {
                  icon: "💼",
                  title: "Corporate Travel",
                  description: `Professional Urbania service for corporate travel from ${route.origin} to ${route.destination}. Perfect for offsites, client meetings, and business trips.`,
                  features: [
                    "Professional drivers",
                    "On-time guarantee",
                    "Premium comfort",
                    "Wi-Fi on request",
                  ],
                  recommendedSeater: "9/12 Seater",
                  gradient: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
                },
                {
                  icon: "🛕",
                  title: "Pilgrimage Tours",
                  description: `Spiritual journey from ${route.origin} to ${route.destination} with our comfortable Urbania. Experience divine travel with peace and comfort.`,
                  features: [
                    "Overnight journey option",
                    "Early morning darshan arrival",
                    "Temple-to-temple service",
                    "Experienced pilgrimage drivers",
                  ],
                  recommendedSeater:
                    route.distanceKm < 300 ? "9/12 Seater" : "12/16 Seater",
                  gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
                },
                {
                  icon: "💒",
                  title: "Wedding Transport",
                  description: `Elegant Urbania fleet for wedding guests traveling from ${route.origin} to ${route.destination}. Make your special day memorable with premium group transport.`,
                  features: [
                    "One-way & round trip options",
                    "Large group capacity",
                    "Multiple vehicle booking",
                    "Coordination support",
                  ],
                  recommendedSeater: "16/20 Seater",
                  gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
                },
                {
                  icon: "🎓",
                  title: "Educational Tours",
                  description: `Reliable Urbania service for college trips, school excursions, and educational tours from ${route.origin} to ${route.destination}.`,
                  features: [
                    "Safe & reliable drivers",
                    "Comfortable seating",
                    "On-time arrival",
                    "Flexible scheduling",
                  ],
                  recommendedSeater:
                    route.distanceKm < 300 ? "12/16 Seater" : "16/20 Seater",
                  gradient: "linear-gradient(135deg, #e8eaf6, #c5cae9)",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "1.8rem",
                    border: "1px solid #ecf0f7",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                    cursor: "pointer",
                    transform: "scale(1)",
                  }}
                  className="travel-solution-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0, 82, 204, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.02)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: solution.gradient,
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      transition: "transform 0.3s ease",
                    }}
                    className="solution-icon"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.1) rotate(-5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    }}
                  >
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "0.5rem",
                      transition: "color 0.3s ease",
                    }}
                    className="solution-title"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0052CC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0b1a2e";
                    }}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4a5a6e",
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                    }}
                  >
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: "1rem" }}>
                    {solution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.25rem 0",
                          fontSize: "0.85rem",
                          color: "#1a2634",
                        }}
                      >
                        <CheckCircle2 size={14} color="#0052CC" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Seater */}
                  <div
                    style={{
                      padding: "0.5rem 1rem",
                      background: "#f0f4fe",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                      Recommended
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#0052CC",
                      }}
                    >
                      {solution.recommendedSeater}
                    </span>
                  </div>

                  {/* Book Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Book ${solution.title} from ${route.origin} to ${route.destination}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      cursor: "pointer",
                    }}
                    className="solution-book-btn"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#003ea6";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0052CC";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <MessageSquare size={16} /> Book Now
                  </a>
                </div>
              ))}
            </div>

            {/* Quick Quote CTA */}
            <div
              style={{
                marginTop: "3rem",
                padding: "2rem",
                background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                borderRadius: "24px",
                textAlign: "center",
                color: "#fff",
                transition: "all 0.3s ease",
              }}
              className="quick-quote-cta"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(0, 82, 204, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Need a Custom Travel Solution?
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  opacity: 0.9,
                  maxWidth: "600px",
                  margin: "0 auto 1.5rem",
                  lineHeight: "1.6",
                }}
              >
                Contact our travel experts for a customized {route.origin} to{" "}
                {route.destination} itinerary tailored to your group size and
                preferences.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Custom travel solution from ${route.origin} to ${route.destination}`,
                  )}`}
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
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "none",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
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
                  <MessageSquare size={20} /> Get Custom Quote
                </a>
                <a
                  href={`tel:+${whatsappNumber}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 2rem",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
              @media (max-width: 768px) {
                .travel-solution-card {
                  padding: 1.5rem !important;
                }

                .quick-quote-cta {
                  padding: 1.5rem !important;
                }

                .quick-quote-cta h3 {
                  font-size: 1.2rem !important;
                }
              }

              @media (max-width: 480px) {
                .travel-solution-card {
                  padding: 1rem !important;
                }

                .solution-icon {
                  width: 48px !important;
                  height: 48px !important;
                  font-size: 1.6rem !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* ===== TRANSPARENT PRICING SECTION ===== */}
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
                <IndianRupee size={14} /> Transparent Pricing
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Clear, Transparent Pricing for{" "}
                <span style={{ color: "#0052CC" }}>
                  {route.origin} to {route.destination}
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                No hidden charges, no surprises. What you see is what you pay
                for your
                {route.origin} to {route.destination} Urbania rental.
              </p>
            </div>

            {/* Pricing Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
                marginBottom: "3rem",
              }}
            >
              {[
                {
                  title: "Base Fare",
                  icon: <Car size={24} />,
                  description: "Pay only for the distance you travel",
                  details: [
                    `₹${Math.round(route.distanceKm * 2 * 26 + 500).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700).toLocaleString()}`,
                    `${route.distanceKm * 2} km round trip`,
                    `${route.minKmPerDay || 250} km minimum per day`,
                  ],
                  bgColor: "#e8f5e9",
                  color: "#2e7d32",
                },
                {
                  title: "Driver Allowance",
                  icon: <Users size={24} />,
                  description: "Professional chauffeur charges",
                  details: [
                    `₹${600 - 700} per day`,
                    "Experienced drivers",
                    "Familiar with the route",
                  ],
                  bgColor: "#e3f2fd",
                  color: "#1565c0",
                },
                {
                  title: "Toll & Taxes",
                  icon: <Shield size={24} />,
                  description: "Actual charges as per route",
                  details: [
                    `₹${Math.round(route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2.5).toLocaleString()}`,
                    "State taxes included",
                    "Parking fees included",
                  ],
                  bgColor: "#fff3e0",
                  color: "#e65100",
                },
                {
                  title: "Total Estimate",
                  icon: <Wallet size={24} />,
                  description: "Complete trip cost",
                  details: [
                    `₹${Math.round(route.distanceKm * 2 * 26 + 600 + route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700 + route.distanceKm * 2.5).toLocaleString()}`,
                    "All-inclusive rate",
                    "No hidden charges",
                  ],
                  bgColor: "#fce4ec",
                  color: "#c62828",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "1.8rem",
                    border: `2px solid ${item.bgColor}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    cursor: "pointer",
                    transform: "scale(1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="pricing-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0, 82, 204, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = item.bgColor;
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Decorative top bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: item.color,
                      transition: "height 0.3s ease",
                    }}
                    className="pricing-bar"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.height = "6px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.height = "4px";
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: item.bgColor,
                      color: item.color,
                      marginBottom: "0.75rem",
                      transition: "all 0.3s ease",
                    }}
                    className="pricing-icon"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.1) rotate(-5deg)";
                      e.currentTarget.style.background = item.color;
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                      e.currentTarget.style.background = item.bgColor;
                      e.currentTarget.style.color = item.color;
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#4a5a6e",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Details */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {item.details.map((detail, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.85rem",
                          color: "#1a2634",
                          padding: "0.2rem 0",
                        }}
                      >
                        <CheckCircle2 size={14} color={item.color} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown Table */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "2rem",
                border: "1px solid #ecf0f7",
                marginBottom: "2rem",
                transition: "all 0.3s ease",
              }}
              className="pricing-table-wrapper"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0052CC";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0, 82, 204, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ecf0f7";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                Detailed Pricing Breakdown for {route.origin} to{" "}
                {route.destination}
              </h3>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "600px",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        background: "#f9fafc",
                        borderBottom: "2px solid #ecf0f7",
                      }}
                    >
                      <th
                        style={{
                          padding: "1rem 1.2rem",
                          textAlign: "left",
                          fontWeight: 600,
                          color: "#0b1a2e",
                        }}
                      >
                        Component
                      </th>
                      <th
                        style={{
                          padding: "1rem 1.2rem",
                          textAlign: "left",
                          fontWeight: 600,
                          color: "#0b1a2e",
                        }}
                      >
                        Description
                      </th>
                      <th
                        style={{
                          padding: "1rem 1.2rem",
                          textAlign: "right",
                          fontWeight: 600,
                          color: "#0b1a2e",
                        }}
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        component: "Base Fare",
                        description: `${route.distanceKm * 2} km @ ₹${26}-${33}/km`,
                        amount: `₹${(route.distanceKm * 2 * 26).toLocaleString()} - ₹${(route.distanceKm * 2 * 33).toLocaleString()}`,
                        highlight: false,
                      },
                      {
                        component: "Driver Allowance",
                        description: `${route.distanceKm > 300 ? "2-3 days" : "1-2 days"}`,
                        amount: `₹${(route.distanceKm > 300 ? 700 * 3 : 600 * 2).toLocaleString()}`,
                        highlight: false,
                      },
                      {
                        component: "Minimum KM Charges",
                        description: `${route.minKmPerDay || 250} km per day minimum`,
                        amount: "Included in base fare",
                        highlight: false,
                      },
                      {
                        component: "Toll & State Taxes",
                        description: "As per actual route",
                        amount: `₹${Math.round(route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2.5).toLocaleString()}`,
                        highlight: false,
                      },
                      {
                        component: "Parking Charges",
                        description: "At hotels and tourist spots",
                        amount: "Free at most temples & spots",
                        highlight: false,
                      },
                      {
                        component: "Total Estimate",
                        description: "All-inclusive price",
                        amount: `₹${Math.round(route.distanceKm * 2 * 26 + 600 + route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700 + route.distanceKm * 2.5).toLocaleString()}`,
                        highlight: true,
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        style={{
                          borderBottom:
                            index < 5 ? "1px solid #f0f4fe" : "none",
                          background: item.highlight
                            ? "#f0f4fe"
                            : "transparent",
                          transition: "background 0.3s ease",
                        }}
                        className="pricing-row"
                        onMouseEnter={(e) => {
                          if (!item.highlight) {
                            e.currentTarget.style.background = "#f9fafc";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!item.highlight) {
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                      >
                        <td
                          style={{
                            padding: "0.8rem 1.2rem",
                            fontWeight: item.highlight ? 700 : 500,
                            color: item.highlight ? "#0052CC" : "#0b1a2e",
                          }}
                        >
                          {item.component}
                        </td>
                        <td
                          style={{
                            padding: "0.8rem 1.2rem",
                            color: "#4a5a6e",
                          }}
                        >
                          {item.description}
                        </td>
                        <td
                          style={{
                            padding: "0.8rem 1.2rem",
                            textAlign: "right",
                            fontWeight: item.highlight ? 700 : 500,
                            color: item.highlight ? "#0052CC" : "#0b1a2e",
                          }}
                        >
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#7a8a9e",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                * Final fare may vary based on actual route, tolls, and
                additional halts. Contact us for a precise quote.
              </p>
            </div>

            {/* =========================================================
    WHAT'S INCLUDED / NOT INCLUDED
========================================================= */}
            <div className="included-not-included-section">
              {/* ==================== INCLUDED ==================== */}
              <div
                className="included-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(34, 197, 94, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 className="included-card-title">
                  <CheckCircle2 size={20} />
                  <span>What's Included</span>
                </h3>

                <ul className="included-list">
                  {[
                    `Base fare for ${route.distanceKm * 2} km round trip`,
                    "Professional, verified driver",
                    "Fuel costs",
                    "State permits and taxes",
                    "Basic insurance coverage",
                    "AC comfort throughout journey",
                    "24/7 customer support",
                  ].map((item, index) => (
                    <li key={index} className="included-list-item">
                      <span className="included-check">✓</span>
                      <span className="included-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ==================== NOT INCLUDED ==================== */}
              <div
                className="not-included-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(239, 68, 68, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 className="not-included-card-title">
                  <X size={20} />
                  <span>What's Not Included</span>
                </h3>

                <ul className="included-list">
                  {[
                    "Toll taxes (payable as per actual)",
                    "Inter-state permit fees",
                    "Parking fees at hotels and attractions",
                    "Meals and accommodation for driver",
                    "Extended halt charges",
                    "Additional KM beyond the limit",
                    "Personal expenses and tips",
                  ].map((item, index) => (
                    <li key={index} className="included-list-item">
                      <span className="not-included-cross">✗</span>
                      <span className="included-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* =========================================================
    PRICING PROMISE
========================================================= */}
            <div
              className="pricing-promise"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(0, 82, 204, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div className="pricing-promise-icon">
                <ShieldCheck size={28} color="#fff" />
              </div>

              {/* Heading */}
              <h3 className="pricing-promise-title">Our Price Promise</h3>

              {/* Description */}
              <p className="pricing-promise-text">
                We guarantee the best price for your {route.origin} to{" "}
                {route.destination} journey. If you find a lower price
                elsewhere, we'll match it.
              </p>

              {/* CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Price match query for ${route.origin} to ${route.destination}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-promise-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageSquare size={18} />
                <span>Get Best Price Quote</span>
              </a>
            </div>

            {/* =========================================================
    RESPONSIVE STYLES
========================================================= */}
            <style jsx>{`
              /* ========================================================
     MAIN INCLUDED / NOT INCLUDED GRID
  ======================================================== */

              .included-not-included-section {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 2rem;
                margin-bottom: 2rem;
                box-sizing: border-box;
              }

              /* ========================================================
     COMMON CARD
  ======================================================== */

              .included-card,
              .not-included-card {
                width: 100%;
                min-width: 0;
                padding: 1.5rem;
                border-radius: 20px;
                box-sizing: border-box;
                transition:
                  transform 0.3s ease,
                  box-shadow 0.3s ease;
              }

              /* Included */
              .included-card {
                background: #f0fdf4;
                border: 1px solid #bbf7d0;
              }

              /* Not Included */
              .not-included-card {
                background: #fef2f2;
                border: 1px solid #fecaca;
              }

              /* ========================================================
     CARD HEADINGS
  ======================================================== */

              .included-card-title,
              .not-included-card-title {
                margin: 0 0 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.1rem;
                font-weight: 700;
                line-height: 1.4;
              }

              .included-card-title {
                color: #15803d;
              }

              .not-included-card-title {
                color: #dc2626;
              }

              .included-card-title :global(svg),
              .not-included-card-title :global(svg) {
                flex-shrink: 0;
              }

              /* ========================================================
     LIST
  ======================================================== */

              .included-list {
                list-style: none;
                padding: 0;
                margin: 0;
              }

              .included-list-item {
                width: 100%;
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;
                padding: 0.4rem 0;
                font-size: 0.9rem;
                line-height: 1.5;
                color: #1a2634;
                box-sizing: border-box;
              }

              .included-check,
              .not-included-cross {
                flex: 0 0 20px;
                width: 20px;
                text-align: center;
                font-size: 1.1rem;
                font-weight: 700;
                line-height: 1.5;
              }

              .included-check {
                color: #22c55e;
              }

              .not-included-cross {
                color: #ef4444;
              }

              .included-item-text {
                flex: 1;
                min-width: 0;
                overflow-wrap: anywhere;
              }

              /* ========================================================
     PRICING PROMISE
  ======================================================== */

              .pricing-promise {
                width: 100%;
                background: linear-gradient(135deg, #0052cc 0%, #0770e3 100%);
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                color: #fff;
                box-sizing: border-box;
                transition:
                  box-shadow 0.3s ease,
                  transform 0.3s ease;
              }

              .pricing-promise-icon {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.15);

                display: inline-flex;
                align-items: center;
                justify-content: center;

                margin: 0 auto 1rem;
              }

              .pricing-promise-title {
                margin: 0 0 0.5rem;
                font-size: 1.3rem;
                font-weight: 700;
                line-height: 1.4;
              }

              .pricing-promise-text {
                width: 100%;
                max-width: 600px;
                margin: 0 auto 1.5rem;
                font-size: 1rem;
                line-height: 1.6;
                opacity: 0.9;
              }

              .pricing-promise-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.6rem;

                min-height: 46px;
                padding: 0.8rem 2rem;

                border-radius: 50px;
                border: none;

                background: #fff;
                color: #0052cc;

                font-size: 1rem;
                font-weight: 700;
                text-decoration: none;

                cursor: pointer;
                box-sizing: border-box;

                transition:
                  transform 0.3s ease,
                  box-shadow 0.3s ease;
              }

              .pricing-promise-btn :global(svg) {
                flex-shrink: 0;
              }

              /* ========================================================
     LARGE TABLETS
  ======================================================== */

              @media (max-width: 1024px) {
                .included-not-included-section {
                  gap: 1.5rem;
                }

                .included-card,
                .not-included-card {
                  padding: 1.35rem;
                  border-radius: 18px;
                }

                .included-card-title,
                .not-included-card-title {
                  font-size: 1.05rem;
                }

                .included-list-item {
                  font-size: 0.88rem;
                }

                .pricing-promise {
                  padding: 1.75rem;
                  border-radius: 18px;
                }
              }

              /* ========================================================
     TABLET
  ======================================================== */

              @media (max-width: 768px) {
                .included-not-included-section {
                  grid-template-columns: 1fr;
                  gap: 1.25rem;
                  margin-bottom: 1.5rem;
                }

                .included-card,
                .not-included-card {
                  padding: 1.25rem;
                  border-radius: 17px;
                }

                .included-card-title,
                .not-included-card-title {
                  margin-bottom: 0.85rem;
                  font-size: 1rem;
                }

                .included-list-item {
                  padding: 0.38rem 0;
                  font-size: 0.88rem;
                }

                .pricing-promise {
                  padding: 1.5rem;
                  border-radius: 17px;
                }

                .pricing-promise-icon {
                  width: 52px;
                  height: 52px;
                }

                .pricing-promise-title {
                  font-size: 1.2rem;
                }

                .pricing-promise-text {
                  font-size: 0.95rem;
                  max-width: 560px;
                }

                .pricing-promise-btn {
                  padding: 0.75rem 1.75rem;
                }
              }

              /* ========================================================
     MOBILE
  ======================================================== */

              @media (max-width: 480px) {
                .included-not-included-section {
                  gap: 1rem;
                  margin-bottom: 1.25rem;
                }

                .included-card,
                .not-included-card {
                  padding: 1rem;
                  border-radius: 15px;
                }

                .included-card-title,
                .not-included-card-title {
                  gap: 0.4rem;
                  margin-bottom: 0.75rem;
                  font-size: 0.95rem;
                }

                .included-card-title :global(svg),
                .not-included-card-title :global(svg) {
                  width: 18px;
                  height: 18px;
                }

                .included-list-item {
                  gap: 0.4rem;
                  padding: 0.32rem 0;
                  font-size: 0.82rem;
                  line-height: 1.45;
                }

                .included-check,
                .not-included-cross {
                  flex-basis: 18px;
                  width: 18px;
                  font-size: 0.95rem;
                }

                /* Pricing Promise */
                .pricing-promise {
                  padding: 1.25rem 1rem;
                  border-radius: 15px;
                }

                .pricing-promise-icon {
                  width: 48px;
                  height: 48px;
                  margin-bottom: 0.75rem;
                }

                .pricing-promise-icon :global(svg) {
                  width: 24px;
                  height: 24px;
                }

                .pricing-promise-title {
                  font-size: 1.05rem;
                  margin-bottom: 0.45rem;
                }

                .pricing-promise-text {
                  font-size: 0.84rem;
                  line-height: 1.5;
                  margin-bottom: 1.1rem;
                }

                .pricing-promise-btn {
                  width: 100%;
                  max-width: 100%;
                  min-height: 44px;
                  padding: 0.7rem 1rem;
                  font-size: 0.85rem;
                  border-radius: 12px;
                }

                .pricing-promise-btn :global(svg) {
                  width: 17px;
                  height: 17px;
                }
              }

              /* ========================================================
     VERY SMALL PHONES - 320px / 359px
  ======================================================== */

              @media (max-width: 359px) {
                .included-not-included-section {
                  gap: 0.85rem;
                  margin-bottom: 1rem;
                }

                .included-card,
                .not-included-card {
                  padding: 0.85rem;
                  border-radius: 13px;
                }

                .included-card-title,
                .not-included-card-title {
                  font-size: 0.88rem;
                  gap: 0.35rem;
                }

                .included-card-title :global(svg),
                .not-included-card-title :global(svg) {
                  width: 17px;
                  height: 17px;
                }

                .included-list-item {
                  font-size: 0.78rem;
                  gap: 0.35rem;
                  padding: 0.28rem 0;
                }

                .included-check,
                .not-included-cross {
                  flex-basis: 17px;
                  width: 17px;
                  font-size: 0.9rem;
                }

                .pricing-promise {
                  padding: 1rem 0.8rem;
                  border-radius: 13px;
                }

                .pricing-promise-icon {
                  width: 44px;
                  height: 44px;
                }

                .pricing-promise-icon :global(svg) {
                  width: 22px;
                  height: 22px;
                }

                .pricing-promise-title {
                  font-size: 0.98rem;
                }

                .pricing-promise-text {
                  font-size: 0.78rem;
                  line-height: 1.45;
                }

                .pricing-promise-btn {
                  font-size: 0.78rem;
                  padding: 0.65rem 0.75rem;
                }
              }

              /* ========================================================
     TOUCH DEVICES
  ======================================================== */

              @media (hover: none) {
                .included-card,
                .not-included-card,
                .pricing-promise,
                .pricing-promise-btn {
                  transition: none;
                }
              }

              /* ========================================================
     REDUCED MOTION
  ======================================================== */

              @media (prefers-reduced-motion: reduce) {
                .included-card,
                .not-included-card,
                .pricing-promise,
                .pricing-promise-btn {
                  transition: none;
                }
              }
            `}</style>
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
                What Our Customers Say About{" "}
                <span style={{ color: "#0052CC" }}>
                  {route.origin} to {route.destination}
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Real reviews from happy travelers who booked Urbania Tempo
                Traveller for the {route.origin} to {route.destination} route.
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
                  location: route.origin,
                  rating: 5,
                  text: `Excellent service from ${route.origin} to ${route.destination}! The Urbania was spotless and the driver was very professional and punctual. Highly recommend for group travel.`,
                  date: "2 weeks ago",
                  avatar: "R",
                },
                {
                  name: "Priya Patel",
                  location: route.destination,
                  rating: 5,
                  text: `Booked a family trip from ${route.origin} to ${route.destination}. The vehicle was comfortable, and the pricing was transparent with no hidden charges. Will definitely book again!`,
                  date: "1 month ago",
                  avatar: "P",
                },
                {
                  name: "Amit Kumar",
                  location: route.origin,
                  rating: 4,
                  text: `Great experience on the ${route.origin} to ${route.destination} route. The 12-seater was perfect for our corporate team outing. Punctual and well-maintained vehicle.`,
                  date: "3 weeks ago",
                  avatar: "A",
                },
                {
                  name: "Sneha Reddy",
                  location: route.destination,
                  rating: 5,
                  text: `We had an amazing trip from ${route.origin} to ${route.destination} with Urbania. The vehicle was luxurious, and the driver was very knowledgeable about the route.`,
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

        {/* ===== RELATED ROUTES ===== */}
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
            <div className="section-header">
              <h2 className="section-title">More Popular Routes</h2>
            </div>

            <div className="routes-grid">
              {relatedRoutes.slice(0, 15).map((item) => (
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

        {/* ===== JOURNEY PREVIEW SECTION ===== */}
        <section className="journey-preview-section">
          <div className="journey-preview-container">
            {/* ================= SECTION HEADER ================= */}
            <div className="journey-preview-header">
              <div className="journey-preview-badge">
                <MapPin size={14} />
                <span>Journey Preview</span>
              </div>

              <h2 className="journey-preview-title">
                Experience a Smooth Ride from{" "}
                <span>
                  {route.origin} to {route.destination}
                </span>
              </h2>

              <p className="journey-preview-description">
                Travel with comfort, safety, and flexibility. Your journey from{" "}
                {route.origin} to {route.destination} starts here.
              </p>
            </div>

            {/* ================= JOURNEY CONTENT ================= */}
            <div className="journey-preview-grid">
              {/* ================= LEFT COLUMN ================= */}
              <div className="journey-preview-content">
                {/* Premium Badge */}
                <div className="journey-premium-badge">
                  <BusFront size={14} />
                  <span>Premium Travel Experience</span>
                </div>

                <h3 className="journey-preview-subtitle">
                  Travel from {route.origin} to {route.destination}
                </h3>

                <p className="journey-preview-text">
                  {route.distanceKm}km journey in {route.durationHrs}. Perfect
                  for
                  {route.category?.toLowerCase() === "pilgrimage"
                    ? " pilgrimage"
                    : ""}
                  {route.category?.toLowerCase() === "hill station"
                    ? " hill station"
                    : ""}
                  {route.category?.toLowerCase() === "tourist"
                    ? " tourism"
                    : ""}{" "}
                  group travel.
                </p>

                {/* Features */}
                <div className="journey-preview-features">
                  {[
                    {
                      icon: <MapPin size={16} color="#0052CC" />,
                      text: "Door-to-door pickup & drop",
                    },
                    {
                      icon: <ShieldCheck size={16} color="#0052CC" />,
                      text: "Safe & verified drivers",
                    },
                    {
                      icon: <Star size={16} color="#0052CC" />,
                      text: "Highly rated by travelers",
                    },
                    {
                      icon: <Clock size={16} color="#0052CC" />,
                      text: "On-time service guarantee",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="journey-feature"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#f0f4fe";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f9fafc";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <span className="journey-feature-icon">
                        {feature.icon}
                      </span>

                      <span className="journey-feature-text">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Book Urbania from ${route.origin} to ${route.destination}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journey-book-btn"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(37, 211, 102, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(37, 211, 102, 0.25)";
                  }}
                >
                  <MessageSquare size={20} />
                  <span>Book Your Ride →</span>
                </a>
              </div>

              {/* ================= RIGHT COLUMN - MAP ================= */}
              <div
                className="journey-map-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0, 82, 204, 0.12)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,20,50,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="journey-map-wrapper">
                  {/* Map */}
                  <div className="journey-map-container">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(
                        route.origin,
                      )}&destination=${encodeURIComponent(
                        route.destination,
                      )}&mode=driving`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map showing route from ${route.origin} to ${route.destination}`}
                    />
                  </div>

                  {/* Map Overlay */}
                  <div
                    className="map-overlay"
                    onClick={() => {
                      window.open(
                        `https://www.google.com/maps/dir/${encodeURIComponent(
                          route.origin,
                        )}/${encodeURIComponent(route.destination)}`,
                        "_blank",
                      );
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.98)";
                      e.currentTarget.style.boxShadow =
                        "inset 0 0 0 2px #0052CC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.95)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="map-overlay-icon">🗺️</div>

                    <h4>View Route Map</h4>

                    <p>
                      Click to load live Google Map for {route.origin} to{" "}
                      {route.destination}
                    </p>

                    <div className="map-overlay-link">
                      <MapPin size={16} />
                      <span>Open Google Maps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= ROUTE STATS ================= */}
            <div className="journey-preview-stats">
              {[
                {
                  icon: <Road size={20} color="#0052CC" />,
                  label: "Total Distance",
                  value: `${route.distanceKm} km`,
                },
                {
                  icon: <Clock size={20} color="#0052CC" />,
                  label: "Travel Time",
                  value: route.durationHrs,
                },
                {
                  icon: <Users size={20} color="#0052CC" />,
                  label: "Max Capacity",
                  value: "20 Passengers",
                },
                {
                  icon: <Car size={20} color="#0052CC" />,
                  label: "Vehicle Type",
                  value: "Force Urbania",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="journey-stat-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0052CC";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 82, 204, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ecf0f7";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="journey-stat-icon">{stat.icon}</div>

                  <div className="journey-stat-label">{stat.label}</div>

                  <div className="journey-stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
      RESPONSIVE CSS
  ========================================================= */}
          <style jsx>{`
            /* =====================================================
       SECTION
    ===================================================== */

            .journey-preview-section {
              width: 100%;
              background: #ffffff;
              padding: 4rem 0;
              overflow: hidden;
              box-sizing: border-box;
            }

            .journey-preview-container {
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
            }

            /* =====================================================
       SECTION HEADER
    ===================================================== */

            .journey-preview-header {
              width: 100%;
              max-width: 780px;
              margin: 0 auto 2.5rem;
              text-align: center;
            }

            .journey-preview-badge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;

              background: #eef3ff;
              color: #0052cc;

              padding: 0.25rem 1.2rem;
              border-radius: 40px;

              font-size: 0.8rem;
              font-weight: 600;

              box-sizing: border-box;
            }

            .journey-preview-title {
              margin: 0.5rem 0 0.75rem;
              font-size: 2.3rem;
              font-weight: 700;
              line-height: 1.25;
              color: #0b1a2e;
              overflow-wrap: anywhere;
            }

            .journey-preview-title span {
              color: #0052cc;
            }

            .journey-preview-description {
              margin: 0;
              font-size: 1.05rem;
              color: #4a5a6e;
              line-height: 1.6;
            }

            /* =====================================================
       MAIN GRID
    ===================================================== */

            .journey-preview-grid {
              width: 100%;
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
              gap: 3rem;
              align-items: center;
              box-sizing: border-box;
            }

            .journey-preview-content {
              width: 100%;
              min-width: 0;
            }

            /* =====================================================
       PREMIUM BADGE
    ===================================================== */

            .journey-premium-badge {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;

              background: #0052cc;
              color: #fff;

              padding: 0.3rem 1.2rem;
              border-radius: 40px;

              font-size: 0.75rem;
              font-weight: 600;
              letter-spacing: 0.5px;

              margin-bottom: 1rem;
              max-width: 100%;
              box-sizing: border-box;
            }

            .journey-preview-subtitle {
              margin: 0 0 0.5rem;
              font-size: 1.5rem;
              font-weight: 700;
              line-height: 1.35;
              color: #0b1a2e;
              overflow-wrap: anywhere;
            }

            .journey-preview-text {
              margin: 0 0 1.5rem;
              font-size: 1rem;
              color: #4a5a6e;
              line-height: 1.7;
              overflow-wrap: anywhere;
            }

            /* =====================================================
       FEATURES
    ===================================================== */

            .journey-preview-features {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 0.75rem;
              margin-bottom: 1.5rem;
            }

            .journey-feature {
              min-width: 0;
              display: flex;
              align-items: center;
              gap: 0.5rem;

              padding: 0.5rem;

              background: #f9fafc;
              border-radius: 10px;

              transition:
                background 0.3s ease,
                transform 0.3s ease;

              box-sizing: border-box;
            }

            .journey-feature-icon {
              flex: 0 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .journey-feature-text {
              min-width: 0;
              font-size: 0.85rem;
              color: #1a2634;
              font-weight: 500;
              line-height: 1.4;
              overflow-wrap: anywhere;
            }

            /* =====================================================
       BOOK BUTTON
    ===================================================== */

            .journey-book-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.6rem;

              min-height: 46px;
              padding: 0.8rem 2.5rem;

              border-radius: 50px;

              background: #25d366;
              color: #fff;

              font-weight: 700;
              font-size: 1rem;
              text-decoration: none;

              box-shadow: 0 8px 24px rgba(37, 211, 102, 0.25);

              cursor: pointer;
              box-sizing: border-box;

              transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
            }

            .journey-book-btn :global(svg) {
              flex-shrink: 0;
            }

            /* =====================================================
       MAP
    ===================================================== */

            .journey-map-card {
              width: 100%;
              min-width: 0;

              border-radius: 24px;
              overflow: hidden;

              border: 1px solid #ecf0f7;
              box-shadow: 0 8px 24px rgba(0, 20, 50, 0.06);

              transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;

              box-sizing: border-box;
            }

            .journey-map-wrapper {
              position: relative;
              width: 100%;
              height: 0;
              padding-bottom: 75%;
              background: #eef3ff;
              overflow: hidden;
            }

            .journey-map-container {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
            }

            .journey-map-container iframe {
              display: block;
              width: 100%;
              height: 100%;
            }

            /* =====================================================
       MAP OVERLAY
    ===================================================== */

            .map-overlay {
              position: absolute;
              inset: 0;
              z-index: 2;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              background: rgba(255, 255, 255, 0.95);
              color: #0b1a2e;

              padding: 2rem;
              text-align: center;

              cursor: pointer;

              transition:
                background 0.3s ease,
                box-shadow 0.3s ease;

              box-sizing: border-box;
            }

            .map-overlay-icon {
              font-size: 3rem;
              line-height: 1;
              margin-bottom: 0.75rem;
            }

            .map-overlay h4 {
              margin: 0 0 0.5rem;
              font-size: 1.2rem;
              font-weight: 700;
              color: #0b1a2e;
            }

            .map-overlay p {
              max-width: 300px;
              margin: 0 0 0.5rem;
              font-size: 0.9rem;
              line-height: 1.5;
              color: #4a5a6e;
            }

            .map-overlay-link {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.4rem;

              margin-top: 0.5rem;

              color: #0052cc;
              font-size: 0.85rem;
              font-weight: 600;
            }

            /* =====================================================
       STATS
    ===================================================== */

            .journey-preview-stats {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 1.5rem;
              margin-top: 3rem;
              box-sizing: border-box;
            }

            .journey-stat-card {
              min-width: 0;

              background: #ffffff;
              padding: 1.2rem;

              border-radius: 16px;
              border: 1px solid #ecf0f7;

              text-align: center;

              transition:
                border-color 0.3s ease,
                transform 0.3s ease,
                box-shadow 0.3s ease;

              box-sizing: border-box;
            }

            .journey-stat-icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;

              width: 40px;
              height: 40px;

              border-radius: 50%;
              background: #eef3ff;

              margin-bottom: 0.5rem;
            }

            .journey-stat-label {
              font-size: 0.7rem;
              color: #7a8a9e;
              font-weight: 600;

              text-transform: uppercase;
              letter-spacing: 0.5px;

              line-height: 1.4;
              overflow-wrap: anywhere;
            }

            .journey-stat-value {
              margin-top: 0.2rem;

              font-size: 1.1rem;
              font-weight: 700;
              line-height: 1.35;

              color: #0b1a2e;
              overflow-wrap: anywhere;
            }

            /* =====================================================
       1200px - LARGE DESKTOP
    ===================================================== */

            @media (max-width: 1200px) {
              .journey-preview-container {
                padding: 0 1.25rem;
              }

              .journey-preview-grid {
                gap: 2rem;
              }

              .journey-preview-stats {
                gap: 1rem;
              }
            }

            /* =====================================================
       1024px - TABLET / SMALL LAPTOP
    ===================================================== */

            @media (max-width: 1024px) {
              .journey-preview-section {
                padding: 3.5rem 0;
              }

              .journey-preview-title {
                font-size: 2rem;
              }

              .journey-preview-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
              }

              .journey-preview-content {
                max-width: 900px;
                margin: 0 auto;
              }

              .journey-map-card {
                max-width: 900px;
                margin: 0 auto;
              }

              .journey-preview-stats {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
              }
            }

            /* =====================================================
       768px - TABLET
    ===================================================== */

            @media (max-width: 768px) {
              .journey-preview-section {
                padding: 3rem 0;
              }

              .journey-preview-container {
                padding: 0 1rem;
              }

              .journey-preview-header {
                margin-bottom: 2rem;
              }

              .journey-preview-title {
                font-size: 1.8rem;
                line-height: 1.3;
              }

              .journey-preview-description {
                font-size: 0.95rem;
              }

              .journey-preview-grid {
                gap: 1.5rem;
              }

              .journey-preview-subtitle {
                font-size: 1.3rem;
              }

              .journey-preview-text {
                font-size: 0.92rem;
              }

              .journey-preview-features {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.6rem;
              }

              .journey-feature {
                padding: 0.5rem;
              }

              .journey-feature-text {
                font-size: 0.8rem;
              }

              .journey-book-btn {
                padding: 0.75rem 2rem;
              }

              .journey-map-card {
                border-radius: 20px;
              }

              .journey-map-wrapper {
                padding-bottom: 68%;
              }

              .map-overlay {
                padding: 1.5rem;
              }

              .map-overlay-icon {
                font-size: 2.5rem;
              }

              .map-overlay h4 {
                font-size: 1rem;
              }

              .map-overlay p {
                font-size: 0.8rem;
              }

              .journey-preview-stats {
                margin-top: 2rem;
                gap: 0.75rem;
              }

              .journey-stat-card {
                padding: 1rem 0.75rem;
              }

              .journey-stat-value {
                font-size: 1rem;
              }
            }

            /* =====================================================
       600px - SMALL TABLET / LARGE PHONE
    ===================================================== */

            @media (max-width: 600px) {
              .journey-preview-features {
                grid-template-columns: 1fr;
              }

              .journey-feature {
                min-height: 42px;
              }

              .journey-map-wrapper {
                padding-bottom: 72%;
              }
            }

            /* =====================================================
       480px - MOBILE
    ===================================================== */

            @media (max-width: 480px) {
              .journey-preview-section {
                padding: 2.5rem 0;
              }

              .journey-preview-container {
                padding: 0 0.75rem;
              }

              .journey-preview-header {
                margin-bottom: 1.5rem;
              }

              .journey-preview-badge {
                padding: 0.25rem 0.9rem;
                font-size: 0.72rem;
              }

              .journey-preview-title {
                font-size: 1.55rem;
                line-height: 1.3;
              }

              .journey-preview-description {
                font-size: 0.86rem;
                line-height: 1.55;
              }

              .journey-preview-grid {
                gap: 1.25rem;
              }

              .journey-premium-badge {
                padding: 0.3rem 0.85rem;
                font-size: 0.68rem;
                margin-bottom: 0.75rem;
              }

              .journey-preview-subtitle {
                font-size: 1.15rem;
                line-height: 1.35;
              }

              .journey-preview-text {
                font-size: 0.85rem;
                line-height: 1.6;
                margin-bottom: 1.1rem;
              }

              .journey-preview-features {
                grid-template-columns: 1fr;
                gap: 0.5rem;
                margin-bottom: 1.1rem;
              }

              .journey-feature {
                padding: 0.5rem 0.6rem;
                border-radius: 9px;
              }

              .journey-feature-text {
                font-size: 0.78rem;
              }

              .journey-book-btn {
                width: 100%;
                padding: 0.75rem 1rem;
                min-height: 44px;
                border-radius: 12px;
                font-size: 0.88rem;
              }

              .journey-book-btn :global(svg) {
                width: 18px;
                height: 18px;
              }

              .journey-map-card {
                border-radius: 16px;
              }

              .journey-map-wrapper {
                padding-bottom: 78%;
              }

              .map-overlay {
                padding: 1rem;
              }

              .map-overlay-icon {
                font-size: 2rem;
                margin-bottom: 0.5rem;
              }

              .map-overlay h4 {
                font-size: 0.9rem;
                margin-bottom: 0.35rem;
              }

              .map-overlay p {
                max-width: 240px;
                font-size: 0.72rem;
                line-height: 1.4;
              }

              .map-overlay-link {
                font-size: 0.75rem;
                margin-top: 0.3rem;
              }

              .map-overlay-link :global(svg) {
                width: 14px;
                height: 14px;
              }

              .journey-preview-stats {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.6rem;
                margin-top: 1.5rem;
              }

              .journey-stat-card {
                padding: 0.85rem 0.5rem;
                border-radius: 12px;
              }

              .journey-stat-icon {
                width: 34px;
                height: 34px;
                margin-bottom: 0.4rem;
              }

              .journey-stat-icon :global(svg) {
                width: 17px;
                height: 17px;
              }

              .journey-stat-label {
                font-size: 0.62rem;
                letter-spacing: 0.3px;
              }

              .journey-stat-value {
                font-size: 0.85rem;
                margin-top: 0.15rem;
              }
            }

            /* =====================================================
       359px - VERY SMALL PHONES
    ===================================================== */

            @media (max-width: 359px) {
              .journey-preview-section {
                padding: 2rem 0;
              }

              .journey-preview-container {
                padding: 0 0.6rem;
              }

              .journey-preview-title {
                font-size: 1.35rem;
              }

              .journey-preview-description {
                font-size: 0.8rem;
              }

              .journey-premium-badge {
                font-size: 0.62rem;
                padding: 0.28rem 0.7rem;
              }

              .journey-preview-subtitle {
                font-size: 1.05rem;
              }

              .journey-preview-text {
                font-size: 0.78rem;
              }

              .journey-feature {
                padding: 0.45rem 0.5rem;
              }

              .journey-feature-text {
                font-size: 0.72rem;
              }

              .journey-book-btn {
                font-size: 0.8rem;
                padding: 0.7rem 0.75rem;
              }

              .journey-map-wrapper {
                padding-bottom: 82%;
              }

              .map-overlay {
                padding: 0.75rem;
              }

              .map-overlay-icon {
                font-size: 1.7rem;
              }

              .map-overlay h4 {
                font-size: 0.8rem;
              }

              .map-overlay p {
                font-size: 0.65rem;
                max-width: 200px;
              }

              .map-overlay-link {
                font-size: 0.68rem;
              }

              .journey-preview-stats {
                gap: 0.5rem;
              }

              .journey-stat-card {
                padding: 0.7rem 0.35rem;
                border-radius: 10px;
              }

              .journey-stat-icon {
                width: 30px;
                height: 30px;
              }

              .journey-stat-label {
                font-size: 0.55rem;
              }

              .journey-stat-value {
                font-size: 0.75rem;
              }
            }

            /* =====================================================
       TOUCH DEVICES
    ===================================================== */

            @media (hover: none) {
              .journey-feature,
              .journey-map-card,
              .journey-stat-card,
              .journey-book-btn {
                transition: none;
              }
            }

            /* =====================================================
       REDUCED MOTION
    ===================================================== */

            @media (prefers-reduced-motion: reduce) {
              .journey-feature,
              .journey-map-card,
              .journey-stat-card,
              .journey-book-btn,
              .map-overlay {
                transition: none;
              }
            }
          `}</style>
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
                Frequently Asked Questions About {route.origin} to{" "}
                {route.destination}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Common questions about hiring a Force Urbania Tempo Traveller
                for the {route.origin} to {route.destination} route.
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
              {routeFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>

            {/* FAQ Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: routeFAQs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.a,
                    },
                  })),
                }),
              }}
            />
          </div>
        </section>

        {/* ===== FINAL BOOKING CTA SECTION ===== */}
        <section
          style={{
            padding: "5rem 0",
            background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            textAlign: "center", // <-- Add this for center alignment
          }}
        >
          {/* Decorative Background Elements */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "60%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-10%",
              width: "40%",
              height: "150%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="container"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
              textAlign: "center", // <-- Add this for center alignment
            }}
          >
            {/* Badge */}
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
                color: "#FFB800",
                marginBottom: "1.5rem",
                marginLeft: "auto", // <-- Add for centering
                marginRight: "auto", // <-- Add for centering
              }}
            >
              <Star size={14} fill="#FFB800" /> ⭐⭐⭐ Limited Availability
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "1rem",
                color: "#fff",
                lineHeight: 1.2,
                textAlign: "center", // <-- Add for center alignment
              }}
            >
              Ready to Book Your{" "}
              <span style={{ color: "#FFB800" }}>
                {route.origin} to {route.destination}
              </span>{" "}
              Trip?
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "650px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
                textAlign: "center", // <-- Add for center alignment
              }}
            >
              Secure your luxury Force Urbania Tempo Traveller now. Get instant
              confirmation, transparent pricing, and a dedicated chauffeur for
              your journey.
            </p>

            {/* Benefits Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1rem",
                maxWidth: "750px",
                margin: "0 auto 2.5rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center", // <-- Add for center alignment
              }}
            >
              {[
                {
                  icon: <CheckCircle2 size={16} />,
                  text: "Instant Confirmation",
                },
                { icon: <Shield size={16} />, text: "Verified Chauffeur" },
                { icon: <Wallet size={16} />, text: "Best Price Guarantee" },
                { icon: <Clock size={16} />, text: "24/7 Support" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.95)",
                    textAlign: "center", // <-- Add for center alignment
                  }}
                >
                  <span style={{ color: "#25D366" }}>{benefit.icon}</span>
                  {benefit.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Primary WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Book Force Urbania from ${route.origin} to ${route.destination} - Trip Date: [Your Date] - Group Size: [Number]`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "1.2rem 3rem",
                  borderRadius: "60px",
                  background: "#25D366",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
                  textAlign: "center", // <-- Add for center alignment
                }}
                className="cta-whatsapp-btn"
              >
                <MessageSquare size={22} /> Book Now on WhatsApp
              </a>

              {/* Phone Button */}
              <a
                href={`tel:+${whatsappNumber}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "1.2rem 2.5rem",
                  borderRadius: "60px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  border: "2px solid rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  textAlign: "center", // <-- Add for center alignment
                }}
                className="cta-phone-btn"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center", // <-- Add for center alignment
              }}
            >
              {[
                { icon: "✓", text: "No Hidden Charges" },
                { icon: "✓", text: "Free Cancellation*" },
                { icon: "✓", text: "Pay Later Option" },
                { icon: "✓", text: "100% Refund*" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.8)",
                    textAlign: "center", // <-- Add for center alignment
                  }}
                >
                  <span
                    style={{
                      color: "#25D366",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
