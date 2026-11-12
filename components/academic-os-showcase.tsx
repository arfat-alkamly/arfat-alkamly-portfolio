import Link from 'next/link';
import {
  ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, CheckSquare,
  ClipboardCheck, Clock3, FileText, GraduationCap, LayoutDashboard,
  LockKeyhole, Sparkles, Bell, Layers3, ShieldCheck, Timer
} from 'lucide-react';

const modules = [
  {icon:CheckSquare,ar:'المهام الذكية',en:'Smart Tasks',arSub:'أولويات ومواعيد ومتابعة الإنجاز',enSub:'Priorities, deadlines & progress'},
  {icon:BookOpen,ar:'المقررات',en:'Courses',arSub:'موادك وملفاتك في مساحة واحدة',enSub:'Subjects, notes & learning files'},
  {icon:CalendarDays,ar:'الجدول الجامعي',en:'Class Schedule',arSub:'محاضراتك وتنبيهات مواعيدها',enSub:'Lectures and timely reminders'},
  {icon:Timer,ar:'التركيز والمذاكرة',en:'Focus & Study',arSub:'جلسات تركيز وخطة دراسة',enSub:'Focus sessions and study plans'},
  {icon:ClipboardCheck,ar:'الاختبارات والدرجات',en:'Exams & Grades',arSub:'مواعيد واختبارات ومحاكاة الدرجات',enSub:'Exam planning and grade simulation'},
  {icon:GraduationCap,ar:'المعدل الأكاديمي',en:'GPA Tools',arSub:'حساب المعدل والدرجة المستهدفة',enSub:'GPA and target-grade calculator'},
  {icon:Sparkles,ar:'المساعد الأكاديمي',en:'Academic Assistant',arSub:'مساعدة في التخطيط والاستعداد',enSub:'Planning and exam preparation support'},
  {icon:FileText,ar:'الملفات والتنبيهات',en:'Files & Reminders',arSub:'مرفقات PDF وإشعارات محلية',enSub:'PDF materials and local notifications'}
];

export default function AcademicOSShowcase({locale='ar'}:{locale?:'ar'|'en'}) {
  const en=locale==='en';
  const repoUrl='https://github.com/arfat-alkamly/AcademicOS';
  return <main className="content-page aos-page" dir={en?'ltr':'rtl'}>
    <Link className="back-link" href={en?'/en/projects':'/projects'}><ArrowLeft size={16}/>{en?'Back to projects':'العودة إلى المشاريع'}</Link>
    <section className="aos-hero">
      <div className="aos-hero-copy">
        <div className="aos-kicker"><span>ACADEMIC PRODUCT</span><i/> FLUTTER APPLICATION</div>
        <div className="aos-status"><span/> {en?'PERSONAL PROJECT · IN DEVELOPMENT':'مشروع شخصي · قيد التطوير'}</div>
        <h1>Academic<span>OS</span></h1>
        <h2>{en?'Your academic life. One intelligent workspace.':'حياتك الأكاديمية… في مساحة واحدة.'}</h2>
        <p>{en?'A unified student companion for managing courses, tasks, lectures, study sessions, exams and academic progress — without juggling scattered tools.':'نظام يجمع إدارة المقررات والمهام والمحاضرات والمذاكرة والاختبارات ومتابعة الأداء الأكاديمي، بدل التنقل بين أدوات متفرقة.'}</p>
        <div className="aos-actions">
          <a className="aos-primary" href={repoUrl} target="_blank" rel="noreferrer">{en?'Explore source code':'استكشف المشروع على GitHub'} <ArrowUpRight size={17}/></a>
          <a className="aos-secondary" href={repoUrl+'/tree/main/test'} target="_blank" rel="noreferrer">{en?'View test files':'ملفات الاختبارات'} <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="aos-visual" aria-label={en?'Academic OS conceptual interface overview':'تصور بصري لمساحة Academic OS'}>
        <div className="aos-visual-top"><span><i/> ACADEMIC OS</span><small>STUDENT WORKSPACE / 01</small></div>
        <div className="aos-visual-main">
          <div className="aos-visual-welcome"><span>{en?'YOUR CAMPUS, ORGANIZED':'مساحتك الأكاديمية'}</span><b>{en?'Everything in sync.':'كل شيء في مكانه.'}</b></div>
          <div className="aos-visual-grid">
            <div className="aos-visual-tile aos-tile-large"><CalendarDays/><span>{en?'Class schedule':'الجدول الدراسي'}</span><b>•••</b><small>{en?'Plan your week':'نظّم أسبوعك'}</small></div>
            <div className="aos-visual-tile"><CheckSquare/><span>{en?'Tasks':'المهام'}</span><b>✓</b></div>
            <div className="aos-visual-tile"><BookOpen/><span>{en?'Courses':'المقررات'}</span><b>▤</b></div>
            <div className="aos-visual-tile"><GraduationCap/><span>{en?'GPA tools':'المعدل'}</span><b>↗</b></div>
            <div className="aos-visual-tile aos-tile-assistant"><Sparkles/><span>{en?'Academic assistant':'المساعد الأكاديمي'}</span><small>{en?'A smarter study flow':'مذاكرة أكثر تنظيمًا'}</small></div>
          </div>
        </div>
        <div className="aos-visual-foot"><span>FLUTTER / DART</span><span>LOCAL-FIRST WORKSPACE</span></div>
        <div className="aos-orbit aos-orbit-one"/><div className="aos-orbit aos-orbit-two"/>
      </div>
      <div className="aos-hero-foot"><span>01 / STUDENT PRODUCTIVITY</span><span>DESIGNED TO CONNECT THE WHOLE SEMESTER</span></div>
    </section>
    <section className="aos-modules">
      <div className="aos-section-heading"><div><span>THE WORKSPACE</span><h2>{en?'Everything a student needs, connected.':'كل ما يحتاجه الطالب… مترابط.'}</h2></div><p>{en?'Eight connected capabilities. One clear workflow.':'ثماني وحدات تغطي رحلة الطالب من التخطيط حتى تقييم الأداء.'}</p></div>
      <div className="aos-module-grid">{modules.map((m,i)=>{const Icon=m.icon;return <article className="aos-module" key={m.en}><div className="aos-module-top"><span>{String(i+1).padStart(2,'0')}</span><Icon size={19}/></div><h3>{en?m.en:m.ar}</h3><p>{en?m.enSub:m.arSub}</p></article>})}</div>
    </section>
    <section className="aos-foundation">
      <div className="aos-foundation-title"><Layers3 size={20}/><div><span>ENGINEERED FOUNDATION</span><h2>{en?'Built as an application, not just a concept.':'بنية تطبيق حقيقية، لا مجرد واجهة.'}</h2></div></div>
      <div className="aos-foundation-grid">
        <div><b>Flutter + Dart</b><span>{en?'Cross-platform application':'تطبيق متعدد المنصات'}</span></div>
        <div><b>Riverpod</b><span>{en?'State management':'إدارة حالة التطبيق'}</span></div>
        <div><b>Layered Architecture</b><span>{en?'Core · Domain · Data · UI':'فصل الطبقات والمسؤوليات'}</span></div>
        <div><b>SQLite</b><span>{en?'Local data storage':'تخزين البيانات محليًا'}</span></div>
        <div><b>Secure Storage</b><span>{en?'Selected sensitive values':'قيم حساسة مختارة'}</span></div>
        <div><b>Local Notifications</b><span>{en?'Scheduled reminders':'تنبيهات ومواعيد مجدولة'}</span></div>
      </div>
      <div className="aos-note"><LockKeyhole size={15}/><span>{en?'Selected sensitive values use secure storage. The SQLite database itself is not represented as SQLCipher-encrypted.':'تُخزّن بعض القيم الحساسة عبر Secure Storage؛ ولا ندّعي أن ملف قاعدة SQLite مشفّر بواسطة SQLCipher.'}</span></div>
    </section>
    <section className="aos-bottom">
      <div><span>ACADEMIC OS / SOURCE</span><h2>{en?'Explore the work behind the workspace.':'اكتشف ما وراء مساحة العمل.'}</h2><p>{en?'Browse the source, architecture and test files directly in the repository.':'اطّلع على الشيفرة والبنية وملفات الاختبار مباشرة من المستودع.'}</p></div>
      <a href={repoUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a>
    </section>
    <div className="aos-credit"><span>INDEPENDENTLY DEVELOPED</span><span>ARFAT ALKAMLI · SOFTWARE ENGINEERING</span></div>
  </main>;
}
