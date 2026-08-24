import { Metadata } from 'next';
import { YouTube } from '../../components/YouTube';

export const metadata: Metadata = {
  title: 'YouTube Videos | Dinesh Pawar - Full Stack Developer',
  description: 'Watch Dinesh Pawar\'s latest YouTube videos on web development, programming, and tech tutorials.',
  keywords: 'Dinesh Pawar YouTube, Web development tutorials, Coding videos, Full Stack Developer YouTube',
};

export default function YouTubePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <YouTube />
      </div>
    </section>
  );
}