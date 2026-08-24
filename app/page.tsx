import { Metadata } from 'next';
import { HomeSection } from './components/HomeSection';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { SkillsAndTools } from './components/SkillsAndTools';
import { GithubCalendar } from './components/GithubCalendar';
import { YouTube } from './components/YouTube';
import { Contact } from './components/Contact';

export const metadata: Metadata = {
  title: 'Dinesh Pawar - Full Stack Developer Portfolio',
  description: 'Welcome to the portfolio of Dinesh Pawar, India\'s top Full Stack Web Developer. Specialized in React, Node.js, Next.js, and MongoDB. Building innovative web solutions since 2021.',
};

export default function Home() {
  return (
    <>
      <HomeSection />
      <div className="space-y-16 md:space-y-24 pt-8 md:pt-12">
        <Projects />
        <Experience />
        <Education />
        <SkillsAndTools />
        <GithubCalendar />
        <YouTube />
        <Contact />
      </div>
    </>
  );
}