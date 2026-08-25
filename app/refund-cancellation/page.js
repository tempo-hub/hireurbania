import TrustPage, { ContactActions, TrustArticle } from '@/components/TrustPage';

export const metadata = { title: 'Refund & Cancellation Policy' };

export default function RefundPage() {
  return (
    <TrustPage
      eyebrow="Booking changes"
      title="Refund & Cancellation"
      intro="We understand that travel plans can change. Contact the booking team as early as possible so we can review your options."
    >
      <TrustArticle title="Cancellation requests">
        <p>Cancellation requests must be sent to our booking team by phone, WhatsApp, or email. The applicable refund depends on how much notice we receive, supplier commitments, the travel date, and the terms stated in your confirmed quote.</p>
      </TrustArticle>
      <TrustArticle title="Rescheduling">
        <p>We will try to move your booking to a new date when the vehicle and driver are available. A revised fare or additional supplier cost may apply if the route, season, or vehicle changes.</p>
      </TrustArticle>
      <TrustArticle title="Refund processing">
        <p>Approved refunds are returned through the original payment method where possible. Processing time depends on the payment provider. Token advances and non-refundable supplier charges may be excluded when stated in the quote.</p>
      </TrustArticle>
      <ContactActions />
    </TrustPage>
  );
}
