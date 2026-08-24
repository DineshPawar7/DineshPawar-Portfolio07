'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFire,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiPostman,
  SiExpress,
  SiNextdotjs,
  SiRedis,
  SiTailwindcss,
  SiRedux,
  SiPrisma,
  SiPostgresql,
  SiSocketdotio,
} from 'react-icons/si';
import { VscCode } from "react-icons/vsc";

const skillData = {
  'Languages & Core': [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
  ],
  'Frontend & State': [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ],
  'Backend & Realtime': [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Socket.io', icon: <SiSocketdotio /> },
  ],
  'Databases & Cloud': [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Prisma', icon: <SiPrisma /> },
    { name: 'Firebase', icon: <FaFire /> },
    { name: 'Redis', icon: <SiRedis /> },
  ],
  'Tools & DevOps': [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'VS Code', icon: <VscCode /> },
    { name: 'Figma', icon: <FaFigma /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const SkillsAndTools = () => {
  return (
    <section id="skills" className="w-full px-2 mx-auto text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Tools & <span className="text-primary">Technologies</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {Object.entries(skillData).map(([category, items]) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="bg-[#1a1a1a] border border-white/5 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-primary/30"
          >
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-8 bg-primary" />
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 tracking-wide">
                {category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-500 hover:bg-primary hover:border-transparent"
                >
                  <div className="text-3xl md:text-4xl text-primary group-hover:text-black transition-colors duration-500 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-xs md:text-sm font-medium text-white/70 group-hover:text-black transition-colors duration-500 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};