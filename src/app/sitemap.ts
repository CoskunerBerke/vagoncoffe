import type { MetadataRoute } from 'next';
import { menuItems } from '@/data/menu';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.canonicalUrl;

  const routes = [
    '',
    '/menu',
    '/galeri',
    '/hakkimizda',
    '/iletisim',
    '/kvkk',
    '/gizlilik-politikasi',
    '/cerez-politikasi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = menuItems
    .filter((item) => item.verified)
    .map((item) => ({
      url: `${baseUrl}/menu/${item.slug}`,
      lastModified: item.updatedAt || new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [...routes, ...productRoutes];
}
