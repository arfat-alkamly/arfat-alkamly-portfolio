import Link from 'next/link';
import {cookies} from 'next/headers';
import HomePageEnglish from './HomePageEnglish';
import Image from 'next/image';
import { ArrowUpLeft, ArrowUpRight, ShieldCheck, GraduationCap, Fingerprint, Network, Terminal, Github, Linkedin, Layers3 } from 'lucide-react';
import { projects } from '../data/projects';
import './home.css';
import type {Metadata} from 'next';
import {localizedAlternates} from '../lib/seo';
export async function generateMetadata():Promise<Metadata>{const en=(await cookies()).get('portfolio-locale')?.value==='en';return en?{title:'Cybersecurity & Software Portfolio',description:'Arfat Alkamli — Cybersecurity and Networks student focused on defensive security, security research, software engineering, and practical technical projects.',alternates:localizedAlternates('/','en')}:{title:'الملف المهني | عرفات الكاملي',description:'الملف المهني لعرفات الكاملي، طالب الأمن السيبراني والشبكات، المهتم بالأمن الدفاعي والبحث الأمني وهندسة البرمجيات والمشاريع التقنية.',alternates:localizedAlternates('/','ar')}}

const disciplines = [
  { icon: Fingerprint, number: '01', title: 'البحث الأمني', text: 'مراجعة أمن التطبيقات، تحليل السلوك، دراسة الثغرات، وكتابة الملاحظات الفنية بصورة قابلة للتحقق.' },
  { icon: Network, number: '02', title: 'الأمن الدفاعي والشبكات', text: 'مفاهيم الرصد والتحليل والاستجابة للحوادث، أمن الشبكات، والتحقيق الجنائي الرقمي.' },
  { icon: Terminal, number: '03', title: 'هندسة البرمجيات', text: 'بناء تطبيقات وأدوات تقنية، تصميم الحلول، وتنظيم الشيفرات وتحويل الأفكار إلى منتجات عملية.' }
];



export default async function HomePage() {
  const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
  if(locale==='en') return <HomePageEnglish/>;
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <main className="home-v2">
      <section className="hv-hero" aria-labelledby="home-title">
        <div className="hv-hero-grid" aria-hidden="true" />
        <div className="hv-hero-copy">
          <div className="hv-overline"><span className="hv-live-dot" /> INDEPENDENT TECHNOLOGY PORTFOLIO <span className="hv-overline-line" /></div>
          <p className="hv-role">CYBERSECURITY & NETWORKS <i>×</i> SOFTWARE DEVELOPMENT</p>
          <h1 id="home-title">عرفات <span>الكاملي</span></h1>
          <a className="hv-hero-orcid" href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer"><span className="hv-orcid-mark">iD</span><span>المعرّف الأكاديمي الدولي للباحث</span><strong>0009-0008-1348-5146</strong><ArrowUpRight size={14} /></a>
          <h2 dir="ltr" style={{textAlign:"left"}}>Building Systems.<br /><em>Securing the Future.</em></h2>
          <p className="hv-intro">طالب أمن سيبراني وشبكات، ومطوّر مشاريع تقنية مستقل. أهتم بالبحث الأمني، وهندسة الدفاع السيبراني، وبناء البرمجيات والأنظمة التي تجمع بين الفكرة والتنفيذ.</p>
          <div className="hv-actions">
            <Link href={`/${locale}/projects`} className="hv-button hv-button-primary">استكشف المشاريع ↖</Link>
            <Link href={`/${locale}/about`} className="hv-button hv-button-ghost">اكتشف مساري ↖</Link>
          </div>
          <div className="hv-hero-meta"><span>YEMEN</span><b /> <span>CYBERSECURITY & NETWORKS</span><b /> <span>LEVEL 3</span></div>
        </div>
        <div className="hv-hero-visual hv-portrait-visual" aria-label="الصورة الشخصية لعرفات الكاملي">
          <div className="hv-portrait-grid" aria-hidden="true" />
          <Image src="/images/arfat-alkamali.jpg" alt="عرفات الكاملي" fill priority sizes="(max-width: 640px) 90vw, 42vw" className="hv-portrait-image" />
          <div className="hv-portrait-shade" />
          <div className="hv-visual-top"><span>AK / 01</span><span>ENGINEERING PROFILE</span></div>
          <div className="hv-portrait-stamp"><ShieldCheck size={18}/><span>RESEARCH<br/>BUILD<br/>DEFEND</span></div>
          <div className="hv-visual-foot"><span>ARFAT ALKAMLI</span><span>YEMEN · 2026</span></div>
        </div>
        <div className="hv-scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="hv-proof-strip" aria-label="الأدلة المهنية والأكاديمية">
        <div className="hv-proof-heading"><span>PROFESSIONAL SNAPSHOT / 2026</span><p>مسار أكاديمي، مسؤولية طلابية، واعتمادات ومشاريع يمكن استكشافها والتحقق منها.</p></div>
        <div className="hv-proof-grid">
          <Link href={`/${locale}/about`} className="hv-proof-card"><span>01 / ACADEMIC PATH</span><strong>بكالوريوس الأمن السيبراني والشبكات</strong><small>كلية المنار الجامعية · المستوى الثالث</small></Link>
          <Link href={`/${locale}/about`} className="hv-proof-card"><span>02 / STUDENT LEADERSHIP</span><strong>مسؤول اللجنة العلمية</strong><small>قسما الأمن السيبراني وتقنية المعلومات · المستوى الثالث</small></Link>
          <Link href={`/${locale}/credentials`} className="hv-proof-card"><span>03 / DIGITAL CREDENTIALS</span><strong>09 اعتمادات رقمية</strong><small>شارات تعليمية مع روابط تحقق من Credly</small></Link>
          <Link href={`/${locale}/projects`} className="hv-proof-card"><span>04 / SELECTED WORK</span><strong>{projects.length.toString().padStart(2,'0')} مشروعًا تقنيًا</strong><small>أعمال شخصية وأكاديمية وتعاونية بنطاقات موضحة</small></Link>
        </div>
      </section>

      <section className="hv-disciplines" aria-labelledby="disciplines-title">
        <div className="hv-section-top"><span>01 / AREAS OF FOCUS</span></div>
        <div className="hv-section-intro"><div><h2 id="disciplines-title">ثلاثة مسارات،<br /><em>رؤية هندسية واحدة.</em></h2></div><p>أجمع بين فهم الأنظمة، التفكير الأمني، والتطوير البرمجي لبناء حلول تقنية مدروسة.</p></div>
        <div className="hv-discipline-grid">
          {disciplines.map((item) => <Link href={item.number === "01" ? `/${locale}/research` : item.number === "02" ? `/${locale}/labs` : `/${locale}/projects`} className="hv-discipline-card" key={item.number}><div className="hv-card-head"><item.icon size={23} strokeWidth={1.5} /><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="hv-card-rule" /></Link>)}
        </div>
      </section>

      <section className="hv-work" id="featured" aria-labelledby="work-title">
        <div className="hv-section-top"><span>02 / SELECTED WORK</span></div>
        <div className="hv-section-intro"><div><h2 id="work-title">من الفكرة<br /><em>إلى التنفيذ.</em></h2></div><div className="hv-work-aside"><p>{projects.length.toString().padStart(2,'0')} مشروعًا في الأرشيف، تشمل أعمالًا شخصية وأكاديمية وتعاونية. لكل مشروع نطاقه ودوره وتوثيقه.</p><Link href={`/${locale}/projects`}>عرض جميع المشاريع <ArrowUpLeft size={16} /></Link></div></div>
        <div className="hv-project-grid">
          {featured.map((project, index) => <Link href={`/${locale}/projects/${project.slug}`} className={'hv-project-card hv-project-' + (index + 1)} key={project.slug}>
            <div className="hv-project-top"><span>0{index + 1} / FEATURED</span><ArrowUpLeft size={18} /></div>
            <div className="hv-project-art">{project.slug === 'aegis-titan' ? <Image src="/images/aegis/defensive-command-environment.svg" alt="تصور بصري لبيئة القيادة الدفاعية" fill sizes="(max-width: 640px) 90vw, 30vw" /> : project.slug === 'cryptolab-pro' ? <div className="hv-art-code"><span>CRYPTO LAB / 01</span><b>AES<span>256</span></b><small>ENCRYPT · HASH · VERIFY</small></div> : <div className="hv-art-academic"><Layers3 size={48}/><span>ACADEMIC OS</span><small>OFFLINE · ORGANIZED · PRIVATE</small></div>}</div>
            <div className="hv-project-copy"><span className="hv-project-label">{project.label}</span><h3>{project.name}</h3><p>{project.summary}</p></div>
            <div className="hv-project-bottom"><span>{project.stack.slice(0, 3).join(' / ')}</span><b>استكشف المشروع ↖</b></div>
          </Link>)}
        </div>
      </section>

      <section className="hv-contact">
        <div className="hv-contact-orbit" aria-hidden="true" />
        <div className="hv-contact-content"><p className="hv-kicker">03 / CONNECT</p><h2>لنبنِ شيئًا<br /><em>يستحق أن يُؤمَن.</em></h2><p>للتواصل المهني، ومناقشة المشاريع التقنية، والبحث الأمني، وفرص التعاون.</p><Link href={`/${locale}/contact`} className="hv-button hv-button-primary">ابدأ التواصل <ArrowUpLeft size={17} /></Link></div>
        <div className="hv-social-links"><a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer" aria-label="ORCID researcher profile"><span className="hv-orcid-mark">iD</span><span>ORCID</span><small>0009-0008-1348-5146</small><ArrowUpLeft size={14} /></a><a href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpLeft size={14} /></a><a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpLeft size={14} /></a><a href="https://www.credly.com/users/arfat-alkamly" target="_blank" rel="noopener noreferrer"><GraduationCap size={18} /> Credly <ArrowUpLeft size={14} /></a></div>
        <div className="hv-contact-index">AK<span> / 2026</span></div>
      </section>
    </main>
  );
}
