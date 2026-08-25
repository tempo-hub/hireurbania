import { SITEMAP_ROUTES, CITY_HUBS, FLEET_MODELS } from "@/lib/routesData";
import CityTemplate from "@/components/CityTemplate";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Road,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  Crown,
  Zap,
  HelpCircle,
  ChevronRight,
  Fuel,
  Luggage,
  Users,
  Star,
  Compass,
  Info,
  Calendar,
  Sparkles,
  Building,
  UserCheck,
} from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const routeParams = SITEMAP_ROUTES.map((r) => ({ slug: r.routeSlug }));
  const cityParams = CITY_HUBS.map((c) => ({ slug: c.slug }));
  return [...routeParams, ...cityParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = "https://hireurbaniatempotraveller.com";

  const route = SITEMAP_ROUTES.find((r) => r.routeSlug === slug);
  if (route) {
    const isJoshimath = slug === "delhi-to-joshimath-force-urbania";
    const title = isJoshimath
      ? `Force Urbania Delhi to Joshimath | Hire 9, 12, 16, 17 & 20 Seater Van`
      : `Force Urbania ${route.origin} to ${route.destination} | Hire Luxury Tempo Traveller`;

    const description = isJoshimath
      ? `Book Force Urbania from Delhi to Joshimath & Auli. 9-20 seater luxury recliners, air suspension & hill drivers. Fares start @ ₹26/km. Instant Quote!`
      : `Hire Force Urbania luxury van from ${route.origin} to ${route.destination}. Road distance ${route.distanceKm} KM, duration ${route.durationHrs}. Book 9, 12, 16, 17 & 20 seater variants with air suspension, pushback leather recliners & certified drivers.`;

    return {
      title,
      description,
      keywords: [
        `delhi to joshimath force urbania`,
        `force urbania ${route.origin} to ${route.destination}`,
        `force urbania for badrinath yatra from delhi`,
        `delhi to joshimath 17 seater urbania fare`,
        `hire 12 seater urbania delhi to auli`,
        `delhi to joshimath luxury tempo traveller rate per km`,
        `urbania booking for hemkund sahib valley of flowers`,
        `delhi to joshimath tempo traveller price`,
      ],
      alternates: {
        canonical: `${baseUrl}/${route.routeSlug}`,
      },
      openGraph: {
        title,
        description,
        url: `${baseUrl}/${route.routeSlug}`,
        siteName: "Hire Force Urbania Tempo Traveller",
        images: [
          {
            url: "/images/hero.png",
            width: 1200,
            height: 630,
            alt: `Force Urbania ${route.origin} to ${route.destination}`,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/hero.png"],
      },
    };
  }

  const city = CITY_HUBS.find((c) => c.slug === slug);
  if (city) {
    const title = `Urbania Tempo Traveller Hire in ${city.name} | 9, 12, 16, 17 & 20 Seater`;
    const description = `Urbania Tempo Traveller Hire in ${city.name}. Doorstep pickup, dual AC, 140° pushback leather recliners & experienced local drivers. Best per-km rates for outstation & sightseeing.`;
    return {
      title,
      description,
      keywords: [
        `urbania tempo traveller hire in ${city.name}`,
        `urbania tempo traveller ${city.name} mein kitne ka milta hai`,
        `17 seater urbania in ${city.name}`,
        `12 seater urbania in ${city.name}`,
        `force urbania rental ${city.name}`,
        `luxury tempo traveller ${city.name}`,
      ],
      alternates: {
        canonical: `${baseUrl}/${city.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${baseUrl}/${city.slug}`,
        siteName: "Hire Force Urbania Tempo Traveller",
        images: [
          {
            url: "/images/hero.png",
            width: 1200,
            height: 630,
            alt: `Force Urbania tempo traveller ${city.name} interior`,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/hero.png"],
      },
    };
  }

  return {
    title: "Force Urbania Luxury Rentals India",
  };
}

export default async function SitemapPage({ params }) {
  const { slug } = await params;
  const baseUrl = "https://hireurbaniatempotraveller.com";

  const route = SITEMAP_ROUTES.find((r) => r.routeSlug === slug);
  const city = CITY_HUBS.find((c) => c.slug === slug);

  if (!route && !city) {
    notFound();
  }

  // -------------------------------------------------------------
  // IF ROUTE PAGE (e.g. /delhi-to-joshimath-force-urbania)
  // -------------------------------------------------------------
  if (route) {
    const roundTripDistance = route.distanceKm * 2;
    const estPrice9 = Math.round(roundTripDistance * 26 + 600 * 3);
    const estPrice12 = Math.round(roundTripDistance * 29 + 600 * 3);
    const estPrice16 = Math.round(roundTripDistance * 33 + 700 * 3);
    const estPrice17 = Math.round(roundTripDistance * 35 + 700 * 3);
    const estPrice20 = Math.round(roundTripDistance * 38 + 800 * 3);

    // Related routes
    const relatedRoutes = SITEMAP_ROUTES.filter(
      (r) =>
        r.routeSlug !== route.routeSlug &&
        (r.origin === route.origin || r.category === route.category),
    ).slice(0, 6);

    // En-Route Distance Breakdown
    const itineraryStops = [
      {
        stop: `Delhi NCR to Haridwar`,
        dist: "220 KM",
        time: "4.5 Hrs",
        desc: "Via Delhi-Meerut Expressway. Breakfast halt at Khatauli highway food court.",
      },
      {
        stop: `Haridwar to Rishikesh`,
        dist: "25 KM",
        time: "45 Mins",
        desc: "Ganga river gateway and yoga capital transition point.",
      },
      {
        stop: `Rishikesh to Devprayag`,
        dist: "74 KM",
        time: "2.0 Hrs",
        desc: "Holy confluence of Bhagirathi and Alaknanda rivers forming Mother Ganga.",
      },
      {
        stop: `Devprayag to Srinagar Garhwal`,
        dist: "34 KM",
        time: "1.0 Hr",
        desc: "Major Garhwal educational & transit hub along Alaknanda riverbank.",
      },
      {
        stop: `Srinagar to Rudraprayag`,
        dist: "32 KM",
        time: "1.0 Hr",
        desc: "Sacred confluence of Mandakini (from Kedarnath) & Alaknanda rivers.",
      },
      {
        stop: `Rudraprayag to Karnaprayag`,
        dist: "33 KM",
        time: "1.0 Hr",
        desc: "Confluence of Pindar and Alaknanda rivers.",
      },
      {
        stop: `Karnaprayag to Joshimath`,
        dist: "82 KM",
        time: "2.5 Hrs",
        desc: "Final climb through Chamoli to Joshimath (Elevation: 6,150 ft).",
      },
    ];

    // Route FAQs
    const routeFaqs = [
      {
        q: `What is the Force Urbania fare from ${route.origin} to ${route.destination}?`,
        a: `The Force Urbania fare for ${route.origin} to ${route.destination} starts at ₹26/km for the 9-seater VIP variant, ₹29/km for the 12-seater, ₹33/km for the 16-seater, and ₹35/km for the 17-seater model. Estimated total round-trip fare for a 3-day trip starts at ₹${estPrice9.toLocaleString("en-IN")} plus toll and state entry taxes.`,
      },
      {
        q: `How long does it take to travel from ${route.origin} to ${route.destination} by road?`,
        a: `Driving from ${route.origin} to ${route.destination} takes approximately ${route.durationHrs} covering a road distance of ${route.distanceKm} KM via National Highway 58 (NH58) passing through Haridwar, Rishikesh, Devprayag, and Rudraprayag.`,
      },
      {
        q: `Why is Force Urbania better than a regular tempo traveller for ${route.destination}?`,
        a: `Force Urbania features rear air suspension and a monocoque body, which eliminates mountain body roll and motion sickness on steep Garhwal Himalayan bends. It also offers individual AC vents, 140-degree leather pushback recliners, and high standing headroom (6 ft 3 in).`,
      },
      {
        q: `Is Force Urbania safe for high altitude hill travel to Badrinath and Auli?`,
        a: `Yes, Force Urbania is powered by a high-torque 115 HP FM2.6CR Turbo Diesel engine (350 Nm torque) equipped with ABS, EBD, and hill-climb assist. All vehicles are driven by mountain-certified drivers with 10+ years of Himalayan experience.`,
      },
      {
        q: `Can we visit Auli and Badrinath Dham from Joshimath using Force Urbania?`,
        a: `Yes! Joshimath is the primary base town for Badrinath Dham (45 km away) and Auli Ropeway/Road (16 km away). Force Urbania easily navigates the mountain roads to Badrinath, Mana Village, and Auli.`,
      },
      {
        q: `How do I confirm my Force Urbania booking from ${route.origin} to ${route.destination}?`,
        a: `You can book instantly by calling +91 84484 45504 or clicking 'Book on WhatsApp'. Share your travel dates and passenger count to receive a guaranteed quote. A 20% advance token confirms your doorstep pickup booking.`,
      },
    ];

    // Schema.org Structured Data
    const routeSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Force Urbania Rental ${route.origin} to ${route.destination}`,
      serviceType: "Luxury Van Rental / Cab Service",
      provider: {
        "@type": "AutoRental",
        name: "Hire Force Urbania Tempo Traveller",
        url: baseUrl,
        telephone: "+918448445504",
        priceRange: "₹26 - ₹38 per km",
      },
      areaServed: [
        { "@type": "City", name: route.origin },
        { "@type": "City", name: route.destination },
      ],
      description: `Book Force Urbania luxury van from ${route.origin} to ${route.destination}. Distance ${route.distanceKm} KM, duration ${route.durationHrs}. Available in 9, 12, 16, 17, 20 seater pushback variants.`,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: estPrice9,
        highPrice: estPrice20,
        offerCount: 5,
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Outstation Routes",
          item: `${baseUrl}/#routes`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${route.origin} to ${route.destination} Force Urbania`,
          item: `${baseUrl}/${route.routeSlug}`,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: routeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Navbar />

        {/* Hero Banner Section */}
        <section
          className="section-padding"
          style={{
            paddingTop: "8.5rem",
            background: "linear-gradient(160deg, #0052CC 0%, #0770E3 100%)",
            color: "#FFF",
          }}
        >
          <div className="container">
            {/* Breadcrumb Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "1.25rem",
              }}
            >
              <Link href="/" style={{ color: "#FFF", textDecoration: "none" }}>
                Home
              </Link>
              <ChevronRight size={14} />
              <a
                href="/#routes"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                Outstation Routes
              </a>
              <ChevronRight size={14} />
              <span style={{ color: "#FFB800", fontWeight: "600" }}>
                {route.origin} to {route.destination}
              </span>
            </div>

            <div
              className="badge-pill"
              style={{
                background: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.3)",
                color: "#FFF",
              }}
            >
              <Star size={13} fill="#FFB800" color="#FFB800" /> #1 Rated Force
              Urbania Fleet for {route.destination}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "2.5rem",
                alignItems: "center",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "2.7rem",
                    marginBottom: "0.85rem",
                    color: "#FFF",
                    lineHeight: "1.15",
                  }}
                >
                  Force Urbania{" "}
                  <span style={{ color: "#FFB800" }}>
                    {route.origin} to {route.destination}
                  </span>{" "}
                  | Hire 9, 12, 16, 17 & 20 Seater
                </h1>

                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.92)",
                    fontSize: "1.05rem",
                    marginBottom: "1.75rem",
                    lineHeight: "1.7",
                  }}
                >
                  Book ultra-luxury Force Urbania for your road trip from{" "}
                  <strong>{route.origin}</strong> to{" "}
                  <strong>{route.destination}</strong>. Ideal for Badrinath Dham
                  yatra, Auli skiing, Hemkund Sahib, and family group travel
                  with air-suspension ride, 140° leather recliners &
                  mountain-certified drivers.
                </p>

                {/* Quick Metrics */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      padding: "0.75rem 1.15rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Road Distance
                    </div>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "800",
                        color: "#FFF",
                      }}
                    >
                      <Road
                        size={15}
                        style={{ display: "inline", marginRight: "4px" }}
                      />{" "}
                      {route.distanceKm} KM
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      padding: "0.75rem 1.15rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Est. Travel Time
                    </div>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "800",
                        color: "#FFF",
                      }}
                    >
                      <Clock
                        size={15}
                        style={{ display: "inline", marginRight: "4px" }}
                      />{" "}
                      {route.durationHrs}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      padding: "0.75rem 1.15rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Per KM Rate
                    </div>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "800",
                        color: "#FFB800",
                      }}
                    >
                      ₹26 / KM
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a
                    href={`https://wa.me/918448445504?text=Booking Query for Force Urbania ${route.origin} to ${route.destination}`}
                    target="_blank"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={18} /> Book {route.origin} to{" "}
                    {route.destination} on WhatsApp
                  </a>
                  <a
                    href="tel:+918448445504"
                    className="btn btn-outline"
                    style={{
                      color: "#FFF",
                      borderColor: "rgba(255,255,255,0.3)",
                    }}
                  >
                    <Phone size={18} /> Call +91 84484 45504
                  </a>
                </div>
              </div>

              {/* Right Booking Form */}
              <div className="quick-booking-card">
                <div className="card-header-title">
                  <Zap size={18} style={{ color: "var(--orange)" }} /> Instant
                  Fare Quote
                </div>
                <p className="card-header-sub">
                  Guaranteed lowest rate for {route.origin} to{" "}
                  {route.destination}
                </p>

                <form
                    action="https://wa.me/918448445504"
                  target="_blank"
                  method="GET"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                    }}
                  >
                    <div className="form-group">
                      <label className="form-label">
                        <MapPin size={14} /> Pickup Location
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={route.origin}
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <MapPin size={14} /> Destination
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={route.destination}
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Users size={14} /> Seater Variant
                      </label>
                      <select className="form-select" name="text">
                        <option
                          value={`Query for 12 Seater Force Urbania ${route.origin} to ${route.destination}`}
                        >
                          12 Seater Executive Urbania
                        </option>
                        <option
                          value={`Query for 9 Seater VIP Force Urbania ${route.origin} to ${route.destination}`}
                        >
                          9 Seater VIP Recliner Urbania
                        </option>
                        <option
                          value={`Query for 16 Seater Force Urbania ${route.origin} to ${route.destination}`}
                        >
                          16 Seater Super Luxury Urbania
                        </option>
                        <option
                          value={`Query for 17 Seater Force Urbania ${route.origin} to ${route.destination}`}
                        >
                          17 Seater Deluxe Urbania
                        </option>
                        <option
                          value={`Query for 20 Seater Maharaja Force Urbania ${route.origin} to ${route.destination}`}
                        >
                          20 Seater Maharaja Urbania
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "100%", marginTop: "0.4rem" }}
                    >
                      <MessageSquare size={16} /> Get WhatsApp Quote Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Route Overview Article */}
        <section
          className="section-padding"
          style={{ background: "var(--white)" }}
        >
          <div className="container">
            <div style={{ width: "100%" }}>
              <h2
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "1rem",
                  color: "var(--text-dark)",
                }}
              >
                {route.origin} to {route.destination} Force Urbania Travel
                Overview
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "var(--text-body)",
                  marginBottom: "1.25rem",
                }}
              >
                Planning a pilgrimage to <strong>Badrinath Dham</strong>,{" "}
                <strong>Hemkund Sahib</strong>, or a scenic vacation to{" "}
                <strong>Auli Ski Resort</strong> and{" "}
                <strong>Valley of Flowers</strong>? The{" "}
                <strong>{route.distanceKm} KM</strong> road journey from{" "}
                {route.origin} to {route.destination} via NH58 demands
                exceptional vehicular power and passenger comfort.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "var(--text-body)",
                  marginBottom: "2.5rem",
                }}
              >
                Force Urbania is purpose-built for the challenging Himalayan
                terrain. Featuring an aerodynamic monocoque chassis, a
                high-torque 115 HP FM2.6CR ED Turbo Diesel engine, independent
                front suspension, and rear air-dampers, it eliminates mountain
                body roll and motion sickness typical of conventional vehicles.
              </p>

              {/* Rate Matrix */}
              <h2
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "1.25rem",
                  color: "var(--text-dark)",
                }}
              >
                {route.origin} to {route.destination} Force Urbania Rate List &
                Estimated Fare
              </h2>
              <div
                style={{
                  background: "var(--bg-light)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  marginBottom: "3rem",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.88rem",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          background: "var(--blue-600)",
                          color: "#FFF",
                          textAlign: "left",
                        }}
                      >
                        <th style={{ padding: "0.75rem 1rem" }}>
                          Vehicle Variant
                        </th>
                        <th style={{ padding: "0.75rem 1rem" }}>
                          Seating Capacity
                        </th>
                        <th style={{ padding: "0.75rem 1rem" }}>Per KM Rate</th>
                        <th style={{ padding: "0.75rem 1rem" }}>
                          Min. Daily KM
                        </th>
                        <th style={{ padding: "0.75rem 1rem" }}>
                          Driver Allowance
                        </th>
                        <th style={{ padding: "0.75rem 1rem" }}>
                          Est. Round Trip (3 Days)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid var(--border-light)",
                        }}
                      >
                        <td
                          style={{ padding: "0.75rem 1rem", fontWeight: "600" }}
                        >
                          Force Urbania 9 Seater
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          9 Pax + Driver
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹26 / km</td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          250 KM / day
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹600 / day</td>
                        <td
                          style={{
                            padding: "0.75rem 1rem",
                            fontWeight: "700",
                            color: "var(--blue-600)",
                          }}
                        >
                          ₹{estPrice9.toLocaleString("en-IN")}
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid var(--border-light)",
                        }}
                      >
                        <td
                          style={{ padding: "0.75rem 1rem", fontWeight: "600" }}
                        >
                          Force Urbania 12 Seater
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          12 Pax + Driver
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹29 / km</td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          250 KM / day
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹600 / day</td>
                        <td
                          style={{
                            padding: "0.75rem 1rem",
                            fontWeight: "700",
                            color: "var(--blue-600)",
                          }}
                        >
                          ₹{estPrice12.toLocaleString("en-IN")}
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid var(--border-light)",
                        }}
                      >
                        <td
                          style={{ padding: "0.75rem 1rem", fontWeight: "600" }}
                        >
                          Force Urbania 16 Seater
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          16 Pax + Driver
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹33 / km</td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          250 KM / day
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹700 / day</td>
                        <td
                          style={{
                            padding: "0.75rem 1rem",
                            fontWeight: "700",
                            color: "var(--blue-600)",
                          }}
                        >
                          ₹{estPrice16.toLocaleString("en-IN")}
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid var(--border-light)",
                        }}
                      >
                        <td
                          style={{ padding: "0.75rem 1rem", fontWeight: "600" }}
                        >
                          Force Urbania 17 Seater
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          17 Pax + Driver
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹35 / km</td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          250 KM / day
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹700 / day</td>
                        <td
                          style={{
                            padding: "0.75rem 1rem",
                            fontWeight: "700",
                            color: "var(--blue-600)",
                          }}
                        >
                          ₹{estPrice17.toLocaleString("en-IN")}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ padding: "0.75rem 1rem", fontWeight: "600" }}
                        >
                          Force Urbania 20 Seater
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          20 Pax + Driver
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹38 / km</td>
                        <td style={{ padding: "0.75rem 1rem" }}>
                          300 KM / day
                        </td>
                        <td style={{ padding: "0.75rem 1rem" }}>₹800 / day</td>
                        <td
                          style={{
                            padding: "0.75rem 1rem",
                            fontWeight: "700",
                            color: "var(--blue-600)",
                          }}
                        >
                          ₹{estPrice20.toLocaleString("en-IN")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Segment Breakdown */}
              <h2
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "1.25rem",
                  color: "var(--text-dark)",
                }}
              >
                {route.origin} to {route.destination} En-Route Distance & Travel
                Breakdown
              </h2>
              <div
                style={{
                  background: "var(--bg-light)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  marginBottom: "3rem",
                }}
              >
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.88rem",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          background: "var(--bg-gray)",
                          color: "var(--text-dark)",
                          textAlign: "left",
                        }}
                      >
                        <th style={{ padding: "0.65rem 0.9rem" }}>
                          Route Segment
                        </th>
                        <th style={{ padding: "0.65rem 0.9rem" }}>Distance</th>
                        <th style={{ padding: "0.65rem 0.9rem" }}>
                          Driving Time
                        </th>
                        <th style={{ padding: "0.65rem 0.9rem" }}>
                          Segment Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {itineraryStops.map((stop, idx) => (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: "1px solid var(--border-light)",
                          }}
                        >
                          <td
                            style={{
                              padding: "0.65rem 0.9rem",
                              fontWeight: "600",
                            }}
                          >
                            {stop.stop}
                          </td>
                          <td style={{ padding: "0.65rem 0.9rem" }}>
                            {stop.dist}
                          </td>
                          <td style={{ padding: "0.65rem 0.9rem" }}>
                            {stop.time}
                          </td>
                          <td
                            style={{
                              padding: "0.65rem 0.9rem",
                              color: "var(--text-body)",
                            }}
                          >
                            {stop.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Seaters Showcase */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-light)" }}
        >
          <div className="container">
            <div className="section-header">
              <div className="badge-pill">
                <Crown size={14} /> Available Seater Variants
              </div>
              <h2 className="section-title">
                Force Urbania Options for{" "}
                <span className="text-gradient-blue">{route.destination}</span>
              </h2>
              <p className="section-subtitle">
                Choose the ideal seater variant based on your group size.
              </p>
            </div>

            <div className="fleet-grid">
              {FLEET_MODELS.map((model) => (
                <div key={model.id} className="fleet-card">
                  <div className="fleet-img-wrapper">
                    <img
                      src={model.image}
                      alt={`${model.name} for ${route.destination}`}
                      className="fleet-img"
                    />
                    <span className="fleet-badge">{model.capacity}</span>
                  </div>
                  <div className="fleet-body">
                    <h3 className="fleet-title">{model.name}</h3>
                    <p className="fleet-tagline">{model.tagline}</p>
                    <ul
                      className="pkg-highlights-list"
                      style={{ marginBottom: "1rem" }}
                    >
                      {model.features.slice(0, 3).map((f, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="fleet-footer">
                      <div className="fleet-rate">
                        <span className="rate-amount">
                          ₹{model.ratePerKm}/km
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/918448445504?text=Booking Query for ${model.name} on ${route.origin} to ${route.destination}`}
                        target="_blank"
                        className="btn btn-primary btn-sm"
                      >
                        Instant Book
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section
          className="section-padding"
          style={{ background: "var(--white)" }}
        >
          <div className="container">
            <div className="section-header">
              <div className="badge-pill">
                <HelpCircle size={14} /> Route Q&A
              </div>
              <h2 className="section-title">
                Frequently Asked{" "}
                <span className="text-gradient-blue">Questions</span>
              </h2>
              <p className="section-subtitle">
                Common queries regarding fares, travel duration, and vehicle
                amenities for {route.origin} to {route.destination}.
              </p>
            </div>

            <div className="faq-list">
              {routeFaqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <div className="faq-question">
                    <span>{faq.q}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Related Outstation Routes */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-light)" }}
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Related Outstation Routes from{" "}
                <span className="text-gradient-blue">{route.origin}</span>
              </h2>
              <p className="section-subtitle">
                Explore more popular destinations connected to {route.origin}.
              </p>
            </div>

            <div className="routes-grid">
              {relatedRoutes.map((r) => (
                <div key={r.routeSlug} className="route-card">
                  <div>
                    <div className="route-header">
                      <span className="route-origin-badge">
                        <MapPin size={12} /> From {r.origin}
                      </span>
                      <span
                        className="badge-pill"
                        style={{
                          fontSize: "0.68rem",
                          padding: "0.2rem 0.55rem",
                          margin: 0,
                        }}
                      >
                        {r.category}
                      </span>
                    </div>
                    <h3 className="route-dest">
                      {r.origin} to {r.destination}
                    </h3>
                    <div className="route-meta">
                      <span>
                        <Road size={14} /> {r.distanceKm} KM
                      </span>
                      <span>
                        <Clock size={14} /> {r.durationHrs}
                      </span>
                    </div>
                  </div>

                  <div className="route-footer">
                    <span className="route-est-price">
                      Est. ₹
                      {Math.round(r.distanceKm * 2 * 29 + 600).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                    <Link
                      href={`/${r.routeSlug}`}
                      className="btn btn-primary btn-sm"
                    >
                      View Route
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Box */}
        <section
          className="section-padding"
          style={{
            background: "linear-gradient(160deg, #0052CC 0%, #0770E3 100%)",
            color: "#FFF",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "2.2rem",
                marginBottom: "0.85rem",
                color: "#FFF",
              }}
            >
              Ready to Experience First-Class Travel to {route.destination}?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "2rem",
              }}
            >
              Book your 9, 12, 16, 17, or 20 Seater Force Urbania with certified
              mountain chauffeurs and 100% doorstep pickup across Delhi NCR.
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
                href={`https://wa.me/918448445504?text=Booking Query for Force Urbania ${route.origin} to ${route.destination}`}
                target="_blank"
                className="btn btn-whatsapp"
                style={{ fontSize: "1rem", padding: "0.85rem 1.8rem" }}
              >
                <MessageSquare size={18} /> Reserve Your Urbania Now — Zero
                Hidden Charges
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  const matchedCityRoutes = SITEMAP_ROUTES.filter(
    (r) => r.origin.toLowerCase() === city.name.toLowerCase(),
  );

  return (
    <CityTemplate
      city={city}
      routes={matchedCityRoutes}
      fleet={FLEET_MODELS}
    />
  );
}
