import type {MetadataRoute} from 'next';
const siteUrl='https://arfat-phi.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{const routes=['','/about','/skills','/projects','/labs','/research','/credentials','/contact'];return routes.map((route)=>({url:`${siteUrl}${route}`,lastModified:new Date(),changeFrequency:route===''?'weekly' as const:'monthly' as const,priority:route===''?1:route==='/projects'?0.9:0.7}));}
