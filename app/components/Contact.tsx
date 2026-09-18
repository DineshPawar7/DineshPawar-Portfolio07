'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .send(serviceID, templateID, { ...formData }, publicKey)
      .then(() => {
        alert('Message Sent Successfully! 🚀');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message, please try again.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="px-2 w-full mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Contact <span className="text-primary">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-6"
        >
          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:border-primary/40">
            <h3 className="text-primary font-semibold text-lg mb-2">
              Let&#39;s Talk
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:border-primary/40">
            <h3 className="text-primary font-semibold text-lg mb-2">Email</h3>
            <p className="text-white/90 break-all font-medium">
              dinesh.pawarr77@gmail.com
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:border-primary/40">
            <h3 className="text-primary font-semibold text-lg mb-2">Mobile</h3>
            <p className="text-white/90 break-all font-medium">
              +91 8446862383
            </p>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 bg-[#1a1a1a] border border-white/10 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:border-white/20 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
                  Your Role
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="founder/hr of..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="+91 00000 00000"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="hr@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="You Are Hired!"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white h-32 resize-none outline-none transition-all duration-300 focus:border-primary focus:bg-white/10"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className="w-full md:w-auto px-10 py-4 bg-primary text-black font-bold rounded-2xl transition-all duration-500 hover:bg-white hover:text-black flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <FaPaperPlane
                className={`text-sm transition-transform duration-500 ${
                  isSending
                    ? 'translate-x-10 opacity-0'
                    : 'group-hover:-translate-y-1 group-hover:translate-x-1'
                }`}
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};