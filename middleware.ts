import {NextRequest,NextResponse} from 'next/server';

const LOCALES=['ar','en'] as const;
type Locale=(typeof LOCALES)[number];

export function middleware(request:NextRequest){
 const {pathname}=request.nextUrl;

 if(pathname.startsWith('/_next')||pathname.startsWith('/api/')||pathname==='/api'||pathname.includes('.')||pathname.startsWith('/.well-known')){
  return NextResponse.next();
 }

 const segments=pathname.split('/');
 const first=segments[1];

 // Explicit locale URLs (/ar/... and /en/...) are internally rewritten
 // to the existing route tree while preserving the visitor's language.
 if(LOCALES.includes(first as Locale)){
  const locale=first as Locale;
  const rest='/'+segments.slice(2).filter(Boolean).join('/');
  const target=request.nextUrl.clone();
  target.pathname=rest==='/'?'/':rest;
  request.cookies.set('portfolio-locale',locale);
  const response=NextResponse.rewrite(target,{request});
  response.cookies.set('portfolio-locale',locale,{path:'/',maxAge:31536000,sameSite:'lax'});
  return response;
 }

 // Keep internal links on the same URL instead of issuing a redirect
 // to /ar/... or /en/... on every click. This avoids an extra navigation
 // round-trip while retaining the locale in the cookie.
 const saved=request.cookies.get('portfolio-locale')?.value;
 const locale:Locale=saved==='en'?'en':'ar';
 request.cookies.set('portfolio-locale',locale);
 const response=NextResponse.rewrite(request.nextUrl,{request});
 response.cookies.set('portfolio-locale',locale,{path:'/',maxAge:31536000,sameSite:'lax'});
 return response;
}

export const config={matcher:['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)']};
