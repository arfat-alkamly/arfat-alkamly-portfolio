import type {MetadataRoute} from 'next';
const siteUrl='https://arfat-phi.vercel.app';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:`${siteUrl}/sitemap.xml`,host:siteUrl};}
