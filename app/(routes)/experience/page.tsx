import { Metadata } from 'next';
import { Experience } from '../../components/Experience';

export const metadata: Metadata = {
  title: 'Professional Experience | Dinesh Pawar - Full Stack Developer',
  description: 'Explore Dinesh Pawar\'s professional experience as a Full Stack Web Developer. Worked at Buzdealz, Viarsh Technologies, and Koshank Pvt Ltd.',
  keywords: 'Dinesh Pawar experience, Full Stack Developer experience, Web Developer portfolio, Buzdealz, Viarsh Technologies, Koshank',
};

export default function ExperiencePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Experience />
      </div>
    </section>
  );
}