import TrustPage, { TrustArticle } from '@/components/TrustPage';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <TrustPage
      eyebrow="Booking terms"
      title="Terms & Conditions"
      intro="Please review these booking terms before reserving a Hire Urbania Tempo Traveller."
    >
      <TrustArticle title="1. Booking and confirmation">
        <p>A booking is confirmed after our team shares the final quote and receives the agreed token advance. Vehicle availability is subject to confirmation at the time of payment.</p>
      </TrustArticle>
      <TrustArticle title="2. Pricing and itinerary">
        <p>Quotes are based on the route, vehicle variant, travel dates, trip duration, and passenger count. Tolls, parking, state taxes, permits, and extra halts are included only when stated in the confirmed quote.</p>
      </TrustArticle>
      <TrustArticle title="3. Passenger responsibilities">
        <ul>
          <li>Provide accurate pickup, drop-off, date, and passenger details.</li>
          <li>Carry valid identification and any permits required for the journey.</li>
          <li>Keep the vehicle clean and follow the driver's safety instructions.</li>
        </ul>
      </TrustArticle>
      <TrustArticle title="4. Changes and delays">
        <p>Weather, traffic, road closures, permits, and other conditions can affect travel time. We will communicate material changes and work with you on a practical alternative where possible.</p>
      </TrustArticle>
    </TrustPage>
  );
}
