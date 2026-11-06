import Link from 'next/link';
type Locale='ar'|'en';
export default function SiteFooter({locale='ar'}:{locale?:Locale}){
 const en=locale==='en';
 const home=`/${locale}`;
 return <footer className="site-footer site-shell" dir={en?'ltr':'rtl'}>
  <Link href={home} className="site-logo"><span>AK</span><b>ARFAT ALKAMLI</b></Link>
  <small>© {new Date().getFullYear()} {en?'Arfat Alkamli · All rights reserved':'عرفات الكاملي · جميع الحقوق محفوظة'}</small>
  <nav className="site-footer-nav" aria-label={en?'Footer navigation':'روابط التذييل'}>
   <Link href={home}>{en?'Home':'الرئيسية'}</Link>
   <Link href={`/${locale}/projects`}>{en?'Projects':'المشاريع'}</Link>
   <Link href={`/${locale}/skills`}>{en?'Skills':'المهارات'}</Link>
   <Link href={`/${locale}/contact`}>{en?'Contact':'التواصل'}</Link>
  </nav>
  <div className="site-footer-social">
   <a href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer">GitHub</a>
   <a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   <a href="mailto:alkamlyrfat@gmail.com">Email</a>
  </div>
 </footer>;
}
