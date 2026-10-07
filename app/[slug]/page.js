import { SITEMAP_ROUTES, CITY_HUBS, FLEET_MODELS } from "@/lib/routesData";
import CityTemplate from "@/components/CityTemplate";
import { notFound, permanentRedirect } from "next/navigation";

export function generateStaticParams() {
  // Cities live at root /{citySlug}. Routes live ONLY at /routes/{routeSlug}.
  return CITY_HUBS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = "https://hireurbaniatempotraveller.com";

  // Legacy root route URL — canonical points to the /routes/ version.
  const route = SITEMAP_ROUTES.find((r) => r.routeSlug === slug);
  if (route) {
    const canonical = `${baseUrl}/routes/${route.routeSlug}`;
    return {
      title: `Hire ${route.origin} to ${route.destination} Urbania @30/km | Book Now`,
      description: `Hire Force Urbania luxury van from ${route.origin} to ${route.destination}. Road distance ${route.distanceKm} KM, duration ${route.durationHrs}.`,
      alternates: { canonical },
      openGraph: { url: canonical },
    };
  }

  const city = CITY_HUBS.find((c) => c.slug === slug);
  if (city) {
    const title =
      city.metaTitle ||
      `Urbania Tempo Traveller Hire in ${city.name} | 9, 12, 16, 17 & 20 Seater @₹30/km | Book Now`;
    const description = `Urbania Tempo Traveller Hire in ${city.name}. Doorstep pickup, dual AC, 140° pushback leather recliners & experienced local drivers. Best per-km rates for outstation & sightseeing.`;
    return {
      title,
      description,
      keywords: [
        `urbania tempo traveller hire in ${city.name}`,
        `17 seater urbania in ${city.name}`,
        `12 seater urbania in ${city.name}`,
        `force urbania rental ${city.name}`,
        `luxury tempo traveller ${city.name}`,
      ],
      alternates: {
        canonical: `${baseUrl}/${city.slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${baseUrl}/${city.slug}`,
        siteName: "Hire Force Urbania Tempo Traveller",
        images: [
          {
            url: "/images/hero.png",
            width: 1200,
            height: 630,
            alt: `Force Urbania tempo traveller ${city.name} interior`,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/hero.png"],
      },
    };
  }

  return {
    title: "Force Urbania Luxury Rentals India",
  };
}

export default async function CityRootPage({ params }) {
  const { slug } = await params;

  // Old root route URLs (e.g. /bangalore-to-birur-force-urbania) 301 to /routes/*.
  const route = SITEMAP_ROUTES.find((r) => r.routeSlug === slug);
  if (route) {
    permanentRedirect(`/routes/${route.routeSlug}`);
  }

  const city = CITY_HUBS.find((c) => c.slug === slug);
  if (!city) {
    notFound();
  }

  const matchedCityRoutes = SITEMAP_ROUTES.filter(
    (r) => r.origin.toLowerCase() === city.name.toLowerCase(),
  );

  return (
    <CityTemplate
      city={city}
      routes={matchedCityRoutes}
      fleet={FLEET_MODELS}
    />
  );
}
