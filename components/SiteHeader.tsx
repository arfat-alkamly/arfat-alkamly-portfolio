'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpLeft, Menu, X, ShieldCheck } from 'lucide-react';

const links = [
  { href: '/', label: 'الرئيسية', short: 'HOME' },
  { href: '/about', label: 'نبذة عني', short: 'PROFILE' },
  { href: '/skills', label: 'المهارات', short: 'SKILLS' },
  { href: '/projects', label: 'المشاريع', short: 'PROJECTS' },
  { href: '/labs', label: 'المعامل', short: 'LABS' },
  { href: '/research', label: 'الأبحاث', short: 'RESEARCH' },
  { href: '/credentials', label: 'الشهادات', short: 'CREDENTIALS' },
  { href: '/contact', label: 'التواصل', short: 'CONTACT' },
];

function isActive(path: string, href: string) {
  return href === '/' ? path === '/' : path === href || path.startsWith(href + '/');
}

export default function SiteHeader() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const activePage = links.find((item) => isActive(path, item.href)) ?? links[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="site-skip-link" href="#main-content">تجاوز إلى المحتوى الرئيسي</a>
      <header className="site-header site-header-v2">
        <Link href="/" className="site-logo" aria-label="عرفات الكاملي — الصفحة الرئيسية">
          <span className="site-logo-mark">AK</span>
          <span className="site-logo-copy">
            <b>ARFAT ALKAMALI</b>
            <small>CYBERSECURITY · ENGINEERING</small>
          </span>
        </Link>

        <nav className="site-desktop-nav" aria-label="التنقل الرئيسي">
          {links.map((item, index) => {
            const active = isActive(path, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'nav-active' : ''}
              >
                <span className="site-nav-index">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="site-header-cta">
          <span>تواصل مهني</span>
          <ArrowUpLeft size={15} />
        </Link>

        <button
          type="button"
          className="site-menu-toggle"
          aria-label={menuOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <div className="site-page-context" aria-live="polite">
        <span><ShieldCheck size={13} /> PROFESSIONAL PORTFOLIO</span>
        <b>{activePage.label}</b>
        <span className="site-context-path">ARFAT / {activePage.short}</span>
      </div>

      {menuOpen && (
        <div className="site-mobile-layer">
          <button
            type="button"
            className="site-mobile-backdrop"
            aria-label="إغلاق قائمة التنقل"
            onClick={() => setMenuOpen(false)}
          />
          <nav id="site-mobile-navigation" className="site-mobile-nav" aria-label="قائمة التنقل للأجهزة المحمولة">
            <div className="site-mobile-nav-head">
              <div>
                <span>EXPLORE THE PORTFOLIO</span>
                <strong>انتقل إلى القسم</strong>
              </div>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="إغلاق القائمة"><X size={19} /></button>
            </div>
            <div className="site-mobile-link-grid">
              {links.map((item, index) => {
                const active = isActive(path, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={active ? 'nav-active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="site-mobile-link-index">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.label}</span>
                    <small>{item.short}</small>
                    <ArrowUpLeft size={15} />
                  </Link>
                );
              })}
            </div>
            <div className="site-mobile-nav-foot">
              <span>BUILDING SYSTEMS. SECURING THE FUTURE.</span>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>التواصل المهني <ArrowUpLeft size={15} /></Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
