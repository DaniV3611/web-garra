import { motion } from "framer-motion";

interface PhasePanelProps {
  phase: "apertura" | "cierre" | "agarre";
  title: string;
  parameter: string;
  value: string;
  index: number;
}

const getImagePlaceholder = () => null;

export function PhasePanel({ phase, title, parameter, value, index }: PhasePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full aspect-square bg-linear-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-lg border border-cyan-500/30 overflow-hidden mb-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-cyan-500/30 to-transparent" />
        {getImagePlaceholder() ? (
          <img
            src={getImagePlaceholder()!}
            alt={`Garra mecánica - Fase ${phase}`}
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-slate-700/50 border-2 border-cyan-500/50 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-cyan-400/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-cyan-400/70 text-sm font-medium">{title}</p>
              <p className="text-white/40 text-xs mt-1">Imagen placeholder</p>
            </div>
          </div>
        )}
      </div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className="text-2xl md:text-3xl font-bold text-white mb-2"
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}
