"use client";
import Link from 'next/link';
import styles from './cv.module.css';

export default function CVPrintToolbar({locale,backLabel,printLabel}:{locale:'ar'|'en';backLabel:string;printLabel:string}){
 return <nav className={styles.toolbar} aria-label={locale==='ar'?'أدوات السيرة الذاتية':'CV actions'}>
  <Link href={`/${locale}/about`}>{backLabel}</Link>
  <button type="button" onClick={()=>window.print()}>{printLabel}</button>
 </nav>;
}
