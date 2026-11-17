import {cookies} from 'next/headers';
import ProjectsPageArabic from './ProjectsPageArabic';
import ProjectsExplorerEnglish from './ProjectsExplorerEnglish';
import type {Metadata} from 'next';
import {localizedPageMetadata} from '../../lib/seo';
import JsonLd from '../../components/seo/JsonLd';
import {projectsJsonLd} from '../../lib/structured-data';
import {projects,projectFilters} from '../../data/projects';
export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 return localizedPageMetadata({path:'/projects',locale,pageTitle:locale==='en'?'Engineering Projects':'المشاريع الهندسية والتقنية',description:locale==='en'?'Cybersecurity, software engineering, and academic projects with technical context and documented contributions.':'مشاريع الأمن السيبراني وهندسة البرمجيات والمشاريع الأكاديمية مع توضيح التقنيات والمساهمات.'});
}
export default async function ProjectsPage(){const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?<ProjectsExplorerEnglish projects={projects} filters={projectFilters} locale="en"/>:<ProjectsPageArabic projects={projects} filters={projectFilters} locale="ar"/>}
