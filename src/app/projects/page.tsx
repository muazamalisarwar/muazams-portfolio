'use client';

import { useState } from 'react';
import { Code2, ExternalLink, ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const ALL_PROJECTS = [
  { id: 1, title: 'Bank Management System', category: 'C/C++', lang: 'C++', color: '#61bafb', link: 'https://github.com/muazamalisarwar/Bank-Management' },
  { id: 2, title: 'CRM', category: 'Java', lang: 'JAVA', color: '#b072ff', link: 'https://github.com/muazamalisarwar/CRM' },
  { id: 3, title: 'Face Recognition System', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: 'https://github.com/muazamalisarwar/Face-Recognition' },
  { id: 4, title: 'Gender and Age Detection', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: 'https://github.com/muazamalisarwar/Gender-and-Age-Detection' },
  { id: 5, title: 'Groot Assistant', category: 'Java', lang: 'JAVA', color: '#b072ff', link: 'https://github.com/muazamalisarwar/groot' },
  { id: 6, title: 'House Price Prediction', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: 'https://github.com/muazamalisarwar/house-price-prediction' },
  { id: 7, title: 'Java Snake Game', category: 'Java', lang: 'JAVA', color: '#b072ff', link: 'https://github.com/muazamalisarwar/Java-Snake-Game' },
  { id: 8, title: 'Node.js Goof', category: 'JavaScript/TypeScript', lang: 'JS / TS', color: '#f7df1e', link: 'https://github.com/muazamalisarwar/nodejs-goof' },
  { id: 9, title: 'Qt Bitcoin Trader', category: 'C/C++', lang: 'C++', color: '#61bafb', link: 'https://github.com/muazamalisarwar/QtBitcoinTrader' },
  { id: 10, title: 'Taskcafe', category: 'JavaScript/TypeScript', lang: 'JS / TS', color: '#3178c6', link: 'https://github.com/muazamalisarwar/taskcafe' },
  { id: 11, title: 'Loom Video Conferencing App', category: 'Java', lang: 'JAVA', color: '#b072ff', link: '#' },
  { id: 12, title: 'Gesture Recognition System', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: '#' },
  { id: 13, title: 'Namaz Tracker Dashboard', category: 'HTML/CSS', lang: 'HTML/CSS', color: '#e34f26', link: '#' },
  { id: 14, title: 'Hospital Emergency Room Scheduling', category: 'C/C++', lang: 'C++', color: '#61bafb', link: '#' },
  { id: 15, title: 'ESP32-CAM Attendance System', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: '#' },
  { id: 16, title: 'Hardware Logic Simulator', category: 'C/C++', lang: 'C/C++', color: '#61bafb', link: '#' },
  { id: 17, title: 'GuessNumber Android App', category: 'Java', lang: 'JAVA', color: '#b072ff', link: '#' },
  { id: 18, title: 'Online Stock Brokerage System', category: 'Full Stack', lang: 'FULL STACK', color: '#42b883', link: '#' },
  { id: 19, title: 'University Portal Automation', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: '#' },
  { id: 20, title: 'Student Management System', category: 'Java', lang: 'JAVA', color: '#b072ff', link: '#' },
  { id: 21, title: 'Cisco Networking Labs', category: 'C/C++', lang: 'C/C++', color: '#61bafb', link: '#' },
  { id: 22, title: 'Interactive Network Security Toolkit', category: 'C/C++', lang: 'C++', color: '#61bafb', link: '#' },
  { id: 23, title: 'TradingView ICT Indicator', category: 'JavaScript/TypeScript', lang: 'JS / TS', color: '#f7df1e', link: '#' },
  { id: 24, title: 'Project Portfolio Website', category: 'HTML/CSS', lang: 'HTML/CSS', color: '#e34f26', link: '#' },
  { id: 25, title: 'Interactive Materials Tracker', category: 'HTML/CSS', lang: 'HTML/CSS', color: '#e34f26', link: '#' },
  { id: 26, title: 'Crypto by Muazam Community', category: 'HTML/CSS', lang: 'HTML/CSS', color: '#e34f26', link: '#' },
  { id: 27, title: 'Brightness Control Using Hand Gestures', category: 'Python', lang: 'PYTHON', color: '#ffda44', link: '#' },
];

const CATEGORIES = ['All', 'C/C++', 'Java', 'HTML/CSS', 'JavaScript/TypeScript', 'Full Stack', 'Python'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = ALL_PROJECTS.filter((p) => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-10 md:py-32">
        
        {/* Back Button */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors mb-16"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        {/* Header */}
        <FadeIn y={30}>
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
              ls ./projects
            </h1>
            <p className="text-[#D7E2EA]/60 text-lg md:text-xl font-light">
              <span className="text-[#00ff41]">#</span> {ALL_PROJECTS.length} repositories. Sorted by impact.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-12 md:mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-white text-black font-medium'
                    : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05} y={30}>
              <div className="group flex h-full flex-col justify-between rounded-[24px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:border-white/20">
                
                {/* Box Header */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border border-opacity-30"
                    style={{
                      color: project.color,
                      backgroundColor: `${project.color}15`, // adding 15 for 10% opacity hex
                      borderColor: project.color
                    }}
                  >
                    {project.lang}
                  </span>
                  
                  <div className="rounded-full bg-white/5 p-2 text-[#D7E2EA]/50 group-hover:text-[#D7E2EA] transition-colors">
                    <Code2 size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h4 className="text-xl md:text-2xl font-medium leading-tight text-white group-hover:text-[#D7E2EA] transition-colors">
                    {project.title}
                  </h4>
                </div>

                {/* Box Footer */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.link !== '#' ? project.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => project.link === '#' && e.preventDefault()}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors ${
                      project.link === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 hover:text-white text-[#D7E2EA]/80'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                    Source Code
                  </a>
                  <a
                    href={project.link !== '#' ? project.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => project.link === '#' && e.preventDefault()}
                    className={`flex items-center justify-center rounded-lg bg-white/5 p-2.5 transition-colors ${
                      project.link === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 text-[#D7E2EA]/80 hover:text-white'
                    }`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </main>
  );
}
