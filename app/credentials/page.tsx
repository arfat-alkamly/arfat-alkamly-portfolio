import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'الشهادات والدورات',
  alternates:{canonical:'/credentials'},
  description:'الشهادات الرقمية والدورات التقنية والاعتمادات المهنية.'
};

const ciscoBadges=[
  {name:'Create Digital Content, Communicate and Collaborate Online',date:'27 مايو 2026',image:0,area:'Digital Skills'},
  {name:'Cybersecurity Defense Analyst Career Path',date:'29 يوليو 2026',image:1,area:'Cybersecurity'},
  {name:'Endpoint Security',date:'3 يونيو 2026',image:2,area:'Endpoint Security'},
  {name:'Introduction to Cybersecurity',date:'18 مايو 2026',image:3,area:'Cybersecurity'},
  {name:'Introduction to Modern AI',date:'23 يوليو 2026',image:4,area:'Artificial Intelligence'},
  {name:'Network Defense',date:'27 يوليو 2026',image:5,area:'Network Security'},
  {name:'Networking Basics',date:'27 يوليو 2026',image:6,area:'Networking'},
  {name:'Python Essentials 1',date:'25 يوليو 2026',image:7,area:'Programming'},
  {name:'Python Essentials 2',date:'27 يوليو 2026',image:8,area:'Programming'}
];

const otherCredentials=[
  {name:'Cisco Endpoint Security',url:'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url',kind:'شارة رقمية'},
  {name:'IT Customer Support Basics',url:'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url',kind:'شارة رقمية'},
  {name:'Cisco Learn-A-Thon 2026',url:'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url',kind:'شارة مشاركة'},
  {name:'Introduction to Artificial Intelligence',url:'https://lnkd.in/dRCcTwf5',kind:'دورة / شهادة إتمام'}
];

export default function CredentialsPage(){
  return <main className="content-page credentials-page">
    <span className="eyebrow">CREDENTIALS</span>
    <h1>الشهادات والدورات</h1>
    <p className="lead">سجل الاعتمادات الرقمية والدورات التقنية، مع بيانات الإصدار والجهة المانحة وروابط التحقق المتاحة.</p>

    <section className="credentials-section" aria-labelledby="cisco-credentials-title">
      <div className="credentials-section-heading">
        <div><span className="eyebrow">CISCO NETWORKING ACADEMY</span><h2 id="cisco-credentials-title">الشارات المهنية</h2></div>
        <span className="credentials-count">09 BADGES</span>
      </div>
      <p className="credentials-section-lead">تسع شارات رقمية صادرة عن Cisco Networking Academy، كما تظهر في سجل Credly.</p>
      <div className="cisco-credentials-grid">
        {ciscoBadges.map((badge,i)=><article className="cisco-credential-card" key={badge.name}>
          <div className="cisco-badge-art" role="img" aria-label={'شارة '+badge.name} style={{backgroundPosition:`${(badge.image%3)*50}% ${Math.floor(badge.image/3)*50}%`}} />
          <div className="cisco-credential-info">
            <span className="credential-index">CISCO BADGE / 0{i+1}</span>
            <h3>{badge.name}</h3>
            <p className="credential-issuer">Cisco Networking Academy</p>
            <div className="credential-meta"><span>{badge.date}</span><span>{badge.area}</span></div>
            <span className="credential-link-pending">رابط التحقق سيُضاف لاحقًا</span>
          </div>
        </article>)}
      </div>
    </section>

    <section className="credentials-section other-credentials-section" aria-labelledby="other-credentials-title">
      <div className="credentials-section-heading"><div><span className="eyebrow">COURSES & OTHER CREDENTIALS</span><h2 id="other-credentials-title">دورات واعتمادات أخرى</h2></div></div>
      <div className="archive-grid">{otherCredentials.map((x,i)=><article className="archive-card" key={x.name}>
        <span>CREDENTIAL / 0{i+1} · {x.kind}</span><h3>{x.name}</h3>
        <p>تفاصيل الجهة المصدرة والتحقق متاحة عبر الرابط الخارجي.</p>
        <a className="text-link" href={x.url} target="_blank" rel="noopener noreferrer">فتح صفحة الشهادة والتحقق ↗</a>
      </article>)}</div>
    </section>
    <p className="disclaimer">تُعرض الشارات التسع بصورها كما ظهرت في سجل Credly المرسل. ستُضاف روابط التحقق الفردية بعد مطابقة كل رابط مع الشارة الصحيحة.</p>
  </main>;
}
