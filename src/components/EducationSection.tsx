'use client';
import FadeIn from './FadeIn';

const EDUCATION = [
  {
    degree: 'BS Computer Science (7th Semester)',
    school: 'University Of Education',
    duration: '08/2025 – Current',
    location: 'Lahore',
    cgpa: '3.65',
    description: 'Studying Bachelor of Science in Computer Science with a strong foundation in programming, software development, and problem-solving. Gained practical experience through academic projects and hands-on laboratory work.'
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
    degree: 'ICS With Physics',
    school: 'Lahore College Boys',
    duration: '01/2021 – 12/2022',
    location: 'Lahore',
    cgpa: '',
    description: ''
  }
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={80}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        {EDUCATION.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.15} y={100}>
            <div
              className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 md:gap-14 p-8 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
            >
              <div className="md:w-1/3 shrink-0 flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-[#D7E2EA] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.6rem)' }}
                >
                  {edu.school}
                </h3>
                <p className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  {edu.duration}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-light mt-1">
                  {edu.location}
                </p>
              </div>

              <div className="md:w-2/3 group flex flex-col gap-3 sm:gap-4 pt-2 md:pt-0">
                <h4
                  className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
                >
                  {edu.degree}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
                </h4>
                
                {edu.cgpa && (
                  <p className="font-medium text-[#D7E2EA]/90" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                    CGPA: <span className="font-bold text-[#D7E2EA]">{edu.cgpa}</span>
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
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
