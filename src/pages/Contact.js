import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../styles/Footer.css";

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

    // Access the keys from environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
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
            <input
              type="text"
              name="mobile"
              placeholder="Your Phone Number"
              value={formData.mobile}
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
      </div>
    </footer>
  );
};

export default Contact;
