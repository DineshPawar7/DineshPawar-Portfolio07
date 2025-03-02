import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with actual backend API call
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Form */}
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Copyright */}
        <p className='footer-copyright'>
        &copy; 2025 <strong>Dinesh Pawar</strong>. All Rights Reserved
      </p>
      </div>
    </footer>
  );
};

export default Footer;
