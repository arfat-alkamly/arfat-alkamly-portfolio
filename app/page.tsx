'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, ShieldCheck, Code2, Network, Database, Terminal,
  Github, Linkedin, Sun, Moon, Menu, X, ExternalLink, LockKeyhole, Cpu,
  FlaskConical, Layers3, ScanSearch, FileCode2, SearchCheck, Fingerprint,
  GraduationCap, BookOpen, Workflow, Mail, Globe2, Command, Activity,
  ChevronRight, BriefcaseBusiness, Server, Bug, Radar, ShieldAlert
} from 'lucide-react';

const projects = [
  {
    name: 'AEGIS-TITAN', category: 'DEFENSIVE SECURITY PLATFORM', status: 'Private · In Development',
    description: 'A defense-first security architecture bringing together telemetry, detection, controlled deception, isolation, incident response, digital forensics, and evidence integrity.',
    tags: ['Cyber Defense', 'Detection & Response', 'DFIR', 'Security Architecture'],
    url: 'https://github.com/arfat-alkamly/aegis-titan', private: true, icon: ShieldCheck,
    detail: 'A modular defensive security vision — designed around traceable evidence and safe containment, never hack-back.'
  },
  {
    name: 'CryptoLab-Pro', category: 'CRYPTOGRAPHY · LEARNING', status: 'Academic / Personal Project',
    description: 'An offline-first cryptography learning environment covering classical ciphers, modern authenticated encryption, hashing, key derivation, and file encryption.',
    tags: ['Cryptography', 'AES-GCM', 'Web Crypto', 'JavaScript'],
    url: 'https://github.com/arfat-alkamly/CryptoLab-Pro', icon: LockKeyhole,
    detail: 'Built to make cryptographic concepts easier to explore through practical experiments.'
  },
  {
    name: 'Waynah', category: 'ARABIC SAAS · PRODUCT CONCEPT', status: 'In Development',
    description: 'An Arabic-first platform concept connecting bus tracking, gate management, and point-of-sale workflows in one coherent product experience.',
    tags: ['Product Design', 'Systems Analysis', 'Web Development', 'Arabic UX'],
    url: 'https://github.com/mghalaosimi-web/waynah', icon: Workflow,
    detail: 'A product-oriented project focused on connected operational workflows.'
  },
  {
    name: 'Manar Schedule System', category: 'ACADEMIC SOFTWARE', status: 'Academic Project',
    description: 'A university scheduling system concept focused on structured academic data, timetable organization, and practical software workflows.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Systems Design'],
    url: 'https://github.com/arfat-alkamly/manar-schedule-system', icon: GraduationCap,
    detail: 'An applied academic project shaped around a real university coordination need.'
  },
  {
    name: 'Vulnerability Research Lab', category: 'SECURITY RESEARCH', status: 'Research Lab',
    description: 'A controlled and legal learning environment for studying vulnerability classes, recording observations, and improving defensive understanding.',
    tags: ['Vulnerability Analysis', 'Research', 'Documentation', 'Defensive Security'],
    url: 'https://github.com/arfat-alkamly/Vulnerability-Research-Lab', icon: FlaskConical,
    detail: 'Research and validation are performed in controlled environments.'
  }
];

const skillGroups = [
  { icon: ShieldCheck, title: 'Cybersecurity', ar: 'الأمن السيبراني', items: ['Security fundamentals', 'Defensive security concepts', 'Cryptography', 'Vulnerability analysis', 'Digital forensics foundations'] },
  { icon: Network, title: 'Networks & Systems', ar: 'الشبكات والأنظمة', items: ['Computer networking', 'Linux fundamentals', 'Kali Linux environment', 'Operating systems', 'Network security foundations'] },
  { icon: Code2, title: 'Programming & Web', ar: 'البرمجة وتطوير الويب', items: ['Java & OOP', 'HTML5 · CSS3', 'JavaScript fundamentals', 'Python studies', 'C# fundamentals'] },
  { icon: Database, title: 'Databases', ar: 'قواعد البيانات', items: ['SQL', 'PL/SQL', 'Oracle Database', 'Relational data modeling'] },
  { icon: Terminal, title: 'Developer Toolkit', ar: 'أدوات التطوير', items: ['Git & GitHub', 'Visual Studio Code', 'Visual Studio', 'Command-line workflows'] },
  { icon: FlaskConical, title: 'Research & Practice', ar: 'البحث والتطبيق', items: ['Technical documentation', 'Controlled lab practice', 'Problem analysis', 'Project-based learning'] }
];

const modules = [
  { icon: ScanSearch, title: 'Source Code Analysis', ar: 'فحص الشيفرات البرمجية', text: 'A planned workflow for reviewing source code and surfacing security-relevant findings.' },
  { icon: SearchCheck, title: 'Public Repository Review', ar: 'فحص المستودعات العامة', text: 'A review workflow for publicly accessible repositories, with a defensive and authorized scope.' },
  { icon: Radar, title: 'Security Telemetry', ar: 'مراقبة المؤشرات الأمنية', text: 'A design focus on collecting and correlating security signals for investigation.' },
  { icon: ShieldAlert, title: 'Containment & Response', ar: 'العزل والاستجابة', text: 'Controlled isolation concepts and incident-response workflows.' },
  { icon: Fingerprint, title: 'Evidence & DFIR', ar: 'الأدلة والتحليل الجنائي', text: 'Traceable event records and digital-forensics-oriented evidence handling.' },
  { icon: Bug, title: 'Deception & Honeypots', ar: 'الخداع الأمني ومصائد الاختراق', text: 'Defensive deception concepts intended to improve visibility into suspicious activity.' }
];

const navItems = [
  ['home', 'Overview', 'الرئيسية', Command],
  ['profile', 'Profile', 'نبذة عني', Fingerprint],
  ['expertise', 'Expertise', 'المهارات', Layers3],
  ['projects', 'Projects', 'المشاريع', BriefcaseBusiness],
  ['platform', 'Security Work', 'المنظومة الأمنية', ShieldCheck],
  ['journey', 'Journey', 'المسار الأكاديمي', GraduationCap],
  ['contact', 'Contact', 'التواصل', Mail]
] as const;

export default function Home() {
  const [ar, setAr] = useState(false);
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);
  const t = (en: string, arabic: string) => ar ? arabic : en;

  useEffect(() => {
    document.documentElement.lang = ar ? 'ar' : 'en';
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
  }, [ar]);

  return (
    <main className={(light ? 'light ' : '') + (ar ? 'arabic' : '')}>
      <aside className={'sidebar' + (menu ? ' sidebar-open' : '')}>
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <b>AK</b><span>ARFAT <i>ALKAMALI</i><small>CYBERSECURITY · TECHNOLOGY</small></span>
        </a>
        <div className="side-caption">{t('WORKSPACE', 'التنقل')}</div>
        <nav className="side-nav">
          {navItems.map(([id, en, aa, Icon], index) => (
            <a key={id} href={'#' + id} onClick={() => setMenu(false)}>
              <Icon size={17}/><span>{t(en, aa)}</span><small>0{index + 1}</small>
            </a>
          ))}
        </nav>
        <div className="side-bottom">
          <div className="availability"><span className="live-dot"/><div>{t('OPEN TO LEARNING','متاح للتعلم')}<small>{t('Collaboration · Technical exchange','التعاون · تبادل الخبرات')}</small></div></div>
          <div className="side-social">
            <a href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17}/></a>
            <a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
            <a href="https://www.credly.com/users/arfat-alkamly/badges/credly" target="_blank" rel="noopener noreferrer" aria-label="Credly"><ExternalLink size={17}/></a>
          </div>
          <small className="side-copy">© 2026 ARFAT ALKAMALI</small>
        </div>
      </aside>

      <div className="site-shell">
        <header className="topbar">
          <div className="crumb"><span>AK</span><ChevronRight size={13}/>{t('PERSONAL PORTFOLIO','الملف المهني')}</div>
          <div className="actions">
            <button onClick={() => setAr(!ar)} aria-label="Switch language">{ar ? 'EN' : 'عربي'}</button>
            <button onClick={() => setLight(!light)} aria-label="Switch theme">{light ? <Moon size={16}/> : <Sun size={16}/>}</button>
            <button className="mobile" onClick={() => setMenu(!menu)} aria-label="Open navigation">{menu ? <X/> : <Menu/>}</button>
          </div>
        </header>

        <section className="hero content" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span/> {t('CYBERSECURITY STUDENT · TECHNOLOGY BUILDER','طالب أمن سيبراني · مهتم ببناء التقنية')}</div>
            <h1>{t('Building with purpose.','أبني بهدف.')}<br/><em>{t('Securing by design.','وأحمي بالتصميم.')}</em></h1>
            <p className="intro">{t('I’m Arfat Abdullah Hussein Al-Kamly — a Level 3 Cybersecurity student focused on defensive security, software development, systems thinking, and practical technical research.','أنا عرفات عبدالله حسين الكاملي، طالب أمن سيبراني في المستوى الثالث، أركز على الأمن الدفاعي وتطوير البرمجيات وتحليل الأنظمة والبحث التقني التطبيقي.')}</p>
            <div className="hero-actions">
              <a className="primary" href="#projects">{t('Explore selected work','استكشف المشاريع')} <ArrowUpRight size={17}/></a>
              <a className="secondary" href="#profile">{t('Discover my profile','تعرّف على مساري')} <ArrowDown size={15}/></a>
            </div>
            <div className="hero-meta"><span><GraduationCap size={15}/> {t('Al-Manar University College','كلية المنار الجامعية')}</span><span><Globe2 size={15}/> Yemen</span></div>
          </div>
          <div className="hero-art" aria-label="Cybersecurity identity illustration">
            <div className="art-grid"/>
            <div className="ring ring-a"/><div className="ring ring-b"/><div className="ring ring-c"/>
            <div className="art-core"><div className="core-mark"><ShieldCheck size={47}/></div><strong>AK<span>.</span></strong><small>SECURE BY DESIGN</small></div>
            <div className="art-chip chip-top"><LockKeyhole size={15}/><span>DEFENSIVE<br/>SECURITY</span></div>
            <div className="art-chip chip-bottom"><Activity size={15}/><span>BUILD · TEST<br/>IMPROVE</span></div>
            <div className="coordinate">15°21'N<br/>44°12'E</div>
          </div>
        </section>

        <div className="signal-strip"><span>01 / DEFEND</span><i/><span>02 / ENGINEER</span><i/><span>03 / RESEARCH</span><i/><span>04 / IMPROVE</span></div>

        <section className="section content" id="profile">
          <div className="section-head"><div><label>01 / {t('PROFILE','الملف الشخصي')}</label><h2>{t('A curious mind. A defensive mindset.','عقلية تبحث، ومنهجية تحمي.')}</h2></div><span className="section-index">01—07</span></div>
          <div className="profile-grid">
            <p className="profile-lead">{t('I’m building my career at the intersection of cybersecurity and software engineering — turning academic foundations into practical systems, documenting what I learn, and approaching technology with responsibility.','أبني مساري عند تقاطع الأمن السيبراني وهندسة البرمجيات؛ أحوّل الأساس الأكاديمي إلى تطبيقات عملية، وأوثّق ما أتعلمه، وأتعامل مع التقنية بمسؤولية.')}</p>
            <div className="profile-facts">
              <div><span>{t('CURRENT ROLE','الصفة الحالية')}</span><b>{t('Cybersecurity Student · Level 3','طالب أمن سيبراني · المستوى الثالث')}</b></div>
              <div><span>{t('INSTITUTION','الجهة التعليمية')}</span><b>{t('Al-Manar University College','كلية المنار الجامعية')}</b></div>
              <div><span>{t('PRIMARY INTEREST','الاهتمام الأساسي')}</span><b>{t('Defensive Cybersecurity','الأمن السيبراني الدفاعي')}</b></div>
              <div><span>{t('WORKING STYLE','منهجية العمل')}</span><b>{t('Learn · Build · Validate','تعلّم · ابنِ · تحقّق')}</b></div>
            </div>
          </div>
        </section>

        <section className="section content" id="expertise">
          <div className="section-head"><div><label>02 / {t('TECHNICAL EXPERTISE','المهارات التقنية')}</label><h2>{t('Skills built through study and practice.','مهارات تتطور بالدراسة والتطبيق.')}</h2><p className="section-sub">{t('A transparent view of the areas I’m studying, using, and strengthening.','عرض واضح للمجالات التي أدرسها وأطبقها وأعمل على تطويرها.')}</p></div><span className="section-index">02—07</span></div>
          <div className="skill-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}>
                <div className="card-top"><span className="icon-box"><Icon size={19}/></span><small>0{i + 1}</small></div>
                <h3>{t(group.title, group.ar)}</h3>
                <ul>{group.items.map(item => <li key={item}><span/>{item}</li>)}</ul>
              </article>;
            })}
          </div>
          <p className="skill-note"><span/> {t('Skills are presented as learning and practice areas, not inflated proficiency ratings.','المهارات معروضة كمجالات دراسة وممارسة، دون ادعاء مستويات احتراف غير موثقة.')}</p>
        </section>

        <section className="section content" id="projects">
          <div className="section-head"><div><label>03 / {t('SELECTED PROJECTS','المشاريع المختارة')}</label><h2>{t('Ideas turned into working direction.','أفكار تتحول إلى مشاريع.')}</h2><p className="section-sub">{t('Academic, personal, and research-oriented work — each with a clear purpose.','مشاريع أكاديمية وشخصية وبحثية، لكل منها هدف واضح.')}</p></div><span className="section-index">03—07</span></div>
          <div className="project-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <article className="project-card" key={project.name}>
                <div className="project-card-head"><span className="icon-box"><Icon size={20}/></span><span className="project-number">PROJECT / 0{i + 1}</span></div>
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-detail">{project.detail}</div>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-foot"><span className="status-dot"/><span>{project.status}</span>{project.private ? <span className="private-label"><LockKeyhole size={12}/> PRIVATE</span> : <a href={project.url} target="_blank" rel="noopener noreferrer">{t('Repository','المستودع')} <ArrowUpRight size={14}/></a>}</div>
              </article>;
            })}
          </div>
        </section>

        <section className="section content" id="platform">
          <div className="section-head"><div><label>04 / {t('SECURITY ENGINEERING','العمل الأمني')}</label><h2>{t('A defensive system mindset.','منظومة بعقلية دفاعية.')}</h2><p className="section-sub">{t('Security capabilities and modules associated with my AEGIS-TITAN work. The descriptions distinguish design goals from verified live services.','قدرات ووحدات ضمن مشروع AEGIS-TITAN، مع التمييز بين أهداف التصميم والخدمات التي تم التحقق من تشغيلها.')}</p></div><span className="section-index">04—07</span></div>
          <div className="platform-banner"><div className="platform-symbol"><ShieldCheck size={32}/></div><div><span>AEGIS-TITAN / DEFENSIVE SECURITY ARCHITECTURE</span><h3>{t('Visibility. Evidence. Containment.','رؤية أمنية. أدلة موثوقة. احتواء منضبط.')}</h3><p>{t('A defense-only architecture concept focused on detection, investigation, and safe response. No offensive actions or hack-back.','تصور معماري دفاعي يركز على الكشف والتحقيق والاستجابة الآمنة، دون هجمات مضادة أو اختراق هجومي.')}</p></div><span className="private-label"><LockKeyhole size={12}/> PRIVATE PROJECT</span></div>
          <div className="module-grid">
            {modules.map((module, i) => {
              const Icon = module.icon;
              return <article key={module.title}><span className="module-icon"><Icon size={18}/></span><small>MODULE / 0{i + 1}</small><h3>{t(module.title, module.ar)}</h3><p>{module.text}</p></article>;
            })}
          </div>
          <div className="scope-note"><Activity size={17}/><p>{t('Capability note: these are documented project modules and engineering objectives. A module should only be described as operational when its implementation and test evidence are publicly verifiable.','تنويه: هذه وحدات وأهداف هندسية موثقة ضمن المشروع. لا توصف أي وحدة بأنها تعمل فعلياً إلا عند توفر تنفيذ واختبارات يمكن التحقق منها.')}</p></div>
        </section>

        <section className="section content" id="journey">
          <div className="section-head"><div><label>05 / {t('ACADEMIC JOURNEY','المسار الأكاديمي')}</label><h2>{t('Learning with direction.','تعلّم بخطوات واضحة.')}</h2></div><span className="section-index">05—07</span></div>
          <div className="timeline">
            <article><div className="timeline-marker"><BookOpen size={17}/></div><div><small>2024 — 2026</small><h3>{t('Academic Foundations','التأسيس الأكاديمي')}</h3><p>{t('Completed the first and second academic levels, building foundations in programming, databases, networking, mathematics, and information security.','إكمال المستويين الأول والثاني، وبناء أساس في البرمجة وقواعد البيانات والشبكات والرياضيات وأمن المعلومات.')}</p></div></article>
            <article><div className="timeline-marker"><GraduationCap size={17}/></div><div><small>2026 — PRESENT</small><h3>{t('Level 3 · Cybersecurity','المستوى الثالث · الأمن السيبراني')}</h3><p>{t('Continuing focused study across cryptography, information security, web development, software fundamentals, and AI for cybersecurity.','مواصلة الدراسة في التشفير وأمن المعلومات وتطوير الويب وأساسيات البرمجيات والذكاء الاصطناعي للأمن السيبراني.')}</p></div></article>
            <article><div className="timeline-marker"><Layers3 size={17}/></div><div><small>2026 — PRESENT</small><h3>{t('Scientific Committee','اللجنة العلمية')}</h3><p>{t('Coordinating academic resources and communication for Cybersecurity and IT students at Al-Manar University College.','تنسيق المصادر الأكاديمية والتواصل لطلاب الأمن السيبراني وتقنية المعلومات في كلية المنار الجامعية.')}</p></div></article>
            <article><div className="timeline-marker"><Cpu size={17}/></div><div><small>ONGOING</small><h3>{t('Independent Building & Research','البناء والبحث المستقل')}</h3><p>{t('Developing practical projects, strengthening technical foundations, and documenting progress through hands-on work.','تطوير مشاريع عملية وتعزيز الأساس التقني وتوثيق التقدم من خلال التطبيق.')}</p></div></article>
          </div>
        </section>

        <section className="section content" id="approach">
          <div className="section-head"><div><label>06 / {t('ENGINEERING PRINCIPLES','مبادئ العمل')}</label><h2>{t('How I approach technology.','كيف أتعامل مع التقنية.')}</h2></div><span className="section-index">06—07</span></div>
          <div className="principle-grid">
            <article><ShieldCheck/><h3>{t('Defense first','الدفاع أولاً')}</h3><p>{t('Build with safety, authorization, and responsible security practice at the center.','البناء مع وضع السلامة والتفويض والممارسة الأمنية المسؤولة في المقدمة.')}</p></article>
            <article><FileCode2/><h3>{t('Understand the system','افهم النظام')}</h3><p>{t('Prefer clear architecture, maintainable code, and thoughtful technical decisions.','الاهتمام بالمعمارية الواضحة والشيفرة القابلة للصيانة والقرارات المدروسة.')}</p></article>
            <article><SearchCheck/><h3>{t('Verify, then claim','تحقق قبل أن تدّعي')}</h3><p>{t('Separate implemented features from ideas, prototypes, and future objectives.','الفصل بين الخصائص المنفذة والأفكار والنماذج الأولية والأهداف المستقبلية.')}</p></article>
          </div>
        </section>

        <section className="contact content" id="contact">
          <div><label>07 / {t('CONTACT','التواصل')}</label><h2>{t('Let’s build something meaningful.','لنبنِ شيئاً له قيمة.')}</h2><p>{t('Open to technical conversations, responsible collaboration, and opportunities to learn and contribute.','أرحب بالنقاشات التقنية والتعاون المسؤول والفرص التي تتيح التعلم والمساهمة.')}</p></div>
          <div className="contact-actions"><a className="primary" href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17}/></a><a className="outline-link" href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17}/></a></div>
        </section>

        <footer><a className="footer-brand" href="#home">AK<span>.</span> ARFAT ALKAMALI</a><small>{t('Designed around clarity, responsibility, and continuous growth.','تصميم يعكس الوضوح والمسؤولية والتطور المستمر.')}</small><a href="#home">{t('BACK TO TOP ↑','العودة للأعلى ↑')}</a></footer>
      </div>
    </main>
  );
}
