"use client";

import { useMemo, useState } from 'react';
import {
  Activity, ArrowUpLeft, Bug, CheckCircle2, ChevronDown, Code2, FileSearch,
  FlaskConical, LockKeyhole, Network, Radio, Search, Shield, ShieldCheck,
  Terminal, Wifi, X
} from 'lucide-react';

type Lab = {
  id: string; name: string; en: string; category: string; status: string;
  summary: string; goal: string; environment: string; tools: string[];
  objectives: string[]; workflow: string[]; safety: string; report: string;
  Icon: typeof Shield;
};

const labs: Lab[] = [
  {
    id: 'web', name: 'أمن تطبيقات الويب', en: 'WEB APPLICATION SECURITY', category: 'اختبار أمني',
    status: 'مسار تعلم وتطبيق', summary: 'فهم سطح الهجوم في تطبيقات الويب، وتحليل المدخلات والجلسات والصلاحيات.',
    goal: 'تقييم سلوك تطبيق تدريبي من منظور أمني، وتحديد نقاط الضعف وشرح أثرها وتوصيات المعالجة.',
    environment: 'Kali Linux · تطبيقات ويب تدريبية مثل OWASP Juice Shop أو DVWA · شبكة افتراضية معزولة.',
    tools: ['Burp Suite', 'OWASP ZAP', 'Browser DevTools', 'Kali Linux'],
    objectives: ['رسم سطح الهجوم ومسارات البيانات', 'فحص التحقق من المدخلات وإدارة الجلسات', 'مراجعة التحكم بالوصول والصلاحيات', 'توثيق الأثر وخطوات إعادة الإنتاج الآمنة'],
    workflow: ['تحديد نطاق التطبيق', 'استكشاف الواجهات والطلبات', 'اختبار الحالات المصرح بها', 'تسجيل النتائج والتوصيات'],
    safety: 'يُستخدم تطبيق تدريبي أو نظام مملوك ومصرح به فقط. لا تُجرى اختبارات على مواقع عامة أو حسابات حقيقية.',
    report: 'معاينة قالب التقرير: النطاق، المنهجية، الملاحظة، مستوى الخطورة، دليل إعادة الإنتاج، والأثر والتوصية. لا يوجد تقرير تجربة منشور مرتبط بهذه البطاقة حالياً.',
    Icon: Code2
  },
  {
    id: 'ad', name: 'أمن Active Directory', en: 'ACTIVE DIRECTORY SECURITY', category: 'دفاع الأنظمة',
    status: 'مسار تعلم', summary: 'استكشاف إدارة الهويات والمجموعات والسياسات ومراجعة إعدادات الدليل النشط.',
    goal: 'فهم العلاقات بين المستخدمين والأجهزة والسياسات، واكتشاف الإعدادات الضعيفة من منظور دفاعي.',
    environment: 'Windows Server · Windows Client · نطاق افتراضي خاص بالمختبر · لقطات استرجاع.',
    tools: ['Windows Server', 'Active Directory', 'Group Policy', 'Event Viewer'],
    objectives: ['بناء تصور لوحدات OU والمستخدمين والمجموعات', 'مراجعة سياسات كلمات المرور والحسابات', 'فهم صلاحيات الملفات والخدمات', 'قراءة أحداث تسجيل الدخول والتغييرات'],
    workflow: ['إعداد نطاق محلي تجريبي', 'إنشاء حسابات وأدوار اختبار', 'مراجعة السياسات والصلاحيات', 'جمع السجلات وكتابة توصيات التقوية'],
    safety: 'تظل جميع الحسابات والنطاقات محلية داخل المختبر. لا تُختبر بنية Active Directory تابعة لجهة أخرى.',
    report: 'معاينة التوثيق: مخطط النطاق، إعدادات السياسة، ملاحظات الصلاحيات، وأمثلة أحداث من سجل المختبر. التوثيق التفصيلي قيد الإعداد.',
    Icon: LockKeyhole
  },
  {
    id: 'traffic', name: 'تحليل حركة الشبكة', en: 'NETWORK TRAFFIC ANALYSIS', category: 'تحليل الشبكات',
    status: 'مسار تعلم وتطبيق', summary: 'قراءة الحزم والتدفقات وربط مؤشرات الاتصال بالسلوك المتوقع وغير المعتاد.',
    goal: 'تحويل ملفات الالتقاط والسجلات الشبكية إلى ملاحظات قابلة للتفسير والتحقق.',
    environment: 'Wireshark · ملفات PCAP تدريبية · شبكة افتراضية متعددة الأجهزة.',
    tools: ['Wireshark', 'tcpdump', 'PCAP', 'TCP/IP'],
    objectives: ['تمييز بروتوكولات الاتصال الشائعة', 'تتبع DNS وTCP وHTTP(S) على مستوى البيانات المتاحة', 'ملاحظة الأنماط غير المعتادة والتوقيتات', 'استخراج مؤشرات وملخص اتصال واضح'],
    workflow: ['اختيار ملف التقاط تدريبي', 'تحديد المحادثات والبروتوكولات', 'تصفية الحزم ذات الصلة', 'تلخيص الملاحظات والقيود'],
    safety: 'تُستخدم ملفات PCAP عامة للتدريب أو حركة مرور أنشئت داخل المختبر. تُحترم خصوصية البيانات ولا تُجمع حركة أشخاص دون إذن.',
    report: 'معاينة المخرجات: ملخص الالتقاط، البروتوكولات، المحادثات المهمة، المؤشرات، وحدود الاستنتاج. لا يوجد تقرير مستقل منشور حالياً.',
    Icon: Activity
  },
  {
    id: 'wireless', name: 'أمن الشبكات اللاسلكية', en: 'WIRELESS SECURITY', category: 'اختبار أمني',
    status: 'مسار تعلم', summary: 'دراسة المصادقة والتشفير وإعدادات نقاط الوصول وطرق تقوية الشبكات اللاسلكية.',
    goal: 'فهم أسباب ضعف الإعدادات اللاسلكية وتقييمها ضمن نقطة وصول مملوكة ومختبر منفصل.',
    environment: 'Kali Linux · نقطة وصول اختبارية · جهاز عميل مخصص · محول لاسلكي متوافق عند توفره.',
    tools: ['Kali Linux', 'Wi-Fi adapter', 'WPA2/WPA3', 'Router security settings'],
    objectives: ['مراجعة أنماط التشفير والمصادقة', 'فحص إعدادات نقطة الوصول', 'فهم مخاطر كلمات المرور والإعدادات الافتراضية', 'إعداد قائمة تقوية للشبكة'],
    workflow: ['إنشاء شبكة اختبار خاصة', 'توثيق الإعدادات الحالية', 'تقييم خيارات الحماية', 'تطبيق إعدادات التقوية والتحقق منها'],
    safety: 'لا يجري التقاط أو اختبار شبكات الجيران أو الشبكات العامة. يقتصر العمل على نقطة وصول مملوكة أو بإذن صريح.',
    report: 'معاينة قائمة التحقق: التشفير، المصادقة، كلمة المرور، WPS، تحديثات الجهاز، وإدارة الوصول. التوثيق التفصيلي قيد الإعداد.',
    Icon: Wifi
  },
  {
    id: 'malware', name: 'مختبر تحليل البرمجيات الخبيثة', en: 'MALWARE ANALYSIS SANDBOX', category: 'تحقيق وتحليل',
    status: 'تصميم مسار معمل', summary: 'التعرف على مبادئ التحليل الساكن ومراقبة السلوك ومؤشرات الاختراق في بيئة معزولة.',
    goal: 'فهم بنية الملف ومؤشرات السلوك وكتابة ملاحظات تحليلية دون تعريض النظام المضيف للخطر.',
    environment: 'آلة افتراضية معزولة · لقطات استرجاع · أدوات تحليل ساكن · شبكة افتراضية معطلة أو محكومة.',
    tools: ['Static Analysis', 'Hashing', 'Strings', 'Isolated VM'],
    objectives: ['حساب البصمات وتوثيق خصائص الملف', 'فحص السلاسل والبيانات الوصفية', 'التعرف على مؤشرات السلوك على مستوى المفهوم', 'كتابة ملخص فني ومؤشرات قابلة للمشاركة'],
    workflow: ['التحقق من عزل البيئة', 'جمع خصائص الملف دون تشغيله', 'تحليل المؤشرات الساكنة', 'توثيق النتائج والقيود'],
    safety: 'لا تُشغّل عينات مجهولة على الجهاز الأساسي أو شبكة متصلة. هذا المسار تعليمي ومخطط؛ لا يعني وجود تحليل عينات منشور.',
    report: 'معاينة التقرير: معلومات العينة وبصمتها، خصائص الملف، مؤشرات التحليل، ملاحظات السلامة، والنتيجة. لا توجد تقارير عينات منشورة حالياً.',
    Icon: Bug
  }
];

const filters = ['الكل', 'اختبار أمني', 'دفاع الأنظمة', 'تحليل الشبكات', 'تحقيق وتحليل'];

export default function LabsExplorer() {
  const [active, setActive] = useState('الكل');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('web');
  const visible = useMemo(() => labs.filter(l =>
    (active === 'الكل' || l.category === active) &&
    (l.name + ' ' + l.en + ' ' + l.summary + ' ' + l.tools.join(' ')).toLowerCase().includes(query.trim().toLowerCase())
  ), [active, query]);
  const current = visible.find(l => l.id === selected) ?? visible[0];

  return <main className="content-page labx-page">
    <div className="labx-topline"><span>APPLIED SECURITY / LAB ENVIRONMENTS</span><span>ARFAT ALKAMALI <i/> TECHNICAL PRACTICE</span></div>
    <section className="labx-hero">
      <div className="labx-hero-copy">
        <span className="labx-kicker"><FlaskConical/> CONTROLLED EXPERIMENTS · DOCUMENTED LEARNING</span>
        <h1>المعامل <em>التطبيقية</em></h1>
        <p>مساحة منظمة لتجارب الأمن السيبراني وتحليل الشبكات. كل معمل يوضح الهدف التقني، بيئة التنفيذ، مراحل العمل، وضوابط السلامة؛ مع فصل واضح بين مسارات التعلم والتقارير المنشورة فعلياً.</p>
        <div className="labx-hero-tags"><span><ShieldCheck/> Authorized Scope</span><span><Network/> Isolated Networks</span><span><FileSearch/> Evidence & Reports</span></div>
      </div>
      <div className="labx-hero-visual" aria-hidden="true"><div className="labx-orbit"><div><FlaskConical/><b>LAB</b><small>01—05</small></div><i/><i/><i/></div><span>TEST / OBSERVE / DOCUMENT</span></div>
    </section>
    <section className="labx-stats" aria-label="ملخص المعامل">
      <article><b>05</b><span>مسارات معملية</span></article><article><b>04</b><span>مجالات تطبيق وتحليل</span></article><article><b>100%</b><span>ضمن نطاق مصرح ومعزول</span></article><article><b>01</b><span>معمل قيد التصميم</span></article>
    </section>
    <section className="labx-intro"><div><span>01 / LAB DIRECTORY</span><h2>اختر بيئة العمل</h2><p>استعرض المسارات الخمسة أو ابحث عن تقنية أو أداة. اختيار أي بطاقة يعرض تفاصيلها في لوحة مستقلة.</p></div>
      <label className="labx-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ابحث عن معمل أو أداة..." aria-label="البحث في المعامل"/></label>
    </section>
    <div className="labx-filters" role="group" aria-label="تصفية المعامل">{filters.map(f=><button type="button" key={f} className={active===f?'active':''} aria-pressed={active===f} onClick={()=>{setActive(f);setSelected('')}}>{f}</button>)}</div>
    <section className="labx-layout">
      <div className="labx-list">{visible.map((lab,i)=>{const Icon=lab.Icon;return <button type="button" key={lab.id} className={'labx-card '+(current?.id===lab.id?'is-active':'')} onClick={()=>setSelected(lab.id)} aria-pressed={current?.id===lab.id}>
        <span className="labx-card-index">LAB / 0{i+1}</span><span className="labx-card-icon"><Icon/></span><span className="labx-card-title"><b>{lab.name}</b><small>{lab.en}</small></span><span className="labx-card-status">{lab.status}</span><span className="labx-card-summary">{lab.summary}</span><span className="labx-card-tools">{lab.tools.slice(0,3).map(t=><i key={t}>{t}</i>)}</span><ChevronDown/>
      </button>})}{visible.length===0&&<div className="labx-empty">لا توجد نتائج مطابقة. جرّب كلمة أخرى أو اختر «الكل».</div>}</div>
      {current&&<article className="labx-detail" key={current.id}>
        <div className="labx-detail-head"><span>LAB PROFILE / {current.id.toUpperCase()}</span><span className="labx-status"><i/>{current.status}</span></div>
        <div className="labx-detail-title"><div><small>{current.en}</small><h2>{current.name}</h2></div><current.Icon/></div>
        <div className="labx-detail-block"><h3><Shield/> الهدف التقني</h3><p>{current.goal}</p></div>
        <div className="labx-detail-block"><h3><Terminal/> بيئة العمل</h3><p>{current.environment}</p><div className="labx-tool-list">{current.tools.map(t=><span key={t}>{t}</span>)}</div></div>
        <div className="labx-detail-block"><h3><CheckCircle2/> أهداف التعلم والتطبيق</h3><ul>{current.objectives.map(x=><li key={x}>{x}</li>)}</ul></div>
        <div className="labx-detail-block"><h3><Activity/> سير التجربة</h3><div className="labx-steps">{current.workflow.map((x,i)=><div key={x}><i>0{i+1}</i><span>{x}</span></div>)}</div></div>
        <div className="labx-safety"><ShieldCheck/><div><b>حدود السلامة والنطاق</b><p>{current.safety}</p></div></div>
        <div className="labx-report"><div><span>DOCUMENTATION / PREVIEW</span><b>التقرير والتوثيق</b></div><p>{current.report}</p></div>
      </article>}
    </section>
    <section className="labx-method"><div><span>02 / EXPERIMENTAL METHOD</span><h2>منهجية ثابتة لكل تجربة</h2><p>المعمل الجيد لا يقتصر على تشغيل أداة؛ بل يبدأ بنطاق واضح، وبيئة قابلة للاسترجاع، وملاحظة قابلة للتحقق، ثم توثيق يشرح ما حدث وما لا يمكن استنتاجه.</p></div><div className="labx-method-grid"><article><i>01</i><b>Scope</b><small>تحديد النطاق والتصريح</small></article><article><i>02</i><b>Isolate</b><small>تجهيز البيئة والعزل</small></article><article><i>03</i><b>Observe</b><small>تنفيذ ومراقبة التجربة</small></article><article><i>04</i><b>Document</b><small>توثيق الأدلة والنتائج</small></article></div></section>
    <aside className="labx-note"><ShieldCheck/><p><b>ملاحظة مهنية:</b> حالة «مسار تعلم» أو «قيد التصميم» تصف وضع المعمل، ولا تعني اكتمال تجربة أو وجود تقرير منشور. ستُضاف روابط التقارير ونتائج الاختبارات عند توفر توثيق فعلي قابل للمراجعة.</p></aside>
    <footer className="labx-footer"><span>ARFAT ALKAMALI / APPLIED LABS</span><b>Building Systems. Securing the Future.</b><a href="/projects">استعراض المشاريع <ArrowUpLeft/></a></footer>
  </main>;
}
