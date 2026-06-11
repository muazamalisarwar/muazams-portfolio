import type { Metadata } from 'next';
import './globals.css';
import ParticleBackground from '@/components/ParticleBackground';

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
      <body className="font-kanit antialiased text-[#D7E2EA]">
        <ParticleBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
