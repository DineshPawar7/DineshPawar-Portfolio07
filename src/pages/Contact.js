import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <footer className="w-full text-white text-center py-[30px]">
      
      <div className="mx-auto flex flex-col items-center gap-5">
          <h1 className="text-[clamp(2.2rem,10vw,75px)] font-bold mb-[50px] text-white leading-[0.9] mt-[70px] text-center md:text-left">
       <span className="text-[var(--primary-color)]">CONTACT</span>
        {" "}ME
        
      </h1>
        <div className="flex flex-col items-center">
          
          {/* HeroTitle wrapping logic */}
          
         


          <form 
            className="flex flex-col gap-5 w-[80vw] md:w-[600px] mt-5" 
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-[15px] border border-white rounded-[5px] bg-[var(--card-border-color)] text-white outline-none transition-colors hover:border-[var(--primary-color)] focus:border-[var(--primary-color)]"
            /> 
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-[15px] border border-white rounded-[5px] bg-[var(--card-border-color)] text-white outline-none transition-colors hover:border-[var(--primary-color)] focus:border-[var(--primary-color)]"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Your Phone Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-[15px] border border-white rounded-[5px] bg-[var(--card-border-color)] text-white outline-none transition-colors hover:border-[var(--primary-color)] focus:border-[var(--primary-color)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-[15px] border border-white rounded-[5px] bg-[var(--card-border-color)] text-white h-[80px] resize-none outline-none transition-colors hover:border-[var(--primary-color)] focus:border-[var(--primary-color)]"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-[var(--primary-color)] text-black p-[10px] border-none cursor-pointer text-base rounded-[5px] transition duration-300 hover:bg-orange-500 font-medium"
            >
              Send
            </button>
          </form>

          {/* Copyright Text */}
          <p className="text-[14px] mt-[10px] text-[#aaa]">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;