import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./IntroSection.css";

const IntroSection = () => {
  const sectionRef = useRef(null);

  /* ==========================================
     SCROLL PROGRESS
  ========================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  /* ==========================================
     MAIN SCENE MOVEMENT
  ========================================== */

  const sceneY = useTransform(
    smoothProgress,
    [0, 0.25, 0.55, 0.8, 1],
    ["0vh", "-4vh", "-10vh", "-18vh", "-28vh"]
  );

  const sceneScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [1, 1.03, 1.08, 1.12]
  );

  const sceneRotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, 3, -2]
  );

  /* ==========================================
     HEADLINE
  ========================================== */

  const headlineY = useTransform(
    smoothProgress,
    [0, 0.3, 0.65, 1],
    ["0vh", "-8vh", "-22vh", "-40vh"]
  );

  const headlineX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["0vw", "-4vw", "-12vw"]
  );

  const headlineScale = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [1, 0.94, 0.78]
  );

  const headlineRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, -2, -7]
  );

  const headlineOpacity = useTransform(
    smoothProgress,
    [0, 0.65, 0.9, 1],
    [1, 1, 0.5, 0]
  );

  /* ==========================================
     PRIMARY IMAGE
  ========================================== */

  const imageY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["10vh", "0vh", "-7vh", "-16vh", "-27vh"]
  );

  const imageX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["8vw", "0vw", "-8vw"]
  );

  const imageRotate = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [7, 2, -4, -10]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.88, 1, 1.16]
  );

  /* ==========================================
     SECONDARY IMAGE
  ========================================== */

  const secondaryY = useTransform(
    smoothProgress,
    [0, 0.2, 0.45, 0.7, 1],
    ["15vh", "8vh", "-4vh", "-17vh", "-32vh"]
  );

  const secondaryX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["7vw", "0vw", "12vw"]
  );

  const secondaryRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-8, 3, 15]
  );

  const secondaryScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.8, 1, 1.18]
  );

  const secondaryOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.7, 0.95],
    [0.4, 1, 1, 0]
  );

  /* ==========================================
     BODY COPY
  ========================================== */

  const copyY = useTransform(
    smoothProgress,
    [0, 0.3, 0.65, 1],
    ["0vh", "-8vh", "-22vh", "-40vh"]
  );

  const copyX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["0vw", "-4vw", "-12vw"]
  );

  const copyOpacity = useTransform(
    smoothProgress,
    [0, 0.65, 0.9, 1],
    [1, 1, 0.7, 0]
  );

  /* ==========================================
     3D GRID
  ========================================== */

  const gridRotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [65, 25, -15]
  );

  const gridY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["35vh", "0vh", "-35vh"]
  );

  const gridScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 1.7]
  );

  const gridOpacity = useTransform(
    smoothProgress,
    [0, 0.25, 0.7, 1],
    [0, 0.35, 0.18, 0]
  );

  /* ==========================================
     LABEL
  ========================================== */

  const labelY = useTransform(
    smoothProgress,
    [0, 0.3, 1],
    ["0vh", "-4vh", "-18vh"]
  );

  const labelOpacity = useTransform(
    smoothProgress,
    [0, 0.55, 0.85],
    [1, 1, 0]
  );

  /* ==========================================
     CTA
  ========================================== */

  const ctaY = useTransform(
    smoothProgress,
    [0, 0.55, 0.8, 1],
    ["15vh", "10vh", "0vh", "-5vh"]
  );

  const ctaOpacity = useTransform(
    smoothProgress,
    [0.45, 0.65, 0.85, 1],
    [0, 0.5, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="intro-section-3d"
      id="philosophy"
    >
      {/* =================================================
          FIXED 3D STAGE
      ================================================= */}

      <div className="intro-stage">
        <div className="intro-background" />

        {/* Architectural grid */}
        <motion.div
          className="architectural-grid"
          style={{
            rotateX: gridRotateX,
            y: gridY,
            scale: gridScale,
            opacity: gridOpacity,
          }}
        />

        {/* ===============================================
            LABEL
        =============================================== */}

        <motion.div
          className="intro-label-3d"
          style={{
            y: labelY,
            opacity: labelOpacity,
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="label-line-3d" />
          <span>02 / WHO WE ARE</span>
        </motion.div>

        {/* ===============================================
            HEADLINE
        =============================================== */}

        <motion.div
          className="headline-3d-layer"
          style={{
            y: headlineY,
            x: headlineX,
            scale: headlineScale,
            rotate: headlineRotate,
            opacity: headlineOpacity,
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="headline-depth">
              BUILDING
            </div>

            <h2>
              BUILDING
              <br />
              TOMORROW
              <br />
              WITH PURPOSE
              <br />
              <span>TODAY.</span>
            </h2>

            <div className="headline-shadow">
              BUILDING
              <br />
              TOMORROW
              <br />
              WITH PURPOSE
              <br />
              TODAY.
            </div>
          </motion.div>
        </motion.div>

        {/* ===============================================
            MAIN IMAGE
        =============================================== */}

        <motion.div
          className="main-image-3d"
          style={{
            y: imageY,
            x: imageX,
            rotate: imageRotate,
            scale: imageScale,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div className="image-depth-layer layer-one" />
            <div className="image-depth-layer layer-two" />

            <div className="image-frame">
              <img
                src="/images/architecture_editorial.jpg"
                alt="Architectural Detail"
              />

              <div className="image-dark-overlay" />

              <div className="image-coordinates">
                17°23'N
                <br />
                78°29'E
              </div>

              <div className="image-label">
                ARCHITECTURE
              </div>

              <span className="corner top-left" />
              <span className="corner top-right" />
              <span className="corner bottom-left" />
              <span className="corner bottom-right" />
            </div>
          </motion.div>
        </motion.div>

        {/* ===============================================
            SECONDARY IMAGE
        =============================================== */}

        <motion.div
          className="secondary-image-3d"
          style={{
            y: secondaryY,
            x: secondaryX,
            rotate: secondaryRotate,
            scale: secondaryScale,
            opacity: secondaryOpacity,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="secondary-image-frame">
              <img
                src="/images/intro_secondary.jpg"
                alt="Material Detail"
              />

              <div className="secondary-overlay" />
            </div>

            <div className="secondary-tag">
              MATERIAL / 02
            </div>
          </motion.div>
        </motion.div>

        {/* ===============================================
            BODY CONTENT
        =============================================== */}

        <motion.div
          className="intro-copy-3d"
          style={{
            y: copyY,
            x: copyX,
            opacity: copyOpacity,
          }}
        >
          <motion.div 
            className="copy-block primary-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Sthira Axis Infra is a Hyderabad-based real estate developer
              creating considered spaces where architecture, quality and a
              sense of place come together.
            </p>
          </motion.div>

          <motion.div 
            className="copy-block secondary-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              From the selection of a site to the smallest detail of
              construction, we believe every decision should have purpose —
              creating spaces designed not just for today, but for the years
              ahead.
            </p>
          </motion.div>
        </motion.div>

        {/* ===============================================
            CTA
        =============================================== */}

        <motion.a
          href="#approach"
          className="intro-cta-3d"
          style={{
            y: ctaY,
            opacity: ctaOpacity,
          }}
        >
          <span>DISCOVER OUR APPROACH</span>

          <span className="cta-arrow">
            <ArrowRight size={17} strokeWidth={1.5} />
          </span>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          style={{
            opacity: useTransform(
              smoothProgress,
              [0, 0.12],
              [1, 0]
            ),
          }}
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line">
            <div />
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="scroll-progress"
          style={{
            scaleX: smoothProgress,
          }}
        />
      </div>
    </section>
  );
};

export default IntroSection;