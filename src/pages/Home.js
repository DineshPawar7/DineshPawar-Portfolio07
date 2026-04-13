import React, { useRef } from "react";
import { TbArrowRightCircle, TbDownload } from "react-icons/tb";
import Projects from "./Projects";
import Experience from "./Experience";
import SkillsAndTools from "../pages/SkillsAndTools";
import YouTube from "./Youtube";
import Contact from "./Contact";
import Education from "./Education";
import GithubCalendar from "./GithubCalendar";

const Home = () => {
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    window.open('https://dinesh-pawar.netlify.app/Dinesh-Pawar-Resume.pdf', '_blank');
  };

  const stats = [
    { value: "01+", label: "Years of", highlight: "Experience" },
    { value: "03+", label: "Projects", highlight: "Completed" },
    { value: "01+", label: "Open Source", highlight: "Contribution" },
  ];

  return (
    <div className="flex flex-col font-poppins text-white selection:bg-primary selection:text-black">
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-2 py-10">
        <div className="max-w-6xl">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Available for hire
          </span>
          
          <h1 className="text-[clamp(2.8rem,10vw,5.5rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">
            FULL STACK <br />
            <span className="text-primary">
              WEB DEVELOPER
            </span>
          </h1>

          <p className="max-w-2xl text-gray-400 font-light mt-6 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            Full-Stack Web Developer &
            <span className="text-white font-medium"> SaaS Builder </span>
            focused on building scalable digital products. I turn complex ideas into simple, efficient, and impactful solutions that drive real growth
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 items-center mt-10">
            <button
              onClick={handleResumeClick}
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95 flex items-center gap-2"
            >
              <span>View Resume</span>
              <TbDownload className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all" />
            </button>

            <button
              onClick={() => scrollToSection(projectsRef)}
              className="flex items-center gap-2 px-6 py-4 text-white font-semibold hover:text-primary transition-colors group"
            >
              See My Work
              <TbArrowRightCircle className="text-2xl group-hover:translate-x-1 group-hover:-rotate-45 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section - Refined Design */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-none">
                {stat.value}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 uppercase tracking-widest font-medium">
                {stat.label} <span className="text-gray-300 block">{stat.highlight}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <main className="md:space-y-20 space-y-10 pt-20">
        <section ref={projectsRef} className="">
          <Projects />
        </section>

        <section className=" ">
           <Experience />
        </section>

        <section className="">
           <Education />
        </section>

        <section className="">
           <SkillsAndTools />
        </section>

        <section className="">
           <GithubCalendar />
        </section>

        <section className="">
           <YouTube />
        </section>

        <section ref={contactRef} className="">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;