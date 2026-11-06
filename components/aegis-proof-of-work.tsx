import Link from 'next/link';
import { ArrowUpRight, Code2, FileText, GitBranch, LockKeyhole, ShieldCheck } from 'lucide-react';

const stack = [
  'Python 3.10+', 'Rich', 'asyncio', 'threading', 'SQLite',
  'hashlib / SHA-256', 'socket', 'struct', 'Pillow (PIL)', 'Scapy'
];

const modules = [
  { name: 'Event-Driven Core', file: 'core/event_bus.py', detail: 'ناقل أحداث غير متزامن بنمط Publish/Subscribe، مع عقود أحداث موحدة في core/contracts.py.' },
  { name: 'Network Intelligence', file: 'modules/network_intel/network_sentinel.py', detail: 'محرك DeepNetworkSentinel لالتقاط الحزم وتحليل مؤشرات الشبكة وبروتوكولاتها.' },
  { name: 'Host Integrity', file: 'modules/host_integrity/fim_sentinel.py', detail: 'مكوّن FileIntegritySentinel لإنشاء خط أساس لبصمات الملفات ورصد التغييرات.' },
  { name: 'Digital Forensics', file: 'modules/dfir_core/digital_forensics.py', detail: 'محلل DeepForensicsAnalyzer يتضمن حساب الإنتروبي واستخراج السلاسل وتحليل بيانات الملفات.' },
  { name: 'Active Defense & Evidence', file: 'modules/active_defense/firewall_enforcer.py · core/forensic_ledger.py', detail: 'تنفيذ أوامر إنفاذ عبر iptables وحجر الملفات، مع سجل SQLite مترابط ببصمات SHA-256.' }
];

const decisions = [
  { title: 'Event-driven dispatch', file: 'core/event_bus.py', why: 'توزيع الأحداث على المشتركين بحسب نوع المحرك، مع تنفيذ غير متزامن.', tradeoff: 'أكثر مرونة من الاستدعاء المباشر، لكنه يحتاج مراقبة دقيقة لأخطاء المشتركين.' },
  { title: 'Persistent SQLite ledger', file: 'core/forensic_ledger.py', why: 'حفظ كتل الأدلة على القرص وإعادة تحميل السلسلة والتحقق منها عند بدء التشغيل.', tradeoff: 'تشغيل محلي بسيط؛ أما التخزين الموزع والتزامن متعدد العقد فيحتاجان طبقة أخرى.' },
  { title: 'Canonical JSON + SHA-256', file: 'core/forensic_ledger.py', why: 'ترتيب مفاتيح JSON قبل حساب البصمة وربط كل كتلة ببصمة الكتلة السابقة.', tradeoff: 'يوفر كشفاً للتغييرات عند إعادة التحقق، لكنه ليس بديلاً عن توقيع بمفتاح خاص أو تخزين غير قابل للتعديل.' },
  { title: 'Thread-to-async bridge', file: 'core/orchestrator.py', why: 'تمرير أحداث خيوط الاستشعار إلى حلقة asyncio باستخدام call_soon_threadsafe.', tradeoff: 'يدعم مصادر حجبية ومتزامنة، لكنه يزيد متطلبات إدارة دورة حياة الخيوط والطابور.' },
  { title: 'Linux-native enforcement', file: 'modules/active_defense/firewall_enforcer.py', why: 'استخدام iptables وأدوات النظام لتطبيق الحظر والحجر ضمن صلاحيات root.', tradeoff: 'تكامل مباشر مع بيئة Linux، لكنه أقل قابلية للنقل إلى أنظمة تشغيل أخرى.' }
];

const excerpt = [
  'class ForensicBlock:',
  '    """كتلة تشفيرية دائمة موثقة بالهاش"""',
  '    def __init__(self, index, timestamp, event_payload, prev_hash, block_hash=""):',
  '        self.index = index',
  '        self.timestamp = timestamp',
  '        self.event_payload = event_payload',
  '        self.prev_hash = prev_hash',
  '        self.block_hash = block_hash or self.calculate_hash()',
  '',
  '    def calculate_hash(self) -> str:',
  '        block_string = json.dumps({',
  '            "index": self.index,',
  '            "timestamp": self.timestamp,',
  '            "event_payload": self.event_payload,',
  '            "prev_hash": self.prev_hash',
  '        }, sort_keys=True)',
  '        return hashlib.sha256(block_string.encode("utf-8")).hexdigest()'
];

const auditChecks = [
  ['Core structure', 'وجود event bus وعقود أحداث ومنسق مركزي في الملفات المفحوصة.'],
  ['Network and host sensors', 'وجود وحدات التقاط وتحليل الشبكة ومراقبة سلامة الملفات.'],
  ['DFIR and evidence', 'وجود محلل جنائي رقمي وسجل SQLite مع تحقق SHA-256 للسلسلة.'],
  ['Test source', 'ملف tests/test_defensive_engines.py يحتوي على 7 دوال test_*؛ لم يُنفّذ الاختبار ضمن هذه المراجعة.'],
  ['Operational scripts', 'المستودع يحتوي أيضاً على سكربتات تحقق مرحلية؛ وجودها لا يثبت نجاح تشغيلها في هذه المراجعة.']
];

export default function AegisProofOfWork() {
  return (
    <section className="aegis-proof" id="verified-evidence" aria-labelledby="aegis-proof-title">
      <div className="aegis-proof-heading">
        <span>VERIFIED ENGINEERING EVIDENCE / 01</span>
        <h2 id="aegis-proof-title">أدلة هندسية موثقة</h2>
        <p>مراجعة مصدرية لملفات محددة من مستودع AEGIS-TITAN الخاص. نعرض ما ظهر في الشيفرة، ونفصل ذلك عن نتائج التشغيل والاعتماد المستقل.</p>
      </div>

      <div className="aegis-proof-review">
        <div className="aegis-proof-review-top">
          <span className="aegis-proof-status"><ShieldCheck size={14}/> SOURCE REVIEWED</span>
          <span>06 NOV 2026 · AI-ASSISTED SOURCE INSPECTION</span>
        </div>
        <h3>Code evidence, not a certification claim.</h3>
        <p>تمت مراجعة ملفات مصدر محددة على commit <code>0be0ee4c57cd</code>. هذه مراجعة مساعدة بالذكاء الاصطناعي وليست تدقيقاً مستقلاً من جهة اعتماد أو اختبار اختراق.</p>
        <div className="aegis-proof-facts">
          <article><b>7</b><span>test methods in one reviewed unittest file</span></article>
          <article><b>22</b><span>manual registry entries asserted by that test file</span></article>
          <article><b>PRIVATE</b><span>repository visibility · access by request</span></article>
        </div>
        <div className="aegis-proof-private"><LockKeyhole size={17}/><span><b>Private repository — Access on Request</b><small>لا نعرض رابطاً عاماً لمستودع غير عام، ويمكن طلب عرض تقني أو وصول محدود بعد مراجعة الطلب.</small></span></div>
      </div>

      <div className="aegis-proof-block">
        <div className="aegis-proof-subhead"><span>02 / TECHNOLOGY STACK</span><h3>التقنيات الظاهرة في الملفات المفحوصة</h3></div>
        <div className="aegis-proof-tags">{stack.map(item => <span key={item}>{item}</span>)}</div>
        <p className="aegis-proof-note">القائمة مبنية على الاستيرادات والاستخدامات الظاهرة في الملفات التي تمت مراجعتها؛ لا تمثل جرداً كاملاً للاعتماديات أو إصداراتها.</p>
      </div>

      <div className="aegis-proof-block">
        <div className="aegis-proof-subhead"><span>03 / IMPLEMENTATION MAP</span><h3>مكونات موجودة في المصدر</h3></div>
        <div className="aegis-proof-module-grid">
          {modules.map((item, index) => <article key={item.name}>
            <span>MODULE 0{index + 1}</span><h4>{item.name}</h4><p>{item.detail}</p><code>{item.file}</code>
          </article>)}
        </div>
      </div>

      <div className="aegis-proof-block">
        <div className="aegis-proof-subhead"><span>04 / CODE EXCERPT</span><h3>مقتطف من الكود الفعلي</h3></div>
        <div className="aegis-proof-code">
          <div className="aegis-proof-codebar"><span><Code2 size={14}/> core/forensic_ledger.py</span><span>PYTHON · SHA-256</span></div>
          <pre aria-label="Python source excerpt"><code>{excerpt.map((line, index) => <span className="aegis-code-line" key={index}><i>{String(index + 1).padStart(2, '0')}</i>{line || ' '}{'\n'}</span>)}</code></pre>
          <p>مقتطف فعلي من المستودع الخاص — <code>core/forensic_ledger.py</code>. يعرض طريقة ترتيب مفاتيح JSON وحساب SHA-256؛ ولا يثبت وحده مقاومة كل أشكال التلاعب.</p>
        </div>
      </div>

      <div className="aegis-proof-block">
        <div className="aegis-proof-subhead"><span>05 / AUDIT SUMMARY</span><h3>ملخص الفحص المصدري</h3></div>
        <div className="aegis-proof-audit">
          {auditChecks.map(([title, description]) => <article key={title}><ShieldCheck size={16}/><div><b>{title}</b><p>{description}</p></div></article>)}
        </div>
        <div className="aegis-proof-limitations">
          <b>حدود المراجعة وما يحتاج إلى تحقق لاحق</b>
          <ul>
            <li>لم يتم تشغيل الاختبارات أو قياس تغطيتها في هذه المراجعة.</li>
            <li>لم يتم حساب إجمالي ملفات المستودع أو أسطره.</li>
            <li>لم يتم إجراء اختبار اختراق أو تدقيق أمني مستقل.</li>
            <li>لم يتم قياس الدقة أو معدلات الإنذارات الكاذبة على مجموعة معيارية.</li>
            <li>يحتاج سجل الأحداث إلى تحسين قابلية رصد الاستثناءات؛ إذ يلتقط Event Bus أخطاء المشتركين دون تسجيل تشغيلي ظاهر في الدالة المفحوصة.</li>
          </ul>
        </div>
        <div className="aegis-proof-roadmap"><b>ROADMAP / NEXT VERIFICATION</b><div><span>01</span> تشغيل الاختبارات في بيئة معزولة وتوثيق النتائج</div><div><span>02</span> إضافة تسجيل منظم لأخطاء المشتركين ومؤشرات فشل المعالجة</div><div><span>03</span> توثيق الاعتماديات وإصداراتها وفحصها أمنياً</div><div><span>04</span> قياس Precision / Recall / F1 على مجموعة بيانات معلنة</div></div>
        <p className="aegis-proof-report-note">تقرير الفحص PDF: لم يُنشر بعد. لن نضع رابط تنزيل قبل إنشاء تقرير نهائي يتضمن نطاق المراجعة ونتائج التشغيل الفعلية.</p>
      </div>

      <div className="aegis-proof-block">
        <div className="aegis-proof-subhead"><span>06 / DESIGN DECISIONS & TRADE-OFFS</span><h3>قرارات هندسية ومقايضاتها</h3></div>
        <div className="aegis-proof-decisions">
          {decisions.map((item, index) => <article key={item.title}>
            <span>DECISION 0{index + 1}</span><h4>{item.title}</h4>
            <div><b>WHY PRESENT IN CODE</b><p>{item.why}</p></div>
            <div><b>ENGINEERING TRADE-OFF</b><p>{item.tradeoff}</p></div>
            <code>{item.file}</code>
          </article>)}
        </div>
      </div>

      <div className="aegis-proof-cta">
        <div><span>TECHNICAL WALKTHROUGH / ACCESS REQUEST</span><h3>اطلب عرضاً تقنياً أو وصولاً للمستودع</h3><p>تواصل لشرح البنية، أو مناقشة مكونات محددة، أو طلب وصول محدود للمراجعة.</p></div>
        <div className="aegis-proof-cta-actions">
          <Link href="/contact?subject=AEGIS-TITAN%20Technical%20Walkthrough">طلب عرض تقني <ArrowUpRight size={15}/></Link>
          <Link href="/contact?subject=AEGIS-TITAN%20Repository%20Access">طلب وصول للمستودع <ArrowUpRight size={15}/></Link>
          <Link href="/contact?subject=AEGIS-TITAN%20Vision%20Document">طلب وثيقة الرؤية <FileText size={15}/></Link>
        </div>
      </div>
    </section>
  );
}
