"use client";

import { Rating, RatingStar } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rahul S.",
    rating: 5,
    comment:
      "Our group trip was comfortable, and the booking process was smooth.",
  },
  {
    id: 2,
    name: "Priya M.",
    rating: 4,
    comment:
      "The vehicle was comfortable, and the driver was helpful throughout our journey.",
  },
  {
    id: 3,
    name: "Amit K.",
    rating: 5,
    comment:
      "A convenient option for travelling with family and friends. We had a pleasant experience.",
  },
  {
    id: 4,
    name: "Neha Sharma",
    rating: 5,
    comment:
      "The Tempo Traveller was spacious and clean. It was a comfortable choice for our family trip.",
  },
  {
    id: 5,
    name: "Vikash Kumar",
    rating: 5,
    comment:
      "Booking was straightforward, and the vehicle met our group's travel needs.",
  },
  {
    id: 6,
    name: "Anjali M.",
    rating: 4,
    comment:
      "We enjoyed travelling together. The ride was comfortable and suitable for our group outing.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>

          <p className="mt-3 text-gray-600">
            Feedback about our travel services
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={reviews.length > 1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="customer-reviews-swiper !pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!h-auto">
              <article className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <Rating>
                  {Array.from({ length: 5 }, (_, index) => (
                    <RatingStar key={index} filled={index < review.rating} />
                  ))}
                </Rating>

                <h3 className="mt-4 font-semibold text-gray-900">
                  {review.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{review.comment}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
