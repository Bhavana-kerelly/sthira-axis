import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ContactSection from '../../components/ContactSection/ContactSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* 0. GLOBAL FIXED NAVBAR */}
      <Navbar />

      {/* =========================================================================
          SECTION 1 — HERO: ABOUT US
          ========================================================================= */}
      <section className="ab-hero-section">
        <div className="ab-hero-bg-overlay" />

        {/* Main Hero Body with Infinity Pool on right & pale fade on left */}
        <div className="ab-hero-body">
          <div className="ab-hero-content-container">
            <div className="ab-hero-text-block">
              <span className="ab-hero-eyebrow">ABOUT US</span>
              <h1 className="ab-hero-heading">
                Building a<br />
                Better Tomorrow
              </h1>

              {/* Description accompanied by thin vertical accent line */}
              <div className="ab-hero-desc-wrapper">
                <div className="ab-hero-accent-line" />
                <p className="ab-hero-description">
                  At Sthira Axis Infra, we are more than just a real<br />
                  estate developer. We are visionaries, creators and<br />
                  partners in building sustainable communities<br />
                  that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR STORY: ROOTED IN VALUES. DRIVEN BY VISION.
          ========================================================================= */}
      <section className="ab-story-section">
        <div className="ab-story-container">
          {/* LEFT COLUMN: Story Introduction */}
          <div className="ab-story-left">
            <span className="ab-story-eyebrow">OUR STORY</span>
            <h2 className="ab-story-heading">
              Rooted in Values.<br />
              Driven by Vision.
            </h2>

            <p className="ab-story-p1">
              Sthira Axis Infra was founded with a simple belief —<br />
              that real estate has the power to shape lives. With a<br />
              deep understanding of people, places and purpose,<br />
              we embarked on a journey to create spaces that<br />
              are not just structures, but lasting legacies.
            </p>

            <p className="ab-story-p2">
              Today, we build thoughtfully designed communities<br />
              that bring together modern living, natural harmony<br />
              and long-term value.
            </p>
          </div>

          {/* MAIN VERTICAL DIVIDER */}
          <div className="ab-story-divider" />

          {/* RIGHT COLUMN: 4 Vertically Stacked Information Items */}
          <div className="ab-story-right">
            {/* ITEM 1: Our Vision */}
            <div className="ab-story-item">
              <div className="ab-item-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="ab-item-text">
                <h3 className="ab-item-title">Our Vision</h3>
                <p className="ab-item-desc">
                  To be a trusted name in creating<br />
                  sustainable and future-ready communities<br />
                  that enrich lives.
                </p>
              </div>
            </div>

            {/* ITEM 2: Our Mission */}
            <div className="ab-story-item">
              <div className="ab-item-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v3" />
                  <path d="M12 19v3" />
                  <path d="M2 12h3" />
                  <path d="M19 12h3" />
                </svg>
              </div>
              <div className="ab-item-text">
                <h3 className="ab-item-title">Our Mission</h3>
                <p className="ab-item-desc">
                  To deliver high-quality, well-planned<br />
                  spaces that combine innovation,<br />
                  sustainability and long-term value.
                </p>
              </div>
            </div>

            {/* ITEM 3: Our People */}
            <div className="ab-story-item">
              <div className="ab-item-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="ab-item-text">
                <h3 className="ab-item-title">Our People</h3>
                <p className="ab-item-desc">
                  A team of passionate professionals<br />
                  committed to excellence, integrity<br />
                  and customer satisfaction.
                </p>
              </div>
            </div>

            {/* ITEM 4: Our Promise */}
            <div className="ab-story-item">
              <div className="ab-item-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9Z" />
                  <path d="M11 3 8 9l4 12 4-12-3-6" />
                  <path d="M2 9h20" />
                </svg>
              </div>
              <div className="ab-item-text">
                <h3 className="ab-item-title">Our Promise</h3>
                <p className="ab-item-desc">
                  Thoughtful design. Superior quality.<br />
                  Lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — WHAT SETS US APART
          ========================================================================= */}
      <section className="ab-apart-section">
        <div className="ab-apart-container">
          {/* LEFT AREA: Text Block */}
          <div className="ab-apart-left">
            <span className="ab-apart-eyebrow">WHAT SETS US APART</span>
            <h2 className="ab-apart-heading">
              More Than<br />
              Real Estate
            </h2>
            <p className="ab-apart-desc">
              We don’t just build homes and spaces.<br />
              We build trust, create value and nurture<br />
              communities. Our commitment to quality,<br />
              transparency and sustainability drives<br />
              every decision we make.
            </p>
          </div>

          {/* RIGHT AREA: Four Image-Based Value Columns */}
          <div className="ab-apart-grid">
            {/* COLUMN 1: Sustainability */}
            <div className="ab-apart-col">
              <div className="ab-apart-img-wrap">
                <img
                  src="/images/about_val_sustainability.jpg"
                  alt="Sustainability - Natural leaves with sunlight"
                  className="ab-apart-img"
                />
              </div>
              <h3 className="ab-apart-title">Sustainability</h3>
              <div className="ab-apart-line" />
              <p className="ab-apart-text">
                Building a greener<br />
                and healthier future.
              </p>
            </div>

            {/* COLUMN 2: Quality */}
            <div className="ab-apart-col">
              <div className="ab-apart-img-wrap">
                <img
                  src="/images/architecture_editorial.jpg"
                  alt="Quality - Contemporary architecture with timber facade"
                  className="ab-apart-img"
                />
              </div>
              <h3 className="ab-apart-title">Quality</h3>
              <div className="ab-apart-line" />
              <p className="ab-apart-text">
                Crafted with care,<br />
                built to last.
              </p>
            </div>

            {/* COLUMN 3: Communities */}
            <div className="ab-apart-col">
              <div className="ab-apart-img-wrap">
                <img
                  src="/images/uma_lakeshore.jpg"
                  alt="Communities - Planned residential neighbourhood"
                  className="ab-apart-img"
                />
              </div>
              <h3 className="ab-apart-title">Communities</h3>
              <div className="ab-apart-line" />
              <p className="ab-apart-text">
                Spaces where<br />
                people belong.
              </p>
            </div>

            {/* COLUMN 4: Long-Term Value */}
            <div className="ab-apart-col">
              <div className="ab-apart-img-wrap">
                <img
                  src="/images/philosophy_action_bg.jpg"
                  alt="Long-Term Value - Panoramic mountain landscape at sunset"
                  className="ab-apart-img"
                />
              </div>
              <h3 className="ab-apart-title">Long-Term Value</h3>
              <div className="ab-apart-line" />
              <p className="ab-apart-text">
                Investments that<br />
                grow with time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR JOURNEY CONTINUES
          ========================================================================= */}
      <section className="ab-journey-section">
        <div className="ab-journey-overlay" />
        <div className="ab-journey-container">
          {/* Left Content Group */}
          <div className="ab-journey-left">
            <span className="ab-journey-eyebrow">OUR JOURNEY CONTINUES</span>
            <h2 className="ab-journey-heading">
              Together, We Build<br />
              Lasting Communities
            </h2>
          </div>

          {/* Right Content Group with Divider */}
          <div className="ab-journey-right">
            <div className="ab-journey-divider" />
            <p className="ab-journey-desc">
              As we move forward, our focus remains the same —<br />
              to create meaningful spaces, nurture thriving<br />
              communities and contribute to a better, more<br />
              sustainable tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Reusable Footer Section */}
      <ContactSection />
    </div>
  );
};

export default AboutPage;
