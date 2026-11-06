import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import AboutTabs from './AboutTabs';
import AboutTabsEnglish from './AboutTabsEnglish';
export const metadata:Metadata={title:'About Me | Arfat Alkamali',description:'Arfat Alkamali’s profile: academic journey, areas of interest, projects, student leadership, and professional direction.',openGraph:{images:[{url:'/images/arfat-alkamali.jpg',width:640,height:640,alt:'Arfat Alkamali'}]}};
export default async function AboutPage(){const locale=(await cookies()).get('portfolio-locale')?.value;return locale==='en'?<AboutTabsEnglish/>:<AboutTabs/>}
