"use client";

import { motion } from "framer-motion";
import { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
  index: number;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function PoemCard({ poem, index }: PoemCardProps) {
  const isWarm = index % 2 === 0;

  // Dual-lit box-shadows — warm gold from top, cool silver from bottom on ALL cards
  const restShadow =
    "0 -8px 40px rgba(255, 213, 79, 0.04), 0 8px 40px rgba(176, 190, 220, 0.04), 0 0 1px rgba(255, 255, 255, 0.06)";

  const hoverShadow =
    "0 -14px 70px rgba(255, 213, 79, 0.1), 0 14px 70px rgba(176, 190, 220, 0.1), 0 0 100px rgba(255, 213, 79, 0.04), 0 0 100px rgba(121, 134, 203, 0.04), 0 0 2px rgba(255, 255, 255, 0.1)";

  const titleColor = isWarm ? "rgba(255, 235, 180, 0.9)" : "rgba(220, 225, 245, 0.9)";

  const titleShadow = isWarm
    ? "0 0 20px rgba(255, 213, 79, 0.15), 0 0 40px rgba(255, 213, 79, 0.06)"
    : "0 0 20px rgba(176, 190, 220, 0.15), 0 0 40px rgba(121, 134, 203, 0.06)";

  const accentLine = isWarm
    ? "linear-gradient(90deg, transparent, rgba(255, 213, 79, 0.15), transparent)"
    : "linear-gradient(90deg, transparent, rgba(176, 190, 220, 0.15), transparent)";

  return (
    <motion.article
      className="relative max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 50, damping: 18 }}
    >
      <motion.div
        className="relative rounded-2xl p-8 md:p-12 cursor-default"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: restShadow,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: hoverShadow,
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
        transition={{ duration: 0.4, ease }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold italic text-center mb-2 tracking-wide"
          style={{ color: titleColor, textShadow: titleShadow }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {poem.title}
        </motion.h2>

        <motion.div
          className="w-14 h-[1px] mx-auto mb-8 mt-4"
          style={{ background: accentLine }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        />

        <motion.p
          className="text-base md:text-lg leading-[2] text-center font-light"
          style={{ color: "rgba(240, 235, 227, 0.7)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {poem.body}
        </motion.p>
      </motion.div>
    </motion.article>
  );
}
