import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FoundationSection.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    value: "40K+",
    numericValue: 40,
    suffix: "K+",
    label: "SQ. FT. UNDER DEVELOPMENT",
    title: "SPACE THAT STARTS WITH A STRONG FOUNDATION.",
    description:
      "Every development begins with a clear vision, careful planning and decisions built to last.",
    image: "/images/accountability_bg.jpg",
    meta: "STRUCTURE / 01",
  },
  {
    number: "02",
    value: "968+",
    numericValue: 968,
    suffix: "+",
    label: "SQ. MTRS. PRIME LAND",
    title: "EVERY DETAIL HAS A PLACE.",
    description:
      "From land planning to execution, every square metre is considered with purpose.",
    image: "/images/foundation-02.jpg",
    meta: "PLANNING / 02",
  },
  {
    number: "03",
    value: "06",
    numericValue: 6,
    suffix: "",
    label: "FLOORS OF PREMIUM LIVING",
    title: "BUILT UPWARD. DESIGNED FORWARD.",
    description:
      "Strong construction principles shape spaces designed for long-term living.",
    image: "/images/foundation-03.jpg",
    meta: "VERTICAL / 03",
  },
];

const FoundationSection = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const imageRefs = useRef([]);
  const panelRefs = useRef([]);
  const numberRefs = useRef([]);
  const counterRefs = useRef([]);
  const progressRefs = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =========================================================
         DESKTOP
      ========================================================= */

      mm.add("(min-width: 769px)", () => {
        const counters = steps.map(() => ({ value: 0 }));

        /* -------------------------------------------------------
           BASE
        ------------------------------------------------------- */

        gsap.set(section, {
          perspective: 1600,
        });

        gsap.set(stageRef.current, {
          transformStyle: "preserve-3d",
        });

        /* -------------------------------------------------------
           IMAGES
        ------------------------------------------------------- */

        gsap.set(imageRefs.current, {
          autoAlpha: 0,
          scale: 1.18,
          x: 120,
          rotateY: 18,
          clipPath: "inset(0 100% 0 0)",
        });

        gsap.set(imageRefs.current[0], {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          rotateY: 0,
          clipPath: "inset(0 0% 0 0)",
        });

        /* -------------------------------------------------------
           PANELS
        ------------------------------------------------------- */

        gsap.set(panelRefs.current, {
          autoAlpha: 0,
          x: 100,
          y: 80,
          scale: 0.9,
          rotateX: 8,
        });

        gsap.set(panelRefs.current[0], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
        });

        /* -------------------------------------------------------
           GIANT NUMBERS
        ------------------------------------------------------- */

        gsap.set(numberRefs.current, {
          autoAlpha: 0,
          scale: 0.7,
          x: 100,
        });

        gsap.set(numberRefs.current[0], {
          autoAlpha: 0.1,
          scale: 1,
          x: 0,
        });

        /* -------------------------------------------------------
           PROGRESS
        ------------------------------------------------------- */

        gsap.set(progressRefs.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        /* =========================================================
           MASTER TIMELINE
        ========================================================= */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=6500",
            scrub: 1.15,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /* =========================================================
           OPENING
        ========================================================= */

        timeline.fromTo(
          ".new-foundation-eyebrow",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0
        );

        timeline.fromTo(
          ".new-foundation-heading",
          {
            autoAlpha: 0,
            y: 100,
            rotateX: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          0.05
        );

        timeline.fromTo(
          ".new-foundation-image-wrap",
          {
            autoAlpha: 0,
            scale: 0.82,
            y: 100,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1.3,
            ease: "expo.out",
          },
          0.15
        );

        timeline.fromTo(
          ".new-foundation-metric",
          {
            autoAlpha: 0,
            x: 120,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "power4.out",
          },
          0.35
        );

        timeline.fromTo(
          ".new-foundation-description",
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0.55
        );

        /* =========================================================
           STEP 01 COUNTER
        ========================================================= */

        timeline.to(
          counters[0],
          {
            value: 40,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRefs.current[0]) {
                counterRefs.current[0].textContent =
                  `${Math.round(counters[0].value)}K+`;
              }
            },
          },
          0.75
        );

        timeline.to(
          progressRefs.current[0],
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          0.9
        );

        /* =========================================================
           STEP 01 IMAGE MOVEMENT
        ========================================================= */

        timeline.to(
          imageRefs.current[0],
          {
            scale: 1.1,
            x: -20,
            duration: 1.8,
            ease: "none",
          },
          0.7
        );

        timeline.to(
          ".new-foundation-image-overlay",
          {
            opacity: 0.15,
            duration: 1.5,
          },
          0.8
        );

        /* =========================================================
           STEP 01 EXIT
        ========================================================= */

        timeline.to(
          imageRefs.current[0],
          {
            autoAlpha: 0,
            scale: 0.85,
            x: -180,
            rotateY: -18,
            clipPath: "inset(0 100% 0 0)",
            duration: 0.9,
            ease: "power4.inOut",
          },
          2.1
        );

        timeline.to(
          panelRefs.current[0],
          {
            autoAlpha: 0,
            x: -100,
            y: -60,
            scale: 0.82,
            duration: 0.8,
            ease: "power4.inOut",
          },
          2.1
        );

        timeline.to(
          numberRefs.current[0],
          {
            autoAlpha: 0,
            x: -80,
            scale: 0.7,
            duration: 0.7,
          },
          2.1
        );

        /* =========================================================
           STEP 02 IMAGE
        ========================================================= */

        timeline.fromTo(
          imageRefs.current[1],
          {
            autoAlpha: 0,
            scale: 1.22,
            x: 180,
            rotateY: 18,
            clipPath: "inset(0 0 0 100%)",
          },
          {
            autoAlpha: 1,
            scale: 1,
            x: 0,
            rotateY: 0,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "expo.out",
          },
          2.15
        );

        /* =========================================================
           STEP 02 PANEL
        ========================================================= */

        timeline.fromTo(
          panelRefs.current[1],
          {
            autoAlpha: 0,
            x: 120,
            y: 100,
            scale: 0.82,
            rotateX: 12,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: "back.out(1.25)",
          },
          2.3
        );

        timeline.fromTo(
          numberRefs.current[1],
          {
            autoAlpha: 0,
            x: 120,
            scale: 0.7,
          },
          {
            autoAlpha: 0.1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
          },
          2.25
        );

        /* =========================================================
           STEP 02 COUNTER
        ========================================================= */

        timeline.to(
          counters[1],
          {
            value: 968,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRefs.current[1]) {
                counterRefs.current[1].textContent =
                  `${Math.round(counters[1].value)}+`;
              }
            },
          },
          2.45
        );

        timeline.to(
          progressRefs.current[0],
          {
            scaleX: 0,
            duration: 0.5,
          },
          2.35
        );

        timeline.to(
          progressRefs.current[1],
          {
            scaleX: 1,
            duration: 1,
          },
          2.5
        );

        timeline.to(
          imageRefs.current[1],
          {
            scale: 1.1,
            x: -30,
            duration: 1.6,
            ease: "none",
          },
          2.6
        );

        /* =========================================================
           STEP 02 EXIT
        ========================================================= */

        timeline.to(
          imageRefs.current[1],
          {
            autoAlpha: 0,
            scale: 0.84,
            x: -180,
            rotateY: -18,
            clipPath: "inset(0 100% 0 0)",
            duration: 0.9,
            ease: "power4.inOut",
          },
          4.0
        );

        timeline.to(
          panelRefs.current[1],
          {
            autoAlpha: 0,
            x: -110,
            y: -60,
            scale: 0.82,
            duration: 0.8,
            ease: "power4.inOut",
          },
          4
        );

        timeline.to(
          numberRefs.current[1],
          {
            autoAlpha: 0,
            x: -80,
            scale: 0.7,
            duration: 0.7,
          },
          4
        );

        /* =========================================================
           STEP 03
        ========================================================= */

        timeline.fromTo(
          imageRefs.current[2],
          {
            autoAlpha: 0,
            scale: 1.25,
            x: 180,
            rotateY: 18,
            clipPath: "inset(0 0 0 100%)",
          },
          {
            autoAlpha: 1,
            scale: 1,
            x: 0,
            rotateY: 0,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "expo.out",
          },
          4.05
        );

        timeline.fromTo(
          panelRefs.current[2],
          {
            autoAlpha: 0,
            x: 120,
            y: 110,
            scale: 0.82,
            rotateX: 12,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: "back.out(1.25)",
          },
          4.2
        );

        timeline.fromTo(
          numberRefs.current[2],
          {
            autoAlpha: 0,
            x: 120,
            scale: 0.7,
          },
          {
            autoAlpha: 0.1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
          },
          4.15
        );

        /* =========================================================
           STEP 03 COUNTER
        ========================================================= */

        timeline.to(
          counters[2],
          {
            value: 6,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRefs.current[2]) {
                counterRefs.current[2].textContent =
                  `${Math.round(counters[2].value)}`;
              }
            },
          },
          4.35
        );

        timeline.to(
          progressRefs.current[1],
          {
            scaleX: 0,
            duration: 0.5,
          },
          4.2
        );

        timeline.to(
          progressRefs.current[2],
          {
            scaleX: 1,
            duration: 1,
          },
          4.4
        );

        timeline.to(
          imageRefs.current[2],
          {
            scale: 1.12,
            x: -25,
            duration: 1.5,
            ease: "none",
          },
          4.5
        );

        /* =========================================================
           FINAL TRANSITION
        ========================================================= */

        timeline.to(
          ".new-foundation-heading",
          {
            y: -40,
            scale: 0.94,
            duration: 1,
            ease: "power2.inOut",
          },
          5.3
        );

        timeline.to(
          ".new-foundation-image-wrap",
          {
            scale: 1.12,
            y: -15,
            duration: 1.2,
            ease: "power2.inOut",
          },
          5.3
        );

        timeline.to(
          ".new-foundation-final",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "expo.out",
          },
          5.4
        );

        /* =========================================================
           BLUEPRINT BACKGROUND
        ========================================================= */

        timeline.to(
          ".new-foundation-grid",
          {
            x: -180,
            y: 100,
            scale: 1.15,
            duration: 6,
            ease: "none",
          },
          0
        );

        timeline.to(
          ".new-foundation-ring",
          {
            rotate: 45,
            scale: 1.2,
            duration: 6,
            ease: "none",
          },
          0
        );

        timeline.to(
          ".new-foundation-coordinates",
          {
            y: -80,
            duration: 6,
            ease: "none",
          },
          0
        );

        /* =========================================================
           MOUSE PARALLAX
        ========================================================= */

        const handleMouseMove = (event) => {
          const rect = section.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) / rect.width - 0.5;

          const y =
            (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(stageRef.current, {
            rotateY: x * 2,
            rotateX: y * -1.5,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(".new-foundation-image-wrap", {
            x: x * 18,
            y: y * 12,
            duration: 1.3,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(".new-foundation-heading", {
            x: x * -12,
            y: y * -8,
            duration: 1.3,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(".new-foundation-metric", {
            x: x * -10,
            y: y * -5,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        section.addEventListener(
          "mousemove",
          handleMouseMove
        );

        return () => {
          section.removeEventListener(
            "mousemove",
            handleMouseMove
          );
        };
      });

      /* =========================================================
         MOBILE
      ========================================================= */

      mm.add("(max-width: 768px)", () => {
        const counters = steps.map(() => ({ value: 0 }));

        gsap.set(imageRefs.current, {
          autoAlpha: 0,
          scale: 1.1,
          x: 50,
        });

        gsap.set(imageRefs.current[0], {
          autoAlpha: 1,
          scale: 1,
          x: 0,
        });

        gsap.set(panelRefs.current, {
          autoAlpha: 0,
          y: 50,
        });

        gsap.set(panelRefs.current[0], {
          autoAlpha: 1,
          y: 0,
        });

        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=4300",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        mobileTimeline.fromTo(
          ".new-foundation-eyebrow",
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          0
        );

        mobileTimeline.fromTo(
          ".new-foundation-heading",
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          0.05
        );

        mobileTimeline.fromTo(
          ".new-foundation-image-wrap",
          {
            autoAlpha: 0,
            y: 60,
            scale: 0.9,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          0.2
        );

        mobileTimeline.fromTo(
          ".new-foundation-metric",
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          0.35
        );

        /* STEP 01 */

        mobileTimeline.to(
          counters[0],
          {
            value: 40,
            duration: 1,
            onUpdate: () => {
              if (counterRefs.current[0]) {
                counterRefs.current[0].textContent =
                  `${Math.round(counters[0].value)}K+`;
              }
            },
          },
          0.6
        );

        /* STEP 02 */

        mobileTimeline.to(
          imageRefs.current[0],
          {
            autoAlpha: 0,
            x: -70,
            scale: 0.9,
            duration: 0.7,
          },
          1.8
        );

        mobileTimeline.to(
          panelRefs.current[0],
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.7,
          },
          1.8
        );

        mobileTimeline.fromTo(
          imageRefs.current[1],
          {
            autoAlpha: 0,
            x: 70,
            scale: 1.1,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
          },
          1.9
        );

        mobileTimeline.fromTo(
          panelRefs.current[1],
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          2
        );

        mobileTimeline.to(
          counters[1],
          {
            value: 968,
            duration: 1.1,
            onUpdate: () => {
              if (counterRefs.current[1]) {
                counterRefs.current[1].textContent =
                  `${Math.round(counters[1].value)}+`;
              }
            },
          },
          2.2
        );

        /* STEP 03 */

        mobileTimeline.to(
          imageRefs.current[1],
          {
            autoAlpha: 0,
            x: -70,
            scale: 0.9,
            duration: 0.7,
          },
          3.05
        );

        mobileTimeline.to(
          panelRefs.current[1],
          {
            autoAlpha: 0,
            y: -50,
            duration: 0.7,
          },
          3.05
        );

        mobileTimeline.fromTo(
          imageRefs.current[2],
          {
            autoAlpha: 0,
            x: 70,
            scale: 1.1,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
          },
          3.15
        );

        mobileTimeline.fromTo(
          panelRefs.current[2],
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          3.25
        );

        mobileTimeline.to(
          counters[2],
          {
            value: 6,
            duration: 0.8,
            onUpdate: () => {
              if (counterRefs.current[2]) {
                counterRefs.current[2].textContent =
                  `${Math.round(counters[2].value)}`;
              }
            },
          },
          3.45
        );

        mobileTimeline.to(
          ".new-foundation-final",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          3.8
        );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="new-foundation"
      id="foundation"
    >
      <div
        ref={stageRef}
        className="new-foundation-stage"
      >
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="new-foundation-grid" />

        <div className="new-foundation-glow" />

        <div className="new-foundation-ring" />

        <div className="new-foundation-coordinates">
          FOUNDATION / 01 — 03
        </div>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="new-foundation-eyebrow">
          THE FOUNDATION
        </div>

        <div className="new-foundation-heading">
          BUILT ON
          <br />
          SOMETHING
          <br />
          <strong>SOLID.</strong>
        </div>

        {/* =================================================
            MAIN IMAGE
        ================================================= */}

        <div className="new-foundation-image-wrap">
          <div className="new-foundation-image-frame">

            {steps.map((step, index) => (
              <img
                key={step.number}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="new-foundation-image"
                src={step.image}
                alt={step.title}
              />
            ))}

            <div className="new-foundation-image-overlay" />

            <div className="new-foundation-image-grid" />

            <div className="new-foundation-image-number">
              01 — 03
            </div>

            <div className="new-foundation-image-line" />

            <div className="new-foundation-image-meta">
              STRUCTURE / DEVELOPMENT / LIVING
            </div>
          </div>

          <div className="new-foundation-measure">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* =================================================
            METRIC CONTENT
        ================================================= */}

        <div className="new-foundation-metric">

          <div className="new-foundation-step-card">

            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                className="new-foundation-step"
              >

                <div className="new-foundation-step-index">
                  {step.meta}
                </div>

                <div className="new-foundation-stat">
                  <div
                    ref={(el) => {
                      counterRefs.current[index] = el;
                    }}
                    className="new-foundation-stat-number"
                  >
                    {index === 0
                      ? "0K+"
                      : index === 1
                      ? "0+"
                      : "0"}
                  </div>

                  <div className="new-foundation-stat-unit">
                    METRIC
                  </div>
                </div>

                <div className="new-foundation-label">
                  {step.label}
                </div>

                <h2 className="new-foundation-title">
                  {step.title}
                </h2>

                <p className="new-foundation-description">
                  {step.description}
                </p>

                <div className="new-foundation-giant-number">
                  {step.number}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="new-foundation-progress">

          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                progressRefs.current[index] = el;
              }}
              className="new-foundation-progress-item"
            />
          ))}

          <div className="new-foundation-progress-labels">
            {steps.map((step) => (
              <span key={step.number}>
                {step.number}
              </span>
            ))}
          </div>

        </div>

        {/* =================================================
            SCROLL
        ================================================= */}

        <div className="new-foundation-scroll">
          <span>SCROLL TO EXPLORE</span>

          <span className="new-foundation-scroll-arrow">
            ↓
          </span>
        </div>

        {/* =================================================
            FINAL
        ================================================= */}

        <div className="new-foundation-final">
          FROM FOUNDATION
          <span>TO ELEVATION.</span>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;