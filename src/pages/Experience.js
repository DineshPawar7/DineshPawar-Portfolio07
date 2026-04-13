import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  const experiences = [
   {
    title: "Frontend Developer",
    company: "Buzdealz Pvt Ltd",
    description: [
      "Developed and managed the complete frontend of BuzDealz.com",
      "Built a fully responsive and user-friendly interface",
      "Integrated frontend seamlessly with backend APIs",
      "Maintained and updated features regularly for performance improvements",
      "Optimized UI/UX for smooth and consistent user experience"
    ],
    period: "July 2025 - March 2026",
  },
    {
      title: "Web Developer (Part Time)",
      company: "Viarsh Technologies",
      description:
        "Developing responsive websites and web apps, collaborating with the team to deliver high-quality solutions using modern web technologies.",
      period: "March 2025 - July 2025",
    },
    {
      title: "Full Stack Web Developer (Intern)",
      company: "Koshank Pvt Ltd",
      description:
        "Developed a responsive company website for Koshank with API integration, ensuring a seamless user experience. Also contributed to client projects.",
      period: "Feb 2025 - May 2025",
    },
  ];

  return (
    <div className="px-2 mx-auto">
      {/* Heading Section */}
     
      <h2 className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase">
       Professional <span className="text-primary">Experience</span>
      </h2>

      {/* Experience Container */}
      <div className="flex flex-col gap-6 items-center">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, description, period }) => {
  return (
    <div className="group relative w-full bg-[#1a1a1a] border border-white/10 p-6 md:p-8 rounded-3xl transition-all duration-500 ease-in-out hover:bg-primary overflow-hidden">
      
      {/* Arrow Container - Animated smoothly */}
      <div className="absolute top-6 right-6 w-12 h-12 bg-primary group-hover:bg-black rounded-full flex items-center justify-center transition-all duration-500 ease-in-out">
        <FaArrowRightLong className="text-black group-hover:text-primary text-xl -rotate-45 group-hover:rotate-0 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="max-w-[85%]">
        <h3 className="text-[clamp(1.2rem,4vw,24px)] font-semibold text-white group-hover:text-black transition-colors duration-500">
          {title}
        </h3>
        
        <h4 className="text-primary font-medium text-lg mt-1 group-hover:text-black/80 transition-colors duration-500">
          {company}
        </h4>
        
       <p className="text-[#b0b0b0] mt-4 leading-relaxed group-hover:text-black/90 transition-colors duration-500 text-sm md:text-base">
  {Array.isArray(description) ? (
    <ul className="list-disc ml-5 space-y-2">
      {description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  ) : (
    description
  )}
</p>
        <div className="mt-6 inline-block px-4 py-1 rounded-full border border-white/20 text-white group-hover:border-black/20 group-hover:text-black font-semibold text-sm transition-all duration-500">
          {period}
        </div>
      </div>

      {/* Subtle background glow effect on hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-black/5 transition-all duration-500"></div>
    </div>
  );
};

export default Experience;