"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const titleWords = ["Written", "in", "the", "Stars"];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sunY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ═══ THE SUN — massive smooth radial bloom, upper-right, bleeds toward center ═══ */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-200px",
          right: "-100px",
          width: "1200px",
          height: "1200px",
          y: sunY,
        }}
      >
        {/* Layer 8: outermost — bleeds past center */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(230, 81, 0, 0.05) 0%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />
        {/* Layer 7: deep amber */}
        <div
          className="absolute inset-[3%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 111, 0, 0.07) 0%, transparent 68%)",
            filter: "blur(80px)",
          }}
        />
        {/* Layer 6: warm amber */}
        <div
          className="absolute inset-[8%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 171, 0, 0.1) 0%, transparent 62%)",
            filter: "blur(60px)",
          }}
        />
        {/* Layer 5: golden */}
        <div
          className="absolute inset-[15%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 213, 79, 0.15) 0%, transparent 58%)",
            filter: "blur(45px)",
          }}
        />
        {/* Layer 4: warm yellow */}
        <div
          className="absolute inset-[22%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 249, 196, 0.2) 0%, transparent 52%)",
            filter: "blur(30px)",
          }}
        />
        {/* Layer 3: pale warm */}
        <div
          className="absolute inset-[30%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 240, 0.3) 0%, transparent 48%)",
            filter: "blur(18px)",
          }}
        />
        {/* Layer 2: bright white — pulsing */}
        <motion.div
          className="absolute inset-[36%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 240, 0.15) 35%, transparent 60%)",
            filter: "blur(8px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Layer 1: white-hot core */}
        <motion.div
          className="absolute inset-[42%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 65%)",
            filter: "blur(3px)",
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ═══ TITLE — large and commanding ═══ */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity: contentOpacity }}
      >
        <h1 className="flex flex-wrap justify-center gap-x-5 md:gap-x-7 text-6xl md:text-8xl lg:text-[8rem] font-semibold italic tracking-wide leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block"
              style={{
                color: "rgba(255, 252, 240, 0.95)",
                textShadow:
                  "0 0 40px rgba(255, 248, 225, 0.3), 0 0 80px rgba(255, 213, 79, 0.15), 0 0 120px rgba(176, 190, 197, 0.08)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 text-sm md:text-base tracking-[0.35em] uppercase font-light"
          style={{ color: "rgba(240, 235, 227, 0.3)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease }}
        >
          Love poems from my heart to yours
        </motion.p>

        <motion.div
          className="mt-8 w-32 h-[1px] mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255, 252, 240, 0.12), transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1.2, ease }}
        />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1, ease }}
      >
        <span className="text-[9px] tracking-[0.5em] uppercase" style={{ color: "rgba(255, 252, 240, 0.12)" }}>
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-5"
          style={{ background: "linear-gradient(180deg, rgba(255, 252, 240, 0.12), transparent)" }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
