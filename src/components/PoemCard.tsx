"use client";

import { motion } from "framer-motion";
import { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
  index: number;
}

export default function PoemCard({ poem, index }: PoemCardProps) {
  const isWarm = index % 2 === 0;

  const titleColor = isWarm
    ? "rgba(255, 235, 180, 0.9)"
    : "rgba(220, 225, 245, 0.9)";

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
          background: "rgba(10, 8, 30, 0.45)",
          backdropFilter: "blur(30px) saturate(1.5)",
          WebkitBackdropFilter: "blur(30px) saturate(1.5)",
          border: "1px solid rgba(255, 220, 150, 0.2)",
          boxShadow:
            "0 0 60px rgba(255, 190, 60, 0.08), 0 0 120px rgba(180, 200, 255, 0.05)",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 0 80px rgba(255, 190, 60, 0.15), 0 0 160px rgba(180, 200, 255, 0.1), 0 0 2px rgba(255, 220, 150, 0.3)",
          borderColor: "rgba(255, 220, 150, 0.35)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold italic text-center mb-2 tracking-wide"
          style={{ color: titleColor, textShadow: titleShadow }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {poem.title}
        </motion.h2>

        <motion.div
          className="w-14 h-[1px] mx-auto mb-8 mt-4"
          style={{ background: accentLine }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          className="text-base md:text-lg leading-[2] text-center font-light"
          style={{ color: "rgba(240, 235, 227, 0.7)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {poem.body}
        </motion.p>
      </motion.div>
    </motion.article>
  );
}
