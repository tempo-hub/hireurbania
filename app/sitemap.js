import { SITEMAP_ROUTES, CITY_HUBS } from '@/lib/routesData';

export default async function sitemap() {
  const baseUrl = 'https://hireurbaniatempotraveller.com';

  const homeEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  };

  const routeEntries = SITEMAP_ROUTES.map((route) => ({
    url: `${baseUrl}/${route.routeSlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const cityEntries = CITY_HUBS.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const trustEntries = [
    'terms-and-conditions',
    'privacy-policy',
    'contact-us',
    'about-us',
    'refund-cancellation',
    'blogs',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === 'blogs' ? 'weekly' : 'yearly',
    priority: slug === 'contact-us' ? 0.8 : 0.5,
  }));

  return [homeEntry, ...cityEntries, ...routeEntries, ...trustEntries];
}
