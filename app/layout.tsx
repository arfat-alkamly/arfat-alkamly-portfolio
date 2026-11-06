import type {Metadata,Viewport} from 'next';
import {cookies} from 'next/headers';
import './globals.css';
import '../components/LanguageStyles.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import {localizedAlternates} from '../lib/seo';
const siteUrl='https://arfat-phi.vercel.app';
const personJsonLd={
 '@context':'https://schema.org','@type':'Person',name:'عرفات الكاملي',alternateName:'Arfat Alkamali',url:siteUrl,
 jobTitle:'Cybersecurity Student and Security Researcher',description:'باحث ومطور أمن سيبراني مهتم بالأمن الدفاعي والبحث الأمني وتطوير البرمجيات والتحليل الجنائي الرقمي.',
 email:'mailto:alkamlyrfat@gmail.com',sameAs:['https://github.com/arfat-alkamly','https://www.linkedin.com/in/arfat-alkamly-399676409','https://www.credly.com/users/arfat-alkamly','https://orcid.org/0009-0008-1348-5146'],
 knowsAbout:['Cybersecurity','Defensive Security','Security Research','Digital Forensics and Incident Response','Network Security','Software Engineering','Python','Cloud Computing']
};
export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 const en=locale==='en';
 const title=en?'Arfat Alkamali | Cybersecurity & Software':'عرفات الكاملي | الأمن السيبراني والتقنية';
 const description=en?'Cybersecurity and Networks student focused on defensive security, security research, software development and digital forensics.':'طالب أمن سيبراني وشبكات مهتم بالأمن الدفاعي والبحث الأمني وتطوير البرمجيات والتحليل الجنائي الرقمي.';
 return {
  metadataBase:new URL(siteUrl),title:{default:title,template:en?'%s | Arfat Alkamali':'%s | عرفات الكاملي'},description,
  applicationName:'ARFAT ALKAMALI',keywords:['Arfat Alkamali','عرفات الكاملي','Cybersecurity Yemen','Defensive Security','Security Research','Software Development','DFIR'],
  authors:[{name:'Arfat Alkamali',url:siteUrl}],alternates:localizedAlternates('/',locale),
  openGraph:{type:'website',locale:en?'en_US':'ar_YE',url:siteUrl+'/'+locale,siteName:'ARFAT ALKAMALI',title,description,images:[{url:'/opengraph-image',width:1200,height:630,alt:en?'Arfat Alkamali — Cybersecurity & Technology':'عرفات الكاملي — الأمن السيبراني والتقنية'}]},
  twitter:{card:'summary_large_image',title,description,images:['/opengraph-image']},robots:{index:true,follow:true}
 };
}
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#0b1117'};
export default async function RootLayout({children}:{children:React.ReactNode}){
 const cookieStore=await cookies();
 const locale=cookieStore.get('portfolio-locale')?.value==='en'?'en':'ar';
 return <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}><body><SiteHeader locale={locale}/>{children}<SiteFooter locale={locale}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personJsonLd).replace(/</g,'\\u003c')}} /></body></html>;
}
