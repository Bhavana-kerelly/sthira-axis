import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import ContactSection from '../../components/ContactSection/ContactSection';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const containerRef = useRef(null);
  
  // Residence selector state
  const [activeType, setActiveType] = useState('TYPE A');
  const typeDetails = {
    'TYPE A': { area: '2,350 Sq. Ft.', config: '3 BHK', facing: 'West', plinth: '1,836 Sft', common: '514 Sft' },
    'TYPE B': { area: '2,211 Sq. Ft.', config: '3 BHK', facing: 'East', plinth: '1,728 Sft', common: '483 Sft' },
    'TYPE C': { area: '2,150 Sq. Ft.', config: '3 BHK', facing: 'East', plinth: '1,680 Sft', common: '470 Sft' }
  };

  // Section 04 Gallery State
  const galleryImages = [
    {
      id: 1,
      src: '/images/floorplan_type_a.png',
      alt: 'Uma Sreenivas Lakeshore - Type A Residence Floor Plan (2,350 sq ft)',
      title: 'Type A Residence (2,350 sq ft)'
    },
    {
      id: 2,
      src: '/images/floorplan_type_b.png',
      alt: 'Uma Sreenivas Lakeshore - Type B Residence Floor Plan (2,271 sq ft)',
      title: 'Type B Residence (2,271 sq ft)'
    },
    {
      id: 3,
      src: '/images/floorplan_type_c.png',
      alt: 'Uma Sreenivas Lakeshore - Type C Residence Floor Plan (2,150 sq ft)',
      title: 'Type C Residence (2,150 sq ft)'
    }
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const handlePrevGallery = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextGallery = () => {
    setActiveGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg(null);
  };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      // 1. Hero Reveal
      const heroTl = gsap.timeline();
      heroTl.fromTo('.pp-hero-img-inner',
        { scale: 1.15, filter: 'brightness(0.8)' },
        { scale: 1, filter: 'brightness(1)', duration: 2.5, ease: 'power3.out' }
      )
      .fromTo('.pp-hero-title-line',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: 'power3.out' },
        '-=1.5'
      )
      .fromTo('.pp-hero-meta',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="project-page" ref={containerRef}>
      
      {/* 0. HOMEPAGE NAVBAR */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pp-hero" id="overview">
        <div className="pp-hero-img-wrapper">
          <img src="/images/project_hero.jpg" alt="Uma Sreenivas Lakeshore" className="pp-hero-img-inner" />
          <div className="pp-hero-overlay"></div>
        </div>
        <div className="pp-hero-content">
          <div className="pp-hero-label">A STHIRA AXIS INFRA DEVELOPMENT</div>
          <h1 className="pp-hero-title">
            <span className="pp-hero-title-line">UMA SREENIVAS</span>
            <span className="pp-hero-title-line">LAKESHORE</span>
          </h1>
          <div className="pp-hero-meta">KONDAPUR &middot; HYDERABAD</div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — FEATURED RESIDENCE: UMA SREENIVAS LAKESHORE
          Exact recreation from reference
          ========================================================================= */}
      <section className="pp-featured-residence-section" id="featured-residence">
        <div className="pp-featured-residence-container">
          
          {/* Left Column: Project Landscape Photograph (approx 52%) */}
          <div className="pp-fr-image-col">
            <div className="pp-fr-image-wrap">
              <img
                src="/images/uma_lakeshore.jpg"
                alt="Uma Sreenivas Lakeshore - Contemporary mid-rise luxury residential apartments reflecting in lake"
                className="pp-fr-img"
              />
            </div>
          </div>

          {/* Right Column: Project Information & Statistics (approx 40%) */}
          <div className="pp-fr-info-col">
            <span className="pp-fr-eyebrow">FEATURED RESIDENCE</span>
            <h2 className="pp-fr-title">Uma Sreenivas Lakeshore</h2>
            <div className="pp-fr-location">KONDAPUR, HYDERABAD</div>

            <p className="pp-fr-description">
              Uma Sreenivas Lakeshore is a premium 3 BHK residential development offering 18 exclusive homes with permanent lake views, a serene forest ambience and a quiet road setting in the heart of Kondapur, Hyderabad.
            </p>

            {/* Three Horizontal Statistics Columns */}
            <div className="pp-fr-stats-row">
              <div className="pp-fr-stat-item">
                <div className="pp-fr-stat-val">18</div>
                <div className="pp-fr-stat-label">Residences</div>
              </div>

              <div className="pp-fr-stat-divider" />

              <div className="pp-fr-stat-item">
                <div className="pp-fr-stat-val">3 BHK</div>
                <div className="pp-fr-stat-label">Homes</div>
              </div>

              <div className="pp-fr-stat-divider" />

              <div className="pp-fr-stat-item">
                <div className="pp-fr-stat-val">Under Construction</div>
                <div className="pp-fr-stat-label">Status</div>
              </div>
            </div>

            {/* Outlined Pill CTA Button */}
            <div className="pp-fr-cta-wrap">
              <a href="#experience" className="pp-fr-cta-btn">
                <span>Explore the Project</span>
                <span className="pp-fr-arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — KEY HIGHLIGHTS: WHY CHOOSE THIS PROJECT?
          Exact Reference Recreation
          ========================================================================= */}
      <section className="pp-highlights-section" id="key-highlights">
        <div className="pp-highlights-container">
          
          {/* Left Column (approx 30%): Eyebrow, Heading, Paragraph with Vertical Line */}
          <div className="pp-hl-left-col">
            <span className="pp-hl-eyebrow">KEY HIGHLIGHTS</span>
            <h2 className="pp-hl-heading">
              Why Choose<br />
              This Project?
            </h2>
            <div className="pp-hl-desc-wrapper">
              <div className="pp-hl-accent-line" />
              <p className="pp-hl-description">
                Every element at Uma Sreenivas Lakeshore has been carefully planned to bring you a home that is not just beautiful, but also practical, sustainable and built for the future.
              </p>
            </div>
          </div>

          {/* Right Column (approx 70%): 3 Columns x 2 Rows Highlights Grid */}
          <div className="pp-hl-grid-col">
            
            {/* Highlight 1: Lake View Homes */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Sun with rays */}
                  <circle cx="24" cy="14" r="5" />
                  <line x1="24" y1="5" x2="24" y2="7" />
                  <line x1="17" y1="8" x2="18.5" y2="9.5" />
                  <line x1="31" y1="8" x2="29.5" y2="9.5" />
                  {/* Lake wave outlines */}
                  <path d="M12 28 C16 25, 20 25, 24 28 C28 31, 32 31, 36 28" />
                  <path d="M8 35 C13 32, 19 32, 24 35 C29 38, 35 38, 40 35" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Lake View Homes</h3>
              <p className="pp-hl-text">Wake up to serene lake views every day.</p>
            </div>

            {/* Vertical Divider 1 */}
            <div className="pp-hl-vdivider" />

            {/* Highlight 2: Spacious 3 BHK Homes */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* House outline with door */}
                  <path d="M8 20 L24 8 L40 20 V38 H8 Z" />
                  <path d="M20 38 V26 H28 V38" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Spacious 3 BHK Homes</h3>
              <p className="pp-hl-text">Thoughtfully designed for modern families.</p>
            </div>

            {/* Vertical Divider 2 */}
            <div className="pp-hl-vdivider" />

            {/* Highlight 3: Premium Amenities */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Minimal recreation pavilion / gazebo outline */}
                  <path d="M24 8 L38 18 H10 Z" />
                  <line x1="14" y1="18" x2="14" y2="38" />
                  <line x1="24" y1="18" x2="24" y2="38" />
                  <line x1="34" y1="18" x2="34" y2="38" />
                  <line x1="10" y1="38" x2="38" y2="38" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Premium Amenities</h3>
              <p className="pp-hl-text">Wellness, recreation and community living.</p>
            </div>

            {/* Horizontal Row Divider across grid */}
            <div className="pp-hl-hdivider" />

            {/* Highlight 4: Green Surroundings */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Two trees outline */}
                  <path d="M18 10 C13 10, 10 14, 10 20 C10 26, 14 28, 18 28 C22 28, 26 26, 26 20 C26 14, 23 10, 18 10 Z" />
                  <line x1="18" y1="28" x2="18" y2="38" />
                  <path d="M32 16 C28 16, 25 19, 25 24 C25 29, 28 32, 32 32 C36 32, 39 29, 39 24 C39 19, 36 16, 32 16 Z" />
                  <line x1="32" y1="32" x2="32" y2="38" />
                  <line x1="12" y1="38" x2="38" y2="38" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Green Surroundings</h3>
              <p className="pp-hl-text">Lush landscaping and fresh air.</p>
            </div>

            {/* Vertical Divider 3 */}
            <div className="pp-hl-vdivider" />

            {/* Highlight 5: Strategic Location */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Location pin outline */}
                  <path d="M24 8 C17.4 8, 12 13.4, 12 20 C12 28, 24 40, 24 40 C24 40, 36 28, 36 20 C36 13.4, 30.6 8, 24 8 Z" />
                  <circle cx="24" cy="20" r="4.5" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Strategic Location</h3>
              <p className="pp-hl-text">Excellent connectivity to major hubs.</p>
            </div>

            {/* Vertical Divider 4 */}
            <div className="pp-hl-vdivider" />

            {/* Highlight 6: Sustainable Living */}
            <div className="pp-hl-item">
              <div className="pp-hl-icon-wrap">
                <svg className="pp-hl-icon" viewBox="0 0 48 48" fill="none" stroke="#73866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Handshake / sustainability partnership outline */}
                  <path d="M12 22 L18 16 L25 21 L31 16 L38 21" />
                  <path d="M12 22 L17 28 L23 23 L28 27 L36 21" />
                  <path d="M8 20 L13 25" />
                  <path d="M40 20 L35 25" />
                </svg>
              </div>
              <h3 className="pp-hl-title">Sustainable Living</h3>
              <p className="pp-hl-text">Energy efficient and eco-friendly design.</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — PROJECT GALLERY: “A GLIMPSE OF YOUR FUTURE”
          Exact Reference Recreation
          ========================================================================= */}
      <section className="pp-gallery-section" id="gallery">
        <div className="pp-gallery-container">
          
          {/* Header Row: Left Heading & Right Controls */}
          <div className="pp-gallery-header">
            <div className="pp-gallery-header-left">
              <span className="pp-gallery-eyebrow">GALLERY</span>
              <h2 className="pp-gallery-heading">
                A Glimpse of<br />
                Your Future
              </h2>
            </div>

            <div className="pp-gallery-controls">
              <button
                type="button"
                className="pp-gallery-arrow-btn"
                onClick={handlePrevGallery}
                aria-label="Previous gallery image"
              >
                ‹
              </button>
              <button
                type="button"
                className="pp-gallery-arrow-btn"
                onClick={handleNextGallery}
                aria-label="Next gallery image"
              >
                ›
              </button>
              <button
                type="button"
                className="pp-gallery-view-all"
                onClick={() => openLightbox(galleryImages[activeGalleryIndex].src)}
              >
                View All
              </button>
              <div className="pp-gallery-control-line" />
            </div>
          </div>

          {/* Three-Image Composition Grid */}
          <div className="pp-gallery-composition">
            
            {/* Left Column — Primary Image (approx 73%) */}
            <div
              className="pp-gallery-primary-col"
              onClick={() => openLightbox(galleryImages[activeGalleryIndex].src)}
              role="button"
              tabIndex={0}
              aria-label="Open primary image in full view"
            >
              <img
                src={galleryImages[activeGalleryIndex].src}
                alt={galleryImages[activeGalleryIndex].alt}
                className="pp-gallery-primary-img"
              />
            </div>

            {/* Right Column — Two Stacked Secondary Images */}
            <div className="pp-gallery-secondary-col">
              {/* Secondary Image 1: Balcony Terrace / Lake view */}
              <div
                className="pp-gallery-secondary-wrap"
                onClick={() => openLightbox(galleryImages[(activeGalleryIndex + 1) % galleryImages.length].src)}
                role="button"
                tabIndex={0}
                aria-label="Open secondary terrace image"
              >
                <img
                  src={galleryImages[(activeGalleryIndex + 1) % galleryImages.length].src}
                  alt={galleryImages[(activeGalleryIndex + 1) % galleryImages.length].alt}
                  className="pp-gallery-secondary-img"
                />
              </div>

              {/* Secondary Image 2: Landscaped amenities / pool */}
              <div
                className="pp-gallery-secondary-wrap"
                onClick={() => openLightbox(galleryImages[(activeGalleryIndex + 2) % galleryImages.length].src)}
                role="button"
                tabIndex={0}
                aria-label="Open secondary amenities image"
              >
                <img
                  src={galleryImages[(activeGalleryIndex + 2) % galleryImages.length].src}
                  alt={galleryImages[(activeGalleryIndex + 2) % galleryImages.length].alt}
                  className="pp-gallery-secondary-img"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      {lightboxOpen && (
        <div className="pp-gallery-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="pp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Enlarged gallery view" className="pp-lightbox-img" />
            <button className="pp-lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 05 — THE DETAILS THAT MATTER
          Exact Reference Recreation
          ========================================================================= */}
      <section className="pp-details-matter-section" id="project-details">
        <div className="pp-details-matter-container">
          
          {/* Left Column (approx 33%): Eyebrow, Heading, Paragraph with Vertical Accent */}
          <div className="pp-dm-left-col">
            <span className="pp-dm-eyebrow">THE DETAILS</span>
            <h2 className="pp-dm-heading">
              The Details<br />
              That Matter
            </h2>
            <div className="pp-dm-desc-wrapper">
              <div className="pp-dm-accent-line" />
              <p className="pp-dm-description">
                Every element has been carefully planned to bring you a home that is not just beautiful, but also practical, sustainable and built for the future.
              </p>
            </div>
          </div>

          {/* Full-Height Vertical Divider between columns */}
          <div className="pp-dm-col-divider" />

          {/* Right Column (approx 67%): Six Specification Rows */}
          <div className="pp-dm-right-col">
            
            {/* Row 1 — Location */}
            <div className="pp-dm-row multi-line-row">
              <div className="pp-dm-label">LOCATION</div>
              <div className="pp-dm-value">
                RV Panchajanya Road, Masjid Banda,<br />
                Kondapur, Hyderabad
              </div>
            </div>

            {/* Row 2 — Land Area */}
            <div className="pp-dm-row">
              <div className="pp-dm-label">LAND AREA</div>
              <div className="pp-dm-value">1,158.80 sq yd (968.75 sq m)</div>
            </div>

            {/* Row 3 — Built-up Area */}
            <div className="pp-dm-row">
              <div className="pp-dm-label">BUILT-UP AREA</div>
              <div className="pp-dm-value">40,266 sq ft</div>
            </div>

            {/* Row 4 — Structure */}
            <div className="pp-dm-row">
              <div className="pp-dm-label">STRUCTURE</div>
              <div className="pp-dm-value">Stilt + 5 floors + additional TDR floor</div>
            </div>

            {/* Row 5 — Homes */}
            <div className="pp-dm-row">
              <div className="pp-dm-label">HOMES</div>
              <div className="pp-dm-value">18 premium 3 BHK residences</div>
            </div>

            {/* Row 6 — Status */}
            <div className="pp-dm-row no-divider">
              <div className="pp-dm-label">STATUS</div>
              <div className="pp-dm-value">Under construction</div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — FLOOR PLANS: THOUGHTFULLY DESIGNED LAYOUTS
          Exact Reference Recreation
          ========================================================================= */}
      <section className="pp-floorplans-section" id="floor-plans">
        <div className="pp-floorplans-container">
          
          {/* Left Column (approx 28%): Eyebrow, Heading, Paragraph, Outlined CTA */}
          <div className="pp-fp-left-col">
            <span className="pp-fp-eyebrow">FLOOR PLANS</span>
            <h2 className="pp-fp-heading">
              Thoughtfully<br />
              Designed Layouts
            </h2>
            <p className="pp-fp-description">
              Choose from our well-planned 3 BHK floor plans, crafted to offer optimal space utilization, natural light and ventilation.
            </p>
            <div className="pp-fp-cta-wrap">
              <button
                type="button"
                className="pp-fp-cta-btn"
                onClick={() => openLightbox('/images/floorplan_type_a.png')}
                aria-label="View Floor Plans in full detail"
              >
                <span>View Floor Plans</span>
                <span className="pp-fp-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Column (approx 72%): Three Horizontal Floor Plan Previews */}
          <div className="pp-fp-right-col">
            
            {/* Preview 1: Type A */}
            <div className="pp-fp-card">
              <div
                className="pp-fp-img-frame"
                onClick={() => openLightbox('/images/floorplan_type_a.png')}
                role="button"
                tabIndex={0}
                aria-label="View Type A floor plan full size"
              >
                <img
                  src="/images/floorplan_type_a.png"
                  alt="Type A 3 BHK Floor Plan - 2,350 sq ft"
                  className="pp-fp-plan-img"
                />
              </div>
              <div className="pp-fp-meta">
                <h3 className="pp-fp-title">Type A</h3>
                <div className="pp-fp-area">2,350 sq ft</div>
              </div>
            </div>

            {/* Preview 2: Type B */}
            <div className="pp-fp-card">
              <div
                className="pp-fp-img-frame"
                onClick={() => openLightbox('/images/floorplan_type_b.png')}
                role="button"
                tabIndex={0}
                aria-label="View Type B floor plan full size"
              >
                <img
                  src="/images/floorplan_type_b.png"
                  alt="Type B 3 BHK Floor Plan - 2,271 sq ft"
                  className="pp-fp-plan-img"
                />
              </div>
              <div className="pp-fp-meta">
                <h3 className="pp-fp-title">Type B</h3>
                <div className="pp-fp-area">2,271 sq ft</div>
              </div>
            </div>

            {/* Preview 3: Type C */}
            <div className="pp-fp-card">
              <div
                className="pp-fp-img-frame"
                onClick={() => openLightbox('/images/floorplan_type_c.png')}
                role="button"
                tabIndex={0}
                aria-label="View Type C floor plan full size"
              >
                <img
                  src="/images/floorplan_type_c.png"
                  alt="Type C 3 BHK Floor Plan - 2,150 sq ft"
                  className="pp-fp-plan-img"
                />
              </div>
              <div className="pp-fp-meta">
                <h3 className="pp-fp-title">Type C</h3>
                <div className="pp-fp-area">2,150 sq ft</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — SPECIFICATIONS: DESIGNED FOR COMFORT & QUALITY
          Exact Reference Recreation
          ========================================================================= */}
      <section className="pp-specifications-section" id="specifications">
        <div className="pp-specifications-container">
          
          {/* Left Column (approx 40%): Large Living Room Interior Image */}
          <div className="pp-sp-left-col">
            <div className="pp-sp-image-wrap">
              <img
                src="/images/specifications_living_room.jpg"
                alt="Uma Sreenivas Lakeshore - Spacious modern living room with panoramic lake view"
                className="pp-sp-img"
              />
            </div>
          </div>

          {/* Right Column (approx 60%): Header & 2-Column Specifications Grid */}
          <div className="pp-sp-right-col">
            
            {/* Header */}
            <div className="pp-sp-header">
              <span className="pp-sp-eyebrow">SPECIFICATIONS</span>
              <h2 className="pp-sp-heading">
                Designed for<br />
                Comfort & Quality
              </h2>
            </div>

            {/* Two-Column Specification Items separated by a thin vertical divider */}
            <div className="pp-sp-grid-wrap">
              
              {/* Left Specification Column (4 items) */}
              <div className="pp-sp-col">
                
                {/* Item 1 — Structure */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="5" width="18" height="23" rx="1.5" />
                      <line x1="12" y1="9" x2="14" y2="9" />
                      <line x1="18" y1="9" x2="20" y2="9" />
                      <line x1="12" y1="14" x2="14" y2="14" />
                      <line x1="18" y1="14" x2="20" y2="14" />
                      <line x1="12" y1="19" x2="14" y2="19" />
                      <line x1="18" y1="19" x2="20" y2="19" />
                      <line x1="14" y1="28" x2="18" y2="28" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Structure</h3>
                    <p className="pp-sp-desc">
                      Stilt + 5 Floors + Additional<br />
                      TDR Floor
                    </p>
                  </div>
                </div>

                {/* Item 2 — Flooring */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="5" width="22" height="22" rx="2" />
                      <line x1="16" y1="5" x2="16" y2="27" />
                      <line x1="5" y1="16" x2="27" y2="16" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Flooring</h3>
                    <p className="pp-sp-desc">
                      Vitrified tiles for living,<br />
                      dining & bedrooms
                    </p>
                  </div>
                </div>

                {/* Item 3 — Kitchen */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="8" width="22" height="17" rx="2" />
                      <line x1="5" y1="14" x2="27" y2="14" />
                      <circle cx="11" cy="19.5" r="2" />
                      <circle cx="21" cy="19.5" r="2" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Kitchen</h3>
                    <p className="pp-sp-desc">
                      Granite platform with<br />
                      SS sink and utility space
                    </p>
                  </div>
                </div>

                {/* Item 4 — Bathrooms */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18 C6 24, 10 25, 16 25 C22 25, 26 24, 26 18 L26 16 H6 Z" />
                      <line x1="8" y1="25" x2="7" y2="28" />
                      <line x1="24" y1="25" x2="25" y2="28" />
                      <path d="M10 16 V8 C10 6.5, 12 5, 14 5 C15.5 5, 16 6, 16 8 V10" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Bathrooms</h3>
                    <p className="pp-sp-desc">
                      Premium sanitary ware<br />
                      and anti-skid tiles
                    </p>
                  </div>
                </div>

              </div>

              {/* Thin Vertical Column Divider */}
              <div className="pp-sp-divider" />

              {/* Right Specification Column (4 items) */}
              <div className="pp-sp-col">
                
                {/* Item 5 — Walls & Paints */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 26 L14 18 L22 26 H6 Z" />
                      <path d="M14 18 L20 12 L26 18" />
                      <rect x="5" y="6" width="22" height="20" rx="2" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Walls & Paints</h3>
                    <p className="pp-sp-desc">
                      Internal: Putty finish<br />
                      External: Weather proof paint
                    </p>
                  </div>
                </div>

                {/* Item 6 — Doors & Windows */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="6" width="10" height="20" rx="1" />
                      <circle cx="12" cy="16" r="1" fill="#748779" />
                      <rect x="17" y="6" width="10" height="13" rx="1" />
                      <line x1="22" y1="6" x2="22" y2="19" />
                      <line x1="17" y1="12.5" x2="27" y2="12.5" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Doors & Windows</h3>
                    <p className="pp-sp-desc">
                      Main door: Wooden frame<br />
                      Internal: Flush doors<br />
                      Windows: Aluminium / UPVC
                    </p>
                  </div>
                </div>

                {/* Item 7 — Power Backup */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="17 4 7 17 15 17 13 28 25 13 17 13 17 4" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Power Backup</h3>
                    <p className="pp-sp-desc">
                      24x7 DG backup for common<br />
                      areas & lifts
                    </p>
                  </div>
                </div>

                {/* Item 8 — Security */}
                <div className="pp-sp-item">
                  <div className="pp-sp-icon-wrap">
                    <svg className="pp-sp-icon" viewBox="0 0 32 32" fill="none" stroke="#748779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4 L6 8 V16 C6 22.5, 10.5 27, 16 28 C21.5 27, 26 22.5, 26 16 V8 Z" />
                      <path d="M12 15 L15 18 L21 12" />
                    </svg>
                  </div>
                  <div className="pp-sp-content">
                    <h3 className="pp-sp-title">Security</h3>
                    <p className="pp-sp-desc">
                      CCTV, intercom and<br />
                      24x7 security
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Reusable Footer Section */}
      <ContactSection />

    </div>
  );
};

export default ProjectPage;
