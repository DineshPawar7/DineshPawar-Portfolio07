import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer (Part Time)",
      company: "Viarsh Technologies",
      description:
        "Developing responsive websites and web apps, collaborating with the team to deliver high-quality solutions.",
      period: "March 2025 - Present",
    },
    {
      title: "Full Stack Web Developer (Intern)",
      company: "Koshank Pvt Ltd ",
      description:
        "Developed a responsive company website for Koshank with API integration, ensuring a seamless user experience. Also contributed to client projects, collaborating with the team on various web development tasks.",
      period: "Feb 2025 - Present",
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
