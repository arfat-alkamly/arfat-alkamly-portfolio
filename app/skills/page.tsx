import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import SkillsExplorer from './SkillsExplorer';
import SkillsExplorerEnglish from './SkillsExplorerEnglish';
export async function generateMetadata():Promise<Metadata>{
 const en=(await cookies()).get('portfolio-locale')?.value==='en';
 return en?{title:'Skills & Capabilities',description:'Interactive directory of technical skills across software engineering, cybersecurity, networking, systems, and applied research.'}:{title:'المهارات والقدرات',description:'خريطة تفاعلية للمهارات التقنية في البرمجة والأمن السيبراني والشبكات والأنظمة والبحث التطبيقي.'};
}
export default async function SkillsPage(){const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?<SkillsExplorerEnglish/>:<SkillsExplorer/>;}
