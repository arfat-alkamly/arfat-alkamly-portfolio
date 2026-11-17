import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import LabsExplorer from './LabsExplorer';
import LabsExplorerEnglish from './LabsExplorerEnglish';
import { labs, labFilters } from '../../data/labs-directory';
import {localizedPageMetadata} from '../../lib/seo';

export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 return localizedPageMetadata({path:'/labs',locale,pageTitle:locale==='en'?'Applied Security Labs':'المعامل التطبيقية',description:locale==='en'?'Applied cybersecurity labs for network defense, penetration testing, digital forensics, malware analysis, application security, cryptography, cloud, and AI security.':'معامل تطبيقية للدفاع الشبكي واختبار الاختراق والتحقيق الرقمي وتحليل البرمجيات الخبيثة وأمن التطبيقات والتشفير والسحابة والذكاء الاصطناعي.'});
}


export default async function LabsPage() {
  const en = (await cookies()).get('portfolio-locale')?.value === 'en';
  return en ? <LabsExplorerEnglish labs={labs} filters={labFilters} /> : <LabsExplorer labs={labs} filters={labFilters} />;
}
