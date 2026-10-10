import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LookingAheadSection.css';

gsap.registerPlugin(ScrollTrigger);

const LookingAheadSection = () => {
  const sectionRef = useRef(null);
  
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Parallax effect on the background image
      tl.fromTo('.la-bg-img',
        { y: '-10%' },
        { y: '10%', ease: "none" }
      );

      // Scroll-triggered reveal
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true
        }
      });

      revealTl.fromTo('.la-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0
      );

      revealTl.fromTo('.la-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0.2
      );

      revealTl.fromTo('.la-line',
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: "power3.inOut", transformOrigin: "top" },
        0.5
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="looking-ahead-section" id="future" ref={sectionRef}>
      <div className="la-bg">
        <img src="/images/future_vision.jpg" alt="Future Vision" className="la-bg-img" />
        <div className="la-bg-overlay"></div>
      </div>
      
      <div className="la-content">
        <div className="la-label">08 / LOOKING AHEAD</div>
        <h2 className="la-headline">
          THE NEXT ADDRESS<br />
          IS ALREADY<br />
          TAKING SHAPE.
        </h2>
        <div className="la-line-container">
          <div className="la-line"></div>
        </div>
      </div>
    </section>
  );
};

export default LookingAheadSection;
