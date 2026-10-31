'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const links=[['/','الرئيسية'],['/about','نبذة'],['/skills','المهارات'],['/projects','المشاريع'],['/labs','المعامل'],['/research','الأبحاث'],['/credentials','الشهادات'],['/contact','التواصل']];
export default function SiteHeader(){const path=usePathname();return <header className="site-header"><Link href="/" className="site-logo"><span>AK</span><b>ARFAT ALKAMALI</b></Link><nav aria-label="التنقل الرئيسي">{links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} className={path===href?'nav-active':''}>{label}</Link>)}</nav><a className="cv-nav" href="mailto:arfat.alkamali@example.com?subject=طلب%20السيرة%20الذاتية">طلب السيرة الذاتية</a></header>}
