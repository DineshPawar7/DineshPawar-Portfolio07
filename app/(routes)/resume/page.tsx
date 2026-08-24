import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Resume | Dinesh Pawar - Full Stack Developer',
  description:
    "View and download Dinesh Pawar's professional resume. Full Stack Web Developer with 1+ year of experience.",
  keywords:
    'Dinesh Pawar resume, Full Stack Developer resume, Web Developer CV, Download resume',
};

const Resume = dynamic(
  () => import('../../components/Resume').then((mod) => mod.Resume),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary" />
      </div>
    ),
  }
);

export default function ResumePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Resume />
      </div>
    </section>
  );
}