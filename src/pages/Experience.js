import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Buzdealz",
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
      company: "Koshank Pvt Ltd ",
      description:
        "Developed a responsive company website for Koshank with API integration, ensuring a seamless user experience. Also contributed to client projects, collaborating with the team on various web development tasks.",
      period: "Feb 2025 - May 2025",
    },
    
  ];

  return (
    <div className="experience-section">
      <h2 className="experience-heading">
        Professional <span>Experience</span>
      </h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
    
  );
};

const ExperienceCard = ({ title,company, description, period }) => {
  return (
    <div className="experience-card">
      <div className="arrow-container">
        <FaArrowRightLong className="arrow" />
      </div>
      <h3>{title}</h3>
      <h2 className="companny-name">{company}</h2>
      <p>{description}</p>
      <p className="period">{period}</p>
    </div>
  );
};

export default Experience;
