'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight, ShieldCheck, Code2, Network, Database, Github, Linkedin, Instagram,
  Facebook, Sun, Moon, LockKeyhole, GraduationCap, Menu, X, Award, Music2,
  Search, BrainCircuit, FlaskConical, BookOpen, BriefcaseBusiness, Terminal,
  Server, Bug, Cpu, Users, Wrench, Layers3, ExternalLink
} from 'lucide-react';

type Item = { name: string; category: string; detail: string; tools?: string[]; status?: string; link?: string; slug?: string; logo?: string };
const projects: Item[] = [
 {slug:'academic-os',name:'Academic OS',category:'Academic software',detail:'A student-focused academic assistant system designed to help students complete, organize and track their academic tasks through multiple integrated categories and features. A substantial personally conceived and developed system.',tools:['Flutter','Dart','SQLite','TensorFlow Lite'],status:'Personal project · ongoing development'},
 {slug:'student-management-system',name:'Student Management System',category:'Academic software',detail:'A student information and management application developed as a practical application of object-oriented programming concepts.',tools:['Java','Object-Oriented Programming'],status:'Academic project'},
 {slug:'tourism-platform',name:'Tourism Platform',category:'Web development',detail:'A tourism-oriented web platform developed to practice front-end structure, styling, interaction and user-facing information presentation.',tools:['HTML5','CSS3','JavaScript'],status:'Academic project'},
 {slug:'cybersecurity-portfolio',name:'Cybersecurity Portfolio',category:'Cybersecurity',detail:'A cybersecurity-focused portfolio and documentation project for presenting security learning, practical work and technical resources.',tools:['Markdown','Security tools','Documentation'],status:'Personal project'},
 {slug:'virtual-pentesting-lab',name:'Virtual Pentesting Lab',category:'Security lab',detail:'A virtual environment for learning and practicing penetration-testing workflows in an isolated lab setup.',tools:['VMware','Kali Linux','Virtual machines'],status:'Personal lab project'},
 {slug:'network-security-projects',name:'Network Security Projects',category:'Network security',detail:'Practical network-security exercises and projects involving network infrastructure, traffic inspection and defensive monitoring.',tools:['Cisco','Wireshark','Snort'],status:'Academic and practical work'},
 {slug:'aegis-titan',name:'AEGIS-TITAN',category:'Cyber defense architecture',detail:'A defense-first security architecture focused on telemetry, detection, controlled deception, isolation, incident response, digital forensics and evidence integrity. The project is personally conceived and has been under development over an extended period.',tools:['Cyber Defense','DFIR','Detection Engineering','Honeypots','Security Architecture'],status:'Personal project · in development'},
 {slug:'cryptolab-pro',name:'CryptoLab-Pro',category:'Cryptography',detail:'An offline-first interactive platform for exploring classical ciphers, AES-256-GCM, hashing, avalanche effect and client-side file encryption.',tools:['JavaScript','Web Crypto API','HTML5','CSS3'],status:'Public repository',link:'https://github.com/arfat-alkamly/CryptoLab-Pro'},
 {slug:'vulnerability-research-lab',name:'Vulnerability Research Lab',category:'Security research',detail:'A dedicated workspace for documenting and organizing vulnerability research, analysis and practical security learning.',tools:['Security Research','Analysis','Documentation'],status:'Public repository',link:'https://github.com/arfat-alkamly/Vulnerability-Research-Lab'},
 {slug:'manar-schedule-system',name:'Manar Schedule System',category:'Academic software',detail:'A university scheduling and management system covering student records, role-based access, schedule updates and notifications.',tools:['React','Node.js','Express','PostgreSQL','Prisma'],status:'Collaborative academic project',link:'https://github.com/mghalaosimi-web/manar-schedule-system'},
 {slug:'waynah',name:'Waynah',category:'Collaborative product',detail:'An Arabic-first geographic information and local discovery platform. Listed as collaborative work, not as sole ownership.',tools:['Next.js','TypeScript','Hono','PostgreSQL','PostGIS','Prisma'],status:'Collaborative project',link:'https://github.com/mghalaosimi-web/waynah'}
];
const skillGroups: {title:string;icon:any;items:Item[]}[] = [
 {title:'Programming Languages & Web',icon:Code2,items:[
  {name:'Python',category:'Programming language',detail:'A versatile high-level language used for automation, scripting, application development, data science and cybersecurity tooling.',logo:'python'},
  {name:'C++',category:'Programming language',detail:'A compiled language offering low-level memory control and high-performance systems and application development.',logo:'cplusplus'},
  {name:'Java',category:'Programming language',detail:'A class-based object-oriented language widely used for enterprise software, backend services and Android development.',logo:'openjdk'},
  {name:'JavaScript',category:'Programming language',detail:'The core programming language of the web, enabling interactive browser experiences and server-side applications.',logo:'javascript'},
  {name:'TypeScript',category:'Programming language',detail:'A typed superset of JavaScript that adds static type checking and tooling for maintainable applications.',logo:'typescript'},
  {name:'C#',category:'Programming language',detail:'A modern object-oriented language in the .NET ecosystem for desktop, web, cloud and game development.',logo:'csharp'},
  {name:'Go',category:'Programming language',detail:'A compiled language designed for efficient concurrent services, networking tools and cloud infrastructure.',logo:'go'},
  {name:'PHP',category:'Programming language',detail:'A server-side scripting language commonly used to build dynamic websites and web applications.',logo:'php'},
  {name:'Bash',category:'Shell scripting',detail:'A Unix shell and scripting language used to automate command-line tasks and system administration.',logo:'gnubash'},
  {name:'PowerShell',category:'Shell scripting',detail:'A task-automation shell and scripting language for system administration, configuration and Windows management.',logo:'powershell'},
  {name:'Dart',category:'Programming language',detail:'A client-optimized language used with Flutter to build cross-platform applications from a shared codebase.',logo:'dart'},
  {name:'HTML5',category:'Web markup',detail:'The standard markup language used to structure content and semantic elements on the web.',logo:'html5'},
  {name:'CSS3',category:'Web styling',detail:'The stylesheet language used to control web presentation, responsive layouts, animation and visual design.',logo:'css3'},
  {name:'Rust',category:'Programming language',detail:'A systems language focused on memory safety, performance and reliable concurrent software.',logo:'rust'},
  {name:'Swift',category:'Programming language',detail:'Apple’s modern language for building software across iOS, macOS and related platforms.',logo:'swift'},
  {name:'Kotlin',category:'Programming language',detail:'A concise, statically typed language commonly used for Android and JVM development.',logo:'kotlin'},
  {name:'Ruby',category:'Programming language',detail:'A dynamic object-oriented language known for expressive syntax and web development with Rails.',logo:'ruby'},
  {name:'R',category:'Statistical language',detail:'A language and environment for statistical computing, data analysis and visualization.',logo:'r'},
  {name:'Solidity',category:'Smart-contract language',detail:'A contract-oriented language for writing smart contracts on Ethereum-compatible blockchains.',logo:'solidity'},
  {name:'Assembly',category:'Low-level language',detail:'A processor-specific symbolic language used to understand machine instructions, debugging and low-level software behavior.',logo:'assemblyscript'}
 ]},
 {title:'Frameworks, Libraries & Development',icon:Layers3,items:[
  {name:'.NET',category:'Development platform',detail:'A developer platform and runtime for building modern applications and services.',logo:'dotnet'},
  {name:'Spring',category:'Java framework',detail:'A Java ecosystem for building enterprise applications, APIs and backend services.',logo:'spring'},
  {name:'Django',category:'Python framework',detail:'A high-level Python web framework with built-in components for secure, maintainable web applications.',logo:'django'},
  {name:'React',category:'UI library',detail:'A component-based JavaScript library for building interactive user interfaces.',logo:'react'},
  {name:'Node.js',category:'JavaScript runtime',detail:'A JavaScript runtime for building server-side applications and network services.',logo:'nodedotjs'},
  {name:'Flutter',category:'UI framework',detail:'A cross-platform UI toolkit for building applications from a shared Dart codebase.',logo:'flutter'},
  {name:'Ruby on Rails',category:'Web framework',detail:'A convention-driven Ruby framework for building database-backed web applications.',logo:'rubyonrails'},
  {name:'ASP.NET Core',category:'Web framework',detail:'A cross-platform framework for building web apps, APIs and services with .NET.',logo:'dotnet'},
  {name:'TensorFlow',category:'Machine learning',detail:'An open-source platform for building, training and deploying machine-learning models.',logo:'tensorflow'},
  {name:'PyTorch',category:'Machine learning',detail:'A machine-learning framework used for tensor computation and deep neural networks.',logo:'pytorch'},
  {name:'OpenCV',category:'Computer vision',detail:'A computer-vision library for image processing, video analysis and visual recognition.',logo:'opencv'},
  {name:'Hugging Face',category:'AI platform',detail:'An ecosystem of models, datasets and tools for machine learning and natural-language processing.',logo:'huggingface'},
  {name:'LangChain',category:'AI application framework',detail:'A framework for composing applications around language models, retrieval and external tools.',logo:'langchain'},
  {name:'Scikit-learn',category:'Machine learning',detail:'A Python library for classical machine learning, preprocessing, model selection and evaluation.',logo:'scikitlearn'},
  {name:'Pandas',category:'Data analysis',detail:'A Python library for data manipulation and analysis using structured data frames.',logo:'pandas'},
  {name:'NumPy',category:'Scientific computing',detail:'A foundational Python library for multidimensional arrays and numerical computation.',logo:'numpy'}
 ]},
 {title:'Cybersecurity Tools & Platforms',icon:ShieldCheck,items:[
  {name:'Nmap',category:'Reconnaissance',detail:'A network discovery and security-auditing utility used to identify hosts, services and exposed ports.',logo:'nmap'},
  {name:'Nikto',category:'Web assessment',detail:'An open-source web-server scanner that checks for potentially risky files, configurations and known issues.',logo:''},
  {name:'Recon-ng',category:'OSINT',detail:'A modular framework for organizing and automating open-source intelligence reconnaissance.',logo:''},
  {name:'Aircrack-ng',category:'Wireless security',detail:'A suite for assessing wireless network security and analyzing 802.11 traffic.',logo:''},
  {name:'Burp Suite',category:'Web application security',detail:'A platform for inspecting, testing and assessing web application security.',logo:''},
  {name:'OWASP ZAP',category:'Web application security',detail:'An open-source proxy and scanner for finding security issues in web applications.',logo:'owasp'},
  {name:'SQLmap',category:'Web application security',detail:'An open-source tool that automates detection and testing of SQL injection vulnerabilities.',logo:''},
  {name:'BeEF',category:'Browser security testing',detail:'A browser-focused security testing framework for authorized assessments in controlled environments.',logo:''},
  {name:'Metasploit',category:'Security validation',detail:'A penetration-testing framework used to validate vulnerabilities and assess defensive controls in authorized labs.',logo:'metasploit'},
  {name:'Cobalt Strike',category:'Adversary simulation',detail:'A commercial platform used by security teams for controlled adversary emulation and red-team exercises.',logo:''},
  {name:'Mimikatz',category:'Windows security research',detail:'A Windows security research tool used in labs to understand credential exposure and authentication weaknesses.',logo:''},
  {name:'Responder',category:'Network security testing',detail:'A tool for analyzing and testing name-resolution protocols in authorized network assessments.',logo:''},
  {name:'CrackMapExec',category:'Network security testing',detail:'A network assessment tool for evaluating Windows and Active Directory environments.',logo:''},
  {name:'BloodHound',category:'Identity security',detail:'A tool for visualizing relationships and potential attack paths in Active Directory environments.',logo:''},
  {name:'Impacket',category:'Network protocol toolkit',detail:'A Python collection for working with network protocols and conducting authorized security analysis.',logo:'python'},
  {name:'Wireshark',category:'Traffic analysis',detail:'A network protocol analyzer for inspecting packet captures and understanding network communications.',logo:'wireshark'},
  {name:'Snort',category:'Network defense',detail:'A network intrusion detection and prevention engine based on traffic inspection and rules.',logo:''},
  {name:'Zeek',category:'Network security monitoring',detail:'A network analysis framework that generates rich logs for security monitoring and investigation.',logo:''},
  {name:'Ghidra',category:'Reverse engineering',detail:'A software reverse-engineering framework for disassembly, decompilation and program analysis.',logo:''},
  {name:'IDA Pro',category:'Reverse engineering',detail:'A disassembler and debugger used to analyze compiled software and binary behavior.',logo:''},
  {name:'x64dbg',category:'Debugging',detail:'A debugger for examining and troubleshooting Windows applications and binaries.',logo:''},
  {name:'dnSpy',category:'.NET analysis',detail:'A .NET assembly browser, debugger and editor used for managed-code inspection.',logo:''},
  {name:'Radare2',category:'Reverse engineering',detail:'A command-line framework for binary analysis, disassembly and reverse engineering.',logo:''},
  {name:'YARA',category:'Malware analysis',detail:'A rule-based pattern-matching tool used to identify and classify files and malware families.',logo:''},
  {name:'Cuckoo Sandbox',category:'Malware analysis',detail:'An automated sandbox approach for observing suspicious files in an isolated environment.',logo:''},
  {name:'Nessus',category:'Vulnerability assessment',detail:'A vulnerability scanner used to identify known weaknesses and configuration issues.',logo:''},
  {name:'OpenVAS',category:'Vulnerability assessment',detail:'An open-source vulnerability scanning and management platform.',logo:''},
  {name:'Hashcat',category:'Password security',detail:'A password-recovery and auditing tool used to evaluate password hash strength in authorized work.',logo:''},
  {name:'John the Ripper',category:'Password security',detail:'A password-auditing tool for evaluating password strength and hash exposure.',logo:''},
  {name:'Splunk',category:'SIEM & log analytics',detail:'A platform for searching, analyzing and visualizing machine-generated data for security operations.',logo:'splunk'},
  {name:'Elastic Stack (ELK)',category:'SIEM & log analytics',detail:'A collection of Elasticsearch, Logstash and Kibana components for search, ingestion and visualization of logs.',logo:'elastic'}
 ]},
 {title:'Networking & Protocols',icon:Network,items:[
  {name:'Cisco IOS',category:'Network operating system',detail:'The operating system used on many Cisco networking devices for configuration and management.',logo:'cisco'},
  {name:'BGP',category:'Routing protocol',detail:'An inter-domain routing protocol that exchanges reachability information between autonomous systems.',logo:''},
  {name:'OSPF',category:'Routing protocol',detail:'A link-state interior gateway protocol used to calculate routes within an autonomous system.',logo:''},
  {name:'EIGRP',category:'Routing protocol',detail:'A Cisco-developed advanced distance-vector routing protocol for dynamic route exchange.',logo:'cisco'},
  {name:'MPLS',category:'Network technology',detail:'A forwarding technique that uses labels to direct traffic through service-provider and enterprise networks.',logo:''},
  {name:'Firewalls & ACLs',category:'Network defense',detail:'Traffic-control mechanisms that enforce network access policies and restrict unwanted communication.',logo:''},
  {name:'VPN, IPsec & SSL/TLS',category:'Secure communications',detail:'Technologies and protocols that provide protected tunnels, encryption and authenticated communications.',logo:''},
  {name:'TCP/IP',category:'Protocol suite',detail:'The foundational protocol suite enabling addressing, routing and end-to-end communication across networks.',logo:''},
  {name:'HTTP/2 & HTTP/3',category:'Web protocols',detail:'Modern versions of HTTP that improve transport efficiency and web communication behavior.',logo:''},
  {name:'QUIC',category:'Transport protocol',detail:'A secure transport protocol built over UDP and used by HTTP/3.',logo:''},
  {name:'DNS & DHCP',category:'Network services',detail:'Core services for resolving domain names and dynamically assigning network configuration.',logo:''},
  {name:'SDN',category:'Network architecture',detail:'Software-defined networking separates control logic from forwarding to enable programmable networks.',logo:''},
  {name:'Ansible',category:'Automation',detail:'An automation platform for configuration management, deployment and repeatable infrastructure tasks.',logo:'ansible'},
  {name:'HAProxy',category:'Load balancing',detail:'A high-performance proxy and load balancer for distributing application traffic.',logo:''},
  {name:'Nginx',category:'Web server & proxy',detail:'A web server and reverse proxy used for HTTP delivery, caching and load balancing.',logo:'nginx'},
  {name:'F5',category:'Application delivery',detail:'Application delivery and traffic-management technologies used in enterprise networks.',logo:''},
  {name:'802.11 & WPA3',category:'Wireless networking',detail:'Wireless LAN standards and modern security mechanisms for protecting Wi-Fi networks.',logo:'wifi'},
  {name:'RADIUS & 802.1X',category:'Network authentication',detail:'Standards and protocols for centralized authentication and port-based network access control.',logo:''}
 ]},
 {title:'Operating Systems & Virtualization',icon:Terminal,items:[
  {name:'Windows',category:'Operating system',detail:'A desktop and server operating-system family used across personal and enterprise environments.',logo:'windows'},
  {name:'macOS',category:'Operating system',detail:'Apple’s Unix-based operating system for Mac computers.',logo:'apple'},
  {name:'Linux',category:'Operating system',detail:'An open-source Unix-like operating-system kernel used in servers, desktops and embedded systems.',logo:'linux'},
  {name:'Ubuntu',category:'Linux distribution',detail:'A widely used Linux distribution for desktops, servers and cloud environments.',logo:'ubuntu'},
  {name:'Kali Linux',category:'Security distribution',detail:'A Linux distribution designed for penetration testing, digital forensics and security assessment.',logo:'kalilinux'},
  {name:'Android',category:'Mobile operating system',detail:'A Linux-kernel-based mobile operating system used across a broad range of devices.',logo:'android'},
  {name:'iOS',category:'Mobile operating system',detail:'Apple’s mobile operating system for iPhone devices.',logo:'ios'},
  {name:'VMware ESXi',category:'Hypervisor',detail:'A bare-metal hypervisor for running and managing virtual machines.',logo:'vmware'},
  {name:'Proxmox VE',category:'Virtualization platform',detail:'An open-source platform for managing virtual machines and containers.',logo:'proxmox'}
 ]},
 {title:'Cloud, DevOps & Infrastructure',icon:Server,items:[
  {name:'AWS',category:'Cloud platform',detail:'Amazon Web Services provides on-demand cloud compute, storage, networking and managed services.',logo:'amazonaws'},
  {name:'Microsoft Azure',category:'Cloud platform',detail:'Microsoft’s cloud platform for infrastructure, application hosting, identity and data services.',logo:'microsoftazure'},
  {name:'Google Cloud',category:'Cloud platform',detail:'Google Cloud provides cloud infrastructure, data platforms, AI services and managed applications.',logo:'googlecloud'},
  {name:'Terraform',category:'Infrastructure as Code',detail:'A declarative tool for provisioning and managing infrastructure through version-controlled configuration.',logo:'terraform'},
  {name:'Kubernetes',category:'Container orchestration',detail:'A platform for deploying, scaling and managing containerized applications.',logo:'kubernetes'},
  {name:'Helm',category:'Kubernetes tooling',detail:'A package manager that simplifies installation and lifecycle management of Kubernetes applications.',logo:'helm'},
  {name:'Istio',category:'Service mesh',detail:'A service mesh for managing service-to-service traffic, security and observability.',logo:'istio'},
  {name:'Prometheus',category:'Monitoring',detail:'An open-source monitoring and alerting toolkit based on time-series metrics.',logo:'prometheus'},
  {name:'Grafana',category:'Observability',detail:'A visualization and observability platform for metrics, logs and traces.',logo:'grafana'},
  {name:'Docker',category:'Containerization',detail:'A platform for packaging and running applications in portable containers.',logo:'docker'},
  {name:'Git',category:'Version control',detail:'A distributed version-control system for tracking code changes and collaboration.',logo:'git'},
  {name:'GitHub',category:'Code hosting',detail:'A platform for hosting repositories, collaboration, code review and project automation.',logo:'github'},
  {name:'Visual Studio Code',category:'Code editor',detail:'A source-code editor with extensions, debugging and integrated development workflows.',logo:'visualstudiocode'},
  {name:'Jenkins',category:'CI/CD automation',detail:'An automation server for building, testing and delivering software pipelines.',logo:'jenkins'},
  {name:'DevSecOps',category:'Secure delivery practice',detail:'An approach that integrates security checks and controls throughout software delivery and operations.',logo:''}
 ]},
 {title:'Databases & Data Platforms',icon:Database,items:[
  {name:'MySQL',category:'Relational database',detail:'An open-source relational database management system widely used in web applications.',logo:'mysql'},
  {name:'PostgreSQL',category:'Relational database',detail:'An advanced open-source relational database with extensibility and strong SQL support.',logo:'postgresql'},
  {name:'MongoDB',category:'Document database',detail:'A document-oriented NoSQL database that stores data in flexible JSON-like documents.',logo:'mongodb'},
  {name:'Oracle Database',category:'Relational database',detail:'An enterprise relational database platform with SQL and PL/SQL support.',logo:'oracle'},
  {name:'Microsoft SQL Server',category:'Relational database',detail:'Microsoft’s relational database platform for transactional and analytical workloads.',logo:'microsoftsqlserver'},
  {name:'Redis',category:'In-memory data store',detail:'An in-memory data structure store used for caching, messaging and fast data access.',logo:'redis'},
  {name:'Elasticsearch',category:'Search & analytics engine',detail:'A distributed search and analytics engine commonly used for log and event data.',logo:'elasticsearch'},
  {name:'SQLite',category:'Embedded database',detail:'A lightweight embedded relational database stored in a local file.',logo:'sqlite'},
  {name:'SQL & PL/SQL',category:'Database languages',detail:'SQL is used to query and manage relational data; Oracle PL/SQL adds procedural programming to database operations.',logo:'oracle'}
 ]},
 {title:'AI, Data Science & Research',icon:BrainCircuit,items:[
  {name:'Machine Learning',category:'AI discipline',detail:'Methods that enable systems to learn patterns from data and make predictions or decisions.',logo:''},
  {name:'Deep Learning',category:'AI discipline',detail:'A machine-learning area based on multi-layer neural networks for representation learning.',logo:''},
  {name:'CNNs, RNNs & Transformers',category:'Neural architectures',detail:'Neural-network architectures used for image understanding, sequential data and attention-based modeling.',logo:''},
  {name:'Natural Language Processing',category:'AI discipline',detail:'Methods for processing, analyzing and generating human language.',logo:''},
  {name:'Computer Vision',category:'AI discipline',detail:'Techniques that enable computers to interpret and analyze images and video.',logo:'opencv'},
  {name:'Reinforcement Learning',category:'AI discipline',detail:'A learning paradigm where agents improve behavior through interaction and reward feedback.',logo:''},
  {name:'LLM Security',category:'AI security',detail:'Security considerations for large language models, including prompt injection, data leakage and robust usage.',logo:''},
  {name:'MLOps & Model Monitoring',category:'AI operations',detail:'Practices for deploying, monitoring and maintaining machine-learning systems through their lifecycle.',logo:''},
  {name:'Adversarial Machine Learning',category:'AI security research',detail:'Study of attacks that manipulate model inputs or behavior and techniques to improve model robustness.',logo:''}
 ]},
 {title:'Security Methodologies & Frameworks',icon:LockKeyhole,items:[
  {name:'OWASP Top 10',category:'Web security standard',detail:'A widely used awareness document describing major categories of web application security risks.',logo:'owasp'},
  {name:'OWASP WSTG',category:'Testing methodology',detail:'The Web Security Testing Guide provides structured guidance for testing web application security.',logo:'owasp'},
  {name:'PTES',category:'Penetration testing methodology',detail:'A framework describing phases and activities commonly used in penetration testing engagements.',logo:''},
  {name:'OSSTMM',category:'Security testing methodology',detail:'An open methodology for operational security testing and measurement.',logo:''},
  {name:'Cyber Kill Chain',category:'Threat model',detail:'A model that describes stages commonly observed in cyber intrusions.',logo:''},
  {name:'MITRE ATT&CK',category:'Threat knowledge base',detail:'A globally accessible knowledge base of adversary tactics and techniques based on real-world observations.',logo:'mitre'},
  {name:'NIST Cybersecurity Framework',category:'Security framework',detail:'A framework for managing cybersecurity risk through Govern, Identify, Protect, Detect, Respond and Recover functions.',logo:'nist'},
  {name:'ISO 27001',category:'Information security standard',detail:'An international standard specifying requirements for an information security management system.',logo:'iso'},
  {name:'SOC 2',category:'Assurance framework',detail:'An assurance reporting framework focused on controls relevant to security, availability and related trust services.',logo:''},
  {name:'Zero Trust Architecture',category:'Security architecture',detail:'An approach that continuously evaluates access based on identity, context and least-privilege principles.',logo:''},
  {name:'AES & RSA',category:'Cryptography',detail:'AES is a symmetric encryption standard; RSA is a public-key cryptosystem used for encryption and digital signatures.',logo:''},
  {name:'SHA Hashing',category:'Cryptography',detail:'The Secure Hash Algorithm family produces fixed-length digests used for integrity and related security functions.',logo:''}
 ]}
];
const labs:Item[]=[
 {name:'Web Application Penetration Testing Lab',category:'Web security',detail:'A controlled lab track for understanding web-application testing workflows and common security weaknesses.',tools:['Kali Linux','Web security tools'],status:'Lab track'},
 {name:'Active Directory Attack & Defense Lab',category:'Identity infrastructure',detail:'A controlled environment for studying directory services, attack paths and defensive controls.',tools:['Windows Server','Active Directory','Virtual machines'],status:'Lab track'},
 {name:'Network Traffic Analysis Lab',category:'Network analysis',detail:'Hands-on inspection and interpretation of network traffic and protocols.',tools:['Wireshark','TCP/IP'],status:'Lab track'},
 {name:'Wireless Security Assessment Lab',category:'Wireless security',detail:'A lab track for studying wireless security configurations and assessment concepts.',tools:['Wireless networking','Kali Linux'],status:'Lab track'},
 {name:'Malware Analysis Sandbox',category:'Malware analysis',detail:'An isolated analysis environment for learning safe malware examination and behavioral observation.',tools:['Virtual machines','Sandboxing'],status:'Lab track'}
];
const courses:Item[]=[
 {name:'Introduction to Artificial Intelligence',category:'Cisco / AI',detail:'Introductory learning in artificial intelligence.',status:'Completed credential',link:'https://lnkd.in/dRCcTwf5'},
 {name:'Cisco Endpoint Security',category:'Cisco / Cybersecurity',detail:'Endpoint security learning and concepts.',status:'Completed credential',link:'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url'},
 {name:'IT Customer Support Basics',category:'Cisco / IT',detail:'Foundational IT customer support learning.',status:'Completed credential',link:'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url'},
 {name:'Cisco Learn-A-Thon 2026',category:'Cisco / Professional development',detail:'Cisco learning event participation and development.',status:'Completed credential',link:'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url'}
];
const academicCourses=['Web Development','Cryptography','Information Security & Networks','Research Methods','Software Development Fundamentals','AI for Cybersecurity','Communication Skills','Cloud Computing','Systems Analysis & Design','Secure Software Design','Digital Forensic Investigation','Fundamentals of Software Engineering & Design','Field Application / Field Training'];
const socials=[
 {name:'GitHub',href:'https://github.com/arfat-alkamly',icon:Github},
 {name:'LinkedIn',href:'https://www.linkedin.com/in/arfat-alkamly-399676409',icon:Linkedin},
 {name:'Facebook',href:'https://www.facebook.com/rfatalkamly',icon:Facebook},
 {name:'Instagram',href:'https://www.instagram.com/dark.hacker_x',icon:Instagram},
 {name:'TikTok',href:'https://www.tiktok.com/@dark.hacker_x',icon:Music2}
];
const nav=[['about','نبذة عني','About'],['education','التعليم','Education'],['skills','المهارات','Skills'],['projects','المشاريع','Projects'],['labs','المعامل','Labs'],['research','البحث','Research'],['credentials','الشهادات','Credentials'],['learning','التعليم الأكاديمي','Coursework'],['goals','الأهداف','Goals'],['contact','التواصل','Contact']];
function Cards({items}:{items:Item[]}){return <div className="directory-grid">{items.map((item,i)=><article className="directory-card" key={item.name}><div className="directory-card-top"><span className="directory-index">{String(i+1).padStart(2,'0')}</span><span className="directory-status">{item.status}</span></div><div className="directory-category">{item.category}</div><h3>{item.name}</h3><p>{item.detail}</p>{item.tools?.length?<div className="tags">{item.tools.map(x=><span key={x}>{x}</span>)}</div>:null}{item.slug?<a className="directory-link" href={'/projects/'+item.slug}>عرض صفحة المشروع <ArrowUpRight size={14}/></a>:null}{item.link?<a className="directory-link" href={item.link} target="_blank" rel="noopener noreferrer">فتح التفاصيل <ArrowUpRight size={14}/></a>:null}</article>)}</div>}
export default function Home(){
 const [ar,setAr]=useState(true),[light,setLight]=useState(false),[menu,setMenu]=useState(false);
 const [skillTab,setSkillTab]=useState('All'),[projectTab,setProjectTab]=useState('All');
 const [labTab,setLabTab]=useState('All'),[courseTab,setCourseTab]=useState('All');
 const [activeSkill,setActiveSkill]=useState<Item|null>(null);
 useEffect(()=>{document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr'},[ar]);
 const t=(en:string,aa:string)=>ar?aa:en;
 const skillTabs=['All',...skillGroups.map(x=>x.title)];
 const filteredProjects=useMemo(()=>projectTab==='All'?projects:projects.filter(x=>x.category===projectTab),[projectTab]);
 const projectTabs=['All',...Array.from(new Set(projects.map(x=>x.category)))];
 const filteredLabs=labTab==='All'?labs:labs.filter(x=>x.category===labTab);
 const labTabs=['All',...Array.from(new Set(labs.map(x=>x.category)))];
 const filteredCourses=courseTab==='All'?courses:courses.filter(x=>x.category===courseTab);
 const courseTabs=['All',...Array.from(new Set(courses.map(x=>x.category)))];
 return <main className={(light?'light ':'')+(ar?'arabic':'')}>
  <header className="header"><a className="wordmark" href="#home"><span>AK</span><b>ARFAT ALKAMALI</b></a><nav className={'nav '+(menu?'nav-open':'')}>{nav.map(([id,aa,en])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{t(en,aa)}</a>)}</nav><div className="header-tools"><button className="lang" onClick={()=>setAr(!ar)}>{ar?'EN':'عربي'}</button><button className="theme" onClick={()=>setLight(!light)} aria-label="Toggle theme">{light?<Moon size={17}/>:<Sun size={17}/>}</button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X size={19}/>:<Menu size={19}/>}</button></div></header>
  <div className="page" id="home">
   <section className="hero"><div className="hero-copy"><div className="eyebrow"><span/>{t('CYBERSECURITY STUDENT · LEVEL 3','طالب أمن سيبراني · المستوى الثالث')}</div><h1>{t('Technology with purpose.','تقنيةٌ بهدف.') }<em>{t('Security by design.','وأمنٌ في التصميم.')}</em></h1><p className="hero-text">{t('I’m Arfat Alkamali — a cybersecurity student interested in defensive security, software engineering and practical research.','أنا عرفات الكاملي، طالب أمن سيبراني مهتم بالأمن الدفاعي وهندسة البرمجيات والبحث التطبيقي.')}</p><div className="hero-buttons"><a className="button primary" href="#projects">{t('View projects','استعرض المشاريع')} <ArrowUpRight size={16}/></a><a className="button quiet" href="#contact">{t('Contact','تواصل معي')}</a></div></div><div className="hero-panel"><div className="monogram">AK<span>.</span></div><div className="panel-line"/><div className="panel-caption"><ShieldCheck size={18}/><span>{t('CYBERSECURITY · SOFTWARE · RESEARCH','الأمن السيبراني · البرمجيات · البحث')}</span></div><div className="panel-bottom"><span>LEARN / BUILD / SECURE</span><span>YEMEN · 2026</span></div></div></section>
   <div className="quick-facts"><div><span>01</span><b>{t('Cybersecurity','الأمن السيبراني')}</b><small>{t('Academic specialization','التخصص الدراسي')}</small></div><div><span>02</span><b>{t('Software & Systems','البرمجيات والأنظمة')}</b><small>{t('Project development','تطوير المشاريع')}</small></div><div><span>03</span><b>{t('Research & Labs','البحث والمعامل')}</b><small>{t('Practical learning','التعلم التطبيقي')}</small></div></div>
   <section className="section" id="about"><div className="section-title"><span>01 / {t('ABOUT ME','نبذة عني')}</span><h2>{t('A student focused on building useful technology.','طالب يركز على بناء تقنية مفيدة.')}</h2></div><div className="about-grid"><p className="lead">{t('I am developing my path across cybersecurity and software development through university study, independent projects and hands-on labs. I value structured learning, clear documentation and turning ideas into practical systems.','أعمل على تطوير مساري في الأمن السيبراني والبرمجيات من خلال الدراسة الجامعية والمشاريع المستقلة والتطبيق العملي. أهتم بالتعلم المنظم والتوثيق الواضح وتحويل الأفكار إلى أنظمة قابلة للتطبيق.')}</p><div className="details"><div><small>{t('NAME','الاسم')}</small><b>{t('Arfat Abdullah Hussein Al-Kamly','عرفات عبدالله حسين الكاملي')}</b></div><div><small>{t('UNIVERSITY','الجامعة')}</small><b>{t('Al-Manar University College','كلية المنار الجامعية')}</b></div><div><small>{t('SPECIALIZATION','التخصص')}</small><b>{t('Cybersecurity','الأمن السيبراني')}</b></div><div><small>{t('CURRENT LEVEL','المستوى الحالي')}</small><b>{t('Level 3','المستوى الثالث')}</b></div><div><small>{t('RESPONSIBILITY','المسؤولية')}</small><b>{t('Scientific Committee · Cybersecurity & IT','مسؤول اللجنة العلمية · الأمن السيبراني وتقنية المعلومات')}</b></div></div></div></section>
   <section className="section" id="education"><div className="section-title"><span>02 / {t('EDUCATION','التعليم')}</span><h2>{t('Academic foundation and current study.','مسيرتي التعليمية ودراستي الحالية.')}</h2></div><div className="education-panel"><div><span>AL-MANAR UNIVERSITY COLLEGE</span><h3>{t('Bachelor-level studies in Cybersecurity','دراسة جامعية في تخصص الأمن السيبراني')}</h3><p>{t('Completed the first and second academic levels and currently studying Level 3. The academic path includes programming, databases, networks, information security, cryptography, web development, research methods and AI for cybersecurity.','أكملت المستويين الأول والثاني، وأدرس حاليًا في المستوى الثالث. تشمل دراستي البرمجة وقواعد البيانات والشبكات وأمن المعلومات والتشفير وتطوير الويب ومناهج البحث والذكاء الاصطناعي للأمن السيبراني.')}</p></div><a className="directory-link" href="#learning">{t('Explore coursework','استعرض المقررات')} <ArrowUpRight size={14}/></a></div></section>
   <section className="section" id="skills"><div className="section-title"><span>02 / {t('SKILLS DIRECTORY','دليل المهارات')}</span><h2>{t('Skills, grouped by discipline.','مهارات مصنفة حسب المجال.')}</h2><p>{t('Explore programming, cybersecurity, systems, databases, AI, applied engineering and professional skills separately.','استعرض مهارات البرمجة والأمن السيبراني والأنظمة وقواعد البيانات والذكاء الاصطناعي والمهارات التطبيقية والشخصية كلًّا في فئته.')}</p></div><div className="filter-bar">{skillTabs.map((x,i)=><button key={x} className={skillTab===x?'active':''} onClick={()=>setSkillTab(x)}>{x==='All'?t('All skills','كل المهارات'):t(x,['البرمجة والتطوير','الأمن السيبراني والأمن الدفاعي','الشبكات والأنظمة والبنية التحتية','قواعد البيانات والبيانات','الذكاء الاصطناعي','المهارات التطبيقية والهندسية','المهارات الشخصية والمهنية'][i-1])}</button>)}</div><div className="skill-directory">{skillGroups.filter(g=>skillTab==='All'||g.title===skillTab).map((group,i)=>{const Icon=group.icon;return <article className="skill-group" key={group.title}><div className="skill-group-title"><Icon size={21}/><div><span>0{i+1} / SKILL CATEGORY</span><h3>{t(group.title,({'Programming & Development':'البرمجة والتطوير','Cybersecurity & Defensive Security':'الأمن السيبراني والأمن الدفاعي','Networks, Systems & Infrastructure':'الشبكات والأنظمة والبنية التحتية','Databases & Data':'قواعد البيانات والبيانات','Artificial Intelligence':'الذكاء الاصطناعي','Applied & Engineering Skills':'المهارات التطبيقية والهندسية','Skills in Study & Development':'مهارات قيد الدراسة والتطوير','Personal & Professional Skills':'المهارات الشخصية والمهنية'} as Record<string,string>)[group.title])}</h3></div><b>{group.items.length}</b></div><div className="tech-grid">{group.items.map((item,j)=><button type="button" className="tech-tile" key={item.name} onClick={()=>setActiveSkill(item)} aria-label={t('Learn about ','اعرف المزيد عن ')+item.name}><span className="tech-logo">{item.logo?<img src={'https://cdn.simpleicons.org/'+item.logo} alt="" loading="lazy"/>:<Code2 size={22}/>}</span><span className="tech-name">{item.name}</span><span className="tech-kind">{item.category}</span><span className="tech-open">{t('View details','عرض التفاصيل')} <ArrowUpRight size={12}/></span></button>)}</div></article>})}</div></section>
   <section className="section" id="projects"><div className="section-title"><span>03 / {t('PROJECT ARCHIVE','أرشيف المشاريع')}</span><h2>{t('Every project has its own record.','لكل مشروع ملفه المستقل.')}</h2><p>{t('Academic, personal and collaborative projects, each presented with its own purpose, description, technologies and status.','المشاريع الأكاديمية والشخصية والتعاونية، ولكل مشروع هدفه ووصفه وتقنياته وحالته بصورة مستقلة.')}</p></div><div className="filter-bar">{projectTabs.map(x=><button key={x} className={projectTab===x?'active':''} onClick={()=>setProjectTab(x)}>{x==='All'?t('All projects','كل المشاريع'):x}</button>)}</div><Cards items={filteredProjects}/></section>
   <section className="section" id="labs"><div className="section-title"><span>04 / {t('LABS & EXPERIMENTS','المعامل والتجارب')}</span><h2>{t('Practical environments and lab tracks.','بيئات تطبيقية ومسارات المعامل.')}</h2><p>{t('A structured index of controlled learning environments and practical security experiments.','فهرس منظم لبيئات التعلم المعزولة والتجارب الأمنية التطبيقية.')}</p></div><div className="filter-bar">{labTabs.map(x=><button key={x} className={labTab===x?'active':''} onClick={()=>setLabTab(x)}>{x==='All'?t('All labs','كل المعامل'):x}</button>)}</div><Cards items={filteredLabs}/></section>
   <section className="section" id="research"><div className="section-title"><span>05 / {t('RESEARCH & VULNERABILITIES','البحث والثغرات')}</span><h2>{t('Research interests and security analysis.','الاهتمامات البحثية وتحليل الأمن.')}</h2></div><div className="directory-grid"><article className="directory-card"><div className="directory-category">VULNERABILITY RESEARCH</div><h3>{t('Vulnerability Research','أبحاث الثغرات')}</h3><p>{t('A dedicated area for vulnerability discovery learning, technical analysis, documenting findings and maintaining research notes.','مساحة مخصصة لتعلم اكتشاف الثغرات وتحليلها تقنيًا وتوثيق النتائج وتنظيم الملاحظات البحثية.')}</p><div className="tags"><span>Vulnerability Assessment</span><span>Technical Analysis</span><span>Documentation</span></div><a className="directory-link" href="https://github.com/arfat-alkamly/Vulnerability-Research-Lab" target="_blank" rel="noopener noreferrer">Research repository <ArrowUpRight size={14}/></a></article><article className="directory-card"><div className="directory-category">AI SECURITY</div><h3>{t('AI-assisted Threat Detection','اكتشاف التهديدات بمساعدة الذكاء الاصطناعي')}</h3><p>{t('An identified future study and project direction combining AI concepts with cybersecurity threat detection.','مسار دراسة ومشروع مستقبلي يجمع مفاهيم الذكاء الاصطناعي مع اكتشاف التهديدات السيبرانية.')}</p><div className="tags"><span>Python</span><span>AI</span><span>Threat Detection</span></div></article><article className="directory-card"><div className="directory-category">DEFENSIVE ARCHITECTURE</div><h3>AEGIS-TITAN</h3><p>{t('Research and system-design direction for defensive monitoring, deception, isolation, incident response and evidence integrity.','مسار بحث وتصميم منظومة للمراقبة الدفاعية والخداع الأمني والعزل والاستجابة للحوادث وسلامة الأدلة.')}</p><div className="tags"><span>Detection</span><span>DFIR</span><span>Telemetry</span><span>Deception</span></div></article></div></section>
   <section className="section" id="credentials"><div className="section-title"><span>06 / {t('CERTIFICATIONS & BADGES','الشهادات والشارات والدورات')}</span><h2>{t('Verified learning and professional development.','الشهادات والدورات التي أنجزتها وروابط التحقق منها.')}</h2><p>{t('Open each credential to view its issuing platform and verification details.','افتح كل شهادة للاطلاع على مصدرها وتفاصيل التحقق منها.')}</p></div><div className="filter-bar">{courseTabs.map(x=><button key={x} className={courseTab===x?'active':''} onClick={()=>setCourseTab(x)}>{x==='All'?t('All credentials','كل الشهادات'):x}</button>)}</div><Cards items={filteredCourses}/><a className="directory-link" href="https://www.credly.com/users/arfat-alkamly" target="_blank" rel="noopener noreferrer">{t('View Credly profile','عرض ملف Credly')} <ArrowUpRight size={14}/></a></section>
   <section className="section" id="learning"><div className="section-title"><span>07 / {t('ACADEMIC COURSEWORK','المقررات الأكاديمية')}</span><h2>{t('What I am studying at university.','المقررات التي أدرسها في الجامعة.')}</h2></div><div className="course-list">{academicCourses.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b><small>{i<7?t('Level 3 · Term 1','المستوى الثالث · الفصل الأول'):t('Level 3 · Term 2','المستوى الثالث · الفصل الثاني')}</small></div>)}</div></section>
   <section className="section" id="goals"><div className="section-title"><span>07 / {t('FUTURE GOALS','الأهداف المستقبلية')}</span><h2>{t('A direction for continuous growth.','مسار واضح للتطور المستمر.')}</h2></div><div className="goals-grid"><article><span>01</span><h3>{t('Cybersecurity specialization','التعمق في الأمن السيبراني')}</h3><p>{t('Strengthen defensive security, threat analysis, digital forensics and incident response skills.','تعزيز المهارات في الأمن الدفاعي وتحليل التهديدات والتحقيق الجنائي الرقمي والاستجابة للحوادث.')}</p></article><article><span>02</span><h3>{t('Engineering and building','هندسة وبناء الأنظمة')}</h3><p>{t('Turn personal concepts into well-documented, maintainable software and security systems.','تحويل الأفكار والمفاهيم الشخصية إلى أنظمة برمجية وأمنية منظمة وقابلة للتطوير.')}</p></article><article><span>03</span><h3>{t('Research and professional growth','البحث والتطور المهني')}</h3><p>{t('Develop practical research, publish technical work and pursue relevant professional certifications.','تطوير البحث التطبيقي ونشر الأعمال التقنية ومواصلة الحصول على الشهادات المهنية ذات الصلة.')}</p></article></div></section>
   <section className="contact" id="contact"><div><span>09 / {t('CONTACT','التواصل')}</span><h2>{t('Let’s connect.','يسعدني التواصل.')}</h2><p>{t('For technical discussions, collaboration and professional opportunities.','للنقاشات التقنية والتعاون والفرص المهنية.')}</p></div><div className="social-grid social-icons">{socials.map(s=>{const Icon=s.icon;return <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}><Icon size={22}/></a>})}</div></section>
   <footer><a className="wordmark" href="#home"><span>AK</span><b>ARFAT ALKAMALI</b></a><small>© 2026 · {t('Built with clarity and purpose.','بُني بوضوح وهدف.')}</small><a href="#home">{t('BACK TO TOP ↑','العودة للأعلى ↑')}</a></footer>
  </div>
  {activeSkill&&<div className="tech-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setActiveSkill(null)}}><section className="tech-modal" role="dialog" aria-modal="true" aria-labelledby="tech-modal-title"><button className="tech-modal-close" type="button" onClick={()=>setActiveSkill(null)} aria-label={t('Close','إغلاق')}><X size={19}/></button><div className="tech-modal-icon">{activeSkill.logo?<img src={'https://cdn.simpleicons.org/'+activeSkill.logo} alt=""/>:<Code2 size={30}/>}</div><span className="tech-modal-category">{activeSkill.category}</span><h2 id="tech-modal-title">{activeSkill.name}</h2><p>{activeSkill.detail}</p><div className="tech-modal-foot">{t('Technology in my learning and technical toolkit','تقنية ضمن مساري التعليمي ومخزوني التقني')}</div></section></div>}
 </main>
}
