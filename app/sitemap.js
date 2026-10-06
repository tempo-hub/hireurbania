import { SITEMAP_ROUTES, CITY_HUBS } from '@/lib/routesData';
import { BLOGS, getCategorySlug } from '@/lib/blogs';
import { localityData } from '@/lib/localityData';

export default async function sitemap() {
  const baseUrl = 'https://hireurbaniatempotraveller.com';

  const homeEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  };

  const routeEntries = SITEMAP_ROUTES.map((route) => ({
    url: `${baseUrl}/routes/${route.routeSlug}`,
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
    'cities',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: slug === 'blogs' ? 'weekly' : 'yearly',
    priority: slug === 'contact-us' ? 0.8 : 0.5,
  }));

  const blogEntries = BLOGS.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.createdAt ? new Date(blog.createdAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogCategoryEntries = [...new Set(BLOGS.map((b) => getCategorySlug(b.category)))].map(
    (categorySlug) => ({
      url: `${baseUrl}/blogs/category/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }),
  );

  const localityEntries = localityData.map((item) => ({
    url: `${baseUrl}/${item.city}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  return [homeEntry, ...cityEntries, ...routeEntries, ...localityEntries, ...trustEntries, ...blogEntries, ...blogCategoryEntries];
}
