"use client";

import Link from "next/link";
import Image from "next/image";
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
  ChevronRight,
  Luggage,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info,
  BookOpen,
  Truck,
} from "lucide-react";
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

// ========== SEO COMPONENT ==========
function CitySeo({ city, faqs = [], fleet = [] }) {
  // const fleetSeaters =
  //   fleet.length > 0
  //     ? [...new Set(fleet.map((f) => f.seater))].sort((a, b) => a - b)
  //     : [9, 17];
  // const seaterRange =
  //   fleetSeaters.length > 1
  //     ? `${fleetSeaters[0]}-${fleetSeaters[fleetSeaters.length - 1]}`
  //     : `${fleetSeaters[0]}`;
  // const seaterList =
  //   fleetSeaters.length > 1
  //     ? `${fleetSeaters.slice(0, -1).join(", ")} & ${fleetSeaters[fleetSeaters.length - 1]}`
  //     : `${fleetSeaters[0]}`;

  const fleetSeaters = [9, 17];

  const seaterRange = `${fleetSeaters[0]}-${fleetSeaters[1]}`;

  const seaterList = `${fleetSeaters[0]} and ${fleetSeaters[1]}`;

  const title = `Urbania on Rent in ${city.name} | ${seaterRange} Seater @₹30/km`;

  const description =
    city.metaDescription ||
    `Force Urbania tempo traveller on rent in ${city.name} from ₹30/km. ${seaterList} seater with driver, doorstep pickup. Book on WhatsApp.`;

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;

  // Product schema — kept for retail-style search
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Force Urbania Tempo Traveller on Rent in ${city.name}`,
    description: description,
    brand: { "@type": "Brand", name: "Force Motors" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice:
        fleet.length > 0 ? Math.min(...fleet.map((f) => f.ratePerKm)) : 30,
      highPrice:
        fleet.length > 0 ? Math.max(...fleet.map((f) => f.ratePerKm)) : 33,
      offerCount: fleet.length || 4,
      availability: "https://schema.org/InStock",
      areaServed: city.name,
    },
  };

  // Service schema — semantically correct for rentals
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tempo Traveller Rental",
    name: `Force Urbania Tempo Traveller on Rent in ${city.name}`,
    description: description,
    provider: {
      "@type": "TravelAgency",
      name: `Urbania Tempo Traveller ${city.name}`,
      telephone: "+919151827941",
      areaServed: { "@type": "City", name: city.name },
    },
    areaServed: { "@type": "City", name: city.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice:
        fleet.length > 0 ? Math.min(...fleet.map((f) => f.ratePerKm)) : 30,
      highPrice:
        fleet.length > 0 ? Math.max(...fleet.map((f) => f.ratePerKm)) : 33,
      offerCount: fleet.length || 4,
      availability: "https://schema.org/InStock",
    },
  };

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: city.name,
    ...(city.state && { addressRegion: city.state }),
    addressCountry: city.country || "IN",
    ...(city.streetAddress && { streetAddress: city.streetAddress }),
    ...(city.postalCode && { postalCode: city.postalCode }),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: `Urbania Tempo Traveller ${city.name}`,
    description: description,
    url: `https://hireurbaniatempotraveller.com/${city.slug}`,
    telephone: "+919151827941",
    priceRange: "₹30-₹33 per km",
    image: "https://hireurbaniatempotraveller.com/images/images/hero.png",
    address: postalAddress,
    ...(city.lat && city.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.lat,
            longitude: city.lng,
          },
        }
      : {}),
    areaServed: { "@type": "City", name: city.name },
    serviceType: "Tempo Traveller Rental",
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hireurbaniatempotraveller.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cities",
        item: "https://hireurbaniatempotraveller.com/cities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://hireurbaniatempotraveller.com/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta
        property="og:url"
        content={`https://hireurbaniatempotraveller.com/${city.slug}`}
      />
      <link
        rel="canonical"
        href={`https://hireurbaniatempotraveller.com/${city.slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

// ========== COMPARISON COMPONENT ==========
function WhyBookFromUs({ cityName }) {
  const comparisonData = [
    {
      feature: "Vehicle Type",
      urbania: "Force Urbania",
      tempo: "Standard Tempo Traveller",
    },
    {
      feature: "Interior Comfort",
      urbania: "Premium, spacious and modern interior",
      tempo: "Comfortable standard interior",
    },
    {
      feature: "Seating Comfort",
      urbania: "Premium reclining push-back seats",
      tempo: "Standard push-back seats",
    },
    {
      feature: "Passenger Experience",
      urbania: "Premium and comfortable experience for long journeys",
      tempo: "Comfortable option for regular group travel",
    },
    {
      feature: "Luggage Space",
      urbania: "Spacious luggage area for family and group trips",
      tempo: "Standard luggage space",
    },
    {
      feature: "Air Conditioning",
      urbania: "Fully air-conditioned",
      tempo: "Air-conditioned",
    },
    {
      feature: "Best For",
      urbania:
        "Family trips, weddings, corporate travel, tours & premium group journeys",
      tempo: "Family trips, sightseeing, local travel & regular group journeys",
    },
    {
      feature: "Long-Distance Travel",
      urbania: "Ideal for comfortable outstation and multi-city journeys",
      tempo: "Suitable for city, sightseeing and outstation journeys",
    },
    {
      feature: "Seating Options",
      urbania: "Multiple Urbania seating options for different group sizes",
      tempo: "Multiple Tempo Traveller seating configurations",
    },
    {
      feature: "Travel Comfort",
      urbania: "Premium travel experience for longer journeys",
      tempo: "Comfortable option for regular group transportation",
    },
  ];

  return (
    <section
      className="urbania-comparison-section"
      style={{ padding: "4rem 0", background: "#f9fafc" }}
    >
      <div
        className="container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "820px",
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
            }}
          >
            <CheckCircle2 size={14} />
            Compare Your Options
          </div>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 700,
              margin: "0.7rem 0 0.75rem",
              color: "#0b1a2e",
              lineHeight: 1.2,
            }}
          >
            Urbania on Rent vs Tempo Traveller in{" "}
            <span style={{ color: "#0052CC" }}>{cityName}</span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#4a5a6e",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Compare Force Urbania and Tempo Traveller options in {cityName} to
            understand the differences in comfort, seating, luggage space and
            suitability for your group journey.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid #ecf0f7",
            boxShadow: "0 8px 28px rgba(0,20,50,0.06)",
            overflow: "hidden",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "760px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background:
                      "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                    color: "#fff",
                  }}
                >
                  <th
                    style={{
                      padding: "1.1rem 1.2rem",
                      textAlign: "left",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      width: "25%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "1.1rem 1.2rem",
                      textAlign: "left",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      width: "37.5%",
                    }}
                  >
                    Urbania on Rent
                  </th>
                  <th
                    style={{
                      padding: "1.1rem 1.2rem",
                      textAlign: "left",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      width: "37.5%",
                    }}
                  >
                    Tempo Traveller
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={item.feature}
                    style={{
                      borderBottom:
                        index < comparisonData.length - 1
                          ? "1px solid #ecf0f7"
                          : "none",
                    }}
                  >
                    <td
                      style={{
                        padding: "1rem 1.2rem",
                        color: "#0b1a2e",
                        fontWeight: 600,
                        background: "#fafcff",
                      }}
                    >
                      {item.feature}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.2rem",
                        color: "#1f2b3a",
                        fontSize: "0.92rem",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                        }}
                      >
                        <CheckCircle2
                          size={18}
                          color="#0052CC"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{item.urbania}</span>
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.2rem",
                        color: "#4a5a6e",
                        fontSize: "0.92rem",
                      }}
                    >
                      {item.tempo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            background: "#eef3ff",
            borderRadius: "18px",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 0.35rem",
                color: "#0b1a2e",
                fontSize: "1.15rem",
              }}
            >
              Planning a group trip in {cityName}?
            </h3>
            <p style={{ margin: 0, color: "#4a5a6e", fontSize: "0.9rem" }}>
              Get the latest Force Urbania availability and fare for your
              journey.
            </p>
          </div>
          <a
            href={`https://wa.me/919151827941?text=${encodeURIComponent(`I want to hire a Force Urbania in ${cityName}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              background: "#0052CC",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <MessageSquare size={17} />
            Get Urbania Quote
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .urbania-comparison-section {
            padding: 3rem 0 !important;
          }
          .urbania-comparison-section h2 {
            font-size: 1.9rem !important;
          }
        }
        @media (max-width: 600px) {
          .urbania-comparison-section {
            padding: 2.5rem 0 !important;
          }
          .urbania-comparison-section > div {
            padding-left: 0.9rem !important;
            padding-right: 0.9rem !important;
          }
          .urbania-comparison-section h2 {
            font-size: 1.65rem !important;
          }
          .urbania-comparison-section p {
            font-size: 0.92rem !important;
          }
        }
      `}</style>
    </section>
  );
}

// ========== MAIN COMPONENT ==========
export default function CityTemplate({
  city,
  routes,
  fleet,
  faqs = [],
  allCities = [],
}) {
  const whatsappNumber = "919151827941";
  const relatedRoutes = Array.isArray(routes) ? routes : [];

  const nearbyRoutes = [...relatedRoutes]
    .filter((route) => Number(route.distanceKm) > 0)
    .sort((a, b) => Number(a.distanceKm) - Number(b.distanceKm))
    .slice(0, 10);

  const whatsappText = `Booking Query for Urbania Tempo Traveller Hire in ${city.name}`;

  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // SEO FIX #4: Fleet seater list from actual fleet data (no hardcoded 17/20)
  const fleetSeaters =
    fleet.length > 0
      ? [...new Set(fleet.map((f) => f.seater))].sort((a, b) => a - b)
      : [9, 17];
  const seaterRange =
    fleetSeaters.length > 1
      ? `${fleetSeaters[0]}-${fleetSeaters[fleetSeaters.length - 1]}`
      : `${fleetSeaters[0]}`;
  const seaterList =
    fleetSeaters.length > 1
      ? `${fleetSeaters.slice(0, -1).join(", ")} & ${fleetSeaters[fleetSeaters.length - 1]}`
      : `${fleetSeaters[0]}`;

  // SEO FIX #12: City-specific pickup points
  const cityPickupPoints = city.pickupPoints || [
    `${city.name} Airport`,
    `${city.name} Railway Station`,
    `${city.name} Bus Stand`,
    "City Center",
    "Hotel Pickup",
  ];

  // SEO FIX #7: Single consistent stats number
  const happyGroups = 500;

  const defaultFaqs = [
    {
      q: `What is the Urbania rent per km in ${city.name}?`,
      a: `Urbania rent in ${city.name} starts from ₹30 per km for a 9-seater and ₹32 per km for a 17-seater. Minimum 250 km per day applies. Driver allowance is ₹600-700 per day. Contact us on WhatsApp for the latest fare for your specific route and travel dates.`,
    },
    {
      q: `What is the cost of hiring a Force Urbania Tempo Traveller in ${city.name}?`,
      a: `The cost of hiring a Force Urbania Tempo Traveller in ${city.name} depends on seating capacity, travel distance, number of days, route, tolls, parking and other trip requirements. For a 1-day local trip, expect approximately ₹8,000-₹12,000. Outstation rates start from ₹30/km for a 9-seater and ₹32/km for a 17-seater. Contact us for the latest fare.`,
    },
    {
      q: `Which Force Urbania seating options are available in ${city.name}?`,
      a: `We offer Force Urbania Tempo Travellers in 9-seater and 17-seater configurations in ${city.name}. These vehicles are suitable for family trips, weddings, corporate travel, group tours and outstation journeys. Availability depends on your travel dates and route.`,
    },
    {
      q: `How to do Urbania booking near me in ${city.name}?`,
      a: `To book an Urbania near you in ${city.name}, WhatsApp us your pickup location, destination, travel dates and group size. We offer pickup from ${cityPickupPoints.slice(0, 3).join(", ")} and other locations across ${city.name}, subject to availability. Our team will share the fare and booking details.`,
    },
    {
      q: `Can I hire a Force Urbania for local sightseeing in ${city.name}?`,
      a: `Yes, you can hire a Force Urbania Tempo Traveller for local sightseeing in ${city.name} and nearby destinations. Choose a 9-seater for smaller groups or a 17-seater for larger groups, subject to availability.`,
    },
    {
      q: `Can I book a Force Urbania from ${city.name} for an outstation trip?`,
      a: `Yes, you can book a Force Urbania from ${city.name} for one-way trips, round trips, multi-day tours, family vacations, pilgrimage journeys, weddings and corporate travel. Both 9-seater and 17-seater options are available subject to your route and travel dates.`,
    },
    {
      q: `Is a driver included with a Force Urbania booking in ${city.name}?`,
      a: `Yes, Force Urbania bookings in ${city.name} include a driver. Driver allowance of ₹600-700 per day may apply depending on the package and booking terms. Confirm the final fare and inclusions before booking.`,
    },
    {
      q: `Force Urbania vs Tempo Traveller - which is better for group travel in ${city.name}?`,
      a: `Force Urbania is a premium group travel option with comfortable seating and a spacious interior. A 9-seater is suitable for smaller groups, while a 17-seater is ideal for larger groups. The best choice depends on your group size, budget and travel requirements in ${city.name}.`,
    },
    {
      q: `How can I book a Force Urbania Tempo Traveller in ${city.name}?`,
      a: `Contact Hire Urbania Tempo Traveller through WhatsApp or phone. Share your pickup location, destination, travel dates, group size and preferred vehicle, either a 9-seater or 17-seater. Our team will help you with availability, fare details and booking.`,
    },
    {
      q: `Do you offer Urbania on rent with driver for weddings in ${city.name}?`,
      a: `Yes, you can enquire about Force Urbania rentals with a driver for weddings in ${city.name}. The 9-seater and 17-seater options can suit different guest transportation requirements. Contact us for availability and wedding package details.`,
    },
    {
      q: `What is the minimum km per day for Urbania rental in ${city.name}?`,
      a: `The minimum distance for outstation Urbania rentals in ${city.name} is generally 250 km per day, subject to the selected package. Local rental packages may have different time and distance limits. Confirm the applicable terms when booking.`,
    },
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  const hasPickupDropData =
    Array.isArray(city?.pickupPoints) &&
    city.pickupPoints.length > 0 &&
    Array.isArray(city?.serviceAreas) &&
    city.serviceAreas.length > 0;

  return (
    <>
      {/* ===== SEO ===== */}
      <CitySeo city={city} faqs={displayFaqs} fleet={fleet} />

      <main className="city-template">
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
              className="city-hero-grid"
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

                {/* ✅ SEO FIX #3: H1 uses "on Rent" + "Hire" naturally */}
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
                  on Rent in{" "}
                  <span style={{ color: "#FFB800" }}>{city.name}</span>
                </h1>

                {/* ✅ SEO FIX #3: Body copy uses "rent" and "hire" naturally */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    maxWidth: "600px",
                  }}
                >
                  {city.desc} Hire a Force Urbania tempo traveller on rent in{" "}
                  {city.name} with doorstep pickup, luxury seating, and
                  experienced chauffeurs for local and outstation travel across
                  India.
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
                  {/* ✅ SEO FIX #7: Single consistent stat */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <Users size={16} /> {happyGroups}+ Happy Groups
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

                    {/* ✅ SEO FIX #4: Dropdown options match actual fleet */}
                    <select
                      name="seaterVariant"
                      defaultValue={
                        fleet.length > 0
                          ? `${fleet[0].seater} Seater ${fleet[0].name}`
                          : "9 Seater VIP Recliner"
                      }
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
                      {fleet.length > 0 ? (
                        fleet.map((model) => (
                          <option
                            key={model.id}
                            value={`${model.seater} Seater ${model.name}`}
                          >
                            {model.seater} Seater {model.name}
                          </option>
                        ))
                      ) : (
                        <>
                          <option value="9 Seater VIP Recliner">
                            9 Seater VIP Recliner
                          </option>
                          <option value="12 Seater Executive Urbania">
                            12 Seater Executive Urbania
                          </option>
                          <option value="16 Seater Premium Urbania">
                            16 Seater Premium Urbania
                          </option>
                        </>
                      )}
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

        {/* ===== OUR FLEET SECTION ===== */}
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
              {/* ✅ SEO FIX #3: H2 uses "on Rent" */}
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Urbania on Rent in {city.name} – Our Fleet
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
                  <div
                    className="fleet-img-wrapper"
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
                      // ✅ SEO FIX #9: Descriptive alt text with city
                      alt={`Force Urbania ${model.seater} seater on rent in ${city.name}`}
                      width={400}
                      height={220}
                      className="fleet-img"
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

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Book ${model.name} on rent in ${city.name}`,
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

            {fleet.some((f) => f.seater === 17) && (
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  marginTop: "3rem",
                }}
              >
                17 Seater Urbania on Rent in {city.name}
              </h2>
            )}
          </div>
        </section>

        {/* ===== WHY HIRE SECTION ===== */}
        <section className="why-hire-section">
          <div className="container why-hire-container">
            <div className="why-hire-header">
              <div className="why-hire-badge">
                <CheckCircle2 size={14} />
                <span>Why Hire Urbania</span>
              </div>

              {/* ✅ SEO FIX #3: H2 uses "Rent" */}
              <h2>Urbania Tempo Traveller on Rent in {city.name}</h2>

              <p>
                Travel comfortably with your group in a premium Force Urbania on
                rent in {city.name}, backed by experienced chauffeurs, doorstep
                pickup and reliable support.
              </p>
            </div>

            <div className="why-hire-grid">
              {[
                {
                  icon: <Users size={30} />,
                  title: "All Group Sizes",
                  // ✅ SEO FIX #4: Seater list from actual fleet
                  desc: `${seaterList} seater options for every group.`,
                },
                {
                  icon: <MapPin size={30} />,
                  title: "Doorstep Pickup",
                  // ✅ SEO FIX #12: City-specific pickup points
                  desc: `Pickup from ${cityPickupPoints.slice(0, 3).join(", ")} and more.`,
                },
                {
                  icon: <Award size={30} />,
                  title: "Trusted Chauffeurs",
                  desc: "Experienced drivers for city and highway travel.",
                },
                {
                  icon: <Shield size={30} />,
                  title: "Safety Assured",
                  desc: "GPS tracking, sanitized vehicles, and 24/7 support.",
                },
              ].map((feature, index) => (
                <div className="why-hire-card" key={index}>
                  <div className="why-hire-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PICKUP & DROP LOCATIONS ===== */}
        {hasPickupDropData && (
          <section
            className="pickup-drop-section"
            style={{
              padding: "4rem 0",
              background: "#f9fafc",
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
              {/* Header */}
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
                  <MapPin size={14} />
                  Pickup & Drop
                </div>

                <h2
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: 700,
                    margin: "0.5rem 0 0.75rem",
                    color: "#0b1a2e",
                  }}
                >
                  Urbania Tempo Traveller Pickup & Drop{" "}
                  <span style={{ color: "#0052CC" }}>
                    Locations in {city.name}
                  </span>
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#4a5a6e",
                    lineHeight: "1.6",
                  }}
                >
                  Book an Urbania Tempo Traveller in {city.name} with convenient
                  pickup and drop options across popular localities and service
                  areas for family trips, weddings, corporate travel, and
                  outstation journeys.
                </p>
              </div>

              {/* Two Column Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
                {/* Pickup Locations */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "1.8rem",
                    border: "1px solid #ecf0f7",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "1rem",
                    }}
                  >
                    <MapPin size={20} color="#0052CC" />
                    <span>Pickup Points in {city.name}</span>
                  </h3>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {city.pickupPoints.map((point, idx) => (
                      <li
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          padding: "0.55rem 0",
                          borderBottom:
                            idx < city.pickupPoints.length - 1
                              ? "1px solid #f0f4fe"
                              : "none",
                          fontSize: "0.9rem",
                          color: "#1a2634",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#22c55e"
                          style={{
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Areas / Drop Locations */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "1.8rem",
                    border: "1px solid #ecf0f7",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0b1a2e",
                      marginBottom: "1rem",
                    }}
                  >
                    <MapPin size={20} color="#0052CC" />
                    <span>Service Areas in {city.name}</span>
                  </h3>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {city.serviceAreas.map((area, idx) => (
                      <li
                        key={area}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          padding: "0.55rem 0",
                          borderBottom:
                            idx < city.serviceAreas.length - 1
                              ? "1px solid #f0f4fe"
                              : "none",
                          fontSize: "0.9rem",
                          color: "#1a2634",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#22c55e"
                          style={{
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking Note */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1rem 1.5rem",
                  background: "#f0f4fe",
                  borderRadius: "12px",
                  border: "1px solid #dce7ff",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  color: "#0b1a2e",
                  lineHeight: 1.6,
                }}
              >
                <Info
                  size={18}
                  color="#0052CC"
                  style={{
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>
                  Pickup and drop availability depends on your booking, vehicle
                  availability, road access, and local parking restrictions.
                  Additional charges may apply for outstation travel, tolls,
                  parking, and driver allowances according to the booking terms.
                  Confirm your exact pickup and destination before booking.
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ===== ABOUT URBANIA IN CITY SECTION ===== */}
        <section className="about-urbania-section">
          <div className="about-urbania-container">
            <div className="about-urbania-grid">
              <div className="about-urbania-content">
                <div className="about-urbania-badge">
                  <Award size={14} />
                  About Urbania
                </div>

                {/* ✅ SEO FIX #3: H2 uses "Rent" and is city-specific */}
                <h2 className="about-urbania-title">
                  Premium Urbania Tempo Traveller on Rent in{" "}
                  <span>{city.name}</span>
                </h2>

                <p className="about-urbania-description">
                  Urbania Tempo Traveller is the premier choice for group travel
                  in {city.name}. Our fleet of modern Force Urbania vehicles on
                  rent combines luxury, comfort, and reliability to ensure your
                  journey is unforgettable. Whether you're planning a family
                  trip, corporate outing, or pilgrimage tour, we have the
                  perfect vehicle for your needs. Hire Urbania in {city.name}{" "}
                  with doorstep pickup from {cityPickupPoints[0]} and other
                  locations.
                </p>

                <div className="about-urbania-features">
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
                    <div className="about-urbania-feature" key={index}>
                      <div className="about-urbania-feature-icon">
                        {item.icon}
                      </div>
                      <div className="about-urbania-feature-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-urbania-actions">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappText,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-urbania-primary-btn"
                  >
                    <MessageSquare size={18} />
                    <span>Book Urbania in {city.name}</span>
                  </a>
                  <Link href="/" className="about-urbania-secondary-btn">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="about-urbania-stats-wrapper">
                <div className="about-urbania-stats-card">
                  <div className="about-urbania-stats-grid">
                    {[
                      // ✅ SEO FIX #7: Consistent stat number
                      { number: `${happyGroups}+`, label: "Happy Groups" },
                      { number: "4.9/5", label: "Average Rating" },
                      { number: "98%", label: "On-Time Service" },
                      { number: "24/7", label: "Customer Support" },
                    ].map((stat, index) => (
                      <div key={index} className="about-urbania-stat">
                        <div className="about-urbania-stat-number">
                          {stat.number}
                        </div>
                        <div className="about-urbania-stat-label">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="about-urbania-highlight">
                    <div className="about-urbania-highlight-icon">🚐</div>
                    <h4>Why Choose Urbania on Rent in {city.name}?</h4>
                    <p>
                      Experience the perfect blend of luxury, comfort, and
                      affordability with our premium tempo traveller on rent in{" "}
                      {city.name}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .about-urbania-section {
              width: 100%;
              padding: 4rem 0;
              background: #ffffff;
              overflow: hidden;
            }
            .about-urbania-container {
              width: 100%;
              max-width: 1280px;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
            }
            .about-urbania-grid {
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
              gap: 4rem;
              align-items: center;
            }
            .about-urbania-content {
              min-width: 0;
            }
            .about-urbania-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              background: #eef3ff;
              color: #0052cc;
              padding: 0.25rem 1.2rem;
              border-radius: 40px;
              font-size: 0.8rem;
              font-weight: 600;
              margin-bottom: 1rem;
              white-space: nowrap;
            }
            .about-urbania-title {
              font-size: 2.3rem;
              font-weight: 700;
              margin: 0 0 1rem;
              color: #0b1a2e;
              line-height: 1.2;
              overflow-wrap: break-word;
            }
            .about-urbania-title span {
              color: #0052cc;
            }
            .about-urbania-description {
              font-size: 1.05rem;
              color: #4a5a6e;
              line-height: 1.8;
              margin: 0 0 1.5rem;
            }
            .about-urbania-features {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1.5rem;
              margin-bottom: 2rem;
            }
            .about-urbania-feature {
              display: flex;
              gap: 0.8rem;
              align-items: flex-start;
              min-width: 0;
            }
            .about-urbania-feature-icon {
              flex-shrink: 0;
              margin-top: 0.2rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .about-urbania-feature-content {
              min-width: 0;
            }
            .about-urbania-feature-content h4 {
              font-size: 0.95rem;
              font-weight: 600;
              color: #0b1a2e;
              margin: 0 0 0.2rem;
              line-height: 1.35;
            }
            .about-urbania-feature-content p {
              font-size: 0.85rem;
              color: #7a8a9e;
              line-height: 1.4;
              margin: 0;
            }
            .about-urbania-actions {
              display: flex;
              align-items: center;
              gap: 1rem;
              flex-wrap: wrap;
            }
            .about-urbania-primary-btn,
            .about-urbania-secondary-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.6rem;
              min-height: 46px;
              padding: 0.8rem 2rem;
              border-radius: 50px;
              font-size: 0.95rem;
              font-weight: 600;
              text-decoration: none;
              cursor: pointer;
              box-sizing: border-box;
              transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                background 0.2s ease;
            }
            .about-urbania-primary-btn {
              background: #25d366;
              color: #ffffff;
              border: none;
            }
            .about-urbania-secondary-btn {
              background: transparent;
              color: #0052cc;
              border: 2px solid #0052cc;
            }
            .about-urbania-primary-btn:hover,
            .about-urbania-secondary-btn:hover {
              transform: translateY(-2px);
            }
            .about-urbania-primary-btn:hover {
              box-shadow: 0 8px 20px rgba(37, 211, 102, 0.2);
            }
            .about-urbania-secondary-btn:hover {
              background: #eef3ff;
            }
            .about-urbania-stats-wrapper {
              min-width: 0;
              width: 100%;
            }
            .about-urbania-stats-card {
              width: 100%;
              background: #f9fafc;
              border-radius: 24px;
              padding: 2rem;
              border: 1px solid #ecf0f7;
              box-sizing: border-box;
            }
            .about-urbania-stats-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1.5rem;
              margin-bottom: 2rem;
            }
            .about-urbania-stat {
              text-align: center;
              padding: 1rem;
              background: #ffffff;
              border-radius: 16px;
              border: 1px solid #ecf0f7;
              min-width: 0;
              box-sizing: border-box;
            }
            .about-urbania-stat-number {
              font-size: 1.8rem;
              font-weight: 700;
              color: #0052cc;
              margin-bottom: 0.2rem;
              line-height: 1.2;
            }
            .about-urbania-stat-label {
              font-size: 0.85rem;
              color: #4a5a6e;
              font-weight: 500;
              line-height: 1.4;
            }
            .about-urbania-highlight {
              background: #eef3ff;
              border-radius: 16px;
              padding: 1.5rem;
              text-align: center;
              box-sizing: border-box;
            }
            .about-urbania-highlight-icon {
              font-size: 2.5rem;
              line-height: 1;
              margin-bottom: 0.5rem;
            }
            .about-urbania-highlight h4 {
              font-size: 1rem;
              font-weight: 700;
              color: #0b1a2e;
              margin: 0 0 0.3rem;
              line-height: 1.4;
            }
            .about-urbania-highlight p {
              font-size: 0.9rem;
              color: #4a5a6e;
              line-height: 1.6;
              margin: 0;
            }
            @media (max-width: 1200px) {
              .about-urbania-grid {
                gap: 3rem;
              }
              .about-urbania-title {
                font-size: 2.1rem;
              }
              .about-urbania-features {
                gap: 1.2rem;
              }
              .about-urbania-stats-card {
                padding: 1.5rem;
              }
            }
            @media (max-width: 1024px) {
              .about-urbania-section {
                padding: 3.5rem 0;
              }
              .about-urbania-container {
                padding: 0 1.25rem;
              }
              .about-urbania-grid {
                gap: 2.5rem;
              }
              .about-urbania-title {
                font-size: 2rem;
              }
              .about-urbania-description {
                font-size: 1rem;
                line-height: 1.7;
              }
              .about-urbania-features {
                gap: 1rem;
              }
              .about-urbania-stats-grid {
                gap: 1rem;
              }
            }
            @media (max-width: 768px) {
              .about-urbania-section {
                padding: 3rem 0;
              }
              .about-urbania-container {
                padding: 0 1rem;
              }
              .about-urbania-grid {
                grid-template-columns: 1fr;
                gap: 2.5rem;
              }
              .about-urbania-title {
                font-size: 2rem;
              }
              .about-urbania-description {
                font-size: 1rem;
              }
              .about-urbania-features {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1.25rem;
              }
              .about-urbania-stats-card {
                padding: 1.5rem;
              }
              .about-urbania-stat {
                padding: 1rem 0.75rem;
              }
            }
            @media (max-width: 600px) {
              .about-urbania-section {
                padding: 2.5rem 0;
              }
              .about-urbania-container {
                padding: 0 0.9rem;
              }
              .about-urbania-grid {
                gap: 2rem;
              }
              .about-urbania-badge {
                font-size: 0.75rem;
                padding: 0.25rem 1rem;
              }
              .about-urbania-title {
                font-size: 1.75rem;
                line-height: 1.25;
              }
              .about-urbania-description {
                font-size: 0.95rem;
                line-height: 1.7;
              }
              .about-urbania-features {
                grid-template-columns: 1fr;
                gap: 1.15rem;
              }
              .about-urbania-feature {
                gap: 0.7rem;
              }
              .about-urbania-feature-content h4 {
                font-size: 0.92rem;
              }
              .about-urbania-feature-content p {
                font-size: 0.82rem;
              }
              .about-urbania-actions {
                flex-direction: column;
                align-items: stretch;
                gap: 0.75rem;
              }
              .about-urbania-primary-btn,
              .about-urbania-secondary-btn {
                width: 100%;
                padding: 0.8rem 1.25rem;
              }
              .about-urbania-stats-card {
                padding: 1rem;
                border-radius: 20px;
              }
              .about-urbania-stats-grid {
                gap: 0.75rem;
                margin-bottom: 1rem;
              }
              .about-urbania-stat {
                padding: 0.9rem 0.5rem;
                border-radius: 13px;
              }
              .about-urbania-stat-number {
                font-size: 1.45rem;
              }
              .about-urbania-stat-label {
                font-size: 0.78rem;
              }
              .about-urbania-highlight {
                padding: 1.15rem;
                border-radius: 14px;
              }
              .about-urbania-highlight-icon {
                font-size: 2.2rem;
              }
              .about-urbania-highlight p {
                font-size: 0.84rem;
              }
            }
            @media (max-width: 400px) {
              .about-urbania-section {
                padding: 2rem 0;
              }
              .about-urbania-container {
                padding: 0 0.75rem;
              }
              .about-urbania-title {
                font-size: 1.55rem;
              }
              .about-urbania-description {
                font-size: 0.9rem;
              }
              .about-urbania-stats-card {
                padding: 0.75rem;
              }
              .about-urbania-stats-grid {
                gap: 0.6rem;
              }
              .about-urbania-stat {
                padding: 0.75rem 0.35rem;
              }
              .about-urbania-stat-number {
                font-size: 1.3rem;
              }
              .about-urbania-stat-label {
                font-size: 0.72rem;
              }
              .about-urbania-highlight {
                padding: 1rem;
              }
              .about-urbania-highlight h4 {
                font-size: 0.92rem;
              }
              .about-urbania-highlight p {
                font-size: 0.8rem;
              }
            }
            @media (max-width: 360px) {
              .about-urbania-container {
                padding: 0 0.65rem;
              }
              .about-urbania-title {
                font-size: 1.45rem;
              }
              .about-urbania-features {
                gap: 1rem;
              }
              .about-urbania-stat-number {
                font-size: 1.2rem;
              }
              .about-urbania-stat-label {
                font-size: 0.68rem;
              }
              .about-urbania-primary-btn,
              .about-urbania-secondary-btn {
                font-size: 0.88rem;
                padding: 0.75rem 1rem;
              }
            }
            @media (hover: none) {
              .about-urbania-primary-btn:hover,
              .about-urbania-secondary-btn:hover {
                transform: none;
                box-shadow: none;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .about-urbania-primary-btn,
              .about-urbania-secondary-btn {
                transition: none;
              }
            }
          `}</style>
        </section>

        {/* Urbania vs Tempo Traveller Comparison */}
        <WhyBookFromUs cityName={city.name} />

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

              {/* ✅ SEO FIX #5: Pricing H2 uses "Rent Per KM Rate" */}
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Urbania Rent Per km Rate in{" "}
                <span style={{ color: "#0052CC" }}>{city.name}</span>
              </h2>

              {/* ✅ SEO FIX #5: Price line above table */}
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                {fleet.length > 0
                  ? fleet
                      .map((m) => `${m.seater} seater ₹${m.ratePerKm}/km`)
                      .join(", ")
                  : "9 seater ₹30/km, 12 seater ₹31/km, 16 seater ₹32/km"}
                . Check estimated Urbania Tempo Traveller on rent rates for
                popular routes from {city.name}. Final fare may vary depending
                on travel dates, route, tolls, parking, taxes, and trip
                duration.
              </p>
            </div>

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
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Vehicle
                    </th>
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Rent Per km
                    </th>
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
                      Minimum km / Day
                    </th>
                    <th style={{ padding: "1rem 1.2rem", fontWeight: 600 }}>
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
                      <td style={{ padding: "1rem 1.2rem" }}>
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
                            style={{ color: "#7a8a9e", fontSize: "0.75rem" }}
                          >
                            {model.capacity} · {model.luggageCapacity}
                          </small>
                        </div>
                      </td>
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
                      <td
                        style={{
                          padding: "1rem 1.2rem",
                          color: "#4a5a6e",
                          fontWeight: 500,
                        }}
                      >
                        {model.minKmPerDay} km
                      </td>
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
                      <td
                        style={{ padding: "1rem 1.2rem", textAlign: "center" }}
                      >
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `I want to book ${model.name} on rent in ${city.name}. Please share the latest fare and availability.`,
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
              Contact us for the latest Urbania rent per km rate in {city.name}.
            </p>
          </div>
        </section>

        {/* ===== ROUTES SECTION ===== */}
        {nearbyRoutes.length > 0 && (
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
                {/* ✅ SEO FIX #13: Routes section with city-specific H2 */}
                <h2 className="section-title">
                  Urbania on Rent from {city.name} – Popular Routes
                </h2>
              </div>
              <div className="routes-grid">
                {nearbyRoutes.map((item) => (
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
                tour, Urbania Tempo Traveller on rent is perfect for every
                journey in {city.name}.
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
        <section className="how-booking-section">
          <div className="container how-booking-container">
            <div className="how-booking-header">
              <div className="how-booking-badge">
                <Calendar size={14} />
                <span>How Booking Works</span>
              </div>
              <h2>
                Book Your Urbania on Rent in {city.name} in 4 Simple Steps
              </h2>
              <p>
                Quick and hassle-free booking process for your Urbania Tempo
                Traveller on rent in {city.name}.
              </p>
            </div>

            <div className="booking-steps">
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
                <div className="step-card" key={index}>
                  <div className="step-number">{item.step}</div>
                  <div className="step-icon">{item.icon}</div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.desc}</p>
                  <div className="step-bottom-line" />
                  {index < 3 && (
                    <div className="step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            <div className="booking-cta">
              <div className="booking-cta-content">
                <p>Ready to book your Urbania on rent in {city.name}?</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappText,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-cta-btn"
                >
                  <MessageSquare size={20} />
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOCAL SERVICE AREA SECTION ===== */}
        <section
          className="section-padding"
          style={{ padding: "4rem 0", background: "#f0f4ff" }}
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
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#dde8ff",
                  color: "#0052CC",
                  padding: "0.3rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={16} /> Near Me
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  marginBottom: "1rem",
                }}
              >
                Urbania Rentals Across {city.name}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                <strong>Service Areas:</strong> We proudly serve all major
                neighborhoods including{" "}
                {(
                  city.serviceAreas || [
                    `${city.name} Center`,
                    `${city.name} Suburbs`,
                  ]
                ).join(", ")}
                .
                <br />
                <br />
                <strong>Pickup Points:</strong> Fast doorstep pickup available
                from {cityPickupPoints.join(", ")}.
              </p>
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
                Traveller on rent in {city.name}.
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
                      <div style={{ fontSize: "0.75rem", color: "#7a8a9e" }}>
                        {review.date} · {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALLERY SECTION ===== */}
        <section
          className="section-padding gallery-section"
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
                <Star size={14} /> Gallery
              </div>
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0b1a2e",
                }}
              >
                Force Urbania Gallery in {city.name}
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Explore the premium interiors and exteriors of our Force Urbania
                fleet available for rent in {city.name}.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  src: "/images/images/Force-Urbania-9-Seater.png",
                  alt: `Force Urbania 9 seater exterior parked at ${city.name} pickup point`,
                },
                {
                  src: "/images/images/Force-Urbania-12-Seater.png",
                  alt: `Force Urbania 12 seater side view available on rent in ${city.name}`,
                },
                {
                  src: "/images/images/Force-Urbania-16-Seater.png",
                  alt: `Force Urbania 16 seater group travel vehicle in ${city.name}`,
                },
                {
                  src: "/images/images/interior.png",
                  alt: `Pushback recliner seats inside Force Urbania rented in ${city.name}`,
                },
                {
                  src: "/images/images/hero.png",
                  alt: `Force Urbania fleet ready for outstation trips from ${city.name}`,
                },
                {
                  src: "/images/images/fleet.png",
                  alt: `Multiple Force Urbania vehicles for wedding and corporate travel in ${city.name}`,
                },
              ].map((img, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
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
                Common questions about Urbania Tempo Traveller on rent in{" "}
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
              {displayFaqs.map((faq, index) => (
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

        {/* ===== OTHER CITIES INTERLINKING SECTION ===== */}
        {allCities.length > 0 && (
          <section style={{ padding: "4rem 0", background: "#f0f4ff" }}>
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
                  margin: "0 auto 2.5rem",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#dde8ff",
                    color: "#0052CC",
                    padding: "0.3rem 1.2rem",
                    borderRadius: "40px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  <MapPin size={14} /> Other Cities
                </div>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#0b1a2e",
                    marginBottom: "0.6rem",
                    lineHeight: 1.25,
                  }}
                >
                  Urbania on Rent in Other Cities
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4a5a6e",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  We offer Force Urbania Tempo Traveller on rent across India.
                  Explore availability in cities near you.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "0.85rem",
                }}
              >
                {allCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.6rem",
                      padding: "0.85rem 1.1rem",
                      background: "#ffffff",
                      border: "1.5px solid #dde5f5",
                      borderRadius: "12px",
                      color: "#0b1a2e",
                      textDecoration: "none",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      transition: "all 0.22s ease",
                      boxShadow: "0 1px 4px rgba(0,30,80,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0052CC";
                      e.currentTarget.style.background = "#eef3ff";
                      e.currentTarget.style.color = "#0052CC";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,82,204,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#dde5f5";
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.color = "#0b1a2e";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 1px 4px rgba(0,30,80,0.05)";
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <MapPin
                        size={14}
                        color="#0052CC"
                        style={{ flexShrink: 0 }}
                      />
                      <span>
                        <span style={{ fontWeight: 600 }}>{c.name}</span>
                        {c.state && (
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.75rem",
                              color: "#7a8a9e",
                              fontWeight: 400,
                              marginTop: "0.05rem",
                            }}
                          >
                            {c.state}
                          </span>
                        )}
                      </span>
                    </span>
                    <ArrowRight
                      size={15}
                      color="#0052CC"
                      style={{ flexShrink: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
              Book your Urbania on rent today and experience luxury group travel
              in {city.name}.
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
      </main>
    </>
  );
}