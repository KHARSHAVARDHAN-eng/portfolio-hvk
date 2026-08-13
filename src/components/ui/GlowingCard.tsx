import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(0, 242, 254, 0.15)',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl glass-card overflow-hidden transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Radial Mouse Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`
        }}
      />

      {/* Subtle Glowing Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 border border-cyan-500/20"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 p-6 md:p-8">{children}</div>
    </motion.div>
  );
};
