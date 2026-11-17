import type {Metadata} from 'next';

export type SiteLocale='ar'|'en';
export const siteUrl='https://arfat-phi.vercel.app';

export function localizedAlternates(path:string,locale:SiteLocale):Metadata['alternates']{
 const suffix=path==='/'?'':path.startsWith('/')?path:`/${path}`;
 return {
  canonical:`${siteUrl}/${locale}${suffix}`,
  languages:{
   ar:`${siteUrl}/ar${suffix}`,
   en:`${siteUrl}/en${suffix}`,
   'x-default':`${siteUrl}/ar${suffix}`
  }
 };
}

type LocalizedMetadataInput={path:string;locale:SiteLocale;pageTitle:string;description:string;image?:string;type?:'website'|'article'};

export function localizedPageMetadata({path,locale,pageTitle,description,image='/opengraph-image',type='website'}:LocalizedMetadataInput):Metadata{
 const name=locale==='ar'?'عرفات عبدالله الكاملي':'Arfat Abdullah Alkamly';
 const role=locale==='ar'?'باحث في الأمن السيبراني ومهندس برمجيات':'Cybersecurity Researcher & Software Engineer';
 const title=`${name} | ${pageTitle} | ${role}`;
 const fullDescription=`${name} — ${description} ${role}.`;
 const url=`${siteUrl}/${locale}${path==='/'?'':path}`;
 return {
  metadataBase:new URL(siteUrl),
  title,
  description:fullDescription,
  alternates:localizedAlternates(path,locale),
  openGraph:{type,locale:locale==='ar'?'ar_YE':'en_US',url,siteName:'Arfat Abdullah Alkamly | عرفات عبدالله الكاملي',title,description:fullDescription,images:[{url:image,width:1200,height:630,alt:title}]},
  twitter:{card:'summary_large_image',title,description:fullDescription,images:[image]},
  robots:{index:true,follow:true},
 };
}
