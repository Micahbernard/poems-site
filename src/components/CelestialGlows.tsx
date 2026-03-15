"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function CelestialGlows() {
  const { scrollYProgress } = useScroll();

  // Sun fades as you scroll but never fully disappears
  const sunOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);
  // Moon gets slightly brighter as you scroll into night
  const moonOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.85, 0.6]);
  // Sky warm wash fades, cool wash grows
  const warmWash = useTransform(scrollYProgress, [0, 0.5], [1, 0.25]);
  const coolWash = useTransform(scrollYProgress, [0, 0.4, 1], [0.6, 0.85, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* ═══ ATMOSPHERIC SKY — layered radial gradient divs ═══ */}

      {/* Warm amber-gold atmosphere bleeding from upper-right (sun side) */}
      <motion.div
        className="absolute"
        style={{
          top: "-30%",
          right: "-20%",
          width: "140%",
          height: "100%",
          background: "radial-gradient(ellipse 60% 60% at 70% 20%, rgba(255, 171, 0, 0.08) 0%, transparent 70%)",
          opacity: warmWash,
        }}
      />
      <motion.div
        className="absolute"
        style={{
          top: "-15%",
          right: "-10%",
          width: "120%",
          height: "80%",
          background: "radial-gradient(ellipse 50% 50% at 75% 15%, rgba(230, 81, 0, 0.06) 0%, transparent 60%)",
          mixBlendMode: "screen",
          opacity: warmWash,
        }}
      />

      {/* Cool silver-lavender atmosphere bleeding from lower-left (moon side) */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-30%",
          left: "-20%",
          width: "140%",
          height: "100%",
          background: "radial-gradient(ellipse 60% 60% at 25% 80%, rgba(121, 134, 203, 0.08) 0%, transparent 70%)",
          opacity: coolWash,
        }}
      />
      <motion.div
        className="absolute"
        style={{
          bottom: "-15%",
          left: "-10%",
          width: "120%",
          height: "80%",
          background: "radial-gradient(ellipse 50% 50% at 20% 85%, rgba(26, 35, 126, 0.06) 0%, transparent 60%)",
          mixBlendMode: "screen",
          opacity: coolWash,
        }}
      />

      {/* Deep indigo center of the sky */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13, 5, 30, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* ═══ PERSISTENT SUN GLOW — doubled radius, smooth radial bloom ═══ */}
      <motion.div
        className="absolute"
        style={{
          top: "-400px",
          right: "-350px",
          width: "1600px",
          height: "1600px",
          opacity: sunOpacity,
        }}
      >
        {/* Outermost bleed — washes the entire upper-right quadrant */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(230, 81, 0, 0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Wide amber wash */}
        <div
          className="absolute inset-[8%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 171, 0, 0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        {/* Golden glow */}
        <div
          className="absolute inset-[15%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 213, 79, 0.1) 0%, transparent 60%)",
            filter: "blur(45px)",
          }}
        />
        {/* Warm inner glow */}
        <div
          className="absolute inset-[22%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 249, 196, 0.18) 0%, transparent 55%)",
            filter: "blur(30px)",
          }}
        />
        {/* Bright core glow */}
        <div
          className="absolute inset-[30%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 240, 0.25) 0%, transparent 50%)",
            filter: "blur(20px)",
          }}
        />
        {/* White-hot center */}
        <motion.div
          className="absolute inset-[38%]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 249, 196, 0.06) 45%, transparent 65%)",
            filter: "blur(8px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ═══ PERSISTENT MOON GLOW — doubled radius, outward-glowing crescent ═══ */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-300px",
          left: "-250px",
          width: "1200px",
          height: "1200px",
          opacity: moonOpacity,
        }}
      >
        {/* Outermost cool wash */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 40% 50%, rgba(26, 35, 126, 0.04) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Indigo halo */}
        <div
          className="absolute inset-[6%]"
          style={{
            background: "radial-gradient(circle at 40% 50%, rgba(57, 73, 171, 0.06) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        {/* Steel blue glow */}
        <div
          className="absolute inset-[14%]"
          style={{
            background: "radial-gradient(circle at 40% 50%, rgba(121, 134, 203, 0.1) 0%, transparent 55%)",
            filter: "blur(35px)",
          }}
        />
        {/* Silver glow */}
        <div
          className="absolute inset-[22%]"
          style={{
            background: "radial-gradient(circle at 38% 50%, rgba(176, 190, 197, 0.14) 0%, transparent 50%)",
            filter: "blur(22px)",
          }}
        />
        {/* Lavender inner */}
        <div
          className="absolute inset-[30%]"
          style={{
            background: "radial-gradient(circle at 38% 50%, rgba(232, 234, 246, 0.18) 0%, transparent 48%)",
            filter: "blur(12px)",
          }}
        />
        {/* Bright white crescent body */}
        <div
          className="absolute inset-[35%]"
          style={{
            background: "radial-gradient(circle at 32% 48%, rgba(255, 255, 255, 0.3) 0%, rgba(240, 242, 255, 0.12) 20%, transparent 42%)",
            filter: "blur(5px)",
          }}
        />
        {/* Crescent carve — subtle dark shadow to hint crescent */}
        <div
          className="absolute inset-[36%]"
          style={{
            background: "radial-gradient(circle at 63% 46%, rgba(5, 2, 15, 0.55) 0%, rgba(5, 2, 15, 0.25) 15%, transparent 32%)",
          }}
        />
        {/* Aureole ring */}
        <motion.div
          className="absolute inset-[28%] rounded-full"
          style={{
            border: "1px solid rgba(200, 210, 240, 0.04)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
