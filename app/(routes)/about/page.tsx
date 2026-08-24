import { Metadata } from 'next';
import { About } from '../../components/About';

export const metadata: Metadata = {
  title: 'About Dinesh Pawar | Full Stack Developer',
  description: 'Learn about Dinesh Pawar, Full Stack Web Developer from India. Passionate about building scalable web applications with React, Node.js, and MongoDB.',
  keywords: 'About Dinesh Pawar, Full Stack Developer bio, Web Developer India, Dinesh Pawar profile',
};

export default function AboutPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <About />
      </div>
    </section>
  );
}