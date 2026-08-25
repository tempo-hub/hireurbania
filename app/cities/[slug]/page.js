import { notFound } from 'next/navigation';
import CityTemplate from '@/components/CityTemplate';
import { CITY_HUBS, FLEET_MODELS, SITEMAP_ROUTES } from '@/lib/routesData';

export function generateStaticParams() {
  return CITY_HUBS.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = CITY_HUBS.find((item) => item.slug === slug);
  if (!city) return { title: 'City Not Found | Hire Urbania' };
  return {
    title: `Urbania Tempo Traveller Hire in ${city.name}`,
    description: `Book a luxury Force Urbania tempo traveller in ${city.name} for local sightseeing and outstation trips.`
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = CITY_HUBS.find((item) => item.slug === slug);
  if (!city) notFound();

  const routes = SITEMAP_ROUTES.filter((route) =>
    route.origin.toLowerCase() === city.name.toLowerCase()
  );

  return <CityTemplate city={city} routes={routes} fleet={FLEET_MODELS} />;
}
