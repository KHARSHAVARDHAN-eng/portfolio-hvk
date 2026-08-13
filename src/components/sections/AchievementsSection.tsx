import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowingCard } from '../ui/GlowingCard';
import { Badge } from '../ui/Badge';
import { milestones } from '../../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          title="Experience & Key Milestones"
          subtitle="A timeline of open-source research, hackathon victories, and computer science engineering achievements."
          badge="Milestones Timeline"
        />

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-slate-800 space-y-12">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Glowing Node Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_#00f2fe] border-2 border-slate-950" />

              <GlowingCard glowColor="rgba(0, 242, 254, 0.12)">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={item.type === 'hackathon' ? 'violet' : 'cyan'}>
                      {item.badgeText}
                    </Badge>
                    <span className="font-mono-tech text-xs text-slate-400">{item.location}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100">{item.title}</h3>
                <p className="font-mono-tech text-sm text-cyan-400 mt-1">{item.organization}</p>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono-tech text-slate-400 block mb-2">Key Highlights:</span>
                  <div className="space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
