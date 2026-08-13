import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Star, ExternalLink, Code } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { Badge } from '../ui/Badge';
import { openSourceContributions, personalInfo } from '../../data/portfolioData';
import { GithubIcon } from '../ui/Icons';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="opensource" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="04"
          title="Open Source & Community Work"
          subtitle="Building open-source AI retrieval tools, anti-spoofing utilities, and contributing to community machine learning frameworks."
          badge="Public Contributions"
        />

        {/* GitHub Stats Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono-tech text-slate-100">250+</div>
              <div className="text-xs text-slate-400 mt-1">Total GitHub Stars Earned</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
              <GitPullRequest className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono-tech text-slate-100">30+</div>
              <div className="text-xs text-slate-400 mt-1">Merged Pull Requests</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono-tech text-slate-100">100%</div>
              <div className="text-xs text-slate-400 mt-1">Public Code Transparency</div>
            </div>
          </div>
        </div>

        {/* Open Source Projects & Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceContributions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlowingCard glowColor="rgba(0, 242, 254, 0.15)" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant={item.type === 'Maintainer' ? 'cyan' : 'violet'}>
                      {item.type}
                    </Badge>
                    
                    {item.stars && (
                      <span className="flex items-center gap-1 font-mono-tech text-xs text-yellow-400 bg-yellow-950/40 px-2 py-0.5 rounded border border-yellow-800/40">
                        <Star className="w-3 h-3 fill-yellow-400" />
                        <span>{item.stars}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                  <p className="font-mono-tech text-xs text-cyan-300 mt-1">{item.repo}</p>
                  
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono-tech text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="mt-12 p-8 rounded-2xl glass-card border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-100">Explore full code repositories on GitHub</h4>
              <p className="text-sm text-slate-400 mt-0.5">Inspect commits, benchmarks, and active AI open-source code.</p>
            </div>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all flex-shrink-0"
          >
            <span>Visit @{personalInfo.handle}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
