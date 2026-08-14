import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto bg-[#140824] arcade-purple-bg">
      {/* Stage Header Matching STAGE 02 — PLAYER STATS in Screenshot */}
      <div className="font-silkscreen text-xs sm:text-sm text-[#ff2a85] font-bold uppercase tracking-wider mb-2">
        STAGE 02 — PLAYER STATS
      </div>

      <h2 className="font-silkscreen text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#ffffff] uppercase tracking-wide mb-8 leading-tight">
        REPLAYABLE CHARACTER, OPEN-WORLD BUILD.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Biography Paragraph */}
        <div className="lg:col-span-7 space-y-4">
          <p className="font-mono-tech text-xs sm:text-sm text-[#cbbad9] leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="font-mono-tech text-xs sm:text-sm text-[#cbbad9] leading-relaxed">
            Specializing in Artificial Intelligence & Machine Learning at Alliance University (Class of 2027). Focus areas include Enterprise GraphRAG systems, multi-modal deepfake anti-spoofing biometrics, and open-source infrastructure tooling.
          </p>
        </div>

        {/* Right Column: Skill Spec Meters (Matching FRONTEND MAX, GAMEDEV EXP, BACKEND OK in Screenshot) */}
        <div className="lg:col-span-5 space-y-3 font-silkscreen">
          {/* AI/ML Meter */}
          <div className="arcade-card-cream p-3 border-3 border-black shadow-[4px_4px_0px_#ff2a85]">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#120a21] mb-1.5">
              <span>AI/ML</span>
              <span>MAX</span>
            </div>
            <div className="w-full bg-[#120a21] h-3 border border-black p-0.5">
              <div className="bg-[#ff2a85] h-full w-[95%]"></div>
            </div>
          </div>

          {/* GraphRAG Meter */}
          <div className="arcade-card-cream p-3 border-3 border-black shadow-[4px_4px_0px_#ff2a85]">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#120a21] mb-1.5">
              <span>GRAPHRAG</span>
              <span>EXP</span>
            </div>
            <div className="w-full bg-[#120a21] h-3 border border-black p-0.5">
              <div className="bg-[#ff2a85] h-full w-[90%]"></div>
            </div>
          </div>

          {/* Backend Meter */}
          <div className="arcade-card-cream p-3 border-3 border-black shadow-[4px_4px_0px_#ff2a85]">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#120a21] mb-1.5">
              <span>BACKEND</span>
              <span>OK</span>
            </div>
            <div className="w-full bg-[#120a21] h-3 border border-black p-0.5">
              <div className="bg-[#ff2a85] h-full w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
