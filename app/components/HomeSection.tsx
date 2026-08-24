'use client';

import { motion } from 'framer-motion';
import { TbArrowRightCircle, TbDownload } from 'react-icons/tb';

const stats = [
  { value: '01+', label: 'Years of', highlight: 'Experience' },
  { value: '03+', label: 'Projects', highlight: 'Completed' },
  { value: '01+', label: 'Open Source', highlight: 'Contribution' },
];

export const HomeSection = () => {

  const handleFiverrClick = () => {
    window.open('https://www.fiverr.com/s/kXxm2xg', '_blank');
  };

  const handleResumeClick = () => {
    window.open('/Dinesh-Pawar-Resume.pdf', '_blank');
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
          Available for hire
        </span>

        <h1 className="text-[clamp(2.8rem,10vw,5.5rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">
          FULL STACK <br />
          <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            WEB DEVELOPER
          </span>
        </h1>

        <p className="max-w-2xl text-gray-400 font-light mt-6 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
          Full-Stack Web Developer &amp;
          <span className="text-white font-medium"> SaaS Builder </span>
          focused on building scalable digital products. I turn complex ideas
          into simple, efficient, and impactful solutions that drive real growth.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-5 items-center mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleResumeClick}
            className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 flex items-center gap-2"
          >
            <span>View Resume</span>
            <TbDownload className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all" />
          </motion.button>

          <motion.button
            whileHover={{ x: 5 }}
            onClick={handleFiverrClick}
            className="flex items-center gap-2 px-6 py-4 text-white font-semibold hover:text-primary transition-colors group"
          >
            Hire From Fiverr
            <TbArrowRightCircle className="text-2xl group-hover:translate-x-1 group-hover:-rotate-45 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-none">
              {stat.value}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 uppercase tracking-widest font-medium">
              {stat.label}{' '}
              <span className="text-gray-300 block">{stat.highlight}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};