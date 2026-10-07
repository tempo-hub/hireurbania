"use client";

import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Star,
  Users,
  ArrowRight,
  Luggage,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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

export default function LocalityTemplate({
  locality,
  fleet = [],
  otherLocalities = [],
  cityHubSlug = null,
}) {
  const whatsappNumber = "919151827941";
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const placeLabel = `${locality.locality}, ${locality.cityName}`;
  const whatsappText = `Booking Query for Urbania Tempo Traveller Hire in ${placeLabel}`;

  const faqs = [
    {
      q: `What is the fare for a tempo traveller in ${placeLabel}?`,
      a: `Tempo traveller fare from ${placeLabel} depends on seating (9 / 12 / 16 seater Urbania), distance, days, tolls and parking. Urbania rentals generally start around ₹30/km with 250 km/day minimum + driver allowance. Share your dates and group size on WhatsApp for an exact quote.`,
    },
    {
      q: `Which seating options are available in ${locality.locality}?`,
      a: `We offer Force Urbania 9-seater VIP, 12-seater executive and 16-seater premium options for pickup from ${locality.locality}, ${locality.cityName}, subject to availability. Tell us your group size and luggage to get the best-fit vehicle.`,
    },
    {
      q: `Do you provide doorstep pickup in ${locality.locality}?`,
      a: `Yes. We provide doorstep pickup across ${locality.locality} including nearby areas like ${(locality.nearbyAreas || []).slice(0, 3).join(", ")}${locality.nearbyAreas?.length ? " and surrounding sectors" : ""}. Pickup from homes, hotels, stations and airports can be arranged.`,
    },
    {
      q: `Can I book ${locality.locality} to outstation trips?`,
      a: `Yes. Popular outstation trips from ${locality.locality} include ${(locality.popularRoutes || []).slice(0, 3).join(", ")}${locality.popularRoutes?.length ? " and more" : ""}. We support one-way, round-trip and multi-day tours with experienced chauffeurs.`,
    },
    {
      q: `Is driver, toll and parking included in the fare?`,
      a: `Driver allowance is generally charged per day. Toll, state tax, parking and night charges are extra as applicable on ${placeLabel} trips. Your final quote on WhatsApp will clearly break down inclusions.`,
    },
    {
      q: `How do I book a Force Urbania from ${placeLabel}?`,
      a: `Click Get Instant Quote or Call Us, share pickup point in ${locality.locality}, destination, dates, group size and preferred seater. Our team confirms availability, fare and booking within minutes.`,
    },
  ];

  const cityLink = cityHubSlug ? `/${cityHubSlug}` : "/cities";

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        style={{
          paddingTop: "8.5rem",
          paddingBottom: "4rem",
          background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
          color: "#FFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              color: "rgba(255,255,255,0.8)",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/cities"
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              Cities
            </Link>
            <ChevronRight size={14} />
            <Link
              href={cityLink}
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              {locality.cityName}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: "#FFB800", fontWeight: 600 }}>
              {locality.locality}
            </span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.9fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="locality-hero-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.15)",
                  padding: "0.3rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                <MapPin size={14} /> {placeLabel}
              </div>

              <h1
                style={{
                  fontSize: "2.7rem",
                  fontWeight: 800,
                  margin: "1rem 0 0.85rem",
                  lineHeight: 1.15,
                  color: "#FFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Urbania Fare in{" "}
                <span style={{ color: "#FFB800" }}>{locality.locality}</span>,{" "}
                {locality.cityName}
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                }}
              >
                {locality.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                  fontSize: "0.85rem",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Star size={16} fill="#FFB800" color="#FFB800" /> 4.9/5 Rating
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Users size={16} /> 500+ Happy Groups
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Shield size={16} /> GPS + Insurance Covered
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
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
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
                    fontSize: "1rem",
                  }}
                >
                  <MessageSquare size={20} /> Get Instant Fare
                </a>
                <a
                  href={`tel:+${whatsappNumber}`}
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
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    fontSize: "1rem",
                  }}
                >
                  <Phone size={20} /> Call Us
                </a>
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px",
                padding: "2rem",
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
                    margin: 0,
                  }}
                >
                  Check {locality.locality} Fare
                </h3>
              </div>
              <p
                style={{
                  color: "#5b6b7e",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                Doorstep pickup in {placeLabel}. Reply within 2 minutes.
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
                    hidden.value = `Fare query: Urbania in ${placeLabel} - ${select.value}`;
                  }
                }}
              >
                <input
                  type="hidden"
                  name="text"
                  value={`Fare query: Urbania in ${placeLabel}`}
                />
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <MapPin size={14} /> Pickup Locality
                  </label>
                  <input
                    type="text"
                    value={placeLabel}
                    readOnly
                    style={{
                      width: "100%",
                      padding: "0.7rem 1rem",
                      border: "1px solid #dfe6ef",
                      borderRadius: "14px",
                      fontSize: "0.95rem",
                      background: "#f0f4fe",
                      fontWeight: 500,
                      outline: "none",
                      boxSizing: "border-box",
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
                      boxSizing: "border-box",
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
                  }}
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
                  marginBottom: 0,
                }}
              >
                ⚡ Response within 2 minutes
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 900px) {
            .locality-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </section>

      {/* ===== FLEET ===== */}
      {fleet?.length > 0 && (
        <section style={{ padding: "3.5rem 0", background: "#f9fafc" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Section Heading */}
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
                Urbania Fleet in {locality.cityName}
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Choose the vehicle that fits your group and luggage from{" "}
                {placeLabel}.
              </p>
            </div>

            {/* Fleet Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {fleet.map((model) => (
                <div
                  key={model.id}
                  className="fleet-image-card"
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                    border: "1px solid #f0f4fe",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {/* ===== CARD IMAGE ===== */}
                  <div
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
                      }}
                    />

                    {/* Capacity Badge */}
                    <span
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
                      <Star size={14} fill="#FFB800" />
                      4.9
                    </div>
                  </div>

                  {/* ===== CARD BODY ===== */}
                  <div style={{ padding: "1.5rem 1.2rem 1.8rem" }}>
                    {/* Vehicle Name */}
                    <h3
                      className="fleet-title"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        margin: "0 0 0.2rem",
                        color: "#0b1a2e",
                      }}
                    >
                      {model.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      style={{
                        color: "#4a5a6e",
                        fontSize: "0.85rem",
                        margin: "0 0 0.75rem",
                        minHeight: "40px",
                      }}
                    >
                      {model.tagline}
                    </p>

                    {/* ===== KEY SPECS ===== */}
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
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#4a5a6e",
                        }}
                      >
                        <Users
                          size={14}
                          style={{
                            display: "inline",
                            marginRight: "0.2rem",
                            verticalAlign: "middle",
                          }}
                        />
                        {model.seater} Seats
                      </span>

                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#4a5a6e",
                        }}
                      >
                        <Luggage
                          size={14}
                          style={{
                            display: "inline",
                            marginRight: "0.2rem",
                            verticalAlign: "middle",
                          }}
                        />
                        {model.luggageCapacity}
                      </span>
                    </div>

                    {/* ===== PRICING ===== */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#7a8a9e",
                          }}
                        >
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
                          ₹{model.ratePerKm}
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

                    {/* ===== BOOK BUTTON ===== */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Book ${model.name} in ${locality.cityName}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fleet-book-button"
                    >
                      <MessageSquare size={16} />
                      Book This Vehicle
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== HOVER + RESPONSIVE CSS ===== */}
          <style jsx>{`
            .fleet-image-card {
              transition:
                transform 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
            }

            .fleet-image-card:hover {
              transform: scale(1.02);
              border-color: #0052cc !important;
              box-shadow: 0 14px 32px rgba(0, 82, 204, 0.16);
            }

            .fleet-image-card .fleet-image {
              transition: transform 0.5s ease;
            }

            .fleet-image-card:hover .fleet-image {
              transform: scale(1.06);
            }

            .fleet-title {
              transition: color 0.25s ease;
            }

            .fleet-image-card:hover .fleet-title {
              color: #0052cc !important;
            }

            .fleet-book-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              width: 100%;
              padding: 0.7rem 1.5rem;
              border-radius: 40px;
              background: #0052cc;
              color: #fff;
              font-weight: 600;
              font-size: 0.9rem;
              text-decoration: none;
              transition:
                background-color 0.25s ease,
                transform 0.25s ease,
                box-shadow 0.25s ease;
              margin-top: 0.5rem;
            }

            .fleet-book-button:hover {
              background: #003ea6;
              transform: translateY(-2px);
              box-shadow: 0 8px 18px rgba(0, 82, 204, 0.25);
            }

            @media (max-width: 600px) {
              .fleet-image-card:hover {
                transform: scale(1.01);
              }
            }
          `}</style>
        </section>
      )}

      {/* ===== QUICK FACTS ===== */}
      <section style={{ padding: "3rem 0", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: <MapPin size={20} color="#0052CC" />,
                label: "Pickup",
                value: placeLabel,
              },
              {
                icon: <Users size={20} color="#0052CC" />,
                label: "Seaters",
                value: "9 / 12 / 16 Seater Urbania",
              },
              {
                icon: <Clock size={20} color="#0052CC" />,
                label: "Service",
                value: "Local + Outstation + Airport",
              },
              {
                icon: <Award size={20} color="#0052CC" />,
                label: "Driver",
                value: "Experienced local chauffeur",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="quick-fact-card"
                style={{
                  border: "1px solid #ecf0f7",
                  borderRadius: "16px",
                  padding: "1.1rem 1.2rem",
                  background: "#fafcff",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                }}
              >
                <div>{f.icon}</div>

                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#7a8a9e",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {f.label}
                  </div>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#0b1a2e",
                      fontWeight: 700,
                    }}
                  >
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .quick-fact-card {
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .quick-fact-card:hover {
            transform: scale(1.03);
            border-color: #0052cc !important;
            box-shadow: 0 10px 25px rgba(0, 82, 204, 0.15);
          }
        `}</style>
      </section>

      {/* ===== POPULAR FOR + NEARBY ===== */}
      <section style={{ padding: "1rem 0 3rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2rem",
          }}
          className="locality-two-col"
        >
          {/* ===== POPULAR FOR ===== */}
          <div
            className="locality-info-card"
            style={{
              background: "#f9fafc",
              border: "1px solid #ecf0f7",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0b1a2e",
                margin: "0 0 0.5rem",
              }}
            >
              Popular for {locality.locality} bookings
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "0.95rem",
                margin: "0 0 1.2rem",
              }}
            >
              Most booked use-cases for Force Urbania pickup from {placeLabel}.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {(locality.popularFor || []).map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "#fff",
                    border: "1px solid #e2e8f5",
                    padding: "0.5rem 1rem",
                    borderRadius: "40px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1f2b3a",
                  }}
                >
                  <CheckCircle2 size={15} color="#0052CC" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ===== NEARBY AREAS ===== */}
          <div
            className="locality-info-card"
            style={{
              background: "#eef3ff",
              borderRadius: "20px",
              padding: "2rem",
              border: "1px solid transparent",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0b1a2e",
                margin: "0 0 0.5rem",
              }}
            >
              Nearby pickup areas
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "0.95rem",
                margin: "0 0 1.2rem",
              }}
            >
              We also serve these nearby areas around {locality.locality}.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {(locality.nearbyAreas || []).map((area) => (
                <span
                  key={area}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "40px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#0b1a2e",
                  }}
                >
                  <MapPin size={14} color="#0052CC" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          /* ===== CARD HOVER ===== */
          .locality-info-card {
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .locality-info-card:hover {
            transform: scale(1.02);
            border-color: #0052cc !important;
            box-shadow: 0 10px 25px rgba(0, 82, 204, 0.15);
          }

          /* ===== RESPONSIVE ===== */
          @media (max-width: 900px) {
            .locality-two-col {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ===== POPULAR ROUTES ===== */}
      {locality.popularRoutes?.length > 0 && (
        <section style={{ padding: "3.5rem 0", background: "#f9fafc" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#0b1a2e",
                margin: "0 0 0.5rem",
                textAlign: "center",
              }}
            >
              Popular Routes from{" "}
              <span style={{ color: "#0052CC" }}>{locality.locality}</span>
            </h2>

            {/* Description */}
            <p
              style={{
                textAlign: "center",
                color: "#4a5a6e",
                margin: "0 0 2rem",
                fontSize: "0.95rem",
              }}
            >
              One-way, round-trip and multi-day Urbania tours starting from{" "}
              {placeLabel}.
            </p>

            {/* Route Cards */}
            <div className="routes-grid">
              {locality.popularRoutes.map((route, index) => (
                <a
                  key={`${route}-${index}`}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Fare query: ${route} by Force Urbania from ${placeLabel}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popular-route-card"
                >
                  {/* Left Icon */}
                  <div className="route-icon">
                    <MapPin size={20} />
                  </div>

                  {/* Route Information */}
                  <div className="route-content">
                    <div className="route-title">{route}</div>

                    <div className="route-details">
                      Force Urbania • All seaters • With driver
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ===== ROUTE CARD STYLES ===== */}
          <style jsx>{`
            .popular-route-card {
              position: relative;
              display: flex;
              align-items: center;
              gap: 0.9rem;

              background: #ffffff;
              border: 1px solid #ecf0f7;
              border-radius: 16px;

              padding: 1.2rem 1.3rem;

              text-decoration: none;

              transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                box-shadow 0.25s ease,
                background-color 0.25s ease;
            }

            .popular-route-card:hover {
              transform: scale(1.02);
              border-color: #0052cc;
              background: #ffffff;
              box-shadow: 0 10px 25px rgba(0, 82, 204, 0.14);
            }

            /* Route Icon */
            .route-icon {
              flex-shrink: 0;

              width: 42px;
              height: 42px;

              display: flex;
              align-items: center;
              justify-content: center;

              border-radius: 12px;

              background: #eef3ff;
              color: #0052cc;

              transition:
                background-color 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
            }

            .popular-route-card:hover .route-icon {
              background: #0052cc;
              color: #ffffff;
              transform: scale(1.08);
            }

            /* Route Content */
            .route-content {
              flex: 1;
              min-width: 0;
            }

            .route-title {
              font-size: 1rem;
              font-weight: 700;
              color: #0b1a2e;

              transition: color 0.25s ease;
            }

            .popular-route-card:hover .route-title {
              color: #0052cc;
            }

            .route-details {
              font-size: 0.82rem;
              color: #7a8a9e;
              margin-top: 0.25rem;
              line-height: 1.4;
            }

            /* Arrow */
            .route-arrow {
              flex-shrink: 0;

              width: 36px;
              height: 36px;

              display: flex;
              align-items: center;
              justify-content: center;

              border-radius: 50%;

              color: #0052cc;
              background: #f4f7ff;

              transition:
                background-color 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
            }

            .popular-route-card:hover .route-arrow {
              background: #0052cc;
              color: #ffffff;
              transform: translateX(3px);
            }

            /* Mobile */
            @media (max-width: 600px) {
              .popular-route-card {
                padding: 1rem;
              }

              .route-details {
                font-size: 0.78rem;
              }

              .route-icon {
                width: 38px;
                height: 38px;
              }

              .route-arrow {
                width: 32px;
                height: 32px;
              }
            }
          `}</style>
        </section>
      )}

      {/* =========================================================
    URBANIA VS STANDARD TEMPO TRAVELLER
========================================================= */}
      <section
        style={{
          padding: "4rem 0",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Section Heading */}
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
                padding: "0.3rem 1.1rem",
                borderRadius: "40px",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              <Award size={15} />
              Compare Your Options
            </div>

            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#0b1a2e",
                margin: "0.7rem 0 0.6rem",
              }}
            >
              Force Urbania vs Standard Tempo Traveller
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "1rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Planning a group trip from {placeLabel}? Compare the comfort,
              seating, luggage space and suitability of Force Urbania with a
              standard tempo traveller.
            </p>
          </div>

          {/* Comparison Card */}
          <div
            className="urbania-comparison-card"
            style={{
              background: "#fff",
              border: "1px solid #e2e8f5",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(0, 30, 80, 0.06)",
            }}
          >
            {/* Header */}
            <div
              className="comparison-header"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                background: "#0052CC",
                color: "#fff",
              }}
            >
              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                }}
              >
                Feature
              </div>

              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Force Urbania
              </div>

              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                  textAlign: "center",
                  background: "#003ea6",
                }}
              >
                Standard Tempo Traveller
              </div>
            </div>

            {/* Comparison Rows */}
            {[
              {
                feature: "Vehicle Type",
                urbania: "Force Urbania",
                tempo: "Standard Tempo Traveller",
              },
              {
                feature: "Interior Comfort",
                urbania: "Premium & spacious cabin",
                tempo: "Standard comfortable interior",
              },
              {
                feature: "Seating Options",
                urbania: "9 / 12 / 16 Seater",
                tempo: "Multiple seating options",
              },
              {
                feature: "Luggage Space",
                urbania: "Spacious luggage area",
                tempo: "Standard luggage space",
              },
              {
                feature: "Long Distance Travel",
                urbania: "Ideal for multi-day trips",
                tempo: "Suitable for group travel",
              },
              {
                feature: "Best For",
                urbania: "Families, weddings & corporate trips",
                tempo: "Budget group travel",
              },
            ].map((item, index) => (
              <div
                key={item.feature}
                className="comparison-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr 1fr",
                  borderTop: "1px solid #ecf0f7",
                  background: index % 2 === 0 ? "#fff" : "#fafcff",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.3rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.feature}
                </div>

                <div
                  style={{
                    padding: "1rem 1.3rem",
                    textAlign: "center",
                    color: "#0052CC",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  <CheckCircle2
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "0.3rem",
                    }}
                  />
                  {item.urbania}
                </div>

                <div
                  style={{
                    padding: "1rem 1.3rem",
                    textAlign: "center",
                    color: "#4a5a6e",
                    fontSize: "0.88rem",
                  }}
                >
                  {item.tempo}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .urbania-comparison-card {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .urbania-comparison-card:hover {
            transform: translateY(-4px);
            border-color: #0052cc;
            box-shadow: 0 16px 35px rgba(0, 82, 204, 0.12);
          }

          .comparison-row {
            transition:
              background-color 0.2s ease,
              transform 0.2s ease;
          }

          .comparison-row:hover {
            background: #eef3ff !important;
          }

          @media (max-width: 700px) {
            .comparison-header,
            .comparison-row {
              grid-template-columns: 1fr !important;
            }

            .comparison-header > div,
            .comparison-row > div {
              text-align: left !important;
            }

            .comparison-header > div:not(:first-child) {
              display: none;
            }

            .comparison-row {
              padding: 0.3rem 0;
            }

            .comparison-row > div {
              padding: 0.6rem 1rem !important;
            }

            .comparison-row > div:nth-child(2)::before {
              content: "Force Urbania: ";
              font-weight: 700;
              color: #0052cc;
            }

            .comparison-row > div:nth-child(3)::before {
              content: "Standard Tempo Traveller: ";
              font-weight: 700;
              color: #4a5a6e;
            }
          }
        `}</style>
      </section>

      {/* =========================================================
          WHY BOOK FORCE URBANIA
          ========================================================= */}
      <section
        style={{
          padding: "4rem 0",
          background: "#f9fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="why-urbania-grid"
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#eef3ff",
                  color: "#0052CC",
                  padding: "0.3rem 1.1rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                <Shield size={15} />
                Trusted Group Travel
              </div>

              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  lineHeight: 1.2,
                  margin: "0.8rem 0 0.8rem",
                }}
              >
                Why Book Force Urbania in{" "}
                <span style={{ color: "#0052CC" }}>{locality.locality}</span>?
              </h2>

              <p
                style={{
                  color: "#4a5a6e",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                Get a comfortable Force Urbania with professional chauffeur,
                flexible pickup and multiple seating options for local and
                outstation travel from {placeLabel}.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Booking enquiry for Force Urbania from ${placeLabel}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="why-urbania-button"
              >
                <MessageSquare size={17} />
                Check Availability
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Right Benefits */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
              className="why-benefits-grid"
            >
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Doorstep Pickup",
                  text: `Pickup from homes, hotels and nearby areas in ${locality.locality}.`,
                },
                {
                  icon: <Users size={22} />,
                  title: "Multiple Seaters",
                  text: "Choose 9, 12 or 16 seater Urbania based on your group size.",
                },
                {
                  icon: <Shield size={22} />,
                  title: "Experienced Drivers",
                  text: "Professional chauffeurs for comfortable local and outstation journeys.",
                },
                {
                  icon: <Calendar size={22} />,
                  title: "Flexible Trips",
                  text: "Suitable for one-way, round-trip, weddings and multi-day tours.",
                },
                {
                  icon: <Luggage size={22} />,
                  title: "Luggage Friendly",
                  text: "Spacious vehicle options for families and larger groups with luggage.",
                },
                {
                  icon: <MessageSquare size={22} />,
                  title: "Quick WhatsApp Booking",
                  text: "Send your trip details and get availability and fare assistance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="why-benefit-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f5",
                    borderRadius: "18px",
                    padding: "1.3rem",
                  }}
                >
                  <div
                    className="why-benefit-icon"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#eef3ff",
                      color: "#0052CC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "#5b6b7e",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .why-urbania-grid {
            min-height: 300px;
          }

          .why-benefit-card {
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .why-benefit-card:hover {
            transform: translateY(-5px);
            border-color: #0052cc;
            box-shadow: 0 12px 28px rgba(0, 82, 204, 0.12);
          }

          .why-benefit-icon {
            transition:
              transform 0.25s ease,
              background-color 0.25s ease,
              color 0.25s ease;
          }

          .why-benefit-card:hover .why-benefit-icon {
            background: #0052cc !important;
            color: #fff !important;
            transform: scale(1.08);
          }

          .why-urbania-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            background: #0052cc;
            color: #fff;
            font-weight: 700;
            font-size: 0.9rem;
            text-decoration: none;
            transition:
              background-color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .why-urbania-button:hover {
            background: #003ea6;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 82, 204, 0.25);
          }

          @media (max-width: 900px) {
            .why-urbania-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            .why-benefits-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ padding: "3rem 0", background: "#f9fafc" }}>
        <div
          style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0b1a2e",
              textAlign: "center",
              margin: "0 0 0.5rem",
            }}
          >
            {locality.locality} fare FAQs
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#4a5a6e",
              margin: "0 0 2rem",
            }}
          >
            Everything about Force Urbania hire from {placeLabel}.
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            {faqs.map((f, i) => (
              <FAQItem
                key={i}
                question={f.q}
                answer={f.a}
                isOpen={openFAQIndex === i}
                onToggle={() => setOpenFAQIndex(openFAQIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== OTHER LOCALITIES ===== */}
      {otherLocalities?.length > 0 && (
        <section style={{ padding: "3rem 0", background: "#fff" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#0b1a2e",
                margin: "0 0 1.2rem",
              }}
            >
              More {locality.cityName} localities
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
              {otherLocalities.map((o) => (
                <Link
                  key={`${o.city}-${o.slug}`}
                  href={`/${o.city}/${o.slug}`}
                  className="locality-link"
                >
                  Urbania in {o.locality}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href={cityLink}
                style={{
                  color: "#0052CC",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                View all {locality.cityName} services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
