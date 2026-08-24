import { Metadata } from 'next';
import { SkillsAndTools } from '../../components/SkillsAndTools';

export const metadata: Metadata = {
  title: 'Skills & Technologies | Dinesh Pawar - Full Stack Developer',
  description: 'Dinesh Pawar\'s technical skills and tools including React, Node.js, Next.js, MongoDB, TypeScript, Docker, and more.',
  keywords: 'Dinesh Pawar skills, Full Stack Developer skills, React, Node.js, Next.js, MongoDB, TypeScript, Tailwind CSS',
};

export default function SkillsPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <SkillsAndTools />
      </div>
    </section>
  );
}