import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { Badge } from '../ui/Badge';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import { projects } from '../../data/portfolioData';
import type { Project } from '../../types';
import { GithubIcon } from '../ui/Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GraphRAG', 'Computer Vision', 'AI/ML', 'Audio AI'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="01"
          title="Featured Case Studies & AI Systems"
          subtitle="Production-grade AI applications, Enterprise GraphRAG engines, and anti-spoofing computer vision models built with meticulous architectural rigour."
          badge="Interactive Architecture"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/80 shadow-[0_0_15px_rgba(0,242,254,0.2)] font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowingCard
                onClick={() => setSelectedProject(project)}
                glowColor={project.category === 'GraphRAG' ? 'rgba(0, 242, 254, 0.2)' : 'rgba(121, 40, 202, 0.2)'}
                className="h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={project.category === 'GraphRAG' ? 'cyan' : 'violet'}>
                        {project.category}
                      </Badge>
                      {project.pipelineSteps && (
                        <span className="flex items-center gap-1 text-[11px] font-mono-tech text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                          <Layers className="w-3 h-3" />
                          <span>Interactive Pipeline</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <div className="p-2 rounded-lg bg-slate-900/80 text-slate-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-all">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-mono-tech text-slate-400 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Quick Architectural Preview Pill */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono-tech text-slate-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{project.architecture}</span>
                  </div>

                  {/* Metrics Bar */}
                  {project.metrics && (
                    <div className="mt-6 grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-bold font-mono-tech text-cyan-400">{m.value}</div>
                          <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Tech Stack Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono-tech text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-mono-tech text-cyan-400 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-900/60">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono-tech text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                    <span>Inspect Case Study</span>
                    <span>→</span>
                  </span>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
