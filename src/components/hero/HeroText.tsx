import { motion } from "framer-motion";

export function HeroText() {
  return (
    <div className="flex-1 flex flex-col justify-center items-start md:items-start w-full md:w-1/2 h-full py-20 md:py-0">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-left"
        style={{
          textShadow: `
            2px 0 0 #00ffff,
            -2px 0 0 #ff00ff,
            0 2px 0 #00ffff,
            0 -2px 0 #ff00ff
          `,
          filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
        }}
      >
        PROYECTO GARRA MECÁNICA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-white/80 text-base md:text-lg lg:text-xl text-left"
      >
        Diseño 3D | Autodesk Fusion 360
      </motion.p>
    </div>
  );
}

