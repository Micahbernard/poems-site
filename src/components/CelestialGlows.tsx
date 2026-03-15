"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Persistent atmospheric glow for the poem section.
 * Sun and moon bodies live in HeroSection — this only provides
 * faint residual light that persists as user scrolls into poems.
 */
export default function CelestialGlows() {
  const { scrollYProgress } = useScroll();

  // Only visible once user scrolls past hero
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.4], [0, 0, 0.6]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Faint warm glow — upper-right residual sun light */}
      <motion.div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse 50% 50% at 70% 20%, rgba(255, 180, 60, 0.05) 0%, transparent 70%)",
          opacity,
        }}
      />

      {/* Faint cool glow — left residual moon light */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(ellipse 50% 50% at 25% 50%, rgba(150, 180, 255, 0.04) 0%, transparent 70%)",
          opacity,
        }}
      />
    </div>
  );
}
