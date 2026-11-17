import type {MetadataRoute} from 'next';

const siteUrl='https://arfat-phi.vercel.app';

export default function robots():MetadataRoute.Robots{
 return {
  rules:[{
   userAgent:'*',
   allow:['/','/ar/','/en/','/llms.txt'],
   disallow:['/api/','/_next/'],
  }],
  sitemap:`${siteUrl}/sitemap.xml`,
  host:siteUrl,
 };
}
