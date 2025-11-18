import { motion } from "framer-motion";

export function HeroCTA() {
  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToNextSection}
        className="px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-white rounded-lg font-semibold text-base md:text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2 group"
      >
        Ver más
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-cyan-400"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

