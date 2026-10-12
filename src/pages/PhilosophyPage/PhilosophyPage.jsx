import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ContactSection from '../../components/ContactSection/ContactSection';
import './PhilosophyPage.css';

const PhilosophyPage = () => {
  return (
    <div className="philosophy-page">
      {/* 0. GLOBAL FIXED NAVBAR */}
      <Navbar />

      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="ph-hero-section">

        {/* Hero Content Area */}
        <div className="ph-hero-body">
          <div className="ph-hero-content-wrapper">
            {/* Thin vertical accent line */}
            <div className="ph-hero-accent-line" />

            {/* Left-aligned hero text block */}
            <div className="ph-hero-text-group">
              <span className="ph-hero-eyebrow">OUR PHILOSOPHY</span>
              <h1 className="ph-hero-heading">
                Building More<br />
                Than Just Spaces
              </h1>
              <p className="ph-hero-description">
                At Sthira Axis Infra, our philosophy goes beyond
                construction. We believe in creating spaces that
                bring lasting value, nurture communities and
                stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR VISION & OUR MISSION
          ========================================================================= */}
      <section className="ph-vision-mission-section">
        <div className="ph-vm-container">
          {/* LEFT COLUMN: Architectural Photograph + Overlapping Green Panel */}
          <div className="ph-vm-left">
            <div className="ph-arch-frame">
              <img
                src="/images/philosophy_architecture.jpg"
                alt="Architectural modern terrace with wooden soffit overlooking skyline"
                className="ph-arch-img"
              />

              {/* Overlapping Forest Green Card */}
              <div className="ph-overlap-card">
                <p className="ph-overlap-text">
                  Thoughtful<br />
                  Spaces for a<br />
                  Better Tomorrow
                </p>
                <div className="ph-overlap-accent-bar" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Vision & Mission Content */}
          <div className="ph-vm-right">
            {/* OUR VISION */}
            <div className="ph-vision-block">
              <span className="ph-block-eyebrow">OUR VISION</span>
              <h2 className="ph-block-heading">
                Sustainable Growth.<br />
                Lasting Impact.
              </h2>
              <p className="ph-block-desc">
                We envision a future where real estate creates
                enduring value — for people, for communities
                and for generations to come. Our focus is on
                building sustainable, well-planned living and
                working spaces that enhance life and inspire growth.
              </p>
            </div>

            {/* OUR MISSION with Vertical Accent Line */}
            <div className="ph-mission-block-wrapper">
              <div className="ph-mission-accent-line" />
              <div className="ph-mission-content">
                <span className="ph-block-eyebrow">OUR MISSION</span>
                <h2 className="ph-block-heading ph-mission-heading">
                  Design. Build. Nurture.
                </h2>
                <p className="ph-block-desc ph-mission-desc">
                  Our mission is to deliver high-quality, innovative
                  and sustainable developments, guided by integrity,
                  responsibility and a deep commitment to
                  our customers and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — OUR VALUES
          ========================================================================= */}
      <section className="ph-values-section">
        <div className="ph-values-container">
          {/* Left heading block */}
          <div className="ph-values-header">
            <span className="ph-values-eyebrow">OUR VALUES</span>
            <h2 className="ph-values-heading">
              The Principles<br />
              That Guide Us
            </h2>
          </div>

          {/* Four value columns separated by vertical dividers */}
          <div className="ph-values-grid">
            <div className="ph-value-divider" />

            {/* Value 1 — Sustainability */}
            <div className="ph-value-item">
              <div className="ph-value-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="ph-value-title">Sustainability</h3>
              <p className="ph-value-desc">
                Building with<br />
                nature in mind.
              </p>
            </div>

            <div className="ph-value-divider" />

            {/* Value 2 — Integrity */}
            <div className="ph-value-item">
              <div className="ph-value-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 0l-1.3 1.3" />
                  <path d="m14 6-2-2a1 1 0 0 0-1.4 0L6.3 8.3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4 0l1.3-1.3" />
                  <path d="m18 10 3 3a2 2 0 0 1 0 2.8l-1.4 1.4" />
                  <path d="m6 14-3-3a2 2 0 0 1 0-2.8l1.4-1.4" />
                </svg>
              </div>
              <h3 className="ph-value-title">Integrity</h3>
              <p className="ph-value-desc">
                Doing what is right,<br />
                always.
              </p>
            </div>

            <div className="ph-value-divider" />

            {/* Value 3 — Community */}
            <div className="ph-value-item">
              <div className="ph-value-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="ph-value-title">Community</h3>
              <p className="ph-value-desc">
                Creating spaces<br />
                where people belong.
              </p>
            </div>

            <div className="ph-value-divider" />

            {/* Value 4 — Excellence */}
            <div className="ph-value-item">
              <div className="ph-value-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F6D35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9Z" />
                  <path d="M11 3 8 9l4 12 4-12-3-6" />
                  <path d="M2 9h20" />
                </svg>
              </div>
              <h3 className="ph-value-title">Excellence</h3>
              <p className="ph-value-desc">
                In every detail,<br />
                every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR PHILOSOPHY IN ACTION
          ========================================================================= */}
      <section className="ph-action-section">
        <div className="ph-action-overlay" />
        <div className="ph-action-container">
          {/* Left-side text group */}
          <div className="ph-action-left">
            <span className="ph-action-eyebrow">OUR PHILOSOPHY IN ACTION</span>
            <h2 className="ph-action-heading">
              Better Spaces.<br />
              Brighter Futures.
            </h2>
          </div>

          {/* Right-side supporting paragraph with divider */}
          <div className="ph-action-right">
            <div className="ph-action-divider" />
            <p className="ph-action-desc">
              Every project we take up is a step towards<br />
              building a stronger, greener and more<br />
              connected tomorrow. This is not just our<br />
              work — it's our belief.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER / CONTACT SECTION
          ========================================================================= */}
      <ContactSection />
    </div>
  );
};

export default PhilosophyPage;
