import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ContactSection from '../../components/ContactSection/ContactSection';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp integration or inquiry handler
    const whatsappNumber = '919966196969';
    const text = `Hello Sthira Axis Infra,\n\nI have a new inquiry:\n\n*Full Name:* ${formData.fullName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject || 'General'}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="contact-page">
      {/* 0. GLOBAL FIXED NAVBAR */}
      <Navbar />

      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="ct-hero-section">
        <div className="ct-hero-bg-overlay" />

        {/* Hero Content Area */}
        <div className="ct-hero-body">
          <div className="ct-hero-content-wrapper">
            <span className="ct-hero-eyebrow">GET IN TOUCH</span>
            
            <h1 className="ct-hero-heading">
              Let’s Build<br />
              Something Lasting
            </h1>

            {/* Supporting paragraph with vertical accent line */}
            <div className="ct-hero-desc-wrapper">
              <div className="ct-hero-accent-line" />
              <p className="ct-hero-description">
                We’d love to hear from you. Whether you have a question,<br />
                are interested in our projects, or simply want to learn more<br />
                about Sthira Axis Infra — our team is here to help.
              </p>
            </div>

            {/* Hero CTA Button */}
            <a href="#contact-form-section" className="ct-hero-cta">
              <span>CONTACT US</span>
              <span className="ct-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — CONTACT INFORMATION + MESSAGE FORM SECTION
          ========================================================================= */}
      <section className="ct-details-section" id="contact-form-section">
        <div className="ct-details-container">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="ct-info-col">
            <span className="ct-section-eyebrow">OUR CONTACT</span>
            <h2 className="ct-info-heading">
              We’re Here<br />
              To Help
            </h2>
            <p className="ct-info-intro">
              Reach out to us through any of the channels below.<br />
              Our team will get back to you as soon as possible.
            </p>

            {/* 4 Contact Rows */}
            <div className="ct-rows-list">
              {/* Row 1: Our Office */}
              <div className="ct-row-item">
                <div className="ct-icon-circle">
                  <svg className="ct-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Our Office</div>
                  <div className="ct-row-text">
                    Plot No. 12, Financial District<br />
                    Gachibowli, Hyderabad - 500032<br />
                    Telangana, India
                  </div>
                </div>
              </div>

              {/* Row 2: Phone */}
              <div className="ct-row-item">
                <div className="ct-icon-circle">
                  <svg className="ct-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Phone</div>
                  <div className="ct-row-text">
                    <a href="tel:+914012345678" className="ct-link">+91 40 1234 5678</a><br />
                    <a href="tel:+919876543210" className="ct-link">+91 98765 43210</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="ct-row-item">
                <div className="ct-icon-circle">
                  <svg className="ct-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Email</div>
                  <div className="ct-row-text">
                    <a href="mailto:info@sthiraaxisinfra.com" className="ct-link">info@sthiraaxisinfra.com</a><br />
                    <a href="mailto:sales@sthiraaxisinfra.com" className="ct-link">sales@sthiraaxisinfra.com</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Business Hours */}
              <div className="ct-row-item">
                <div className="ct-icon-circle">
                  <svg className="ct-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="ct-row-content">
                  <div className="ct-row-label">Business Hours</div>
                  <div className="ct-row-text">
                    Mon – Sat: 9:00 AM – 6:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Message Form Panel */}
          <div className="ct-form-panel">
            {/* Subtle decorative leaf silhouette in top-right corner */}
            <svg className="ct-form-leaf-decor" viewBox="0 0 120 120" fill="none">
              <path
                d="M110 10 C80 15, 60 40, 60 80 C80 80, 105 60, 110 10 Z"
                fill="#8FA876"
                opacity="0.12"
              />
              <path
                d="M60 80 Q90 40 110 10"
                stroke="#8FA876"
                strokeWidth="1.2"
                opacity="0.15"
              />
              <path
                d="M75 55 C65 40, 50 35, 40 38 C42 50, 55 60, 75 55 Z"
                fill="#8FA876"
                opacity="0.1"
              />
            </svg>

            <span className="ct-panel-eyebrow">SEND US A MESSAGE</span>
            <h2 className="ct-panel-heading">
              We’d Love<br />
              To Hear From You
            </h2>

            <form className="ct-message-form" onSubmit={handleSubmit}>
              {/* Row 1: Full Name & Email */}
              <div className="ct-form-row">
                <div className="ct-field-group">
                  <label htmlFor="fullName" className="ct-field-label">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="ct-input"
                  />
                </div>
                <div className="ct-field-group">
                  <label htmlFor="email" className="ct-field-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="ct-input"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Subject */}
              <div className="ct-form-row">
                <div className="ct-field-group">
                  <label htmlFor="phone" className="ct-field-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="ct-input"
                  />
                </div>
                <div className="ct-field-group">
                  <label htmlFor="subject" className="ct-field-label">Subject</label>
                  <div className="ct-select-wrap">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="ct-select"
                    >
                      <option value="">Select an option</option>
                      <option value="Residential Projects">Residential Projects</option>
                      <option value="Plots & Villas">Plots & Villas</option>
                      <option value="Partnership & Land Joint Venture">Partnership & Land Joint Venture</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <svg className="ct-select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="ct-field-group full-width">
                <label htmlFor="message" className="ct-field-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="ct-textarea"
                />
              </div>

              {/* Submit Button */}
              <div className="ct-form-submit-row">
                <button type="submit" className="ct-submit-btn">
                  <span>SEND MESSAGE</span>
                  <span className="ct-btn-arrow">→</span>
                </button>
                {formSubmitted && (
                  <span className="ct-submit-success">Thank you! Opening chat...</span>
                )}
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — LOCATION + MAP SECTION
          ========================================================================= */}
      <section className="ct-location-section">
        <div className="ct-location-container">
          
          {/* LEFT: Content Block with Vertical Accent Line */}
          <div className="ct-loc-left">
            <div className="ct-loc-accent-line" />
            <div className="ct-loc-content">
              <span className="ct-section-eyebrow">FIND US</span>
              <h2 className="ct-loc-heading">Our Location</h2>
              <p className="ct-loc-paragraph">
                Visit our office or get directions.<br />
                We’re conveniently located in the heart<br />
                of Hyderabad’s Financial District.
              </p>
              <a
                href="https://maps.google.com/?q=Gachibowli,Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-loc-btn"
              >
                <span>GET DIRECTIONS</span>
                <span className="ct-btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Map Graphic with Custom Pin and Label */}
          <div className="ct-loc-right">
            <div className="ct-map-card">
              {/* Styled SVG Map background reproducing pale sage & grey aesthetic */}
              <svg className="ct-map-canvas" viewBox="0 0 600 240" preserveAspectRatio="none">
                <rect width="600" height="240" fill="#EBF2E5" />
                {/* Subtle natural green parcels */}
                <path d="M 0,0 L 220,0 L 210,60 L 60,90 L 0,60 Z" fill="#E2EBD9" />
                <path d="M 0,160 L 140,150 L 120,240 L 0,240 Z" fill="#DEE8D4" />
                <path d="M 460,0 L 600,0 L 600,120 L 490,90 Z" fill="#E2EBD9" />
                <path d="M 520,180 L 600,160 L 600,240 L 490,240 Z" fill="#DFE9D6" />

                {/* Soft pale blue water body on right */}
                <path
                  d="M 470,180 C 500,170 540,185 600,175 L 600,195 C 530,205 490,190 470,180 Z"
                  fill="#CBE0EC"
                  opacity="0.85"
                />

                {/* Road network */}
                <line x1="0" y1="180" x2="600" y2="70" stroke="#FFFFFF" strokeWidth="12" />
                <line x1="0" y1="180" x2="600" y2="70" stroke="#DFE4DC" strokeWidth="8" />

                <line x1="280" y1="0" x2="380" y2="240" stroke="#FFFFFF" strokeWidth="10" />
                <line x1="280" y1="0" x2="380" y2="240" stroke="#DFE4DC" strokeWidth="6" />

                <line x1="180" y1="0" x2="420" y2="240" stroke="#FFFFFF" strokeWidth="8" />
                <line x1="180" y1="0" x2="420" y2="240" stroke="#E6EAE3" strokeWidth="5" />

                <line x1="60" y1="90" x2="350" y2="120" stroke="#FFFFFF" strokeWidth="6" />
                <line x1="60" y1="90" x2="350" y2="120" stroke="#E6EAE3" strokeWidth="4" />

                <line x1="330" y1="110" x2="600" y2="160" stroke="#FFFFFF" strokeWidth="7" />
                <line x1="330" y1="110" x2="600" y2="160" stroke="#E2E7DF" strokeWidth="5" />

                {/* Road Labels */}
                <text x="80" y="195" fill="#5F6D64" fontSize="12" fontFamily="sans-serif" fontWeight="500">Gachibowli</text>
                <text x="400" y="195" fill="#5F6D64" fontSize="12" fontFamily="sans-serif" fontWeight="500">Financial District</text>
                <text x="510" y="60" fill="#5F6D64" fontSize="12" fontFamily="sans-serif" fontWeight="500">ISB</text>
              </svg>

              {/* Pin & Floating Brand Tooltip */}
              <div className="ct-map-marker-wrap">
                <div className="ct-map-badge">
                  <div className="ct-badge-name">Sthira Axis Infra</div>
                  <div className="ct-badge-loc">Gachibowli, Hyderabad</div>
                </div>
                <div className="ct-map-pin">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#203F38">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — BOTTOM SCENIC BANNER / CLOSING STATEMENT
          ========================================================================= */}
      <section className="ct-scenic-banner-section">
        <div className="ct-scenic-banner-overlay" />
        <div className="ct-scenic-banner-container">
          {/* Left Content Column */}
          <div className="ct-scenic-left">
            <span className="ct-scenic-eyebrow">SUSTAINABLE SPACES</span>
            <h2 className="ct-scenic-heading">
              For Generations<br />
              to Come
            </h2>
          </div>

          {/* Right Content Column with vertical mustard line */}
          <div className="ct-scenic-right">
            <div className="ct-scenic-accent-line" />
            <p className="ct-scenic-paragraph">
              At Sthira Axis Infra, we’re not just building<br />
              real estate — we’re building a legacy of<br />
              sustainable communities for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Reusable Footer Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
