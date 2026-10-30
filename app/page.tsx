'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight, ShieldCheck, Code2, Network, Database, Terminal, Github,
  Linkedin, Instagram, Facebook, Sun, Moon, LockKeyhole, GraduationCap,
  BookOpen, Mail, Menu, X, ExternalLink, Award, Globe2, Server, Search,
  FileCode2, Activity, Cpu, BriefcaseBusiness, ChevronDown
} from 'lucide-react';

const projects = [
  {name:'AEGIS-TITAN',type:'DEFENSIVE SECURITY ARCHITECTURE',stage:'Private project',desc:'A defense-first security architecture focused on telemetry, detection, controlled deception, isolation, incident response, digital forensics and evidence integrity.',stack:['Cyber Defense','DFIR','Detection','Security Architecture'],href:'',private:true,icon:ShieldCheck},
  {name:'CryptoLab-Pro',type:'CRYPTOGRAPHY · ACADEMIC PROJECT',stage:'Public repository',desc:'An offline-first interactive platform for exploring classical ciphers, AES-256-GCM, hashing, avalanche effect and client-side file encryption.',stack:['JavaScript','Web Crypto API','HTML','CSS'],href:'https://github.com/arfat-alkamly/CryptoLab-Pro',icon:LockKeyhole},
  {name:'Manar Schedule System',type:'ACADEMIC SOFTWARE',stage:'Public repository',desc:'A university scheduling and management system with student records, role-based access, schedule updates and notifications.',stack:['React','Node.js','Express','PostgreSQL'],href:'https://github.com/arfat-alkamly/manar-schedule-system',icon:GraduationCap},
  {name:'Vulnerability Research Lab',type:'SECURITY RESEARCH',stage:'Public repository',desc:'A dedicated repository for documenting and organizing vulnerability research and practical security learning.',stack:['Security Research','Documentation','Analysis'],href:'https://github.com/arfat-alkamly/Vulnerability-Research-Lab',icon:Search},
  {name:'Waynah',type:'ARABIC SAAS · PRODUCT DESIGN',stage:'Collaborative project',desc:'An Arabic-first product concept that brings bus tracking, gate management and point-of-sale workflows into one platform.',stack:['Product Design','Systems Analysis','Web'],href:'https://github.com/mghalaosimi-web/waynah',icon:Network}
];

const skills=[
 {title:'Cybersecurity',icon:ShieldCheck,items:['Information security foundations','Network security','Cryptography','Vulnerability assessment','Endpoint security']},
 {title:'Programming',icon:Code2,items:['Java · Object-Oriented Programming','Python','C++','JavaScript','HTML · CSS']},
 {title:'Networks & Systems',icon:Network,items:['TCP/IP fundamentals','Network analysis','Linux · Kali Linux','Windows environments','Virtual labs']},
 {title:'Databases & Tools',icon:Database,items:['SQL · PL/SQL','Oracle Database','Git · GitHub','Visual Studio Code','Wireshark']},
];
const languages=[
 {name:'Python',state:'Used in study'},
 {name:'Java',state:'Academic practice'},
 {name:'C++',state:'Listed in profile'},
 {name:'JavaScript',state:'Project use'},
 {name:'HTML / CSS',state:'Project use'},
 {name:'TypeScript',state:'Learning'},
 {name:'C#',state:'Learning'},
 {name:'Go',state:'Learning'},
 {name:'PHP',state:'Learning'},
 {name:'Bash',state:'Learning'}
];
const certificates=[
 {name:'Cisco Endpoint Security',issuer:'Cisco',href:'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url'},
 {name:'IT Customer Support Basics',issuer:'Cisco',href:'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url'},
 {name:'Cisco Learn-A-Thon 2026',issuer:'Cisco',href:'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url'},
 {name:'Introduction to Artificial Intelligence',issuer:'Cisco',href:'https://lnkd.in/dRCcTwf5'}
];
const socials=[
 {name:'GitHub',href:'https://github.com/arfat-alkamly',icon:Github},
 {name:'LinkedIn',href:'https://www.linkedin.com/in/arfat-alkamly-399676409',icon:Linkedin},
 {name:'Facebook',href:'https://www.facebook.com/rfatalkamly',icon:Facebook},
 {name:'Instagram',href:'https://www.instagram.com/dark.hacker_x',icon:Instagram},
 {name:'TikTok',href:'https://www.tiktok.com/@dark.hacker_x',icon:Globe2}
];

export default function Home(){
 const [ar,setAr]=useState(true);
 const [light,setLight]=useState(false);
 const [menu,setMenu]=useState(false);
 const t=(en:string,aa:string)=>ar?aa:en;
 useEffect(()=>{document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';},[ar]);
 const nav=[['about','نبذة عني','About'],['skills','المهارات','Skills'],['projects','المشاريع','Projects'],['credentials','الشهادات','Credentials'],['journey','المسار','Journey'],['contact','التواصل','Contact']];
 return <main className={(light?'light ':'')+(ar?'arabic':'')}>
  <header className="header">
   <a className="wordmark" href="#home"><span>AK</span><b>ARFAT ALKAMALI</b></a>
   <nav className={'nav '+(menu?'nav-open':'')}>{nav.map(([id,aa,en])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{t(en,aa)}</a>)}</nav>
   <div className="header-tools"><button className="lang" onClick={()=>setAr(!ar)}>{ar?'EN':'عربي'}</button><button className="theme" onClick={()=>setLight(!light)} aria-label="Toggle theme">{light?<Moon size={17}/>:<Sun size={17}/>}</button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X size={19}/>:<Menu size={19}/>}</button></div>
  </header>
  <div className="page" id="home">
   <section className="hero">
    <div className="hero-copy">
     <div className="eyebrow"><span/> {t('CYBERSECURITY STUDENT · LEVEL 3','طالب أمن سيبراني · المستوى الثالث')}</div>
     <h1>{t('Building secure systems,','أبني أنظمة أكثر أماناً،')}<em>{t('one step at a time.','خطوةً بعد خطوة.')}</em></h1>
     <p className="hero-text">{t('I’m Arfat Abdullah Hussein Al-Kamly. I study cybersecurity at Al-Manar University College, with interests in defensive security, networks, software development and applied research.','أنا عرفات عبدالله حسين الكاملي، طالب أمن سيبراني في كلية المنار الجامعية. أهتم بالأمن الدفاعي والشبكات وتطوير البرمجيات والبحث التقني التطبيقي.')}</p>
     <div className="hero-buttons"><a className="button primary" href="#projects">{t('View my projects','استعرض مشاريعي')} <ArrowUpRight size={16}/></a><a className="button quiet" href="#contact">{t('Get in touch','تواصل معي')}</a></div>
     <div className="hero-links">{socials.slice(0,2).map(s=><a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">{s.name}<ArrowUpRight size={12}/></a>)}</div>
    </div>
    <div className="hero-panel">
     <div className="monogram">AK<span>.</span></div>
     <div className="panel-line"/>
     <div className="panel-caption"><ShieldCheck size={18}/><span>{t('DEFENSIVE SECURITY','الأمن الدفاعي')}</span></div>
     <div className="panel-bottom"><span>LEARN / BUILD / VERIFY</span><span>YEMEN · 2026</span></div>
    </div>
   </section>
   <div className="quick-facts"><div><span>01</span><b>{t('Cybersecurity','الأمن السيبراني')}</b><small>{t('Academic focus','التخصص الدراسي')}</small></div><div><span>02</span><b>{t('Defensive Security','الأمن الدفاعي')}</b><small>{t('Primary interest','الاهتمام الأساسي')}</small></div><div><span>03</span><b>{t('Software & Networks','البرمجيات والشبكات')}</b><small>{t('Technical practice','التطبيق التقني')}</small></div></div>

   <section className="section" id="about">
    <div className="section-title"><span>01 / {t('PROFILE','نبذة')}</span><h2>{t('A practical approach to learning and building.','منهج عملي في التعلم والبناء.')}</h2></div>
    <div className="about-grid"><p className="lead">{t('I’m developing my technical foundation through university study and hands-on projects. I value clear engineering, responsible security practice and honest documentation of what is built, tested and still in progress.','أطوّر أساسًا تقنيًا من خلال الدراسة الجامعية والمشاريع العملية. أهتم بالهندسة الواضحة والممارسة الأمنية المسؤولة والتوثيق الدقيق لما تم بناؤه واختباره وما يزال قيد التطوير.')}</p><div className="details"><div><small>{t('EDUCATION','التعليم')}</small><b>{t('Al-Manar University College','كلية المنار الجامعية')}</b></div><div><small>{t('PROGRAM','التخصص')}</small><b>{t('Cybersecurity','الأمن السيبراني')}</b></div><div><small>{t('CURRENT LEVEL','المستوى الحالي')}</small><b>{t('Level 3','المستوى الثالث')}</b></div><div><small>{t('BASED IN','الموقع')}</small><b>{t('Yemen','اليمن')}</b></div></div></div>
   </section>

   <section className="section" id="skills">
    <div className="section-title"><span>02 / {t('TECHNICAL SKILLS','المهارات التقنية')}</span><h2>{t('Core areas','المجالات الأساسية')}</h2><p>{t('A concise overview of my current study and practical focus.','ملخص للمجالات التي أدرسها وأطبّقها حالياً.')}</p></div>
    <div className="skill-grid">{skills.map((s,i)=>{const Icon=s.icon;return <article className="skill-card" key={s.title}><div className="skill-head"><Icon size={20}/><span>0{i+1}</span></div><h3>{t(s.title, ['الأمن السيبراني','البرمجة','الشبكات والأنظمة','قواعد البيانات والأدوات'][i])}</h3><ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul></article>})}</div>
    <div className="language-block"><div><h3>{t('Programming languages','لغات البرمجة')}</h3><p>{t('Grouped by current practice and learning, not claimed proficiency levels.','مرتبة بحسب الاستخدام والتعلم الحالي، دون ادعاء مستويات غير موثقة.')}</p></div><div className="language-list">{languages.map(l=><div key={l.name}><b>{l.name}</b><span>{l.state}</span></div>)}</div></div>
   </section>

   <section className="section" id="projects">
    <div className="section-title"><span>03 / {t('SELECTED WORK','المشاريع')}</span><h2>{t('Projects with a clear purpose.','مشاريع بأهداف واضحة.')}</h2><p>{t('A selection of academic, personal and collaborative work.','مجموعة من المشاريع الأكاديمية والشخصية والتعاونية.')}</p></div>
    <div className="project-list">{projects.map((p,i)=>{const Icon=p.icon;return <article className="project" key={p.name}><div className="project-icon"><Icon size={21}/></div><div className="project-main"><div className="project-meta"><span>{p.type}</span><i>{p.stage}</i></div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-action">{p.private?<span className="private"><LockKeyhole size={13}/>{t('PRIVATE','خاص')}</span>:<a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={'Open '+p.name}><ArrowUpRight size={19}/></a>}</div></article>})}</div>
   </section>

   <section className="section" id="credentials">
    <div className="section-title"><span>04 / {t('CERTIFICATES','الشهادات')}</span><h2>{t('Learning milestones','محطات تعليمية')}</h2></div>
    <div className="cert-grid">{certificates.map(c=><a className="cert" key={c.name} href={c.href} target="_blank" rel="noopener noreferrer"><Award size={19}/><div><b>{c.name}</b><small>{c.issuer}</small></div><ArrowUpRight size={15}/></a>)}</div>
   </section>

   <section className="section" id="journey">
    <div className="section-title"><span>05 / {t('ACADEMIC JOURNEY','المسار الأكاديمي')}</span><h2>{t('Learning, applying, improving.','تعلّم، تطبيق، وتطوير.')}</h2></div>
    <div className="journey"><article><span>01</span><div><small>{t('LEVELS 1–2','المستويان الأول والثاني')}</small><h3>{t('Academic foundations','التأسيس الأكاديمي')}</h3><p>{t('Coursework in programming, object-oriented programming, databases, computer networks, mathematics and information security.','دراسة البرمجة والبرمجة كائنية التوجه وقواعد البيانات وشبكات الحاسوب والرياضيات وأمن المعلومات.')}</p></div></article><article><span>02</span><div><small>{t('LEVEL 3 · CURRENT','المستوى الثالث · الحالي')}</small><h3>{t('Cybersecurity specialization','التخصص في الأمن السيبراني')}</h3><p>{t('Continuing with cryptography, information security, web development, software fundamentals and AI for cybersecurity.','مواصلة دراسة التشفير وأمن المعلومات وتطوير الويب وأساسيات البرمجيات والذكاء الاصطناعي للأمن السيبراني.')}</p></div></article><article><span>03</span><div><small>{t('ONGOING','مستمر')}</small><h3>{t('Scientific committee','اللجنة العلمية')}</h3><p>{t('Academic coordination and resource organization for Cybersecurity and IT students at Al-Manar University College.','تنسيق العمل الأكاديمي وتنظيم المصادر لطلاب الأمن السيبراني وتقنية المعلومات في كلية المنار الجامعية.')}</p></div></article></div>
   </section>

   <section className="contact" id="contact"><div><span>06 / {t('CONTACT','التواصل')}</span><h2>{t('Let’s connect.','يسعدني التواصل.')}</h2><p>{t('For technical discussions, collaboration and professional opportunities.','للنقاشات التقنية والتعاون والفرص المهنية.')}</p></div><div className="social-grid">{socials.map(s=>{const Icon=s.icon;return <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"><Icon size={18}/><span>{s.name}</span><ArrowUpRight size={13}/></a>})}</div></section>
   <footer><a className="wordmark" href="#home"><span>AK</span><b>ARFAT ALKAMALI</b></a><small>© 2026 · {t('Built with clarity and purpose.','بُني بوضوح وهدف.')}</small><a href="#home">{t('BACK TO TOP ↑','العودة للأعلى ↑')}</a></footer>
  </div>
 </main>
}
