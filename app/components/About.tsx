'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="w-full py-12 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 p-8 md:p-12 rounded-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-primary">Dinesh Pawar</span>
        </h1>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Hello! I&#39;m <strong className="text-white">Dinesh Pawar</strong>, a passionate and dedicated{' '}
            <strong className="text-primary">Full Stack Developer</strong> with a strong foundation in
            modern web technologies. I specialize in building fast, responsive, and user-friendly web
            applications using technologies like React, Node.js, Express, and MongoDB.
          </p>

          <p>
            With a problem-solving mindset and a love for clean, efficient code, I aim to create
            digital solutions that not only meet client needs but exceed user expectations. I stay
            updated with the latest industry trends and best practices to deliver high-quality,
            scalable, and maintainable applications.
          </p>

          <p className="text-white font-medium">
            I&#39;m currently open to exciting job opportunities and freelance projects where I can
            contribute and grow as a developer.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 rounded-xl">
            <h3 className="text-primary font-semibold mb-2">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><strong className="text-white">Name:</strong> Dinesh Pawar</li>
              <li><strong className="text-white">Profession:</strong> Full Stack Developer</li>
              <li><strong className="text-white">Mobile:</strong> +91-8446862383</li>
              <li><strong className="text-white">Email:</strong> dineshpawarr07@gmail.com</li>
            </ul>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <h3 className="text-primary font-semibold mb-2">Connect with Me</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/dineshpawar07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DineshPawar7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dineshpawarr07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@DineshPawarr07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;