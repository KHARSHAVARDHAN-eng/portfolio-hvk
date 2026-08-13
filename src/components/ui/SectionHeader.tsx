import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  badge,
  align = 'left'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 mb-3 font-mono-tech text-xs tracking-widest text-cyan-400 uppercase ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="text-cyan-500 font-bold">// {number}</span>
        <span className="w-6 h-px bg-cyan-500/40 inline-block" />
        {badge && (
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
            {badge}
          </span>
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg text-slate-400 max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
