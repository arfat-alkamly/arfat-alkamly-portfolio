import {NextResponse} from 'next/server';
import {getSession} from '@/lib/google-auth';
export async function GET(){const session=await getSession();return NextResponse.json({authenticated:!!session,user:session?{email:session.email,name:session.name}:null},{headers:{'Cache-Control':'no-store'}});}
export async function DELETE(){const response=NextResponse.json({ok:true});response.cookies.set('contact_session','',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:0});return response;}
