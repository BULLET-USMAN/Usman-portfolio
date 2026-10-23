import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/matrix', '/cybersecurity', '/ecommerce', '/projects', '/skills', '/contact']
  return routes.map((route) => ({
    url: `${siteConfig.seo.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
