'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const GithubCalendar = () => {
  return (
    <div className="px-2 w-full mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Github <span className="text-primary">Contributions</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#1a1a1a] border border-white/10 p-2 md:p-4 rounded-lg md:rounded-3xl hover:border-primary/30 transition-all duration-500"
      >
        <div className="relative w-full aspect-[2.5/1] min-h-[100px]">
          <img
            src="https://ghchart.rshah.org/00ff00/DineshPawar7"
            alt="Dinesh Pawar's GitHub Contribution Chart - Full Stack Developer Activity"
            className="w-full h-full object-contain rounded-xl"
            loading="lazy"
          />
        </div>
        
        {/* GitHub Stats Link */}
        <div className="mt-3 text-center">
          <a
            href="https://github.com/DineshPawar7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-primary transition-colors duration-300"
          >
            View full GitHub profile →
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubCalendar;