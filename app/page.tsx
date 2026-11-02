import Link from 'next/link';
import {ArrowUpLeft,ArrowUpRight,ShieldCheck,Code2,FlaskConical,GraduationCap,Fingerprint,Network,Terminal} from 'lucide-react';
import {projects} from '../data/projects';

const focusAreas=[
 {icon:Fingerprint,title:'البحث الأمني',detail:'تحليل التطبيقات، مراجعة تدفقات المصادقة، وتقييم الثغرات ضمن نطاق مصرح به.'},
 {icon:Network,title:'أمن الشبكات والدفاع',detail:'فهم حركة الشبكة، الرصد والكشف، والاستجابة المنضبطة للحوادث.'},
 {icon:Terminal,title:'تطوير البرمجيات',detail:'بناء المواقع والتطبيقات والأدوات البرمجية وربطها باحتياجات عملية.'}
];

export default function HomePage(){
 const featured=projects.filter(p=>p.featured);
 return <main className="site-shell">
  <section className="home-hero">
   <div className="hero-copy">
    <span className="eyebrow">CYBERSECURITY · SOFTWARE · RESEARCH</span>
    <h1>عرفات الكاملي <span>باحث أمني ومطور برمجيات</span></h1>
    <p>طالب أمن سيبراني في السنة الثالثة، أعمل على تطوير المواقع والتطبيقات والبرمجيات، وأهتم بالبحث عن الثغرات الأمنية، وأمن الشبكات، وهندسة الأمن الدفاعي، والتحليل الجنائي الرقمي.</p>
    <div className="hero-actions">
     <a className="button-primary" href="#featured">استعرض المشاريع المختارة <ArrowUpLeft size={17}/></a>
     <Link className="button-plain" href="/contact">تواصل مهني <ArrowUpRight size={16}/></Link>
    </div>
    <div className="hero-social-proof"><span>THIRD-YEAR CYBERSECURITY STUDENT</span><span>YEMEN · INDEPENDENT PROJECTS</span></div>
   </div>
   <div className="hero-mark" aria-label="هوية عرفات الكاملي التقنية">
    <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
    <div className="hero-shield"><ShieldCheck size={68}/><b>AK</b></div>
    <span>LEARN / BUILD / SECURE</span><small>INDEPENDENT TECHNICAL PORTFOLIO · 2026</small>
   </div>
  </section>
  <section className="home-focus" aria-labelledby="focus-title">
   <div className="home-section-kicker" id="focus-title"><span>AREAS OF PRACTICE</span><span>01 — 03</span></div>
   <div className="home-focus-grid">
    {focusAreas.map((item,i)=><article className="focus-card" key={item.title}><div className="focus-card-top"><item.icon size={22}/><span>0{i+1}</span></div><h2>{item.title}</h2><p>{item.detail}</p></article>)}
   </div>
  </section>
  <section className="featured-section" id="featured">
   <div className="section-heading"><div><span>SELECTED WORK / 03</span><h2>مشاريع مختارة</h2><p>نماذج من مشاريع شخصية وأكاديمية وتعاونية، مع توضيح طبيعة المساهمة.</p></div><Link href="/projects">أرشيف المشاريع الكامل <ArrowUpLeft size={16}/></Link></div>
   <div className="featured-grid">{featured.map((p,i)=><Link href={'/projects/'+p.slug} className="featured-card" key={p.slug}><span className="card-index">0{i+1} / FEATURED</span><h3>{p.name}</h3><b>{p.label}</b><p>{p.summary}</p><div className="tag-row">{p.stack.slice(0,4).map(t=><small key={t}>{t}</small>)}</div><span className="card-link">تفاصيل المشروع <ArrowUpLeft size={16}/></span></Link>)}</div>
   <Link href="/projects" className="all-projects">عرض جميع المشاريع ({projects.length} مشروعًا) <ArrowUpLeft size={18}/></Link>
  </section>
  <section className="overview-grid">
   <Link href="/skills"><Code2/><span>01 / TECHNICAL SKILLS</span><h3>المهارات والتقنيات</h3><p>دليل مصنف للغات والأطر وأدوات الأمن والأنظمة.</p></Link>
   <Link href="/labs"><FlaskConical/><span>02 / APPLIED LABS</span><h3>المعامل التطبيقية</h3><p>مسارات وتجارب عملية في الأمن السيبراني ضمن بيئات مصرح بها.</p></Link>
   <Link href="/credentials"><GraduationCap/><span>03 / CREDENTIALS</span><h3>الشهادات والدورات</h3><p>سجل الشهادات والدورات والإنجازات التعليمية.</p></Link>
  </section>
  <section className="home-cta"><div><span>LET’S BUILD SOMETHING SECURE</span><h2>لديك مشروع أو فرصة تعاون؟</h2><p>يسعدني التواصل بشأن البحث الأمني والتطوير البرمجي والمبادرات التقنية.</p></div><Link href="/contact" className="button-primary">ابدأ التواصل <ArrowUpLeft size={17}/></Link></section>
 </main>;
}