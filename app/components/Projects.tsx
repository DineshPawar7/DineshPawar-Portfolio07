'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { AnimatedButton } from './AnimatedButton';
import Grohubz from '@/public/images/grohubz.png';
import MERN from '@/public/images/mernEngineers.png';

const projectsData = [
  {
    id: 1,
    title: 'Grohubz.com (SAAS)',
    description:
      'Instagram DM automation platform for lead capture and engagement workflows.',
    github: 'https://github.com/DineshPawar7/grohubz.com',
    live: 'https://grohubz.com',
    img: Grohubz,
    alt: 'Grohubz.com - Instagram DM Automation SAAS Platform',
  },
  {
    id: 2,
    title: 'Shopify App',
    description:
      'Custom Shopify app development with seamless functionality and integration.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXsv0hHK0x-Bb4-9LGHSg4HnAzM6hdH7cJ-WaFRJuT09q5oi-sa3CmGI&s=10',
    alt: 'Custom Shopify App Development',
  },
  {
    id: 3,
    title: 'MERN Engineers (Agency Website)',
    description:
      'Freelance portfolio with pixel-perfect UI from Figma design.',
    github: 'https://github.com/DineshPawar7/MernEnginners',
    live: 'https://mernengineers.netlify.app',
    img: MERN,
    alt: 'MERN Engineers - Agency Website',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="w-full mx-auto text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Professional <span className="text-primary block md:inline">Projects</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group relative bg-[#1a1a1a] border border-white/10 rounded-[1rem] overflow-hidden transition-all duration-500 hover:border-primary/40 flex flex-col h-full shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative h-[240px] w-full overflow-hidden bg-dark">
              {typeof project.img === 'object' ? (
                <Image
                  src={project.img}
                  alt={project.alt || project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <img
                  src={project.img}
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                {project.title}
              </h3>

              <p className="text-[#b0b0b0] mt-3 mb-8 leading-relaxed text-sm md:text-base flex-grow">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start items-center">
                {project.live && (
                  <AnimatedButton
                    label="Live"
                    icon={<FaExternalLinkAlt className="text-sm" />}
                    href={project.live}
                  />
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold uppercase tracking-widest"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};