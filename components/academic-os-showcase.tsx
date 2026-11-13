import Link from 'next/link';
import {
  ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, CheckSquare,
  ClipboardCheck, FileText, GraduationCap, LockKeyhole, Sparkles,
  Layers3, Timer, ChevronDown, Workflow, Target, Bell, UserRound
} from 'lucide-react';

const modules = [
  {icon:CheckSquare,ar:'المهام الذكية',en:'Smart Tasks',arSub:'رتّب الأولويات وتابع الإنجاز',enSub:'Prioritize work and track progress',arDetail:['تنظيم المهام الدراسية في مساحة واحدة','متابعة المواعيد والأولويات','رؤية أوضح لما أُنجز وما تبقّى'],enDetail:['Keep academic work in one place','Track deadlines and priorities','See what is done and what remains'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib/presentation/task'},
  {icon:BookOpen,ar:'المقررات',en:'Courses',arSub:'موادك ومحتواك الدراسي',enSub:'Your subjects and study material',arDetail:['إدارة المقررات الدراسية','ربط المحتوى والملفات بالمادة','الوصول إلى مواد الفصل بسهولة'],enDetail:['Manage enrolled courses','Keep related content and files together','Find semester material faster'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib/presentation/course'},
  {icon:CalendarDays,ar:'الجدول الجامعي',en:'Class Schedule',arSub:'نظّم أسبوعك ومحاضراتك',enSub:'Organize your week and lectures',arDetail:['عرض وتنظيم مواعيد المحاضرات','ربط اليوم الدراسي بخطة المهام','تقليل تشتت المواعيد بين الأدوات'],enDetail:['Organize lecture times','Connect the class week with task planning','Keep dates out of scattered tools'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib/presentation'},
  {icon:Timer,ar:'التركيز والمذاكرة',en:'Focus & Study',arSub:'جلسات تركيز وخطة دراسة',enSub:'Focus sessions and study planning',arDetail:['تنظيم جلسات المذاكرة','توزيع وقت الدراسة على المواد','متابعة الالتزام بخطة المذاكرة'],enDetail:['Structure focused study sessions','Allocate study time across subjects','Follow your study plan'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib'},
  {icon:ClipboardCheck,ar:'الاختبارات والدرجات',en:'Exams & Grades',arSub:'استعد للاختبارات وتابع نتائجك',enSub:'Prepare for exams and track results',arDetail:['تنظيم الاستعداد للاختبارات','تسجيل ومراجعة الدرجات','محاكاة النتائج المستهدفة عند التخطيط'],enDetail:['Organize exam preparation','Record and review grades','Explore target outcomes while planning'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib'},
  {icon:GraduationCap,ar:'المعدل الأكاديمي',en:'GPA Tools',arSub:'افهم معدلك والدرجة المستهدفة',enSub:'Understand GPA and target grades',arDetail:['حساب المعدل الأكاديمي','استكشاف أثر الدرجات على المعدل','التخطيط لهدف أكاديمي واضح'],enDetail:['Calculate academic GPA','Explore how grades affect results','Plan toward a clear academic target'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/lib'},
  {icon:Sparkles,ar:'المساعد الأكاديمي',en:'Academic Assistant',arSub:'مساندة في تنظيم الدراسة',enSub:'Support for organizing your studies',arDetail:['واجهة مخصصة للمساعد الأكاديمي','دعم تجربة التخطيط والاستعداد','جزء من مساحة العمل الأكاديمية الموحدة'],enDetail:['A dedicated academic assistant interface','Support for planning and preparation workflows','Part of the unified student workspace'],source:'https://github.com/arfat-alkamly/AcademicOS/blob/main/lib/presentation/ai_assistant/academic_ai_screen.dart'},
  {icon:FileText,ar:'الملفات والتنبيهات',en:'Files & Reminders',arSub:'موادك وتذكيراتك في متناولك',enSub:'Materials and reminders within reach',arDetail:['التعامل مع ملفات ومرفقات الدراسة','تنبيهات محلية للمواعيد','الاحتفاظ بسياق المادة والمهام'],enDetail:['Work with study files and attachments','Local reminders for important dates','Keep course and task context together'],source:'https://github.com/arfat-alkamly/AcademicOS/tree/main/test'}
];

const journey = [
  {icon:Target,ar:'نظّم الفصل',en:'Set up the semester',arText:'ابدأ بالمقررات والجدول والمهام الأساسية.',enText:'Start with courses, the timetable and key tasks.'},
  {icon:CalendarDays,ar:'خطّط أسبوعك',en:'Plan your week',arText:'حوّل الالتزامات إلى خطة واضحة قابلة للمتابعة.',enText:'Turn commitments into a clear, trackable plan.'},
  {icon:Timer,ar:'ادرس بتركيز',en:'Study with focus',arText:'استخدم جلسات المذاكرة وتابع تقدمك.',enText:'Use study sessions and keep track of progress.'},
  {icon:GraduationCap,ar:'قيّم أداءك',en:'Review your progress',arText:'راجع الاختبارات والدرجات والمعدل.',enText:'Review exams, grades and GPA.'}
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
        <p>{en?'A connected student workspace for courses, tasks, lectures, study sessions, exams and academic progress — designed to bring the semester into one clear workflow.':'مساحة أكاديمية تجمع المقررات والمهام والمحاضرات والمذاكرة والاختبارات ومتابعة الأداء؛ لتجعل الفصل الدراسي أكثر تنظيمًا ووضوحًا.'}</p>
        <div className="aos-actions">
          <a className="aos-primary" href={repoUrl} target="_blank" rel="noreferrer">{en?'Explore the project':'استكشف المشروع على GitHub'} <ArrowUpRight size={17}/></a>
          <a className="aos-secondary" href={repoUrl+'/tree/main/test'} target="_blank" rel="noreferrer">{en?'Explore test sources':'استكشف ملفات الاختبارات'} <ArrowUpRight size={16}/></a>
        </div>
        <div className="aos-proofline"><span><CheckSquare size={13}/>{en?'Public source code':'شيفرة مصدرية منشورة'}</span><span><Layers3 size={13}/>{en?'Layered architecture':'بنية متعددة الطبقات'}</span><span><Bell size={13}/>{en?'Local reminders':'تذكيرات محلية'}</span></div>
      </div>
      <div className="aos-visual" aria-label={en?'Conceptual AcademicOS workspace illustration':'تصور توضيحي لمساحة AcademicOS'}>
        <div className="aos-visual-top"><span><i/> ACADEMIC OS</span><small>STUDENT WORKSPACE / 01</small></div>
        <div className="aos-visual-main">
          <div className="aos-visual-welcome"><span>{en?'YOUR CAMPUS, ORGANIZED':'مساحتك الأكاديمية'}</span><b>{en?'Everything in sync.':'كل شيء في مكانه.'}</b></div>
          <div className="aos-visual-grid">
            <div className="aos-visual-tile aos-tile-large"><CalendarDays/><span>{en?'Class schedule':'الجدول الدراسي'}</span><b>•••</b><small>{en?'Plan your week':'نظّم أسبوعك'}</small></div>
            <div className="aos-visual-tile"><CheckSquare/><span>{en?'Tasks':'المهام'}</span><b>✓</b></div>
            <div className="aos-visual-tile"><BookOpen/><span>{en?'Courses':'المقررات'}</span><b>▤</b></div>
            <div className="aos-visual-tile"><GraduationCap/><span>{en?'GPA tools':'المعدل'}</span><b>↗</b></div>
            <div className="aos-visual-tile aos-tile-assistant"><Sparkles/><span>{en?'Academic assistant':'المساعد الأكاديمي'}</span><small>{en?'A more organized study flow':'مذاكرة أكثر تنظيمًا'}</small></div>
          </div>
        </div>
        <div className="aos-visual-foot"><span>FLUTTER / DART</span><span>CONCEPTUAL PRODUCT PREVIEW</span></div>
        <div className="aos-orbit aos-orbit-one"/><div className="aos-orbit aos-orbit-two"/>
        <span className="aos-visual-caption">{en?'Conceptual interface illustration':'تصور بصري توضيحي وليس لقطة من التطبيق'}</span>
      </div>
      <div className="aos-hero-foot"><span>01 / STUDENT PRODUCTIVITY</span><span>DESIGNED TO CONNECT THE WHOLE SEMESTER</span></div>
    </section>

    <section className="aos-journey">
      <div className="aos-section-heading"><div><span>FROM PLAN TO PROGRESS</span><h2>{en?'A clearer rhythm for the semester.':'رحلة دراسية أكثر تنظيمًا.'}</h2></div><p>{en?'A simple flow that connects everyday academic work.':'مسار يربط التخطيط اليومي بالمذاكرة وتقييم الأداء.'}</p></div>
      <div className="aos-journey-grid">{journey.map((step,i)=>{const Icon=step.icon;return <article className="aos-journey-step" key={step.en}><div className="aos-journey-top"><span>{String(i+1).padStart(2,'0')}</span><Icon size={19}/></div><h3>{en?step.en:step.ar}</h3><p>{en?step.enText:step.arText}</p></article>})}</div>
    </section>

    <section className="aos-modules">
      <div className="aos-section-heading"><div><span>THE WORKSPACE / 08 CAPABILITIES</span><h2>{en?'Eight capabilities. One connected workspace.':'ثماني وحدات… ومساحة عمل واحدة.'}</h2></div><p>{en?'Open any capability to see what it brings to the student workflow.':'افتح أي وحدة للتعرّف على دورها، وانتقل مباشرة إلى ملفاتها المصدرية.'}</p></div>
      <div className="aos-module-grid">{modules.map((m,i)=>{const Icon=m.icon;return <details className="aos-module" key={m.en}><summary><div className="aos-module-top"><span>{String(i+1).padStart(2,'0')}</span><Icon size={19}/><ChevronDown className="aos-module-chevron" size={16}/></div><h3>{en?m.en:m.ar}</h3><p>{en?m.enSub:m.arSub}</p></summary><div className="aos-module-detail"><ul>{(en?m.enDetail:m.arDetail).map(item=><li key={item}>{item}</li>)}</ul><a href={m.source} target="_blank" rel="noreferrer">{en?'View related source':'عرض الملفات المرتبطة'} <ArrowUpRight size={14}/></a></div></details>})}</div>
      <p className="aos-interaction-hint"><ChevronDown size={14}/>{en?'Select a card to expand its details.':'اضغط على أي بطاقة لعرض تفاصيل الوحدة.'}</p>
    </section>

    <section className="aos-foundation">
      <div className="aos-foundation-title"><Layers3 size={20}/><div><span>ENGINEERED FOUNDATION</span><h2>{en?'A real application foundation.':'أساس تقني لتطبيق فعلي.'}</h2></div></div>
      <div className="aos-foundation-grid">
        <div><b>Flutter + Dart</b><span>{en?'Cross-platform application':'تطبيق متعدد المنصات'}</span></div>
        <div><b>Riverpod</b><span>{en?'State management':'إدارة حالة التطبيق'}</span></div>
        <div><b>Layered Architecture</b><span>{en?'Core · Domain · Data · UI':'فصل الطبقات والمسؤوليات'}</span></div>
        <div><b>SQLite / sqflite</b><span>{en?'Local data persistence':'تخزين البيانات محليًا'}</span></div>
        <div><b>Flutter Secure Storage</b><span>{en?'Selected sensitive values':'قيم حساسة مختارة'}</span></div>
        <div><b>Local Notifications</b><span>{en?'Scheduled reminders':'تنبيهات ومواعيد مجدولة'}</span></div>
      </div>
      <div className="aos-note"><LockKeyhole size={15}/><span>{en?'Selected sensitive values use secure storage. The SQLite database itself is not claimed to be SQLCipher-encrypted.':'تُخزّن بعض القيم الحساسة عبر Secure Storage؛ ولا ندّعي أن ملف قاعدة SQLite مشفّر بواسطة SQLCipher.'}</span></div>
    </section>

    <section className="aos-evidence">
      <div><span>BUILT IN PUBLIC</span><h2>{en?'Explore the engineering behind the experience.':'تعرّف على العمل الهندسي خلف التجربة.'}</h2><p>{en?'Review the application structure, key screens, database layer and test sources in the public repository.':'راجع بنية التطبيق وواجهاته وطبقة قاعدة البيانات وملفات الاختبارات من المستودع العام.'}</p></div>
      <div className="aos-evidence-links">
        <a href={repoUrl+'/blob/main/README.md'} target="_blank" rel="noreferrer"><BookOpen size={17}/><span>{en?'Project overview':'نظرة عامة على المشروع'}</span><ArrowUpRight size={15}/></a>
        <a href={repoUrl+'/tree/main/lib'} target="_blank" rel="noreferrer"><Layers3 size={17}/><span>{en?'Application source':'شيفرة التطبيق'}</span><ArrowUpRight size={15}/></a>
        <a href={repoUrl+'/tree/main/test'} target="_blank" rel="noreferrer"><ClipboardCheck size={17}/><span>{en?'Test sources':'ملفات الاختبارات'}</span><ArrowUpRight size={15}/></a>
      </div>
    </section>

    <section className="aos-bottom">
      <div><span>ACADEMIC OS / SOURCE</span><h2>{en?'Explore the work behind the workspace.':'اكتشف ما وراء مساحة العمل.'}</h2><p>{en?'AcademicOS is an independently developed project currently in development.':'AcademicOS مشروع مستقل قيد التطوير، ويمكنك الاطلاع على تقدمه ومصدره البرمجي.'}</p></div>
      <a href={repoUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a>
    </section>
    <div className="aos-credit"><span>INDEPENDENTLY DEVELOPED</span><span>ARFAT ALKAMLI · SOFTWARE ENGINEERING</span></div>
  </main>;
}
