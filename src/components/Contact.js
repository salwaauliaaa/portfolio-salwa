import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Send Message</button>
      </form>
      {messageSent && <p>Pesan Anda telah terkirim!</p>}

      <p>KLIK SOSIAL MEDIA DIBAWAH !</p>
      <div className="social-links">
        <a href="https://www.instagram.com/slwazhrrrr/profilecard/?igsh=MTgxMmdsbW5oam5rNw==" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@slwazhrrx?_t=8qwGf5OjX7Y&_r=1" target="_blank" rel="noopener noreferrer">
          <img src="/images/tiktok.png" alt="TikTok" className="social-icon" />
        </a>
        <a href="https://x.com/salwabebek?t=xI7Ms8dM2dypLfl7B5L7pg&s=08" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.jpg" alt="Twitter" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;