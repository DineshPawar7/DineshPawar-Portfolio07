import React from "react";
import { 
  FaReact, FaNodeJs, FaFigma, FaGitAlt, FaDocker, FaGithub, 
  FaHtml5, FaCss3Alt, FaInstagram, FaFire 
} from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiTypescript, SiPostman, SiExpress, 
  SiNextdotjs, SiRedis, SiTailwindcss, SiRedux, SiPrisma, 
  SiPostgresql,  SiSocketdotio, 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillData = {
  "Languages & Core": [
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[var(--primary-color)]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[var(--primary-color)]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[var(--primary-color)]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[var(--primary-color)]" /> },
  ],
  "Frontend Frameworks & Libraries": [
    { name: "React", icon: <FaReact className="text-[var(--primary-color)]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[var(--primary-color)]" /> },
    { name: "Redux", icon: <SiRedux className="text-[var(--primary-color)]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[var(--primary-color)]" /> },
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: <FaNodeJs className="text-[var(--primary-color)]" /> },
    { name: "Express.js", icon: <SiExpress className="text-[var(--primary-color)]" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-[var(--primary-color)]" /> },
  ],
  "Databases & ORMs": [
    { name: "MongoDB", icon: <SiMongodb className="text-[var(--primary-color)]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[var(--primary-color)]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-[var(--primary-color)]" /> },
    { name: "Firebase", icon: <FaFire className="text-[var(--primary-color)]" /> },
    { name: "Redis", icon: <SiRedis className="text-[var(--primary-color)]" /> },
  ],
  "APIs & Tools": [
    { name: "Postman", icon: <SiPostman className="text-[var(--primary-color)]" /> },
    { name: "Instagram Graph API", icon: <FaInstagram className="text-[var(--primary-color)]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[var(--primary-color)]" /> },
  ],
  "Development Tools": [
    { name: "VS Code", icon: <VscVscode className="text-[var(--primary-color)]" /> },
    { name: "Figma", icon: <FaFigma className="text-[var(--primary-color)]" /> },
    { name: "Docker", icon: <FaDocker className="text-[var(--primary-color)]" /> },
        { name: "GitHub", icon: <FaGithub className="text-[var(--primary-color)]" /> },

  ],
};

const SkillsAndTools = () => {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 py-8 text-white">
      {/* Heading */}
      <h1 className="text-[clamp(2.2rem,10vw,75px)] font-bold mb-[50px] text-white leading-[0.9] mt-[70px] text-center md:text-left">
        TOOLS &{" "}
        <span className="text-[var(--primary-color)]">TECHNOLOGIES</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-10 text-center">
        {Object.entries(skillData).map(([category, items]) => (
          <div
            key={category}
            className="bg-[var(--card-bg-color)] rounded-[50px] p-5 shadow-lg"
          >
            {/* Category Title with Underline */}
            <h3 className="text-[clamp(1.3rem,4vw,1.6rem)] font-semibold text-white mb-[30px] pb-2.5 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[50px] after:h-[3px] after:bg-[var(--primary-color)] after:rounded">
              {category}
            </h3>

            {/* Icons Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-[15px] sm:gap-[25px]">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl p-[20px] sm:p-[25px] text-center backdrop-blur-md shadow-[0_8px_20px_var(--shadow-color)] transition-all duration-300 hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,170,255,0.2)] hover:border-[var(--primary-color)]"
                >
                  <div className="text-[clamp(2rem,5vw,3rem)] mb-[15px] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="text-[clamp(0.7rem,2.5vw,0.9rem)] font-medium text-[var(--text-color)] m-0">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsAndTools;