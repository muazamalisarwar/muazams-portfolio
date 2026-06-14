'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'Front End Development',
    description:
      'Building responsive, performant web apps with modern frameworks like React and Next.js, focusing on pixel-perfect, accessible, and engaging user interfaces.',
  },
  {
    number: '02',
    title: 'Database Development',
    description:
      'Designing, optimizing, and managing scalable database architectures using SQL and NoSQL solutions for secure and efficient data storage and retrieval.',
  },
  {
    number: '03',
    title: 'AI/ML Development',
    description:
      'Integrating intelligent systems and machine learning models to build data-driven applications, utilizing modern AI tools and large language model APIs.',
  },
  {
    number: '04',
    title: 'Full Stack Development',
    description:
      'Bridging the gap between intuitive user interfaces and robust server-side logic to deliver complete, end-to-end applications seamlessly.',
  },
  {
    number: '05',
    title: 'Software Development',
    description:
      'Engineering custom software solutions tailored to business needs with clean, maintainable code, robust architecture, and modern best practices.',
  },
  {
    number: '06',
    title: 'Back End Development',
    description:
      'Developing secure and scalable server-side applications, APIs, and microservices to power dynamic digital platforms efficiently.',
  },
];

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
  total: number;
}

const ServiceCard = ({ service, index, total }: ServiceCardProps) => {
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
      className="sticky top-24 md:top-32 w-full h-[50vh] sm:h-[60vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto max-w-5xl w-full flex flex-row items-start gap-6 sm:gap-10 md:gap-14 p-8 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        <div
          className="shrink-0 font-black text-[#D7E2EA]/80 leading-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
        >
          {service.number}
        </div>

        <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
          <h3
            className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
          >
            {service.title}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
          </h3>
          <p
            className="font-light leading-relaxed text-[#D7E2EA]/70 max-w-2xl"
            style={{
              fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)'
            }}
          >
            {service.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
};

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={80}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-5xl relative pb-20">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            index={i}
            total={SERVICES.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
