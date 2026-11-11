"use client";

import { useState } from "react";
import FareCalculator from "@/components/FareCalculator";
import BookingModal from "@/components/BookingModal";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function UrbaniaFareCalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState({});

  const handleOpenModal = (data = {}) => {
    setPrefillData(data);
    setModalOpen(true);
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <div className="badge-pill">
              <span>Urbania Fare Calculator</span>
            </div>
            <h1 className="section-title">
              Calculate Your{" "}
              <span className="text-gradient-blue">Urbania Trip Fare</span>
            </h1>
            <p className="section-subtitle">
              Estimate your fare for Force Urbania bookings with transparent
              per-km pricing, driver allowance, and trip duration details.
            </p>
          </div>
        </div>
      </section>

      <FareCalculator onOpenModal={handleOpenModal} />

      <WhyChooseUs />

      {/* HOW FARE CALCULATOR WORKS */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0158D0]">
              Simple Fare Estimation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              How to Calculate Force Urbania Rental Fare?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-7">
              Use our Force Urbania fare calculator to estimate your group
              travel expenses. Enter your journey details to understand the
              estimated rental cost before confirming your booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                number: "01",
                title: "Enter Your Trip Details",
                description:
                  "Select your pickup location, destination, travel date and number of passengers.",
              },
              {
                number: "02",
                title: "Choose Your Urbania",
                description:
                  "Select a 9 seater, 12 seater or 16 seater Force Urbania according to your group size.",
              },
              {
                number: "03",
                title: "Calculate Your Fare",
                description:
                  "View the estimated trip cost based on distance, rental rate and applicable additional charges.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition"
              >
                <span className="text-4xl font-extrabold text-[#0158D0]/20">
                  {item.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTAL FARE INCLUSIONS */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0158D0]">
                Complete Fare Details
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                What Is Included in Force Urbania Rental Charges?
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                When booking a Force Urbania on rent, understanding the rental
                charges helps you plan your journey and avoid unexpected
                expenses. Your final quotation depends on the route, trip
                duration, vehicle capacity and travel requirements.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-7 mb-4">
                Rental Fare Considerations
              </h3>

              <ul className="space-y-4">
                {[
                  "Vehicle rental charges based on applicable per-kilometre rates.",
                  "Driver allowance according to the trip schedule.",
                  "Minimum running kilometres, if applicable.",
                  "Toll taxes and parking charges, wherever applicable.",
                  "State permits and other route-related charges, if required.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-gray-600 leading-7"
                  >
                    <span className="text-[#0158D0] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-gray-500 leading-6">
                Please confirm the applicable inclusions and exclusions with our
                booking team before your journey.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Factors That Affect Your Urbania Fare
              </h3>

              {[
                [
                  "Travel Distance",
                  "Total kilometres covered during the journey.",
                ],
                [
                  "Trip Duration",
                  "Number of travel days and applicable minimum running.",
                ],
                [
                  "Vehicle Capacity",
                  "9, 12 or 16 passenger seating configuration.",
                ],
                [
                  "Travel Route",
                  "Tolls, permits, parking and route conditions.",
                ],
              ].map(([title, description]) => (
                <div key={title} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-gray-900">{title}</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-6">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF URBANIA TRIPS */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0158D0]">
              Travel Your Way
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Force Urbania Rental for Every Journey
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-7">
              Hire a comfortable Force Urbania for family holidays, outstation
              journeys, corporate transportation and special occasions. Choose
              the right seating capacity for your trip.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Outstation Trips",
                description:
                  "Travel comfortably between cities with your family, friends or group.",
              },
              {
                title: "Family Vacations",
                description:
                  "Choose spacious Urbania vehicles for family holidays and sightseeing.",
              },
              {
                title: "Corporate Travel",
                description:
                  "Arrange group transportation for business meetings, events and company outings.",
              },
              {
                title: "Wedding & Events",
                description:
                  "Arrange convenient group transportation for weddings and special occasions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#0158D0] hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0158D0] text-2xl font-bold">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0158D0]">
              Easy Booking
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Book Your Force Urbania in Simple Steps
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
              Booking a Force Urbania for your next group journey is
              straightforward. Share your travel requirements and receive a
              quotation from our team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              [
                "Share Your Requirements",
                "Provide your pickup location, destination, travel date and passenger count.",
              ],
              [
                "Select Your Vehicle",
                "Choose the appropriate 9, 12 or 16 seater Urbania.",
              ],
              [
                "Get Your Fare Quotation",
                "Our team will confirm the applicable rental charges and availability.",
              ],
              [
                "Confirm Your Booking",
                "Review the quotation and complete your booking confirmation.",
              ],
            ].map(([title, description], index) => (
              <div key={title} className="flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#0158D0] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 mt-2 leading-7">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORCE URBANIA FAQ */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0158D0]">
              Got Questions?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Frequently Asked Questions About Force Urbania Rental
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Find answers to common questions about Urbania rental prices,
              seating capacity, booking and trip charges.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is the Force Urbania rental price per km?",
                answer:
                  "The illustrative rental rates on this page start at ₹30/km for a 9 seater, ₹31/km for a 12 seater and ₹32/km for a 16 seater. Actual rates and applicable trip charges should be confirmed before booking.",
              },
              {
                question:
                  "What seating capacities are available in Force Urbania?",
                answer:
                  "Force Urbania rental options can include 9 seater, 12 seater and 16 seater configurations. Vehicle availability depends on your selected travel date and requirements.",
              },
              {
                question:
                  "How is the total Force Urbania trip fare calculated?",
                answer:
                  "The estimated fare depends on the applicable per-kilometre rate, total distance, minimum running kilometres, driver allowance and additional charges such as tolls, parking and permits.",
              },
              {
                question: "Can I book a Force Urbania for an outstation trip?",
                answer:
                  "Yes, you can enquire about Force Urbania rental for outstation journeys, family vacations and intercity group travel. Share your pickup and drop locations to receive a quotation.",
              },
              {
                question: "Is a driver included with Force Urbania rental?",
                answer:
                  "Driver arrangements and applicable driver allowance should be confirmed in your booking quotation.",
              },
              {
                question: "Are tolls and parking included in the rental fare?",
                answer:
                  "Toll taxes, parking fees and applicable permits may be additional depending on your route and booking terms.",
              },
              {
                question: "How can I book a 9, 12 or 16 seater Urbania?",
                answer:
                  "Select your required seating capacity, enter your journey details in the fare calculator and contact our booking team to check vehicle availability and confirm your quotation.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-5 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  <h3 className="text-base md:text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <span className="text-[#0158D0] text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BOOKING CTA */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto bg-[#0158D0] rounded-3xl px-6 py-12 md:px-16 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Book Your Force Urbania?
          </h2>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto leading-7">
            Planning a family vacation, outstation journey or group trip?
            Calculate your estimated rental fare and contact our team for
            vehicle availability and booking details.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#urbania-pricing"
              className="bg-white text-[#0158D0] px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition"
            >
              View Rental Rates
            </a>

            <a
              href="https://wa.me/919417184683?text=Hello%2C%20I%20want%20to%20enquire%20about%20Force%20Urbania%20rental."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillData={prefillData}
      />
    </main>
  );
}
