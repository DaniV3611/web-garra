import { useState } from "react";
import { motion } from "framer-motion";
import type { SpecificationCardData } from "./specificationsData";

interface SpecificationCardProps {
  card: SpecificationCardData;
  index: number;
}

export function SpecificationCard({ card, index }: SpecificationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[400px] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className={`relative w-full h-full bg-linear-to-br ${card.gradient} p-8 flex flex-col justify-between border-2 border-white/20 shadow-2xl`}
            style={{
              boxShadow: `0 0 40px ${card.glowColor}, inset 0 0 40px rgba(255, 255, 255, 0.1)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 2px 2px, white 1px, transparent 0)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-white mb-6"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {card.title}
              </h3>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white/80 text-sm mb-1">
                  {card.frontContent.mainLabel}
                </p>
                <p className="text-white text-2xl font-bold">
                  {card.frontContent.mainValue}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white/80 text-sm mb-1">
                  {card.frontContent.secondaryLabel}
                </p>
                <p className="text-white text-xl font-semibold">
                  {card.frontContent.secondaryValue}
                </p>
              </div>
            </div>

            <motion.div
              className="absolute bottom-4 right-4 text-white/60"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden cursor-pointer rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full bg-slate-900 p-8 flex flex-col border-2 border-cyan-500/30 shadow-2xl">
            <div
              className="absolute inset-0 rounded-xl"
              style={{ boxShadow: `inset 0 0 30px ${card.glowColor}` }}
            />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
                {card.title}
              </h3>
              <div className="flex-1 space-y-3 mb-4">
                {card.backContent.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-cyan-500/20"
                  >
                    <span className="text-white/70 text-sm">{item.label}</span>
                    <span className="text-cyan-400 font-semibold text-sm">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-white/60 text-xs leading-relaxed">
                  {card.backContent.description}
                </p>
              </div>

              <motion.div
                className="absolute bottom-4 right-4 text-cyan-400/60"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

