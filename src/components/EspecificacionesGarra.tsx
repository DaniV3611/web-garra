import { motion } from "framer-motion";
import { specifications } from "./especificaciones/specificationsData";
import { SpecificationCard } from "./especificaciones/SpecificationCard";

export default function EspecificacionesGarra() {
  return (
    <section
      id="especificaciones"
      className="relative min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        <div className="mb-16 text-center">
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
            ESPECIFICACIONES TÉCNICAS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-400 text-lg md:text-xl"
          >
            Detalles completos del diseño y capacidades
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specifications.map((card, index) => (
            <SpecificationCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <span>Haz clic en las tarjetas para ver más detalles</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

