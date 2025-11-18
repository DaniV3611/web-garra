import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { AnatomiaBlock } from "./data";

interface AnatomiaCardProps {
  block: AnatomiaBlock;
}

export const AnatomiaCard = forwardRef<HTMLDivElement, AnatomiaCardProps>(
  ({ block }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <span className="text-5xl md:text-6xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
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

