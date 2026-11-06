import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import AboutTabs from './AboutTabs';
import AboutTabsEnglish from './AboutTabsEnglish';
export async function generateMetadata():Promise<Metadata>{
 const en=(await cookies()).get('portfolio-locale')?.value==='en';
 return en?{title:'About Me',description:'Arfat Alkamali’s profile: academic journey, areas of interest, projects, student leadership, and professional direction.',openGraph:{images:[{url:'/images/arfat-alkamali.jpg',width:640,height:640,alt:'Arfat Alkamali'}]}}:{title:'نبذة عني',description:'الملف الشخصي لعرفات الكاملي: المسار الأكاديمي، مجالات الاهتمام، المشاريع، المسؤولية العلمية والرؤية المهنية.',openGraph:{images:[{url:'/images/arfat-alkamali.jpg',width:640,height:640,alt:'عرفات الكاملي'}]}};
}
export default async function AboutPage(){const locale=(await cookies()).get('portfolio-locale')?.value;return locale==='en'?<AboutTabsEnglish/>:<AboutTabs/>}
