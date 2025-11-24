import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { anatomiaBlocks } from "./anatomia/data";
import { AnatomiaCard } from "./anatomia/AnatomiaCard";

export default function AnatomiaGarra() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const registerBlock = useCallback(
    (element: HTMLDivElement | null, index: number) => {
      blocksRef.current[index] = element;
    },
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!sectionRef.current) return;

    const triggers: ScrollTrigger[] = [];

    blocksRef.current.forEach((block, index) => {
      if (!block) return;

      const animation = gsap.fromTo(
        block,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            end: "bottom 60%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          },
        }
      );

      if (animation.scrollTrigger) {
        triggers.push(animation.scrollTrigger);
      }

      const syncTrigger = ScrollTrigger.create({
        trigger: block,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });

      triggers.push(syncTrigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const activeBlock = anatomiaBlocks[activeIndex] ?? anatomiaBlocks[0];

  return (
    <section
      ref={sectionRef}
      id="anatomia"
      className="relative min-h-screen w-full bg-slate-950 py-20 px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="mb-12 md:mb-16 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          style={{
            textShadow: `
              0 0 20px rgba(6, 182, 212, 0.5),
              0 0 40px rgba(6, 182, 212, 0.3)
            `,
          }}
        >
          PROYECTO GARRA MECÁNICA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 text-lg md:text-xl"
        >
          Vista Explosionada / Diseño en Autodesk Fusion 360
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:w-1/2">
          <div className="sticky top-6 md:top-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-slate-900/50 rounded-2xl border border-cyan-500/30 p-6 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900/80 border border-cyan-500/20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeBlock.number}
                    src={activeBlock.image}
                    alt={activeBlock.title}
                    loading="lazy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 bg-gradient-to-b from-transparent from-60% to-slate-900 z-50">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-200/80">
                    <span>ANATOMÍA</span>
                    <span>{activeBlock.number}</span>
                  </div>
                  <div>
                    <p className="text-cyan-400 text-3xl font-bold">
                      {activeBlock.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-lg p-3 text-center text-xs text-white/70">
                  Material: {activeBlock.material}
                </div>
                <div className="bg-slate-900/70 border border-cyan-500/20 rounded-lg p-3 text-center text-xs text-white/70">
                  Peso: {activeBlock.peso}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 lg:w-1/2 flex flex-col gap-6">
          {anatomiaBlocks.map((block, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={block.number}
                ref={(element) => registerBlock(element, index)}
                className="min-h-[75vh] flex items-center"
              >
                <AnatomiaCard block={block} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
