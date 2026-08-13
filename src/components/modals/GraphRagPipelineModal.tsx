import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Layers, Database, Search, Filter, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import type { PipelineStep } from '../../types';

interface GraphRagPipelineModalProps {
  steps: PipelineStep[];
}

export const GraphRagPipelineModal: React.FC<GraphRagPipelineModalProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <FileText className="w-5 h-5" />;
      case 1: return <Layers className="w-5 h-5" />;
      case 2: return <Sparkles className="w-5 h-5" />;
      case 3: return <Database className="w-5 h-5" />;
      case 4: return <Search className="w-5 h-5" />;
      case 5: return <Filter className="w-5 h-5" />;
      case 6: return <Cpu className="w-5 h-5" />;
      case 7: return <CheckCircle2 className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const current = steps[activeStep] || steps[0];

  return (
    <div className="w-full bg-slate-950/80 rounded-2xl p-6 border border-cyan-500/30 my-8 shadow-[0_0_30px_rgba(0,242,254,0.1)]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest">// ARCHITECTURE PIPELINE VISUALIZER</span>
          <h4 className="text-xl font-bold text-slate-100 mt-1">ContentIQ GraphRAG Execution Flow</h4>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 font-mono-tech text-xs text-cyan-300">
            Interactive Nodes
          </span>
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Nodes Flow */}
      <div className="overflow-x-auto pb-4 mb-6">
        <div className="flex items-center min-w-max gap-2 sm:gap-3 px-2">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={s.step}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-400/80 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                      : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                    {getStepIcon(idx)}
                  </span>
                  <div className="text-left">
                    <div className="font-mono-tech text-[10px] opacity-75">STEP 0{s.step}</div>
                    <div className="text-xs font-semibold whitespace-nowrap">{s.name}</div>
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Card View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono-tech text-xs font-bold">
                STAGE 0{current.step} / 08
              </span>
              <span className="text-sm font-mono-tech text-slate-400">{current.subtitle}</span>
            </div>
            
            <h5 className="text-xl font-bold text-slate-100 mt-2">{current.name}</h5>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">{current.description}</p>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <span className="text-xs font-mono-tech text-slate-400 block mb-2">Key Technical Details:</span>
              <ul className="space-y-1.5">
                {current.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
            <div>
              <span className="text-xs font-mono-tech text-cyan-400 block mb-3 uppercase tracking-wider">// STACK & UTILITIES</span>
              <div className="flex flex-wrap gap-2">
                {current.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-mono-tech text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
              >
                ← Prev Stage
              </button>
              
              <span className="text-xs font-mono-tech text-slate-500">
                {activeStep + 1} of {steps.length}
              </span>

              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-xs font-mono-tech text-black font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-400 transition-colors"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
