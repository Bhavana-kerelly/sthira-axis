import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./FeaturedProjectSection.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectSection = () => {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);

  const introRef = useRef(null);

  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const titleRef = useRef(null);
  const detailsRef = useRef(null);

  const gridRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);

  const coordinateRef = useRef(null);
  const verticalTextRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;

    if (!section || !scene) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reducedMotion } = context.conditions;

          if (reducedMotion) {
            gsap.set(
              [
                panel1Ref.current,
                panel2Ref.current,
                panel3Ref.current,
                titleRef.current,
                detailsRef.current,
              ],
              {
                clearProps: "all",
              }
            );

            return;
          }

          /*
          ==========================================================
          INITIAL STATE
          ==========================================================
          */

          gsap.set(scene, {
            transformPerspective: 1800,
            transformStyle: "preserve-3d",
          });

          gsap.set(
            [panel1Ref.current, panel2Ref.current, panel3Ref.current],
            {
              transformPerspective: 1800,
              transformStyle: "preserve-3d",
              force3D: true,
            }
          );

          gsap.set(image1Ref.current, {
            scale: 1.35,
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(image2Ref.current, {
            scale: 1.3,
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(image3Ref.current, {
            scale: 1.35,
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(titleRef.current, {
            autoAlpha: 0,
            y: 80,
            scale: 0.85,
            rotateX: 25,
            transformPerspective: 1200,
            force3D: true,
          });

          gsap.set(detailsRef.current, {
            autoAlpha: 0,
            y: 50,
            force3D: true,
          });

          gsap.set(introRef.current, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            force3D: true,
          });

          gsap.set(gridRef.current, {
            scale: 1.2,
            rotationX: 68,
            y: desktop ? 120 : 40,
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(
            [ring1Ref.current, ring2Ref.current, ring3Ref.current],
            {
              scale: 0.7,
              opacity: 0,
              rotationX: 65,
              force3D: true,
            }
          );

          /*
          ==========================================================
          DESKTOP INITIAL POSITION
          ==========================================================
          */

          if (desktop) {
            gsap.set(panel1Ref.current, {
              xPercent: -12,
              yPercent: -2,
              x: "20vw",
              y: 0,
              z: -220,
              rotateY: 12,
              rotateX: -2,
              rotateZ: -1,
              scale: 0.92,
              transformOrigin: "50% 50%",
            });

            gsap.set(panel2Ref.current, {
              xPercent: 0,
              yPercent: 0,
              x: "20vw",
              y: 0,
              z: 0,
              rotateY: 0,
              rotateX: 0,
              rotateZ: 0,
              scale: 0.9,
              transformOrigin: "50% 50%",
            });

            gsap.set(panel3Ref.current, {
              xPercent: 12,
              yPercent: 2,
              x: "20vw",
              y: 0,
              z: -220,
              rotateY: -12,
              rotateX: 2,
              rotateZ: 1,
              scale: 0.92,
              transformOrigin: "50% 50%",
            });
          }

          /*
          ==========================================================
          MOBILE INITIAL POSITION
          ==========================================================
          */

          if (mobile) {
            gsap.set(panel1Ref.current, {
              x: 0,
              y: -100,
              z: -120,
              rotateX: 5,
              rotateY: 0,
              rotateZ: -2,
              scale: 0.9,
            });

            gsap.set(panel2Ref.current, {
              x: 0,
              y: 0,
              z: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 0.88,
            });

            gsap.set(panel3Ref.current, {
              x: 0,
              y: 100,
              z: -120,
              rotateX: -5,
              rotateY: 0,
              rotateZ: 2,
              scale: 0.9,
            });
          }

          /*
          ==========================================================
          MASTER SCROLL TIMELINE
          ==========================================================
          */

          const tl = gsap.timeline({
            defaults: {
              ease: "none",
            },
scrollTrigger: {
  trigger: section,
  start: "top top",

  // The section itself is now the scroll track.
  end: "bottom bottom",

  pin: scene,

  pinSpacing: false,

  scrub: 1.15,

  anticipatePin: 1,

  invalidateOnRefresh: true,

  fastScrollEnd: false,

  preventOverlaps: true,

  markers: false,
},
          });

          /*
          ==========================================================
          PHASE 1 — ARCHITECTURAL GRID / CAMERA ACTIVATION
          ==========================================================
          */

          tl.to(
            gridRef.current,
            {
              scale: 1,
              rotationX: 62,
              y: 0,
              opacity: 0.75,
              duration: 1,
            },
            0
          );

          tl.to(
            [ring1Ref.current, ring2Ref.current, ring3Ref.current],
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              stagger: 0.08,
            },
            0
          );

          tl.to(
            introRef.current,
            {
              x: desktop ? -80 : 0,
              y: desktop ? -30 : -30,
              scale: desktop ? 0.82 : 0.9,
              rotateY: desktop ? 8 : 0,
              autoAlpha: 0.35,
              duration: 1.2,
              force3D: true,
            },
            0
          );

          /*
          ==========================================================
          PHASE 2 — PANELS COME OUT OF DEPTH
          ==========================================================
          */

          tl.to(
            panel1Ref.current,
            {
              z: 100,
              xPercent: desktop ? -125 : 0,
              yPercent: desktop ? -15 : -125,
              rotateY: desktop ? 28 : 0,
              rotateX: desktop ? -8 : 8,
              rotateZ: desktop ? -5 : -3,
              scale: 1,
              duration: 1.5,
              force3D: true,
            },
            0.35
          );

          tl.to(
            panel3Ref.current,
            {
              z: 100,
              xPercent: desktop ? 125 : 0,
              yPercent: desktop ? 15 : 125,
              rotateY: desktop ? -28 : 0,
              rotateX: desktop ? 8 : -8,
              rotateZ: desktop ? 5 : 3,
              scale: 1,
              duration: 1.5,
              force3D: true,
            },
            0.35
          );

          tl.to(
            panel2Ref.current,
            {
              z: 180,
              scale: desktop ? 1.02 : 1,
              rotateX: desktop ? -2 : 0,
              duration: 1.5,
              force3D: true,
            },
            0.35
          );

          /*
          ==========================================================
          PHASE 3 — IMAGE PARALLAX
          ==========================================================
          */

          tl.to(
            image1Ref.current,
            {
              scale: 1.05,
              xPercent: -8,
              duration: 1.5,
              force3D: true,
            },
            0.4
          );

          tl.to(
            image2Ref.current,
            {
              scale: 1.05,
              duration: 1.5,
              force3D: true,
            },
            0.4
          );

          tl.to(
            image3Ref.current,
            {
              scale: 1.05,
              xPercent: 8,
              duration: 1.5,
              force3D: true,
            },
            0.4
          );

          /*
          ==========================================================
          PHASE 4 — SIDE PLANES FLY THROUGH CAMERA
          ==========================================================
          */

          tl.to(
            introRef.current,
            {
              autoAlpha: 0,
              duration: 1.7,
              force3D: true,
            },
            1.7
          );

          tl.to(
            panel1Ref.current,
            {
              xPercent: desktop ? -500 : 0,
              yPercent: desktop ? -40 : -300,
              z: 650,
              rotateY: desktop ? 65 : 0,
              rotateX: desktop ? -18 : 18,
              rotateZ: desktop ? -12 : -5,
              scale: desktop ? 1.3 : 1.05,
              autoAlpha: 0,
              duration: 1.7,
              force3D: true,
            },
            1.7
          );

          tl.to(
            panel3Ref.current,
            {
              xPercent: desktop ? 500 : 0,
              yPercent: desktop ? 40 : 300,
              z: 650,
              rotateY: desktop ? -65 : 0,
              rotateX: desktop ? 18 : -18,
              rotateZ: desktop ? 12 : 5,
              scale: desktop ? 1.3 : 1.05,
              autoAlpha: 0,
              duration: 1.7,
              force3D: true,
            },
            1.7
          );

          /*
          ==========================================================
          PHASE 5 — CENTER IMAGE TAKES OVER
          ==========================================================
          */

          tl.to(
            panel2Ref.current,
            {
              width: "100vw",
              height: "100vh",
              left: 0,
              top: 0,
              marginLeft: 0,
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              z: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              duration: 2,
              force3D: true,
            },
            1.8
          );

          tl.to(
            image2Ref.current,
            {
              scale: 1,
              duration: 2,
              force3D: true,
            },
            1.8
          );



          /*
          ==========================================================
          PHASE 6 — PROJECT TITLE MATERIALIZES
          ==========================================================
          */

          tl.to(
            titleRef.current,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1.1,
              ease: "power3.out",
              force3D: true,
            },
            3.6
          );

          tl.to(
            detailsRef.current,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              force3D: true,
            },
            3.8
          );

          /*
          ==========================================================
          PHASE 7 — FINAL CINEMATIC HOLD
          ==========================================================
          */

          tl.to(
            coordinateRef.current,
            {
              autoAlpha: 1,
              duration: 0.6,
            },
            3.8
          );

          tl.to(
            verticalTextRef.current,
            {
              autoAlpha: 1,
              duration: 0.6,
            },
            3.8
          );

          tl.to(
            scene,
            {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              duration: 1,
              force3D: true,
            },
            3.8
          );

          /*
          ==========================================================
          FINAL HOLD
          ==========================================================
          */

          tl.to({}, { duration: 1.2 });

          /*
          ==========================================================
          REFRESH
          ==========================================================
          */

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      );

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="featured-reveal-section"
      ref={sectionRef}
      id="projects"
    >
      <div
        className="featured-reveal-container"
        ref={sceneRef}
      >
        {/* =====================================================
            ARCHITECTURAL BACKGROUND
        ===================================================== */}

        <div className="architectural-grid" ref={gridRef}>
          <div className="grid-line horizontal h1" />
          <div className="grid-line horizontal h2" />
          <div className="grid-line horizontal h3" />
          <div className="grid-line vertical v1" />
          <div className="grid-line vertical v2" />
          <div className="grid-line vertical v3" />
        </div>

        <div className="architectural-ring ring-one" ref={ring1Ref} />
        <div className="architectural-ring ring-two" ref={ring2Ref} />
        <div className="architectural-ring ring-three" ref={ring3Ref} />

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="featured-intro"
          ref={introRef}
        >
          <div className="featured-label">
            04 / WHAT WE BUILD
          </div>

          <h2 className="featured-huge-headline">
            A FIRST
            <br />
            EXPRESSION OF
            <br />
            THE STHIRA
            <br />
            APPROACH.
          </h2>

          <div className="intro-coordinate">
            ARCHITECTURAL STUDY / 04
          </div>
        </div>

        {/* =====================================================
            3D IMAGE PLANES
        ===================================================== */}

        <div className="panels-wrapper">

          {/* LEFT PLANE */}

          <div
            className="panel panel-1"
            ref={panel1Ref}
          >
            <div className="panel-depth depth-left" />

            <img
              src="/images/uma_lakeshore.jpg"
              alt="Lakeshore left slice"
              className="panel-img panel-img-1"
              ref={image1Ref}
            />

            <div className="panel-scan" />
            <div className="panel-number">01</div>
          </div>

          {/* CENTER PLANE */}

          <div
            className="panel panel-2"
            ref={panel2Ref}
          >
            <div className="panel-depth depth-center" />

            <img
              src="/images/uma_lakeshore.jpg"
              alt="Lakeshore center"
              className="panel-img panel-img-2"
              ref={image2Ref}
            />

            <div className="project-reveal-content">

              <h3
                className="reveal-title"
                ref={titleRef}
              >
                UMA SREENIVAS
                <br />
                LAKESHORE
              </h3>

              <div
                className="reveal-details"
                ref={detailsRef}
              >
                <div className="reveal-description">
                  A considered residential address shaped around architecture, openness and a sense of place.
                </div>

                <Link
                  to="/projects/uma-sreenivas-lakeshore"
                  className="reveal-cta"
                >
                  EXPLORE PROJECT
                  <ArrowRight
                    className="arrow"
                    size={16}
                    strokeWidth={1.5}
                  />
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT PLANE */}

          <div
            className="panel panel-3"
            ref={panel3Ref}
          >
            <div className="panel-depth depth-right" />

            <img
              src="/images/uma_lakeshore.jpg"
              alt="Lakeshore right slice"
              className="panel-img panel-img-3"
              ref={image3Ref}
            />

            <div className="panel-scan" />
            <div className="panel-number">03</div>
          </div>

        </div>

        {/* =====================================================
            CAMERA / ARCHITECTURAL DATA
        ===================================================== */}

        <div
          className="coordinate-system"
          ref={coordinateRef}
        >
          <span>X 004</span>
          <span>Y 018</span>
          <span>Z 006</span>
        </div>

        <div
          className="vertical-project-label"
          ref={verticalTextRef}
        >
          <span>STHIRA AXIS INFRA</span>
          <i />
          <span>PROJECT 001</span>
        </div>

        <div className="camera-crosshair">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="scene-progress-line">
          <span />
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectSection;