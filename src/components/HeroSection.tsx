"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "balanced" | "moon" | "sun";

export default function HeroSection() {
  const starsRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<Theme>("balanced");
  const [label, setLabel] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);
  const labelTimer = useRef<ReturnType<typeof setTimeout>>();

  // Generate stars on mount
  useEffect(() => {
    const el = starsRef.current;
    if (!el || el.children.length > 0) return;
    for (let i = 0; i < 110; i++) {
      const s = document.createElement("div");
      s.className = "hero-star";
      const size =
        Math.random() < 0.85
          ? 0.4 + Math.random() * 1
          : 1.1 + Math.random() * 1.3;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;opacity:${0.1 + Math.random() * 0.45};`;
      if (Math.random() < 0.25) {
        s.style.animation = `hero-twinkle ${3 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`;
      }
      el.appendChild(s);
    }
  }, []);

  // Apply theme class on <body>
  useEffect(() => {
    document.body.classList.remove("theme-moon", "theme-sun");
    if (theme === "moon") document.body.classList.add("theme-moon");
    if (theme === "sun") document.body.classList.add("theme-sun");
  }, [theme]);

  function flash(txt: string) {
    setLabel(txt);
    setLabelVisible(true);
    clearTimeout(labelTimer.current);
    labelTimer.current = setTimeout(() => setLabelVisible(false), 2200);
  }

  function toggleTheme(t: "moon" | "sun") {
    if (theme === t) {
      setTheme("balanced");
      flash("Balanced");
    } else {
      setTheme(t);
      flash(t === "moon" ? "Lunar" : "Solar");
    }
  }

  return (
    <section className="hero-scene">
      {/* Stars */}
      <div ref={starsRef} className="hero-stars" />

      {/* ═══ MOON — left, centered vertically, partially off-screen ═══ */}
      <div
        className="hero-celestial hero-moon"
        role="button"
        aria-label="Lunar theme"
        tabIndex={0}
        onClick={() => toggleTheme("moon")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme("moon");
          }
        }}
      >
        <div className="hero-glow-layer moon-glow-ambient" />
        <div className="hero-glow-layer moon-glow-outer" />
        <div className="hero-glow-layer moon-glow-inner" />
        <div className="hero-moon-body" />
        <div className="hero-crescent-shadow" />
      </div>

      {/* ═══ SUN — right, upper area, partially off-screen ═══ */}
      <div
        className="hero-celestial hero-sun"
        role="button"
        aria-label="Solar theme"
        tabIndex={0}
        onClick={() => toggleTheme("sun")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme("sun");
          }
        }}
      >
        <div className="hero-glow-layer sun-glow-ambient" />
        <div className="hero-glow-layer sun-glow-outer" />
        <div className="hero-glow-layer sun-glow-inner" />
        <div className="hero-sun-body" />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="hero-content">
        <h1 className="hero-title">Our love was written in the first moments of the universe</h1>
        <p className="hero-subtitle">dedicated to mi amor, Eri, with all the love in every universe</p>
        <div className="hero-divider" />
      </div>

      {/* Theme label */}
      <div className={`hero-theme-label ${labelVisible ? "visible" : ""}`}>
        {label}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">Scroll</div>

      {/* Logo badge */}
      <div className="hero-logo-badge">N</div>
    </section>
  );
}
