import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';
import Testimonials1 from '../assets/review5.png'
import Testimonials2 from '../assets/review4.png'
import Testimonials3 from '../assets/review3.png'
import Testimonials4 from '../assets/review2.png'
import Testimonials5 from '../assets/review1.png'

 
const testimonials = [
  { id: 1, image: Testimonials5 },
  { id: 2, image: Testimonials2 },
  { id: 3, image: Testimonials3 },
  { id: 4, image: Testimonials4 },
  { id: 5, image:  Testimonials1 },

  // Add more screenshots as needed
];

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.div 
        className="testimonials-container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="testimonials-title">
        CLIENT <span>TESTIMONIALS</span>
      </h2>

        <div className="testimonials-grid">
          {testimonials.map(({ id, image }) => (
            <motion.div key={id} className="testimonial-card" variants={itemVariant}>
              <img src={image} alt={`Testimonial ${id}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
