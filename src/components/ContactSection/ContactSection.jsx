import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ctx = gsap.context(() => {
      
      if (!prefersReducedMotion) {
        // Parallax for giant STHIRA watermark
        gsap.fromTo('.c-watermark',
          { y: 80 },
          { 
            y: -40, 
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );

        // Content reveal
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true
          }
        });

        tl.fromTo('.c-headline-line',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out" },
          0
        );

        tl.fromTo('.c-info-col',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
          0.4
        );

        tl.fromTo('.c-cta-wrapper',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          0.6
        );

        tl.fromTo('.c-footer-bottom-wrapper',
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "none" },
          1
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="contact-section" id="contact" ref={sectionRef}>
      
      {/* GIANT WATERMARK */}
      <div className="c-watermark" aria-hidden="true">
        STHIRA
      </div>

      <div className="contact-container">
        
        <div className="c-top-grid">
          <div className="c-headline-container">
            <h2 className="c-headline">
              <span className="c-headline-line">LET'S BUILD</span>
              <span className="c-headline-line">SOMETHING</span>
              <span className="c-headline-line">LASTING.</span>
            </h2>
          </div>

          <div className="c-nav-col">
            {/* Nav or social on desktop right side */}
          </div>
        </div>

        <div className="c-middle-grid">
          <div className="c-info-col">
            <h4 className="c-label">INQUIRIES</h4>
            <a href="mailto:sthiraaxisinfra@gmail.com" className="c-link">sthiraaxisinfra@gmail.com</a>
            <a href="tel:+919966196969" className="c-link">+91 9966 196 969</a>
          </div>

          <div className="c-info-col">
            <h4 className="c-label">HEADQUARTERS</h4>
            <p className="c-text">
              Sthira Axis Infra LLP<br />
              RV Panchajanya Road, Masjid Banda,<br />
              Kondapur, Hyderabad – 500 084
            </p>
          </div>
          
          <div className="c-info-col c-nav-links-col">
            <h4 className="c-label">NAVIGATION</h4>
            <nav className="c-nav-list">
              <Link to="/projects/uma-sreenivas-lakeshore">PROJECTS</Link>
              <Link to="/philosophy">PHILOSOPHY</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </div>

          <div className="c-cta-wrapper">
            <Link to="/contact" className="c-premium-cta">
              <span className="cta-text">START A CONVERSATION</span>
              <ArrowUpRight className="cta-arrow" size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="c-footer-bottom-wrapper">
          <div className="c-footer-line"></div>
          <div className="c-footer-bottom">
            <div className="c-copy">© {new Date().getFullYear()} STHIRA AXIS INFRA LLP. ALL RIGHTS RESERVED.</div>
            <div className="c-legal-links">
              <a href="#privacy">PRIVACY POLICY</a>
              <a href="#terms">TERMS OF USE</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
