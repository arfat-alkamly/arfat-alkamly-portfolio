import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight, ShieldCheck, Code2, FlaskConical, GraduationCap, Fingerprint, Network, Terminal, Github, Linkedin, Award, Compass, Layers3 } from 'lucide-react';
import { projects } from '../data/projects';
import './home.css';

const disciplines = [
  { icon: Fingerprint, number: '01', title: 'البحث الأمني', text: 'مراجعة أمن التطبيقات، تحليل السلوك، دراسة الثغرات، وكتابة الملاحظات الفنية بصورة قابلة للتحقق.' },
  { icon: Network, number: '02', title: 'الأمن الدفاعي والشبكات', text: 'مفاهيم الرصد والتحليل والاستجابة للحوادث، أمن الشبكات، والتحقيق الجنائي الرقمي.' },
  { icon: Terminal, number: '03', title: 'هندسة البرمجيات', text: 'بناء تطبيقات وأدوات تقنية، تصميم الحلول، وتنظيم الشيفرات وتحويل الأفكار إلى منتجات عملية.' }
];

const skillGroups = [
  { title: 'Cybersecurity', detail: 'Defensive Security · Security Research · DFIR · Network Security' },
  { title: 'Development', detail: 'Python · C# · Dart / Flutter · JavaScript · SQL' },
  { title: 'Systems & Tools', detail: 'Linux · Kali Linux · Wireshark · Cisco · Git & GitHub' }
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <main className="home-v2">
      <section className="hv-hero" aria-labelledby="home-title">
        <div className="hv-hero-grid" aria-hidden="true" />
        <div className="hv-hero-copy">
          <div className="hv-overline"><span className="hv-live-dot" /> INDEPENDENT TECHNOLOGY PORTFOLIO <span className="hv-overline-line" /></div>
          <p className="hv-role">CYBERSECURITY <i>×</i> SOFTWARE ENGINEERING</p>
          <h1 id="home-title">عرفات <span>الكاملي</span></h1>
          <h2>Building Systems.<br /><em>Securing the Future.</em></h2>
          <p className="hv-intro">طالب أمن سيبراني وشبكات، ومطوّر مشاريع تقنية مستقل. أهتم بالبحث الأمني، وهندسة الدفاع السيبراني، وبناء البرمجيات والأنظمة التي تجمع بين الفكرة والتنفيذ.</p>
          <div className="hv-actions">
            <Link href="/projects" className="hv-button hv-button-primary">استكشف المشاريع <ArrowUpLeft size={17} /></Link>
            <Link href="/about" className="hv-button hv-button-ghost">اكتشف مساري <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hv-hero-meta"><span>YEMEN</span><b /> <span>CYBERSECURITY & NETWORKS</span><b /> <span>LEVEL 3</span></div>
        </div>
        <div className="hv-hero-visual" aria-label="رمز بصري لهوية عرفات الكاملي التقنية">
          <div className="hv-visual-top"><span>AK / 01</span><span>ENGINEERING PROFILE</span></div>
          <div className="hv-radar hv-radar-a" /><div className="hv-radar hv-radar-b" /><div className="hv-radar hv-radar-c" />
          <div className="hv-cross hv-cross-one" /><div className="hv-cross hv-cross-two" />
          <div className="hv-monogram"><ShieldCheck size={58} strokeWidth={1.15} /><strong>AK</strong></div>
          <div className="hv-visual-caption"><span>RESEARCH</span><span>BUILD</span><span>DEFEND</span></div>
          <div className="hv-visual-foot"><span>PERSONAL ENGINEERING ARCHIVE</span><span>EST. 2024</span></div>
        </div>
        <div className="hv-scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="hv-disciplines" aria-labelledby="disciplines-title">
        <div className="hv-section-top"><span>01 / AREAS OF FOCUS</span><span>CORE DISCIPLINES</span></div>
        <div className="hv-section-intro"><div><p className="hv-kicker">WHAT I WORK ON</p><h2 id="disciplines-title">ثلاثة مسارات،<br /><em>رؤية هندسية واحدة.</em></h2></div><p>أجمع بين فهم الأنظمة، التفكير الأمني، والتطوير البرمجي لبناء حلول تقنية مدروسة.</p></div>
        <div className="hv-discipline-grid">
          {disciplines.map((item) => <article className="hv-discipline-card" key={item.number}><div className="hv-card-head"><item.icon size={23} strokeWidth={1.5} /><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="hv-card-rule" /></article>)}
        </div>
      </section>

      <section className="hv-work" id="featured" aria-labelledby="work-title">
        <div className="hv-section-top"><span>02 / SELECTED WORK</span><span>ENGINEERING ARCHIVE</span></div>
        <div className="hv-section-intro"><div><p className="hv-kicker">BUILT WITH INTENT</p><h2 id="work-title">من الفكرة<br /><em>إلى التنفيذ.</em></h2></div><div className="hv-work-aside"><p>نماذج مختارة من المشاريع الشخصية والأكاديمية والتعاونية. لكل مشروع نطاقه ودوره وتوثيقه.</p><Link href="/projects">عرض جميع المشاريع <ArrowUpLeft size={16} /></Link></div></div>
        <div className="hv-project-grid">
          {featured.map((project, index) => <Link href={'/projects/' + project.slug} className={'hv-project-card hv-project-' + (index + 1)} key={project.slug}>
            <div className="hv-project-top"><span>0{index + 1} / FEATURED</span><ArrowUpLeft size={18} /></div>
            <div className="hv-project-symbol">{index === 0 ? <ShieldCheck size={36} /> : index === 1 ? <Code2 size={34} /> : <Layers3 size={34} />}</div>
            <div className="hv-project-copy"><span className="hv-project-label">{project.label}</span><h3>{project.name}</h3><p>{project.summary}</p></div>
            <div className="hv-project-bottom"><span>{project.stack.slice(0, 3).join(' / ')}</span><b>EXPLORE <ArrowUpLeft size={14} /></b></div>
          </Link>)}
        </div>
      </section>

      <section className="hv-capabilities" aria-labelledby="capabilities-title">
        <div className="hv-section-top"><span>03 / TECHNICAL CAPABILITIES</span><span>TOOLS & METHODS</span></div>
        <div className="hv-cap-layout"><div><p className="hv-kicker">TECHNICAL FOUNDATION</p><h2 id="capabilities-title">معرفة تقنية<br /><em>تتحول إلى ممارسة.</em></h2><p className="hv-cap-intro">مجالات وأدوات أعمل على توظيفها في المشاريع والتطبيق العملي، مع تطوير مستمر للمهارات.</p><Link href="/skills" className="hv-text-link">استعراض المهارات والتقنيات <ArrowUpLeft size={16} /></Link></div>
          <div className="hv-skill-list">{skillGroups.map((group, index) => <div className="hv-skill-row" key={group.title}><span>0{index + 1}</span><div><h3>{group.title}</h3><p>{group.detail}</p></div><ArrowUpLeft size={17} /></div>)}</div>
        </div>
      </section>

      <section className="hv-credentials">
        <div className="hv-credential-icon"><Award size={29} /></div>
        <div><p className="hv-kicker">LEARNING / VALIDATION</p><h2>التعلّم المستمر،<em> والتوثيق المهني.</em></h2><p>مسار أكاديمي في الأمن السيبراني والشبكات، إلى جانب شهادات تقنية ودورات موثقة.</p></div>
        <Link href="/credentials" className="hv-button hv-button-ghost">الشهادات والمؤهلات <ArrowUpLeft size={16} /></Link>
      </section>

      <section className="hv-contact">
        <div className="hv-contact-orbit" aria-hidden="true" />
        <div className="hv-contact-content"><p className="hv-kicker">04 / CONNECT & COLLABORATE</p><h2>لنبنِ شيئًا<br /><em>يستحق أن يُؤمَن.</em></h2><p>للتواصل المهني، ومناقشة المشاريع التقنية، والبحث الأمني، وفرص التعاون.</p><Link href="/contact" className="hv-button hv-button-primary">ابدأ التواصل <ArrowUpLeft size={17} /></Link></div>
        <div className="hv-social-links"><a href="https://github.com/arfat-alkamly" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/arfat-alkamly-399676409" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://www.credly.com/users/arfat-alkamly" target="_blank" rel="noopener noreferrer"><GraduationCap size={18} /> Credly <ArrowUpRight size={14} /></a></div>
        <div className="hv-contact-index">AK<span> / 2026</span></div>
      </section>
    </main>
  );
}
