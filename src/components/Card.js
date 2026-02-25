import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "../assets/logo.png";

const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/dineshpawar07_/",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/dineshpawar07/",
    label: "LinkedIn",
  },
  {
    icon: <AiOutlineYoutube />,
    link: "https://www.youtube.com/@DineshPawar_.07",
    label: "YouTube",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:dineshpawarr07@gmail.com",
    label: "Email",
  },
];

const Card = () => {
  return (
    <section className="flex justify-center p-6 font-[Poppins]">
      <article className="bg-[var(--card-bg-color)] w-[340px] min-h-[600px] p-6 text-center rounded-2xl shadow-lg hover:scale-[1.04] transition-all duration-300">
        
        {/* Profile Image */}
        <img
          src={Logo}
          alt="Dinesh Pawar"
          className="w-[230px] h-[260px] rounded-2xl object-cover mx-auto mb-3"
        />

        {/* Name */}
        <h2 className="text-4xl font-black text-white tracking-wide">
          Dinesh Pawar
        </h2>

        {/* Description */}
      <p className="text-base text-[#d5d5d5] mt-2 leading-relaxed">
  Full Stack Web Developer with 1+ year of professional experience building scalable and high-performance web applications.
</p>

        {/* CTA */}
        <a href="/contact">
          <button className="bg-[var(--primary-color)] text-black px-6 py-2.5 rounded-md mt-10 mb-5 text-base font-semibold transition-all duration-300 hover:bg-[var(--animation)] hover:text-white hover:animate-[shake3856_0.3s_linear_infinite_both]">
            Let’s Connect
          </button>
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-5 text-2xl">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-[#eaeaea] transition-colors duration-300 hover:text-[var(--animation)]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Card;