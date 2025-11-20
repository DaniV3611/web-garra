import { motion } from "framer-motion";
import { PhasePanel } from "./funcionamiento/PhasePanel";
import { PHASES } from "./funcionamiento/phases";

export default function FuncionamientoGarra() {
  return (
    <section
      id="funcionamiento"
      className="relative w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-6 md:pb-10 lg:pb-12 px-6 md:px-12 lg:px-20"
    >
      <div className="mb-10 md:mb-14 text-center">
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
          MECÁNICA DE FUNCIONAMIENTO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 text-lg md:text-xl"
        >
          Diseño y Simulación en Autodesk Fusion 360
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
        {PHASES.map((phaseData, index) => (
          <PhasePanel
            key={phaseData.phase}
            phase={phaseData.phase}
            title={phaseData.title}
            parameter={phaseData.parameter}
            value={phaseData.value}
            image={phaseData.image}
            imageAlt={phaseData.imageAlt}
            index={index}
          />
        ))}
      </div>

      <div className="relative mt-4 md:mt-6">
        <div className="relative h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mb-4 md:mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PHASES.map((phaseData, index) => (
            <motion.div
              key={`param-${phaseData.phase}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-8 w-0.5 bg-linear-to-t from-cyan-500/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
