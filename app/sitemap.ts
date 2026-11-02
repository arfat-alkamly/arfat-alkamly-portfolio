import type {MetadataRoute} from 'next';
import {projects} from '../data/projects';
const siteUrl='https://arfat-phi.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{
  const routes=['','/about','/skills','/projects','/labs','/research','/credentials','/contact','/aegis-titan','/aegis-titan/architecture','/aegis-titan/modules','/aegis-titan/operations','/aegis-titan/roadmap'];
  const pages=routes.map((route)=>({url:`${siteUrl}${route}`,changeFrequency:(route===''?'weekly':'monthly') as 'weekly'|'monthly',priority:route===''?1:route==='/projects'?0.9:0.7}));
  const projectPages=projects.map((project)=>({url:`${siteUrl}/projects/${project.slug}`,changeFrequency:'monthly' as const,priority:0.65}));
  return [...pages,...projectPages];
}
