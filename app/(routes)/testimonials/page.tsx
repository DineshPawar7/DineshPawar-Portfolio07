import { Metadata } from 'next';
import { Testimonials } from '../../components/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Dinesh Pawar - Full Stack Developer',
  description: 'Read client testimonials and reviews for Dinesh Pawar, Full Stack Web Developer. See what clients say about his work.',
  keywords: 'Dinesh Pawar testimonials, Client reviews, Web developer reviews, Full Stack Developer testimonials',
};

export default function TestimonialsPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Testimonials />
      </div>
    </section>
  );
}