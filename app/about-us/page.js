import TrustPage, { ContactActions, TrustArticle } from '@/components/TrustPage';

export const metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <TrustPage
      eyebrow="Travel with confidence"
      title="About Hire Urbania"
      intro="We make premium Force Urbania Tempo Traveller hire simple for family trips, business travel, pilgrimages, and group holidays."
    >
      <TrustArticle title="Our service">
        <p>Hire Urbania connects travellers with comfortable 9, 12, 16, 17, and 20 seater Force Urbania vehicles for local and outstation journeys. Our booking team helps plan the route, match the vehicle, and coordinate doorstep pickup.</p>
      </TrustArticle>
      <TrustArticle title="What matters to us">
        <ul>
          <li>Clear quotes before you confirm.</li>
          <li>Comfortable pushback seating and well-prepared vehicles.</li>
          <li>Experienced drivers who understand long-distance and hill routes.</li>
          <li>Responsive support before and during your trip.</li>
        </ul>
      </TrustArticle>
      <ContactActions />
    </TrustPage>
  );
}
