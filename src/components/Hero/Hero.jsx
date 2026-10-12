import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textContainerRef = useRef(null);
  const lineArtRef = useRef(null);
  
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let minTimerDone = false;
    let metaDone = false;

    const timer = setTimeout(() => {
      minTimerDone = true;
      if (metaDone) {
        setIsVideoLoaded(true);
      }
    }, 2000);

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      metaDone = true;
      if (minTimerDone) {
        setIsVideoLoaded(true);
      }
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      clearTimeout(timer);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isVideoLoaded || !videoDuration || prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const video = videoRef.current;
      const textEls = textContainerRef.current.children;
      const lineArt = lineArtRef.current;

      let targetTime = 0;
      let currentTime = 0;

      const updateVideoTime = () => {
        if (!video || !video.duration || !Number.isFinite(video.duration)) return;

        currentTime += (targetTime - currentTime) * 0.12;

        if (Math.abs(targetTime - currentTime) < 0.01) {
          currentTime = targetTime;
        }

        if (Math.abs(video.currentTime - currentTime) > 0.05) {
          if (!video.seeking) {
            video.currentTime = currentTime;
          }
        }
      };

      gsap.ticker.add(updateVideoTime);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=600%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            targetTime = self.progress * videoDuration;
          }
        }
      });

      tl.to({}, { duration: 1 }, 0);

      const eyebrow = textEls[0];
      const headlinesWrapper = textEls[1];
      const hg1 = headlinesWrapper.children[0];
      const hg2 = headlinesWrapper.children[1];
      const support = textEls[2];
      const ctas = textEls[3];

      gsap.set(eyebrow, { opacity: 0, y: 20 });
      gsap.set(hg1, { opacity: 0, y: 30 });
      gsap.set(hg2, { opacity: 0, y: 30 });
      
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' }, 0.1);
      tl.to(hg1, { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' }, 0.15);
      tl.to(hg1, { opacity: 0, y: -20, duration: 0.15, ease: 'power1.in' }, 0.35);
      tl.to(hg2, { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' }, 0.45);
      tl.to(support, { opacity: 1, y: 0, duration: 0.1, ease: 'power1.out' }, 0.6);
      tl.to(ctas, { opacity: 1, y: 0, duration: 0.1, ease: 'power1.out' }, 0.65);

      tl.fromTo(lineArt, 
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.3, ease: 'power1.inOut' }, 
        0.6
      );
      tl.to(lineArt, { opacity: 0, duration: 0.1 }, 0.95);

      gsap.to('.scroll-indicator', {
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=10%',
          scrub: true,
        },
        opacity: 0,
      });

      // FIX: Since this component loads late (after video metadata), 
      // its ScrollTrigger is created after downstream components. 
      // We MUST sort and refresh to fix the DOM structure disturbance!
      setTimeout(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      }, 50);

      return () => {
        gsap.ticker.remove(updateVideoTime);
      };
    }, containerRef); // scope to container

    return () => ctx.revert();
  }, [isVideoLoaded, videoDuration, prefersReducedMotion]);

  return (
    <>
      {!isVideoLoaded && (
        <div className="hero-loading">
          <img 
            src="/images/logo.png" 
            alt="Sthira Axis Infra" 
            className="loading-logo-img" 
          />
        </div>
      )}
      <section className="hero-container" ref={containerRef}>
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="hero-video"
            src="/videos/uma-lakeshore-hero.mp4"
            muted
            playsInline
            preload="auto"
            autoPlay={prefersReducedMotion}
            loop={prefersReducedMotion}
          />
          <div className="video-overlay-gradient"></div>
        </div>

        <div className="hero-content" ref={textContainerRef}>
          <div className="hero-eyebrow">01 / OVERVIEW</div>
          <div className="hero-headlines-wrapper">
             <div className="headline-group headline-group-1">
               <h1 className="hero-title-part1">BUILT WITH</h1>
               <h1 className="hero-title-part2">INTENTION.</h1>
             </div>
             <div className="headline-group headline-group-2">
               <h1 className="hero-title-part1">DESIGNED TO</h1>
               <h1 className="hero-title-part2">ENDURE.</h1>
             </div>
          </div>
          <div className="hero-support">Thoughtfully creating spaces where architecture, quality and a sense of place come together.</div>
          <div className="hero-ctas">
            <a href="#discover" className="hero-cta-primary">DISCOVER STHIRA</a>
            <Link to="/projects/uma-sreenivas-lakeshore" className="hero-cta-secondary">EXPLORE OUR PROJECTS</Link>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-line"></div>
        </div>

        <svg className="architectural-lineart" ref={lineArtRef} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Subtle abstract architectural contour */}
          <path 
            d="M 100 800 L 100 300 L 400 300 L 400 150 L 900 150 L 900 800" 
            fill="none" 
            stroke="var(--color-ivory)" 
            strokeWidth="2" 
            strokeDasharray="1000"
            strokeDashoffset="1000"
            opacity="0"
          />
          <path 
            d="M 150 800 L 150 350 L 350 350" 
            fill="none" 
            stroke="var(--color-ivory)" 
            strokeWidth="1" 
            strokeDasharray="1000"
            strokeDashoffset="1000"
            opacity="0"
          />
        </svg>
      </section>
    </>
  );
};

export default Hero;
