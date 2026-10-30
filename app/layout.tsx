import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ARFAT ALKAMALI | Cybersecurity & Technology',
    template: '%s | ARFAT ALKAMALI',
  },
  description: 'The professional portfolio of Arfat Abdullah Hussein Al-Kamly — cybersecurity student, technology builder, and researcher.',
  applicationName: 'ARFAT ALKAMALI',
  keywords: ['Arfat Alkamali','Cybersecurity','Networks','Software Development','Security Research','Portfolio'],
  authors: [{ name: 'Arfat Abdullah Hussein Al-Kamly' }],
  openGraph: {
    type: 'website',
    title: 'ARFAT ALKAMALI | Building Systems. Securing the Future.',
    description: 'Cybersecurity, networks, software development, and technical research.',
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
  return <html lang="en"><body>{children}</body></html>;
}
