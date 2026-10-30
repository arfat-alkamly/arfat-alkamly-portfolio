import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ARFAT ALKAMALI | Cybersecurity & Technology', description: 'Professional portfolio of Arfat Abdullah Hussein Al-Kamly.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
