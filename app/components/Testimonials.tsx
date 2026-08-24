'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Testimonials1 from '@/public/images/review5.png';
import Testimonials2 from '@/public/images/review4.png';
import Testimonials3 from '@/public/images/review3.png';
import Testimonials4 from '@/public/images/review2.png';
import Testimonials5 from '@/public/images/review1.png';



interface Testimonial {
  id: number;
  image: StaticImageData;
  alt: string;
}

const testimonials: Testimonial[] = [
  { id: 1, image: Testimonials5, alt: 'Client Testimonial 1' },
  { id: 2, image: Testimonials2, alt: 'Client Testimonial 2' },
  { id: 3, image: Testimonials3, alt: 'Client Testimonial 3' },
  { id: 4, image: Testimonials4, alt: 'Client Testimonial 4' },
  { id: 5, image: Testimonials1, alt: 'Client Testimonial 5' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const Testimonials = () => {
  return (
    <section className="w-full py-12 px-2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Client <span className="text-primary">Testimonials</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
       {testimonials.map(({ id, image, alt }) => (
  <motion.div
    key={id}
    variants={itemVariants}
    className="group bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-xl"
  >
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-dark">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  </motion.div>
))}
      </motion.div>
    </section>
  );
};

export default Testimonials;