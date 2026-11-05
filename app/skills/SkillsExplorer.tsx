"use client";
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {ArrowUpLeft,Braces,Code2,Database,Network,Search,ShieldCheck,Terminal,Workflow,Layers3,FileSearch,Activity,ChevronDown,ExternalLink,Cloud,LockKeyhole,ScanSearch,GitBranch,Server,Cpu,BookOpenCheck} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {projects} from '../../data/projects';

type Level='تطبيق عملي'|'ممارسة جيدة'|'معرفة وتطبيق';
type Skill={name:string;level:Level;note:string};
type Domain={id:string;title:string;en:string;description:string;Icon:LucideIcon;skills:Skill[]};
const domains:Domain[]=[
{id:'engineering',title:'البرمجة وهندسة البرمجيات',en:'SOFTWARE ENGINEERING',description:'تطوير تطبيقات وأدوات عملية، من منطق البرنامج إلى الواجهات وربط البيانات.',Icon:Code2,skills:[
{name:'Python',level:'تطبيق عملي',note:'بناء أدوات وأتمتة ومنطق الأنظمة الأمنية'},
{name:'C#',level:'تطبيق عملي',note:'تطوير تطبيقات سطح المكتب والمنطق البرمجي'},
{name:'Dart & Flutter',level:'تطبيق عملي',note:'تطوير تطبيقات متعددة المنصات'},
{name:'JavaScript',level:'تطبيق عملي',note:'التفاعل البرمجي وتطوير الواجهات'},
{name:'HTML5 & CSS3',level:'تطبيق عملي',note:'بناء الواجهات وتنظيم تجربة الاستخدام'},
{name:'Java',level:'ممارسة جيدة',note:'البرمجة كائنية التوجه وتطبيقات Java'},
{name:'Tauri',level:'تطبيق عملي',note:'تغليف تطبيقات سطح المكتب بواجهات ويب'},
{name:'Git & GitHub',level:'تطبيق عملي',note:'إدارة الإصدارات والمستودعات والتعاون البرمجي'}
]},
{id:'cyber-defense',title:'الدفاع السيبراني ومراكز العمليات',en:'CYBER DEFENSE & SOC',description:'مراقبة الأنظمة والشبكات، تحليل التنبيهات والمؤشرات، وفهم دورة الاستجابة للحوادث.',Icon:ShieldCheck,skills:[
{name:'SOC Operations',level:'تطبيق عملي',note:'مفاهيم ومهام المراقبة والتحليل الأمني'},
{name:'Threat Detection',level:'تطبيق عملي',note:'اكتشاف السلوكيات والمؤشرات غير الطبيعية'},
{name:'Network Security',level:'تطبيق عملي',note:'تحليل حركة الشبكة ومبادئ الحماية'},
{name:'DFIR',level:'تطبيق عملي',note:'التحقيق الرقمي والاستجابة للحوادث'},
{name:'Incident Response',level:'ممارسة جيدة',note:'تحليل الحادث وتوثيق خطوات المعالجة'},
{name:'Malware Analysis',level:'ممارسة جيدة',note:'فحص السلوك والمؤشرات ضمن بيئات آمنة'},
{name:'Cryptography',level:'تطبيق عملي',note:'المفاهيم والخوارزميات والتطبيقات التشفيرية'}
]},
{id:'security-testing',title:'اختبار الأمن وتحليل الشيفرات',en:'SECURITY TESTING & CODE REVIEW',description:'فحص التطبيقات والمستودعات البرمجية وتقييم نقاط الضعف ضمن نطاق مصرح به.',Icon:ScanSearch,skills:[
{name:'تحليل الثغرات البرمجية',level:'تطبيق عملي',note:'قراءة الشيفرات وتحديد الأنماط والمخاطر'},
{name:'تحليل المستودعات مفتوحة المصدر',level:'تطبيق عملي',note:'مراجعة بنية المشروع والاعتماديات ومسارات التنفيذ'},
{name:'اختبار الاختراق',level:'تطبيق عملي',note:'اختبارات تعليمية وعملية ضمن نطاق مصرح به'},
{name:'تحليل أمن التطبيقات',level:'تطبيق عملي',note:'مراجعة الإدخال والصلاحيات والتعامل مع البيانات'},
{name:'Burp Suite',level:'معرفة وتطبيق',note:'التعرف على اعتراض وتحليل طلبات الويب'},
{name:'Nmap',level:'معرفة وتطبيق',note:'استكشاف الشبكات والخدمات'}
]},
{id:'networking',title:'الشبكات والاتصالات',en:'NETWORKING & COMMUNICATIONS',description:'فهم بنية الشبكات والبروتوكولات وتحليل الاتصال بين الأنظمة والأجهزة.',Icon:Network,skills:[
{name:'Cisco Networking',level:'تطبيق عملي',note:'مفاهيم الشبكات والتهيئة والتحليل'},
{name:'TCP/IP & OSI',level:'تطبيق عملي',note:'فهم الطبقات والبروتوكولات ومسارات الاتصال'},
{name:'Wireshark',level:'تطبيق عملي',note:'التقاط الحزم وتحليل حركة الشبكة'},
{name:'Network Troubleshooting',level:'تطبيق عملي',note:'تتبع المشكلات وتحليل الاتصال'},
{name:'Network Monitoring',level:'تطبيق عملي',note:'مراقبة الاتصالات ومؤشرات السلوك'},
{name:'DNS · DHCP · IP Addressing',level:'ممارسة جيدة',note:'خدمات الشبكات والعنونة وإدارة الاتصال'}
]},
{id:'systems',title:'الأنظمة والبيئات والبنية التحتية',en:'SYSTEMS & INFRASTRUCTURE',description:'إدارة بيئات التشغيل والعمل على الأنظمة الافتراضية وأدوات التطوير.',Icon:Server,skills:[
{name:'Kali Linux',level:'تطبيق عملي',note:'بيئة العمل والتحليل الأمني'},
{name:'Linux',level:'تطبيق عملي',note:'سطر الأوامر وإدارة الملفات والعمليات'},
{name:'Windows',level:'تطبيق عملي',note:'بيئة التشغيل وإدارة التطبيقات'},
{name:'VMware',level:'تطبيق عملي',note:'إنشاء وإدارة البيئات الافتراضية'},
{name:'VS Code',level:'تطبيق عملي',note:'بيئة تطوير وتهيئة المشاريع'},
{name:'Virtualization',level:'تطبيق عملي',note:'عزل الأنظمة وتجهيز مختبرات الاختبار'},
{name:'Cloud Computing',level:'معرفة وتطبيق',note:'المفاهيم الأساسية للبنية والخدمات السحابية'}
]},
{id:'data',title:'قواعد البيانات وهندسة البيانات',en:'DATABASES & DATA',description:'تصميم قواعد البيانات وكتابة الاستعلامات وربط البيانات بالتطبيقات.',Icon:Database,skills:[
{name:'SQL',level:'تطبيق عملي',note:'الاستعلامات وإدارة البيانات العلائقية'},
{name:'PL/SQL',level:'تطبيق عملي',note:'الإجراءات والكتل البرمجية داخل Oracle'},
{name:'Oracle Database',level:'تطبيق عملي',note:'إدارة قواعد البيانات وتنفيذ العمليات'},
{name:'SQLite',level:'تطبيق عملي',note:'التخزين المحلي وربط البيانات بالتطبيقات'},
{name:'Relational Database Design',level:'تطبيق عملي',note:'الجداول والعلاقات والمفاتيح والتطبيع'}
]},
{id:'research',title:'التحليل التقني والبحث والتطوير',en:'TECHNICAL ANALYSIS & R&D',description:'تحويل المشكلات والبيانات إلى نتائج قابلة للفحص والتوثيق والتحسين.',Icon:Workflow,skills:[
{name:'تحليل السجلات والمؤشرات',level:'تطبيق عملي',note:'ربط الأحداث واستخراج مؤشرات ذات دلالة'},
{name:'توثيق الأدلة التقنية',level:'تطبيق عملي',note:'تنظيم النتائج وسياق الفحص ومخرجاته'},
{name:'تحليل الأنظمة',level:'تطبيق عملي',note:'فهم المكونات والاعتماديات وتدفق البيانات'},
{name:'البحث التقني التطبيقي',level:'معرفة وتطبيق',note:'استكشاف الحلول ومقارنة الأساليب التقنية'},
{name:'AI for Cybersecurity',level:'معرفة وتطبيق',note:'تطبيقات الذكاء الاصطناعي في التحليل الأمني'}
]}
];
const filters=[['all','كل المجالات'],['engineering','البرمجة'],['cyber-defense','الدفاع وSOC'],['security-testing','اختبار الأمن'],['networking','الشبكات'],['systems','الأنظمة'],['data','قواعد البيانات'],['research','التحليل والبحث']];
const pathways=[
{Icon:Braces,title:'Build',ar:'البناء والتطوير',detail:'تصميم البرمجيات، كتابة الشيفرات، بناء الواجهات وربط قواعد البيانات.',tools:'Python · C# · Flutter · JavaScript · SQL'},
{Icon:ShieldCheck,title:'Defend',ar:'الحماية والدفاع',detail:'مراقبة الأنظمة، تحليل التهديدات، تقييم المخاطر والاستجابة للحوادث.',tools:'SOC · DFIR · Wireshark · Network Security'},
{Icon:ScanSearch,title:'Investigate',ar:'الفحص والتحقيق',detail:'مراجعة الشيفرات والمستودعات، تتبع السلوك، وفحص النتائج وتوثيقها.',tools:'Code Review · Threat Analysis · Digital Forensics'}
];
const workflow=[{Icon:Layers3,t:'Understand',a:'فهم النظام والسياق'},{Icon:Search,t:'Investigate',a:'التحليل والفحص'},{Icon:Braces,t:'Build',a:'التطوير والتنفيذ'},{Icon:FileSearch,t:'Validate',a:'التحقق والتوثيق'}];
export default function SkillsExplorer(){
 const [active,setActive]=useState('all');
 const [query,setQuery]=useState('');
 const [expanded,setExpanded]=useState<string[]>(['cyber-defense','engineering']);
 const visible=useMemo(()=>domains.map(d=>({...d,skills:d.skills.filter(s=>(s.name+' '+s.note+' '+d.title+' '+d.en).toLowerCase().includes(query.trim().toLowerCase()))})).filter(d=>(active==='all'||d.id===active)&&d.skills.length>0),[active,query]);
 const total=domains.reduce((n,d)=>n+d.skills.length,0);
 const practical=domains.reduce((n,d)=>n+d.skills.filter(s=>s.level==='تطبيق عملي').length,0);
 const toggle=(id:string)=>setExpanded(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 return <main className="content-page skills-page sk-page">
  <div className="sk-topline"><span>CAPABILITY MAP / 2026</span><span>ARFAT ALKAMALI <i/> TECHNICAL PROFILE</span></div>
  <section className="sk-hero"><div className="sk-hero-copy"><span className="sk-kicker">ENGINEERING · SECURITY · RESEARCH</span><h1>المهارات <em>والقدرات</em></h1><p>ملف تقني يوضح ما أطبّقه في تطوير البرمجيات والأمن السيبراني والشبكات، والأدوات التي أستخدمها في بناء الأنظمة وتحليلها وحمايتها. التركيز هنا على المهارة القابلة للتطبيق، لا على جمع أسماء التقنيات.</p><div className="sk-hero-tags"><span><Code2/> Software Engineering</span><span><ShieldCheck/> Cyber Defense</span><span><Activity/> Technical Research</span></div></div><div className="sk-hero-aside"><div className="sk-orbit"><div className="sk-orbit-core"><ShieldCheck/><b>AK</b><small>ENGINEERING</small></div><i/><i/><i/></div><span>BUILD / DEFEND / INVESTIGATE</span></div></section>
  <section className="sk-snapshot" aria-label="ملخص المهارات"><article><b>{total}</b><span>مهارة وتقنية موثقة</span></article><article><b>{domains.length}</b><span>مجالات تقنية</span></article><article><b>{practical}</b><span>تطبيق عملي مُدرج</span></article><article><b>03</b><span>مسارات عمل مترابطة</span></article></section>
  <section className="sk-pathways"><div className="sk-extra-heading"><span>01 / ENGINEERING PILLARS</span><h2>ثلاثة مسارات تشكّل هويتي التقنية</h2><p>تتقاطع هذه المسارات في المشاريع: أبني الأنظمة، أختبرها وأحميها، ثم أحلل نتائجها وأطوّرها.</p></div><div className="sk-pathway-grid">{pathways.map(({Icon,title,ar,detail,tools:stack},i)=><article key={title}><span className="sk-pathway-index">0{i+1} / {title}</span><Icon/><h3>{ar}</h3><p>{detail}</p><small>{stack}</small></article>)}</div></section>
  <section className="sk-section-head"><div><span>02 / CAPABILITY DIRECTORY</span><h2>دليل المهارات التفصيلي</h2><p>ابحث باسم المهارة أو الأداة، أو اختر مجالاً محدداً. اضغط على أي مجال لعرض تفاصيل التقنيات ومستوى الممارسة.</p></div><label className="sk-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن لغة أو أداة أو مجال..." aria-label="ابحث عن مهارة أو أداة"/></label></section>
  <div className="sk-filters" role="group" aria-label="تصفية المجالات">{filters.map(([id,label])=><button key={id} type="button" className={active===id?'active':''} aria-pressed={active===id} onClick={()=>setActive(id)}>{label}</button>)}</div>
  <section className="sk-domain-list">{visible.map((d,i)=>{const Icon=d.Icon;const isOpen=expanded.includes(d.id)||query.length>0;return <article className="sk-domain" key={d.id}><button className="sk-domain-toggle" type="button" aria-expanded={isOpen} onClick={()=>toggle(d.id)}><span className="sk-domain-icon"><Icon/></span><span className="sk-domain-title"><small>{String(i+1).padStart(2,'0')} / {d.en}</small><b>{d.title}</b><em>{d.description}</em></span><span className="sk-domain-count">{d.skills.length} مهارة</span><ChevronDown className={isOpen?'rotated':''}/></button>{isOpen&&<div className="sk-skill-grid">{d.skills.map(s=><div className="sk-skill" key={s.name}><div><b>{s.name}</b><span className={'sk-level '+(s.level==='تطبيق عملي'?'is-practical':s.level==='ممارسة جيدة'?'is-good':'is-learning')}>{s.level}</span></div><small>{s.note}</small></div>)}</div>}</article>})}{visible.length===0&&<div className="sk-empty">لا توجد نتائج مطابقة. جرّب كلمة بحث أخرى أو اختر كل المجالات.</div>}</section>
  <section className="sk-method"><div><span>03 / ENGINEERING WORKFLOW</span><h2>منهجية العمل قبل اختيار الأداة.</h2><p>لا تبدأ المعالجة باسم أداة؛ بل بفهم النظام وحدود المهمة. بعدها يأتي الفحص والتحليل، ثم التطوير أو الاستجابة، وأخيراً التحقق والتوثيق. هذه الدورة هي ما يربط البرمجة بالأمن السيبراني.</p><Link href="/research" className="sk-inline-link">مسار البحث والتطوير <ArrowUpLeft/></Link></div><div className="sk-method-flow">{workflow.map(({Icon,t,a},i)=><article key={t}><span>0{i+1}</span><Icon/><b>{t}</b><small>{a}</small></article>)}</div></section>
  <section className="sk-projects"><div className="sk-project-head"><div><span>04 / SKILLS IN PRACTICE</span><h2>المهارات داخل المشاريع</h2><p>المشاريع هي المساحة التي تتحول فيها المعرفة إلى بناء وتجربة ونتائج يمكن مراجعتها.</p></div><Link href="/projects">استعراض جميع المشاريع <ArrowUpLeft/></Link></div><div className="sk-project-grid">{projects.slice(0,3).map(p=><Link href={'/projects/'+p.slug} className="sk-project-card" key={p.slug}><span>ENGINEERING PROJECT</span><b>{p.name}</b><small>{p.summary||p.description||'مشروع تقني ضمن سجل الأعمال.'}</small><em>تفاصيل المشروع <ExternalLink/></em></Link>)}</div></section>
  <section className="sk-proof"><div><BookOpenCheck/><div><span>05 / VERIFIABLE LEARNING</span><h2>التعلّم والشهادات القابلة للتحقق</h2><p>تدعم الشهادات والمسارات التعليمية بعض مجالات المعرفة، بينما يظل التطبيق والمشاريع دليلاً منفصلاً على الممارسة.</p></div></div><Link href="/credentials">عرض الشهادات والاعتمادات <ArrowUpLeft/></Link></section>
  <aside className="sk-note"><ShieldCheck/><p><b>الشفافية المهنية:</b> مستويات المهارات وصفية وليست نسب إتقان أو ادعاء خبرة احترافية. «تطبيق عملي» يعني وجود ممارسة أو تطبيق ضمن مشاريع وتجارب شخصية أو أكاديمية، و«معرفة وتطبيق» تشير إلى مجال ما زال قيد التوسع. جميع اختبارات الأمن تُجرى ضمن نطاقات وبيئات مصرح بها.</p></aside>
  <footer className="sk-footer"><span>ARFAT ALKAMALI / SKILLS DIRECTORY</span><b>Building Systems. Securing the Future.</b><Link href="/contact">تواصل مهني <ArrowUpLeft/></Link></footer>
 </main>
}
