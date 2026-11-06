import {cookies} from 'next/headers';
import ProjectsPageArabic from './ProjectsPageArabic';
import ProjectsExplorerEnglish from './ProjectsExplorerEnglish';
export default async function ProjectsPage(){const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?<ProjectsExplorerEnglish/>:<ProjectsPageArabic/>}
