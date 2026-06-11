'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

interface CertificationCardProps {
  cert: typeof CERTIFICATIONS[0];
  index: number;
  total: number;
}

const CertificationCard = ({ cert, index, total }: CertificationCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 w-full h-[30vh] sm:h-[40vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto max-w-5xl w-full flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <div className="shrink-0 rounded-full border border-white/10 p-4 sm:p-5 bg-white/5 flex items-center justify-center">
          <Award
            className="text-[#D7E2EA]/90"
            size={36}
            strokeWidth={1.5}
          />
        </div>

        <div className="flex flex-col gap-2 text-center sm:text-left pt-2 sm:pt-4">
          <h3
            className="font-medium text-[#D7E2EA] leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
          >
            {cert.name}
          </h3>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
          >
            {cert.issuer}
          </span>
        </div>
      </motion.article>
    </div>
  );
};

const CertificationsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

      <div ref={containerRef} className="mx-auto max-w-5xl relative pb-20">
        {CERTIFICATIONS.map((cert, i) => (
          <CertificationCard
            key={cert.name}
            cert={cert}
            index={i}
            total={CERTIFICATIONS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
