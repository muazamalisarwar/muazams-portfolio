'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '@/data/portfolio';

interface ExperienceCardProps {
  exp: typeof PORTFOLIO_DATA.experience[0];
  index: number;
  total: number;
}

const ExperienceCard = ({ exp, index, total }: ExperienceCardProps) => {
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
      className="sticky top-24 md:top-32 w-full h-[70vh] sm:h-[80vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto max-w-5xl w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-14 p-6 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <div className="md:w-1/3 shrink-0 flex flex-col gap-2">
          <h3
            className="font-medium uppercase text-[#D7E2EA] leading-tight"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}
          >
            {exp.company}
          </h3>
          <p className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
            {exp.duration}
          </p>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-light mt-1">
            {exp.location}
          </p>
        </div>

        <div className="md:w-2/3 group flex flex-col gap-4 sm:gap-5 pt-2 md:pt-0">
          <h4
            className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.4rem)' }}
          >
            {exp.role}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
          </h4>
          
          <ul className="flex flex-col gap-3">
            {exp.points.map((point, idx) => (
              <li
                key={idx}
                className="font-light leading-relaxed text-[#D7E2EA]/70 flex items-start gap-3"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
              >
                <span className="text-[#D7E2EA]/40 mt-1.5 text-xs">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={80}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-5xl relative pb-20">
        {PORTFOLIO_DATA.experience.map((exp, i) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            index={i}
            total={PORTFOLIO_DATA.experience.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
