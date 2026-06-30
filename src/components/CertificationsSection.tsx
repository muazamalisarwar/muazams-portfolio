'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import { Award, Eye, X } from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'Fundamentals of Machine Learning', issuer: 'Saylor Academy', image: '/certificates/Fundamentals of Machine Learning.png' },
  { name: 'Building with Artificial Intelligence', issuer: 'Saylor Academy', image: '/certificates/Building with Artificial Intelligence.png' },
  { name: 'Elementary Data Structures', issuer: 'Saylor Academy', image: '/certificates/Elementary Data Structures By Saylor Academy.png' },
  { name: 'Advance SQL Hard Certification', issuer: 'Skill Certify', image: '/certificates/Advance Sql Devloper Certification.png' },
  { name: 'Agents and Workflows', issuer: 'OpenAI', image: '/certificates/Agents And WorkFlows-Open ai.png' },
  { name: 'Generative AI Introduction', issuer: 'Microsoft', image: '/certificates/Generative Ai Introduction.png' },
  { name: 'Summarize and simplify information with 365 Copilot', issuer: 'Microsoft', image: '/certificates/Summarize and simplify information with 365 Copilot.png' },
  { name: 'Python Essentials 1 & 2', issuer: 'FreeCodeCamp' },
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
  onView: (image: string) => void;
}

const CertificationCard = ({ cert, index, total, onView }: CertificationCardProps) => {
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
      className="sticky top-24 md:top-32 w-full h-[35vh] sm:h-[40vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto max-w-5xl w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-5 sm:gap-8 p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 w-full sm:w-auto text-center sm:text-left">
          <div className="shrink-0 rounded-full border border-white/10 p-4 sm:p-5 bg-white/5 flex items-center justify-center">
            <Award
              className="text-[#D7E2EA]/90"
              size={36}
              strokeWidth={1.5}
            />
          </div>

          <div className="flex flex-col gap-2 pt-2 sm:pt-4">
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
        </div>

        {cert.image && (
          <div className="shrink-0 self-center sm:self-auto pt-1 sm:pt-4 w-full sm:w-auto flex justify-center sm:justify-end">
             <button
                onClick={() => onView(cert.image as string)}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-[#D7E2EA] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Eye size={16} />
                  View Certificate
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
              </button>
          </div>
        )}
      </motion.article>
    </div>
  );
};

const CertificationsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

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
            onView={(image) => setSelectedCert(image)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-[24px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>
              <div className="w-full h-full overflow-auto flex items-center justify-center p-4 sm:p-8">
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;

