import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import SkillsExplorer from './SkillsExplorer';
import SkillsExplorerEnglish from './SkillsExplorerEnglish';
import {localizedPageMetadata} from '../../lib/seo';
export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 return localizedPageMetadata({path:'/skills',locale,pageTitle:locale==='en'?'Skills & Capabilities':'المهارات والقدرات',description:locale==='en'?'Technical capabilities across software engineering, cybersecurity, networking, systems, and applied research.':'المهارات التقنية في هندسة البرمجيات والأمن السيبراني والشبكات والأنظمة والبحث التطبيقي.'});
}
export default async function SkillsPage(){const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?<SkillsExplorerEnglish locale="en"/>:<SkillsExplorer locale="ar"/>;}
