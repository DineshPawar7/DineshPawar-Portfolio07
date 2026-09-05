import { MetadataRoute } from 'next';
import { TOOLS } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dineshpawar.work';

  const routes = [
    { path: '', priority: 1.0 },
    { path: '/projects', priority: 0.9 },
    { path: '/experience', priority: 0.9 },
    { path: '/education', priority: 0.8 },
    { path: '/skills', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/github', priority: 0.7 },
    { path: '/youtube', priority: 0.7 },
    { path: '/testimonials', priority: 0.7 },
    { path: '/resume', priority: 0.8 },
    { path: '/about', priority: 0.8 },
    { path: '/tools', priority: 0.95 },
  ];

  const toolRoutes = TOOLS.map((tool) => ({ path: `/tools/${tool.slug}`, priority: 0.8 }));

  return [...routes, ...toolRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '' ? 'daily' : 'weekly',
    priority: route.priority,
  }));
}
