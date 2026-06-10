'use client';
import FadeIn from './FadeIn';
import { Award } from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'Python Essentials 1 & 2', issuer: 'FreeCodeCamp' },
  { name: 'Advance SQL Hard Certification', issuer: 'Skill Certify' },
  { name: 'Prompt Engineering for ChatGPT', issuer: 'Coursera' },
  { name: 'Web Development Fundamentals', issuer: 'IBM SkillsBuild' },
  { name: 'C++ Essentials 1 & 2', issuer: 'FreeCodeCamp' },
  { name: 'Introduction to Networks (CCNA 1)', issuer: 'Cisco Networking Academy' },
  { name: 'Software Development Lifecycle (SDLC)', issuer: 'Coursera' },
  { name: 'Pitman International & Global Training Centres-English', issuer: 'Year: 2024' },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={80}>
        <h2
          className="text-center font-black uppercase tracking-tight leading-none text-[#D7E2EA] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Certifications
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.15} y={100}>
            <div className="group relative flex h-full flex-col justify-between gap-6 sm:gap-8 rounded-[28px] sm:rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 sm:p-7 md:p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">
              <div className="flex items-start justify-between">
                <div className="rounded-full border border-white/10 p-3 sm:p-3.5 transition-colors duration-300 group-hover:border-white/30 bg-white/5">
                  <Award
                    className="text-[#D7E2EA]/70 group-hover:text-[#D7E2EA]"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span
                  className="font-medium text-[#D7E2EA] leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                >
                  {cert.name}
                </span>
                <span
                  className="font-light uppercase tracking-widest text-[#D7E2EA]/50 mt-1"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)' }}
                >
                  {cert.issuer}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
