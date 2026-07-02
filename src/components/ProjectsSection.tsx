'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { PORTFOLIO_DATA } from '@/data/portfolio';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectCard = ({ project, index, total, containerRef }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative md:sticky md:top-32 h-auto md:h-[85vh] w-full mb-12 md:mb-0"
      style={{ top: !isMobile ? `${96 + index * 28}px` : undefined }}
    >
      <motion.article
        style={!isMobile ? { scale } : {}}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[32px] sm:rounded-[40px] md:rounded-[50px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-4 sm:p-6 md:p-8"
      >
        {/* Top row: number + meta + button */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
            <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Bottom row: two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
          {/* Left column - 2 stacked */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0">
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/5"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="h-full w-full object-cover opacity-60 mix-blend-overlay"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/5"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="h-full w-full object-cover opacity-60 mix-blend-overlay"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          {/* Right column - 1 tall */}
          <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0 bg-white/5">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="h-full w-full object-cover opacity-60 mix-blend-overlay"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-transparent px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={80}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PORTFOLIO_DATA.projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PORTFOLIO_DATA.projects.length}
            containerRef={containerRef}
          />
        ))}
      </div>
      
      <div className="mt-20 flex justify-center pb-20">
        <a
          href="/projects"
          target="_blank"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#D7E2EA] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20"
        >
          <span className="relative z-10 flex items-center gap-3">
            Show All Projects
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
