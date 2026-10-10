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

      // 2. Lake Story Horizontal Parallax
      gsap.fromTo('.pp-lake-img-inner',
        { x: '-10%' },
        { 
          x: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.pp-lake-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      // 3. Stats Fade Up
      gsap.fromTo('.pp-stat-item',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pp-stats-section',
            start: 'top 75%'
          }
        }
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
          <img src="/images/uma_sreenivas_lakeshore.jpg" alt="Uma Sreenivas Lakeshore" className="pp-hero-img-inner" />
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

      {/* 2. PROJECT INTRODUCTION */}
      <section className="pp-intro">
        <div className="pp-intro-container">
          <h2 className="pp-intro-statement">
            A landmark residential development on RV Panchajanya Road, Kondapur — where every window frames a story of water, trees, and sky.
          </h2>
          <p className="pp-intro-sub">
            Designed for those who refuse to compromise on what surrounds them.
          </p>
        </div>
      </section>

      {/* 3. THE ADDRESS */}
      <section className="pp-address">
        <div className="pp-address-grid">
          <div className="pp-address-info">
            <h3 className="pp-section-label">THE ADDRESS</h3>
            <div className="pp-address-text">
              RV Panchajanya Road,<br/>
              Masjid Banda,<br/>
              Kondapur,<br/>
              Hyderabad
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="pp-map-link">
              VIEW ON GOOGLE MAPS <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="pp-address-visual">
             {/* Using styling to create an abstract map/location feel */}
             <div className="pp-abstract-map">
                <div className="pp-map-pin">PROJECT CENTER</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE: LAKE / FOREST / TRAFFIC */}
      <section className="pp-experience" id="experience">
        
        {/* LAKE */}
        <div className="pp-exp-block pp-lake-section">
          <div className="pp-exp-visual">
            <div className="pp-lake-img-wrapper">
              <img src="/images/uma_sreenivas_lakeshore.jpg" alt="Lake View" className="pp-lake-img-inner" style={{filter: 'grayscale(30%)'}} />
            </div>
          </div>
          <div className="pp-exp-content">
            <h3 className="pp-exp-title">PERMANENT<br/>LAKE VIEW</h3>
            <p className="pp-exp-desc">
              Masjid Banda lake sits permanently in your sightline — an uninterrupted, protected water body that will never be built over.
            </p>
          </div>
        </div>

        {/* FOREST */}
        <div className="pp-exp-block pp-exp-reverse pp-forest-section">
          <div className="pp-exp-visual">
             <div className="pp-forest-box"></div>
          </div>
          <div className="pp-exp-content">
            <h3 className="pp-exp-title">FOREST<br/>AMBIENCE</h3>
            <p className="pp-exp-desc">
              Dense tree cover delivers a Bangalore Indiranagar feel — right in Hyderabad. Birdsong, cool air, and natural shade are presented as part of the everyday environment.
            </p>
          </div>
        </div>

        {/* TRAFFIC & FOOTPATHS */}
        <div className="pp-exp-text-blocks">
          <div className="pp-text-block">
            <h3 className="pp-exp-title">ZERO TRAFFIC STRESS</h3>
            <p className="pp-exp-desc">
              RV Panchajanya Road has minimal through-traffic and a calmer movement pattern.
            </p>
          </div>
          <div className="pp-text-block">
            <h3 className="pp-exp-title">UNINTERRUPTED FOOTPATHS</h3>
            <p className="pp-exp-desc">
              Continuous, encroachment-free footpaths ensure walkable, stress-free immediate surroundings.
            </p>
            <div className="pp-footpath-line"></div>
          </div>
        </div>

      </section>

      {/* 5. PROJECT NUMBERS */}
      <section className="pp-stats-section">
        <div className="pp-stats-grid">
          <div className="pp-stat-item">
            <div className="pp-stat-num">18</div>
            <div className="pp-stat-label">PREMIUM RESIDENCES</div>
          </div>
          <div className="pp-stat-item">
            <div className="pp-stat-num">3 BHK</div>
            <div className="pp-stat-label">CONFIGURATION</div>
          </div>
          <div className="pp-stat-item">
            <div className="pp-stat-num">6</div>
            <div className="pp-stat-label">FLOORS</div>
          </div>
          <div className="pp-stat-item">
            <div className="pp-stat-num">40,266</div>
            <div className="pp-stat-label">SQ. FT. BUILT-UP AREA</div>
          </div>
          <div className="pp-stat-item">
            <div className="pp-stat-num">968.75</div>
            <div className="pp-stat-label">SQ. MTRS. LAND AREA</div>
          </div>
          <div className="pp-stat-item">
            <div className="pp-stat-num">40</div>
            <div className="pp-stat-label">CAR PARKS</div>
          </div>
        </div>
      </section>

      {/* 6. RESIDENCES */}
      <section className="pp-residences" id="residences">
        <div className="pp-res-container">
          <div className="pp-res-header">
            <h3 className="pp-section-label">THE RESIDENCES</h3>
            <h2 className="pp-res-title">THREE WAYS OF LIVING.</h2>
          </div>
          
          <div className="pp-res-interactive">
            <div className="pp-res-selector">
              {Object.keys(typeDetails).map(type => (
                <button 
                  key={type}
                  className={`pp-res-btn ${activeType === type ? 'active' : ''}`}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="pp-res-display">
              <div className="pp-res-data">
                <div className="pp-res-data-item">
                  <span className="label">TOTAL AREA</span>
                  <span className="value">{typeDetails[activeType].area}</span>
                </div>
                <div className="pp-res-data-item">
                  <span className="label">CONFIGURATION</span>
                  <span className="value">{typeDetails[activeType].config}</span>
                </div>
                <div className="pp-res-data-item">
                  <span className="label">FACING</span>
                  <span className="value">{typeDetails[activeType].facing}</span>
                </div>
                <div className="pp-res-data-item">
                  <span className="label">PLINTH AREA</span>
                  <span className="value">{typeDetails[activeType].plinth}</span>
                </div>
                <div className="pp-res-data-item">
                  <span className="label">COMMON AREA</span>
                  <span className="value">{typeDetails[activeType].common}</span>
                </div>
              </div>
              <div className="pp-res-floorplan-placeholder">
                <div className="fp-text">FLOOR PLAN ASSET ({activeType})</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIFICATIONS */}
      <section className="pp-specs" id="specifications">
        <div className="pp-specs-container">
          <h2 className="pp-specs-title">PROJECT SPECIFICATIONS</h2>
          
          <div className="pp-specs-table">
            <div className="pp-spec-row">
              <div className="pp-spec-key">Project Name</div>
              <div className="pp-spec-val">Uma Sreenivas Lakeshore</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Location</div>
              <div className="pp-spec-val">RV Panchajanya Rd, Masjid Banda, Kondapur, Hyderabad</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Survey Number</div>
              <div className="pp-spec-val">Sy. No. 185 (Part), Kondapur Village</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Total Land Area</div>
              <div className="pp-spec-val">1158.80 Sq. Yds / 968.75 Sq. Mtrs</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Structure</div>
              <div className="pp-spec-val">Stilt + 5 Floors + Additional TDR Floor</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Total Built-Up Area</div>
              <div className="pp-spec-val">40,266 Sq. Ft. (6,711 Sq. Ft. &times; 6 Floors)</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Total Units</div>
              <div className="pp-spec-val">18 Premium Residences (3 per floor &times; 6 floors)</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Construction Type</div>
              <div className="pp-spec-val">RCC Framed — Proposed Beams & Structures</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">GHMC Permit No.</div>
              <div className="pp-spec-val">2464/GHMC/SWBP/SLP2/2026 &middot; 02/01/2026</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Jurisdiction</div>
              <div className="pp-spec-val">GHMC, Serilingampally Mandal, R.R. District</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Parking</div>
              <div className="pp-spec-val">40 Car Parks — Dedicated Cellar + Stilt</div>
            </div>
            <div className="pp-spec-row">
              <div className="pp-spec-key">Construction Status</div>
              <div className="pp-spec-val">Under Construction — Commenced 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CRAFTED TO LAST (MATERIALS) */}
      <section className="pp-materials">
        <div className="pp-materials-inner">
          <h3 className="pp-section-label">CRAFTED TO LAST</h3>
          <h2 className="pp-materials-title">THE DETAILS OF BUILDING.</h2>
          <div className="pp-mat-grid">
            <span>RCC construction</span>
            <span>Vitrified flooring</span>
            <span>Granite kitchen platforms</span>
            <span>UPVC windows</span>
            <span>Teak-frame main doors</span>
            <span>Concealed copper wiring</span>
            <span>Branded sanitary fittings</span>
            <span>Common overhead tank</span>
            <span>Sump</span>
            <span>Lift</span>
            <span>Generator backup</span>
          </div>
        </div>
      </section>

      {/* 9. ENQUIRY CTA */}
      <section className="pp-enquiry">
        <div className="pp-enq-content">
          <h2 className="pp-enq-title">LET'S TALK ABOUT<br/>UMA SREENIVAS LAKESHORE.</h2>
          <p className="pp-enq-desc">
            Whether you would like to understand the residences, the project, or arrange a conversation with Sthira Axis Infra, we would love to hear from you.
          </p>
          <div className="pp-enq-contact">
            <div>PHONE: +91 9966 196 969</div>
            <div>EMAIL: sthiraaxisinfra@gmail.com</div>
          </div>
          <button className="pp-enq-btn">
            ENQUIRE ABOUT THE PROJECT <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* 10. HOMEPAGE FOOTER / CONTACT SECTION */}
      <ContactSection />

    </div>
  );
};

export default ProjectPage;
