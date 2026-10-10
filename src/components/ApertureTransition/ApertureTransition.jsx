import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ApertureTransition.css';

gsap.registerPlugin(ScrollTrigger);

const ApertureTransition = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  
  const text1Ref = useRef(null);
  const text2LeftRef = useRef(null);
  const text2RightRef = useRef(null);
  const text3Ref = useRef(null);
  const typographyRef = useRef(null);

  useLayoutEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      
      // 1. Entrance Animation (Fades in as the section scrolls into view, BEFORE pinning)
      gsap.fromTo([text1Ref.current, text2LeftRef.current, text2RightRef.current, text3Ref.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // Trigger when top of section is 75% down the viewport
          }
        }
      );

      // 2. Pinned Separation Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=60%", // Short scrub distance for separation
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Typography Separation
      tl.to(text1Ref.current, { x: "-=4vw", duration: 1, ease: "power1.inOut" }, 0)
        .to(text2LeftRef.current, { x: "-=3vw", duration: 1, ease: "power1.inOut" }, 0)
        .to(text2RightRef.current, { x: "+=3vw", duration: 1, ease: "power1.inOut" }, 0)
        .to(text3Ref.current, { x: "+=4vw", duration: 1, ease: "power1.inOut" }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="aperture-scroll-container" id="transition-section" ref={containerRef}>
      <div className="aperture-sticky" ref={stickyRef}>
        {/* Typography */}
        <div className="aperture-typography">
          
          <div className="aperture-text-content">
            <div className="ap-line ap-line1" ref={text1Ref}>WHAT WE BUILD</div>
            
            <div className="ap-line ap-line2">
              <div className="ap-word-left" ref={text2LeftRef}>STARTS</div>
              <div className="ap-word-right" ref={text2RightRef}>WITH</div>
            </div>
            
            <div className="ap-line ap-line3" ref={text3Ref}>HOW WE BUILD.</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApertureTransition;
