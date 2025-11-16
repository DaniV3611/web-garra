import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface ProcessPhase {
  id: number;
  name: string;
  title: string;
  date: string;
  description: string;
  tools: string;
  gradient: string;
  glowColor: string;
  icon: string;
}

const phases: ProcessPhase[] = [
  {
    id: 1,
    name: "Concepto",
    title: "Conceptualización",
    date: "ENERO 2024",
    description:
      "La idea inicial toma forma a través de bocetos y diagramas conceptuales. Se definen los requisitos funcionales, dimensiones y objetivos del proyecto.",
    tools: "Herramientas Utilizadas: Sketching, Brainstorming, Diseño Conceptual",
    gradient: "from-purple-600 via-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    icon: "💡",
  },
  {
    id: 2,
    name: "Modelado",
    title: "Modelado 3D",
    date: "FEBRERO 2024",
    description:
      "La conceptualización toma forma digital utilizando Autodesk Fusion 360. Cada componente fue modelado con precisión para asegurar su funcionalidad y ensamble.",
    tools: "Herramientas Utilizadas: Autodesk Fusion 360",
    gradient: "from-cyan-600 via-blue-500 to-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    icon: "🎨",
  },
  {
    id: 3,
    name: "Simulación",
    title: "Simulación y Análisis",
    date: "MARZO 2024",
    description:
      "Se realizan simulaciones de movimiento, análisis de fuerzas y pruebas de resistencia para validar el diseño antes de la fabricación.",
    tools: "Herramientas Utilizadas: Autodesk Fusion 360 Simulation, Análisis FEA",
    gradient: "from-emerald-600 via-teal-500 to-green-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    icon: "⚙️",
  },
  {
    id: 4,
    name: "Refinamiento",
    title: "Refinamiento y Optimización",
    date: "ABRIL 2024",
    description:
      "Iteración continua del diseño basada en los resultados de simulación. Optimización de geometrías, reducción de peso y mejora de la eficiencia.",
    tools: "Herramientas Utilizadas: Autodesk Fusion 360, Iteración de Diseño",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.4)",
    icon: "🔧",
  },
  {
    id: 5,
    name: "Final",
    title: "Modelo Final",
    date: "MAYO 2024",
    description:
      "El diseño final renderizado con materiales y texturas realistas. Documentación completa del proyecto lista para fabricación o presentación.",
    tools: "Herramientas Utilizadas: Autodesk Fusion 360 Rendering, Documentación Técnica",
    gradient: "from-rose-600 via-pink-500 to-red-400",
    glowColor: "rgba(225, 29, 72, 0.4)",
    icon: "✨",
  },
];

function PhaseCard({ phase, isActive }: { phase: ProcessPhase; isActive: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0 w-full md:w-[80vw] lg:w-[70vw] h-[70vh] md:h-[80vh] px-4 md:px-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative w-full h-full bg-gradient-to-br ${phase.gradient} rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl`}
        style={{
          boxShadow: isActive
            ? `0 0 60px ${phase.glowColor}, inset 0 0 60px rgba(255, 255, 255, 0.1)`
            : `0 0 20px ${phase.glowColor}`,
        }}
      >
        {/* Patrón de fondo */}
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

        {/* Contenido de la card */}
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Lado izquierdo: Imagen/Modelo 3D */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-black/20 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder para imagen 3D - aquí puedes agregar un Canvas con el modelo */}
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  className="text-8xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {phase.icon}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Lado derecho: Información */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 flex flex-col justify-between bg-black/30 backdrop-blur-sm">
            {/* Fecha */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-sm md:text-base font-mono mb-4"
            >
              {phase.date}
            </motion.div>

            {/* Título */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              }}
            >
              {phase.title}
            </motion.h3>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-base md:text-lg leading-relaxed mb-6 flex-1"
            >
              {phase.description}
            </motion.p>

            {/* Herramientas */}
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
      </div>
    </motion.div>
  );
}

export default function ProcesoGarra() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Scroll horizontal con snap
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / phases.length;
      const phase = Math.round(scrollLeft / cardWidth);
      const clampedPhase = Math.max(0, Math.min(phase, phases.length - 1));
      
      setCurrentPhase((prev) => {
        if (prev !== clampedPhase) {
          return clampedPhase;
        }
        return prev;
      });
    };

    // Detectar scroll inicial
    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegación con flechas
  const goToPhase = useCallback((direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isScrollingRef.current = true;
    const cardWidth = container.scrollWidth / phases.length;
    
    setCurrentPhase((prev) => {
      const newPhase =
        direction === "next"
          ? Math.min(prev + 1, phases.length - 1)
          : Math.max(prev - 1, 0);
      
      container.scrollTo({
        left: newPhase * cardWidth,
        behavior: "smooth",
      });
      
      return newPhase;
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Solo navegar si no estamos escribiendo en un input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") goToPhase("prev");
      if (e.key === "ArrowRight") goToPhase("next");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [goToPhase]);

  return (
    <section
      id="proceso"
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        {/* Título principal */}
        <div className="mb-12 text-center">
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
            El Proceso Detrás de la Garra Mecánica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Un viaje interactivo a través de las cinco fases clave de nuestro
            proyecto de ingeniería, desde la idea inicial hasta el modelo final
            renderizado en Autodesk Fusion 360.
          </motion.p>
        </div>

        {/* Contenedor de scroll horizontal */}
        <div className="relative">
          {/* Botones de navegación */}
          <motion.button
            onClick={() => goToPhase("prev")}
            disabled={currentPhase === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 flex items-center justify-center transition-all ${
              currentPhase === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-cyan-500/20 hover:scale-110"
            }`}
            whileHover={{ scale: currentPhase === 0 ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => goToPhase("next")}
            disabled={currentPhase === phases.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 flex items-center justify-center transition-all ${
              currentPhase === phases.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-cyan-500/20 hover:scale-110"
            }`}
            whileHover={{ scale: currentPhase === phases.length - 1 ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </motion.button>

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className="flex-shrink-0 w-full snap-center"
                style={{ scrollSnapAlign: "start" }}
              >
                <PhaseCard phase={phase} isActive={index === currentPhase} />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline y controles */}
        <div className="mt-12">
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Línea de progreso */}
            <div className="relative h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentPhase + 1) / phases.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Puntos de fase */}
            <div className="flex justify-between mt-4">
              {phases.map((phase, index) => (
                <motion.button
                  key={phase.id}
                  onClick={() => {
                    const container = scrollContainerRef.current;
                    if (container) {
                      const cardWidth = container.scrollWidth / phases.length;
                      container.scrollTo({
                        left: index * cardWidth,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      index <= currentPhase
                        ? "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50"
                        : "bg-slate-700 border-slate-600"
                    }`}
                    animate={{
                      scale: index === currentPhase ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: index === currentPhase ? Infinity : 0,
                    }}
                  />
                  <span
                    className={`text-xs md:text-sm font-medium transition-colors ${
                      index <= currentPhase
                        ? "text-cyan-400"
                        : "text-slate-500"
                    }`}
                  >
                    {phase.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Indicador de paso */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 text-sm md:text-base">
              PASO {currentPhase + 1} DE {phases.length}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

