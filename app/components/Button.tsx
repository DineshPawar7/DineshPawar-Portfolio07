'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Button = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative"
      >
        <Link
          href="/testimonials"
          className="group relative inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(219,255,150,0.3)]"
        >
          <span className="relative z-10 text-sm uppercase tracking-wider">
            See Testimonials
          </span>
          {/* Animated border glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-[2px] bg-black rounded-full" />
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
            ✦
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Button;