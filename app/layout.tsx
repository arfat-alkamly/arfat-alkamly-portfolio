import type {Metadata,Viewport} from 'next';
import './globals.css';
import './site-navigation.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
const siteUrl='https://arfat-phi.vercel.app';
const personJsonLd={
  '@context':'https://schema.org','@type':'Person',name:'عرفات الكاملي',alternateName:'Arfat Alkamali',url:siteUrl,
  jobTitle:'Cybersecurity Student and Security Researcher',description:'باحث ومطور أمن سيبراني مهتم بالأمن الدفاعي والبحث الأمني وتطوير البرمجيات والتحليل الجنائي الرقمي.',
  email:'mailto:alkamlyrfat@gmail.com',sameAs:['https://github.com/arfat-alkamly','https://www.linkedin.com/in/arfat-alkamly-399676409','https://www.credly.com/users/arfat-alkamly','https://orcid.org/0009-0008-1348-5146'],
  knowsAbout:['Cybersecurity','Defensive Security','Security Research','Digital Forensics and Incident Response','Network Security','Software Engineering','Python','Cloud Computing']
};
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'عرفات الكاملي | باحث ومطور أمن سيبراني',template:'%s | عرفات الكاملي'},description:'المحفظة المهنية لعرفات الكاملي: الأمن السيبراني الدفاعي، البحث الأمني، تطوير البرمجيات، الشبكات والتحليل الجنائي الرقمي.',applicationName:'ARFAT ALKAMALI',keywords:['عرفات الكاملي','Arfat Alkamali','Cybersecurity Yemen','Defensive Security','Security Research','Software Development','DFIR'],authors:[{name:'عرفات الكاملي',url:siteUrl}],openGraph:{type:'website',locale:'ar_YE',url:siteUrl,siteName:'ARFAT ALKAMALI',title:'عرفات الكاملي | باحث ومطور أمن سيبراني',description:'الأمن السيبراني الدفاعي والبحث الأمني وهندسة البرمجيات.',images:[{url:'/opengraph-image',width:1200,height:630,alt:'عرفات الكاملي — الأمن السيبراني والتقنية'}]},twitter:{card:'summary_large_image',title:'عرفات الكاملي | الأمن السيبراني والتقنية',description:'البحث الأمني، الأمن الدفاعي، وتطوير البرمجيات.',images:['/opengraph-image']},robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#0b1117'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body><SiteHeader/><div id="main-content" tabIndex={-1}>{children}</div><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personJsonLd).replace(/</g,'\\u003c')}} /></body></html>}
