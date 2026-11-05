import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const footerLinks = [
  { href: '/about', label: 'الملف المهني' },
  { href: '/skills', label: 'المهارات والتقنيات' },
  { href: '/projects', label: 'المشاريع الهندسية' },
  { href: '/labs', label: 'المعامل والبيئات' },
  { href: '/research', label: 'الأبحاث' },
  { href: '/credentials', label: 'الشهادات والاعتمادات' },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer site-footer-v2">
      <div className="site-footer-main">
        <div className="site-footer-identity">
          <Link href="/" className="site-logo">
            <span className="site-logo-mark">AK</span>
            <span className="site-logo-copy">
              <b>ARFAT ALKAMALI</b>
              <small>CYBERSECURITY · ENGINEERING</small>
            </span>
          </Link>
          <p>ملف مهني وهندسي يوثّق المسار الأكاديمي والبحثي والمشاريع التقنية في الأمن السيبراني وهندسة البرمجيات.</p>
          <strong>BUILDING SYSTEMS. SECURING THE FUTURE.</strong>
        </div>

        <div className="site-footer-links">
          <span className="site-footer-kicker">PORTFOLIO DIRECTORY</span>
          <h2>استكشف الملف</h2>
          <div>
            {footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowUpLeft size={13} /></Link>)}
          </div>
        </div>

        <div className="site-footer-connect">
          <span className="site-footer-kicker">PROFESSIONAL NETWORK</span>
          <h2>الحضور المهني</h2>
          <a href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
          <a href="https://www.credly.com/users/arfat-alkamly" target="_blank" rel="noopener noreferrer"><GraduationCap size={16} /> Credly <ArrowUpRight size={13} /></a>
          <a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer"><span className="site-footer-orcid">iD</span> ORCID <ArrowUpRight size={13} /></a>
          <a href="mailto:alkamlyrfat@gmail.com"><Mail size={16} /> البريد الإلكتروني <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} ARFAT ALKAMALI · جميع الحقوق محفوظة</span>
        <span>YEMEN · CYBERSECURITY & NETWORKS</span>
        <Link href="/" aria-label="العودة إلى أعلى الصفحة">العودة للرئيسية <ArrowUpLeft size={13} /></Link>
      </div>
    </footer>
  );
}
