import {NextRequest,NextResponse} from 'next/server';
import {setSession,verifyGoogleIdToken} from '@/lib/google-auth';
export async function GET(request:NextRequest){
 const failure=()=>{const response=NextResponse.redirect(new URL('/contact?auth=failed',request.url));for(const key of ['google_oauth_state','google_oauth_nonce','google_oauth_verifier'])response.cookies.set(key,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:0});return response;};
 try{
  const {searchParams}=new URL(request.url),code=searchParams.get('code'),state=searchParams.get('state');
  const jar=request.cookies,expectedState=jar.get('google_oauth_state')?.value,nonce=jar.get('google_oauth_nonce')?.value,verifier=jar.get('google_oauth_verifier')?.value;
  if(searchParams.get('error')||!code||!state||!expectedState||state!==expectedState||!nonce||!verifier)return failure();
  const id=process.env.GOOGLE_CLIENT_ID,secret=process.env.GOOGLE_CLIENT_SECRET,redirect=process.env.GOOGLE_REDIRECT_URI;
  if(!id||!secret||!redirect)return failure();
  const body=new URLSearchParams({code,client_id:id,client_secret:secret,redirect_uri:redirect,grant_type:'authorization_code',code_verifier:verifier});
  const tokenResponse=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body,cache:'no-store'});
  if(!tokenResponse.ok)return failure();
  const tokens=await tokenResponse.json();if(typeof tokens.id_token!=='string')return failure();
  const user=await verifyGoogleIdToken(tokens.id_token,nonce);
  await setSession(user.email,user.name);
  const response=NextResponse.redirect(new URL('/contact?auth=success',request.url));
  for(const key of ['google_oauth_state','google_oauth_nonce','google_oauth_verifier'])response.cookies.delete(key);
  return response;
 }catch{return failure();}
}
