import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import ParticleBackground from '@/components/ParticleBackground';

const kanit = Kanit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Muazam Ali | Portfolio',
  description: 'Full Stack Developer & AI/ML Enthusiast',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kanit.className} antialiased text-[#D7E2EA]`}>
        <ParticleBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
