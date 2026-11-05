"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Activity, ArrowUpLeft, Bug, CheckCircle2, ChevronDown, Code2, FileSearch,
  FlaskConical, LockKeyhole, Network, Search, Shield, ShieldCheck,
  Terminal, Wifi
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
  const SelectedIcon = current?.Icon ?? FlaskConical;

  return <main className="content-page labx-page">\n    <style jsx global>{`.labx-page{padding-top:30px;padding-bottom:55px}.labx-topline{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding-bottom:13px;border-bottom:1px solid var(--line);color:#bda77d;font:8px/1.6 ui-monospace,monospace;letter-spacing:.11em}.labx-topline span:last-child{color:#8f9b9c}.labx-topline i{display:inline-block;width:5px;height:5px;margin:0 7px 1px;border-radius:50%;background:var(--brass)}.labx-hero{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(210px,.7fr);align-items:center;gap:25px;padding:43px 0 28px}.labx-kicker{display:flex;align-items:center;gap:8px;color:var(--brass-light);font:8px/1.6 ui-monospace,monospace;letter-spacing:.09em}.labx-kicker svg{width:15px;height:15px}.labx-hero h1{margin:13px 0 12px;font-size:clamp(32px,5vw,52px);line-height:1.35;letter-spacing:-.04em}.labx-hero h1 em{color:var(--brass-light);font-style:normal}.labx-hero-copy>p{max-width:700px;margin:0;color:#b2bbb8;font-size:13px;line-height:2.15}.labx-hero-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}.labx-hero-tags span{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--line-cool);border-radius:5px;color:#c6c4b9;font:8px ui-monospace,monospace}.labx-hero-tags svg{width:13px;height:13px;color:var(--brass-light)}.labx-hero-visual{display:grid;justify-items:center;gap:10px}.labx-orbit{position:relative;display:grid;place-items:center;width:190px;height:190px;border:1px solid rgba(183,155,104,.2);border-radius:50%;background:radial-gradient(circle,rgba(183,155,104,.09),transparent 68%)}.labx-orbit:before,.labx-orbit:after{content:"";position:absolute;border:1px dashed rgba(183,155,104,.19);border-radius:50%}.labx-orbit:before{inset:15px}.labx-orbit:after{inset:35px}.labx-orbit>div{z-index:1;display:grid;justify-items:center;gap:4px;color:var(--brass-light)}.labx-orbit>div svg{width:27px;height:27px}.labx-orbit>div b{font:700 19px ui-monospace,monospace;letter-spacing:.12em}.labx-orbit>div small{color:#8e9996;font:7px ui-monospace,monospace;letter-spacing:.2em}.labx-orbit>i{position:absolute;width:7px;height:7px;border:1px solid #d1b985;border-radius:50%;background:#927d57;box-shadow:0 0 14px rgba(183,155,104,.5)}.labx-orbit>i:nth-of-type(1){top:24px;left:55px}.labx-orbit>i:nth-of-type(2){right:20px;bottom:58px}.labx-orbit>i:nth-of-type(3){left:31px;bottom:43px}.labx-hero-visual>span{color:#8e9b98;font:7px ui-monospace,monospace;letter-spacing:.14em}.labx-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid var(--line);border-radius:9px;background:linear-gradient(110deg,rgba(183,155,104,.06),rgba(255,255,255,.012));overflow:hidden}.labx-stats article{display:grid;gap:2px;padding:15px 18px;border-right:1px solid var(--line-cool)}.labx-stats article:last-child{border:0}.labx-stats b{color:var(--brass-light);font:700 23px ui-monospace,monospace}.labx-stats span{color:#aeb7b2;font-size:9px}.labx-intro{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:39px 0 14px}.labx-intro>div>span,.labx-method>div:first-child>span{color:var(--brass-light);font:8px ui-monospace,monospace;letter-spacing:.12em}.labx-intro h2,.labx-method h2{margin:7px 0 4px;font-size:20px}.labx-intro p,.labx-method p{margin:0;color:#9da9a5;font-size:10px;line-height:1.9}.labx-search{display:flex;align-items:center;gap:8px;width:min(300px,100%);padding:9px 11px;border:1px solid var(--line-cool);border-radius:7px;background:rgba(255,255,255,.018)}.labx-search svg{width:15px;height:15px;color:var(--brass-light)}.labx-search input{width:100%;border:0;outline:0;background:transparent;color:var(--ivory);font-size:10px}.labx-search input::placeholder{color:#77827f}.labx-filters{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:15px}.labx-filters button{padding:6px 11px;border:1px solid var(--line-cool);border-radius:5px;background:transparent;color:#aeb8b2;font-size:9px}.labx-filters button:hover,.labx-filters button.active{border-color:rgba(183,155,104,.55);background:rgba(183,155,104,.1);color:var(--brass-light)}.labx-layout{display:grid;grid-template-columns:minmax(250px,.78fr) minmax(0,1.55fr);align-items:start;gap:14px}.labx-list{display:grid;gap:8px}.labx-card{position:relative;display:grid;grid-template-columns:35px minmax(0,1fr) auto;align-items:center;gap:9px;width:100%;padding:13px;text-align:right;border:1px solid var(--line-cool);border-radius:8px;background:linear-gradient(145deg,rgba(31,45,51,.68),rgba(12,20,27,.9));color:var(--ivory)}.labx-card:hover,.labx-card.is-active{border-color:rgba(183,155,104,.52);background:linear-gradient(145deg,rgba(55,55,43,.45),rgba(15,24,30,.96));box-shadow:0 8px 22px rgba(0,0,0,.13)}.labx-card-index{grid-column:1/-1;color:#b9a478;font:7px ui-monospace,monospace;letter-spacing:.12em}.labx-card-icon{display:grid;place-items:center;width:34px;height:34px;border:1px solid rgba(183,155,104,.22);border-radius:7px;color:var(--brass-light)}.labx-card-icon svg{width:17px;height:17px}.labx-card-title{display:grid;gap:2px;min-width:0}.labx-card-title b{font-size:11px}.labx-card-title small{color:#899792;font:7px ui-monospace,monospace;letter-spacing:.04em;overflow-wrap:anywhere}.labx-card-status{grid-column:2/-1;justify-self:start;padding:3px 6px;border-radius:4px;background:rgba(183,155,104,.09);color:#c5b68f;font-size:8px}.labx-card-summary{grid-column:1/-1;color:#9eaaa5;font-size:9px;line-height:1.8}.labx-card-tools{grid-column:1/-1;display:flex;gap:5px;flex-wrap:wrap}.labx-card-tools i,.labx-tool-list span{padding:3px 6px;border:1px solid rgba(183,155,104,.16);border-radius:4px;color:#b9b8aa;font:7px ui-monospace,monospace;font-style:normal}.labx-card>svg{position:absolute;top:18px;left:12px;width:13px;height:13px;color:#8b9993;transform:rotate(90deg)}.labx-empty{padding:25px;border:1px dashed var(--line);border-radius:8px;color:#aeb8b2;font-size:11px;text-align:center}.labx-detail{min-width:0;padding:20px;border:1px solid rgba(183,155,104,.28);border-radius:10px;background:linear-gradient(145deg,rgba(29,43,50,.88),rgba(12,20,27,.96));box-shadow:var(--shadow-soft);animation:labx-in .25s ease}@keyframes labx-in{from{opacity:.5;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}.labx-detail-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding-bottom:12px;border-bottom:1px solid var(--line-cool);color:#bda77d;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-status{display:inline-flex;align-items:center;gap:6px;color:#c5b68f;letter-spacing:0}.labx-status i{width:6px;height:6px;border-radius:50%;background:#bda77d}.labx-detail-title{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px 0 12px}.labx-detail-title small{color:#9b9e91;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-detail-title h2{margin:4px 0 0;font-size:22px}.labx-detail-title>svg{width:30px;height:30px;color:var(--brass-light)}.labx-detail-block{margin-top:14px}.labx-detail-block h3{display:flex;align-items:center;gap:7px;margin:0 0 6px;color:#d4c7a7;font-size:11px}.labx-detail-block h3 svg{width:14px;height:14px;color:var(--brass-light)}.labx-detail-block p{margin:0;color:#aeb9b4;font-size:10px;line-height:2}.labx-tool-list{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.labx-detail-block ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px 16px;margin:8px 0 0;padding:0 17px 0 0;color:#aeb9b4;font-size:9px;line-height:1.8}.labx-detail-block li::marker{color:var(--brass-light)}.labx-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin-top:9px}.labx-steps>div{display:grid;gap:6px;align-content:start;min-height:70px;padding:9px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(255,255,255,.018)}.labx-steps i{color:var(--brass-light);font:8px ui-monospace,monospace;font-style:normal}.labx-steps span{color:#b8c0ba;font-size:8px;line-height:1.7}.labx-safety{display:grid;grid-template-columns:20px minmax(0,1fr);gap:9px;margin-top:18px;padding:12px;border:1px solid rgba(183,155,104,.24);border-radius:7px;background:rgba(183,155,104,.055)}.labx-safety>svg{width:18px;height:18px;color:var(--brass-light)}.labx-safety b{color:#d6c59f;font-size:9px}.labx-safety p{margin:3px 0 0;color:#aeb6ad;font-size:9px;line-height:1.9}.labx-report{margin-top:10px;padding:12px;border:1px dashed rgba(183,155,104,.25);border-radius:7px;background:rgba(0,0,0,.12)}.labx-report>div{display:grid;gap:3px}.labx-report>div span{color:#bda77d;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-report>div b{color:#d6d0c2;font-size:10px}.labx-report p{margin:6px 0 0;color:#9fa9a2;font-size:9px;line-height:1.9}.labx-method{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:25px;align-items:center;margin:38px 0 22px;padding:21px;border:1px solid var(--line);border-radius:9px;background:linear-gradient(110deg,rgba(183,155,104,.06),rgba(255,255,255,.012))}.labx-method h2{margin:8px 0}.labx-method-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.labx-method-grid article{display:grid;gap:6px;padding:10px 8px;border:1px solid var(--line-cool);border-radius:6px;background:rgba(0,0,0,.12)}.labx-method-grid i{color:var(--brass-light);font:8px ui-monospace,monospace;font-style:normal}.labx-method-grid b{color:#ded8ca;font:700 9px ui-monospace,monospace}.labx-method-grid small{color:#9ba7a0;font-size:8px;line-height:1.6}.labx-note{display:flex;align-items:flex-start;gap:11px;padding:14px;border:1px solid var(--line-cool);border-radius:8px;background:rgba(255,255,255,.015)}.labx-note svg{width:18px;height:18px;flex:0 0 18px;color:var(--brass-light)}.labx-note p{margin:0;color:#aeb8b2;font-size:9px;line-height:2}.labx-note b{color:#d6c59f}.labx-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:24px;padding-top:13px;border-top:1px solid var(--line-cool)}.labx-footer span{color:#9b9e91;font:7px ui-monospace,monospace;letter-spacing:.1em}.labx-footer b{color:#c6b58c;font:italic 10px Georgia,serif}.labx-footer a{display:inline-flex;align-items:center;gap:5px;color:var(--brass-light);font-size:9px}.labx-footer a svg{width:13px;height:13px}@media(max-width:850px){.labx-layout{grid-template-columns:1fr}.labx-list{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-method{grid-template-columns:1fr}}@media(max-width:600px){.labx-page{padding-top:20px}.labx-hero{grid-template-columns:1fr;padding:30px 0 22px}.labx-hero-visual{display:none}.labx-hero h1{font-size:34px}.labx-hero-copy>p{font-size:11px}.labx-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-stats article{padding:12px;border-bottom:1px solid var(--line-cool)}.labx-stats article:nth-child(2){border-left:0}.labx-stats article:nth-child(3),.labx-stats article:nth-child(4){border-bottom:0}.labx-intro{align-items:stretch;flex-direction:column;margin-top:29px}.labx-search{width:100%}.labx-list{grid-template-columns:1fr}.labx-detail{padding:14px}.labx-detail-title h2{font-size:18px}.labx-detail-block ul{grid-template-columns:1fr}.labx-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-method{padding:14px}.labx-method-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.labx-footer{align-items:flex-start;flex-direction:column}}@media(prefers-reduced-motion:reduce){.labx-detail{animation:none}}`}</style>
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
        <div className="labx-detail-title"><div><small>{current.en}</small><h2>{current.name}</h2></div><SelectedIcon/></div>
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
    <footer className="labx-footer"><span>ARFAT ALKAMALI / APPLIED LABS</span><b>Building Systems. Securing the Future.</b><Link href="/projects">استعراض المشاريع <ArrowUpLeft/></Link></footer>
  </main>;
}
