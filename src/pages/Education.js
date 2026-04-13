import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Hi-Tech Institute of Technology, Aurangabad",
      description:
        "B.Tech in Computer Science with a basic foundation in programming and web development.",
      period: "2021 - 2025",
    },
    {
      title: "Full Stack Web Development",
      institution: "Internshala Trainings",
      description:
        "Completed comprehensive training covering front-end and back-end technologies, including real-world projects and hands-on development with React, Node.js, Express.js, JavaScript, and MongoDB.",
      period: "2023 - 2024",
    },
  ];

  return (
    <div className="px-2 mx-auto">
      {/* Heading Section */}
     

<h2 className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase">
       EDUCATIONAL <span className="text-primary">BACKGROUND</span>
      </h2>
      {/* Education Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

const EducationCard = ({ title, institution, description, period }) => {
  return (
    <div className="group relative w-full bg-[#1a1a1a] border border-white/10 p-6 md:p-8 rounded-3xl transition-all duration-500 ease-in-out hover:bg-primary overflow-hidden flex flex-col justify-between">
      
      {/* Arrow Icon - Smooth rotation and color change */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-primary group-hover:bg-black rounded-full flex items-center justify-center transition-all duration-500 ease-in-out">
        <FaArrowRightLong className="text-white group-hover:text-primary text-lg -rotate-45 group-hover:rotate-0 transition-all duration-500" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[clamp(1.1rem,3vw,22px)] font-semibold text-white group-hover:text-black transition-colors duration-500 pr-10">
          {title}
        </h3>
        
        <h4 className="text-primary font-medium text-base mt-2 group-hover:text-black/80 transition-colors duration-500">
          {institution}
        </h4>
        
        <p className="text-[#b0b0b0] mt-4 leading-relaxed group-hover:text-black/90 transition-colors duration-500 text-sm md:text-base">
          {description}
        </p>
      </div>
      
      {/* Period Badge */}
      <div className="mt-6 self-start px-4 py-1 rounded-full border border-white/20 text-white group-hover:border-black/20 group-hover:text-black font-semibold text-xs md:text-sm transition-all duration-500">
        {period}
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-black/5 transition-all duration-500"></div>
    </div>
  );
};

export default Education;