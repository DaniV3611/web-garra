import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { phases } from "./proceso/phases";
import { PhaseCard } from "./proceso/PhaseCard";
import { useHorizontalScroll } from "./proceso/useHorizontalScroll";

export default function ProcesoGarra() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  useHorizontalScroll({
    sectionRef,
    horizontalContainerRef,
    phaseCount: phases.length,
    onPhaseChange: setCurrentPhase,
  });

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative w-full min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div
        className="pin-wrapper relative z-10 w-full"
        style={{ height: "100vh" }}
      >
        <div className="absolute top-20 left-0 right-0 z-10 text-center px-6 pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
            style={{
              textShadow: `
                0 0 20px rgba(6, 182, 212, 0.5),
                0 0 40px rgba(6, 182, 212, 0.3)
              `,
            }}
          >
            El Proceso Detrás de la Garra Mecánica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-400 text-sm md:text-base max-w-3xl mx-auto"
          >
            Un viaje interactivo a través de las cinco fases clave de nuestro
            proyecto de ingeniería, desde la idea inicial hasta el modelo final
            renderizado en Autodesk Fusion 360.
          </motion.p>
        </div>

        <div
          ref={horizontalContainerRef}
          className="flex flex-row items-center h-full relative z-20"
          style={{
            willChange: "transform",
            width: `${phases.length * 100}vw`,
            height: "70vh",
            position: "relative",
          }}
        >
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isActive={index === currentPhase}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-30 px-6 pointer-events-auto">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentPhase + 1) / phases.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex justify-between mt-4">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      index <= currentPhase
                        ? "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50"
                        : "bg-slate-700 border-slate-600"
                    }`}
                    animate={{
                      scale: index === currentPhase ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: index === currentPhase ? Infinity : 0,
                    }}
                  />
                  <span
                    className={`text-xs md:text-sm font-medium transition-colors ${
                      index <= currentPhase ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    {phase.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <p className="text-white/60 text-sm md:text-base">
              PASO {currentPhase + 1} DE {phases.length}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
