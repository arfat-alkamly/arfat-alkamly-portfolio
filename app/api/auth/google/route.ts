import {NextRequest,NextResponse} from 'next/server';
import {randomToken,sha} from '@/lib/google-auth';
export async function GET(request:NextRequest){
 const id=process.env.GOOGLE_CLIENT_ID,redirect=process.env.GOOGLE_REDIRECT_URI;
 if(!id||!redirect)return NextResponse.json({error:'تسجيل Google غير مهيأ بعد.'},{status:503});
 const state=randomToken(),nonce=randomToken(),verifier=randomToken(48),url=new URL('https://accounts.google.com/o/oauth2/v2/auth');
 url.searchParams.set('client_id',id);url.searchParams.set('redirect_uri',redirect);url.searchParams.set('response_type','code');url.searchParams.set('scope','openid email profile');url.searchParams.set('state',state);url.searchParams.set('nonce',nonce);url.searchParams.set('code_challenge',sha(verifier));url.searchParams.set('code_challenge_method','S256');url.searchParams.set('prompt','select_account');
 const response=NextResponse.redirect(url);const options={httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax' as const,path:'/',maxAge:600};
 response.cookies.set('google_oauth_state',state,options);response.cookies.set('google_oauth_nonce',nonce,options);response.cookies.set('google_oauth_verifier',verifier,options);
 return response;
}
