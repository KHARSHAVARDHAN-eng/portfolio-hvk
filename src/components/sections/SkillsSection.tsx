import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Network, Code2, Server, Layout, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { skillCategories } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-amber-400" />;
      default: return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
    }
  };

  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="03"
          title="Technical Capabilities & Skill Stack"
          subtitle="A comprehensive overview of AI/ML frameworks, GraphRAG architectures, backend servers, and modern web development."
          badge="Skill Architecture"
        />

        {/* Category Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border-cyan-400/80 shadow-[0_0_20px_rgba(0,242,254,0.2)] font-semibold'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800'}`}>
                  {getCategoryIcon(cat.iconName)}
                </span>
                <div>
                  <div className="text-xs font-mono-tech opacity-75">0{idx + 1}</div>
                  <div className="text-xs font-bold truncate">{cat.title.split(' ')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Details */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GlowingCard glowColor="rgba(0, 242, 254, 0.15)">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getCategoryIcon(activeCategory.iconName)}
                  <h3 className="text-2xl font-bold text-slate-100">{activeCategory.title}</h3>
                </div>
                <p className="text-sm text-slate-400">{activeCategory.description}</p>
              </div>

              <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono-tech w-fit">
                {activeCategory.skills.length} Core Technologies
              </span>
            </div>

            {/* Skills Progress List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategory.skills.map((skill, sIdx) => (
                <div key={sIdx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-100 text-sm sm:text-base flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>{skill.name}</span>
                    </span>
                    <span className="font-mono-tech text-xs text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>

                  {skill.highlight && (
                    <p className="text-xs text-slate-400 font-mono-tech flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{skill.highlight}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

          </GlowingCard>
        </motion.div>

      </div>
    </section>
  );
};
