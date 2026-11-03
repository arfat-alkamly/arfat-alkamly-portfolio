import type {Metadata} from 'next';
import Script from 'next/script';

export const metadata:Metadata={
  title:'الشهادات والشارات الرقمية',
  alternates:{canonical:'/credentials'},
  description:'سجل الشهادات الأصلية والشارات الرقمية المعتمدة من Cisco وCredly، مع المهارات وروابط التحقق.'
};

const credentials=[
  {name:'Cybersecurity Defense Analyst Career Path',date:'29 يوليو 2026',issuer:'Cisco بالتعاون مع Splunk',id:'23bda189-2470-4ce0-8065-ee904979ba21',skills:['Cybersecurity','Cybersecurity Standards','Security','Splunk','Threat Detection','Analyst','Big Data Analysis','Cyber Kill Chain Framework','Cyber Risk','Cyber Safety','Cybersecurity Systems','Monitoring','SOC','Threat-Hunting'],file:'CybersecurityDefenseAnalystCareerPathv120261103-20-1nonu3.pdf',description:'مسار مهني يركز على فهم مشهد التهديدات السيبرانية والعمل داخل مركز العمليات الأمنية SOC، واستخدام تقنيات Splunk للمراقبة والتحقيق والبحث عن التهديدات والاستجابة للحوادث.'},
  {name:'Network Defense',date:'27 يوليو 2026',issuer:'Cisco',id:'e16ca722-84d2-4da2-ad1f-46e972453890',skills:['Application Security','Cloud Security','Firewalls','Physical Security','Public Key Cryptography','Access Controls','Defense-in-Depth','End Device Logs','Evaluating Alerts','Hashing','Integrity And Authenticity','Network Hardening','Network Logs','Security Policies - Regulations - Standards','System And Network Defense'],file:'NetworkDefenseUpdate20261103-20-xyacmt.pdf',description:'مفاهيم وتقنيات مراقبة الشبكات وحمايتها، بما في ذلك التحكم بالوصول والجدران النارية وأمن السحابة والتشفير وتقييم التنبيهات الأمنية والاستجابة لها.'},
  {name:'Networking Basics',date:'27 يوليو 2026',issuer:'Cisco',id:'2f9902ec-e035-4b56-bf1b-42c66f05ed75',skills:['Application Layer Services','IPv4 Addresses','Network Media','Network Types','Protocols Standards','Wireless Access'],file:'NetworkingBasicsUpdate20261103-20-u7bz38.pdf',description:'أساسيات أنواع الشبكات وآلية عملها، وتبادل البيانات بين الأجهزة، ووسائط الاتصال وعناوين IP والبروتوكولات وخدمات التطبيقات والشبكات اللاسلكية.'},
  {name:'Python Essentials 2',date:'27 يوليو 2026',issuer:'Cisco بالتعاون مع OpenEDG',id:'de9c51d6-2eb6-4f7e-833a-31670170e278',skills:['Iterators','Python','Classes','Exceptions','Generators','Inheritance','Methods','Modules','Object Oriented Programming','Objects','Packages','PIP','Polymorphism','Properties'],file:'PythonEssentials2Update20261103-20-7rc84e.pdf',description:'موضوعات متقدمة في Python تشمل البرمجة كائنية التوجه، والفئات والكائنات والوراثة والاستثناءات والمولدات والمكررات والوحدات والحزم.'},
  {name:'Python Essentials 1',date:'25 يوليو 2026',issuer:'Cisco بالتعاون مع OpenEDG',id:'43943e68-05c5-40ea-93d1-d2a26e07ced0',skills:['Computer Programming','Python','Algorithmic Thinking','Analytical Thinking','Basic Python Programming','Best Practices in Programming','Design, Develop, and Debug Scripts','Entry-level','Procedural Programming'],file:'PythonEssentials1Update20261103-20-qqgzmk.pdf',description:'مدخل إلى البرمجة باستخدام Python، والتفكير الخوارزمي والتحليلي، وكتابة البرامج النصية وتطويرها وتصحيحها وفق ممارسات البرمجة الأساسية.'},
  {name:'Introduction to Modern AI',date:'23 يوليو 2026',issuer:'Cisco',id:'4e822fcc-656e-4891-bc51-666ca95cd6e8',skills:['Chatbots','Computer Vision','AI Learning','Machine Learning','Machine Translation','Prompting Tips'],file:'IntrotoModernAIUpdate20261103-20-kom6qi.pdf',description:'مقدمة إلى مفاهيم الذكاء الاصطناعي الحديث وتطبيقاته، بما في ذلك روبوتات المحادثة والرؤية الحاسوبية والتعلم الآلي والترجمة الآلية ومهارات كتابة المطالبات.'},
  {name:'Endpoint Security',date:'3 يونيو 2026',issuer:'Cisco',id:'f0520c01-63aa-4440-9df4-69c7303d8762',skills:['Application Security','Antimalware Protection','Common Cyber Threats','Defending Systems And Devices','Host-based Intrusion Prevention','IP/TCP/UDP Vulnerabilities','Linux Basics','Mitigating Common Network Attacks','Network Security Infrastructure','Securing WLANs','System And Endpoint Protection','Windows Security','Wireless And Mobile Device Attacks'],file:'EndpointSecurityUpdate20261103-20-6t8kl6.pdf',description:'أساسيات أمن الشبكات وأنظمة التشغيل وحماية الأجهزة الطرفية، والتعرف على التهديدات الشائعة وطرق الدفاع عن الأنظمة والأجهزة وتقليل مخاطر الهجمات.'},
  {name:'Create Digital Content, Communicate and Collaborate Online',date:'27 مايو 2026',issuer:'Cisco بالتعاون مع OpenEDG',id:'a370a36f-7ce1-4531-b44b-b909e56ee52d',skills:['Digital Accessibility','Digital Collaboration','Digital Communication','Digital Document Creation','Digital Etiquette','File Management and Backup','Hybrid Working Tools','Remote Work Skills'],file:'CreateDigitalContentUpdate20261103-20-jw76h8.pdf',description:'مهارات إنشاء المحتوى الرقمي والتواصل والتعاون عبر الإنترنت، وإتاحة المحتوى وإدارة الملفات والنسخ الاحتياطي وأدوات العمل عن بُعد.'},
  {name:'Introduction to Cybersecurity',date:'18 مايو 2026',issuer:'Cisco',id:'dd68b74c-65f9-468f-9a51-3bb78adad239',skills:['Cybersecurity','Threat Detection','Cyber Best Practices','Network Vulnerabilities','Privacy And Data Confidentiality'],file:'I2CSUpdate20261103-20-mm0e2z.pdf',description:'مفاهيم تمهيدية في الأمن السيبراني، وتأثير التهديدات على القطاعات المختلفة، والثغرات واكتشاف التهديدات والدفاع عنها، وأهمية الخصوصية وسرية البيانات.'}
];

const pdfBase='https://raw.githubusercontent.com/arfat-alkamly/arfat-alkamly-portfolio/public-certificates-upload/public/certificates/';
const credlyBase='https://www.credly.com/badges/';

export default function CredentialsPage(){
  return <main className="content-page credentials-page">
    <Script src="https://cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
    <span className="eyebrow">VERIFIED CREDENTIALS</span>
    <h1>الشهادات والشارات الرقمية</h1>
    <p className="lead">سجل موثق للشهادات والشارات الرقمية الصادرة عبر Cisco وCredly، مع بيانات الإصدار والمهارات المرتبطة بكل اعتماد وروابط التحقق المباشر.</p>
    <section className="credentials-section" aria-labelledby="cisco-credentials-title">
      <div className="credentials-section-heading">
        <div><span className="eyebrow">CISCO NETWORKING ACADEMY · CREDLY</span><h2 id="cisco-credentials-title">الشهادات والشارات المهنية</h2></div>
        <span className="credentials-count">09 VERIFIED BADGES</span>
      </div>
      <p className="credentials-section-lead">كل بطاقة تجمع الشارة الرقمية الخاصة بها، ووثيقة PDF الأصلية، والمهارات المسجلة في Credly. اضغط على الشارة أو رابط التحقق لفتح سجل الاعتماد.</p>
      <div className="cisco-credentials-grid">
        {credentials.map((credential,i)=>{
          const pdf=pdfBase+credential.file;
          const verify=credlyBase+credential.id+'/public_url';
          return <article className="cisco-credential-card" key={credential.id}>
            <div className="credential-badge-panel">
              <span className="credential-panel-label">OFFICIAL CREDLY BADGE</span>
              <div className="credly-embed-frame">
                <div data-iframe-width="180" data-iframe-height="230" data-share-badge-id={credential.id} data-share-badge-host="https://www.credly.com"></div>
              </div>
              <a className="credential-verify-link" href={verify} target="_blank" rel="noopener noreferrer">التحقق من الشارة على Credly ↗</a>
            </div>
            <div className="cisco-credential-info">
              <span className="credential-index">CREDENTIAL / {String(i+1).padStart(2,'0')}</span>
              <h3>{credential.name}</h3>
              <p className="credential-issuer">{credential.issuer}</p>
              <div className="credential-meta"><span>تاريخ الإصدار: {credential.date}</span><span>لا تنتهي صلاحيتها</span></div>
              <p className="credential-description">{credential.description}</p>
              <div className="credential-id"><span>BADGE ID</span><code>{credential.id}</code></div>
              <div className="credential-skills">
                <h4>المهارات المسجلة <span>{credential.skills.length}</span></h4>
                <div className="credential-skill-list">{credential.skills.map(skill=><span key={skill}>{skill}</span>)}</div>
              </div>
              <div className="certificate-document">
                <div className="certificate-document-heading"><span>ORIGINAL CERTIFICATE · PDF</span><a href={pdf} target="_blank" rel="noopener noreferrer">فتح الملف ↗</a></div>
                <div className="certificate-document-preview"><iframe src={pdf+'#toolbar=0&navpanes=0&view=FitH'} title={'معاينة الشهادة: '+credential.name} loading="lazy" /></div>
              </div>
              <div className="credential-actions">
                <a className="text-link" href={pdf} target="_blank" rel="noopener noreferrer">فتح الشهادة الأصلية ↗</a>
                <a className="text-link" href={verify} target="_blank" rel="noopener noreferrer">رابط التحقق الرسمي ↗</a>
              </div>
            </div>
          </article>;
        })}
      </div>
    </section>
    <p className="disclaimer">بيانات المهارات ومعرّفات الشارات من سجلات Credly التي تم تزويدها. معاينات ملفات PDF مرتبطة بالنسخ الأصلية المرفوعة ضمن مستودع المشروع.</p>
  </main>;
}
