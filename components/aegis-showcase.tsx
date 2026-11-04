import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Fingerprint, RadioTower, ScanSearch, Network, LockKeyhole, Activity, Eye, Layers3, Orbit, Radar, Shield, Database, Sparkles, Building2, Workflow, Globe2, FileCheck2 } from 'lucide-react';


const capabilities = [
  { icon: Radar, code: 'DOMAIN 01', title: 'Strategic Threat Intelligence', text: 'رؤية تحليلية للتهديدات ومؤشراتها ضمن سياق دفاعي مترابط.' },
  { icon: ShieldCheck, code: 'DOMAIN 02', title: 'Advanced Cyber Defense', text: 'قدرات دفاعية متعددة المستويات لحماية البيئات الرقمية.' },
  { icon: ScanSearch, code: 'DOMAIN 03', title: 'Intelligent Detection', text: 'تمييز الأنماط غير الاعتيادية وتحويل الإشارات إلى وعي أمني.' },
  { icon: Activity, code: 'DOMAIN 04', title: 'Incident Response', text: 'استجابة منضبطة للحوادث مع مراعاة نطاق الحماية.' },
  { icon: Fingerprint, code: 'DOMAIN 05', title: 'Digital Forensics', text: 'تحليل الآثار الرقمية وصون موثوقية الأدلة.' },
  { icon: Network, code: 'DOMAIN 06', title: 'Network Intelligence', text: 'رؤية دفاعية أوسع لحركة الشبكات والبيئات المتصلة.' },
];

const sectors = [
  ['01', 'CLASSIFIED SECTOR', 'مجال تخصصي محمي'],
  ['02', 'RESTRICTED DOMAIN', 'نطاق عمليات خاص'],
  ['03', 'SOVEREIGN LAYER', 'طبقة هندسية مستقلة'],
  ['04', 'INTELLIGENCE CORE', 'مجال تحليل متقدم'],
];

const principles = [
  ['PRIVATE BY DESIGN', 'خصوصية التصميم'],
  ['DEFENSE-ORIENTED', 'توجه دفاعي'],
  ['EVIDENCE-CONSCIOUS', 'وعي بالأدلة'],
  ['CONTROLLED RESPONSE', 'استجابة منضبطة'],
];

function Emblem() {
  return <div className="aegis-emblem aegis-emblem-premium" aria-label="AEGIS-TITAN emblem">
    <div className="aegis-orbit orbit-one"/><div className="aegis-orbit orbit-two"/>
    <div className="aegis-orbit orbit-three"/>
    <div className="aegis-core"><Shield size={58} strokeWidth={1.1}/><b>AEGIS</b><small>PRIVATE DEFENSE SYSTEM</small></div>
    <span className="orbit-label label-a">DETECT</span><span className="orbit-label label-b">DEFEND</span><span className="orbit-label label-c">PRESERVE</span>
    <span className="aegis-emblem-index">AT / 09</span>
  </div>;
}

function SignalField() {
  return <div className="aegis-signal-field" aria-hidden="true">
    <div className="aegis-signal-ring ring-a"/><div className="aegis-signal-ring ring-b"/>
    <div className="aegis-signal-cross cross-a"/><div className="aegis-signal-cross cross-b"/>
    <div className="aegis-signal-node node-a"/><div className="aegis-signal-node node-b"/><div className="aegis-signal-node node-c"/>
    <span className="signal-label signal-one">SECURE / PRIVATE</span><span className="signal-label signal-two">UNKNOWN SURFACE</span>
  </div>;
}

export default function AegisShowcase() {
  return <main className="aegis-shell aegis-private-shell">
    <section className="aegis-hero aegis-private-hero">
      <div className="aegis-topline"><Link href="/projects"><ArrowLeft size={15}/> العودة إلى المشاريع</Link><span>PRIVATE SYSTEM / STRATEGIC DEFENSE</span></div>
      <div className="aegis-hero-grid aegis-private-grid">
        <div className="aegis-private-copy">
          <div className="aegis-kicker"><span/> SOVEREIGN DEFENSIVE ECOSYSTEM</div>
          <p className="aegis-classified"><LockKeyhole size={12}/> RESTRICTED ENGINEERING PROFILE</p>
          <h1>AEGIS<span>-</span>TITAN</h1>
          <p className="aegis-subtitle">v9.0 <i/> SOVEREIGN</p>
          <h2 className="aegis-private-headline">Beyond Visibility.<br/><em>Beyond Conventional Defense.</em></h2>
          <p className="aegis-intro">منظومة دفاع سيبراني سيادية ذات رؤية مؤسسية، صاغ فكرتها وهويتها المعمارية المهندس عرفات عبدالله الكاملي. تستهدف المؤسسات والشركات التي تحتاج إلى منظومة دفاعية قابلة للتخصيص وفق بيئتها ومتطلباتها، مع إبقاء جوهر الهندسة والتفاصيل الداخلية ضمن نطاق خاص.</p>
          <div className="aegis-actions"><a href="#capabilities">استكشف مجالات القدرات <ArrowUpRight size={16}/></a><a href="#architect">عن المهندس <ArrowUpRight size={16}/></a></div>
          <div className="aegis-status aegis-private-status"><span><i/> PRIVATE / PROPRIETARY</span><span>DEFENSE ORIENTED</span><span>SOVEREIGN IDENTITY</span></div>
        </div>
        <Emblem/>
      </div>
      <div className="aegis-hero-foot"><span>AEGIS-TITAN / PRIVATE ECOSYSTEM</span><span>STRATEGIC CYBER DEFENSE</span></div>
      <div className="aegis-quick-read" aria-label="AEGIS-TITAN at a glance">
        <article><span>01 / VISION</span><b>DEFENSIVE BY DESIGN</b><small>رؤية دفاعية موحدة</small></article>
        <article><span>02 / SCOPE</span><b>INSTITUTIONAL</b><small>توجه مؤسسي قابل للتكييف</small></article>
        <article><span>03 / PRINCIPLE</span><b>EVIDENCE-LED</b><small>قرار يستند إلى السياق والأدلة</small></article>
        <article><span>04 / IDENTITY</span><b>SOVEREIGN</b><small>هوية وهندسة خاصة</small></article>
      </div>
      <SignalField/>
    </section>

    <section className="aegis-private-manifesto">
      <span className="aegis-overline">A DIFFERENT CLASS OF ENGINEERING</span>
      <h2>القدرات ظاهرة.<br/><em>والهندسة تبقى محمية.</em></h2>
      <p>ما يظهر هنا هو نطاق المهمة وأثرها الاستراتيجي؛ أما التفاصيل الداخلية، وآليات العمل، والبنية الخاصة، فتبقى خارج العرض العام.</p>
      <div className="aegis-manifesto-mark"><Orbit/><span>SEALED BY DESIGN</span></div>
    </section>

    <section className="aegis-enterprise-vision" id="enterprise-vision">
      <div className="aegis-enterprise-heading"><span>INSTITUTIONAL / SOVEREIGN CYBER DEFENSE</span><h2>رؤية سيادية.<br/><em>مصممة لاحتياجات المؤسسات.</em></h2><p>AEGIS-TITAN ليست واجهة مراقبة فحسب؛ إنها رؤية منتج دفاعي مؤسسي خاص، يستهدف بناء قدرة موحدة للرؤية الأمنية والتحليل والاستجابة والحوكمة، مع قابلية تكييف نطاقه وفق طبيعة كل مؤسسة.</p></div>
      <div className="aegis-enterprise-image"><img src="/images/aegis/sovereign-core.svg" alt="تصور بصري لهوية AEGIS-TITAN السيادية" loading="lazy"/></div>
      <div className="aegis-enterprise-pillars">
        <article><Building2/><b>INSTITUTIONAL FIT</b><h3>ملاءمة مؤسسية</h3><p>تصور قابل للتخصيص بحسب حجم المؤسسة وبيئتها وأولوياتها الدفاعية.</p></article>
        <article><Workflow/><b>UNIFIED OPERATIONS</b><h3>عمليات مترابطة</h3><p>ربط مجالات الرؤية والتحليل والاستجابة والتحقيق ضمن إطار واحد.</p></article>
        <article><Globe2/><b>DATA SOVEREIGNTY</b><h3>سيادة البيانات</h3><p>تصميم خيارات نشر واستضافة وحوكمة تُحدد وفق متطلبات الجهة المتعاقدة.</p></article>
        <article><FileCheck2/><b>GOVERNED ASSURANCE</b><h3>حوكمة وضمان</h3><p>التوجه إلى توثيق الضوابط والاختبارات والقبول الفني لكل بيئة نشر.</p></article>
      </div>
      <div className="aegis-enterprise-image aegis-enterprise-wide"><img src="/images/aegis/enterprise-operations.svg" alt="تصور توضيحي لبيئة عمليات أمنية مؤسسية" loading="lazy"/></div>
      <div className="aegis-commercial-note"><span>PRIVATE / INSTITUTIONAL ENGAGEMENT</span><p>التوجه التجاري المستهدف: ترخيص مؤسسي، تخصيص حسب المتطلبات، تكامل مع البيئة القائمة، وخدمات تهيئة ودعم وفق نطاق تعاقدي واضح. تخضع الجاهزية التجارية والامتثال والاعتمادات والاختبارات النهائية للتحقق قبل أي نشر مؤسسي.</p></div>
    </section>

    <section className="aegis-image-gallery" aria-labelledby="aegis-gallery-title">
      <div className="aegis-gallery-heading">
        <span>VISUAL CONTEXT / INSTITUTIONAL ENVIRONMENTS</span>
        <h2 id="aegis-gallery-title">مشاهد من البيئة التي صُممت المنظومة لأجلها.</h2>
        <p>صور مفاهيمية تعزز السياق المؤسسي والتقني للمشروع، ولا تعرض واجهات تشغيل أو تفاصيل داخلية.</p>
      </div>
      <div className="aegis-gallery-grid">
        <figure className="aegis-gallery-card aegis-gallery-large">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=85" alt="ممر خوادم في مركز بيانات مؤسسي" loading="lazy"/>
          <figcaption><span>01 / INFRASTRUCTURE</span><b>Digital Infrastructure</b><small>البنية الرقمية والبيئات المؤسسية</small></figcaption>
        </figure>
        <figure className="aegis-gallery-card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85" alt="تفاصيل لوحة إلكترونية ومكونات تقنية" loading="lazy"/>
          <figcaption><span>02 / ENGINEERING</span><b>Systems Engineering</b><small>الهندسة والأنظمة التقنية</small></figcaption>
        </figure>
        <figure className="aegis-gallery-card">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279cfa?auto=format&fit=crop&w=1100&q=85" alt="تصور بصري لشبكة عالمية مترابطة" loading="lazy"/>
          <figcaption><span>03 / CONNECTIVITY</span><b>Connected Ecosystems</b><small>الشبكات والبيئات المترابطة</small></figcaption>
        </figure>
      </div>
      <p className="aegis-gallery-note">صور سياقية من مصادر خارجية — لا تمثل لقطات فعلية من AEGIS-TITAN.</p>
    </section>

    <section className="aegis-domain-visual">
      <div><span>DEFENSIVE DOMAINS / ONE VISION</span><h2>منظومة واحدة.<br/>مجالات دفاع متعددة.</h2><p>تجميع بصري لمجالات المهمة التي تستهدفها الرؤية المعمارية، دون عرض تفاصيل التنفيذ أو مكونات التشغيل الخاصة.</p></div>
      <img src="/images/aegis/defense-domain.svg" alt="تصور بصري لمجالات الدفاع السيبراني ضمن AEGIS-TITAN" loading="lazy"/>
    </section>

    <section className="aegis-section aegis-private-section" id="capabilities">
      <div className="aegis-section-head"><span>01 / STRATEGIC CAPABILITIES</span><h2>مجالات عمل تتجاوز الأدوات المنفردة.</h2><p>قدرات مترابطة ضمن رؤية دفاعية شاملة، تُعرض هنا على مستوى المهمة دون كشف تفاصيل التنفيذ.</p></div>
      <div className="aegis-private-capabilities">{capabilities.map(({icon:Icon,code,title,text})=><article key={code}><div className="aegis-cap-icon"><Icon size={21}/></div><span>{code}</span><h3>{title}</h3><p>{text}</p><b className="aegis-card-seal">PRIVATE DOMAIN <LockKeyhole size={11}/></b></article>)}</div>
    </section>

    <section className="aegis-section aegis-classified-section">
      <div className="aegis-section-head"><span>02 / RESTRICTED SECTORS</span><h2>مساحات هندسية لا تُعرض تفاصيلها.</h2><p>إشارات إلى اتساع المنظومة وتعدد نطاقاتها، دون نشر أسماء الوحدات أو خرائطها الداخلية.</p></div>
      <div className="aegis-sector-grid">{sectors.map(([n,title,desc])=><article key={n}><span>{n} / SEALED</span><div className="aegis-sector-lines"><i/><i/><i/></div><h3>{title}</h3><p>{desc}</p><LockKeyhole size={15}/></article>)}</div>
    </section>

    <section className="aegis-private-visual">
      <div className="aegis-visual-copy"><span>03 / OPERATIONAL AWARENESS</span><h2>من الرؤية<br/>إلى الوعي الدفاعي.</h2><p>صورة بصرية رمزية لعالم مترابط من الإشارات والقرارات. هذا التصور تجريدي ولا يمثل مخططًا تشغيليًا أو بنية فعلية للنظام.</p></div>
      <div className="aegis-radar-visual" aria-hidden="true"><div className="radar-sweep"/><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-center"><ShieldCheck size={34}/></div><i className="radar-dot d1"/><i className="radar-dot d2"/><i className="radar-dot d3"/><span className="radar-coord c1">SIGNAL / 01</span><span className="radar-coord c2">SECURE FIELD</span></div>
    </section>

    <section className="aegis-section aegis-mission-section" id="mission-models">
      <div className="aegis-section-head"><span>04 / ENGINEERING MISSION MODELS</span><h2>منظومة تُفهم من أثر مهماتها.</h2><p>أربعة تصورات هندسية تشرح كيف تنتظم مجالات العمل من منظور دفاعي. الرسومات توضيحية عالية المستوى، وليست خرائط تشغيل أو كشفًا للبنية الداخلية.</p></div>

      <article className="aegis-mission-card">
        <div className="aegis-mission-copy"><span>MODEL 01 / DATA FLOW & TRUST BOUNDARIES</span><h3>رحلة الإشارة من المصدر إلى القرار.</h3><p>تبدأ المهمة باستقبال مؤشرات من بيئات رقمية متعددة، ثم تنظيمها ووضعها في سياق قابل للفهم. بعد ذلك تُراجع النتائج ضمن حدود الثقة والسياسات المعتمدة، قبل تحديد الإجراء المناسب.</p><ul><li>تجميع الرؤية من مصادر متنوعة.</li><li>فصل البيانات بحسب سياق الثقة.</li><li>مراجعة القرار قبل أي إجراء مؤثر.</li></ul></div>
        <div className="ag-diagram aegis-mission-diagram"><div className="ag-diagram-head"><span>DATA FLOW / TRUST MODEL</span><b>CONCEPTUAL VIEW · 01</b></div><div className="ag-flow-sources"><span>NETWORK SIGNALS</span><span>HOST ACTIVITY</span><span>APPLICATION EVENTS</span><span>EXTERNAL INTEL</span></div><div className="ag-flow-down">↓ <small>COLLECT · NORMALIZE · CONTEXTUALIZE</small></div><div className="ag-flow-node"><b>ANALYTICAL CONTEXT</b><small>ربط الإشارات بالسياق وتقدير دلالتها</small></div><div className="ag-flow-down">↓ <small>POLICY & TRUST REVIEW</small></div><div className="ag-trust-boundary"><span>CONTROLLED DECISION BOUNDARY</span><div className="ag-trust-columns"><article><b>VALIDATION</b><small>مراجعة المؤشرات والقرائن</small></article><article><b>HUMAN OVERSIGHT</b><small>إشراف وموافقة عند الحاجة</small></article></div></div><div className="ag-flow-down">↓ <small>AUTHORIZED OUTCOME</small></div><div className="ag-flow-outcomes"><article><b>DEFENSIVE ACTION</b><small>إجراء ضمن النطاق المصرح</small></article><article><b>EVIDENCE RECORD</b><small>توثيق يحافظ على السياق</small></article></div><div className="ag-diagram-foot"><span>TRUST BEFORE ACTION</span><span>ILLUSTRATIVE MODEL</span></div></div>
      </article>

      <article className="aegis-mission-card aegis-mission-reverse">
        <div className="aegis-mission-copy"><span>MODEL 02 / ENGINE DEPENDENCY MAP</span><h3>قدرات مترابطة، لا أدوات منعزلة.</h3><p>توضح الخريطة كيف تتكامل مجالات الرصد والتحليل وصناعة القرار مع المخرجات الدفاعية والتحقيقية. المقصود هو ترابط المسؤوليات، لا وصف الاعتماد البرمجي أو ترتيب الوحدات الفعلي.</p><ul><li>مصادر الرؤية تمد التحليل بالسياق.</li><li>التحليل يدعم التقييم والسياسات.</li><li>المخرجات تجمع بين الحماية والتوثيق والتحقيق.</li></ul></div>
        <div className="ag-diagram aegis-mission-diagram"><div className="ag-diagram-head"><span>ENGINE DEPENDENCY / CONCEPT MAP</span><b>CONCEPTUAL VIEW · 02</b></div><div className="ag-module-inputs"><article><b>ENVIRONMENT</b><small>الشبكات والأنظمة</small></article><article><b>INTELLIGENCE</b><small>السياق والمؤشرات</small></article><article><b>CODE SURFACE</b><small>مراجعة الأصول البرمجية</small></article><article><b>TELEMETRY</b><small>الأحداث والإشارات</small></article></div><div className="ag-module-connector"><span>↓</span><small>VISIBILITY & ANALYSIS</small></div><div className="ag-module-core"><article><b>DETECTION CONTEXT</b><small>تمييز الأنماط وربط الدلالات</small></article><article><b>POLICY & ORCHESTRATION</b><small>تقييم الإجراء وحدود الصلاحية</small></article><article><b>HUMAN REVIEW</b><small>إشراف القرار الحساس</small></article></div><div className="ag-module-connector"><span>↓</span><small>COORDINATED MISSION OUTCOMES</small></div><div className="ag-module-outcomes"><article><b>DEFENSE</b><small>تقليل أثر المخاطر</small></article><article><b>INVESTIGATION</b><small>فهم الحادث وسياقه</small></article><article><b>EVIDENCE</b><small>حفظ الأثر والتوثيق</small></article><article><b>REPORTING</b><small>مخرجات قابلة للمراجعة</small></article></div><div className="ag-diagram-foot"><span>CONNECTED RESPONSIBILITIES</span><span>NOT AN INTERNAL TOPOLOGY</span></div></div>
      </article>

      <article className="aegis-mission-card">
        <div className="aegis-mission-copy"><span>MODEL 03 / RESPONSE & INVESTIGATION CYCLE</span><h3>استجابة منضبطة تبدأ بالفهم وتنتهي بالتعلّم.</h3><p>يعرض هذا النموذج تسلسلًا عمليًا عامًا للتعامل مع الحوادث: فهم الإشارة، التحقق من دلالتها، تقدير الأولوية، ثم اختيار استجابة مصرح بها بالتوازي مع حفظ الأدلة والتحقيق في السبب والأثر.</p><ul><li>التحقق قبل التصعيد أو اتخاذ الإجراء.</li><li>موازنة الاحتواء مع سلامة الأدلة.</li><li>توثيق النتائج واستخلاص التحسينات.</li></ul></div>
        <div className="ag-diagram aegis-mission-diagram"><div className="ag-diagram-head"><span>RESPONSE & INVESTIGATION CYCLE</span><b>CONCEPTUAL VIEW · 03</b></div><div className="ag-cycle-track"><article><i>01</i><b>OBSERVE</b><small>ملاحظة الإشارة</small><span>→</span></article><article><i>02</i><b>VALIDATE</b><small>التحقق والسياق</small><span>→</span></article><article><i>03</i><b>PRIORITIZE</b><small>تقدير الأثر</small><span>→</span></article><article><i>04</i><b>AUTHORIZE</b><small>مراجعة الصلاحية</small><span>→</span></article><article><i>05</i><b>RESPOND</b><small>استجابة منضبطة</small><span>→</span></article><article><i>06</i><b>INVESTIGATE</b><small>تحليل السبب والأثر</small><span>→</span></article><article><i>07</i><b>PRESERVE</b><small>حفظ الأدلة والتعلّم</small><span>↺</span></article></div><div className="ag-cycle-branches"><article><b>DECISION GATE</b><small>تُراجع الإجراءات الحساسة وفق النطاق والتفويض.</small></article><article><b>EVIDENCE INTEGRITY</b><small>يُراعى توثيق المصدر والسياق وسلامة الأثر.</small></article><article><b>CONTINUOUS LEARNING</b><small>تتحول الملاحظات إلى فرص تحسين هندسي.</small></article></div><div className="ag-diagram-foot"><span>UNDERSTAND → DECIDE → RESPOND → LEARN</span><span>ILLUSTRATIVE LIFECYCLE</span></div></div>
      </article>

      <article className="aegis-mission-card aegis-mission-reverse">
        <div className="aegis-mission-copy"><span>MODEL 04 / ENGINEERING MATURITY MAP</span><h3>النضج الهندسي مسار منضبط.</h3><p>إطار يصف محاور بناء المنظومة وتقييمها تدريجيًا، من تأسيس الأسس إلى تكامل المسؤوليات ثم التحقق والضمان. لا تمثل المراحل إعلانًا عن اكتمال أو اعتماد مستوى بعينه.</p><ul><li>تأسيس مبادئ التصميم والحوكمة.</li><li>تنسيق المجالات والواجهات والمسؤوليات.</li><li>التحقق والتوثيق والتحسين المستمر.</li></ul></div>
        <div className="ag-diagram aegis-mission-diagram"><div className="ag-diagram-head"><span>ENGINEERING MATURITY / EVOLUTION</span><b>CONCEPTUAL VIEW · 04</b></div><div className="ag-maturity-axis"><span>FOUNDATION</span><i/><span>INTEGRATION</span><i/><span>ASSURANCE</span></div><div className="ag-maturity-grid"><article><span>PHASE 01</span><b>FOUNDATION</b><strong>الأساس الهندسي</strong><small>المبادئ، الحدود، المسؤوليات</small><i>DESIGN DISCIPLINE</i></article><article className="ag-maturity-integration"><span>PHASE 02</span><b>INTEGRATION</b><strong>التكامل المنضبط</strong><small>التنسيق، الاتساق، قابلية التوسع</small><i>SYSTEM COHERENCE</i></article><article className="ag-maturity-assurance"><span>PHASE 03</span><b>ASSURANCE</b><strong>التحقق والضمان</strong><small>المراجعة، الأدلة، الاعتمادية</small><i>VERIFIABLE QUALITY</i></article><article><span>ONGOING</span><b>EVOLUTION</b><strong>التطوير المستمر</strong><small>التعلم، التحسين، التكيف</small><i>CONTROLLED GROWTH</i></article></div><div className="ag-maturity-footer"><b>ENGINEERING GOVERNANCE</b><small>توثيق القرارات وحدود النطاق</small><b>QUALITY ASSURANCE</b><small>مراجعة مستمرة دون ادعاء اكتمال غير موثق</small></div><div className="ag-diagram-foot"><span>BUILD WITH DISCIPLINE</span><span>MATURITY IS EVIDENCE-LED</span></div></div>
      </article>
    </section>

    <section className="aegis-section aegis-private-section">
      <div className="aegis-section-head"><span>06 / DESIGN PRINCIPLES</span><h2>مبادئ ترسم هوية المنظومة.</h2></div>
      <div className="aegis-principle-grid">{principles.map(([en,ar],i)=><article key={en}><span>0{i+1}</span><b>{en}</b><small>{ar}</small></article>)}</div>
    </section>

    <section className="aegis-private-founder" id="architect">
      <div className="aegis-founder-symbol"><ShieldCheck size={42}/><span>ARCHITECT SIGNATURE</span></div>
      <div><span className="aegis-overline">ORIGINATOR / FOUNDER / LEAD SYSTEMS ARCHITECT</span><h2>المهندس عرفات عبدالله الكاملي</h2><p>Arfat Abdullah AlKamli · Founder &amp; Lead Systems Architect</p><small>صاحب الفكرة والرؤية المعمارية والهوية الهندسية لـ AEGIS-TITAN. منظومة خاصة صيغت رؤيتها بصورة مستقلة، وتُطوّر لتتجه نحو احتياجات المؤسسات والشركات.</small></div>
      <div className="aegis-founder-seal">AEGIS<br/>TITAN</div>
    </section>

    <section className="aegis-private-footer"><div><Sparkles size={16}/><b>THE ARCHITECTURE REMAINS PRIVATE.</b></div><p>تفاصيل المنظومة الهندسية محمية. هذا العرض يعرّف بالهوية والقدرات العامة فقط.</p><span>AEGIS-TITAN © SOVEREIGN DEFENSE ECOSYSTEM</span></section>
  </main>;
}
