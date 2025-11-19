import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { AnatomiaBlock } from "./data";

interface AnatomiaCardProps {
  block: AnatomiaBlock;
  isActive?: boolean;
}

export const AnatomiaCard = forwardRef<HTMLDivElement, AnatomiaCardProps>(
  ({ block, isActive = false }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ scale: isActive ? 1.02 : 1, opacity: isActive ? 1 : 0.85 }}
      className={`bg-slate-900/80 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 group ${
        isActive
          ? "border-cyan-400/80 shadow-lg shadow-cyan-500/30"
          : "border-cyan-500/20 hover:border-cyan-400/40"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <span
            className={`text-5xl md:text-6xl font-bold transition-colors ${
              isActive ? "text-cyan-300" : "text-cyan-500"
            }`}
          >
            {block.number}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {block.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {block.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
);

AnatomiaCard.displayName = "AnatomiaCard";
