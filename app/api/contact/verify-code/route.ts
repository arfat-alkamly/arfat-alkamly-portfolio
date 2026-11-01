import {NextRequest,NextResponse} from 'next/server';
import {clientIp,createVerificationToken,hash,incrementLimit,redisCommand} from '@/lib/contact-verification';
export async function POST(request:NextRequest){
 try{
  const {email:raw,code:rawCode}=await request.json();const email=String(raw||'').trim().toLowerCase(),code=String(rawCode||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!/^[0-9]{6}$/.test(code))return NextResponse.json({error:'تحقق من البريد والرمز المكوّن من 6 أرقام.'},{status:400});
  const key='contact:otp:'+hash(email);
  if(!(await incrementLimit('contact:verify:'+hash(email)+':'+hash(clientIp(request)),5,600)))return NextResponse.json({error:'تجاوزت عدد المحاولات. اطلب رمزًا جديدًا.'},{status:429});
  const stored=await redisCommand(['GET',key]);
  if(!stored||stored!==hash(code))return NextResponse.json({error:'رمز التحقق غير صحيح أو انتهت صلاحيته.'},{status:400});
  await redisCommand(['DEL',key]);
  const token=createVerificationToken();await redisCommand(['SET','contact:verified:'+token,email,'EX','600']);
  return NextResponse.json({ok:true,verificationToken:token,message:'تم تأكيد ملكية البريد الإلكتروني.'});
 }catch(error){return NextResponse.json({error:error instanceof Error?error.message:'تعذر التحقق من الرمز.'},{status:503});}
}
