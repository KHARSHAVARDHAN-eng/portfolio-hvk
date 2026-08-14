import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { GraduationCap, ArrowLeft, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const EducationStage: React.FC = () => {
  const { setStage } = useArcade();

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-4xl mx-auto bg-[#0d0818] arcade-purple-grid">
      {/* Stage Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div>
          <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
            [ STAGE 05: ACADEMIC PROGRESSION ]
          </div>
          <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
            LEVEL PROGRESSION.
          </h2>
        </div>
        <button
          onClick={() => setStage('MENU')}
          onMouseEnter={() => sound.playHover()}
          className="arcade-btn arcade-btn-outline px-3.5 py-1.5 text-xs flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO MENU</span>
        </button>
      </div>

      <div className="space-y-8 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#ff2a85]">
        <div className="relative pl-10 sm:pl-16">
          <div className="absolute left-1.5 sm:left-5 top-0 w-6 h-6 rounded-none bg-[#ffcc00] border-3 border-black flex items-center justify-center shadow-md">
            <div className="w-2 h-2 rounded-none bg-[#ff2a85] animate-ping"></div>
          </div>

          <div className="arcade-card-cream p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_#ff2a85]">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="bg-[#ff2a85] text-white font-silkscreen font-bold text-[10px] px-2.5 py-0.5 border border-black">
                CURRENT CHECKPOINT
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
                SPECIALIZATION & ACADEMIC FOCUS:
              </div>
              <p className="font-mono-tech text-xs sm:text-sm text-slate-800 leading-relaxed">
                {personalInfo.education.details}
              </p>
            </div>

            <div>
              <h4 className="font-silkscreen text-xs text-[#120a21] mb-3 flex items-center gap-2 font-bold">
                <Award className="w-4 h-4 text-[#ff2a85]" />
                ACADEMIC MILESTONES:
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
        </div>
      </div>
    </div>
  );
};
