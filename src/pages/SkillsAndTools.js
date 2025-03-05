import React from "react";
import "../styles/SkillsAndTools.css";
import { FaCode, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaGithub  } from "react-icons/fa"; 
import { RiJavascriptFill, RiNextjsFill, RiAngularjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiPostman, SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";


const SkillsAndTools = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <RiJavascriptFill /> },
    { name: "HTML & CSS", icon: <FaCode /> },
    { name: "NextJS", icon: <RiNextjsFill /> },
    { name: "Angular", icon: <RiAngularjsFill /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "Redux", icon: <TbBrandRedux /> },
    { name: "GraphQL", icon: <GrGraphQl /> },

  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "VSCode", icon: <VscVscode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Figma", icon: <FaFigma /> },
    
  ];

  return (
    <div className="skills-tools-container">
      {/* Heading */}
      <h2 className="skills-tools-heading">
        <span>TOOLS &</span> <br />
        <span className="skills-tools-yellow">TECHNOLOGIES</span>
      </h2>

      <div className="skills-tools-wrapper">
        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skills-item">
                <span className="skills-icon">{skill.icon}</span>
                <span className="skills-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools-section">
          <h3 className="tools-title">Tools</h3>
          <div className="tools-list">
            {tools.map((tool, index) => (
              <div key={index} className="tools-item">
                <span className="tools-icon">{tool.icon}</span>
                <span className="tools-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
