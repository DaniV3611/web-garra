import { motion } from "framer-motion";

interface PhasePanelProps {
  phase: "apertura" | "cierre" | "agarre";
  title: string;
  parameter: string;
  value: string;
  image: string;
  imageAlt: string;
  index: number;
}

export function PhasePanel({
  phase,
  title,
  parameter,
  value,
  image,
  imageAlt,
  index,
}: PhasePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full aspect-square bg-linear-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-lg border border-cyan-500/30 overflow-hidden mb-4 flex items-center justify-center p-6">
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
        <img
          src={image}
          alt={imageAlt || `Garra mecánica - Fase ${phase}`}
          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_15px_35px_rgba(6,182,212,0.25)]"
          loading="lazy"
        />
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
