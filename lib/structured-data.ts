const siteUrl='https://arfat-phi.vercel.app';
const person={ '@type':'Person',name:'Arfat Alkamli',url:siteUrl,sameAs:['https://github.com/arfat-alkamly','https://www.linkedin.com/in/arfat-alkamly-399676409','https://www.credly.com/users/arfat-alkamly','https://orcid.org/0009-0008-1348-5146'] };

const credentials=[
 {name:'Cybersecurity Defense Analyst Career Path',id:'23bda189-2470-4ce0-8065-ee904979ba21',date:'2026-07-29',issuer:'Cisco with Splunk',skills:['Cybersecurity','Splunk','Threat Detection','SOC','Threat Hunting']},
 {name:'Network Defense',id:'e16ca722-84d2-4da2-ad1f-46e972453890',date:'2026-07-27',issuer:'Cisco',skills:['Network Defense','Firewalls','Cloud Security','Access Controls']},
 {name:'Networking Basics',id:'2f9902ec-e035-4b56-bf1b-42c66f05ed75',date:'2026-07-27',issuer:'Cisco',skills:['Networking','IPv4','Protocols','Wireless Access']},
 {name:'Python Essentials 2',id:'de9c51d6-2eb6-4f7e-833a-31670170e278',date:'2026-07-27',issuer:'Cisco with OpenEDG',skills:['Python','Object-Oriented Programming','Exceptions','Generators']},
 {name:'Python Essentials 1',id:'43943e68-05c5-40ea-93d1-d2a26e07ced0',date:'2026-07-25',issuer:'Cisco with OpenEDG',skills:['Python','Programming','Algorithmic Thinking']},
 {name:'Introduction to Modern AI',id:'4e822fcc-656e-4891-bc51-666ca95cd6e8',date:'2026-07-23',issuer:'Cisco',skills:['Artificial Intelligence','Machine Learning','Computer Vision']},
 {name:'Endpoint Security',id:'f0520c01-63aa-4440-9df4-69c7303d8762',date:'2026-06-03',issuer:'Cisco',skills:['Endpoint Security','Malware Protection','Network Security']},
 {name:'Create Digital Content, Communicate and Collaborate Online',id:'a370a36f-7ce1-4531-b44b-b909e56ee52d',date:'2026-05-27',issuer:'Cisco with OpenEDG',skills:['Digital Communication','Digital Collaboration','Accessibility']},
 {name:'Introduction to Cybersecurity',id:'dd68b74c-65f9-468f-9a51-3bb78adad239',date:'2026-05-18',issuer:'Cisco',skills:['Cybersecurity','Threat Detection','Privacy']}
];

export function credentialsJsonLd(){
 return {
  '@context':'https://schema.org',
  '@type':'ItemList',
  name:'Digital Credentials of Arfat Alkamli',
  itemListElement:credentials.map((credential,index)=>({
   '@type':'ListItem',position:index+1,
   item:{
    '@type':'EducationalOccupationalCredential',
    name:credential.name,
    identifier:credential.id,
    dateCreated:credential.date,
    credentialCategory:'Digital badge',
    recognizedBy:{'@type':'Organization',name:credential.issuer.split(' with ')[0]},
    url:`https://www.credly.com/badges/${credential.id}/public_url`,
    competencyRequired:credential.skills,
    about:person
   }
  }))
 };
}

export function projectJsonLd(project:{slug:string;name:string;summary:string;stack:string[];repository?:string}){
 return {
  '@context':'https://schema.org',
  '@type':'CreativeWork',
  name:project.name,
  description:project.summary,
  url:`${siteUrl}/projects/${project.slug}`,
  inLanguage:['ar','en'],
  author:person,
  keywords:project.stack,
  ...(project.repository?{codeRepository:project.repository}:{})
 };
}
