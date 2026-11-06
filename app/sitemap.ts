import type {MetadataRoute} from 'next';
import {projects} from '../data/projects';
const siteUrl='https://arfat-phi.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{
 const routes=['','/about','/skills','/projects','/labs','/research','/credentials','/contact'];
 const staticPages=routes.flatMap(route=>(['ar','en'] as const).map(locale=>({
  url:`${siteUrl}/${locale}${route}`,
  changeFrequency:(route===''?'weekly':'monthly') as 'weekly'|'monthly',
  priority:route===''?1:route==='/projects'?0.9:0.7
 })));
 const projectPages=projects.flatMap(project=>(['ar','en'] as const).map(locale=>({
  url:`${siteUrl}/${locale}/projects/${project.slug}`,
  changeFrequency:'monthly' as const,
  priority:0.65
 })));
 return [...staticPages,...projectPages];
}
