import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dinesh-pawar.netlify.app';

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
    { path: '/grohubz', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '' ? 'daily' : 'weekly',
    priority: route.priority,
  }));
}