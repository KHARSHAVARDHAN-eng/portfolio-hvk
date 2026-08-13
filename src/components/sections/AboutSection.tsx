import React from 'react';
import { GraduationCap, BrainCircuit, Terminal, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { personalInfo } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="02"
          title="About & Engineering Background"
          subtitle="Passionate about bridging modern AI research with high-performance production software engineering."
          badge="Profile & Vision"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio & Focus Area */}
          <div className="lg:col-span-7 space-y-6">
            <GlowingCard glowColor="rgba(0, 242, 254, 0.15)">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-100">Engineering Philosophy</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-800">
                <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest block mb-3">
                  Core Engineering Interests:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.interests.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlowingCard>

            {/* Terminal Style Quick Specs */}
            <div className="rounded-2xl glass-card p-6 border border-slate-800 font-mono-tech text-xs text-slate-300">
              <div className="flex items-center gap-2 text-cyan-400 mb-4 pb-2 border-b border-slate-800">
                <Terminal className="w-4 h-4" />
                <span>DEVELOPER_SPECS.json</span>
              </div>
              <div className="space-y-2 text-slate-400">
                <div><span className="text-cyan-400">"degree"</span>: <span className="text-slate-200">"{personalInfo.education.degree}"</span></div>
                <div><span className="text-cyan-400">"specialization"</span>: <span className="text-slate-200">"Artificial Intelligence & Machine Learning"</span></div>
                <div><span className="text-cyan-400">"core_focus"</span>: <span className="text-slate-200">["GraphRAG", "Anti-Spoofing CV", "FastAPI"]</span></div>
                <div><span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"{personalInfo.status}"</span></div>
              </div>
            </div>

          </div>

          {/* Education & Timeline Card */}
          <div className="lg:col-span-5 space-y-6">
            <GlowingCard glowColor="rgba(121, 40, 202, 0.15)">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-slate-100">Academic Foundation</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800/60">
                      {personalInfo.education.period}
                    </span>
                    <span className="text-xs font-mono-tech text-slate-400">{personalInfo.education.grade}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mt-2">{personalInfo.education.degree}</h4>
                  <p className="text-sm font-mono-tech text-cyan-300">{personalInfo.education.institution}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-3 border-t border-slate-800">
                  {personalInfo.education.details}
                </p>
              </div>
            </GlowingCard>
          </div>

        </div>

      </div>
    </section>
  );
};
