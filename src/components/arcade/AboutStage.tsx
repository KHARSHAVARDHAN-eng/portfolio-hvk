import React from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { personalInfo } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { User, ShieldCheck, GraduationCap, MapPin, Sparkles, ArrowLeft } from 'lucide-react';

export const AboutStage: React.FC = () => {
  const { setStage } = useArcade();

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-5xl mx-auto">
      {/* Stage Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan-500/30">
        <div>
          <div className="inline-block bg-cyan-950/80 border border-cyan-500/40 px-3 py-1 rounded text-xs font-silkscreen text-cyan-300 mb-2">
            [ STAGE 01: PLAYER PROFILE ]
          </div>
          <h2 className="font-chakra text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-cyan">
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

      {/* Main Spec Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Player Card Spec Sheet */}
        <div className="lg:col-span-1 arcade-panel p-6 rounded-lg border-2 border-cyan-500/40 flex flex-col justify-between">
          <div>
            {/* Avatar Placeholder / Arcade Emblem */}
            <div className="w-24 h-24 mx-auto mb-4 bg-cyan-950/60 border-2 border-cyan-400 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
              <User className="w-12 h-12 text-cyan-300" />
              <div className="absolute bottom-0 inset-x-0 bg-cyan-500 text-black font-silkscreen text-[9px] text-center py-0.5 font-bold">
                CSE 2027
              </div>
            </div>

            <h3 className="font-chakra text-2xl font-bold text-center text-white mb-1 glow-cyan">
              {personalInfo.name}
            </h3>
            <p className="font-silkscreen text-[11px] text-center text-amber-400 mb-4">
              @{personalInfo.handle}
            </p>

            {/* Spec Attributes List */}
            <div className="space-y-3 font-mono-tech text-xs border-t border-cyan-500/20 pt-4">
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  ROLE:
                </span>
                <span className="text-cyan-300 font-bold">CSE Student</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  COLLEGE:
                </span>
                <span className="text-amber-300 font-bold">Alliance Univ</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  BASE:
                </span>
                <span className="text-emerald-300 font-bold">{personalInfo.location}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="text-slate-400">STATUS:</span>
                <span className="text-emerald-400 font-bold text-[10px] animate-pulse">AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-cyan-500/20 text-center">
            <span className="font-silkscreen text-[10px] text-cyan-400">
              AUTHENTIC STUDENT PROFILE • NO INFLATED TITLES
            </span>
          </div>
        </div>

        {/* Right Column: Bio & Core Focus */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Panel */}
          <div className="arcade-panel p-6 rounded-lg border-2 border-slate-800">
            <h3 className="font-chakra text-lg font-bold text-cyan-400 mb-3 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              DEVELOPER BIOGRAPHY
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Technical Focus Areas */}
          <div className="arcade-panel p-6 rounded-lg border-2 border-slate-800">
            <h3 className="font-chakra text-lg font-bold text-amber-400 mb-4 uppercase">
              CORE TECHNICAL INTERESTS & FOCUS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 p-3 rounded text-xs font-mono-tech text-slate-200 flex items-start gap-2 hover:border-amber-500/40 transition-colors"
                >
                  <span className="text-amber-400 font-bold">0{idx + 1}.</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Quick Summary */}
          <div className="arcade-panel p-6 rounded-lg border-2 border-slate-800 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-silkscreen text-[11px] text-slate-400">DEGREE PROGRAM</div>
              <div className="font-chakra text-lg font-bold text-white">{personalInfo.education.degree}</div>
              <div className="font-mono-tech text-xs text-amber-400">{personalInfo.education.institution} ({personalInfo.education.period})</div>
            </div>
            <button
              onClick={() => setStage('EDUCATION')}
              onMouseEnter={() => sound.playHover()}
              className="arcade-btn arcade-btn-amber px-4 py-2 text-xs"
            >
              VIEW EDUCATION MAP →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
