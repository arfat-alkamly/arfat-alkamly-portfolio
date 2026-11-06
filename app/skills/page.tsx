import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import SkillsExplorer from './SkillsExplorer';
import SkillsExplorerEnglish from './SkillsExplorerEnglish';
import {localizedAlternates} from '../../lib/seo';
export async function generateMetadata():Promise<Metadata>{
 const en=(await cookies()).get('portfolio-locale')?.value==='en';
 return en?{title:'Skills & Capabilities',description:'Interactive directory of technical skills across software engineering, cybersecurity, networking, systems, and applied research.',alternates:localizedAlternates('/skills','en')}:{title:'المهارات والقدرات',description:'خريطة تفاعلية للمهارات التقنية في البرمجة والأمن السيبراني والشبكات والأنظمة والبحث التطبيقي.',alternates:localizedAlternates('/skills','ar')};
}
export default async function SkillsPage(){const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?<SkillsExplorerEnglish/>:<SkillsExplorer/>;}
