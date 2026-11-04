import type {Metadata} from 'next';
import AboutTabs from './AboutTabs';
export const metadata:Metadata={title:'نبذة عني',description:'الملف الشخصي لعرفات الكاملي: المسار الأكاديمي، مجالات الاهتمام، المشاريع، المسؤولية العلمية والرؤية المهنية.',alternates:{canonical:'/about'},openGraph:{images:[{url:'/images/arfat-alkamali.jpg',width:640,height:640,alt:'عرفات الكاملي'}]}};
export default function AboutPage(){return <AboutTabs/>}
