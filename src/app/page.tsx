import StarField from "@/components/StarField";
import CelestialGlows from "@/components/CelestialGlows";
import HeroSection from "@/components/HeroSection";
import PoemCard from "@/components/PoemCard";
import ScrollProgressMoon from "@/components/ScrollProgressMoon";
import { poems } from "@/data/poems";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      {/* Fixed background layers */}
      <StarField />
      <CelestialGlows />
      <ScrollProgressMoon />

      {/* Content */}
      <HeroSection />

      <section className="relative z-10 px-6 py-32 space-y-24 md:space-y-32">
        {poems.map((poem, index) => (
          <PoemCard key={poem.id} poem={poem} index={index} />
        ))}
      </section>

      <footer className="relative z-10 py-24 text-center">
        <div
          className="w-20 h-[1px] mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255, 252, 240, 0.06), transparent)" }}
        />
        <p
          className="text-xs tracking-[0.4em] uppercase italic font-light"
          style={{ color: "rgba(240, 235, 227, 0.1)" }}
        >
          With all my love
        </p>
      </footer>
    </main>
  );
}
