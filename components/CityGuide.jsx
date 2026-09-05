"use client";

import React, { useState } from "react";
import {
  MapPin,
  Utensils,
  Calendar,
  Lightbulb,
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
      {/* ================================
          SECTION HEADER
      ================================= */}

      <div className="city-guide-header">
        <div className="city-guide-badge">
          <Landmark size={14} />
          <span>City Guide</span>
        </div>

        <h2 className="city-guide-title">
          Discover{" "}
          <span>{route?.destination}</span>
        </h2>

        <p className="city-guide-description">
          {cityData.overview}
        </p>
      </div>

      {/* ================================
          MAIN GUIDE CARD
      ================================= */}

      <div className="city-guide-card">
        {/* ================================
            OVERVIEW
        ================================= */}

        <div className="city-guide-overview">
          <h3 className="city-guide-subtitle">
            <Sparkles size={18} color="#0052CC" />
            <span>About {route?.destination}</span>
          </h3>

          <p className="city-guide-overview-text">
            {cityData.detailedDescription}
          </p>
        </div>

        {/* ================================
            TOP ATTRACTIONS
        ================================= */}

        {cityData.topAttractions &&
          cityData.topAttractions.length > 0 && (
            <div className="city-guide-section-block">
              <button
                type="button"
                onClick={() => toggleSection("attractions")}
                className="city-guide-accordion"
                aria-expanded={expandedSections.attractions}
              >
                <span className="city-guide-accordion-title">
                  <Landmark size={18} color="#0052CC" />
                  <span>Top Attractions</span>
                </span>

                {expandedSections.attractions ? (
                  <ChevronUp size={20} color="#7a8a9e" />
                ) : (
                  <ChevronDown size={20} color="#7a8a9e" />
                )}
              </button>

              {expandedSections.attractions && (
                <div className="city-attractions-grid">
                  {cityData.topAttractions
                    .slice(0, 8)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="city-attraction-item"
                      >
                        <span className="city-attraction-bullet">
                          •
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

        {/* ================================
            LOCAL FOOD
        ================================= */}

        {cityData.localFood &&
          cityData.localFood.length > 0 && (
            <div className="city-guide-section-block">
              <button
                type="button"
                onClick={() => toggleSection("food")}
                className="city-guide-accordion"
                aria-expanded={expandedSections.food}
              >
                <span className="city-guide-accordion-title">
                  <Utensils size={18} color="#FF6B35" />
                  <span>Local Food</span>
                </span>

                {expandedSections.food ? (
                  <ChevronUp size={20} color="#7a8a9e" />
                ) : (
                  <ChevronDown size={20} color="#7a8a9e" />
                )}
              </button>

              {expandedSections.food && (
                <div className="city-food-list">
                  {cityData.localFood.map((food, index) => (
                    <span
                      key={index}
                      className="city-food-tag"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

        {/* ================================
            BEST TIME TO VISIT
        ================================= */}

        {cityData.bestTimeToVisit && (
          <div className="city-guide-section-block">
            <h3 className="city-guide-subtitle city-best-time-title">
              <Calendar size={18} color="#0891b2" />
              <span>Best Time to Visit</span>
            </h3>

            <p className="city-best-time-text">
              {cityData.bestTimeToVisit}
            </p>
          </div>
        )}

        {/* ================================
            TRAVEL TIPS
        ================================= */}

        {cityData.travelTips &&
          cityData.travelTips.length > 0 && (
            <div className="city-guide-tips-section">
              <button
                type="button"
                onClick={() => toggleSection("tips")}
                className="city-guide-accordion"
                aria-expanded={expandedSections.tips}
              >
                <span className="city-guide-accordion-title">
                  <Lightbulb size={18} color="#F59E0B" />
                  <span>Travel Tips</span>
                </span>

                {expandedSections.tips ? (
                  <ChevronUp size={20} color="#7a8a9e" />
                ) : (
                  <ChevronDown size={20} color="#7a8a9e" />
                )}
              </button>

              {expandedSections.tips && (
                <ul className="city-travel-tips">
                  {cityData.travelTips.map((tip, index) => (
                    <li
                      key={index}
                      className="city-travel-tip"
                    >
                      <span className="city-tip-check">
                        ✓
                      </span>

                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
      </div>

      {/* ================================
          RESPONSIVE STYLES
      ================================= */}

      <style jsx>{`
        /* =================================
           BASE
        ================================= */

        .city-guide-wrapper {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* =================================
           HEADER
        ================================= */

        .city-guide-header {
          width: 100%;
          max-width: 780px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .city-guide-badge {
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

        .city-guide-title {
          margin: 0.7rem 0 0.75rem;
          color: #0b1a2e;
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 700;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }

        .city-guide-title span {
          color: #0052cc;
        }

        .city-guide-description {
          margin: 0;
          color: #4a5a6e;
          font-size: 1rem;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        /* =================================
           MAIN CARD
        ================================= */

        .city-guide-card {
          width: 100%;
          max-width: 100%;
          background: #ffffff;
          border: 1px solid #ecf0f7;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(0, 20, 50, 0.04);
          box-sizing: border-box;
        }

        /* =================================
           OVERVIEW
        ================================= */

        .city-guide-overview {
          width: 100%;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f0f4fe;
          border-radius: 16px;
          box-sizing: border-box;
        }

        .city-guide-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 0 0.5rem;
          color: #0b1a2e;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .city-guide-subtitle span {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .city-guide-overview-text {
          margin: 0;
          color: #4a5a6e;
          font-size: 0.95rem;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        /* =================================
           SECTION BLOCKS
        ================================= */

        .city-guide-section-block {
          width: 100%;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ecf0f7;
          box-sizing: border-box;
        }

        .city-guide-tips-section {
          width: 100%;
        }

        /* =================================
           ACCORDION
        ================================= */

        .city-guide-accordion {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.3rem 0;
          margin: 0;
          border: none;
          background: transparent;
          color: #0b1a2e;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .city-guide-accordion-title {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #0b1a2e;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .city-guide-accordion-title span {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        /* =================================
           ATTRACTIONS
        ================================= */

        .city-attractions-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .city-attraction-item {
          min-width: 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background: #f9fafc;
          border-radius: 10px;
          color: #1a2634;
          font-size: 0.9rem;
          line-height: 1.45;
          box-sizing: border-box;
          overflow-wrap: anywhere;
        }

        .city-attraction-bullet {
          flex: 0 0 auto;
          color: #0052cc;
          font-weight: 700;
        }

        /* =================================
           LOCAL FOOD
        ================================= */

        .city-food-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
          margin-top: 1rem;
        }

        .city-food-tag {
          max-width: 100%;
          background: #fff3e8;
          color: #b33d00;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          line-height: 1.4;
          overflow-wrap: anywhere;
          box-sizing: border-box;
        }

        /* =================================
           BEST TIME
        ================================= */

        .city-best-time-title {
          margin-bottom: 0.5rem;
        }

        .city-best-time-text {
          margin: 0;
          padding-left: 2rem;
          color: #4a5a6e;
          font-size: 0.95rem;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        /* =================================
           TRAVEL TIPS
        ================================= */

        .city-travel-tips {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          margin: 1rem 0 0;
          padding: 0;
        }

        .city-travel-tip {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background: #f0fdf4;
          border-radius: 10px;
          color: #1a2634;
          font-size: 0.9rem;
          line-height: 1.5;
          box-sizing: border-box;
          overflow-wrap: anywhere;
        }

        .city-tip-check {
          flex: 0 0 auto;
          color: #10b981;
          font-weight: 700;
        }

        /* =================================
           LARGE TABLET
        ================================= */

        @media (max-width: 1199px) {
          .city-guide-card {
            padding: 1.75rem;
          }

          .city-attractions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =================================
           TABLET
        ================================= */

        @media (max-width: 768px) {
          .city-guide-header {
            margin-bottom: 2rem;
          }

          .city-guide-title {
            font-size: clamp(1.6rem, 5vw, 2rem);
            line-height: 1.3;
          }

          .city-guide-description {
            font-size: 0.92rem;
            line-height: 1.65;
          }

          .city-guide-card {
            padding: 1.25rem;
            border-radius: 18px;
          }

          .city-guide-overview {
            padding: 1.25rem;
            margin-bottom: 1.5rem;
            border-radius: 14px;
          }

          .city-guide-subtitle,
          .city-guide-accordion-title {
            font-size: 1rem;
          }

          .city-guide-overview-text {
            font-size: 0.9rem;
          }

          .city-attractions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.65rem;
          }

          .city-attraction-item {
            font-size: 0.85rem;
            padding: 0.6rem 0.7rem;
          }

          .city-food-list {
            gap: 0.5rem;
          }

          .city-food-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.85rem;
          }

          .city-best-time-text {
            padding-left: 1.75rem;
            font-size: 0.9rem;
          }

          .city-travel-tip {
            font-size: 0.85rem;
          }
        }

        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 480px) {
          .city-guide-header {
            margin-bottom: 1.5rem;
          }

          .city-guide-badge {
            padding: 0.3rem 0.9rem;
            font-size: 0.75rem;
          }

          .city-guide-title {
            margin-top: 0.65rem;
            font-size: 1.5rem;
            line-height: 1.3;
          }

          .city-guide-description {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .city-guide-card {
            padding: 1rem;
            border-radius: 16px;
          }

          .city-guide-overview {
            padding: 1rem;
            margin-bottom: 1.25rem;
            border-radius: 12px;
          }

          .city-guide-subtitle,
          .city-guide-accordion-title {
            font-size: 0.92rem;
          }

          .city-guide-overview-text {
            font-size: 0.82rem;
            line-height: 1.65;
          }

          .city-guide-section-block {
            margin-bottom: 1.25rem;
            padding-bottom: 1.25rem;
          }

          .city-guide-accordion {
            min-height: 40px;
          }

          .city-attractions-grid {
            grid-template-columns: 1fr;
            gap: 0.6rem;
            margin-top: 0.85rem;
          }

          .city-attraction-item {
            font-size: 0.8rem;
            padding: 0.65rem 0.7rem;
          }

          .city-food-list {
            gap: 0.45rem;
            margin-top: 0.85rem;
          }

          .city-food-tag {
            max-width: 100%;
            padding: 0.4rem 0.75rem;
            font-size: 0.76rem;
          }

          .city-best-time-text {
            padding-left: 0;
            margin-top: 0.65rem;
            font-size: 0.82rem;
            line-height: 1.65;
          }

          .city-travel-tips {
            margin-top: 0.85rem;
            gap: 0.45rem;
          }

          .city-travel-tip {
            padding: 0.65rem 0.7rem;
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }

        /* =================================
           VERY SMALL MOBILE
        ================================= */

        @media (max-width: 359px) {
          .city-guide-badge {
            padding: 0.28rem 0.75rem;
            font-size: 0.7rem;
          }

          .city-guide-title {
            font-size: 1.35rem;
          }

          .city-guide-description {
            font-size: 0.78rem;
          }

          .city-guide-card {
            padding: 0.8rem;
            border-radius: 14px;
          }

          .city-guide-overview {
            padding: 0.85rem;
          }

          .city-guide-subtitle,
          .city-guide-accordion-title {
            font-size: 0.88rem;
          }

          .city-guide-overview-text {
            font-size: 0.77rem;
          }

          .city-attraction-item {
            font-size: 0.76rem;
            padding: 0.6rem;
          }

          .city-food-tag {
            font-size: 0.72rem;
            padding: 0.35rem 0.65rem;
          }

          .city-best-time-text {
            font-size: 0.76rem;
          }

          .city-travel-tip {
            font-size: 0.74rem;
            padding: 0.6rem;
          }
        }

        /* =================================
           TOUCH DEVICES
        ================================= */

        @media (hover: none) {
          .city-guide-accordion {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* =================================
           REDUCED MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {
          .city-guide-wrapper * {
            scroll-behavior: auto;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
