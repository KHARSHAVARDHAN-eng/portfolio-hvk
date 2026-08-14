import React, { useState, useEffect } from 'react';
import { useArcade } from '../../context/ArcadeContext';
import { projects } from '../../data/portfolioData';
import { ProjectArchitecture } from './ProjectArchitecture';
import { sound } from '../../utils/sound';
import { Cpu, ExternalLink, ArrowLeft, Target, ShieldAlert, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const ProjectsStage: React.FC = () => {
  const { setStage, selectedProjectId, setSelectedProjectId } = useArcade();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  useEffect(() => {
    if (selectedProjectId) {
      const idx = projects.findIndex(p => p.id === selectedProjectId);
      if (idx !== -1) {
        setActiveProjectIndex(idx);
      }
    }
  }, [selectedProjectId]);

  const activeProject = projects[activeProjectIndex] || projects[0];

  const handleSelectProject = (idx: number) => {
    sound.playSelect();
    setActiveProjectIndex(idx);
    setSelectedProjectId(projects[idx].id);
  };

  const projectScoreBadges = [
    'GRAPHRAG★ 094,800',
    'VISION★ 050,000',
    'NEURAL★ 096,200',
    'AUDIO★ 098,600'
  ];

  return (
    <div className="min-h-screen w-full pt-20 pb-16 px-4 max-w-6xl mx-auto">
      {/* Stage Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/30">
        <div>
          <div className="inline-block bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded text-xs font-silkscreen text-amber-300 mb-2">
            [ STAGE 02: STAGE SELECT ]
          </div>
          <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider glow-amber">
            PROJECTS UNLOCKED.
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

      {/* Mission Selection Tabs with Arcade Score Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {projects.map((proj, idx) => {
          const isSelected = activeProjectIndex === idx;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              onMouseEnter={() => sound.playHover()}
              className={`p-4 rounded-lg border-2 text-left transition-all flex flex-col justify-between ${
                isSelected 
                  ? 'border-amber-400 bg-amber-950/60 shadow-lg scale-[1.02]' 
                  : 'border-slate-800 bg-[#0a0e1a] hover:border-amber-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-silkscreen text-[10px] tracking-widest ${
                    isSelected ? 'text-amber-400 font-bold glow-amber' : 'text-slate-500'
                  }`}>
                    {projectScoreBadges[idx] || `MISSION★ 0${idx + 1}0,000`}
                  </span>
                </div>
                <div className={`font-chakra font-bold text-sm sm:text-base line-clamp-2 ${
                  isSelected ? 'text-amber-300 glow-amber' : 'text-slate-200'
                }`}>
                  {proj.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Mission Details */}
      <div className="arcade-panel p-6 sm:p-8 rounded-xl border-2 border-amber-500/40 space-y-6">
        {/* Header & Badges */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-amber-400 text-black font-silkscreen font-bold text-[11px] px-2.5 py-0.5 rounded">
                {projectScoreBadges[activeProjectIndex]}
              </span>
              <span className="font-mono-tech text-xs text-amber-400 uppercase tracking-widest">
                CATEGORY: {activeProject.category}
              </span>
            </div>
            <h3 className="font-silkscreen text-2xl sm:text-3xl font-extrabold text-white tracking-wide glow-amber">
              {activeProject.title}
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {activeProject.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-amber px-4 py-2 text-xs flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-black" />
                <span>GITHUB REPO</span>
              </a>
            )}

            {activeProject.demoUrl && (
              <a
                href={activeProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-outline px-4 py-2 text-xs flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/20 border border-red-500/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 font-silkscreen font-bold text-red-400 text-xs mb-2 uppercase">
              <ShieldAlert className="w-4 h-4" />
              THE CHALLENGE
            </div>
            <p className="font-mono-tech text-xs text-slate-300 leading-relaxed">
              {activeProject.problem}
            </p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 font-silkscreen font-bold text-emerald-400 text-xs mb-2 uppercase">
              <CheckCircle className="w-4 h-4" />
              ENGINEERED SOLUTION
            </div>
            <p className="font-mono-tech text-xs text-slate-300 leading-relaxed">
              {activeProject.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Pipeline Graph */}
        {activeProject.pipelineSteps && activeProject.pipelineSteps.length > 0 && (
          <ProjectArchitecture steps={activeProject.pipelineSteps} projectName={activeProject.title} />
        )}

        {/* Key Features & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-amber-500/20">
          <div className="lg:col-span-2">
            <h4 className="font-silkscreen text-xs text-amber-400 uppercase mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              KEY ARCHITECTURAL HIGHLIGHTS:
            </h4>
            <div className="space-y-2">
              {activeProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 p-2.5 rounded text-xs font-mono-tech text-slate-200 flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-silkscreen text-xs text-cyan-400 uppercase mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                TECH STACK:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-1 rounded text-xs font-mono-tech text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div>
                <h4 className="font-silkscreen text-xs text-emerald-400 uppercase mb-3">
                  SYSTEM PERFORMANCE METRICS:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-emerald-500/30 p-2 rounded flex items-center justify-between text-xs font-mono-tech">
                      <span className="text-slate-400">{m.label}</span>
                      <span className="text-emerald-400 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
