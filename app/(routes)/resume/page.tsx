import { Metadata } from 'next';
import { Resume } from '../../components/Resume';

export const metadata: Metadata = {
  title: 'Resume | Dinesh Pawar - Full Stack Developer',
  description: 'View and download Dinesh Pawar\'s professional resume. Full Stack Web Developer with 1+ year of experience.',
  keywords: 'Dinesh Pawar resume, Full Stack Developer resume, Web Developer CV, Download resume',
};

export default function ResumePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Resume />
      </div>
    </section>
  );
}