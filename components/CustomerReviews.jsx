"use client";

import { Rating, RatingStar } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Calendar, Tag } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GLOBAL_REVIEWS } from "@/lib/reviewsData";

// ─── HELPERS ────────────────────────────────────────────────────────────────

/** Turn a rating (1-5) into a coloured badge like MMT */
function RatingBadge({ rating }) {
  const bg =
    rating >= 4.5
      ? "#1a7f37"
      : rating >= 4
        ? "#2d8a4e"
        : rating >= 3
          ? "#e8a000"
          : "#c0392b";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "3px",
        background: bg,
        color: "#fff",
        borderRadius: "6px",
        padding: "2px 8px",
        fontWeight: 700,
        fontSize: "0.82rem",
        letterSpacing: "0.3px",
      }}
    >
      {rating.toFixed(1)} <span style={{ fontSize: "0.75rem" }}>★</span>
    </span>
  );
}

/** Single review card */
function ReviewCard({ review }) {
  return (
    <article
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #e8edf4",
        padding: "1.25rem",
        boxShadow: "0 2px 12px rgba(0,20,60,0.06)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "default",
      }}
      className="review-card"
    >
      {/* Top row: avatar + name + badge */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
          marginBottom: "0.9rem",
        }}
      >
        {/* Avatar circle with initials */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1rem",
            userSelect: "none",
          }}
        >
          {review.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#0b1a2e",
                whiteSpace: "nowrap",
              }}
            >
              {review.name}
            </span>
            <RatingBadge rating={review.rating} />
          </div>

          {/* Star row */}
          <Rating size="sm" className="mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <RatingStar key={i} filled={i < review.rating} />
            ))}
          </Rating>
        </div>
      </div>

      {/* Review text */}
      <p
        style={{
          flex: 1,
          color: "#3d4f62",
          fontSize: "0.9rem",
          lineHeight: "1.65",
          margin: "0 0 1rem",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        title={review.comment}
      >
        "{review.comment}"
      </p>

      {/* Footer meta */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "0.75rem",
          borderTop: "1px solid #f0f4fb",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {review.location && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "0.76rem",
              color: "#6b7a8d",
            }}
          >
            <MapPin size={11} color="#0052CC" />
            {review.location}
          </span>
        )}

        {review.route && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.76rem",
              color: "#6b7a8d",
            }}
          >
            <MapPin size={12} color="#0052CC" />
            {review.route}
          </span>
        )}

        {review.tripType && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "0.74rem",
              background: "#eef3ff",
              color: "#0052CC",
              borderRadius: "20px",
              padding: "1px 8px",
              fontWeight: 600,
            }}
          >
            <Tag size={10} />
            {review.tripType}
          </span>
        )}

        {review.date && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "0.76rem",
              color: "#6b7a8d",
              marginLeft: "auto",
            }}
          >
            <Calendar size={11} />
            {review.date}
          </span>
        )}
      </div>
    </article>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

/**
 * CustomerReviews
 *
 * Props:
 *   reviews   – Array of review objects. Falls back to GLOBAL_REVIEWS if not provided.
 *   heading   – Section heading (optional)
 *   subheading – Section sub-heading (optional)
 *   cityName  – Used to personalise the heading when no custom heading is provided.
 */
export default function CustomerReviews({
  reviews,
  heading,
  subheading,
  cityName,
}) {
  const displayReviews =
    Array.isArray(reviews) && reviews.length > 0 ? reviews : GLOBAL_REVIEWS;

  const averageRating = (
    displayReviews.reduce((sum, r) => sum + r.rating, 0) / displayReviews.length
  ).toFixed(1);

  const defaultHeading = cityName
    ? `Customer Reviews — ${cityName}`
    : "Customer Reviews";

  const defaultSubheading = cityName
    ? `Real experiences shared by travellers who hired Force Urbania in ${cityName}`
    : "Real experiences shared by our travellers across India";

  return (
    <section className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-8 text-center">
          {/* Aggregate score row — like MMT */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#fff",
              border: "1px solid #e0e8f5",
              borderRadius: "40px",
              padding: "0.3rem 1rem",
              marginBottom: "0.9rem",
              boxShadow: "0 2px 8px rgba(0,20,60,0.06)",
            }}
          >
            <span
              style={{
                background: "#1a7f37",
                color: "#fff",
                borderRadius: "6px",
                padding: "2px 8px",
                fontWeight: 700,
                fontSize: "0.88rem",
              }}
            >
              {averageRating} ★
            </span>
            <span style={{ fontSize: "0.85rem", color: "#4a5a6e" }}>
              {displayReviews.length}+ verified reviews
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            {heading || defaultHeading}
          </h2>

          <p className="mt-3 text-gray-600">
            {subheading || defaultSubheading}
          </p>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={displayReviews.length > 1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="customer-reviews-swiper !pb-12"
        >
          {displayReviews.map((review) => (
            <SwiperSlide key={review.id} className="!h-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hover lift effect */}
      <style jsx>{`
        .review-card:hover {
          box-shadow: 0 8px 28px rgba(0, 20, 60, 0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
