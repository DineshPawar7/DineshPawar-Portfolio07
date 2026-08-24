import { Metadata } from 'next';
import { GithubCalendar } from '../../components/GithubCalendar';

export const metadata: Metadata = {
  title: 'GitHub Contributions | Dinesh Pawar - Full Stack Developer',
  description: 'Dinesh Pawar\'s GitHub contribution calendar showing open source contributions and coding activity as a Full Stack Developer.',
  keywords: 'Dinesh Pawar GitHub, GitHub contributions, Open source contributions, Full Stack Developer GitHub',
};

export default function GithubPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <GithubCalendar />
      </div>
    </section>
  );
}