import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, AlertTriangle, Lightbulb, Network, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { MagneticButton } from '../ui/MagneticButton';
import { GraphRagPipelineModal } from './GraphRagPipelineModal';
import { GithubIcon } from '../ui/Icons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-modal rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,242,254,0.2)] border border-cyan-500/30 z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge variant="cyan">{project.category}</Badge>
              <span className="font-mono-tech text-xs text-slate-400">// INTERACTIVE CASE STUDY</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100">{project.title}</h3>
            <p className="mt-2 text-base sm:text-lg text-cyan-300/90 font-mono-tech">{project.subtitle}</p>
          </div>

          {/* Metrics Overview Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-slate-800 last:border-none pb-3 sm:pb-0">
                  <div className="text-2xl font-bold font-mono-tech text-cyan-400">{m.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive GraphRAG Pipeline Visualizer (if available) */}
          {project.pipelineSteps && (
            <GraphRagPipelineModal steps={project.pipelineSteps} />
          )}

          {/* Main Content Grid: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 mb-3 font-mono-tech text-sm font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>THE CHALLENGE</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 mb-3 font-mono-tech text-sm font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>THE ARCHITECTURAL SOLUTION</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div className="mb-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 mb-3 font-mono-tech text-sm font-semibold">
              <Network className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE & PIPELINE</span>
            </div>
            <p className="text-sm font-mono-tech text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>Key Technical Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8 pt-6 border-t border-slate-800">
            <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest mb-3">
              TECH STACK & DEPENDENCIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <Badge key={idx} variant="cyan">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
            <MagneticButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="primary">
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </MagneticButton>

            {project.demoUrl && (
              <MagneticButton href={project.demoUrl} target="_blank" rel="noopener noreferrer" variant="glass">
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </MagneticButton>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
