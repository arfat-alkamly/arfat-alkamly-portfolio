import type {Metadata} from 'next';
export const metadata:Metadata={title:'الشهادات والدورات',alternates:{canonical:'/credentials'},description:'الشهادات والدورات التقنية وروابط التحقق المتاحة.'};
const credlyProfile='https://www.credly.com/users/arfat-alkamly';
const items=[
 {name:'Cybersecurity Defense Analyst Career Path',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'مسار مهني'},
 {name:'Network Defense',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Networking Basics',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Python Essentials 2',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Python Essentials 1',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Introduction to Modern AI',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Endpoint Security',issuer:'Cisco Networking Academy',url:'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url',kind:'شارة رقمية'},
 {name:'Introduction to Cybersecurity',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'Create Digital Content, Communicate and Collaborate Online',issuer:'Cisco Networking Academy',url:credlyProfile,kind:'شارة رقمية'},
 {name:'IT Customer Support Basics',issuer:'Credly',url:'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url',kind:'شارة رقمية'},
 {name:'Cisco Learn-A-Thon 2026',issuer:'Cisco',url:'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url',kind:'شارة مشاركة'},
 {name:'Introduction to Artificial Intelligence',issuer:'LinkedIn',url:'https://lnkd.in/dRCcTwf5',kind:'دورة / شهادة إتمام'}
];
export default function CredentialsPage(){return <main className="content-page"><span className="eyebrow">CREDENTIALS</span><h1>الشهادات والدورات</h1><p className="lead">سجل الشهادات والدورات التي تتوفر لها روابط خارجية. افتح صفحة الجهة المصدرة للاطلاع على تفاصيل الإصدار والتحقق.</p><div className="archive-grid">{items.map((x,i)=><article className="archive-card" key={x.name}><span>CREDENTIAL / {String(i+1).padStart(2,'0')} · {x.kind}</span><h2>{x.name}</h2><p>{x.issuer}. تفاصيل الإصدار والتحقق متاحة لدى الجهة المصدرة.</p><a className="text-link" href={x.url} target="_blank" rel="noopener noreferrer">فتح صفحة الشهادة والتحقق ↗</a></article>)}</div><p className="disclaimer">بعض الروابط تفتح ملف الاعتمادات الشخصي لدى Credly بدل صفحة شارة منفردة؛ المرجع النهائي هو سجل الشهادة لدى الجهة المصدرة.</p></main>}
