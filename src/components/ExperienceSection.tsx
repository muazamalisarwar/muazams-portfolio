'use client';
import FadeIn from './FadeIn';

const EXPERIENCES = [
  {
    company: 'Askari Colony Management (ACM)',
    role: 'Software Development Intern — ERP',
    duration: '09/2024 – 11/2024',
    location: 'Lahore (Askari 10)',
    points: [
      'Assisted in deploying an ERP complaint management system across 10+ residential offices, reducing manual request routing.',
      'Improved UI components and form workflows, contributing to an estimated 20% reduction in complaint handling response time.',
      'Collaborated with stakeholders to gather business requirements and validate ERP module integration.',
      'Executed debugging, system testing, and issue resolution cycles; resolved 15+ functional defects prior to go-live.',
      'Supported process automation initiatives to digitalize maintenance request handling, reducing paper-based coordination.'
    ]
  },
  {
    company: 'Minhaj University Lahore',
    role: 'CMS Development Intern — Backend',
    duration: '03/2025 – 05/2025',
    location: 'Lahore',
    points: [
      'Developed and automated 3+ backend modules for the university CMS, reducing manual workload by ~30%.',
      'Designed and implemented SQL-based database operations, improving data retrieval speed.',
      'Applied OOP principles and REST API design patterns to improve maintainability.',
      'Collaborated in a cross-functional Agile team to test, debug, and deploy new features.',
      'Performed system performance analysis and code optimization, resolving bottlenecks.'
    ]
  }
];

const ExperienceSection = () => {
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

      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.15} y={100}>
            <div
              className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-14 p-8 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
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
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
