import { Metadata } from 'next';
import { Contact } from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Contact Dinesh Pawar | Full Stack Developer',
  description: 'Get in touch with Dinesh Pawar, Full Stack Web Developer. Available for freelance projects, job opportunities, and collaborations.',
  keywords: 'Contact Dinesh Pawar, Hire Full Stack Developer, Freelance Web Developer, Web Development Services',
};

export default function ContactPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Contact />
      </div>
    </section>
  );
}