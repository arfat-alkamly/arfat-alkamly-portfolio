import Link from 'next/link';
import {ArrowUpLeft,ArrowUpRight,ShieldCheck,Code2,FlaskConical,GraduationCap,Fingerprint,Network,Terminal,Layers3} from 'lucide-react';
import {projects} from '../data/projects';

const focusAreas=[
 {icon:Fingerprint,title:'البحث الأمني',detail:'تحليل التطبيقات وتدفقات الهوية والتحقق من المدخلات، وصياغة النتائج الفنية بمنهجية قابلة للمراجعة.'},
 {icon:Network,title:'هندسة الأمن الدفاعي',detail:'رصد الشبكات والأنظمة، هندسة الكشف، تحليل التهديدات، والاستجابة للحوادث مع الحفاظ على الأدلة.'},
 {icon:Terminal,title:'هندسة البرمجيات',detail:'تصميم وبناء تطبيقات الويب والأدوات البرمجية، وتنظيم البنية التقنية وتحويل المتطلبات إلى حلول عملية.'}
];

export default function HomePage(){
 const featured=projects.filter(p=>p.featured);
 return <main className="site-shell">
  <section className="home-hero">
   <div className="hero-copy">
    <span className="eyebrow">CYBERSECURITY · SOFTWARE ENGINEERING · RESEARCH</span>
    <h1>عرفات الكاملي <span>الأمن السيبراني وهندسة البرمجيات</span></h1>
    <p>طالب أمن سيبراني في المرحلة النهائية من دراسته الجامعية، أعمل على بناء مشاريع تقنية وتطوير برمجيات، وأركز على البحث الأمني وهندسة الدفاع السيبراني وأمن الشبكات والتحليل الجنائي الرقمي. أقدّم هنا أعمالي ومشاريعي وتوثيقًا تقنيًا لمسارات التطوير.</p>
    <div className="hero-actions">
     <a className="button-primary" href="#featured">استعرض أعمالي ومشاريعي <ArrowUpLeft size={17}/></a>
     <Link className="button-plain" href="/contact">تواصل مهني <ArrowUpRight size={16}/></Link>
    </div>
    <div className="hero-social-proof"><span>CYBERSECURITY · FINAL ACADEMIC LEVEL</span><span>YEMEN · INDEPENDENT & COLLABORATIVE WORK</span></div>
   </div>
   <div className="hero-mark" aria-label="الهوية التقنية لعرفات الكاملي">
    <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
    <div className="hero-shield"><ShieldCheck size={68}/><b>AK</b></div>
    <span>RESEARCH / ENGINEER / DEFEND</span><small>PROFESSIONAL TECHNICAL PORTFOLIO</small>
   </div>
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
