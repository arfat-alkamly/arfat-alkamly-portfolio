import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://arfat-phi.vercel.app';

const sameAs = [
  'https://github.com/arfat-alkamly',
  'https://www.linkedin.com/in/arfat-alkamly-399676409',
  'https://www.facebook.com/rfatalkamly',
  'https://www.instagram.com/dark.hacker_x',
  'https://www.tiktok.com/@dark.hacker_x',
];

const credentials = [
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Cisco Endpoint Security',
    credentialCategory: 'Professional certificate',
    recognizedBy: { '@type': 'Organization', name: 'Cisco' },
    url: 'https://www.credly.com/badges/f0520c01-63aa-4440-9df4-69c7303d8762/public_url',
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'IT Customer Support Basics',
    credentialCategory: 'Professional certificate',
    recognizedBy: { '@type': 'Organization', name: 'Cisco' },
    url: 'https://www.credly.com/badges/dd68b74c-65f9-468f-9a51-3bb78adad239/public_url',
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Cisco Learn-A-Thon 2026',
    credentialCategory: 'Professional development credential',
    recognizedBy: { '@type': 'Organization', name: 'Cisco' },
    url: 'https://www.credly.com/badges/a370a36f-7ce1-4531-b44b-b909e56ee52d/public_url',
  },
  {
    '@type': 'EducationalOccupationalCredential',
    name: 'Introduction to Artificial Intelligence',
    credentialCategory: 'Course completion credential',
    recognizedBy: { '@type': 'Organization', name: 'Cisco' },
    url: 'https://lnkd.in/dRCcTwf5',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': siteUrl + '/#person',
      name: 'Arfat Abdullah Hussein Al-Kamly',
      alternateName: ['Arfat Alkamali', 'عرفات عبدالله حسين الكاملي', 'عرفات الكاملي'],
      url: siteUrl,
      jobTitle: 'Cybersecurity Student',
      description: 'Cybersecurity student focused on defensive security, networks, software development and applied research.',
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Al-Manar University College',
      },
      sameAs,
      hasCredential: credentials,
    },
    {
      '@type': 'ProfilePage',
      '@id': siteUrl + '/#profile',
      url: siteUrl,
      name: 'Arfat Alkamali | Cybersecurity Portfolio',
      mainEntity: { '@id': siteUrl + '/#person' },
      inLanguage: ['ar', 'en'],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title: {
    default: 'ARFAT ALKAMALI | Cybersecurity & Technology',
    template: '%s | ARFAT ALKAMALI',
  },
  description: 'The professional portfolio of Arfat Abdullah Hussein Al-Kamly — cybersecurity student, technology builder, and researcher.',
  applicationName: 'ARFAT ALKAMALI',
  keywords: ['Arfat Alkamali','Cybersecurity','Networks','Software Development','Security Research','Portfolio'],
  authors: [{ name: 'Arfat Abdullah Hussein Al-Kamly', url: siteUrl }],
  openGraph: {
    type: 'profile',
    title: 'ARFAT ALKAMALI | Building Systems. Securing the Future.',
    description: 'Cybersecurity, networks, software development, and technical research.',
    url: siteUrl,
    siteName: 'ARFAT ALKAMALI',
    locale: 'en_US',
    alternateLocale: ['ar_YE'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARFAT ALKAMALI | Cybersecurity & Technology',
    description: 'Building Systems. Securing the Future.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070b14',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')}} /></head><body>{children}</body></html>;
}
