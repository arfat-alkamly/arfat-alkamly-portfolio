import type {Metadata} from 'next';
import { cookies } from 'next/headers';
import ResearchPageEnglish from './ResearchPageEnglish';
import {localizedPageMetadata} from '../../lib/seo';
import JsonLd from '../../components/seo/JsonLd';
import {researchJsonLd} from '../../lib/structured-data';
import {researchProgramsEnglish} from './ResearchPageEnglish';
import {researchPrograms} from '../../data/research-proposals';
import {ArrowUpLeft, ArrowUpRight, Fingerprint, ShieldCheck} from 'lucide-react';

export async function generateMetadata():Promise<Metadata>{
 const locale=(await cookies()).get('portfolio-locale')?.value==='en'?'en':'ar';
 return localizedPageMetadata({path:'/research',locale,pageTitle:locale==='en'?'Cybersecurity Research':'الأبحاث والدراسات الأمنية',description:locale==='en'?'Independent research proposals in defensive security, AI security, digital forensics, vulnerability analysis, and secure software.':'مقترحات بحثية مستقلة في الأمن الدفاعي والذكاء الاصطناعي والتحقيق الرقمي وتحليل الثغرات وهندسة البرمجيات الآمنة.'});
}




async function ResearchPageArabic(){
  return <main className="content-page rs-page">
    <div className="rs-topline"><span>ARFAT ALKAMLI / RESEARCH OFFICE</span><span>CYBERSECURITY · ENGINEERING · APPLIED RESEARCH</span></div>

    <section className="rs-identity">
      <div className="rs-identity-grid" aria-hidden="true"><i/><i/><i/><i/></div>
      <div className="rs-identity-copy">
        <span className="rs-kicker"><span className="rs-live-dot"/> PERSONAL RESEARCH IDENTITY / 2026</span>
        <p className="rs-overline">CYBERSECURITY RESEARCHER & SECURITY ENGINEERING</p>
        <h1>الهوية <em>البحثية</em></h1>
        <h2>المهندس عرفات الكاملي</h2>
        <p className="rs-intro">مسار بحثي مستقل يركز على هندسة الأمن السيبراني، وتحليل الثغرات، والأنظمة الدفاعية الذكية، والتحقيق الرقمي، وأمن البرمجيات والشبكات. يربط هذا المسار بين الفهم النظري والتحليل المنهجي والتصميم الهندسي القابل للاختبار.</p>
        <div className="rs-focus-tags"><span>Security Research</span><span>Defensive Engineering</span><span>AI for Cybersecurity</span><span>DFIR</span></div>
      </div>
      <div className="rs-seal">
        <div className="rs-seal-ring"><div className="rs-seal-core"><ShieldCheck/><b>AK</b><small>RESEARCH</small></div></div>
        <span>INDEPENDENT RESEARCH PROGRAM</span>
        <strong>RESEARCH · ANALYZE · ENGINEER</strong>
      </div>
      <div className="rs-identity-footer"><span>RESEARCH PROFILE / AK-2026</span><span>YEMEN <i/> INDEPENDENT TECHNICAL RESEARCH</span></div>
    </section>

    <section className="rs-orcid">
      <div className="rs-orcid-main"><span className="rs-orcid-mark">iD</span><div><small>INTERNATIONAL RESEARCHER IDENTIFIER</small><h2>المعرّف البحثي الدولي</h2><p>ملف الباحث على منصة ORCID</p></div></div>
      <a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer"><b>0009-0008-1348-5146</b><span>عرض سجل ORCID <ArrowUpRight size={15}/></span></a>
    </section>

    <section className="rs-intro-section">
      <div><span className="rs-section-kicker">RESEARCH PORTFOLIO / 01</span><h2>برنامج الأبحاث والمقترحات العلمية</h2><p>مجموعة من التصورات البحثية المتخصصة التي صيغت لتكون قابلة للتحويل إلى خطط أكاديمية ودراسات تطبيقية، مع تحديد المشكلة والمنهجية والمخرجات المتوقعة لكل موضوع.</p></div>
      <div className="rs-count"><b>13</b><span>RESEARCH<br/>PROPOSALS</span></div>
    </section>

    <div className="rs-status-legend">
      <span><i className="approved"/> خطة بحثية معتمدة ضمن المسار الشخصي</span>
      <span><i className="preparing"/> قيد التجهيز</span>
      <span><i className="active"/> قيد التطوير البحثي</span>
    </div>

    <section className="rs-research-grid" aria-label="المقترحات البحثية">
      {researchPrograms.map(item=><article id={`proposal-${item.id}`} className="rs-paper" key={item.id}>
        <div className="rs-paper-top"><span className="rs-paper-number">RESEARCH / {item.id}</span><span className={'rs-status '+item.tone}>{item.status}</span></div>
        <span className="rs-paper-category">{item.category}</span>
        <h3>{item.title}</h3>
        <small className="rs-paper-en">{item.en}</small>
        <p className="rs-paper-summary">{item.summary}</p>
        <div className="rs-paper-detail"><b>الإشكالية البحثية</b><p>{item.question}</p></div>
        <div className="rs-paper-detail"><b>المنهجية المقترحة</b><p>{item.method}</p></div>
        <div className="rs-paper-outcome"><b>المخرجات المتوقعة</b><p>{item.outcome}</p></div>
        <div className="rs-paper-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="rs-paper-foot"><span>CONCEPT AUTHOR</span><b>المهندس عرفات الكاملي</b></div>
      </article>)}
    </section>

    <section className="rs-method">
      <div><span className="rs-section-kicker">RESEARCH GOVERNANCE / 02</span><h2>منهجية العمل البحثي</h2><p>تُبنى كل دراسة على سؤال محدد، ومراجعة أدبيات ومصادر أولية، ومنهج قابل للتفسير والتكرار، ثم تقييم النتائج بحدود واضحة. لا تُعرض الفرضيات على أنها حقائق، ولا تُنسب نتائج قبل اختبارها وتوثيقها.</p></div>
      <div className="rs-method-steps">
        <article><b>01</b><strong>تحديد المشكلة</strong><small>النطاق والسؤال والفرضيات</small></article>
        <article><b>02</b><strong>مراجعة الأدبيات</strong><small>المعايير والأبحاث السابقة</small></article>
        <article><b>03</b><strong>التصميم والتجربة</strong><small>منهج قابل للتكرار</small></article>
        <article><b>04</b><strong>التقييم والتوثيق</strong><small>نتائج وحدود ومراجع</small></article>
      </div>
    </section>

    <aside className="rs-authorship-note">
      <div className="rs-note-icon"><Fingerprint/></div>
      <div><span>AUTHORSHIP & RESEARCH STATUS</span><h2>ملاحظة توثيقية حول ملكية الأفكار وحالة الأبحاث</h2>
        <p>هذه التصورات والعناوين والأطر الأولية مقترحات بحثية من إعداد المهندس عرفات الكاملي، وهي ضمن برنامجه البحثي الشخصي، وتتوزع حالتها بين اعتماد خطة العمل الشخصية، وقيد التجهيز، وقيد التطوير البحثي. اعتماد الخطة هنا لا يعني اعتمادًا من جامعة أو جهة نشر.</p>
        <p>المحتوى المعروض يشرح الفكرة والإشكالية والمنهجية والمخرجات المتوقعة، ولا يعني أن دراسة مكتملة أو نتائج تجريبية أو ورقة منشورة قد أُنجزت. ستُحدّث حالة كل بحث عند اكتمال مراحله وتوثيقها، مع إضافة المراجع والبيانات والنتائج الفعلية عند توفرها.</p>
      </div>
    </aside>

    <footer className="rs-footer"><span>ARFAT ALKAMLI / RESEARCH PORTFOLIO</span><b>BUILDING KNOWLEDGE. ENGINEERING SECURITY.</b><a href="https://orcid.org/0009-0008-1348-5146" target="_blank" rel="noopener noreferrer">ORCID PROFILE <ArrowUpLeft size={14}/></a></footer>
  </main>;
}


export default async function ResearchPage(){
  const en=(await cookies()).get('portfolio-locale')?.value==='en';
  const proposals=en?researchProgramsEnglish:researchPrograms;
  return <><JsonLd data={researchJsonLd(proposals,en?'en':'ar')}/>{en?<ResearchPageEnglish/>:<ResearchPageArabic/>}</>;
}
