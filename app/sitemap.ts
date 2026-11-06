import type {MetadataRoute} from 'next';
import {projects} from '../data/projects';

const siteUrl='https://arfat-phi.vercel.app';
const locales=['ar','en'] as const;

function languageAlternates(path:string){
 const suffix=path===''?'':path;
 return {
  ar:`${siteUrl}/ar${suffix}`,
  en:`${siteUrl}/en${suffix}`,
  'x-default':`${siteUrl}/ar${suffix}`
 };
}

export default function sitemap():MetadataRoute.Sitemap{
 const routes=['','/about','/skills','/projects','/labs','/research','/credentials','/contact'];

 const staticPages=routes.flatMap(route=>locales.map(locale=>({
  url:`${siteUrl}/${locale}${route}`,
  alternates:{languages:languageAlternates(route)},
  changeFrequency:(route===''?'weekly':'monthly') as 'weekly'|'monthly',
  priority:route===''?1:route==='/projects'?0.9:0.7
 })));

 const projectPages=projects.flatMap(project=>locales.map(locale=>({
  url:`${siteUrl}/${locale}/projects/${project.slug}`,
  alternates:{languages:languageAlternates(`/projects/${project.slug}`)},
  changeFrequency:'monthly' as const,
  priority:0.65
 })));

 return [...staticPages,...projectPages];
}
