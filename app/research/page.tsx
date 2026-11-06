import type {Metadata} from 'next';
import { cookies } from 'next/headers';
import ResearchPageEnglish from './ResearchPageEnglish';
import {ArrowUpLeft, ArrowUpRight, Fingerprint, ShieldCheck} from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const en = (await cookies()).get('portfolio-locale')?.value === 'en';
  return en
    ? { title: 'Cybersecurity Research | Arfat Alkamali', description: 'Independent research concepts in cybersecurity engineering, defensive systems, AI security, digital forensics, and secure software.', alternates: { canonical: '/en/research' } }
    : { title: 'الأبحاث والدراسات الأمنية', description: 'الهوية البحثية والمقترحات العلمية في الأمن السيبراني، الذكاء الاصطناعي، هندسة الدفاع والتحقيق الرقمي.', alternates: { canonical: '/ar/research' } };
}

const researchPrograms=[
  {
    id:'01',category:'هندسة الأمن الدفاعي',en:'DEFENSIVE SECURITY ENGINEERING',
    title:'هندسة منظومة دفاع سيبراني مترابطة متعددة الطبقات',
    status:'خطة بحثية معتمدة',tone:'approved',
    summary:'تصميم إطار معماري يربط جمع القياسات الأمنية وتحليل الأحداث وكشف السلوك غير الطبيعي وتقييم المخاطر والاستجابة للحوادث ضمن منظومة دفاعية واحدة.',
    question:'كيف يمكن بناء بنية دفاعية موحدة تقلل تجزؤ أدوات الأمن، وتحسن ترابط الإشارات، وتدعم اتخاذ القرار دون تحويل الأتمتة إلى مصدر خطر إضافي؟',
    method:'تحليل معماريات SIEM وEDR وNDR وSOAR، وبناء نموذج مرجعي للمكونات وتدفقات البيانات وحدود الثقة، ثم تقييمه بسيناريوهات اختبار مضبوطة ومقاييس زمن الكشف والاستجابة ومعدل الإنذارات الكاذبة.',
    outcome:'نموذج معماري موثق، ومصفوفة قدرات، وسيناريوهات تقييم قابلة لإعادة الاختبار.',
    tags:['Security Architecture','SIEM / EDR / NDR','SOAR','Defense in Depth']
  },
  {
    id:'02',category:'الذكاء الاصطناعي الأمني',en:'AI-DRIVEN THREAT DETECTION',
    title:'الكشف التكيفي عن التهديدات باستخدام التعلم الآلي وتحليل السلوك',
    status:'قيد التجهيز',tone:'preparing',
    summary:'دراسة نماذج تعلم آلي قادرة على تمييز الانحرافات السلوكية في سجلات الأنظمة والشبكات، مع التركيز على قابلية التفسير ومقاومة تغير أنماط الاستخدام.',
    question:'ما مدى قدرة النماذج السلوكية على اكتشاف تهديدات جديدة مع الحفاظ على توازن عملي بين الحساسية والدقة وتقليل الإنذارات الكاذبة؟',
    method:'مراجعة مجموعات بيانات عامة موثوقة، واختيار خطوط أساس إحصائية ونماذج تعلم آلي، ثم مقارنة Precision وRecall وF1 ووقت الاستدلال تحت شروط اختبار موثقة.',
    outcome:'إطار مقارنة تجريبي، ومصفوفة قياس، وتوصيات لاختيار النموذج وفق طبيعة بيئة التشغيل.',
    tags:['Machine Learning','Anomaly Detection','Explainable AI','SOC']
  },
  {
    id:'03',category:'تحليل البرمجيات والثغرات',en:'SOFTWARE & VULNERABILITY RESEARCH',
    title:'منهجية تحليل الثغرات في الشيفرات مفتوحة المصدر وترتيب مخاطرها',
    status:'قيد العمل البحثي الأولي',tone:'active',
    summary:'تطوير منهجية تجمع نتائج التحليل الساكن ومراجعة الاعتماديات وسياق الشيفرة لتحديد الثغرات المحتملة، ثم ترتيبها حسب قابلية الاستغلال والأثر والسياق التشغيلي.',
    question:'كيف يمكن تقليل الضجيج الناتج عن أدوات الفحص الآلي وتحويل النتائج المتفرقة إلى ملاحظات أمنية قابلة للتحقق والأولوية؟',
    method:'تحليل أدبيات SAST وSCA وCWE وCVSS، وبناء سير عمل يربط موضع الشيفرة ونوع الضعف وسياق الاستخدام، ثم مراجعة النتائج يدويًا على مشاريع اختبار مصرح بها.',
    outcome:'إطار فرز وتحقق، وقالب تقرير فني، ومقاييس لقياس دقة النتائج وقابليتها للتكرار.',
    tags:['SAST','SCA','CWE','CVSS','Open Source']
  },
  {
    id:'04',category:'التحقيق الجنائي الرقمي',en:'DIGITAL FORENSICS & INCIDENT RESPONSE',
    title:'سلامة الأدلة الرقمية وسلسلة الحيازة في التحقيقات السيبرانية',
    status:'خطة بحثية معتمدة',tone:'approved',
    summary:'بحث في الضوابط التقنية والإجرائية التي تحفظ موثوقية الأدلة الرقمية منذ جمعها وحتى تحليلها وتوثيقها وعرضها، مع مراعاة قابلية التحقق وإعادة الفحص.',
    question:'ما الضوابط التي تضمن سلامة الدليل الرقمي وإمكانية تتبع كل إجراء اتُّخذ عليه أثناء الاستجابة للحوادث؟',
    method:'مراجعة أطر NIST وإرشادات التحقيق الجنائي الرقمي، وتحليل مراحل الاكتساب والتجزئة والتخزين والتوثيق، ثم تصميم نموذج سلسلة حيازة وسجل إجراءات.',
    outcome:'إجراء تشغيلي موحد، ونموذج توثيق، وقائمة تحقق لحماية سلامة الأدلة.',
    tags:['DFIR','Chain of Custody','NIST','Digital Evidence']
  },
  {
    id:'05',category:'أمن الشبكات',en:'NETWORK THREAT INTELLIGENCE',
    title:'الربط السياقي بين تدفقات الشبكة ومصادر معلومات التهديدات',
    status:'قيد التجهيز',tone:'preparing',
    summary:'استكشاف طريقة دمج بيانات حركة الشبكة مع مؤشرات الاختراق ومعلومات الأصول والسياق الزمني لتكوين صورة أوضح عن التهديد بدل الاعتماد على مؤشر منفرد.',
    question:'هل يؤدي إثراء تدفقات الشبكة بالسياق ومعلومات التهديد إلى تحسين جودة التنبيه وتقليل الإنذارات غير ذات الصلة؟',
    method:'دراسة NetFlow وDNS وTLS metadata ومصادر CTI، وتصميم نموذج ربط وتحليل زمني على بيانات مختبرية أو عامة مع إخفاء البيانات الحساسة.',
    outcome:'مخطط بيانات مترابط، وقواعد إثراء، ومجموعة سيناريوهات لقياس جودة التنبيهات.',
    tags:['NDR','Threat Intelligence','Network Telemetry','IOC']
  },
  {
    id:'06',category:'أمن الهوية والوصول',en:'IDENTITY & ACCESS SECURITY',
    title:'تحليل مخاطر المصادقة الموحدة وإدارة الجلسات والرموز الأمنية',
    status:'قيد العمل البحثي الأولي',tone:'active',
    summary:'دراسة نقاط الضعف التصميمية والتشغيلية في تدفقات SSO وOAuth 2.0 وOpenID Connect، مع التركيز على دورة حياة الرموز والجلسات والتحقق من إعادة التوجيه.',
    question:'ما الأخطاء الأكثر تأثيرًا في تنفيذ المصادقة الموحدة، وكيف يمكن بناء قائمة تحقق عملية لاكتشافها قبل النشر؟',
    method:'تحليل المواصفات الرسمية وأنماط التهديد، ومراجعة تطبيقات تجريبية ضمن نطاق مصرح به، ثم بناء مصفوفة تربط الخلل بالسبب والأثر وضابط المعالجة.',
    outcome:'نموذج تهديد، وقائمة تحقق للمراجعة الأمنية، وأمثلة اختبار آمنة قابلة للتكرار.',
    tags:['OAuth 2.0','OpenID Connect','SSO','Session Security']
  },
  {
    id:'07',category:'الأمن السحابي',en:'CLOUD-NATIVE SECURITY',
    title:'نموذج تقييم أمني للبيئات السحابية والحاويات',
    status:'خطة بحثية معتمدة',tone:'approved',
    summary:'بناء إطار تقييم يراجع إعدادات الهوية والصلاحيات والشبكات والصور البرمجية والأسرار وسجلات التدقيق في البيئات السحابية والحاويات.',
    question:'كيف يمكن ترتيب المخاطر السحابية وفق أثرها الفعلي ومسارات الوصول الممكنة بدل الاكتفاء بقوائم إعدادات غير آمنة؟',
    method:'مقارنة ضوابط CIS Benchmarks وNIST وOWASP، وبناء سيناريوهات تهديد تشمل IAM وKubernetes وأمن سلسلة التوريد، ثم تقييم التغطية والفجوات.',
    outcome:'مصفوفة ضوابط، ونموذج تهديد، وقائمة فحص قابلة للاستخدام في مراجعات البيئة السحابية.',
    tags:['Cloud Security','Kubernetes','IAM','CIS Benchmarks']
  },
  {
    id:'08',category:'أمن التطبيقات والواجهات',en:'APPLICATION & API SECURITY',
    title:'تحليل الثقة والتحكم في الوصول في واجهات API الحديثة',
    status:'قيد التجهيز',tone:'preparing',
    summary:'دراسة مخاطر التفويض على مستوى الكائن والوظيفة، والتحقق من المدخلات، وإدارة الرموز، وحدود المعدل، وتسرب البيانات في واجهات API.',
    question:'ما أكثر أنماط الخلل شيوعًا في واجهات API، وكيف يمكن ربط اختبارات التصميم والاختبارات الآلية بمخاطر العمل الفعلية؟',
    method:'الاستناد إلى OWASP API Security Top 10، وتحليل نماذج تهديد وتطبيقات تدريبية، وبناء حالات اختبار تغطي المصادقة والتفويض والتحقق من البيانات.',
    outcome:'مصفوفة اختبارات API، ونموذج تهديد، وتوصيات دفاعية للمطورين وفرق الاختبار.',
    tags:['OWASP API Top 10','REST','Authorization','Secure SDLC']
  },
  {
    id:'09',category:'أمن البرمجيات وسلسلة التوريد',en:'SOFTWARE SUPPLY CHAIN SECURITY',
    title:'تقييم مخاطر سلسلة توريد البرمجيات والاعتماديات المفتوحة المصدر',
    status:'خطة بحثية معتمدة',tone:'approved',
    summary:'تحليل المخاطر التي تنتقل عبر المكتبات الخارجية وحزم البناء والتحديثات ومصادر الشيفرة، ودراسة وسائل تحسين الشفافية والتحقق من سلامة المكونات.',
    question:'كيف يمكن للفرق البرمجية اكتشاف المخاطر المتوارثة من الاعتماديات وتحديد أولويات معالجتها دون تعطيل دورة التطوير؟',
    method:'مراجعة SBOM وSCA وSigstore وSLSA، وتحليل حالات تهديد منشورة، وتصميم دورة تحقق تشمل مصدر المكون وإصداره وتوقيعه وتبعياته.',
    outcome:'سير عمل للتحقق من الاعتماديات، وقائمة ضوابط، ونموذج توثيق لمكونات البرمجيات.',
    tags:['SBOM','SLSA','SCA','Open Source','DevSecOps']
  },
  {
    id:'10',category:'الخصوصية وحماية البيانات',en:'PRIVACY-ENHANCING TECHNOLOGIES',
    title:'الموازنة بين الرصد الأمني وحماية الخصوصية في بيانات المستخدمين',
    status:'قيد التجهيز',tone:'preparing',
    summary:'بحث في كيفية جمع القياسات الأمنية الضرورية وتحليلها مع تقليل البيانات الشخصية والاحتفاظ بها، وتحديد حدود الوصول والاستخدام.',
    question:'كيف يمكن تصميم رصد أمني فعال يحقق مبدأ تقليل البيانات ويحافظ على متطلبات التحقيق والامتثال؟',
    method:'تحليل مبادئ Privacy by Design وData Minimization، ومراجعة تقنيات إخفاء الهوية والتحكم في الوصول وسياسات الاحتفاظ، ثم بناء نموذج حوكمة بيانات.',
    outcome:'مصفوفة تصنيف بيانات، وسياسة احتفاظ ووصول، وتوصيات تصميم للأنظمة الأمنية.',
    tags:['Privacy by Design','Data Minimization','Governance','Security Analytics']
  },
  {
    id:'11',category:'أمن إنترنت الأشياء والأنظمة المضمنة',en:'IOT & EMBEDDED SYSTEM SECURITY',
    title:'نموذج تهديد للأجهزة الذكية والأنظمة المضمنة محدودة الموارد',
    status:'قيد التطوير البحثي',tone:'active',
    summary:'دراسة تحديات حماية الأجهزة المتصلة ذات الموارد المحدودة، بما يشمل الهوية الرقمية والتحديثات الآمنة والاتصالات وإدارة دورة حياة الجهاز.',
    question:'ما الضوابط ذات الأولوية التي تحقق حماية عملية لأجهزة IoT دون تجاوز حدود الطاقة والذاكرة والقدرة الحسابية؟',
    method:'مراجعة أطر NIST وETSI ذات الصلة، وتصنيف الأصول ومسارات الهجوم، وبناء نموذج تهديد ومصفوفة ضوابط حسب قدرات الجهاز.',
    outcome:'نموذج تهديد للأجهزة، ومصفوفة ضوابط، وتوصيات لتحديثات موثوقة وإدارة دورة الحياة.',
    tags:['IoT','Embedded Systems','Firmware','Device Identity']
  },
  {
    id:'12',category:'الاستجابة للحوادث والأتمتة',en:'AUTOMATED INCIDENT RESPONSE',
    title:'قياس موثوقية أتمتة الاستجابة للحوادث وحدود التدخل البشري',
    status:'قيد التجهيز',tone:'preparing',
    summary:'تقييم متى تكون الاستجابة الآلية مناسبة، ومتى ينبغي طلب موافقة المحلل، وكيفية منع إجراءات الاحتواء الخاطئة أو واسعة الأثر.',
    question:'كيف يمكن قياس سلامة قرارات الاستجابة المؤتمتة مع الحفاظ على سرعة التعامل مع الحوادث وحق الإنسان في مراجعة القرارات الحساسة؟',
    method:'تصميم مستويات أتمتة ومصفوفة مخاطر، وتحليل سيناريوهات عزل الأجهزة وتعطيل الحسابات، وقياس الدقة وقابلية التراجع والأثر الجانبي.',
    outcome:'إطار حوكمة للاستجابة، ومصفوفة صلاحيات، ومعايير إيقاف وتصعيد ومراجعة.',
    tags:['SOAR','Human-in-the-Loop','Incident Response','Safety Controls']
  },
  {
    id:'13',category:'هندسة البرمجيات الآمنة',en:'SECURE SOFTWARE ENGINEERING',
    title:'إطار دمج الأمن في دورة حياة تطوير البرمجيات للمشاريع الصغيرة',
    status:'قيد التطوير البحثي',tone:'active',
    summary:'تصميم إطار عملي خفيف يدمج نمذجة التهديد ومراجعة الشيفرة والاختبارات الأمنية وإدارة الاعتماديات ضمن مراحل التطوير دون تحميل الفرق الصغيرة إجراءات غير قابلة للتطبيق.',
    question:'ما الحد الأدنى من الممارسات الأمنية التي تحقق خفضًا ملموسًا للمخاطر في فرق التطوير محدودة الموارد؟',
    method:'مقارنة أطر SSDF وSDL وOWASP SAMM، واستخلاص ضوابط متدرجة بحسب حجم الفريق ونضج المشروع، ثم تقييمها على سيناريوهات تطوير نموذجية.',
    outcome:'خارطة تطبيق تدريجية، وقائمة تحقق لكل مرحلة، ومؤشرات نضج قابلة للقياس.',
    tags:['NIST SSDF','OWASP SAMM','Threat Modeling','DevSecOps']
  }
];


async function ResearchPageArabic(){
  return <main className="content-page rs-page">
    <div className="rs-topline"><span>ARFAT ALKAMALI / RESEARCH OFFICE</span><span>CYBERSECURITY · ENGINEERING · APPLIED RESEARCH</span></div>

    <section className="rs-identity">
      <div className="rs-identity-grid" aria-hidden="true"><i/><i/><i/><i/></div>
      <div className="rs-identity-copy">
        <span className="rs-kicker"><span className="rs-live-dot"/> PERSONAL RESEARCH IDENTITY / 2026</span>
        <p className="rs-overline">CYBERSECURITY RESEARCHER & SECURITY ENGINEERING</p>
        <h1>الهوية <em>البحثية</em></h1>
        <h2>المهندس عرفات الكاملي</h2>
        <p className="rs-intro">مسار بحثي مستقل يركز على هندسة الأمن السيبراني، وتحليل الثغرات، والأنظمة الدفاعية الذكية، والتحقيق الرقمي، وأمن البرمجيات والشبكات. يربط هذا المسار بين الفهم النظري والتحليل المنهجي والتصميم الهندسي القابل للاختبار.</p>
        <div className="rs-focus-tags"><span>Security Research</span><span>Defensive Engineering</span><span>AI for Cybersecurity</span><span>DFIR</span></div>
      </div>
      <div className="rs-seal">
        <div className="rs-seal-ring"><div className="rs-seal-core"><ShieldCheck/><b>AK</b><small>RESEARCH</small></div></div>
        <span>INDEPENDENT RESEARCH PROGRAM</span>
        <strong>RESEARCH · ANALYZE · ENGINEER</strong>
      </div>
      <div className="rs-identity-footer"><span>RESEARCH PROFILE / AK-2026</span><span>YEMEN <i/> INDEPENDENT TECHNICAL RESEARCH</span></div>
    </section>

    <section className="rs-orcid">
      <div className="rs-orcid-main"><span className="rs-orcid-mark">iD</span><div><small>INTERNATIONAL RESEARCHER IDENTIFIER</small><h2>المعرّف البحثي الدولي</h2><p>ملف الباحث على منصة ORCID</p></div></div>
      <a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer"><b>0009-0008-1348-5146</b><span>عرض سجل ORCID <ArrowUpRight size={15}/></span></a>
    </section>

    <section className="rs-intro-section">
      <div><span className="rs-section-kicker">RESEARCH PORTFOLIO / 01</span><h2>برنامج الأبحاث والمقترحات العلمية</h2><p>مجموعة من التصورات البحثية المتخصصة التي صيغت لتكون قابلة للتحويل إلى خطط أكاديمية ودراسات تطبيقية، مع تحديد المشكلة والمنهجية والمخرجات المتوقعة لكل موضوع.</p></div>
      <div className="rs-count"><b>13</b><span>RESEARCH<br/>PROPOSALS</span></div>
    </section>

    <div className="rs-status-legend">
      <span><i className="approved"/> خطة بحثية معتمدة ضمن المسار الشخصي</span>
      <span><i className="preparing"/> قيد التجهيز</span>
      <span><i className="active"/> قيد التطوير البحثي</span>
    </div>

    <section className="rs-research-grid" aria-label="المقترحات البحثية">
      {researchPrograms.map(item=><article className="rs-paper" key={item.id}>
        <div className="rs-paper-top"><span className="rs-paper-number">RESEARCH / {item.id}</span><span className={'rs-status '+item.tone}>{item.status}</span></div>
        <span className="rs-paper-category">{item.category}</span>
        <h3>{item.title}</h3>
        <small className="rs-paper-en">{item.en}</small>
        <p className="rs-paper-summary">{item.summary}</p>
        <div className="rs-paper-detail"><b>الإشكالية البحثية</b><p>{item.question}</p></div>
        <div className="rs-paper-detail"><b>المنهجية المقترحة</b><p>{item.method}</p></div>
        <div className="rs-paper-outcome"><b>المخرجات المتوقعة</b><p>{item.outcome}</p></div>
        <div className="rs-paper-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="rs-paper-foot"><span>CONCEPT AUTHOR</span><b>المهندس عرفات الكاملي</b></div>
      </article>)}
    </section>

    <section className="rs-method">
      <div><span className="rs-section-kicker">RESEARCH GOVERNANCE / 02</span><h2>منهجية العمل البحثي</h2><p>تُبنى كل دراسة على سؤال محدد، ومراجعة أدبيات ومصادر أولية، ومنهج قابل للتفسير والتكرار، ثم تقييم النتائج بحدود واضحة. لا تُعرض الفرضيات على أنها حقائق، ولا تُنسب نتائج قبل اختبارها وتوثيقها.</p></div>
      <div className="rs-method-steps">
        <article><b>01</b><strong>تحديد المشكلة</strong><small>النطاق والسؤال والفرضيات</small></article>
        <article><b>02</b><strong>مراجعة الأدبيات</strong><small>المعايير والأبحاث السابقة</small></article>
        <article><b>03</b><strong>التصميم والتجربة</strong><small>منهج قابل للتكرار</small></article>
        <article><b>04</b><strong>التقييم والتوثيق</strong><small>نتائج وحدود ومراجع</small></article>
      </div>
    </section>

    <aside className="rs-authorship-note">
      <div className="rs-note-icon"><Fingerprint/></div>
      <div><span>AUTHORSHIP & RESEARCH STATUS</span><h2>ملاحظة توثيقية حول ملكية الأفكار وحالة الأبحاث</h2>
        <p>هذه التصورات والعناوين والأطر الأولية مقترحات بحثية من إعداد المهندس عرفات الكاملي، وهي ضمن برنامجه البحثي الشخصي، وتتوزع حالتها بين اعتماد خطة العمل الشخصية، وقيد التجهيز، وقيد التطوير البحثي. اعتماد الخطة هنا لا يعني اعتمادًا من جامعة أو جهة نشر.</p>
        <p>المحتوى المعروض يشرح الفكرة والإشكالية والمنهجية والمخرجات المتوقعة، ولا يعني أن دراسة مكتملة أو نتائج تجريبية أو ورقة منشورة قد أُنجزت. ستُحدّث حالة كل بحث عند اكتمال مراحله وتوثيقها، مع إضافة المراجع والبيانات والنتائج الفعلية عند توفرها.</p>
      </div>
    </aside>

    <footer className="rs-footer"><span>ARFAT ALKAMALI / RESEARCH PORTFOLIO</span><b>BUILDING KNOWLEDGE. ENGINEERING SECURITY.</b><a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer">ORCID PROFILE <ArrowUpLeft size={14}/></a></footer>
  </main>;
}


export default async function ResearchPage(){
  const en = (await cookies()).get('portfolio-locale')?.value === 'en';
  return en ? <ResearchPageEnglish /> : <ResearchPageArabic />;
}
