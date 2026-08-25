// components/CityGuide.jsx
"use client";

import React, { useState } from "react";
import {
  MapPin,
  Utensils,
  Calendar,
  Lightbulb,
  Star,
  Landmark,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

export default function CityGuide({ cityData, route }) {
  const [expandedSections, setExpandedSections] = useState({
    attractions: true,
    food: true,
    tips: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!cityData) return null;

  return (
    <div className="city-guide-wrapper">
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
          <Landmark size={14} />
          City Guide
        </div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
            fontWeight: 700,
            margin: "0.7rem 0 0.75rem",
            color: "#0b1a2e",
          }}
        >
          Discover <span style={{ color: "#0052CC" }}>{route?.destination}</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#4a5a6e",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          {cityData.overview}
        </p>
      </div>

      {/* Main Guide Content */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "2rem",
          border: "1px solid #ecf0f7",
          boxShadow: "0 8px 24px rgba(0,20,50,0.04)",
        }}
      >
        {/* Overview Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            background: "#f0f4fe",
            borderRadius: "16px",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#0b1a2e",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Sparkles size={18} color="#0052CC" />
            About {route?.destination}
          </h3>
          <p
            style={{
              color: "#4a5a6e",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            {cityData.detailedDescription}
          </p>
        </div>

        {/* Top Attractions */}
        {cityData.topAttractions && cityData.topAttractions.length > 0 && (
          <div
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ecf0f7",
              paddingBottom: "1.5rem",
            }}
          >
            <button
              onClick={() => toggleSection("attractions")}
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
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  margin: 0,
                }}
              >
                <Landmark size={18} color="#0052CC" />
                Top Attractions
              </h3>
              {expandedSections.attractions ? (
                <ChevronUp size={20} color="#7a8a9e" />
              ) : (
                <ChevronDown size={20} color="#7a8a9e" />
              )}
            </button>

            {expandedSections.attractions && (
              <div
                style={{
                  marginTop: "1rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {cityData.topAttractions.slice(0, 8).map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      padding: "0.5rem",
                      background: "#f9fafc",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      color: "#1a2634",
                      lineHeight: "1.4",
                    }}
                  >
                    <span style={{ color: "#0052CC", flexShrink: 0 }}>•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Local Food */}
        {cityData.localFood && cityData.localFood.length > 0 && (
          <div
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ecf0f7",
              paddingBottom: "1.5rem",
            }}
          >
            <button
              onClick={() => toggleSection("food")}
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
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  margin: 0,
                }}
              >
                <Utensils size={18} color="#FF6B35" />
                Local Food
              </h3>
              {expandedSections.food ? (
                <ChevronUp size={20} color="#7a8a9e" />
              ) : (
                <ChevronDown size={20} color="#7a8a9e" />
              )}
            </button>

            {expandedSections.food && (
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                {cityData.localFood.map((food, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#fff3e8",
                      color: "#b33d00",
                      padding: "0.4rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {food}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Best Time to Visit */}
        {cityData.bestTimeToVisit && (
          <div
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ecf0f7",
              paddingBottom: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#0b1a2e",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Calendar size={18} color="#0891b2" />
              Best Time to Visit
            </h3>
            <p
              style={{
                color: "#4a5a6e",
                fontSize: "0.95rem",
                margin: 0,
                paddingLeft: "2rem",
              }}
            >
              {cityData.bestTimeToVisit}
            </p>
          </div>
        )}

        {/* Travel Tips */}
        {cityData.travelTips && cityData.travelTips.length > 0 && (
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
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0b1a2e",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  margin: 0,
                }}
              >
                <Lightbulb size={18} color="#F59E0B" />
                Travel Tips
              </h3>
              {expandedSections.tips ? (
                <ChevronUp size={20} color="#7a8a9e" />
              ) : (
                <ChevronDown size={20} color="#7a8a9e" />
              )}
            </button>

            {expandedSections.tips && (
              <ul
                style={{
                  marginTop: "1rem",
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {cityData.travelTips.map((tip, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      background: "#f0fdf4",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      color: "#1a2634",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .city-guide-wrapper {
            padding: 0;
          }

          .city-guide-wrapper [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }

          .city-guide-wrapper [style*="padding: 2rem"] {
            padding: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .city-guide-wrapper h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}