import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ProjectArchitecture } from '../arcade/ProjectArchitecture';
import { sound } from '../../utils/sound';
import { Cpu, ExternalLink, Target, ShieldAlert, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const ProjectsSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const activeProject = projects[activeProjectIndex] || projects[0];

  const handleSelectProject = (idx: number) => {
    sound.playSelect();
    setActiveProjectIndex(idx);
  };

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto bg-[#0d0818] arcade-purple-grid">
      {/* Section Header */}
      <div className="mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
          [ PORTFOLIO CASE STUDIES ]
        </div>
        <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Project Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {projects.map((proj, idx) => {
          const isSelected = activeProjectIndex === idx;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              onMouseEnter={() => sound.playHover()}
              className={`p-4 text-left border-3 border-black transition-all ${
                isSelected 
                  ? 'bg-[#fff5f8] text-[#120a21] shadow-[5px_5px_0px_#ff2a85] font-bold' 
                  : 'bg-[#1a0f30] text-[#f8f6fc] hover:border-[#ff2a85]'
              }`}
            >
              <div className="font-silkscreen text-[10px] text-[#ff2a85] mb-1 font-bold">
                PROJECT 0{idx + 1}
              </div>
              <div className="font-chakra font-bold text-sm sm:text-base line-clamp-2">
                {proj.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Project Card */}
      <div className="arcade-card-cream p-6 sm:p-8 border-3 border-black shadow-[8px_8px_0px_#ff2a85] space-y-6">
        {/* Header & Badges */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-black pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#ff2a85] text-white font-silkscreen font-bold text-[10px] px-2.5 py-0.5 border border-black">
                PROJECT 0{activeProjectIndex + 1}
              </span>
              <span className="font-mono-tech text-xs text-[#ff2a85] uppercase tracking-widest font-bold">
                CATEGORY: {activeProject.category}
              </span>
            </div>
            <h3 className="font-silkscreen text-2xl sm:text-3xl font-extrabold text-[#120a21] tracking-wide">
              {activeProject.title}
            </h3>
            <p className="font-mono-tech text-xs sm:text-sm text-slate-800 mt-2 max-w-3xl leading-relaxed">
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
                className="arcade-btn arcade-btn-pink px-4 py-2 text-xs flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub Repo</span>
              </a>
            )}

            {activeProject.demoUrl && (
              <a
                href={activeProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-yellow px-4 py-2 text-xs flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-[#120a21]" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-black p-4">
            <div className="flex items-center gap-2 font-silkscreen font-bold text-red-600 text-xs mb-2 uppercase">
              <ShieldAlert className="w-4 h-4" />
              THE PROBLEM
            </div>
            <p className="font-mono-tech text-xs text-slate-800 leading-relaxed">
              {activeProject.problem}
            </p>
          </div>

          <div className="bg-white border-2 border-black p-4">
            <div className="flex items-center gap-2 font-silkscreen font-bold text-emerald-600 text-xs mb-2 uppercase">
              <CheckCircle className="w-4 h-4" />
              ENGINEERED SOLUTION
            </div>
            <p className="font-mono-tech text-xs text-slate-800 leading-relaxed">
              {activeProject.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Pipeline Graph */}
        {activeProject.pipelineSteps && activeProject.pipelineSteps.length > 0 && (
          <ProjectArchitecture steps={activeProject.pipelineSteps} projectName={activeProject.title} />
        )}

        {/* Key Features & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t-2 border-black">
          <div className="lg:col-span-2">
            <h4 className="font-silkscreen text-xs text-[#ff2a85] uppercase mb-3 flex items-center gap-2 font-bold">
              <Target className="w-4 h-4" />
              KEY ARCHITECTURAL HIGHLIGHTS:
            </h4>
            <div className="space-y-2">
              {activeProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-2.5 text-xs font-mono-tech text-slate-900 flex items-start gap-2.5">
                  <span className="text-[#ff2a85] font-bold">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-silkscreen text-xs text-[#120a21] uppercase mb-3 flex items-center gap-2 font-bold">
                <Cpu className="w-4 h-4 text-[#ff2a85]" />
                TECH STACK:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#120a21] text-white border border-black px-2.5 py-1 text-xs font-silkscreen"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div>
                <h4 className="font-silkscreen text-xs text-[#ff2a85] uppercase mb-3 font-bold">
                  VERIFIED METRICS:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white border-2 border-black p-2 flex items-center justify-between text-xs font-mono-tech">
                      <span className="text-slate-700 font-bold">{m.label}</span>
                      <span className="text-[#ff2a85] font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
