import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import AboutTabs from './AboutTabs';
import AboutTabsEnglish from './AboutTabsEnglish';
import {localizedPageMetadata} from '../../lib/seo';
import JsonLd from '../../components/seo/JsonLd';
import {personAndWebsiteJsonLd} from '../../lib/structured-data';
export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 return localizedPageMetadata({path:'/about',locale,pageTitle:locale==='en'?'About':'نبذة عني',description:locale==='en'?'Academic journey, technical interests, projects, research direction, and professional profile.':'المسار الأكاديمي والاهتمامات التقنية والمشاريع والتوجه البحثي والملف المهني.',image:'/images/arfat-alkamali.jpg'});
}
export default async function AboutPage(){const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';return locale==='en'?<AboutTabsEnglish/>:<AboutTabs locale={locale}/>}
