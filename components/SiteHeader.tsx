'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
type Locale='ar'|'en';
const links=[['/','الرئيسية','Home'],['/about','نبذة','About'],['/skills','المهارات','Skills'],['/projects','المشاريع','Projects'],['/labs','المعامل','Labs'],['/research','الأبحاث','Research'],['/credentials','الشهادات','Credentials'],['/contact','التواصل','Contact']] as const;
export default function SiteHeader({locale='ar'}:{locale?:Locale}){
 const rawPath=usePathname()||'/';
 const current=rawPath.replace(/^\/(ar|en)(?=\/|$)/,'')||'/';
 const isEn=locale==='en';
 const prefix=(href:string)=>href==='/'?`/${locale}`:`/${locale}${href}`;
 return <header className="site-header" dir={isEn?'ltr':'rtl'}>
  <Link href={prefix('/')} className="site-logo"><span>AK</span><b>ARFAT ALKAMALI</b></Link>
  <nav aria-label={isEn?'Main navigation':'التنقل الرئيسي'}>{links.map(([href,ar,en])=>{const active=current===href||(href!=='/'&&current.startsWith(href+'/'));return <Link key={href} href={prefix(href)} aria-current={active?'page':undefined} className={active?'nav-active':''}>{isEn?en:ar}</Link>;})}</nav>
  <div className="site-language" aria-label={isEn?'Select language':'اختيار اللغة'}>
   <a href={`/en${current==='/'?'':current}`} lang="en" aria-current={isEn?'page':undefined}>EN</a>
   <span aria-hidden="true">|</span>
   <a href={`/ar${current==='/'?'':current}`} lang="ar" aria-current={!isEn?'page':undefined}>AR</a>
  </div>
 </header>;
}
