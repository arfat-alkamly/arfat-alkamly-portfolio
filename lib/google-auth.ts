import {createHmac,createHash,randomBytes,createPublicKey,timingSafeEqual,verify as verifySignature} from 'node:crypto';
import {cookies} from 'next/headers';
import {NextRequest,NextResponse} from 'next/server';
const b64=(v:Buffer|string)=>Buffer.from(v).toString('base64url');
const secret=()=>process.env.AUTH_SESSION_SECRET||'';
export const sha=(v:string)=>createHash('sha256').update(v).digest('base64url');
export const randomToken=(n=32)=>randomBytes(n).toString('base64url');
export async function redis(command:string[]){
 const url=process.env.UPSTASH_REDIS_REST_URL,token=process.env.UPSTASH_REDIS_REST_TOKEN;
 if(!url||!token)throw new Error('خدمة الحماية غير مهيأة.');
 const r=await fetch(url,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(command),cache:'no-store'});
 if(!r.ok)throw new Error('تعذر الوصول إلى مخزن الحماية.');
 const d=await r.json();if(d.error)throw new Error('تعذر تنفيذ عملية الحماية.');return d.result as string|null;
}
export async function rate(key:string,limit:number,seconds:number){
 const n=Number(await redis(['INCR',key]));if(n===1)await redis(['EXPIRE',key,String(seconds)]);return n<=limit;
}
export async function setSession(email:string,name:string){
 const s=secret();if(s.length<32)throw new Error('AUTH_SESSION_SECRET غير مضبوط أو قصير.');
 const payload=b64(JSON.stringify({email,name,exp:Math.floor(Date.now()/1000)+1800}));
 const sig=createHmac('sha256',s).update(payload).digest('base64url');
 const jar=await cookies();jar.set('contact_session',payload+'.'+sig,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:1800});
}
export async function getSession(){
 const raw=(await cookies()).get('contact_session')?.value,s=secret();if(!raw||s.length<32)return null;
 const [payload,sig]=raw.split('.');if(!payload||!sig)return null;
 const expected=createHmac('sha256',s).update(payload).digest();
 const actual=Buffer.from(sig,'base64url');if(actual.length!==expected.length||!timingSafeEqual(expected,actual))return null;
 try{const p=JSON.parse(Buffer.from(payload,'base64url').toString());if(!p.email||p.exp<Math.floor(Date.now()/1000))return null;return {email:String(p.email),name:String(p.name||'')};}catch{return null;}
}
export async function verifyGoogleIdToken(token:string,expectedNonce:string){
 const parts=token.split('.');if(parts.length!==3)throw new Error('رمز Google غير صالح.');
 const header=JSON.parse(Buffer.from(parts[0],'base64url').toString()),claims=JSON.parse(Buffer.from(parts[1],'base64url').toString());
 if(header.alg!=='RS256'||typeof header.kid!=='string')throw new Error('توقيع Google غير مدعوم.');
 const response=await fetch('https://www.googleapis.com/oauth2/v3/certs',{cache:'no-store'});if(!response.ok)throw new Error('تعذر التحقق من توقيع Google.');
 const jwks=await response.json(),jwk=jwks.keys?.find((k:any)=>k.kid===header.kid&&k.kty==='RSA');if(!jwk)throw new Error('مفتاح توقيع Google غير موجود.');
 const key=createPublicKey({key:jwk,format:'jwk'});
 const valid=verifySignature('RSA-SHA256',Buffer.from(parts[0]+'.'+parts[1]),key,Buffer.from(parts[2],'base64url'));
 const aud=process.env.GOOGLE_CLIENT_ID,now=Math.floor(Date.now()/1000);
 const validClaims=typeof claims.iss==='string'&&['https://accounts.google.com','accounts.google.com'].includes(claims.iss)
  &&claims.aud===aud&&(!claims.azp||claims.azp===aud)
  &&typeof claims.sub==='string'&&claims.sub.length>0
  &&Number.isSafeInteger(claims.exp)&&claims.exp>now
  &&Number.isSafeInteger(claims.iat)&&claims.iat<=now+60
  &&(!('nbf' in claims)||(Number.isSafeInteger(claims.nbf)&&claims.nbf<=now))
  &&typeof claims.nonce==='string'&&claims.nonce===expectedNonce
  &&claims.email_verified===true&&typeof claims.email==='string'&&/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(claims.email);
 if(!valid||!aud||!validClaims)throw new Error('تعذر إثبات ملكية حساب Google.');
 return {email:claims.email.toLowerCase(),name:typeof claims.name==='string'?claims.name:''};
}
export function sameOrigin(req:NextRequest){
 const origin=req.headers.get('origin'),host=req.headers.get('host');
 if(!origin||!host)return false;
 try{const parsed=new URL(origin),local=process.env.NODE_ENV!=='production'&&['localhost','127.0.0.1','[::1]'].includes(parsed.hostname);return (parsed.protocol==='https:'||(local&&parsed.protocol==='http:'))&&parsed.host.toLowerCase()===host.toLowerCase();}catch{return false;}
}
export function fail(message:string,status=400){return NextResponse.json({error:message},{status});}
