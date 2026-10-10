import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PeopleSection.css";

gsap.registerPlugin(ScrollTrigger);

const PeopleSection = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const openingRef = useRef(null);
  const openingLinesRef = useRef([]);

  const rajeshCardRef = useRef(null);
  const rajeshImageRef = useRef(null);
  const rajeshInfoRef = useRef(null);

  const nagaCardRef = useRef(null);
  const nagaImageRef = useRef(null);
  const nagaInfoRef = useRef(null);

  const convergenceRef = useRef(null);
  const convergenceVisualRef = useRef(null);
  const convergenceTextRef = useRef(null);

  const blueprintRef = useRef(null);
  const gridRef = useRef(null);

  const orbit1Ref = useRef(null);
  const orbit2Ref = useRef(null);
  const orbit3Ref = useRef(null);

  const verticalLabelRef = useRef(null);
  const coordinateRef = useRef(null);

  const addOpeningLine = (el) => {
    if (el && !openingLinesRef.current.includes(el)) {
      openingLinesRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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
                openingRef.current,
                rajeshCardRef.current,
                nagaCardRef.current,
                convergenceRef.current,
              ],
              {
                clearProps: "all",
              }
            );

            return;
          }

          /*
          ============================================================
          INITIAL SCENE
          ============================================================
          */

          gsap.set(stageRef.current, {
            transformPerspective: 1800,
            transformStyle: "preserve-3d",
          });

          gsap.set(gridRef.current, {
            scale: 1.15,
            rotationX: desktop ? 68 : 55,
            y: desktop ? 100 : 40,
            opacity: 0.25,
            transformOrigin: "center center",
            force3D: true,
          });

          gsap.set(blueprintRef.current, {
            scale: 1.3,
            rotationZ: -8,
            opacity: 0,
            force3D: true,
          });

          gsap.set(
            [orbit1Ref.current, orbit2Ref.current, orbit3Ref.current],
            {
              scale: 0.4,
              opacity: 0,
              rotationX: desktop ? 70 : 55,
              rotationY: desktop ? -15 : 0,
              force3D: true,
            }
          );

          /*
          ============================================================
          OPENING
          ============================================================
          */

          gsap.set(openingRef.current, {
            opacity: 1,
            force3D: true,
          });

          gsap.set(openingLinesRef.current, {
            opacity: 0,
            y: 100,
            rotateX: 30,
            filter: "blur(14px)",
            transformPerspective: 1200,
            force3D: true,
          });

          /*
          ============================================================
          RAJESH
          ============================================================
          */

          gsap.set(rajeshCardRef.current, {
            opacity: 0,
            x: desktop ? -18 : 0,
            y: desktop ? 70 : 100,
            z: -500,
            rotateY: desktop ? 25 : 0,
            rotateX: desktop ? 8 : 5,
            rotateZ: desktop ? -4 : 0,
            scale: 0.72,
            transformPerspective: 1800,
            transformStyle: "preserve-3d",
            force3D: true,
          });

          gsap.set(rajeshImageRef.current, {
            scale: 1.35,
            xPercent: -8,
            force3D: true,
          });

          gsap.set(rajeshInfoRef.current, {
            opacity: 0,
            x: desktop ? 100 : 0,
            y: 30,
            z: 100,
            rotateY: desktop ? -15 : 0,
            force3D: true,
          });

          /*
          ============================================================
          NAGA
          ============================================================
          */

          gsap.set(nagaCardRef.current, {
            opacity: 0,
            x: desktop ? 18 : 0,
            y: desktop ? 80 : 100,
            z: -600,
            rotateY: desktop ? -25 : 0,
            rotateX: desktop ? -8 : -5,
            rotateZ: desktop ? 4 : 0,
            scale: 0.72,
            transformPerspective: 1800,
            transformStyle: "preserve-3d",
            force3D: true,
          });

          gsap.set(nagaImageRef.current, {
            scale: 1.35,
            xPercent: 8,
            force3D: true,
          });

          gsap.set(nagaInfoRef.current, {
            opacity: 0,
            x: desktop ? -100 : 0,
            y: 30,
            z: 100,
            rotateY: desktop ? 15 : 0,
            force3D: true,
          });

          /*
          ============================================================
          CONVERGENCE
          ============================================================
          */

          gsap.set(convergenceRef.current, {
            opacity: 0,
            scale: 0.75,
            z: -500,
            rotateX: 10,
            force3D: true,
          });

          gsap.set(convergenceVisualRef.current, {
            rotateY: desktop ? -15 : 0,
            rotateZ: desktop ? -2 : 0,
            force3D: true,
          });

          gsap.set(convergenceTextRef.current, {
            opacity: 0,
            y: 80,
            z: 150,
            force3D: true,
          });

          /*
          ============================================================
          TECHNICAL DATA
          ============================================================
          */



          /*
          ============================================================
          MASTER TIMELINE
          ============================================================
          */

          const tl = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.15,
              invalidateOnRefresh: true,
              fastScrollEnd: false,
              preventOverlaps: true,
              markers: false,
            },
          });

          /*
          ============================================================
          PHASE 01
          OPENING — WORDS BUILD LIKE ARCHITECTURAL STRUCTURE
          ============================================================
          */

          tl.to(
            gridRef.current,
            {
              scale: 1,
              rotationX: desktop ? 62 : 48,
              y: 0,
              opacity: 0.65,
              duration: 1,
            },
            0
          );

          tl.to(
            blueprintRef.current,
            {
              scale: 1,
              rotationZ: 0,
              opacity: 0.7,
              duration: 1,
            },
            0
          );

          tl.to(
            openingLinesRef.current,
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 1.4,
              stagger: 0.16,
              ease: "power3.out",
              force3D: true,
            },
            0
          );

          tl.to(
            [orbit1Ref.current, orbit2Ref.current],
            {
              scale: 1,
              opacity: 0.45,
              duration: 1.2,
              stagger: 0.1,
            },
            0.2
          );

          /*
          ============================================================
          PHASE 02
          OPENING LEAVES / CAMERA ROTATES
          ============================================================
          */

          tl.to(
            openingRef.current,
            {
              scale: desktop ? 0.78 : 0.85,
              x: desktop ? -12 : 0,
              y: -100,
              rotateY: desktop ? 8 : 0,
              opacity: 0,
              duration: 1.4,
              force3D: true,
            },
            1.4
          );

          tl.to(
            gridRef.current,
            {
              rotationX: desktop ? 58 : 44,
              y: -100,
              scale: 1.15,
              duration: 1.4,
            },
            1.4
          );

          /*
          ============================================================
          PHASE 03
          RAJESH ENTERS FROM DEPTH
          ============================================================
          */

          tl.to(
            rajeshCardRef.current,
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateY: 0,
              rotateX: 0,
              rotateZ: 0,
              scale: 1,
              duration: 1.8,
              ease: "power3.out",
              force3D: true,
            },
            2.2
          );

          tl.to(
            rajeshImageRef.current,
            {
              scale: 1,
              xPercent: 0,
              duration: 1.8,
              ease: "power2.out",
              force3D: true,
            },
            2.2
          );

          tl.to(
            rajeshInfoRef.current,
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateY: 0,
              duration: 1.2,
              ease: "power3.out",
              force3D: true,
            },
            2.8
          );

          tl.to(
            orbit3Ref.current,
            {
              scale: 1,
              opacity: 0.4,
              duration: 1,
            },
            2.5
          );

          /*
          ============================================================
          PHASE 04
          RAJESH PARALLAX / CAMERA PASSES
          ============================================================
          */

          tl.to(
            rajeshCardRef.current,
            {
              y: -70,
              rotateY: desktop ? -7 : 0,
              rotateZ: desktop ? 1.5 : 0,
              duration: 1.3,
              force3D: true,
            },
            3.8
          );

          tl.to(
            rajeshImageRef.current,
            {
              scale: 1.12,
              xPercent: 4,
              duration: 1.3,
              force3D: true,
            },
            3.8
          );

          tl.to(
            rajeshInfoRef.current,
            {
              y: -40,
              z: 80,
              duration: 1.3,
              force3D: true,
            },
            3.8
          );

          /*
          ============================================================
          PHASE 05
          RAJESH EXITS / NAGA ENTERS FROM OPPOSITE AXIS
          ============================================================
          */

          tl.to(
            rajeshCardRef.current,
            {
              x: desktop ? -80 : 0,
              y: -120,
              z: -300,
              rotateY: desktop ? 18 : 0,
              rotateZ: desktop ? -4 : 0,
              scale: 0.82,
              opacity: 0,
              duration: 1.5,
              force3D: true,
            },
            4.8
          );

          tl.to(
            rajeshInfoRef.current,
            {
              x: desktop ? -120 : 0,
              opacity: 0,
              duration: 1,
            },
            4.8
          );

          tl.to(
            nagaCardRef.current,
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateY: 0,
              rotateX: 0,
              rotateZ: 0,
              scale: 1,
              duration: 1.8,
              ease: "power3.out",
              force3D: true,
            },
            5
          );

          tl.to(
            nagaImageRef.current,
            {
              scale: 1,
              xPercent: 0,
              duration: 1.8,
              ease: "power2.out",
              force3D: true,
            },
            5
          );

          tl.to(
            nagaInfoRef.current,
            {
              opacity: 1,
              x: 0,
              y: 0,
              z: 0,
              rotateY: 0,
              duration: 1.2,
              ease: "power3.out",
              force3D: true,
            },
            5.5
          );

          /*
          ============================================================
          PHASE 06
          NAGA CAMERA PASS
          ============================================================
          */

          tl.to(
            nagaCardRef.current,
            {
              y: -70,
              rotateY: desktop ? 7 : 0,
              rotateZ: desktop ? -1.5 : 0,
              duration: 1.3,
              force3D: true,
            },
            6.8
          );

          tl.to(
            nagaImageRef.current,
            {
              scale: 1.12,
              xPercent: -4,
              duration: 1.3,
              force3D: true,
            },
            6.8
          );

          tl.to(
            nagaInfoRef.current,
            {
              y: -40,
              z: 80,
              duration: 1.3,
              force3D: true,
            },
            6.8
          );

          /*
          ============================================================
          PHASE 07
          BOTH FOUNDERS DISAPPEAR INTO BLUEPRINT
          ============================================================
          */

          tl.to(
            nagaCardRef.current,
            {
              x: desktop ? 90 : 0,
              y: -120,
              z: -350,
              rotateY: desktop ? -18 : 0,
              rotateZ: desktop ? 4 : 0,
              scale: 0.82,
              opacity: 0,
              duration: 1.5,
              force3D: true,
            },
            7.8
          );

          tl.to(
            nagaInfoRef.current,
            {
              x: desktop ? 120 : 0,
              opacity: 0,
              duration: 1,
            },
            7.8
          );

          tl.to(
            blueprintRef.current,
            {
              opacity: 1,
              scale: 0.8,
              rotationZ: 8,
              duration: 1.4,
            },
            7.9
          );

          /*
          ============================================================
          PHASE 08
          CONVERGENCE
          ============================================================
          */

          tl.to(
            convergenceRef.current,
            {
              opacity: 1,
              scale: 1,
              z: 0,
              rotateX: 0,
              duration: 1.8,
              ease: "power3.out",
              force3D: true,
            },
            8.6
          );

          tl.to(
            convergenceVisualRef.current,
            {
              rotateY: 0,
              rotateZ: 0,
              duration: 1.4,
              force3D: true,
            },
            8.8
          );

          tl.to(
            convergenceTextRef.current,
            {
              opacity: 1,
              y: 0,
              z: 0,
              duration: 1.3,
              ease: "power3.out",
              force3D: true,
            },
            9.2
          );

          /*
          ============================================================
          PHASE 09
          FINAL CINEMATIC CAMERA PUSH
          ============================================================
          */

          tl.to(
            convergenceRef.current,
            {
              scale: desktop ? 1.12 : 1.04,
              y: -20,
              duration: 1.3,
              force3D: true,
            },
            10.2
          );

          tl.to(
            gridRef.current,
            {
              scale: 1.4,
              rotationX: desktop ? 50 : 38,
              y: 80,
              opacity: 0.25,
              duration: 1.3,
            },
            10.2
          );

          tl.to(
            [orbit1Ref.current, orbit2Ref.current, orbit3Ref.current],
            {
              rotationZ: 25,
              scale: 1.15,
              opacity: 0.18,
              duration: 1.3,
            },
            10.2
          );



          /*
          ============================================================
          FINAL HOLD
          ============================================================
          */

          tl.to({}, { duration: 1.5 });

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="people-cinematic-section"
      id="people"
      ref={sectionRef}
    >
      <div
        className="people-stage"
        ref={stageRef}
      >

        {/* =====================================================
            ARCHITECTURAL ENVIRONMENT
        ===================================================== */}

        <div
          className="ps-grid"
          ref={gridRef}
        >
          <div className="ps-grid-line ps-grid-h1" />
          <div className="ps-grid-line ps-grid-h2" />
          <div className="ps-grid-line ps-grid-h3" />

          <div className="ps-grid-line ps-grid-v1" />
          <div className="ps-grid-line ps-grid-v2" />
          <div className="ps-grid-line ps-grid-v3" />

          <div className="ps-grid-axis ps-axis-x" />
          <div className="ps-grid-axis ps-axis-y" />
        </div>

        {/* Blueprint */}

        <div
          className="ps-blueprint"
          ref={blueprintRef}
        >
          <div className="blueprint-building">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="blueprint-dimension dimension-top">
            40.00 M
          </div>

          <div className="blueprint-dimension dimension-side">
            968 SQ.M
          </div>

          <div className="blueprint-cross cross-one" />
          <div className="blueprint-cross cross-two" />
        </div>

        {/* =====================================================
            ORBITAL ARCHITECTURE
        ===================================================== */}

        <div
          className="ps-orbit ps-orbit-1"
          ref={orbit1Ref}
        >
          <span />
        </div>

        <div
          className="ps-orbit ps-orbit-2"
          ref={orbit2Ref}
        >
          <span />
        </div>

        <div
          className="ps-orbit ps-orbit-3"
          ref={orbit3Ref}
        >
          <span />
        </div>

        {/* =====================================================
            OPENING
        ===================================================== */}

        <div
          className="ps-opening"
          ref={openingRef}
        >
          <div className="ps-section-label">
            06 / THE PEOPLE
          </div>

          <h2 className="ps-opening-headline">
            <span
              className="ps-opening-line"
              ref={addOpeningLine}
            >
              BUILT BY
            </span>

            <span
              className="ps-opening-line"
              ref={addOpeningLine}
            >
              PEOPLE WHO
            </span>

            <span
              className="ps-opening-line"
              ref={addOpeningLine}
            >
              BUILD FOR A
            </span>

            <span
              className="ps-opening-line"
              ref={addOpeningLine}
            >
              LIVING.
            </span>
          </h2>
        </div>



        {/* =====================================================
            RAJESH — FOUNDER ONE
        ===================================================== */}

        <div
          className="ps-founder-card ps-rajesh-card"
          ref={rajeshCardRef}
        >
          <div className="ps-founder-image-wrap">

            <div className="ps-image-frame">
              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />

              <img
                src="/images/portrait_rajesh.jpg"
                alt="Rajesh Babu Nimmalapudi"
                className="ps-founder-image"
                ref={rajeshImageRef}
              />

              <div className="ps-image-scan" />

              <div className="ps-image-index">
                FOUNDER / 01
              </div>
            </div>

            <div className="ps-image-side-data">
              VISAKHAPATNAM
              <br />
              HYDERABAD
              <br />
              INDIA
            </div>
          </div>

          <div
            className="ps-founder-info"
            ref={rajeshInfoRef}
          >
            <div className="ps-profile-number">
              01 — FOUNDING PARTNER
            </div>

            <h3 className="ps-name">
              Rajesh Babu
              <br />
              Nimmalapudi
            </h3>

            <div className="ps-role">
              Founding Partner
            </div>

            <div className="ps-tech-line">
              STRUCTURE · EXECUTION · QUALITY
            </div>

            <p className="ps-bio">
              Rajesh Babu comes from a traditional builders family rooted in Visakhapatnam, where construction is not just a profession but a generational craft. With deep technical knowledge of structural design and engineering, he has been instrumental in delivering over 20 residential projects across Vizag and Hyderabad. His hands-on approach to quality control — from RCC specifications to finishing standards — ensures that every Sthira Axis project meets the benchmarks that decades of family experience have set.
            </p>

            <div className="ps-founder-coordinate">
              STRUCTURAL THINKING / 01
            </div>
          </div>
        </div>

        {/* =====================================================
            NAGA — FOUNDER TWO
        ===================================================== */}

        <div
          className="ps-founder-card ps-naga-card"
          ref={nagaCardRef}
        >
          <div className="ps-founder-image-wrap">

            <div className="ps-image-frame">
              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />

              <img
                src="/images/portrait_naga.jpg"
                alt="Naga Pratap Paladugu"
                className="ps-founder-image"
                ref={nagaImageRef}
              />

              <div className="ps-image-scan" />

              <div className="ps-image-index">
                FOUNDER / 02
              </div>
            </div>

            <div className="ps-image-side-data">
              VISAKHAPATNAM
              <br />
              HYDERABAD
              <br />
              INDIA
            </div>
          </div>

          <div
            className="ps-founder-info"
            ref={nagaInfoRef}
          >
            <div className="ps-profile-number">
              02 — FOUNDING PARTNER
            </div>

            <h3 className="ps-name">
              Naga Pratap
              <br />
              Paladugu
            </h3>

            <div className="ps-role">
              Founding Partner
            </div>

            <div className="ps-tech-line">
              PLANNING · EXECUTION · PROCUREMENT
            </div>

            <p className="ps-bio">
              Naga Pratap brings the same deep-rooted construction lineage from his family's long-standing presence in real estate development in Visakhapatnam and Hyderabad. With expertise spanning project planning, site execution, and material procurement, he has co-led the delivery of more than 20 residential developments. His strength lies in combining traditional building wisdom with modern project management — ensuring that timelines, budgets, and construction quality are never compromised.
            </p>

            <div className="ps-founder-coordinate">
              EXECUTION THINKING / 02
            </div>
          </div>
        </div>

        {/* =====================================================
            CONVERGENCE
        ===================================================== */}

        <div
          className="ps-convergence"
          ref={convergenceRef}
        >
          <div
            className="ps-conv-visual"
            ref={convergenceVisualRef}
          >
            <div className="ps-conv-frag ps-conv-frag-1">
              <img
                src="/images/portrait_rajesh.jpg"
                alt="Rajesh"
              />

              <span>01</span>
            </div>

            <div className="ps-conv-line">
              <span />
            </div>

            <div className="ps-conv-frag ps-conv-frag-2">
              <img
                src="/images/portrait_naga.jpg"
                alt="Naga"
              />

              <span>02</span>
            </div>
          </div>

          <div
            className="ps-conv-text"
            ref={convergenceTextRef}
          >
            <div className="ps-conv-label">
              STHIRA AXIS INFRA / FOUNDERS
            </div>

            <h2 className="ps-conv-headline">
              TWO PERSPECTIVES.
              <br />
              ONE STANDARD.
            </h2>

            <p className="ps-conv-sub">
              Technical understanding and project execution come together in the way Sthira approaches every development.
            </p>

            <div className="ps-conv-coordinate">
              STRUCTURE + EXECUTION = STANDARD
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNICAL UI
        ===================================================== */}



      </div>
    </section>
  );
};

export default PeopleSection;