import { Metadata } from 'next';
import { Education } from '../../components/Education';

export const metadata: Metadata = {
  title: 'Education | Dinesh Pawar - Full Stack Developer',
  description: 'Dinesh Pawar\'s educational background - B.Tech in Computer Science from Hi-Tech Institute of Technology and Full Stack Web Development training from Internshala.',
  keywords: 'Dinesh Pawar education, Computer Science degree, Full Stack training, Internshala, B.Tech CSE',
};

export default function EducationPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Education />
      </div>
    </section>
  );
}