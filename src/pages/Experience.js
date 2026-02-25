import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Buzdealz Pvt Ltd",
      description:
        "Developed and managed the complete frontend of BuzDealz, focusing on creating a fully responsive user interface and seamless integration with backend APIs. Worked on maintaining, updating, and enhancing frontend features on a regular basis to ensure smooth performance, cross-device compatibility, and an improved overall user experience.",
      period: "July 2025 - Present",
    },
    {
      title: "Web Developer (Part Time)",
      company: "Viarsh Technologies",
      description:
        "Developing responsive websites and web apps, collaborating with the team to deliver high-quality solutions.",
      period: "March 2025 - July",
    },
    {
      title: "Full Stack Web Developer (Intern)",
      company: "Koshank Pvt Ltd",
      description:
        "Developed a responsive company website for Koshank with API integration, ensuring a seamless user experience. Also contributed to client projects, collaborating with the team on various web development tasks.",
      period: "Feb 2025 - May 2025",
    },
  ];

  return (
    <div className="">
      {/* Heading Section */}
      <h2 className="text-[clamp(2.5rem,12vw,75px)] font-bold mb-[50px] text-white leading-[0.9] mt-[70px] text-center md:text-left">
        Professional{" "}
        <span className="text-[var(--primary-color)]">Experience</span>
      </h2>

      {/* Experience Container */}
      <div className="flex flex-col gap-5 items-center max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, description, period }) => {
  return (
    <div className="w-full bg-[var(--card-bg-color)] p-5 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-[var(--primary-color)] group">
      
      {/* Arrow Container */}
      <div className="absolute top-5 right-5 bg-[var(--primary-color)] p-5 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 md:top-5 md:right-5">
        <FaArrowRightLong className="text-white text-[20px] rotate-[-30deg] transition-all duration-300 ease-in-out group-hover:rotate-[-20deg] group-hover:translate-x-1 group-hover:text-black md:text-[15px]" />
      </div>

      {/* Content */}
      <h3 className="text-[clamp(1.2rem,4vw,24px)] text-white mb-2 pr-12 group-hover:text-black transition-colors duration-300">
        {title}
      </h3>
      
      <h2 className="text-[var(--primary-color)] text-[clamp(1rem,3.5vw,18px)] mb-[25px] group-hover:text-black transition-colors duration-300">
        {company}
      </h2>
      
      <p className="text-[clamp(0.9rem,3vw,16px)] text-[#e6e6e6] mx-2.5 leading-relaxed group-hover:text-black transition-colors duration-300 text-left">
        {description}
      </p>
      
      <p className="font-bold text-[clamp(0.9rem,3vw,16px)] text-[#e6e6e6] mt-2.5 group-hover:text-black transition-colors duration-300 text-left">
        {period}
      </p>
    </div>
  );
};

export default Experience;