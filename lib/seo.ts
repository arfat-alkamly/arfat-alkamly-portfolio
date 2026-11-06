import type {Metadata} from 'next';
export type SiteLocale='ar'|'en';
export function localizedAlternates(path:string,locale:SiteLocale):Metadata['alternates']{
 const suffix=path==='/'?'':path.startsWith('/')?path:`/${path}`;
 return {
  canonical:`/${locale}${suffix}`,
  languages:{
   ar:`/ar${suffix}`,
   en:`/en${suffix}`,
   'x-default':`/ar${suffix}`
  }
 };
}
