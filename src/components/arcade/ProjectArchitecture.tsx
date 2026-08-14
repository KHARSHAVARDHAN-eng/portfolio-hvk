import React, { useState } from 'react';
import type { PipelineStep } from '../../types';
import { sound } from '../../utils/sound';
import { ChevronRight, Cpu, ArrowDown } from 'lucide-react';

interface ProjectArchitectureProps {
  steps: PipelineStep[];
  projectName: string;
}

export const ProjectArchitecture: React.FC<ProjectArchitectureProps> = ({ steps, projectName }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  if (!steps || steps.length === 0) return null;

  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="arcade-card-dark p-4 sm:p-6 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00] my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#ff2a85]">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#ffcc00]" />
          <h4 className="font-silkscreen font-bold text-xs sm:text-sm text-[#ffcc00] uppercase">
            SYSTEM ARCHITECTURE PIPELINE
          </h4>
        </div>
        <span className="font-silkscreen text-[10px] text-white hidden sm:inline">
          [{projectName}]
        </span>
      </div>

      <p className="font-mono-tech text-xs text-[#a89cb9] mb-5">
        Click any pipeline node to inspect execution details and tool parameters.
      </p>

      {/* Horizontal Pipeline Node Flow (Desktop & Tablet) */}
      <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin">
        {steps.map((st, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <React.Fragment key={st.step}>
              <button
                onClick={() => {
                  sound.playHover();
                  setActiveStepIndex(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex-shrink-0 p-3 text-left min-w-[140px] max-w-[170px] border-2 border-black transition-all ${
                  isActive 
                    ? 'bg-[#ff2a85] text-white shadow-[3px_3px_0px_#ffcc00]' 
                    : 'bg-[#120a21] text-[#f8f6fc] hover:bg-[#ff2a85]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-silkscreen text-[9px] ${isActive ? 'text-[#ffcc00]' : 'text-[#a89cb9]'}`}>
                    STEP 0{st.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-ping"></span>}
                </div>
                <div className="font-silkscreen text-[11px] line-clamp-2">
                  {st.name}
                </div>
              </button>

              {idx < steps.length - 1 && (
                <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#ff2a85]' : 'text-[#a89cb9]'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Vertical Pipeline Selector (Mobile) */}
      <div className="flex md:hidden flex-col gap-2 mb-6">
        {steps.map((st, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <React.Fragment key={st.step}>
              <button
                onClick={() => {
                  sound.playHover();
                  setActiveStepIndex(idx);
                }}
                className={`p-3 text-left border-2 border-black flex items-center justify-between ${
                  isActive 
                    ? 'bg-[#ff2a85] text-white font-bold' 
                    : 'bg-[#120a21] text-[#f8f6fc]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-silkscreen text-[10px] text-[#ffcc00]">0{st.step}.</span>
                  <span className="font-silkscreen text-xs">{st.name}</span>
                </div>
                <span className="font-silkscreen text-[10px]">INSPECT →</span>
              </button>
              {idx < steps.length - 1 && (
                <ArrowDown className="w-3.5 h-3.5 text-[#ff2a85] mx-auto" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="arcade-card-cream p-4 sm:p-5 border-3 border-black text-[#120a21]">
        <div className="flex items-center justify-between mb-2">
          <span className="font-silkscreen text-xs text-[#ff2a85] font-bold">
            NODE 0{currentStep.step}: {currentStep.name}
          </span>
          <span className="font-mono-tech text-[11px] text-slate-700 font-bold">
            {currentStep.subtitle}
          </span>
        </div>

        <p className="font-mono-tech text-xs text-[#120a21] mb-4 leading-relaxed">
          {currentStep.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-4">
          <span className="font-silkscreen text-[10px] text-slate-700 block mb-2 font-bold">
            TECHNOLOGY ENGINES:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {currentStep.tech.map((t, i) => (
              <span
                key={i}
                className="bg-[#120a21] text-white border border-black px-2 py-0.5 text-[10px] font-silkscreen"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Execution Details */}
        {currentStep.details && currentStep.details.length > 0 && (
          <div className="border-t-2 border-black pt-3">
            <span className="font-silkscreen text-[10px] text-[#ff2a85] block mb-2 font-bold">
              EXECUTION PARAMETERS:
            </span>
            <ul className="space-y-1">
              {currentStep.details.map((d, i) => (
                <li key={i} className="font-mono-tech text-[11px] text-slate-800 flex items-start gap-2">
                  <span className="text-[#ff2a85] font-bold">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
