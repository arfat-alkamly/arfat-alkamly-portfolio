import {NextRequest,NextResponse} from 'next/server';
import {clientIp,createCode,hash,incrementLimit,redisCommand,sendVerificationEmail} from '@/lib/contact-verification';
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:NextRequest){
 try{
  const {email:raw}=await request.json();const email=String(raw||'').trim().toLowerCase();
  if(!emailPattern.test(email)||email.length>254)return NextResponse.json({error:'أدخل بريدًا إلكترونيًا صحيحًا.'},{status:400});
  const ip=clientIp(request);
  if(!(await incrementLimit('contact:send:ip:'+hash(ip),5,3600))||!(await incrementLimit('contact:send:email:'+hash(email),3,3600)))return NextResponse.json({error:'تجاوزت عدد طلبات رمز التحقق. حاول بعد ساعة.'},{status:429});
  const code=createCode();await redisCommand(['SET','contact:otp:'+hash(email),hash(code),'EX','600']);
  await sendVerificationEmail(email,code);
  return NextResponse.json({ok:true,message:'أرسلنا رمز التحقق إلى بريدك. تحقق من صندوق الوارد والرسائل غير المرغوب فيها.'});
 }catch(error){return NextResponse.json({error:error instanceof Error?error.message:'تعذر إرسال رمز التحقق.'},{status:503});}
}
