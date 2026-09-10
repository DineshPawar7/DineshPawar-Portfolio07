import { Metadata } from 'next';
import Image from 'next/image';
import GrohubzImage from '@/public/images/grohubz.png';

export const metadata: Metadata = {
  title: 'Grohubz.com - Instagram DM Automation SAAS Platform',
  description:
    'Grohubz.com is an Instagram DM automation platform for lead capture and engagement workflows. Built by Dinesh Pawar, Full Stack Developer.',
};

export default function GrohubzPage() {
  return (
    <section className="w-full py-12 px-2">
      <div className="max-w-5xl mx-auto bg-[#1a1a1a] border border-white/10 p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Grohubz<span className="text-primary">.com</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Instagram DM Automation Platform for Lead Capture and Engagement Workflows
        </p>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-dark mb-8">
          <Image
            src={GrohubzImage}
            alt="Grohubz.com - Instagram DM Automation Platform"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Instagram DM automation for lead capture
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Engagement workflows and campaign management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Real-time analytics and reporting
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Scalable SAAS architecture
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Tech Stack</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                React for frontend
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Node.js + Express for backend
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                MongoDB for database
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                Tailwind CSS for styling
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://grohubz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors"
          >
            Visit Grohubz.com →
          </a>
          <a
            href="https://github.com/DineshPawar7/grohubz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-white rounded-full hover:border-primary/40 hover:text-primary transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}