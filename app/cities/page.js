import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CITY_HUBS } from "@/lib/routesData";

export const metadata = {
  title: "Urbania Tempo Traveller Cities | Hire Across India",
  description:
    "Explore city hubs for Force Urbania tempo traveller rentals, local sightseeing, and outstation group travel across India.",
};

export default function CitiesPage() {
  return (
    <main>
      <section
        style={{
          padding: "9rem 1.5rem 4rem",
          background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div
            className="badge-pill"
            style={{
              background: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff",
            }}
          >
            <MapPin size={14} /> City Hubs
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              marginBottom: "1rem",
            }}
          >
            Urbania Tempo Traveller Hire Across India
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Choose your pickup city for comfortable local sightseeing, family
            tours, and outstation group travel.
          </p>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ background: "var(--bg-light)" }}
      >
        <div className="container">
          <div className="section-header">
            <div className="badge-pill">
              <MapPin size={14} /> Pickup Locations
            </div>
            <h2 className="section-title">Choose Your City</h2>
            <p className="section-subtitle">
              View available Urbania variants, routes, and booking details for
              your city.
            </p>
          </div>

          <div
            className="city-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {CITY_HUBS.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="city-card-link group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.35rem 1.4rem",
                  background: "#fff",
                  border: "1.5px solid var(--border-light, #e5e7eb)",
                  borderRadius: "var(--radius-md, 12px)",
                  boxShadow: "var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.06))",
                  color: "var(--text-dark, #1a2634)",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span className="city-card-content">
                  <strong
                    className="city-card-title"
                    style={{
                      display: "block",
                      fontSize: "1.05rem",
                      marginBottom: "0.2rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {city.name}
                  </strong>
                  <small
                    className="city-card-tag"
                    style={{
                      color: "var(--text-muted, #6b7280)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {city.tag}
                  </small>
                </span>
                <ArrowRight
                  size={19}
                  color="#0052CC"
                  aria-hidden="true"
                  className="city-card-arrow"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
