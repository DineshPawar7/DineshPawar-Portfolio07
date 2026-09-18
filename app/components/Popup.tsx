'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaTimes, FaRocket } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const HireMePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('hire-popup-shown');

    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('hire-popup-shown', 'true');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        { ...formData },
        publicKey
      );

      alert('Message Sent Successfully! 🚀');

      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });

      setIsOpen(false);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message, please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md max-h-[88vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-2xl shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute -top-2000ight-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition flex items-center justify-center"
              aria-label="Close"
            >
              <FaTimes className="text-xs" />
            </button>

            <div className="relative z-10 p-5 sm:p-6">
              {/* Offer Badge */}
              <div className="flex justify-center mb-3">
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.15em]"
                >
                  <FaRocket className="text-[9px]" />
                  Limited Time Offer
                </motion.div>
              </div>

              {/* Heading */}
              <div className="text-center mb-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                   <span className="text-primary">Hire </span>me!
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1.5 ml-0.5">
                      Your Role
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Founder / HR"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-primary/70 focus:bg-white/[0.07] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1.5 ml-0.5">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="mobile"
                      placeholder="+91 00000 00000"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-primary/70 focus:bg-white/[0.07] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1.5 ml-0.5">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="hr@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-primary/70 focus:bg-white/[0.07] transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-1.5 ml-0.5">
                    Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell me about the role or project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-white/25 outline-none focus:border-primary/70 focus:bg-white/[0.07] transition resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-primary text-black font-bold text-sm rounded-lg transition-all duration-300 hover:bg-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSending ? 'Sending...' : 'Lets Work Together'}

                  <FaPaperPlane
                    className={`text-xs transition-transform duration-300 ${
                      isSending
                        ? 'translate-x-4 opacity-0'
                        : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                    }`}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMePopup;