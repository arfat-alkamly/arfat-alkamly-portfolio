import type {Project} from '../data/projects';
import {siteUrl} from './seo';

const identityLinks=[
 'https://orcid.org/0009-0008-1348-5146',
 'https://github.com/arfat-alkamly',
 'https://www.linkedin.com/in/arfat-alkamly-399676409',
 'https://www.credly.com/users/arfat-alkamly',
];

export function personAndWebsiteJsonLd(locale:'ar'|'en'='en'){
 const person={
  '@type':'Person','@id':`${siteUrl}/#person`,
  name:locale==='ar'?'عرفات عبدالله الكاملي':'Arfat Abdullah Alkamly',
  alternateName:['عرفات الكاملي','Arfat Alkamli'],
  jobTitle:'Cybersecurity Researcher & Software Engineer',
  url:siteUrl,
  email:'mailto:alkamlyrfat@gmail.com',
  knowsAbout:['Cybersecurity','Static Application Security Testing (SAST)','Digital Forensics and Incident Response (DFIR)','Vulnerability Assessment','DevSecOps','Software Engineering','Python','Flutter','Next.js'],
  sameAs:identityLinks,
 };
 const website={'@type':'WebSite','@id':`${siteUrl}/#website`,url:siteUrl,name:'Arfat Abdullah Alkamly | عرفات عبدالله الكاملي',inLanguage:['ar','en'],publisher:{'@id':person['@id']}};
 return {'@context':'https://schema.org','@graph':[person,website]};
}

const credentials=[
 {name:'Cybersecurity Defense Analyst Career Path',id:'23bda189-2470-4ce0-8065-ee904979ba21',date:'2026-07-29',issuer:'Cisco',partner:'Splunk'},
 {name:'Network Defense',id:'e16ca722-84d2-4da2-ad1f-46e972453890',date:'2026-07-27',issuer:'Cisco'},
 {name:'Networking Basics',id:'2f9902ec-e035-4b56-bf1b-42c66f05ed75',date:'2026-07-27',issuer:'Cisco'},
 {name:'Python Essentials 2',id:'de9c51d6-2eb6-4f7e-833a-31670170e278',date:'2026-07-27',issuer:'Cisco',partner:'OpenEDG'},
 {name:'Python Essentials 1',id:'43943e68-05c5-40ea-93d1-d2a26e07ced0',date:'2026-07-25',issuer:'Cisco',partner:'OpenEDG'},
 {name:'Introduction to Modern AI',id:'4e822fcc-656e-4891-bc51-666ca95cd6e8',date:'2026-07-23',issuer:'Cisco'},
 {name:'Endpoint Security',id:'f0520c01-63aa-4440-9df4-69c7303d8762',date:'2026-06-03',issuer:'Cisco'},
 {name:'Create Digital Content, Communicate and Collaborate Online',id:'a370a36f-7ce1-4531-b44b-b909e56ee52d',date:'2026-05-27',issuer:'Cisco',partner:'OpenEDG'},
 {name:'Introduction to Cybersecurity',id:'dd68b74c-65f9-468f-9a51-3bb78adad239',date:'2026-05-18',issuer:'Cisco'},
];

const author={'@type':'Person','@id':`${siteUrl}/#person`,name:'Arfat Abdullah Alkamly',url:siteUrl};

export function credentialsJsonLd(){
 return {'@context':'https://schema.org','@type':'ItemList',name:'Digital Credentials of Arfat Abdullah Alkamly',numberOfItems:credentials.length,itemListElement:credentials.map((credential,index)=>({
  '@type':'ListItem',position:index+1,item:{
   '@type':'EducationalOccupationalCredential',name:credential.name,credentialCategory:'Digital badge',dateCreated:credential.date,
   recognizedBy:{'@type':'Organization',name:credential.issuer},url:`https://www.credly.com/badges/${credential.id}/public_url`,about:author,
   description:`Awarded to Arfat Abdullah Alkamly by ${credential.issuer}${credential.partner?` with ${credential.partner}`:''} on ${credential.date}.`,
  }
 }))};
}

export function projectsJsonLd(projects:Project[],locale:'ar'|'en'='en'){
 return {'@context':'https://schema.org','@type':'ItemList',name:locale==='ar'?'المشاريع التقنية لعرفات عبدالله الكاملي':'Engineering projects by Arfat Abdullah Alkamly',numberOfItems:projects.length,itemListElement:projects.map((project,index)=>({
  '@type':'ListItem',position:index+1,item:{
   '@type':project.repository?'SoftwareSourceCode':'CreativeWork',name:project.name,description:project.summary,
   url:`${siteUrl}/${locale}/projects/${project.slug}`,inLanguage:locale,author,
   keywords:project.stack,...(project.repository?{codeRepository:project.repository}:{}),
  }
 }))};
}

type ResearchProposal={id:string;title:string;summary:string;question?:string;method?:string;outcome?:string;tags?:string[];status?:string};
export function researchJsonLd(items:ResearchProposal[],locale:'ar'|'en'='en'){
 return {'@context':'https://schema.org','@type':'ItemList',name:locale==='ar'?'مقترحات أبحاث الأمن السيبراني':'Cybersecurity research proposals',numberOfItems:items.length,itemListElement:items.map((item,index)=>({
  '@type':'ListItem',position:index+1,item:{
   '@type':'ScholarlyArticle',name:item.title,description:item.summary,author,
   inLanguage:locale,isPartOf:{'@type':'ResearchProject',name:'Independent Cybersecurity Research Program'},
   creativeWorkStatus:item.status??'Research proposal',keywords:item.tags??[],
   url:`${siteUrl}/${locale}/research#proposal-${item.id}`,
  }
 }))};
}

export function projectJsonLd(project:Project,locale:'ar'|'en'='ar'){
 return {'@context':'https://schema.org','@type':project.repository?'SoftwareSourceCode':'CreativeWork',name:project.name,description:project.summary,url:`${siteUrl}/${locale}/projects/${project.slug}`,inLanguage:locale,author,keywords:project.stack,...(project.repository?{codeRepository:project.repository}:{})};
}
