import { notFound } from 'next/navigation';
import RouteTemplate from '@/components/RouteTemplate';
import { FLEET_MODELS, SITEMAP_ROUTES } from '@/lib/routesData';
import { getCityGuide } from '@/lib/cityGuides';

export function generateStaticParams() {
  return SITEMAP_ROUTES.map((route) => ({ slug: route.routeSlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = SITEMAP_ROUTES.find((item) => item.routeSlug === slug);
  if (!route) return { title: 'Route Not Found | Hire Urbania' };
  return {
    title: `Force Urbania ${route.origin} to ${route.destination}`,
    description: `Hire a luxury Force Urbania from ${route.origin} to ${route.destination}. Distance ${route.distanceKm} KM and travel time ${route.durationHrs}.`
  };
}

export default async function RoutePage({ params }) {
  const { slug } = await params;
  const route = SITEMAP_ROUTES.find((item) => item.routeSlug === slug);
  if (!route) notFound();

  const relatedRoutes = SITEMAP_ROUTES.filter(
    (item) =>
      item.routeSlug !== route.routeSlug && item.origin === route.origin
  );

  const city = {
    name: route.origin,
    tag: `${route.origin} Hub`
  };

  // Get the city guide for the destination
  const cityGuide = getCityGuide(route.destination);

  return (
    <RouteTemplate 
      city={city} 
      route={route} 
      relatedRoutes={relatedRoutes} 
      fleet={FLEET_MODELS}
      cityGuide={cityGuide}
    />
  );
}