import { motion } from "framer-motion";
import type { ProcessPhase } from "./phases";

interface PhaseCardProps {
  phase: ProcessPhase;
  isActive: boolean;
}

export function PhaseCard({ phase, isActive }: PhaseCardProps) {
  return (
    <div className="shrink-0 w-screen h-full flex items-center justify-center px-4 md:px-8" style={{ minWidth: "100vw" }}>
      <motion.div
        className={`relative top-32 w-full max-w-6xl h-[50vh] bg-linear-to-br ${phase.gradient} rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl`}
        style={{
          boxShadow: isActive
            ? `0 0 60px ${phase.glowColor}, inset 0 0 60px rgba(255, 255, 255, 0.1)`
            : `0 0 20px ${phase.glowColor}`,
        }}
        animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-black/20 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-8xl"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {phase.icon}
              </motion.div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 flex flex-col justify-between bg-black/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-sm md:text-base font-mono mb-4"
            >
              {phase.date}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            >
              {phase.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-base md:text-lg leading-relaxed mb-6 flex-1"
            >
              {phase.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <p className="text-white/80 text-sm md:text-base">{phase.tools}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

