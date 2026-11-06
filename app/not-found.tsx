import Link from 'next/link';
import {cookies} from 'next/headers';

export default async function NotFound(){
  const en=(await cookies()).get('portfolio-locale')?.value==='en';
  return <main className="content-page" dir={en?'ltr':'rtl'}>
    <span className="eyebrow">404 / NOT FOUND</span>
    <h1>{en?'Page not found':'الصفحة غير موجودة'}</h1>
    <p className="lead">{en?'The address may be incorrect, or the page may have moved.':'قد يكون الرابط غير صحيح أو أن الصفحة نُقلت.'}</p>
    <Link className="button-primary" href={en?'/en':'/ar'}>{en?'Return to home':'العودة إلى الرئيسية'}</Link>
  </main>;
}
