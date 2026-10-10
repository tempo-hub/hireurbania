import { SITEMAP_ROUTES, CITY_HUBS, FLEET_MODELS } from "@/lib/routesData";
import CityTemplate from "@/components/CityTemplate";
import { notFound, permanentRedirect } from "next/navigation";

const SITE_URL = "https://hireurbaniatempotraveller.com";

export const revalidate = 86400;

export function generateStaticParams() {
  return CITY_HUBS.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Keep legacy route URLs redirected to their permanent route URLs.
  const route = SITEMAP_ROUTES.find((item) => item.routeSlug === slug);

  if (route) {
    const canonical = `${SITE_URL}/routes/${route.routeSlug}`;
    const title = `${route.origin} to ${route.destination} Urbania Tempo Traveller`;

    return {
      metadataBase: new URL(SITE_URL),
      title,
      description: `Explore Force Urbania travel from ${route.origin} to ${route.destination}. Approximate distance: ${route.distanceKm} km. Contact us for availability and a trip-specific fare.`,
      alternates: { canonical },
      openGraph: {
        title,
        url: canonical,
        siteName: "Hire Urbania",
        type: "website",
      },
    };
  }

  const city = CITY_HUBS.find((item) => item.slug === slug);

  // Do not give nonexistent URLs generic SEO metadata.
  if (!city) {
    notFound();
  }

  const fleetSeaters =
    FLEET_MODELS.length > 0
      ? [...new Set(FLEET_MODELS.map((f) => f.seater))].sort((a, b) => a - b)
      : [9, 12, 16];
  const seaterRange =
    fleetSeaters.length > 1
      ? `${fleetSeaters[0]}-${fleetSeaters[fleetSeaters.length - 1]}`
      : `${fleetSeaters[0]}`;
  const seaterList =
    fleetSeaters.length > 1
      ? `${fleetSeaters.slice(0, -1).join(", ")} & ${fleetSeaters[fleetSeaters.length - 1]}`
      : `${fleetSeaters[0]}`;

  const title =
    city.metaTitle ||
    `Urbania on Rent in ${city.name} | ${seaterRange} Seater @₹30/km`;

  const description =
    city.metaDescription ||
    `Force Urbania tempo traveller on rent in ${city.name} from ₹30/km. ${seaterList} seater with driver, doorstep pickup. Book on WhatsApp.`;

  const canonical = `${SITE_URL}/${city.slug}`;
  const image = `${SITE_URL}/images/hero.png`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hire Urbania",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Force Urbania Tempo Traveller hire in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CityRootPage({ params }) {
  const { slug } = await params;

  // Redirect legacy route slugs to their current canonical route.
  const route = SITEMAP_ROUTES.find((item) => item.routeSlug === slug);

  if (route) {
    permanentRedirect(`/routes/${route.routeSlug}`);
  }

  const city = CITY_HUBS.find((item) => item.slug === slug);

  if (!city) {
    notFound();
  }

  const matchedCityRoutes = SITEMAP_ROUTES.filter(
    (item) =>
      item.origin?.trim().toLowerCase() === city.name.trim().toLowerCase(),
  );

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Force Urbania Tempo Traveller Hire in ${city.name}`,
    serviceType: "Force Urbania Tempo Traveller Rental",
    description:
      city.metaDescription ||
      `Force Urbania Tempo Traveller hire for trips starting in ${city.name}.`,
    url: `${SITE_URL}/${city.slug}`,
    provider: {
      "@type": "Organization",
      name: "Hire Urbania",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema).replace(/</g, "\\u003c"),
        }}
      />

      <CityTemplate
        city={city}
        routes={matchedCityRoutes}
        fleet={FLEET_MODELS}
        allCities={CITY_HUBS.filter((c) => c.slug !== city.slug).slice(0, 12)}
      />
    </>
  );
}

