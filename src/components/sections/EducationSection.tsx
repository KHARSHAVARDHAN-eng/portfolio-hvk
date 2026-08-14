import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 max-w-4xl mx-auto bg-[#0d0818] arcade-purple-grid">
      {/* Section Header */}
      <div className="mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
          [ ACADEMIC BACKGROUND ]
        </div>
        <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
          EDUCATION & ACADEMIC FOCUS
        </h2>
      </div>

      <div className="arcade-card-cream p-6 sm:p-8 border-3 border-black shadow-[8px_8px_0px_#ff2a85]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <span className="bg-[#ff2a85] text-white font-silkscreen font-bold text-[10px] px-2.5 py-0.5 border border-black">
            B.TECH DEGREE
          </span>
          <span className="font-silkscreen text-xs text-[#120a21] font-bold bg-[#ffcc00] px-3 py-1 border border-black">
            {personalInfo.education.period}
          </span>
        </div>

        <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#120a21] mb-1">
          {personalInfo.education.degree}
        </h3>

        <div className="flex items-center gap-2 font-mono-tech text-sm text-[#ff2a85] font-bold mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>{personalInfo.education.institution}</span>
        </div>

        <div className="bg-white border-2 border-black p-4 mb-6">
          <div className="font-silkscreen text-xs text-[#ff2a85] mb-2 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4" />
            SPECIALIZATION & ACADEMIC COURSEWORK:
          </div>
          <p className="font-mono-tech text-xs sm:text-sm text-slate-800 leading-relaxed">
            {personalInfo.education.details}
          </p>
        </div>

        <div>
          <h4 className="font-silkscreen text-xs text-[#120a21] mb-3 flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-[#ff2a85]" />
            ACADEMIC HIGHLIGHTS:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-3 text-xs font-mono-tech text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff2a85] flex-shrink-0" />
              <span>Specialization in AI & Deep Learning</span>
            </div>
            <div className="bg-white border-2 border-black p-3 text-xs font-mono-tech text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff2a85] flex-shrink-0" />
              <span>Led Open-Source GraphRAG Workshops</span>
            </div>
            <div className="bg-white border-2 border-black p-3 text-xs font-mono-tech text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff2a85] flex-shrink-0" />
              <span>Data Structures & Algorithms Proficiency</span>
            </div>
            <div className="bg-white border-2 border-black p-3 text-xs font-mono-tech text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff2a85] flex-shrink-0" />
              <span>Undergraduate Computer Vision Research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
