"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgressMoon() {
  const { scrollYProgress } = useScroll();

  // Clip path moves from fully covering (new moon) to fully revealed (full moon)
  // We use a circle clip that shrinks from right to reveal the bright moon
  const clipX = useTransform(scrollYProgress, [0, 1], [55, 100]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <defs>
          <clipPath id="moonReveal">
            <motion.circle cx={clipX} cy="10" r="9" />
          </clipPath>
        </defs>
        {/* Dark base */}
        <circle cx="10" cy="10" r="8" fill="rgba(255, 255, 255, 0.06)" />
        {/* Bright moon revealed by clip */}
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="rgba(220, 225, 240, 0.5)"
          clipPath="url(#moonReveal)"
        />
      </svg>
    </div>
  );
}
