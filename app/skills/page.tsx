import type {Metadata} from 'next';
import SkillsExplorer from './SkillsExplorer';
export const metadata:Metadata={title:'المهارات والقدرات',description:'خريطة تفاعلية للمهارات التقنية في البرمجة والأمن السيبراني والشبكات والأنظمة والبحث التطبيقي.',alternates:{canonical:'/skills'}};
export default function SkillsPage(){return <SkillsExplorer/>;}
