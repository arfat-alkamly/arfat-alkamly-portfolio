'use client';
import {FormEvent,useEffect,useState} from 'react';
type User={email:string;name:string};
export default function ContactForm(){
 const [user,setUser]=useState<User|null>(null),[loading,setLoading]=useState(true),[status,setStatus]=useState('idle'),[notice,setNotice]=useState('');
 async function refresh(){try{const r=await fetch('/api/auth/session',{cache:'no-store'});const d=await r.json();setUser(d.authenticated?d.user:null);}catch{setUser(null);}finally{setLoading(false);}}
 useEffect(()=>{void refresh();const params=new URLSearchParams(window.location.search);if(params.get('auth')==='failed')setNotice('تعذر تأكيد حساب Google. حاول مرة أخرى.');if(params.has('auth'))window.history.replaceState({},'',window.location.pathname);},[]);
 async function logout(){await fetch('/api/auth/session',{method:'DELETE'});setUser(null);setNotice('تم فصل الحساب.');}
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();if(!user||status==='sending')return;
  const form=event.currentTarget;setStatus('sending');setNotice('');
  try{const r=await fetch('/api/contact',{method:'POST',body:new FormData(form)});const d=await r.json();if(!r.ok)throw new Error(d.error||'تعذر إرسال الرسالة.');setStatus('success');setNotice('تم إرسال رسالتك بنجاح. شكرًا لتواصلك.');form.reset();}
  catch(e){setStatus('error');setNotice(e instanceof Error?e.message:'حدث خطأ غير متوقع.');}
 }
 if(loading)return <div className="contact-auth-status" role="status">جارٍ التحقق من حالة تسجيل الدخول…</div>;
 return <div className="contact-form-wrap">
  {!user?<div className="google-auth-panel"><p>قبل إرسال الرسالة، أكّد هويتك عبر حساب Google للحد من الرسائل الآلية. لا نطلب الوصول إلى بريدك أو ملفاتك.</p><a className="button-primary google-auth-button" href="/api/auth/google"><span aria-hidden="true">G</span> المتابعة باستخدام Google</a></div>:<div className="verified-account"><div><strong>تم تأكيد الحساب</strong><span>{user.email}</span></div><button type="button" className="button-secondary" onClick={logout}>تغيير الحساب</button></div>}
  {user&&<form className="contact-form" onSubmit={submit}>
   <label>الاسم<input name="name" autoComplete="name" defaultValue={user.name} minLength={2} maxLength={80} placeholder="اكتب اسمك" required/></label>
   <label>البريد الإلكتروني<input name="email" type="email" value={user.email} readOnly required/></label>
   <label>موضوع الرسالة<input name="subject" minLength={3} maxLength={120} placeholder="مثال: تعاون تقني أو استفسار مهني" required/></label>
   <label>الرسالة<textarea name="message" minLength={10} maxLength={4000} rows={5} placeholder="اكتب تفاصيل رسالتك هنا…" required/></label>
   <label className="form-honeypot" aria-hidden="true">اترك هذا الحقل فارغًا<input name="website" tabIndex={-1} autoComplete="off"/></label>
   <button className="button-primary" type="submit" disabled={status==='sending'}>{status==='sending'?'جارٍ إرسال الرسالة…':'إرسال الرسالة'}</button>
  </form>}
  {notice&&<p className={status==='success'?'form-success':'form-error'} role="status" aria-live="polite">{notice}</p>}
 </div>;
}
