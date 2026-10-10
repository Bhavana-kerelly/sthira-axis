import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactSection from '../../components/ContactSection/ContactSection';
import './ContactPage.css';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const whatsappNumber = '919966196969';
    const text = `Hello Sthira Axis Infra,\n\nI have a new inquiry:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };
  return (
    <div className="contact-page-wrapper">
      <Navbar />
      
      {/* Premium Hero / Form Area */}
      <section className="contact-premium-hero">
        <div className="contact-hero-grid">
          
          {/* Left: Typography & Intro */}
          <motion.div 
            className="contact-hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-eyebrow-premium">CONNECT</div>
            <h1 className="contact-title-premium">
              INITIATE A<br />
              <span className="italic-serif">CONVERSATION</span>
            </h1>
            <p className="contact-subtitle-premium">
              Whether you are looking for details on our latest projects or wish to discuss a partnership, we are ready to assist.
            </p>
            
            <div className="contact-quick-details">
              <div className="qd-item">
                <span className="qd-label">DIRECT INQUIRIES</span>
                <a href="mailto:sthiraaxisinfra@gmail.com" className="qd-link">sthiraaxisinfra@gmail.com</a>
              </div>
              <div className="qd-item">
                <span className="qd-label">PHONE</span>
                <a href="tel:+919966196969" className="qd-link">+91 9966 196 969</a>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Form */}
          <motion.div 
            className="contact-hero-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="premium-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required value={formData.name} onChange={handleChange} />
                <label htmlFor="name">FULL NAME</label>
                <div className="form-line"></div>
              </div>
              
              <div className="form-group">
                <input type="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} />
                <label htmlFor="email">EMAIL ADDRESS (OPTIONAL)</label>
                <div className="form-line"></div>
              </div>

              <div className="form-group">
                <input type="tel" id="phone" placeholder=" " required value={formData.phone} onChange={handleChange} />
                <label htmlFor="phone">PHONE NUMBER</label>
                <div className="form-line"></div>
              </div>

              <div className="form-group">
                <textarea id="message" rows="4" placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                <label htmlFor="message">YOUR MESSAGE (OPTIONAL)</label>
                <div className="form-line"></div>
              </div>

              <button type="submit" className="premium-submit-btn">
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </motion.div>
          
        </div>
      </section>

      {/* Reusable Footer Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
