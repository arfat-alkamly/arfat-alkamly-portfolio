'use client';

import {useMemo,useState} from 'react';
import Link from 'next/link';
import {projects,ProjectCategory} from '../../data/projects';
import {
  ArrowLeft,ArrowUpLeft,ArrowUpRight,Code2,FolderGit2,
  GraduationCap,Layers3,ShieldCheck,Sparkles
} from 'lucide-react';
import './projects.css';

const filters:{id:'all'|ProjectCategory;label:string}[]=[
  {id:'all',label:'جميع المشاريع'},
  {id:'cyber-defense',label:'الأمن السيبراني'},
  {id:'software',label:'هندسة البرمجيات'},
  {id:'academic',label:'الأكاديمية والتعاونية'}
];

const categoryMeta={
  'cyber-defense':{label:'CYBERSECURITY',name:'الأمن السيبراني',Icon:ShieldCheck},
  software:{label:'SOFTWARE ENGINEERING',name:'هندسة البرمجيات',Icon:Code2},
  academic:{label:'ACADEMIC / COLLABORATIVE',name:'أكاديمي وتعاوني',Icon:GraduationCap}
};

export default function ProjectsPage(){
  const [filter,setFilter]=useState<typeof filters[number]['id']>('all');
  const featured=projects.find(p=>p.slug==='aegis-titan');
  const archive=projects.filter(p=>p.slug!=='aegis-titan');
  const visible=useMemo(()=>archive.filter(p=>filter==='all'||p.category===filter),[filter]);
  const featuredVisible=!!featured&&(filter==='all'||featured.category===filter);
  const repositoryCount=projects.filter(p=>p.repository).length;
  const collaborativeCount=projects.filter(p=>p.status.includes('تعاوني')).length;

  return <main className="content-page projects-page portfolio-archive">
    <section className="portfolio-archive-hero">
      <div className="portfolio-archive-hero-copy">
        <span className="portfolio-archive-eyebrow"><span/> ENGINEERING PORTFOLIO <i/> PROJECT ARCHIVE</span>
        <h1>هندسة الأفكار.<br/><em>بناء الأنظمة.</em></h1>
        <p>مساحة تجمع مشاريع هندسية وتجارب تطبيقية في الأمن السيبراني وتطوير البرمجيات؛ من الرؤية المعمارية إلى بناء الحلول وتوثيقها.</p>
        <a className="portfolio-archive-explore" href="#project-collection">استكشف المشاريع <ArrowLeft size={16}/></a>
      </div>
      <div className="portfolio-archive-hero-mark" aria-hidden="true">
        <div className="portfolio-archive-mark-orbit orbit-a"/>
        <div className="portfolio-archive-mark-orbit orbit-b"/>
        <div className="portfolio-archive-mark-core"><Layers3 size={42}/><b>BUILD</b><small>ENGINEERED SYSTEMS</small></div>
        <span className="portfolio-archive-mark-code">PA / 01</span>
      </div>
      <div className="portfolio-archive-hero-foot"><span>DESIGN / ENGINEERING / SECURITY</span><span>BUILDING SYSTEMS. SECURING THE FUTURE.</span></div>
    </section>

    <section className="portfolio-archive-metrics" aria-label="ملخص المشاريع">
      <div><span className="portfolio-archive-metric-icon"><FolderGit2 size={18}/></span><strong>{projects.length.toString().padStart(2,'0')}</strong><small>مشروع في الأرشيف</small></div>
      <div><span className="portfolio-archive-metric-icon"><Code2 size={18}/></span><strong>{repositoryCount.toString().padStart(2,'0')}</strong><small>مستودع مرتبط</small></div>
      <div><span className="portfolio-archive-metric-icon"><GraduationCap size={18}/></span><strong>{collaborativeCount.toString().padStart(2,'0')}</strong><small>مشاريع تعاونية</small></div>
      <div><span className="portfolio-archive-metric-icon"><ShieldCheck size={18}/></span><strong>03</strong><small>مجالات عمل رئيسية</small></div>
    </section>

    {featuredVisible&&featured&&<section className="portfolio-featured-project">
      <div className="portfolio-featured-visual">
        <div className="portfolio-featured-visual-grid"/>
        <div className="portfolio-featured-orbit featured-orbit-one"/>
        <div className="portfolio-featured-orbit featured-orbit-two"/>
        <div className="portfolio-featured-shield"><ShieldCheck size={74} strokeWidth={1}/><span>AEGIS</span><small>SOVEREIGN DEFENSE</small></div>
        <span className="portfolio-featured-visual-index">AT / 09</span>
        <span className="portfolio-featured-visual-caption">PRIVATE ENGINEERING ECOSYSTEM</span>
      </div>
      <div className="portfolio-featured-copy">
        <div className="portfolio-featured-overline"><Sparkles size={14}/> FEATURED ENGINEERING SYSTEM <span>01 / 01</span></div>
        <div className="portfolio-featured-status"><i/>{featured.status}</div>
        <h2>{featured.name}</h2>
        <h3>{featured.label}</h3>
        <p>{featured.summary}</p>
        <div className="portfolio-featured-tags">{featured.stack.slice(0,4).map(x=><span key={x}>{x}</span>)}</div>
        <div className="portfolio-featured-footer">
          <span>FOUNDER &amp; LEAD SYSTEMS ARCHITECT<br/><b>ARFAT ALKAMALI</b></span>
          <Link href={'/projects/'+featured.slug}>استكشف المنظومة <ArrowUpLeft size={17}/></Link>
        </div>
      </div>
    </section>}

    <section className="portfolio-archive-collection" id="project-collection">
      <div className="portfolio-archive-section-heading">
        <div><span>THE WORK / SELECTED PROJECTS</span><h2>المشاريع والأعمال الهندسية</h2><p>استعرض الأعمال بحسب المجال، مع توضيح طبيعة كل مشروع وحالته ومصادره المتاحة.</p></div>
        <div className="portfolio-archive-count"><strong>{visible.length.toString().padStart(2,'0')}</strong><small>PROJECTS</small></div>
      </div>
      <div className="portfolio-archive-filters" role="group" aria-label="تصفية المشاريع">
        {filters.map(f=><button key={f.id} onClick={()=>setFilter(f.id)} className={filter===f.id?'selected':''} aria-pressed={filter===f.id}>{f.label}<span>{f.id==='all'?archive.length:archive.filter(p=>p.category===f.id).length+(f.id==='cyber-defense'&&featured?1:0)}</span></button>)}
      </div>
      <div className="portfolio-archive-grid">
        {visible.map((p,i)=>{
          const meta=categoryMeta[p.category];
          const Icon=meta.Icon;
          return <Link className="portfolio-project-card" href={'/projects/'+p.slug} key={p.slug}>
            <div className="portfolio-project-card-top"><span className="portfolio-project-icon"><Icon size={19}/></span><span className="portfolio-project-number">{String(i+1).padStart(2,'0')} / {meta.label}</span><ArrowUpRight className="portfolio-project-open" size={17}/></div>
            <div className="portfolio-project-status"><i/>{p.status}</div>
            <h3>{p.name}</h3>
            <b className="portfolio-project-label">{p.label}</b>
            <p>{p.summary}</p>
            <div className="portfolio-project-stack">{p.stack.slice(0,4).map(x=><span key={x}>{x}</span>)}</div>
            <div className="portfolio-project-bottom"><span>{p.repository?'REPOSITORY LINKED':'PROJECT PROFILE'}</span><strong>التفاصيل <ArrowUpLeft size={15}/></strong></div>
          </Link>;
        })}
      </div>
      {visible.length===0&&<div className="portfolio-archive-empty">لا توجد مشاريع ضمن هذا التصنيف حاليًا.</div>}
      <p className="portfolio-archive-disclaimer">تختلف مستويات التوثيق والتطوير من مشروع لآخر. وتُعرض المشاريع التعاونية بوصفها أعمالًا مشتركة، مع توضيح المساهمة الفردية وفق المعلومات المتاحة.</p>
    </section>

    <section className="portfolio-archive-closing">
      <span>BUILDING SYSTEMS. SECURING THE FUTURE.</span>
      <p>كل مشروع خطوة في مسار هندسي يتطور بالتصميم والتجربة والتحسين.</p>
    </section>
  </main>;
}
