import Image from 'next/image';
import Link from 'next/link';
import {
 ArrowUpLeft, ArrowUpRight, ShieldCheck, Code2, FlaskConical,
 GraduationCap, Fingerprint, Network, Terminal, BrainCircuit,
 LockKeyhole, BadgeCheck, Cpu, Laptop
} from 'lucide-react';
import {projects} from '../data/projects';

const credlyProfile='https://www.credly.com/users/arfat-alkamly';
const credentials=[
 {name:'Cybersecurity Defense Analyst Career Path',issuer:'Cisco Networking Academy',icon:ShieldCheck,url:'https://www.credly.com/badges/c5e45344-5db0-4e0c-a8de-d3137b4bc601'},
 {name:'Network Defense',issuer:'Cisco Networking Academy',icon:Network,image:'https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png',url:'https://www.credly.com/org/cisco/badge/network-defense'},
 {name:'Networking Basics',issuer:'Cisco Networking Academy',icon:Network,image:'https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png',url:'https://www.credly.com/org/cisco/badge/networking-basics'},
 {name:'Python Essentials 2',issuer:'Cisco Networking Academy',icon:Code2,image:'https://images.credly.com/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png',url:'https://www.credly.com/org/cisco/badge/python-essentials-2/'},
 {name:'Python Essentials 1',issuer:'Cisco Networking Academy',icon:Code2,image:'https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png',url:'https://www.credly.com/org/cisco/badge/python-essentials-1.1'},
 {name:'Introduction to Modern AI',issuer:'Cisco Networking Academy',icon:BrainCircuit,image:'https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob',url:'https://www.credly.com/org/cisco/badge/introduction-to-modern-ai'},
 {name:'Endpoint Security',issuer:'Cisco Networking Academy',icon:LockKeyhole,image:'https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png',url:'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url'},
 {name:'Introduction to Cybersecurity',issuer:'Cisco Networking Academy',icon:BadgeCheck,image:'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',url:'https://www.credly.com/badges/cff1a2d3-82ce-47d7-addb-ac3d8a7dd788'},
 {name:'Create Digital Content, Communicate and Collaborate Online',issuer:'Cisco Networking Academy',icon:Laptop,image:'https://images.credly.com/images/af525f6d-70fb-4345-80d4-ca62fca81b45/blob',url:'https://www.credly.com/org/cisco/badge/create-digital-content-communicate-and-collaborate-/'}
];

const focusAreas=[
 {icon:Fingerprint,title:'البحث الأمني',detail:'تحليل التطبيقات وتدفقات الهوية والتحقق من المدخلات، وصياغة النتائج الفنية بمنهجية قابلة للمراجعة.'},
 {icon:Network,title:'هندسة الأمن الدفاعي',detail:'رصد الشبكات والأنظمة، هندسة الكشف، تحليل التهديدات، والاستجابة للحوادث مع الحفاظ على الأدلة.'},
 {icon:Terminal,title:'هندسة البرمجيات',detail:'تصميم وبناء تطبيقات الويب والأدوات البرمجية، وتنظيم البنية التقنية وتحويل المتطلبات إلى حلول عملية.'}
];

function CredentialTrack(){return <section className="credential-track" aria-label="الشهادات والاعتمادات الموثقة">
 <div className="credential-track-heading"><div><span>VERIFIED CREDENTIALS</span><h2>الشهادات والاعتمادات</h2></div><Link href="/credentials">جميع الاعتمادات <ArrowUpLeft size={15}/></Link></div>
 <div className="credential-marquee" tabIndex={0} aria-label="شريط متحرك بالشهادات؛ مرر المؤشر أو المس لإيقاف الحركة مؤقتًا">
  <div className="credential-marquee-track">
   {[0,1].map(copy=><div className="credential-marquee-group" key={copy} aria-hidden={copy===1}>
    {credentials.map((item,index)=>{const Icon=item.icon;return <a className="credential-mini-card" href={item.url} target="_blank" rel="noopener noreferrer" key={item.name} tabIndex={copy===1?-1:0}>
      <span className="credential-mini-icon">{item.image?<img className="credential-mini-image" src={item.image} alt="" loading="lazy"/>:<Icon size={25}/>}</span><span className="credential-mini-copy"><b>{item.name}</b><small>{item.issuer}</small><em>Credly ↗</em></span>
    </a>})}
   </div>)}
  </div>
 </div>
 <div className="credential-track-foot"><span><BadgeCheck size={15}/> روابط تحقق من الجهات المصدرة</span><b>+{credentials.length-3} اعتمادات أخرى</b></div>
 </section>}

export default function HomePage(){
 const featured=projects.filter(p=>p.featured);
 return <main className="site-shell">
  <section className="portfolio-hero">
   <div className="portfolio-hero-grid">
    <div className="portfolio-portrait-column">
     <div className="portfolio-portrait-frame"><Image src="/images/arfat-alkamali.jpg" alt="الصورة الشخصية لعرفات الكاملي" width={640} height={640} priority className="portfolio-portrait"/></div>
     <div className="portrait-credential-stamp"><span><BadgeCheck size={15}/> VERIFIED CREDENTIALS</span><div><i><ShieldCheck size={22}/></i><i><Network size={22}/></i><i><Code2 size={22}/></i><i><Cpu size={22}/></i></div></div>
    </div>
    <div className="portfolio-hero-copy">
     <span className="portfolio-hero-kicker"><ShieldCheck size={19}/> CYBERSECURITY · SOFTWARE · RESEARCH</span>
     <h1>عرفات الكاملي <span>Arfat Alkamali</span></h1>
     <h2>باحث أمني ومطور برمجيات</h2>
     <p>طالب أمن سيبراني ومهتم بالبحث الأمني وهندسة الدفاع وتطوير البرمجيات. أعمل على بناء حلول تقنية، وتحليل الأنظمة والتطبيقات، وتطوير أدوات ومشاريع تجمع بين الأمن والهندسة.</p>
     <div className="portfolio-hero-actions"><Link className="button-primary" href="/projects">استعراض المشاريع <ArrowUpLeft size={17}/></Link><Link className="button-plain" href="/contact">تواصل مهني <ArrowUpRight size={16}/></Link></div>
     <div className="portfolio-hero-proof"><span>RESEARCH</span><span>ENGINEERING</span><span>DEFENSIVE SECURITY</span></div>
    </div>
   </div>
   <CredentialTrack/>
  </section>
  <section className="home-focus" aria-labelledby="focus-title">
   <div className="home-section-kicker" id="focus-title"><span>CORE DISCIPLINES</span><span>01 — 03</span></div>
   <div className="home-focus-grid">
    {focusAreas.map((item,i)=><article className="focus-card" key={item.title}><div className="focus-card-top"><item.icon size={22}/><span>0{i+1}</span></div><h2>{item.title}</h2><p>{item.detail}</p></article>)}
   </div>
  </section>
  <section className="featured-section" id="featured">
   <div className="section-heading"><div><span>SELECTED PROJECTS / ENGINEERING WORK</span><h2>المشاريع والأعمال التقنية</h2><p>مشاريع فردية وأكاديمية وتعاونية، موثقة بحسب نطاق كل عمل ودور المساهمة فيه.</p></div><Link href="/projects">استعرض سجل المشاريع الكامل <ArrowUpLeft size={16}/></Link></div>
   <div className="featured-grid">{featured.map((p,i)=><Link href={'/projects/'+p.slug} className="featured-card" key={p.slug}><span className="card-index">0{i+1} / FEATURED PROJECT</span><h3>{p.name}</h3><b>{p.label}</b><p>{p.summary}</p><div className="tag-row">{p.stack.slice(0,4).map(t=><small key={t}>{t}</small>)}</div><span className="card-link">استكشف المشروع <ArrowUpLeft size={16}/></span></Link>)}</div>
   <Link href="/projects" className="all-projects">استعرض سجل المشاريع ({projects.length} مشروعًا) <ArrowUpLeft size={18}/></Link>
  </section>
  <section className="overview-grid">
   <Link href="/skills"><Code2/><span>01 / TECHNICAL SKILLS</span><h3>المهارات والتقنيات</h3><p>مجالات العمل واللغات والأطر وأدوات الأمن والأنظمة.</p></Link>
   <Link href="/labs"><FlaskConical/><span>02 / TECHNICAL PRACTICE</span><h3>الممارسة التقنية</h3><p>تطبيقات عملية ومسارات بحث وتحليل أمني.</p></Link>
   <Link href="/credentials"><GraduationCap/><span>03 / EDUCATION & CREDENTIALS</span><h3>التعليم والشهادات</h3><p>المسار الأكاديمي والشهادات والدورات والإنجازات.</p></Link>
  </section>
  <section className="home-cta"><div><span>LET’S BUILD SECURE SYSTEMS</span><h2>فرص تعاون ومشاريع تقنية</h2><p>للتواصل حول هندسة الأمن السيبراني والبحث الأمني وتطوير البرمجيات.</p></div><Link href="/contact" className="button-primary">تواصل معي <ArrowUpLeft size={17}/></Link></section>
 </main>;
}
