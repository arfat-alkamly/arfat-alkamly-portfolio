import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ShieldCheck, BookOpen, Layers3, BrainCircuit, Network, Database } from 'lucide-react';

type Project = {
 title:string; category:string; summary:string; overview:string; purpose:string;
 features:string[]; architecture:string[]; technologies:string[]; role:string;
 status:string; learning?:string[]; repository?:string; note?:string;
};
const projects:Record<string,Project>={
 'academic-os':{
  title:'Academic OS',category:'Personal Academic Software System',
  summary:'A personally conceived academic operating environment designed to bring student workflows, organization and intelligent assistance into one coherent system.',
  overview:'Academic OS is a long-running personal project focused on the academic experience. Its goal is to organize the student journey through a connected set of tools rather than isolated utilities. The system is approached as a product with its own structure, user experience and development roadmap.',
  purpose:'Create a unified digital workspace that helps students manage academic information, follow their work and access useful assistance from one place.',
  features:['A structured academic workspace and student-oriented interface','Organization of academic tasks and study-related information','A modular foundation that allows new academic tools to be added','Local data storage using SQLite','Exploration of on-device intelligent features through TensorFlow Lite','Cross-platform application development using Flutter and Dart'],
  architecture:['Flutter presentation layer for the application experience','Dart application logic and modular feature organization','SQLite local persistence layer','TensorFlow Lite integration path for selected intelligent capabilities'],
  technologies:['Flutter','Dart','SQLite','TensorFlow Lite'],
  role:'Personal concept and development project. The system direction, product concept and implementation work are attributed to its creator.',
  status:'Personal project · ongoing development',
  learning:['Product thinking and requirements organization','Mobile application architecture','Local database design','Integrating machine-learning capabilities into applications'],
  note:'The detailed module list and current release state can be expanded as the project specifications and screens are added.'
 },
 'student-management-system':{
  title:'Student Management System',category:'Academic Software · Java',
  summary:'A student information and management application built as a practical application of Java and object-oriented programming.',
  overview:'This project applies programming concepts to a familiar academic administration problem: organizing student-related records and operations in a structured software application.',
  purpose:'Practice translating a defined academic workflow into classes, objects and application logic.',
  features:['Student record organization','Structured application logic using object-oriented concepts','Separation of responsibilities into program components','Practical application of Java coursework'],
  architecture:['Java application layer','Object-oriented domain classes','Input, processing and record-management workflows'],
  technologies:['Java','Object-Oriented Programming'],
  role:'Academic project developed as part of practical programming study.',
  status:'Academic project',
  learning:['Class and object modeling','Encapsulation and modularity','Translating requirements into program structure']
 },
 'tourism-platform':{
  title:'Tourism Platform',category:'Web Development',
  summary:'A tourism-oriented web experience built with core front-end technologies.',
  overview:'The project explores the presentation of tourism information through a structured website, focusing on page layout, content hierarchy and browser-based interaction.',
  purpose:'Apply HTML, CSS and JavaScript to create a coherent and usable web interface.',
  features:['Structured web pages and content sections','Responsive layout and visual styling','Interactive elements implemented with JavaScript','Tourism-focused information presentation'],
  architecture:['HTML document structure','CSS presentation and layout','JavaScript interaction layer'],
  technologies:['HTML5','CSS3','JavaScript'],
  role:'Academic web-development project.',
  status:'Academic project',
  learning:['Semantic markup','Responsive interface construction','DOM interaction and front-end organization']
 },
 'cybersecurity-portfolio':{
  title:'Cybersecurity Portfolio',category:'Cybersecurity · Documentation',
  summary:'A personal cybersecurity-focused project for organizing technical work, learning records and security resources.',
  overview:'This project is a structured presentation and documentation space for cybersecurity development. It brings together security learning, practical exercises, project records and technical notes in a format that can be maintained over time.',
  purpose:'Maintain a clear and navigable record of cybersecurity learning and practical development.',
  features:['Organized security learning records','Project and lab documentation','Technical notes and resource references','A structured view of cybersecurity interests and progress'],
  architecture:['Topic-based documentation structure','Project and lab record organization','Reference and evidence links'],
  technologies:['Markdown','Git','GitHub','Security tools'],
  role:'Personal portfolio and documentation project.',
  status:'Personal project',
  learning:['Technical writing','Knowledge organization','Version-controlled documentation']
 },
 'virtual-pentesting-lab':{
  title:'Virtual Pentesting Lab',category:'Cybersecurity Lab',
  summary:'An isolated virtual environment for learning security assessment workflows and practicing in controlled lab systems.',
  overview:'The lab uses virtualization to create separated systems for cybersecurity learning. It is intended for authorized, controlled exercises, allowing tools and assessment workflows to be explored without targeting real systems.',
  purpose:'Build practical familiarity with virtual machines, Linux security environments and repeatable lab exercises.',
  features:['Virtual machine preparation and configuration','Kali Linux learning environment','Isolated target and test network concepts','Repeatable practice scenarios and lab notes'],
  architecture:['Host virtualization layer','Isolated virtual network','Security testing workstation','Lab targets and snapshots'],
  technologies:['VMware','Kali Linux','Virtual Machines','Linux'],
  role:'Personal practical learning environment.',
  status:'Personal lab project',
  learning:['Virtualization','Linux administration','Lab network isolation','Responsible security testing']
 },
 'network-security-projects':{
  title:'Network Security Projects',category:'Network Security',
  summary:'A collection of academic and practical exercises involving network infrastructure, traffic inspection and defensive monitoring.',
  overview:'This project category records network-security practice across networking concepts and defensive tools. It connects foundational networking study with observation and analysis of network behavior.',
  purpose:'Strengthen understanding of network protocols, traffic flows and defensive monitoring methods.',
  features:['Networking and protocol exercises','Packet and traffic inspection','Network monitoring concepts','Introduction to intrusion detection workflows'],
  architecture:['Network topology and communication paths','Traffic capture and inspection workflow','Monitoring and detection concepts'],
  technologies:['Cisco','Wireshark','Snort','TCP/IP'],
  role:'Academic and practical network-security work.',
  status:'Academic and practical work',
  learning:['Network troubleshooting','Packet analysis','Monitoring concepts','Defensive network design']
 },
 'aegis-titan':{
  title:'AEGIS-TITAN',category:'Personal Cyber Defense Architecture',
  summary:'A defense-first cybersecurity architecture focused on detection, deception, containment, incident response and evidence integrity.',
  overview:'AEGIS-TITAN is a personally conceived security project developed over an extended period. It is designed around defensive security operations: collecting telemetry, correlating evidence, detecting suspicious activity, containing affected systems and supporting investigation. Its design direction emphasizes controlled response and traceable evidence rather than offensive retaliation.',
  purpose:'Explore an integrated defensive architecture that connects detection engineering, deception, isolation and digital forensics into a coherent security workflow.',
  features:['Security telemetry collection and event correlation','Alerting based on traceable evidence and complete context','Deception components and honeypot concepts','Containment and isolation workflows','Digital forensics and incident response support','Evidence logging and integrity-oriented record keeping','Security operations interface and investigation workflow'],
  architecture:['Telemetry and data ingestion','Detection and correlation layer','Deception and honeypot layer','Decision and containment controls','DFIR and evidence management','SOC-facing monitoring interface'],
  technologies:['Defensive Security','Detection Engineering','Telemetry','Honeypots','Isolation','DFIR','Tauri'],
  role:'Personal project concept, architecture and ongoing development.',
  status:'Personal project · ongoing development',
  learning:['Security architecture','Detection engineering','Incident response workflows','Evidence integrity','SOC interface design'],
  note:'The project is intentionally defense-focused. Detailed implementation status and module maturity should be documented per component as development progresses.'
 },
 'cryptolab-pro':{
  title:'CryptoLab-Pro',category:'Cryptography · Web Application',
  summary:'An interactive cryptography learning platform covering classical ciphers, authenticated encryption and hashing concepts.',
  overview:'CryptoLab-Pro provides a browser-based environment for exploring cryptographic operations and observing how different techniques behave. The project includes educational demonstrations and client-side cryptographic functionality.',
  purpose:'Make cryptographic concepts easier to explore through interactive demonstrations and practical browser-based tools.',
  features:['Classical cipher demonstrations','AES-256-GCM authenticated encryption','Hashing demonstrations','Avalanche-effect exploration','Client-side file encryption workflows','Offline-first interaction design'],
  architecture:['HTML and CSS user interface','JavaScript application logic','Web Crypto API for browser cryptographic operations','Client-side processing model'],
  technologies:['JavaScript','Web Crypto API','HTML5','CSS3','AES-256-GCM'],
  role:'Personal software project.',
  status:'Public repository',
  learning:['Cryptographic primitives','Authenticated encryption','Browser security APIs','Interactive educational software'],
  repository:'https://github.com/arfat-alkamly/CryptoLab-Pro'
 },
 'vulnerability-research-lab':{
  title:'Vulnerability Research Lab',category:'Security Research',
  summary:'A dedicated repository and workspace for vulnerability research, analysis, technical notes and structured security learning.',
  overview:'The lab provides a place to organize vulnerability-related study and research artifacts. It is intended to keep observations, reproduction notes, analysis and references in a consistent structure.',
  purpose:'Develop a repeatable research workflow and maintain technical records that can be reviewed and improved.',
  features:['Research note organization','Vulnerability analysis records','Technical documentation','Reference and evidence tracking','Structured learning material'],
  architecture:['Research topic organization','Analysis and reproduction notes','Documentation and reference layer'],
  technologies:['Security Research','Technical Analysis','Documentation','GitHub'],
  role:'Personal research and learning repository.',
  status:'Public repository',
  learning:['Vulnerability analysis methodology','Clear technical reporting','Research reproducibility'],
  repository:'https://github.com/arfat-alkamly/Vulnerability-Research-Lab'
 },
 'manar-schedule-system':{
  title:'Manar Schedule System',category:'Collaborative Academic Software',
  summary:'A university scheduling and management system for academic information, schedule updates and role-based workflows.',
  overview:'Manar Schedule System is a collaborative academic software project intended to support university scheduling and related information workflows. It is presented as collaborative work rather than an individually owned product.',
  purpose:'Organize academic schedule information and support relevant user workflows through a web-based system.',
  features:['Academic schedule presentation and updates','Student-related information workflows','Role-based access concepts','Notification and schedule-change workflows'],
  architecture:['React front end','Node.js and Express application services','PostgreSQL data storage','Prisma data access layer'],
  technologies:['React','Node.js','Express','PostgreSQL','Prisma'],
  role:'Collaborative academic project.',
  status:'Collaborative project',
  repository:'https://github.com/mghalaosimi-web/manar-schedule-system'
 },
 'waynah':{
  title:'Waynah',category:'Collaborative Product',
  summary:'An Arabic-first platform concept combining bus tracking, gate management and point-of-sale workflows.',
  overview:'Waynah is a collaborative product project focused on practical location-aware and operational workflows. The product direction includes transportation visibility and related service-management functions.',
  purpose:'Explore an integrated digital service experience for bus tracking, gate operations and point-of-sale needs.',
  features:['Bus tracking and location visibility','Gate management workflows','Point-of-sale functionality','Arabic-first user experience','Web application architecture'],
  architecture:['Next.js application interface','TypeScript application code','Hono service layer','PostgreSQL and PostGIS data storage','Prisma data access'],
  technologies:['Next.js','TypeScript','Hono','PostgreSQL','PostGIS','Prisma'],
  role:'Collaborative project. This page describes the project and its technical direction without claiming sole ownership.',
  status:'Collaborative project',
  repository:'https://github.com/mghalaosimi-web/waynah'
 }
};

function ProjectVisual({slug,title}:{slug:string;title:string}){
 if(slug==='aegis-titan') return <div className="project-visual aegis-visual"><div className="visual-topline">AEGIS-TITAN <span>DEFENSIVE ARCHITECTURE / CONCEPT MAP</span></div><div className="aegis-visual-core"><div className="aegis-ring aegis-ring-one"/><div className="aegis-ring aegis-ring-two"/><div className="aegis-core"><ShieldCheck size={30}/><b>AEGIS</b><small>DEFENSE CORE</small></div><div className="aegis-node node-top">TELEMETRY</div><div className="aegis-node node-right">DETECTION</div><div className="aegis-node node-bottom">CONTAINMENT</div><div className="aegis-node node-left">DFIR / EVIDENCE</div></div><div className="visual-caption">COLLECT → CORRELATE → DETECT → CONTAIN → INVESTIGATE</div></div>;
 if(slug==='academic-os') return <div className="project-visual academic-visual-panel"><div className="visual-topline">ACADEMIC OS <span>ACADEMIC WORKSPACE / PRODUCT CONCEPT</span></div><div className="academic-dashboard"><aside><b>AK / OS</b><i/><i/><i/><i/></aside><div className="academic-main"><small>STUDENT WORKSPACE</small><h3>One connected academic space.</h3><div className="academic-widgets"><div><BookOpen size={18}/>Learning</div><div><Layers3 size={18}/>Organization</div><div><BrainCircuit size={18}/>Assistance</div></div><div className="academic-progress"><span/><span/><span/></div></div></div><div className="visual-caption">CONCEPTUAL PRODUCT VIEW · MODULES SUBJECT TO SPECIFICATION</div></div>;
 if(slug==='waynah') return <div className="project-visual waynah-visual-panel"><div className="visual-topline">WAYNAH / وينه؟ <span>CONNECTED SERVICE PLATFORM</span></div><div className="waynah-flow"><div className="waynah-hub"><span>WAYNAH</span><small>PLATFORM</small></div><div className="waynah-connectors"><i/><i/><i/></div><div className="waynah-services"><div><Network size={22}/><b>BUS TRACKING</b><small>Location visibility</small></div><div><ShieldCheck size={22}/><b>GATE MANAGEMENT</b><small>Entry operations</small></div><div><Database size={22}/><b>POINT OF SALE</b><small>Sales workflows</small></div></div></div><div className="visual-caption">ONE PLATFORM · THREE OPERATIONAL DOMAINS</div></div>;
 return <div className="project-visual generic-visual"><div className="visual-topline">{title}<span>PROJECT OVERVIEW</span></div><div className="generic-visual-mark"><Layers3 size={42}/><b>PROJECT SYSTEM</b></div></div>;
}
\nexport function generateStaticParams(){return Object.keys(projects).map(slug=>({slug}));}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=projects[slug]; if(!p) notFound();
 return <main className="project-detail-page">
  <header className="project-detail-nav"><Link href="/#projects" className="back-link"><ArrowLeft size={16}/> العودة إلى المشاريع</Link><Link href="/" className="detail-brand">ARFAT ALKAMALI <span> / PORTFOLIO</span></Link></header>
  <article className="project-detail">
   <div className="detail-eyebrow"><ShieldCheck size={15}/> PROJECT PROFILE <span>·</span> {p.category}</div>
   <h1>{p.title}</h1><p className="detail-summary">{p.summary}</p>
   <div className="detail-meta"><span>{p.status}</span><span>PROJECT DOCUMENTATION</span></div>\n   <ProjectVisual slug={slug} title={p.title}/>
   <section className="detail-section"><span className="detail-number">01 / OVERVIEW</span><h2>نظرة عامة</h2><p>{p.overview}</p></section>
   <section className="detail-section"><span className="detail-number">02 / PURPOSE</span><h2>الهدف من المشروع</h2><p>{p.purpose}</p></section>
   <section className="detail-section"><span className="detail-number">03 / FEATURES</span><h2>الخصائص والوظائف</h2><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul></section>
   <section className="detail-section"><span className="detail-number">04 / ARCHITECTURE</span><h2>البنية والمكونات</h2><div className="detail-list">{p.architecture.map((x,i)=><div key={x}><b>{String(i+1).padStart(2,'0')}</b><span>{x}</span></div>)}</div></section>
   <section className="detail-section"><span className="detail-number">05 / TECHNOLOGY STACK</span><h2>التقنيات والأدوات</h2><div className="detail-tags">{p.technologies.map(x=><span key={x}>{x}</span>)}</div></section>
   <section className="detail-section"><span className="detail-number">06 / ROLE & STATUS</span><h2>الدور وحالة المشروع</h2><p>{p.role}</p><p className="detail-status">{p.status}</p></section>
   {p.learning?.length?<section className="detail-section"><span className="detail-number">07 / LEARNING OUTCOMES</span><h2>المهارات والخبرات المرتبطة</h2><ul>{p.learning.map(x=><li key={x}>{x}</li>)}</ul></section>:null}
   {p.note?<aside className="detail-note">{p.note}</aside>:null}
   <div className="detail-actions">{p.repository?<a href={p.repository} target="_blank" rel="noreferrer">فتح المستودع على GitHub <ArrowUpRight size={16}/></a>:null}<Link href="/#projects">استعراض بقية المشاريع <ArrowUpRight size={16}/></Link></div>
  </article>
  <footer className="detail-footer">ARFAT ALKAMALI · PROJECT ARCHIVE · 2026</footer>
 </main>;
}
