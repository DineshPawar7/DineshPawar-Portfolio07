'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label,
  icon,
  href,
  className = '',
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative inline-flex items-center gap-3 px-6 py-3 bg-primary text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-10 ${className}`}
    >
      <span className="relative z-10">{label}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {/* Hover Shine Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.a>
  );
};

export default AnimatedButton;