'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

const socials = [
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/dineshpawarr07/',
    label: 'Instagram',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/dineshpawar07/',
    label: 'LinkedIn',
  },
  {
    icon: <AiOutlineYoutube />,
    link: 'https://www.youtube.com/@DineshPawarr07',
    label: 'YouTube',
  },
  {
    icon: <FaEnvelope />,
    link: 'mailto:dineshpawarr07@gmail.com',
    label: 'Email',
  },
  {
    icon: <FaGithub />,
    link: 'https://github.com/DineshPawar7',
    label: 'GitHub',
  },
];

export const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative bg-[#1a1a1a] border border-white/10 w-full max-w-[350px] min-h-[580px] p-6 text-center rounded-[2.5rem] transition-all duration-500 hover:border-primary/40 overflow-hidden shadow-2xl"
      >
        {/* Subtle Background Glow on Hover */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

        {/* Profile Image Container */}
        <div className="relative w-[250px] h-[240px] mx-auto mb-6">
          <Image
            src={"https://avatars.githubusercontent.com/u/175672643?v=4"}
            alt="Dinesh Pawar - Full Stack Developer"
            className="w-full h-full rounded-3xl object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-white/5 group-hover:border-primary/20"
            width={250}
            height={240}
            priority
          />
        </div>

        {/* Name Section */}
        <h2 className="text-3xl font-black text-white tracking-tight group-hover:text-primary transition-colors duration-500">
          Dinesh Pawar
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#b0b0b0] mt-3 leading-relaxed font-medium">
          Full Stack Web Developer with <span className="text-white">1+ year</span> of professional experience building scalable web applications.
        </p>

        {/* CTA Button */}
        <div className="mt-8 mb-8">
          <Link href="/contact" className="inline-block w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-black py-3.5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:bg-white hover:text-black shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              Let&#39;s Connect
            </motion.button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-gray-500 text-2xl transition-all duration-500 hover:text-primary"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer subtle decoration */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </motion.article>
    </div>
  );
};

export default Card;