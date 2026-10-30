import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://github.com/arfat-alkamly/arfat-alkamly-portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
