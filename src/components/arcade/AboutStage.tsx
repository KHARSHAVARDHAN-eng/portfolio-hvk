import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { User, ShieldCheck, GraduationCap, MapPin, Sparkles, ArrowLeft } from 'lucide-react';

export const AboutStage: React.FC = () => {
  const { setStage } = useArcade();

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto bg-[#0d0818] arcade-purple-grid">
      {/* Stage Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div>
          <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
            [ STAGE 01: PLAYER PROFILE ]
          </div>
          <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
            ABOUT THE DEVELOPER
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Player Spec Sheet */}
        <div className="lg:col-span-1 arcade-card-cream p-6 border-3 border-black shadow-[6px_6px_0px_#ff2a85] flex flex-col justify-between">
          <div>
            <div className="w-24 h-24 mx-auto mb-4 bg-[#1e1333] border-3 border-black flex items-center justify-center relative overflow-hidden">
              <User className="w-12 h-12 text-[#ffcc00]" />
              <div className="absolute bottom-0 inset-x-0 bg-[#ff2a85] text-white font-silkscreen text-[9px] text-center py-0.5 font-bold">
                CSE 2027
              </div>
            </div>

            <h3 className="font-silkscreen text-xl font-bold text-center text-[#120a21] mb-1">
              {personalInfo.name}
            </h3>
            <p className="font-silkscreen text-xs text-center text-[#ff2a85] font-bold mb-4">
              @{personalInfo.handle}
            </p>

            <div className="space-y-3 font-mono-tech text-xs border-t-2 border-black pt-4">
              <div className="flex justify-between items-center bg-white p-2 border-2 border-black">
                <span className="text-slate-600 flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff2a85]" />
                  ROLE:
                </span>
                <span className="text-[#120a21] font-bold">CSE Student</span>
              </div>

              <div className="flex justify-between items-center bg-white p-2 border-2 border-black">
                <span className="text-slate-600 flex items-center gap-1.5 font-bold">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ff2a85]" />
                  COLLEGE:
                </span>
                <span className="text-[#120a21] font-bold">Alliance Univ</span>
              </div>

              <div className="flex justify-between items-center bg-white p-2 border-2 border-black">
                <span className="text-slate-600 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#ff2a85]" />
                  BASE:
                </span>
                <span className="text-[#120a21] font-bold">{personalInfo.location}</span>
              </div>

              <div className="flex justify-between items-center bg-white p-2 border-2 border-black">
                <span className="text-slate-600 font-bold">STATUS:</span>
                <span className="text-emerald-600 font-bold text-[10px] animate-pulse">AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-black text-center">
            <span className="font-silkscreen text-[10px] text-[#ff2a85] font-bold">
              AUTHENTIC STUDENT PROFILE
            </span>
          </div>
        </div>

        {/* Right Column: Bio & Focus Areas */}
        <div className="lg:col-span-2 space-y-6">
          <div className="arcade-card-dark p-6 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00]">
            <h3 className="font-silkscreen text-sm font-bold text-[#ffcc00] mb-3 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff2a85]" />
              DEVELOPER BIOGRAPHY
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-[#f8f6fc] leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <div className="arcade-card-dark p-6 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00]">
            <h3 className="font-silkscreen text-sm font-bold text-[#ffcc00] mb-4 uppercase">
              CORE TECHNICAL FOCUS AREAS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="bg-[#120a21] border-2 border-[#ff2a85] p-3 text-xs font-mono-tech text-[#f8f6fc] flex items-start gap-2"
                >
                  <span className="text-[#ffcc00] font-bold font-silkscreen">0{idx + 1}.</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="arcade-card-cream p-6 border-3 border-black shadow-[6px_6px_0px_#ff2a85] flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-silkscreen text-[10px] text-[#ff2a85] font-bold">DEGREE PROGRAM</div>
              <div className="font-silkscreen text-base font-bold text-[#120a21]">{personalInfo.education.degree}</div>
              <div className="font-mono-tech text-xs text-slate-700 font-bold">{personalInfo.education.institution} ({personalInfo.education.period})</div>
            </div>
            <button
              onClick={() => setStage('EDUCATION')}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-pink px-4 py-2 text-xs"
            >
              LEVEL PROGRESSION →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
