import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'الشهادات والدورات',
  alternates:{canonical:'/credentials'},
  description:'الشهادات الأصلية والشارات الرقمية الصادرة عن Cisco Networking Academy.'
};

const credlyProfile='https://www.credly.com/users/arfat-alkamly';

const ciscoCredentials=[
  {name:'Cybersecurity Defense Analyst Career Path',date:'29 يوليو 2026',area:'Cybersecurity · SOC · Threat Analysis',file:'CybersecurityDefenseAnalystCareerPathv120261103-20-1nonu3.pdf'},
  {name:'Network Defense',date:'27 يوليو 2026',area:'Network Security · Network Defense',file:'NetworkDefenseUpdate20261103-20-xyacmt.pdf'},
  {name:'Networking Basics',date:'27 يوليو 2026',area:'Networking · Network Fundamentals',file:'NetworkingBasicsUpdate20261103-20-u7bz38.pdf'},
  {name:'Python Essentials 2',date:'27 يوليو 2026',area:'Python · Programming Fundamentals',file:'PythonEssentials2Update20261103-20-7rc84e.pdf'},
  {name:'Python Essentials 1',date:'25 يوليو 2026',area:'Python · Programming Fundamentals',file:'PythonEssentials1Update20261103-20-qqgzmk.pdf'},
  {name:'Introduction to Modern AI',date:'23 يوليو 2026',area:'Artificial Intelligence · AI Fundamentals',file:'IntrotoModernAIUpdate20261103-20-kom6qi.pdf'},
  {name:'Endpoint Security',date:'3 يونيو 2026',area:'Endpoint Protection · Security Fundamentals',file:'EndpointSecurityUpdate20261103-20-6t8kl6.pdf'},
  {name:'Create Digital Content, Communicate and Collaborate Online',date:'27 مايو 2026',area:'Digital Skills · Online Collaboration',file:'CreateDigitalContentUpdate20261103-20-jw76h8.pdf'},
  {name:'Introduction to Cybersecurity',date:'18 مايو 2026',area:'Cybersecurity · Security Awareness',file:'I2CSUpdate20261103-20-mm0e2z.pdf'}
];

const pdfBase='https://raw.githubusercontent.com/arfat-alkamly/arfat-alkamly-portfolio/public-certificates-upload/public/certificates/';

const otherCredentials=[
  {name:'IT Customer Support Basics',url:'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url',kind:'شارة رقمية'},
  {name:'Cisco Learn-A-Thon 2026',url:'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url',kind:'شارة مشاركة'},
  {name:'Introduction to Artificial Intelligence',url:'https://lnkd.in/dRCcTwf5',kind:'دورة / شهادة إتمام'}
];

export default function CredentialsPage(){
  return <main className="content-page credentials-page">
    <span className="eyebrow">CREDENTIALS</span>
    <h1>الشهادات والدورات</h1>
    <p className="lead">سجل موثق للشهادات التقنية والشارات الرقمية، مع معاينة الوثيقة الأصلية وبيانات الإصدار وروابط الجهة المانحة.</p>

    <section className="credentials-section" aria-labelledby="cisco-credentials-title">
      <div className="credentials-section-heading">
        <div><span className="eyebrow">CISCO NETWORKING ACADEMY</span><h2 id="cisco-credentials-title">الشهادات والشارات المهنية</h2></div>
        <span className="credentials-count">09 CREDENTIALS</span>
      </div>
      <p className="credentials-section-lead">الوثائق التالية هي ملفات PDF الأصلية المرفوعة في مستودع المشروع. افتح المعاينة أو نزّل الشهادة للتحقق من تفاصيلها.</p>
      <div className="cisco-credentials-grid">
        {ciscoCredentials.map((credential,i)=>{
          const pdf=pdfBase+credential.file;
          return <article className="cisco-credential-card" key={credential.name}>
            <div className="certificate-document-preview">
              <iframe src={pdf+'#toolbar=0&navpanes=0&view=FitH'} title={'معاينة الشهادة: '+credential.name} loading="lazy" />
            </div>
            <div className="cisco-credential-info">
              <span className="credential-index">CISCO CREDENTIAL / {String(i+1).padStart(2,'0')}</span>
              <h3>{credential.name}</h3>
              <p className="credential-issuer">Cisco Networking Academy</p>
              <div className="credential-meta"><span>{credential.date}</span><span>{credential.area}</span></div>
              <div className="credential-actions">
                <a className="text-link" href={pdf} target="_blank" rel="noopener noreferrer">فتح الشهادة الأصلية ↗</a>
                <a className="text-link" href={credlyProfile} target="_blank" rel="noopener noreferrer">ملف Credly ↗</a>
              </div>
            </div>
          </article>;
        })}
      </div>
    </section>

    <section className="credentials-section other-credentials-section" aria-labelledby="other-credentials-title">
      <div className="credentials-section-heading"><div><span className="eyebrow">COURSES & OTHER CREDENTIALS</span><h2 id="other-credentials-title">دورات واعتمادات أخرى</h2></div></div>
      <div className="archive-grid">{otherCredentials.map((x,i)=><article className="archive-card" key={x.name}>
        <span>CREDENTIAL / 0{i+1} · {x.kind}</span><h3>{x.name}</h3>
        <p>صفحة الاعتماد لدى الجهة المصدرة.</p>
        <a className="text-link" href={x.url} target="_blank" rel="noopener noreferrer">فتح صفحة الشهادة والتحقق ↗</a>
      </article>)}</div>
    </section>
    <p className="disclaimer">المعاينات مرتبطة بملفات الشهادات الأصلية. روابط Credly تفتح الملف الشخصي العام؛ لم تُربط الشارات الفردية إلا بعد التحقق من تطابق رابط كل شارة مع اسمها.</p>
  </main>;
}
