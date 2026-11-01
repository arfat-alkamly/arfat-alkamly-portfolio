'use client';
import {FormEvent,useState} from 'react';
type Status='idle'|'sending'|'success'|'error';
export default function ContactForm(){
 const [status,setStatus]=useState<Status>('idle'),[notice,setNotice]=useState(''),[email,setEmail]=useState(''),[code,setCode]=useState(''),[token,setToken]=useState(''),[codeSent,setCodeSent]=useState(false),[verified,setVerified]=useState(false),[busy,setBusy]=useState(false);
 async function requestCode(){
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){setNotice('أدخل بريدًا إلكترونيًا صحيحًا أولًا.');return;}
  setBusy(true);setNotice('');
  try{const r=await fetch('/api/contact/send-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});const d=await r.json();if(!r.ok)throw new Error(d.error);setCodeSent(true);setVerified(false);setToken('');setNotice(d.message||'تم إرسال رمز التحقق.');}
  catch(e){setNotice(e instanceof Error?e.message:'تعذر إرسال الرمز.');}finally{setBusy(false);}
 }
 async function verifyCode(){
  setBusy(true);setNotice('');
  try{const r=await fetch('/api/contact/verify-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,code})});const d=await r.json();if(!r.ok)throw new Error(d.error);setToken(d.verificationToken);setVerified(true);setNotice('تم تأكيد البريد الإلكتروني. يمكنك إرسال رسالتك الآن.');}
  catch(e){setNotice(e instanceof Error?e.message:'تعذر التحقق من الرمز.');}finally{setBusy(false);}
 }
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(status==='sending'||!verified||!token)return;
  const form=event.currentTarget,data=new FormData(form);data.set('verificationToken',token);setStatus('sending');setNotice('');
  try{const r=await fetch('/api/contact',{method:'POST',body:data});const d=await r.json();if(!r.ok)throw new Error(d.error||'تعذر إرسال الرسالة.');setStatus('success');setNotice('تم إرسال رسالتك بعد تأكيد بريدك الإلكتروني. شكرًا لتواصلك.');form.reset();setEmail('');setCode('');setToken('');setCodeSent(false);setVerified(false);}
  catch(e){setStatus('error');setNotice(e instanceof Error?e.message:'حدث خطأ غير متوقع.');}
 }
 return <form className="contact-form" onSubmit={submit}>
  <label>الاسم<input name="name" autoComplete="name" minLength={2} maxLength={80} required/></label>
  <label>البريد الإلكتروني<input name="email" type="email" autoComplete="email" maxLength={254} required value={email} onChange={e=>{setEmail(e.target.value);setVerified(false);setToken('');setCodeSent(false);setCode('');}}/></label>
  <div className="verification-actions"><button className="button-secondary" type="button" disabled={busy||verified} onClick={requestCode}>{busy?'جارٍ المعالجة…':verified?'تم تأكيد البريد':'إرسال رمز التحقق'}</button>{verified&&<span className="form-success">تم التحقق ✓</span>}</div>
  {codeSent&&!verified&&<div className="verification-code"><label>رمز التحقق<input value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,'').slice(0,6))} inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="أدخل الرمز المكوّن من 6 أرقام"/></label><button className="button-secondary" type="button" disabled={busy||code.length!==6} onClick={verifyCode}>{busy?'جارٍ التحقق…':'تأكيد البريد'}</button><p className="form-hint">صلاحية الرمز 10 دقائق. لا تشاركه مع أي شخص.</p></div>}
  <label>موضوع الرسالة<input name="subject" minLength={3} maxLength={120} required/></label>
  <label>الرسالة<textarea name="message" minLength={10} maxLength={4000} rows={5} required/></label>
  <label className="form-honeypot" aria-hidden="true">اترك هذا الحقل فارغًا<input name="website" tabIndex={-1} autoComplete="off"/></label>
  <button className="button-primary" type="submit" disabled={status==='sending'||!verified}>{status==='sending'?'جارٍ الإرسال…':'إرسال الرسالة'}</button>
  {notice&&<p className={status==='success'||verified?'form-success':'form-error'} role="status" aria-live="polite">{notice}</p>}
 </form>;
}