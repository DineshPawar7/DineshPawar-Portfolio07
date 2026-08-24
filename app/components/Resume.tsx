'use client';

import { motion } from 'framer-motion';

export const Resume = () => {
  return (
    <section className="w-full py-12 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 p-4 md:p-8 rounded-3xl"
      >
        <div className="w-full">
          <iframe
            src="/Dinesh-Pawar-Resume.pdf"
            title="Dinesh Pawar Resume"
            className="w-full h-[800px] rounded-xl border border-white/10"
          />
        </div>

        <div className="flex justify-center">
          <a
            href="/Dinesh-Pawar-Resume.pdf"
            download
            className="mt-6 px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors duration-300"
          >
            Download Resume PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;