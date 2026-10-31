import {NextRequest,NextResponse} from 'next/server';
const emailPattern=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
export async function POST(request:NextRequest){
 const origin=request.headers.get('origin');const host=request.headers.get('host');
 if(origin&&host){try{if(new URL(origin).host!==host)return NextResponse.json({error:'طلب غير صالح.'},{status:403});}catch{return NextResponse.json({error:'طلب غير صالح.'},{status:403});}}
 const data=await request.formData();
 if(String(data.get('website')||'').trim())return NextResponse.json({ok:true});
 const name=String(data.get('name')||'').trim();const email=String(data.get('email')||'').trim();const subject=String(data.get('subject')||'').trim();const message=String(data.get('message')||'').trim();
 if(name.length<2||name.length>80||!emailPattern.test(email)||email.length>254||subject.length<3||subject.length>120||message.length<10||message.length>4000)return NextResponse.json({error:'تحقق من الحقول المدخلة وحاول مجددًا.'},{status:400});
 const formId=process.env.FORMSPREE_FORM_ID;if(!formId||!/^[a-zA-Z0-9]+$/.test(formId))return NextResponse.json({error:'نموذج الرسائل لم يُفعّل بعد. يمكنك التواصل عبر البريد الإلكتروني الظاهر في الصفحة.'},{status:503});
 const response=await fetch('https://formspree.io/f/'+formId,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name,email,_subject:subject,message}),cache:'no-store'});
 if(!response.ok)return NextResponse.json({error:'لم يتم قبول الرسالة. حاول لاحقًا أو استخدم البريد الإلكتروني.'},{status:502});
 return NextResponse.json({ok:true});
}
