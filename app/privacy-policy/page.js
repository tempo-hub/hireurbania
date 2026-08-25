import TrustPage, { TrustArticle } from '@/components/TrustPage';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <TrustPage
      eyebrow="Your information"
      title="Privacy Policy"
      intro="We use the information you share to prepare quotes, coordinate trips, and support your booking."
    >
      <TrustArticle title="Information we collect">
        <p>When you request a quote, we may collect your name, phone number, email address, pickup and destination details, travel dates, passenger count, and preferences.</p>
      </TrustArticle>
      <TrustArticle title="How we use it">
        <ul>
          <li>To respond to enquiries and provide an accurate vehicle quote.</li>
          <li>To coordinate drivers, pickup details, invoices, and trip support.</li>
          <li>To improve our routes, service quality, and website experience.</li>
        </ul>
      </TrustArticle>
      <TrustArticle title="Sharing and retention">
        <p>We share relevant trip details only with the people needed to fulfil your booking, such as our assigned driver or operations team. We retain booking information for operational, accounting, and legal requirements.</p>
      </TrustArticle>
      <TrustArticle title="Contact">
        <p>For privacy questions or a request about your information, email booking@hireurbaniatempotraveller.com or call +91 84484 45504.</p>
      </TrustArticle>
    </TrustPage>
  );
}
