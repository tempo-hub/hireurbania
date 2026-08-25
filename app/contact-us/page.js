import TrustPage, { ContactActions, TrustArticle } from '@/components/TrustPage';

export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <TrustPage
      eyebrow="Talk to our booking team"
      title="Contact Hire Urbania"
      intro="Tell us your route, dates, and group size. We will help you choose the right luxury tempo traveller."
    >
      <ContactActions />
      <TrustArticle title="Booking helpline">
        <p><strong>Phone:</strong> +91 84484 45504</p>
        <p><strong>Email:</strong> booking@hireurbaniatempotraveller.com</p>
        <p><strong>Service area:</strong> Delhi NCR, Noida, Gurugram, Uttarakhand, Rajasthan, Madhya Pradesh, Uttar Pradesh, and pan India routes.</p>
      </TrustArticle>
      <TrustArticle title="What to include in your enquiry">
        <ul>
          <li>Pickup city and destination</li>
          <li>Travel date and trip duration</li>
          <li>Number of passengers and preferred seater variant</li>
          <li>Any sightseeing stops, luggage, or accessibility requirements</li>
        </ul>
      </TrustArticle>
    </TrustPage>
  );
}
