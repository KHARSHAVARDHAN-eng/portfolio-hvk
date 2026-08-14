import React from 'react';
import { openSourceContributions } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { GitBranch, Star, ExternalLink, Terminal, ShieldCheck } from 'lucide-react';

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="py-16 px-4 max-w-5xl mx-auto bg-[#140824] arcade-purple-bg">
      {/* Section Header */}
      <div className="mb-8 pb-4 border-b-3 border-[#ff2a85]">
        <div className="inline-block bg-[#ff2a85] text-white border-2 border-black px-3 py-0.5 text-xs font-silkscreen font-bold mb-2">
          [ COMMUNITY & LIBRARIES ]
        </div>
        <h2 className="font-silkscreen text-3xl sm:text-4xl font-extrabold text-[#f8f6fc] uppercase tracking-wider">
          OPEN SOURCE CONTRIBUTIONS
        </h2>
      </div>

      <p className="font-mono-tech text-xs sm:text-sm text-[#a89cb9] mb-8 max-w-3xl leading-relaxed">
        Building transparent, open-source AI tooling, retrieval benchmarking modules, and computer vision utilities.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {openSourceContributions.map((contrib, idx) => (
          <div
            key={idx}
            className="arcade-card-cream p-6 border-3 border-black shadow-[6px_6px_0px_#ff2a85] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#ff2a85] text-white font-silkscreen font-bold text-[10px] px-2 py-0.5 border border-black">
                  PROJECT 0{idx + 1}
                </span>
                {contrib.stars && (
                  <span className="flex items-center gap-1 font-silkscreen text-xs text-[#120a21] font-bold bg-[#ffcc00] px-2 py-0.5 border border-black">
                    <Star className="w-3.5 h-3.5 fill-[#120a21]" />
                    {contrib.stars}
                  </span>
                )}
              </div>

              <h3 className="font-silkscreen text-base font-bold text-[#120a21] mb-1">
                {contrib.title}
              </h3>
              <p className="font-mono-tech text-xs text-[#ff2a85] mb-3 font-bold">
                {contrib.repo}
              </p>

              <div className="inline-flex items-center gap-1.5 bg-[#120a21] text-white px-2.5 py-1 text-[10px] font-silkscreen mb-4 border border-black">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffcc00]" />
                <span>ROLE: {contrib.role}</span>
              </div>

              <p className="font-mono-tech text-xs text-slate-800 mb-5 leading-relaxed">
                {contrib.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {contrib.tech.map((t, i) => (
                  <span key={i} className="bg-white text-black border border-black px-2 py-0.5 text-[10px] font-silkscreen">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={contrib.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="arcade-btn arcade-btn-pink w-full py-2 text-xs flex items-center justify-center gap-2"
              >
                <GitBranch className="w-4 h-4" />
                <span>Inspect GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout */}
      <div className="arcade-card-dark p-6 border-3 border-[#ff2a85] shadow-[6px_6px_0px_#ffcc00] flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-[#ffcc00]" />
          <div>
            <div className="font-silkscreen font-bold text-white text-sm">WANT TO EXPLORE ALL REPOSITORIES & COMMITS?</div>
            <div className="font-mono-tech text-xs text-[#a89cb9]">View complete contribution history on GitHub</div>
          </div>
        </div>
        <a
          href="https://github.com/KHARSHAVARDHAN-eng"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => sound.playHover()}
          className="arcade-btn arcade-btn-yellow px-5 py-2.5 text-xs flex items-center gap-2"
        >
          <span>Open GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#120a21]" />
        </a>
      </div>
    </section>
  );
};
