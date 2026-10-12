
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ApproachSection.css';

gsap.registerPlugin(ScrollTrigger);

const ApproachSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const headlineRef = useRef(null);
  const backgroundRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      const isMobile = window.innerWidth < 768;

      /*
       * Initial 3D states
       */
      gsap.set(containerRef.current, {
        perspective: 1800,
      });

      gsap.set(headlineRef.current, {
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      });

      gsap.set(headlineRef.current.children, {
        opacity: 0,
        x: -60,
      });

      gsap.set(cards, {
        opacity: 0,
        x: 180,
        z: -500,
        rotateY: 35,
        rotateX: 8,
        scale: 0.75,
      });

      /*
       * Main pinned timeline
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=350%' : '+=500%',
          pin: true,
          scrub: 1.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ---------------------------------------
       * BACKGROUND MOVEMENT
       * ---------------------------------------
       */

      tl.to(
        backgroundRef.current,
        {
          scale: 1.12,
          xPercent: -4,
          yPercent: 3,
          duration: 6,
          ease: 'none',
        },
        0
      );

      /*
       * ---------------------------------------
       * LEFT HEADLINE ENTERS
       * ---------------------------------------
       */

      tl.to(
        headlineRef.current.children,
        {
          opacity: 1,
          x: 0,
          stagger: 0.16,
          duration: 1.4,
          ease: 'power4.out',
        },
        0
      );

      /*
       * ---------------------------------------
       * CARDS ENTER FROM DEPTH
       * ---------------------------------------
       */

      tl.to(
        cards,
        {
          opacity: 1,
          x: 0,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          stagger: 0.18,
          duration: 1.7,
          ease: 'power4.out',
        },
        0.45
      );

      /*
       * ---------------------------------------
       * CARD DEPTH / FLOATING MOTION
       * ---------------------------------------
       */

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1;

        tl.to(
          card,
          {
            y: direction * 12,
            rotateX: direction * 2,
            duration: 1.5,
            ease: 'sine.inOut',
          },
          1.8 + index * 0.08
        );
      });

      /*
       * ---------------------------------------
       * HORIZONTAL CARD MOVEMENT
       * ---------------------------------------
       */

      if (!isMobile) {
        tl.to(
          trackRef.current,
          {
            xPercent: -48,
            duration: 4.5,
            ease: 'none',
          },
          2.2
        );
      } else {
        tl.to(
          trackRef.current,
          {
            xPercent: -72,
            duration: 4,
            ease: 'none',
          },
          2.2
        );
      }

      /*
       * ---------------------------------------
       * 3D CARD ROTATION WHILE SCROLLING
       * ---------------------------------------
       */

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            rotateY: index % 2 === 0 ? -7 : 7,
            rotateX: 2,
            z: 60,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          2.4 + index * 0.25
        );
      });

      /*
       * ---------------------------------------
       * HEADLINE SLIGHT PARALLAX
       * ---------------------------------------
       */

      tl.to(
        headlineRef.current,
        {
          x: -25,
          duration: 4,
          ease: 'none',
        },
        2
      );

      /*
       * ---------------------------------------
       * FINAL DEPTH PUSH
       * ---------------------------------------
       */

      tl.to(
        cards,
        {
          z: 120,
          scale: 1.04,
          duration: 1.3,
          ease: 'power2.inOut',
        },
        5
      );

      /*
       * ---------------------------------------
       * PROGRESS LINE
       * ---------------------------------------
       */

      if (progressRef.current) {
        tl.to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 6,
            ease: 'none',
          },
          0
        );
      }

      /*
       * ---------------------------------------
       * MOUSE 3D PARALLAX
       * ---------------------------------------
       */

      const section = containerRef.current;

      const handleMouseMove = (event) => {
        if (window.innerWidth < 900) return;

        const rect = section.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) / rect.width - 0.5;

        const y =
          (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(headlineRef.current, {
          rotateY: x * 4,
          rotateX: y * -2,
          x: x * -12,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: 'auto',
        });

        cards.forEach((card, index) => {
          const strength = 7 + index * 2;

          gsap.to(card, {
            rotateY: x * strength,
            rotateX: y * -strength * 0.45,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        });
      };

      section.addEventListener('mousemove', handleMouseMove);

      /*
       * Cleanup
       */
      return () => {
        section.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="approach-section"
      id="approach"
      ref={containerRef}
    >
      {/* BACKGROUND */}
      <div className="approach-bg">
        <img
          ref={backgroundRef}
          src="/images/material_texture.jpg"
          alt=""
          className="approach-bg-img"
        />

        <div className="approach-bg-overlay" />

        <div className="approach-grid" />
        <div className="approach-glow approach-glow-one" />
        <div className="approach-glow approach-glow-two" />
      </div>

      {/* MAIN CONTENT */}
      <div className="approach-content">

        {/* LEFT SIDE */}
        <div
          className="approach-header"
          ref={headlineRef}
        >
          <div className="approach-label">
            05 / THE APPROACH
          </div>

          <h2 className="approach-headline">
            <span>HOW WE BUILD</span>
            <span>MATTERS.</span>
          </h2>

          <p className="approach-subhead">
            Not only what we build.
          </p>

          <div className="approach-side-line">
            <span />
            <small>DESIGN / CRAFT / PLACE</small>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="approach-track-container">
          <div
            className="approach-track"
            ref={trackRef}
          >
            {/* CARD 01 */}
            <article
              className="approach-panel"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <div className="approach-card">
                <div className="card-number">01</div>

                <div className="card-top">
                  <span className="ac-title">
                    CONTEXT
                  </span>

                  <span className="card-index">
                    01 / 04
                  </span>
                </div>

                <div className="ac-line" />

                <p className="ac-desc">
                  Every project begins
                  <br />
                  with understanding
                  <br />
                  where it belongs.
                </p>

                <div className="card-bottom">
                  <span>01</span>
                  <span>PLACE</span>
                </div>
              </div>
            </article>

            {/* CARD 02 */}
            <article
              className="approach-panel"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <div className="approach-card">
                <div className="card-number">02</div>

                <div className="card-top">
                  <span className="ac-title">
                    INTENT
                  </span>

                  <span className="card-index">
                    02 / 04
                  </span>
                </div>

                <div className="ac-line" />

                <p className="ac-desc">
                  Every decision
                  <br />
                  should have
                  <br />
                  a reason.
                </p>

                <div className="card-bottom">
                  <span>02</span>
                  <span>PURPOSE</span>
                </div>
              </div>
            </article>

            {/* CARD 03 */}
            <article
              className="approach-panel"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <div className="approach-card">
                <div className="card-number">03</div>

                <div className="card-top">
                  <span className="ac-title">
                    CRAFT
                  </span>

                  <span className="card-index">
                    03 / 04
                  </span>
                </div>

                <div className="ac-line" />

                <p className="ac-desc">
                  Details are not
                  <br />
                  decoration.
                  <br />
                  They are architecture.
                </p>

                <div className="card-bottom">
                  <span>03</span>
                  <span>DETAIL</span>
                </div>
              </div>
            </article>

            {/* CARD 04 */}
            <article
              className="approach-panel"
              ref={(el) => (cardsRef.current[3] = el)}
            >
              <div className="approach-card">
                <div className="card-number">04</div>

                <div className="card-top">
                  <span className="ac-title">
                    LONGEVITY
                  </span>

                  <span className="card-index">
                    04 / 04
                  </span>
                </div>

                <div className="ac-line" />

                <p className="ac-desc">
                  We build for
                  <br />
                  the life of a space
                  <br />
                  beyond completion.
                </p>

                <div className="card-bottom">
                  <span>04</span>
                  <span>TIME</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* BOTTOM UI */}
      <div className="approach-bottom">
        <span>THE STHIRA METHOD</span>

        <span className="approach-scroll">
          SCROLL TO EXPLORE
          <b>↓</b>
        </span>
      </div>

      <div className="approach-progress">
        <div
          ref={progressRef}
          className="approach-progress-bar"
        />
      </div>
    </section>
  );
};

export default ApproachSection;

