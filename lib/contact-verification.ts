import {createHash,randomBytes,randomInt} from 'node:crypto';

const redisUrl=process.env.UPSTASH_REDIS_REST_URL;
const redisToken=process.env.UPSTASH_REDIS_REST_TOKEN;
export async function redisCommand(command:string[]){
 if(!redisUrl||!redisToken)throw new Error('خدمة التحقق غير مهيأة.');
 const response=await fetch(redisUrl,{method:'POST',headers:{Authorization:`Bearer ${redisToken}`,'Content-Type':'application/json'},body:JSON.stringify(command),cache:'no-store'});
 if(!response.ok)throw new Error('تعذر الوصول إلى خدمة التحقق.');
 const payload=await response.json();
 if(payload.error)throw new Error('تعذر تنفيذ عملية التحقق.');
 return payload.result as string|null;
}
export function hash(value:string){return createHash('sha256').update(value).digest('hex');}
export function clientIp(request:Request){return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';}
export async function incrementLimit(key:string,max:number,ttl:number){
 const count=Number(await redisCommand(['INCR',key]));
 if(count===1)await redisCommand(['EXPIRE',key,String(ttl)]);
 return count<=max;
}
export async function sendVerificationEmail(email:string,code:string){
 const apiKey=process.env.RESEND_API_KEY,from=process.env.RESEND_FROM_EMAIL;
 if(!apiKey||!from)throw new Error('خدمة البريد الإلكتروني غير مهيأة.');
 const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[email],subject:'تأكيد بريدك الإلكتروني | عرفات الكاملي',text:`رمز تأكيد بريدك الإلكتروني هو: ${code}\n\nصلاحية الرمز 10 دقائق. لا تشارك هذا الرمز مع أي شخص. إذا لم تطلبه فتجاهل هذه الرسالة.`}),cache:'no-store'});
 if(!response.ok)throw new Error('تعذر إرسال رمز التحقق إلى هذا البريد.');
}
export function createCode(){return String(randomInt(100000,1000000));}
export function createVerificationToken(){return randomBytes(32).toString('hex');}
