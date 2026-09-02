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
              <CityGuide cityData={cityGuide} route={route} />
            </div>
          </section>
        )}

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
                Book Your{" "}
                <span style={{ color: "#0052CC" }}>
                  {route.origin} to {route.destination}
                </span>{" "}
                Urbania in 4 Simple Steps
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Quick and hassle-free booking process for your {route.origin} to{" "}
                {route.destination} Urbania Tempo Traveller journey.
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

        {/* ===== ROUTE GUIDE SECTION ===== */}
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
                <Route size={14} />
                Route Guide
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                  fontWeight: 700,
                  margin: "0.7rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Complete Travel Guide for{" "}
                <span style={{ color: "#0052CC" }}>
                  {route.origin} to {route.destination}
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#4a5a6e",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Everything you need to know about your {route.origin} to{" "}
                {route.destination} journey including route details, stopovers,
                and travel tips.
              </p>
            </div>

            {/* Main Route Guide Content */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "2rem",
                border: "1px solid #ecf0f7",
                boxShadow: "0 8px 24px rgba(0,20,50,0.04)",
              }}
            >
              {/* Route Overview Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid #ecf0f7",
                }}
              >
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
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      background: "#f9fafc",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f0f4fe";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f9fafc";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "#7a8a9e" }}>
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#0b1a2e",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Route Details Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid #ecf0f7",
                }}
              >
                {/* Left Column - Route Information */}
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Info size={18} color="#0052CC" />
                    Route Information
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0.75rem",
                        background: "#f9fafc",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#4a5a6e" }}>Highway Name</span>
                      <span style={{ fontWeight: 600, color: "#0b1a2e" }}>
                        {getHighwayName(route.origin, route.destination)}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0.75rem",
                        background: "#f9fafc",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#4a5a6e" }}>Road Condition</span>
                      <span
                        style={{
                          fontWeight: 600,
                          color: route.distanceKm > 400 ? "#b33d00" : "#16803c",
                        }}
                      >
                        {getRoadCondition(route.distanceKm)}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0.75rem",
                        background: "#f9fafc",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#4a5a6e" }}>Night Travel</span>
                      <span
                        style={{
                          fontWeight: 600,
                          color: route.distanceKm < 300 ? "#16803c" : "#b33d00",
                        }}
                      >
                        {route.distanceKm < 300
                          ? "✓ Safe"
                          : "⚠️ Not Recommended"}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0.75rem",
                        background: "#f9fafc",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#4a5a6e" }}>Best Season</span>
                      <span style={{ fontWeight: 600, color: "#0b1a2e" }}>
                        {getBestSeason(route.destination)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Quick Tips */}
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Lightbulb size={18} color="#F59E0B" />
                    Quick Tips
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        padding: "0.5rem 0.75rem",
                        background: "#f0fdf4",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        color: "#1a2634",
                        lineHeight: "1.5",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="#10b981"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>
                        Start early from {route.origin} to avoid traffic
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        padding: "0.5rem 0.75rem",
                        background: "#fef3c7",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        color: "#1a2634",
                        lineHeight: "1.5",
                      }}
                    >
                      <Fuel
                        size={16}
                        color="#d97706"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>Fuel up before entering remote stretches</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        padding: "0.5rem 0.75rem",
                        background: "#e0f2fe",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        color: "#1a2634",
                        lineHeight: "1.5",
                      }}
                    >
                      <Camera
                        size={16}
                        color="#0284c7"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>Carry camera for scenic views on the route</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stopovers Section */}
              <div
                style={{
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid #ecf0f7",
                  paddingBottom: "1.5rem",
                }}
              >
                <button
                  onClick={() => toggleSection("stopovers")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.25rem 0",
                    fontFamily: "inherit",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      margin: 0,
                    }}
                  >
                    <MapPinned size={18} color="#0052CC" />
                    Recommended Stopovers
                  </h3>
                  {expandedSections.stopovers ? (
                    <ChevronUp size={20} color="#7a8a9e" />
                  ) : (
                    <ChevronDown size={20} color="#7a8a9e" />
                  )}
                </button>

                {expandedSections.stopovers && (
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {getStopovers(route.distanceKm).map((stopover, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          padding: "1rem",
                          background: "#f9fafc",
                          borderRadius: "12px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f0f4fe";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#f9fafc";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: "#eef3ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#0052CC",
                          }}
                        >
                          {stopover.icon === "coffee" && <Coffee size={16} />}
                          {stopover.icon === "food" && <Utensils size={16} />}
                          {stopover.icon === "hotel" && <Hotel size={16} />}
                          {stopover.icon === "rest" && <Users size={16} />}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: "#0b1a2e",
                            }}
                          >
                            {stopover.name}
                          </div>
                          <div
                            style={{ fontSize: "0.75rem", color: "#4a5a6e" }}
                          >
                            {stopover.purpose}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Travel Tips Section */}
              <div>
                <button
                  onClick={() => toggleSection("tips")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.25rem 0",
                    fontFamily: "inherit",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      margin: 0,
                    }}
                  >
                    <Shield size={18} color="#0052CC" />
                    Pro Travel Tips
                  </h3>
                  {expandedSections.tips ? (
                    <ChevronUp size={20} color="#7a8a9e" />
                  ) : (
                    <ChevronDown size={20} color="#7a8a9e" />
                  )}
                </button>

                {expandedSections.tips && (
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    {getTravelTips(route).map((tip, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          padding: "0.75rem",
                          background: "#f0f4fe",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          color: "#1a2634",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ color: "#0052CC", flexShrink: 0 }}>
                          ✓
                        </span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Responsive Styles */}
          <style jsx>{`
            @media (max-width: 768px) {
              .route-guide-wrapper {
                padding: 0;
              }

              .route-guide-wrapper [style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }

              .route-guide-wrapper [style*="padding: 2rem"] {
                padding: 1.25rem !important;
              }

              .route-guide-wrapper
                [style*="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))"] {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }

            @media (max-width: 480px) {
              .route-guide-wrapper h2 {
                font-size: 1.5rem !important;
              }

              .route-guide-wrapper
                [style*="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))"] {
                grid-template-columns: 1fr !important;
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

            {/* What's Included / Not Included */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              {/* Included */}
              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  border: "1px solid #bbf7d0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(34, 197, 94, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#15803d",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={20} /> What's Included
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    `Base fare for ${route.distanceKm * 2} km round trip`,
                    "Professional, verified driver",
                    "Fuel costs",
                    "State permits and taxes",
                    "Basic insurance coverage",
                    "AC comfort throughout journey",
                    "24/7 customer support",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.4rem 0",
                        fontSize: "0.9rem",
                        color: "#1a2634",
                      }}
                    >
                      <span style={{ color: "#22c55e", fontSize: "1.1rem" }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div
                style={{
                  background: "#fef2f2",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  border: "1px solid #fecaca",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(239, 68, 68, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#dc2626",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <X size={20} /> What's Not Included
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Toll taxes (payable as per actual)",
                    "Inter-state permit fees",
                    "Parking fees at hotels and attractions",
                    "Meals and accommodation for driver",
                    "Extended halt charges",
                    "Additional KM beyond the limit",
                    "Personal expenses and tips",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.4rem 0",
                        fontSize: "0.9rem",
                        color: "#1a2634",
                      }}
                    >
                      <span style={{ color: "#ef4444", fontSize: "1.1rem" }}>
                        ✗
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Promise */}
            <div
              style={{
                background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                borderRadius: "20px",
                padding: "2rem",
                textAlign: "center",
                color: "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(0, 82, 204, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  marginBottom: "1rem",
                }}
              >
                <ShieldCheck size={28} color="#fff" />
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Our Price Promise
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
                We guarantee the best price for your {route.origin} to{" "}
                {route.destination}
                journey. If you find a lower price elsewhere, we'll match it.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Price match query for ${route.origin} to ${route.destination}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "50px",
                  background: "#fff",
                  color: "#0052CC",
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
                    "0 8px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageSquare size={18} /> Get Best Price Quote
              </a>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
              @media (max-width: 768px) {
                .pricing-card {
                  padding: 1.5rem !important;
                }

                .pricing-table-wrapper {
                  padding: 1.25rem !important;
                }

                .pricing-table-wrapper
                  [style*="grid-template-columns: 1fr 1fr"] {
                  grid-template-columns: 1fr !important;
                }

                .pricing-row td {
                  font-size: 0.85rem !important;
                  padding: 0.6rem 0.8rem !important;
                }
              }

              @media (max-width: 480px) {
                .pricing-card {
                  padding: 1rem !important;
                }

                .pricing-icon {
                  width: 40px !important;
                  height: 40px !important;
                }

                .pricing-icon svg {
                  width: 20px !important;
                  height: 20px !important;
                }

                .pricing-table-wrapper {
                  padding: 1rem !important;
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
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <MapPin size={14} /> Journey Preview
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Experience a Smooth Ride from{" "}
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
                Travel with comfort, safety, and flexibility. Your journey from{" "}
                {route.origin} to {route.destination} starts here.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left Column - Journey Details */}
              <div>
                {/* Premium Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#0052CC",
                    color: "#fff",
                    padding: "0.3rem 1.2rem",
                    borderRadius: "40px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    marginBottom: "1rem",
                  }}
                >
                  <BusFront size={14} /> Premium Travel Experience
                </div>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                    marginBottom: "0.5rem",
                  }}
                >
                  Travel from {route.origin} to {route.destination}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4a5a6e",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
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

                {/* Features List */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
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
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem",
                        background: "#f9fafc",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#f0f4fe";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f9fafc";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      {feature.icon}
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#1a2634",
                          fontWeight: 500,
                        }}
                      >
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
                    boxShadow: "0 8px 24px rgba(37, 211, 102, 0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(37, 211, 102, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(37, 211, 102, 0.25)";
                  }}
                >
                  <MessageSquare size={20} /> Book Your Ride →
                </a>
              </div>

              {/* Right Column - Map */}
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #ecf0f7",
                  boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0, 82, 204, 0.12)";
                  e.currentTarget.style.transform = "scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,20,50,0.06)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "75%",
                    background: "#eef3ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Map Container */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(route.origin)}&destination=${encodeURIComponent(route.destination)}&mode=driving`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map showing route from ${route.origin} to ${route.destination}`}
                    />
                  </div>

                  {/* Overlay - Only shown if map fails to load */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.95)",
                      color: "#0b1a2e",
                      padding: "2rem",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      zIndex: 1,
                    }}
                    className="map-overlay"
                    onClick={() => {
                      window.open(
                        `https://www.google.com/maps/dir/${encodeURIComponent(route.origin)}/${encodeURIComponent(route.destination)}`,
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
                    <div
                      style={{
                        fontSize: "3rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      🗺️
                    </div>
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#0b1a2e",
                        marginBottom: "0.5rem",
                      }}
                    >
                      View Route Map
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#4a5a6e",
                        maxWidth: "300px",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Click to load live Google Map for {route.origin} to{" "}
                      {route.destination}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "#0052CC",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <MapPin size={16} />
                      Open Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "1.5rem",
                marginTop: "3rem",
              }}
            >
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
                  style={{
                    background: "#ffffff",
                    padding: "1.2rem",
                    borderRadius: "16px",
                    border: "1px solid #ecf0f7",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
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
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#eef3ff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#7a8a9e",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginTop: "0.2rem",
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
              @media (max-width: 968px) {
                .journey-preview-grid {
                  grid-template-columns: 1fr !important;
                  gap: 2rem !important;
                }
              }

              @media (max-width: 768px) {
                .journey-preview-section {
                  padding: 3rem 0 !important;
                }

                .journey-preview-grid {
                  gap: 1.5rem !important;
                }

                .journey-preview-features {
                  grid-template-columns: 1fr !important;
                }

                .journey-preview-stats {
                  grid-template-columns: repeat(2, 1fr) !important;
                }

                .journey-preview h3 {
                  font-size: 1.3rem !important;
                }

                .map-overlay h4 {
                  font-size: 1rem !important;
                }

                .map-overlay p {
                  font-size: 0.8rem !important;
                }
              }

              @media (max-width: 480px) {
                .journey-preview-stats {
                  grid-template-columns: 1fr 1fr !important;
                  gap: 0.75rem !important;
                }

                .journey-preview h2 {
                  font-size: 1.8rem !important;
                }

                .journey-preview .book-btn {
                  width: 100% !important;
                  justify-content: center !important;
                }
              }
            `}</style>
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

        <Footer />
      </main>
    </>
  );
}
