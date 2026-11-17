import type {Metadata,Viewport} from 'next';
import {cookies} from 'next/headers';
import './globals.css';
import '../components/LanguageStyles.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import {localizedPageMetadata} from '../lib/seo';
const siteUrl='https://arfat-phi.vercel.app';
export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 const metadata=localizedPageMetadata({path:'/',locale,pageTitle:locale==='en'?'Professional Portfolio':'الملف المهني',description:locale==='en'?'Cybersecurity research, software engineering, and documented technical work.':'البحث في الأمن السيبراني وهندسة البرمجيات والأعمال التقنية الموثقة.'});
 return {...metadata,applicationName:'ARFAT ALKAMLI',keywords:['Arfat Abdullah Alkamly','عرفات عبدالله الكاملي','Cybersecurity','Security Research','Software Engineering','DFIR','SAST'],authors:[{name:'Arfat Abdullah Alkamly',url:'https://arfat-phi.vercel.app'}],...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?{verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}}:{})};
}
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#EAF6FC'};
export default async function RootLayout({children}:{children:React.ReactNode}){
 const cookieStore=await cookies();
 const locale=cookieStore.get('portfolio-locale')?.value==='en'?'en':'ar';
 return <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}><body><SiteHeader locale={locale}/>{children}<SiteFooter locale={locale}/></body></html>;
}
