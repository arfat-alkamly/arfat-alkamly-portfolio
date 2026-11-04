import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Fingerprint, RadioTower, ScanSearch, Network, LockKeyhole, Activity, Eye, Layers3, Orbit, Radar, Shield, Database, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AEGIS-TITAN | Strategic Cyber Defense',
  description: 'AEGIS-TITAN — منظومة خاصة لهندسة الدفاع السيبراني. القدرات ظاهرة، والتفاصيل الهندسية محمية.'
};

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

export default function AegisPage() {
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
          <p className="aegis-intro">منظومة خاصة لهندسة الدفاع السيبراني، تجمع الرؤية والتحليل والوعي الأمني والاستجابة ضمن توجه هندسي موحد. صُممت لتتعامل مع المشهد الرقمي بمنظور دفاعي واسع، مع إبقاء تفاصيلها الجوهرية ضمن نطاقها الخاص.</p>
          <div className="aegis-actions"><a href="#capabilities">استكشف مجالات القدرات <ArrowUpRight size={16}/></a><a href="#architect">عن المهندس <ArrowUpRight size={16}/></a></div>
          <div className="aegis-status aegis-private-status"><span><i/> PRIVATE / PROPRIETARY</span><span>DEFENSE ORIENTED</span><span>SOVEREIGN IDENTITY</span></div>
        </div>
        <Emblem/>
      </div>
      <div className="aegis-hero-foot"><span>AEGIS-TITAN / PRIVATE ECOSYSTEM</span><span>STRATEGIC CYBER DEFENSE</span></div>
      <SignalField/>
    </section>

    <section className="aegis-private-manifesto">
      <span className="aegis-overline">A DIFFERENT CLASS OF ENGINEERING</span>
      <h2>القدرات ظاهرة.<br/><em>والهندسة تبقى محمية.</em></h2>
      <p>ما يظهر هنا هو نطاق المهمة وأثرها الاستراتيجي؛ أما التفاصيل الداخلية، وآليات العمل، والبنية الخاصة، فتبقى خارج العرض العام.</p>
      <div className="aegis-manifesto-mark"><Orbit/><span>SEALED BY DESIGN</span></div>
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

    <section className="aegis-section aegis-private-section">
      <div className="aegis-section-head"><span>04 / DESIGN PRINCIPLES</span><h2>مبادئ ترسم هوية المنظومة.</h2></div>
      <div className="aegis-principle-grid">{principles.map(([en,ar],i)=><article key={en}><span>0{i+1}</span><b>{en}</b><small>{ar}</small></article>)}</div>
    </section>

    <section className="aegis-private-founder" id="architect">
      <div className="aegis-founder-symbol"><ShieldCheck size={42}/><span>ARCHITECT SIGNATURE</span></div>
      <div><span className="aegis-overline">ENGINEERING LEADERSHIP</span><h2>Arfat Alkamali</h2><p>Founder &amp; Lead Systems Architect</p><small>رؤية هندسية مستقلة. تطوير وبناء منظومة دفاع سيبراني خاصة.</small></div>
      <div className="aegis-founder-seal">AEGIS<br/>TITAN</div>
    </section>

    <section className="aegis-private-footer"><div><Sparkles size={16}/><b>THE ARCHITECTURE REMAINS PRIVATE.</b></div><p>تفاصيل المنظومة الهندسية محمية. هذا العرض يعرّف بالهوية والقدرات العامة فقط.</p><span>AEGIS-TITAN © SOVEREIGN DEFENSE ECOSYSTEM</span></section>
  </main>;
}
