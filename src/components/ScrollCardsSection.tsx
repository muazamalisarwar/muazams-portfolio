'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─────────── Card data types ─────────── */
interface CardDef {
  label: string;
  num: string;
  Content: React.FC;
}

/* ─────────────── Card content components ─────────────── */

function WhoIAmCard() {
  const tags = ['Full Stack', 'Android Dev', 'AI / ML', 'Computer Vision', 'Problem Solver'];
  return (
    <>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/70 mb-3">
        About · Profile
      </p>
      <div className="flex items-start justify-between">
        <h2
          className="font-black uppercase leading-none tracking-tight text-white mb-6"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 88px)',
            textShadow: '0 0 80px rgba(251,191,36,0.2)',
          }}
        >
          Who I Am
        </h2>
        <span className="text-amber-400/20 font-black leading-none select-none hidden sm:block"
          style={{ fontSize: 'clamp(3rem, 6vw, 72px)' }}>01</span>
      </div>
      <p
        className="max-w-2xl leading-relaxed text-white/65 mb-8"
        style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1.1rem)' }}
      >
        Results-driven Computer Science student{' '}
        <span className="text-amber-400 font-semibold">(CGPA 3.74 / 4.0)</span> at University of
        Education Lahore with hands-on experience in full-stack development, Android applications,
        and AI/ML-based computer vision systems. Proficient in{' '}
        <span className="text-amber-400 font-semibold">Python, Java, C++, and JavaScript</span>{' '}
        with practical knowledge of RESTful APIs, OOP design patterns, Firebase, and SQL/NoSQL
        databases.
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-300/80 hover:border-amber-400/50 hover:text-amber-300 transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

function TechnicalSkillsCard() {
  const groups = [
    { title: 'Languages',    items: ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'] },
    { title: 'Frameworks',   items: ['React.js', 'Node.js', 'Spring Boot', 'Angular'] },
    { title: 'Databases',    items: ['MySQL', 'Oracle 21c', 'MongoDB', 'Firebase'] },
    { title: 'Cloud & DevOps', items: ['Git / GitHub', 'Postman', 'REST APIs', 'Linux'] },
    { title: 'AI / ML',      items: ['OpenCV', 'MediaPipe', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'] },
    { title: 'Mobile',       items: ['Android Studio', 'XML Layouts', 'Firebase Auth'] },
  ];
  return (
    <>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/70 mb-3">
        About · Arsenal
      </p>
      <div className="flex items-start justify-between mb-7">
        <h2
          className="font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 76px)', textShadow: '0 0 80px rgba(251,191,36,0.2)' }}
        >
          Technical Skills
        </h2>
        <span className="text-amber-400/20 font-black leading-none select-none hidden sm:block"
          style={{ fontSize: 'clamp(3rem, 6vw, 72px)' }}>02</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-amber-400/55 font-bold mb-2.5">
              {g.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] sm:text-xs text-white/65 hover:border-amber-400/30 hover:text-white/90 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function EducationCard() {
  const entries = [
    { date: '08/2025 – Current', degree: 'BS Computer Science', school: 'University Of Education — Lahore', gpa: 'CGPA 3.65' },
    { date: '04/2023 – 07/2025', degree: 'Computer Science (ADP)', school: 'Minhaj University Lahore — Lahore', gpa: 'CGPA 3.74' },
    { date: '01/2021 – 12/2022', degree: 'ICS With Physics', school: 'Lahore College Boys — Lahore', gpa: '' },
  ];
  return (
    <>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/70 mb-3">
        About · Journey
      </p>
      <div className="flex items-start justify-between mb-7">
        <h2
          className="font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 88px)', textShadow: '0 0 80px rgba(251,191,36,0.2)' }}
        >
          Education
        </h2>
        <span className="text-amber-400/20 font-black leading-none select-none hidden sm:block"
          style={{ fontSize: 'clamp(3rem, 6vw, 72px)' }}>03</span>
      </div>
      <div className="flex flex-col gap-6">
        {entries.map((e, i) => (
          <div key={i} className="flex gap-5 sm:gap-8 items-start group">
            <div className="shrink-0 w-28 sm:w-36">
              <span className="text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                {e.date}
              </span>
            </div>
            <div className="w-px self-stretch bg-white/15 group-hover:bg-amber-400/50 transition-colors duration-300 shrink-0" />
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base uppercase tracking-wide">
                {e.degree}
              </h4>
              <p className="text-white/45 text-xs sm:text-sm mt-0.5">{e.school}</p>
              {e.gpa && <p className="text-amber-400/80 text-xs font-bold mt-1">{e.gpa}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ByTheNumbersCard() {
  const stats = [
    { value: '3+',  label: 'Years\nExperience' },
    { value: '30%', label: 'Faster\nDeployments' },
    { value: '15%', label: 'Cost\nReduction' },
    { value: '20%', label: 'Faster\nIssue Fixes' },
  ];
  return (
    <>
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/70 mb-3">
        About · Impact
      </p>
      <div className="flex items-start justify-between mb-9">
        <h2
          className="font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 78px)', textShadow: '0 0 80px rgba(251,191,36,0.2)' }}
        >
          By The Numbers
        </h2>
        <span className="text-amber-400/20 font-black leading-none select-none hidden sm:block"
          style={{ fontSize: 'clamp(3rem, 6vw, 72px)' }}>04</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <span
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 68px)', textShadow: '0 0 40px rgba(251,191,36,0.3)' }}
            >
              {s.value}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/40 whitespace-pre-line">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ──────── Cards array ──────── */
const CARDS: CardDef[] = [
  { label: 'About · Profile', num: '01', Content: WhoIAmCard },
  { label: 'About · Arsenal', num: '02', Content: TechnicalSkillsCard },
  { label: 'About · Journey', num: '03', Content: EducationCard },
  { label: 'About · Impact',  num: '04', Content: ByTheNumbersCard },
];

/* ──────── Single animated card ──────── */
interface AnimatedCardProps {
  card: CardDef;
  index: number;
  total: number;
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function AnimatedCard({ card, index, total, containerProgress }: AnimatedCardProps) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end   = start + segmentSize;

  // This card is "active" from its start to the next card's start
  // Scale it down as the next card comes in
  const nextStart = (index + 1) * segmentSize;

  // Clamp helper — WAAPI requires all offsets stay within [0, 1]
  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  const scale = useTransform(
    containerProgress,
    index < total - 1
      ? [clamp(nextStart - 0.05), clamp(nextStart + 0.05)]
      : [0, 1],
    index < total - 1 ? [1, 0.94] : [1, 1]
  );

  const opacity = useTransform(
    containerProgress,
    index < total - 1
      ? [clamp(nextStart - 0.02), clamp(nextStart + 0.08)]
      : [0, 1],
    index < total - 1 ? [1, 0.5] : [1, 1]
  );

  // Slide card UP into view from below
  const y = useTransform(
    containerProgress,
    [clamp(start - 0.05), clamp(start + 0.03)],
    [60, 0]
  );

  // Card is visible starting from its segment
  const cardOpacityIn = useTransform(
    containerProgress,
    [clamp(start - 0.05), clamp(start + 0.03)],
    [0, 1]
  );

  // Combine both opacity effects
  const combinedOpacity = useTransform(
    [cardOpacityIn, opacity] as any,
    ([inVal, outVal]: number[]) => Math.min(inVal, outVal)
  );

  // Vertical offset so cards "stack" — each subsequent card appears slightly lower
  const STACK_OFFSET = 16; // px per level
  const topOffset    = STACK_OFFSET * index;

  return (
    <motion.div
      className="absolute inset-x-0"
      style={{
        top: topOffset,
        scale,
        opacity: combinedOpacity,
        y,
        transformOrigin: 'top center',
        zIndex: 10 + index,
      }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Card glass surface */}
        <div className="relative rounded-[18px] sm:rounded-[24px] overflow-hidden scroll-card-glass border border-white/[0.08]">
          {/* Top amber shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          {/* Bottom subtle line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          {/* Ambient inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 p-7 sm:p-10 md:p-12">
            <card.Content />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────── Main Section ──────────── */
export default function ScrollCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Give each card ~100vh of scroll space, plus extra at the end for the last card to dwell
  const scrollHeight = `${CARDS.length * 100 + 50}vh`;

  return (
    <section
      id="scroll-cards"
      ref={containerRef}
      style={{ height: scrollHeight }}
      className="relative w-full"
    >
      {/* Sticky frame that fills the viewport for the whole scroll distance */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 55%, rgba(251,191,36,0.045) 0%, transparent 68%)',
          }}
        />

        {/* Cards stage — centered vertically */}
        <div className="relative h-full flex items-center">
          <div className="relative w-full" style={{ height: '520px' }}>
            {CARDS.map((card, i) => (
              <AnimatedCard
                key={card.num}
                card={card}
                index={i}
                total={CARDS.length}
                containerProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <ProgressDots total={CARDS.length} scrollYProgress={scrollYProgress} />
      </div>

      <style>{`
        .scroll-card-glass {
          background: rgba(12, 11, 10, 0.78);
          backdrop-filter: blur(32px) saturate(1.5);
          -webkit-backdrop-filter: blur(32px) saturate(1.5);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.5),
            0 16px 48px rgba(0,0,0,0.65),
            0 0 0 1px rgba(255,255,255,0.035) inset;
        }
      `}</style>
    </section>
  );
}

/* ──────── Single progress dot ──────── */
interface ProgressDotProps {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function ProgressDot({ index, total, scrollYProgress }: ProgressDotProps) {
  const dotStart = index / total;
  const dotEnd   = (index + 1) / total;

  // Clamp to [0, 1] — WAAPI requires offsets to stay in this range
  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  // Deduplicate after clamping so the array stays strictly non-decreasing
  const rawIn  = clamp(dotStart - 0.01);
  const midIn  = clamp(dotStart + 0.05);
  const midOut = clamp(dotEnd   - 0.05);
  const rawOut = clamp(dotEnd   + 0.01);

  // Build unique sorted offsets (handles edge cases where clamping collapses values)
  const offsets = [...new Set([rawIn, midIn, midOut, rawOut])].sort((a, b) => a - b);
  // Map to matching output values by picking the closest from our 4-stop scale
  const mapOutput = (o: number, vals: [number, number, number, number]) => {
    const stops = [rawIn, midIn, midOut, rawOut];
    const idx = stops.reduce((best, s, i) =>
      Math.abs(s - o) < Math.abs(stops[best] - o) ? i : best, 0);
    return vals[idx];
  };

  const opacityVals = offsets.map(o => mapOutput(o, [0.2, 1, 1, 0.2]));
  const scaleVals   = offsets.map(o => mapOutput(o, [0.7, 1.4, 1.4, 0.7]));

  const opacity = useTransform(scrollYProgress, offsets, opacityVals);
  const scale   = useTransform(scrollYProgress, offsets, scaleVals);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-1.5 h-1.5 rounded-full bg-amber-400"
    />
  );
}

/* ──────── Progress indicator dots ──────── */
function ProgressDots({
  total,
  scrollYProgress,
}: {
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  return (
    <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50">
      {Array.from({ length: total }, (_, i) => (
        <ProgressDot
          key={i}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
