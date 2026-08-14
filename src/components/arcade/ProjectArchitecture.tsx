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
    <div className="arcade-panel p-4 sm:p-6 rounded-lg border-2 border-cyan-500/40 my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
          <h4 className="font-chakra font-bold text-lg text-cyan-300 uppercase tracking-wider">
            INTERACTIVE SYSTEM ARCHITECTURE PIPELINE
          </h4>
        </div>
        <span className="font-silkscreen text-[10px] text-cyan-400 hidden sm:inline">
          [{projectName}]
        </span>
      </div>

      <p className="font-mono-tech text-xs text-slate-400 mb-5">
        Click any pipeline node to inspect deep execution details, underlying algorithms, and technology stack.
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
                className={`flex-shrink-0 p-3 rounded border-2 transition-all text-left min-w-[140px] max-w-[170px] group ${
                  isActive 
                    ? 'border-amber-400 bg-amber-950/60 shadow-lg scale-105' 
                    : 'border-slate-800 bg-slate-900/80 hover:border-cyan-500/40 hover:bg-cyan-950/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-silkscreen text-[10px] ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                    STEP 0{st.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>}
                </div>
                <div className={`font-chakra font-bold text-xs line-clamp-2 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-cyan-300'}`}>
                  {st.name}
                </div>
              </button>

              {idx < steps.length - 1 && (
                <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-700'}`} />
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
                className={`p-3 rounded border text-left flex items-center justify-between ${
                  isActive 
                    ? 'border-amber-400 bg-amber-950/60 text-white' 
                    : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-silkscreen text-[10px] text-amber-400">0{st.step}.</span>
                  <span className="font-chakra font-bold text-xs">{st.name}</span>
                </div>
                <span className="font-mono-tech text-[10px] text-slate-400">INSPECT →</span>
              </button>
              {idx < steps.length - 1 && (
                <ArrowDown className="w-3.5 h-3.5 text-slate-700 mx-auto" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="bg-slate-950/90 border border-amber-500/30 p-4 sm:p-5 rounded-lg relative">
        <div className="flex items-center justify-between mb-2">
          <span className="font-silkscreen text-xs text-amber-400">
            NODE 0{currentStep.step}: {currentStep.name}
          </span>
          <span className="font-mono-tech text-[11px] text-slate-400">
            {currentStep.subtitle}
          </span>
        </div>

        <p className="font-mono-tech text-xs text-slate-200 mb-4 leading-relaxed">
          {currentStep.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-4">
          <span className="font-silkscreen text-[10px] text-slate-400 block mb-2">
            TECHNOLOGY ENGINES:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {currentStep.tech.map((t, i) => (
              <span
                key={i}
                className="bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-0.5 rounded text-[11px] font-mono-tech text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Deep Details */}
        {currentStep.details && currentStep.details.length > 0 && (
          <div className="border-t border-slate-800 pt-3">
            <span className="font-silkscreen text-[10px] text-amber-400/80 block mb-2">
              EXECUTION PARAMETERS:
            </span>
            <ul className="space-y-1">
              {currentStep.details.map((d, i) => (
                <li key={i} className="font-mono-tech text-[11px] text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
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
