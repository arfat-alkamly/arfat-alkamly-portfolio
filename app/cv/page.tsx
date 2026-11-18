import type {Metadata} from 'next';
import {cookies} from 'next/headers';
import {projects,type Project} from '../../data/projects';
import CVPrintToolbar from './CVPrintToolbar';
import styles from './cv.module.css';
import {localizedAlternates} from '../../lib/seo';

const siteUrl='https://arfat-phi.vercel.app';
const orcid='0009-0008-1348-5146';
const credentials=[
 {name:'Cybersecurity Defense Analyst Career Path',issuer:'Cisco · Splunk',id:'23bda189-2470-4ce0-8065-ee904979ba21'},
 {name:'Network Defense',issuer:'Cisco',id:'e16ca722-84d2-4da2-ad1f-46e972453890'},
 {name:'Endpoint Security',issuer:'Cisco',id:'f0520c01-63aa-4440-9df4-69c7303d8762'},
 {name:'Python Essentials 2',issuer:'Cisco · OpenEDG',id:'de9c51d6-2eb6-4f7e-833a-31670170e278'}
];
const selectedSlugs=['aegis-titan','cryptolab-pro','academic-os','crypto-master-enterprise'];
const skillGroups=[
 {key:'security',ar:'الأمن السيبراني والعمليات الدفاعية',en:'Cybersecurity & Defensive Operations',items:['Network Security','Threat Detection','Digital Forensics Fundamentals','Incident Response','Malware Analysis (Developing)','Cryptography','Vulnerability Analysis','Open-source Code Review','Application Security Review']},
 {key:'software',ar:'هندسة البرمجيات والتطوير',en:'Software Engineering & Development',items:['Python','C#','Dart','Flutter','JavaScript','HTML5','CSS3','Java','Tauri','Git & GitHub','SQL','PL/SQL','SQLite']},
 {key:'systems',ar:'الأنظمة والأدوات الأمنية',en:'Systems & Security Tooling',items:['Kali Linux','Linux','Windows','VMware','Wireshark','Cisco Networking','VS Code','Oracle Database','Virtualization','Cloud Computing Fundamentals']}
];
const copy={
 ar:{
  title:'السيرة الذاتية الهندسية',
  role:'طالب أمن سيبراني وشبكات | مطوّر برمجيات',
  location:'اليمن',
  summary:'طالب أمن سيبراني وشبكات ومطوّر مشاريع تقنية مستقل، أعمل على بناء تطبيقات وأدوات عملية، وأطوّر مهاراتي في الأمن الدفاعي وتحليل الشيفرات والشبكات. يجمع مساري بين الدراسة الأكاديمية والتطبيق عبر مشاريع شخصية وتجارب موثقة، مع التركيز على فهم الأنظمة والتحقق من النتائج والعمل ضمن نطاقات مصرح بها.',
  competencies:'المهارات التقنية ومجالات الممارسة',
  systems:'المشاريع التقنية المختارة',
  certifications:'الشهادات والشارات الرقمية المختارة',
  education:'المؤهل الأكاديمي',
  verify:'التحقق من الشهادة',
  roleLabel:'الدور',
  stackLabel:'النطاق والتقنيات',
  statusLabel:'الحالة',
  projectRole:{
   'aegis-titan':'صاحب الفكرة والرؤية المعمارية ومؤسس ومطوّر المنظومة؛ تصور دفاعي مؤسسي يربط الرصد والتحليل والاستجابة والتحقيق والحوكمة ضمن بنية واحدة.',
   'cryptolab-pro':'تصميم وتطوير فردي لمنصة تشفير وتحليل تجمع الخوارزميات الكلاسيكية وAES-256-GCM وتشفير الملفات الثنائية والتحقق من السلامة والتوثيق.',
   'academic-os':'تصميم وتطوير تطبيق أكاديمي متعدد المنصات ببنية Clean Architecture وتخزين محلي وإدارة مهام ومقررات وجداول واختبارات؛ قيد التطوير.',
   'crypto-master-enterprise':'تطوير تطبيق سطح مكتب تجريبي للتشفير وتحليل الشفرات، مع أدوات الإنتروبيا وAvalanche وقياس الأداء وتصدير التقارير؛ قيد التطوير.'
  },
  educationLine:'بكالوريوس الأمن السيبراني والشبكات — كلية المنار الجامعية للعلوم والتكنولوجيا (الخطة الأكاديمية: 2024–2028؛ المستوى الثالث).',
  leadership:'مسؤول اللجنة العلمية — قسما الأمن السيبراني وتقنية المعلومات، المستوى الثالث.',
  back:'العودة إلى النبذة',
  print:'حفظ / طباعة بصيغة PDF',
  pageTitle:'السيرة الذاتية | عرفات الكاملي',
  pageDescription:'السيرة الذاتية لعرفات الكاملي، طالب الأمن السيبراني والشبكات ومطوّر المشاريع التقنية.'
 },
 en:{
  title:'ENGINEERING CURRICULUM VITAE',
  role:'Cybersecurity & Networks Student | Software Developer',
  location:'Yemen',
  summary:'Cybersecurity and Networks student and independent technology project developer. I build practical applications and tools while developing my capabilities in defensive security, source-code analysis, and networking. My work combines academic study with hands-on personal projects and documented experiments, emphasizing systems understanding, verifiable results, and authorized scope.',
  competencies:'TECHNICAL SKILLS & AREAS OF PRACTICE',
  systems:'SELECTED TECHNICAL PROJECTS',
  certifications:'SELECTED DIGITAL CREDENTIALS',
  education:'EDUCATION',
  verify:'Verify credential',
  roleLabel:'ROLE',
  stackLabel:'TECHNICAL SCOPE / STACK',
  statusLabel:'STATUS',
  projectRole:{
   'aegis-titan':'Originator, architectural lead, founder, and developer. An institutional defensive-security concept connecting monitoring, analysis, response, investigation, and governance in one system.',
   'cryptolab-pro':'Individually designed and developed a cryptography and analysis platform combining classical ciphers, AES-256-GCM, binary-file encryption, integrity checks, and authentication.',
   'academic-os':'Designed and developed a cross-platform academic application using Clean Architecture and local storage for tasks, courses, schedules, and exams; in development.',
   'crypto-master-enterprise':'Developed an experimental desktop application for cryptography and cipher analysis, including entropy, Avalanche, benchmarking, and report-export tools; in development.'
  },
  educationLine:'Bachelor’s in Cybersecurity and Networks — Al-Manar College for Science & Technology (academic plan: 2024–2028; Level 3).',
  leadership:'Scientific Committee Coordinator — Cybersecurity and Information Technology, Level 3.',
  back:'Back to About',
  print:'Save / Print as PDF',
  pageTitle:'CV | Arfat Alkamli',
  pageDescription:'Professional CV for Arfat Alkamli, a Cybersecurity and Networks student and independent technology project developer.'
 }
} as const;

export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 const t=copy[locale];
 return {title:t.pageTitle,description:t.pageDescription,alternates:localizedAlternates('/cv',locale),robots:{index:true,follow:true}};
}

export default async function CVPage(){
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 const t=copy[locale];
 const isArabic=locale==='ar';
 const selected=selectedSlugs.map(slug=>projects.find(project=>project.slug===slug)).filter((project):project is Project=>Boolean(project));
 return <main className={`${styles.cvPage} cv-print-route`} dir={isArabic?'rtl':'ltr'} lang={locale}>
  <CVPrintToolbar locale={locale} backLabel={t.back} printLabel={t.print}/>
  <article className={styles.document}>
   <header className={styles.header}>
    <div className={styles.nameBlock}>
     <p className={styles.eyebrow}>{isArabic?'ملف مهني هندسي':'PROFESSIONAL ENGINEERING PROFILE'}</p>
     <h1>{isArabic?'عرفات الكاملي':'Arfat Alkamli'}</h1>
     <h2>{t.role}</h2>
    </div>
    <div className={styles.contact} aria-label={isArabic?'قنوات التواصل المهنية':'Professional contact channels'}>
     <a href="mailto:alkamlyrfat@gmail.com">alkamlyrfat@gmail.com</a>
     <a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noreferrer">LinkedIn / arfat-alkamly</a>
     <a href="https://github.com/arfat-alkamly" target="_blank" rel="noreferrer">GitHub / arfat-alkamly</a>
     <a href={`https://orcid.org/${orcid}`} target="_blank" rel="noreferrer">ORCID / {orcid}</a>
     <a href={siteUrl} target="_blank" rel="noreferrer">arfat-phi.vercel.app</a>
     <span>{t.location}</span>
    </div>
   </header>

   <section className={styles.section}>
    <h2>{isArabic?'الملخص التنفيذي':'EXECUTIVE SUMMARY'}</h2>
    <p className={styles.summary}>{t.summary}</p>
   </section>

   <section className={styles.section}>
    <h2>{t.competencies}</h2>
    <div className={styles.skillGroups}>
     {skillGroups.map(group=><div className={styles.skillGroup} key={group.key}>
      <h3>{isArabic?group.ar:group.en}</h3>
      <p>{group.items.join(' · ')}</p>
     </div>)}
    </div>
   </section>

   <section className={styles.section}>
    <h2>{t.systems}</h2>
    <div className={styles.projects}>
     {selected.map(project=><article className={styles.project} key={project.slug}>
      <div className={styles.projectHeading}>
       <h3>{project.name}</h3>
       <span>{project.status}</span>
      </div>
      <p>{t.projectRole[project.slug as keyof typeof t.projectRole]}</p>
      <p className={styles.stack}><b>{t.stackLabel}:</b> {project.stack.join(' · ')}</p>
     </article>)}
    </div>
   </section>

   <section className={styles.section}>
    <h2>{t.certifications}</h2>
    <ul className={styles.certifications}>
     {credentials.map(credential=><li key={credential.id}>
      <span><strong>{credential.name}</strong><small>{credential.issuer}</small></span>
      <a href={`https://www.credly.com/badges/${credential.id}/public_url`} target="_blank" rel="noreferrer">{t.verify}</a>
     </li>)}
    </ul>
   </section>

   <section className={styles.section}>
    <h2>{t.education}</h2>
    <div className={styles.education}>
     <p>{t.educationLine}</p>
     <p>{t.leadership}</p>
    </div>
   </section>
   <footer className={styles.documentFooter}>
    <span>ARFAT ALKAMLI</span>
    <span>BUILDING SYSTEMS. SECURING THE FUTURE.</span>
   </footer>
  </article>
 </main>;
}
