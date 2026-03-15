"use client";

import { useEffect, useRef } from "react";

function generateStarShadows(count: number, spread: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(Math.random() * spread);
    const y = Math.round(Math.random() * spread);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

export default function StarField() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (layer1Ref.current) {
      layer1Ref.current.style.boxShadow = generateStarShadows(200, 2500);
    }
    if (layer2Ref.current) {
      layer2Ref.current.style.boxShadow = generateStarShadows(100, 2500);
    }
    if (layer3Ref.current) {
      layer3Ref.current.style.boxShadow = generateStarShadows(35, 2500);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: tiny 1px stars, low opacity, slow drift */}
      <div
        ref={layer1Ref}
        className="absolute"
        style={{
          width: "1px",
          height: "1px",
          opacity: 0.3,
          animation: "drift-1 40s ease-in-out infinite",
        }}
      />

      {/* Layer 2: 1.5px stars, medium opacity, medium drift */}
      <div
        ref={layer2Ref}
        className="absolute"
        style={{
          width: "1.5px",
          height: "1.5px",
          opacity: 0.5,
          animation: "drift-2 30s ease-in-out infinite",
        }}
      />

      {/* Layer 3: larger 2px stars, high opacity, twinkle */}
      <div
        ref={layer3Ref}
        className="absolute"
        style={{
          width: "2px",
          height: "2px",
          opacity: 0.8,
          animation: "twinkle-slow 6s ease-in-out infinite, drift-1 50s ease-in-out infinite",
        }}
      />
    </div>
  );
}
