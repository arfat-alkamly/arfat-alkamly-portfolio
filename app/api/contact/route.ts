import {NextRequest,NextResponse} from 'next/server';
import {createHash} from 'node:crypto';
import {getSession,rate,redis,sameOrigin} from '@/lib/google-auth';
export async function POST(request:NextRequest){
 try{
  if(!sameOrigin(request))return NextResponse.json({error:'طلب غير صالح.'},{status:403});
  const session=await getSession();if(!session)return NextResponse.json({error:'أكد هويتك باستخدام Google قبل إرسال الرسالة.'},{status:401});
  const length=Number(request.headers.get('content-length')||0);if(length>12000)return NextResponse.json({error:'حجم الرسالة أكبر من المسموح.'},{status:413});
  const data=await request.formData();if(String(data.get('website')||'').trim())return NextResponse.json({ok:true});
  const name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim().toLowerCase(),subject=String(data.get('subject')||'').trim(),message=String(data.get('message')||'').trim();
  if(email!==session.email)return NextResponse.json({error:'البريد لا يطابق حساب Google الذي تم التحقق منه.'},{status:403});
  if(name.length<2||name.length>80||subject.length<3||subject.length>120||message.length<10||message.length>4000)return NextResponse.json({error:'تحقق من الحقول المدخلة وحاول مجددًا.'},{status:400});
  const ip=request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown',day=new Date().toISOString().slice(0,10),emailKey=createHash('sha256').update(session.email).digest('hex'),ipKey=createHash('sha256').update(ip).digest('hex');
  const [accountOk,ipOk,globalOk]=await Promise.all([rate('contact:account:'+emailKey,5,86400),rate('contact:ip:'+ipKey,8,3600),rate('contact:global:'+day,40,86400)]);
  if(!accountOk||!ipOk||!globalOk)return NextResponse.json({error:'تم بلوغ حد الإرسال المسموح. حاول لاحقًا.'},{status:429});
  const formId=process.env.FORMSPREE_FORM_ID||'myeenwaq';
  if(!/^[a-zA-Z0-9]+$/.test(formId))return NextResponse.json({error:'إعداد استقبال الرسائل غير صالح.'},{status:503});
  const response=await fetch('https://formspree.io/f/'+formId,{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify({name,email,_replyto:session.email,_subject:subject,message}),cache:'no-store'});
  if(!response.ok)return NextResponse.json({error:'لم يتم قبول الرسالة. حاول لاحقًا.'},{status:502});
  await redis(['LPUSH','contact:audit',JSON.stringify({email:session.email,at:new Date().toISOString(),subject:subject.slice(0,120),ip:ipKey})]);await redis(['LTRIM','contact:audit','0','199']);
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'خدمة إرسال الرسائل غير متاحة حاليًا.'},{status:503});}
}
