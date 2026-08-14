import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { GraduationCap, ArrowLeft, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const EducationStage: React.FC = () => {
  const { setStage } = useArcade();

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-blue-500/30">
        <div>
          <div className="inline-block bg-blue-950/80 border border-blue-500/40 px-3 py-1 rounded text-xs font-silkscreen text-blue-300 mb-2">
            [ STAGE 05: ACADEMIC PROGRESSION ]
          </div>
          <h2 className="font-chakra text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-blue">
            EDUCATION & LEVELING
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

      {/* Progression Checkpoint Map */}
      <div className="space-y-8 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-500/30">
        {/* Main Checkpoint */}
        <div className="relative pl-10 sm:pl-16">
          {/* Node Icon */}
          <div className="absolute left-1.5 sm:left-5 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center shadow-lg">
            <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
          </div>

          <div className="arcade-panel p-6 sm:p-8 rounded-xl border-2 border-blue-500/40">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="bg-blue-400 text-black font-silkscreen font-bold text-[10px] px-2.5 py-0.5 rounded">
                CURRENT CHECKPOINT
              </span>
              <span className="font-mono-tech text-xs text-blue-300 font-bold bg-blue-950/60 px-3 py-1 rounded border border-blue-500/30">
                {personalInfo.education.period}
              </span>
            </div>

            <h3 className="font-chakra text-2xl sm:text-3xl font-bold text-white mb-1 glow-blue">
              {personalInfo.education.degree}
            </h3>

            <div className="flex items-center gap-2 font-mono-tech text-sm text-amber-400 font-bold mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>{personalInfo.education.institution}</span>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-lg mb-6">
              <div className="font-silkscreen text-xs text-slate-400 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                SPECIALIZATION & ACADEMIC FOCUS:
              </div>
              <p className="font-mono-tech text-xs sm:text-sm text-slate-200 leading-relaxed">
                {personalInfo.education.details}
              </p>
            </div>

            {/* Academic Highlights */}
            <div>
              <h4 className="font-silkscreen text-xs text-blue-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                ACADEMIC MILESTONES & ACHIEVEMENTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-xs font-mono-tech text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Specialization in AI & Deep Learning</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-xs font-mono-tech text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Led Open-Source GraphRAG Workshops</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-xs font-mono-tech text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Data Structures & Algorithms Proficiency</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-xs font-mono-tech text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
