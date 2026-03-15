"use client";

import { motion } from "framer-motion";

export default function CelestialDivider() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center h-[30vh]">
      {/* Sun-and-moon ornament connected by star line */}
      <motion.div
        className="flex items-center gap-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg width="260" height="40" viewBox="0 0 260 40" fill="none">
          {/* Small sun — left */}
          <circle cx="20" cy="20" r="8" fill="rgba(255, 213, 79, 0.25)" />
          <circle cx="20" cy="20" r="5" fill="rgba(255, 249, 196, 0.4)" />
          <circle cx="20" cy="20" r="2.5" fill="rgba(255, 255, 255, 0.5)" />

          {/* Star dots connecting line */}
          <circle cx="60" cy="20" r="1" fill="rgba(255, 252, 240, 0.15)" />
          <circle cx="85" cy="20" r="1.2" fill="rgba(255, 252, 240, 0.2)" />
          <circle cx="110" cy="20" r="0.8" fill="rgba(255, 252, 240, 0.12)" />
          <circle cx="130" cy="20" r="1.5" fill="rgba(255, 252, 240, 0.25)" />
          <circle cx="150" cy="20" r="0.8" fill="rgba(255, 252, 240, 0.12)" />
          <circle cx="175" cy="20" r="1.2" fill="rgba(255, 252, 240, 0.2)" />
          <circle cx="200" cy="20" r="1" fill="rgba(255, 252, 240, 0.15)" />

          {/* Small crescent moon — right */}
          <circle cx="240" cy="20" r="8" fill="rgba(200, 210, 240, 0.25)" />
          <circle cx="245" cy="17" r="6.5" fill="#04020e" />
        </svg>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-base md:text-lg italic font-light tracking-wide"
        style={{ color: "rgba(240, 235, 227, 0.12)" }}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        for you, always
      </motion.p>
    </section>
  );
}
