import { HeroSceneCanvas } from "./hero/HeroSceneCanvas";
import { HeroText } from "./hero/HeroText";
import { HeroCTA } from "./hero/HeroCTA";

export default function HeroGarra() {
  return (
    <section className="relative h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        <HeroText />
        <HeroSceneCanvas />
      </div>
      <HeroCTA />
    </section>
  );
}

