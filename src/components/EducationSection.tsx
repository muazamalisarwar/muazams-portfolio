'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from './FadeIn';

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    degree: 'ICS With Physics',
    school: 'Lahore College Boys',
    duration: '01/2021 – 12/2022',
    location: 'Lahore',
    cgpa: '',
    description: ''
  },
  {
    degree: 'COMPUTER SCIENCE (ADP)',
    school: 'Minhaj University Lahore',
    duration: '04/2023 – 07/2025',
    location: 'Lahore',
    cgpa: '3.74',
    description: ''
  },
  {
    degree: 'BS Computer Science (7th Semester)',
    school: 'University Of Education',
    duration: '08/2025 – Current',
    location: 'Lahore',
    cgpa: '3.65',
    description: 'Studying Bachelor of Science in Computer Science with a strong foundation in programming, software development, and problem-solving. Gained practical experience through academic projects and hands-on laboratory work.'
  }
];

const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Animate the central connecting line
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animate individual milestone nodes and content cards
    cardsRef.current.forEach((card, i) => {
      if (!card || !nodesRef.current[i]) return;

      const node = nodesRef.current[i];
      const isEven = i % 2 === 0;

      // Animate the content card (fade in and slide)
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isEven ? -50 : 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the node (glow effect) when the line reaches it
      gsap.to(node, {
        backgroundColor: '#b072ff',
        borderColor: '#61bafb',
        boxShadow: '0 0 20px 2px rgba(176, 114, 255, 0.6)',
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="education"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <FadeIn y={80}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-20 sm:mb-28 md:mb-36 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl relative pb-20">
        {/* Base Timeline Line (Muted) */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full" />
        
        {/* Active Timeline Line (Glowing) */}
        <div
          ref={lineRef}
          className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#61bafb] to-[#b072ff] -translate-x-1/2 origin-top scale-y-0 shadow-[0_0_15px_rgba(176,114,255,0.6)] rounded-full z-10"
        />

        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {EDUCATION.map((edu, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={edu.degree}
                className={`relative flex items-center md:justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node Dot */}
                <div
                  ref={(el) => { nodesRef.current[i] = el; }}
                  className="absolute left-[30px] md:left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-[#0c0c0c] border-[3px] border-white/20 rounded-full -translate-x-1/2 z-20 transition-colors duration-300"
                />

                {/* Empty Space for layout balancing on Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={`w-full md:w-1/2 pl-16 sm:pl-20 md:pl-0 ${
                    isEven ? 'md:pr-16 lg:pr-24 text-left md:text-right' : 'md:pl-16 lg:pl-24 text-left'
                  }`}
                >
                  <article className="group flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors duration-500">
                    <div className="flex flex-col gap-1">
                      <h3
                        className="font-medium uppercase text-[#D7E2EA] leading-tight"
                        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.6rem)' }}
                      >
                        {edu.school}
                      </h3>
                      <div className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <p className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                          {edu.duration}
                        </p>
                        <span className="hidden sm:inline text-[#D7E2EA]/30">•</span>
                        <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-light">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h4
                        className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
                        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
                      >
                        {edu.degree}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
                      </h4>
                      
                      {edu.cgpa && (
                        <p className="font-medium text-[#D7E2EA]/90" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                          CGPA: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#61bafb] to-[#b072ff]">{edu.cgpa}</span>
                        </p>
                      )}

                      {edu.description && (
                        <p
                          className="font-light leading-relaxed text-[#D7E2EA]/70 mt-2"
                          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)' }}
                        >
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
