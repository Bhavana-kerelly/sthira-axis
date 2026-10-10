import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './PortfolioSection.css';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const imageBackRef = useRef(null);
  const imageBackTwoRef = useRef(null);
  const projectInfoRef = useRef(null);
  const headlineRef = useRef(null);
  const blueprintRef = useRef(null);
  const measurementsRef = useRef([]);
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    let cleanupMouse = null;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;



      /*
       * INITIAL 3D STATE
       */

      gsap.set(sceneRef.current, {
        transformPerspective: 1800,
        transformStyle: 'preserve-3d',
      });

      gsap.set(imageWrapRef.current, {
        transformPerspective: 1800,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 50%',
      });

      gsap.set(imageRef.current, {
        scale: 1.25,
        transformOrigin: '50% 50%',
      });

      gsap.set(imageBackRef.current, {
        scale: 0.94,
        x: -45,
        z: -180,
        rotateY: 8,
        opacity: 0.35,
      });

      gsap.set(imageBackTwoRef.current, {
        scale: 0.88,
        x: -85,
        z: -320,
        rotateY: 14,
        opacity: 0.18,
      });

      gsap.set(projectInfoRef.current, {
        z: 120,
        opacity: 0,
        x: -80,
      });

      gsap.set(headlineRef.current.children, {
        y: 80,
        opacity: 0,
        rotateX: 25,
      });



      /*
       * MAIN SCROLL TIMELINE
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=400%' : '+=550%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ------------------------------------------
       * PHASE 1
       * HEADLINE ENTERS FROM DEPTH
       * ------------------------------------------
       */

      tl.to(
        headlineRef.current.children,
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.12,
          duration: 1,
          ease: 'power4.out',
        },
        0
      );

      /*
       * Blueprint grid starts moving.
       */

      tl.to(
        blueprintRef.current,
        {
          scale: 1.2,
          xPercent: -10,
          yPercent: 8,
          rotateZ: 2,
          duration: 5,
          ease: 'none',
        },
        0
      );

      /*
       * ------------------------------------------
       * PHASE 2
       * IMAGE COMES OUT OF THE SCREEN
       * ------------------------------------------
       */

      tl.fromTo(
        imageWrapRef.current,
        {
          scale: 0.55,
          z: -800,
          rotateY: 42,
          rotateX: 12,
          xPercent: 25,
          opacity: 0,
        },
        {
          scale: 0.82,
          z: 100,
          rotateY: 8,
          rotateX: 3,
          xPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.7
      );

      /*
       * Image zoom.
       */

      tl.to(
        imageRef.current,
        {
          scale: 1.03,
          duration: 1.8,
          ease: 'power2.out',
        },
        0.7
      );

      /*
       * ------------------------------------------
       * DEPTH LAYERS
       * ------------------------------------------
       */

      tl.to(
        imageBackRef.current,
        {
          x: -25,
          z: -90,
          rotateY: 4,
          opacity: 0.48,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.9
      );

      tl.to(
        imageBackTwoRef.current,
        {
          x: -50,
          z: -180,
          rotateY: 7,
          opacity: 0.28,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.9
      );

      /*
       * ------------------------------------------
       * PROJECT NUMBER
       * ------------------------------------------
       */

      tl.fromTo(
        numberRef.current,
        {
          opacity: 0,
          scale: 0.7,
          z: -500,
          xPercent: 15,
        },
        {
          opacity: 1,
          scale: 1,
          z: -100,
          xPercent: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.8
      );

      tl.to(
        numberRef.current,
        {
          xPercent: -18,
          scale: 1.15,
          z: -250,
          duration: 2,
          ease: 'none',
        },
        2
      );

      /*
       * ------------------------------------------
       * PROJECT INFO ENTERS THROUGH DEPTH
       * ------------------------------------------
       */

      tl.to(
        projectInfoRef.current,
        {
          opacity: 1,
          x: 0,
          z: 100,
          duration: 1.2,
          ease: 'power3.out',
        },
        1.7
      );

      /*
       * Project title.
       */

      const infoElements =
        projectInfoRef.current.querySelectorAll(
          '.port-info-animate'
        );

      gsap.set(infoElements, {
        opacity: 0,
        y: 35,
      });

      tl.to(
        infoElements,
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
        },
        2
      );



      /*
       * ------------------------------------------
       * CINEMATIC CAMERA MOVE
       * ------------------------------------------
       */

      tl.to(
        sceneRef.current,
        {
          rotateY: isMobile ? 0 : -4,
          rotateX: isMobile ? 0 : 2,
          scale: 1.03,
          duration: 2,
          ease: 'none',
        },
        2
      );

      /*
       * ------------------------------------------
       * IMAGE PUSH
       * ------------------------------------------
       */

      tl.to(
        imageWrapRef.current,
        {
          scale: 1,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 1.8,
          ease: 'power2.inOut',
        },
        2.5
      );

      tl.to(
        imageRef.current,
        {
          scale: 1.05,
          duration: 1.8,
          ease: 'power2.out',
        },
        2.5
      );

      /* No more FINAL HERO PUSH that zooms into the text */

      /*
       * ------------------------------------------
       * PROGRESS
       * ------------------------------------------
       */

      if (progressRef.current) {
        tl.to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 5.2,
            ease: 'none',
          },
          0
        );
      }

      /*
       * ------------------------------------------
       * MOUSE 3D PARALLAX
       * ------------------------------------------
       */

      const handleMouseMove = (event) => {
        if (window.innerWidth < 900) return;

        const rect = section.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(sceneRef.current, {
          rotateY: x * 5,
          rotateX: y * -3,
          duration: 1.2,
          ease: 'power3.out',
          overwrite: 'auto',
        });

        gsap.to(imageWrapRef.current, {
          x: x * 18,
          y: y * 12,
          duration: 1,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      section.addEventListener(
        'mousemove',
        handleMouseMove
      );

      cleanupMouse = () => {
        section.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };

      /*
       * ------------------------------------------
       * MAGNETIC CTA
       * ------------------------------------------
       */

      const cta = section.querySelector('.port-cta');

      if (cta && window.innerWidth > 900) {
        const handleCtaMove = (event) => {
          const rect = cta.getBoundingClientRect();

          const x =
            event.clientX -
            (rect.left + rect.width / 2);

          const y =
            event.clientY -
            (rect.top + rect.height / 2);

          gsap.to(cta, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.4,
            ease: 'power3.out',
          });
        };

        const handleCtaLeave = () => {
          gsap.to(cta, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.35)',
          });
        };

        cta.addEventListener(
          'mousemove',
          handleCtaMove
        );

        cta.addEventListener(
          'mouseleave',
          handleCtaLeave
        );

        const previousCleanup = cleanupMouse;

        cleanupMouse = () => {
          previousCleanup?.();

          cta.removeEventListener(
            'mousemove',
            handleCtaMove
          );

          cta.removeEventListener(
            'mouseleave',
            handleCtaLeave
          );
        };
      }
    }, sectionRef);

    return () => {
      cleanupMouse?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="portfolio-section"
      id="portfolio"
      ref={sectionRef}
    >
      {/* BACKGROUND */}
      <div className="portfolio-background">
        <div className="portfolio-vignette" />

        <div
          className="portfolio-blueprint"
          ref={blueprintRef}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="portfolio-noise" />
      </div>

      {/* TOP LABEL */}
      <div className="portfolio-topbar">
        <span>07 / WHAT WE BUILD</span>

        <span className="portfolio-status">
          <i />
          SELECTED PROJECT
        </span>
      </div>

      {/* MAIN 3D SCENE */}
      <div
        className="portfolio-scene"
        ref={sceneRef}
      >
        {/* HUGE PROJECT NUMBER */}
        <div
          className="portfolio-project-number"
          ref={numberRef}
        >
          01
        </div>

        {/* LEFT COLUMN: HEADLINE + INFO */}
        <div className="portfolio-left-column">
          {/* HEADLINE */}
          <div
            className="port-headline"
            ref={headlineRef}
          >
            <span className="port-headline-line">
              FROM PRINCIPLE
            </span>

            <span className="port-headline-line">
              TO PLACE.
            </span>
          </div>

          {/* PROJECT INFORMATION */}
          <div
            className="port-project-info"
            ref={projectInfoRef}
          >
            <div className="port-sub-label port-info-animate">
              AN EXPRESSION OF THE STHIRA APPROACH
            </div>

            <h3 className="port-project-name port-info-animate">
              UMA SREENIVAS
              <br />
              LAKESHORE
            </h3>

            <p className="port-project-desc port-info-animate">
              "Designed around its setting, considered
              proportions and the experience of living."
            </p>

            <div className="port-metadata port-info-animate">
              <span>18 PREMIUM RESIDENCES</span>

              <span className="port-dot">·</span>

              <span>3 BHK</span>

              <span className="port-dot">·</span>

              <span>KONDAPUR · HYDERABAD</span>
            </div>

            <Link
              to="/projects/uma-sreenivas-lakeshore"
              className="port-cta port-info-animate"
            >
              <span>EXPLORE PROJECT</span>

              <svg
                className="arrow"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M11 0L9.6 1.4L13.2 5H0V7H13.2L9.6 10.6L11 12L18 6L11 0Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div> {/* END LEFT COLUMN */}

        {/* IMAGE DEPTH STACK */}
        <div className="portfolio-image-stack">
          <div
            className="portfolio-image-depth depth-two"
            ref={imageBackTwoRef}
          >
            <img
              src="/images/uma_sreenivas_lakeshore.jpg"
              alt=""
            />
          </div>

          <div
            className="portfolio-image-depth depth-one"
            ref={imageBackRef}
          >
            <img
              src="/images/uma_sreenivas_lakeshore.jpg"
              alt=""
            />
          </div>

          {/* MAIN IMAGE */}
          <div
            className="port-img-container"
            ref={imageWrapRef}
          >
            <div className="port-image-shine" />

            <img
              src="/images/uma_sreenivas_lakeshore.jpg"
              alt="Uma Sreenivas Lakeshore"
              className="port-img"
              ref={imageRef}
            />

            <div className="port-image-overlay" />

            {/* CORNERS */}
            <div className="image-corner image-corner-tl" />
            <div className="image-corner image-corner-tr" />
            <div className="image-corner image-corner-bl" />
            <div className="image-corner image-corner-br" />
          </div>
        </div>




      </div>

      {/* BOTTOM */}
      <div className="portfolio-bottom">
        <span>ARCHITECTURE / RESIDENTIAL</span>

        <span>
          SCROLL TO EXPLORE
          <b>↓</b>
        </span>
      </div>

      {/* PROGRESS */}
      <div className="portfolio-progress">
        <div
          className="portfolio-progress-bar"
          ref={progressRef}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;