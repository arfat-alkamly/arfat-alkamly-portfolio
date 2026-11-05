import type { Metadata } from 'next';
import LabsExplorer from './LabsExplorer';

export const metadata: Metadata = {
  title: 'المعامل التطبيقية',
  alternates: { canonical: '/labs' },
  description: 'معامل الأمن السيبراني التطبيقية: اختبار أمن الويب، Active Directory، تحليل حركة الشبكة، أمن الشبكات اللاسلكية، وتحليل البرمجيات الخبيثة ضمن بيئات معزولة ومصرح بها.',
};

export default function LabsPage() {
  return <LabsExplorer />;
}
