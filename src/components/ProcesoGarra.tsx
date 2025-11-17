import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    tools:
      "Herramientas Utilizadas: Sketching, Brainstorming, Diseño Conceptual",
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
    tools:
      "Herramientas Utilizadas: Autodesk Fusion 360 Simulation, Análisis FEA",
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
    tools:
      "Herramientas Utilizadas: Autodesk Fusion 360 Rendering, Documentación Técnica",
    gradient: "from-rose-600 via-pink-500 to-red-400",
    glowColor: "rgba(225, 29, 72, 0.4)",
    icon: "✨",
  },
];

function PhaseCard({
  phase,
  isActive,
}: {
  phase: ProcessPhase;
  isActive: boolean;
}) {
  return (
    <div
      className="shrink-0 w-screen h-full flex items-center justify-center px-4 md:px-8"
      style={{ minWidth: "100vw" }}
    >
      {/* TODO: Usar relaciones relativas y no valores absolutos */}
      <motion.div
        className={`relative top-32 w-full max-w-6xl h-[50vh] bg-linear-to-br ${phase.gradient} rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl`}
        style={{
          boxShadow: isActive
            ? `0 0 60px ${phase.glowColor}, inset 0 0 60px rgba(255, 255, 255, 0.1)`
            : `0 0 20px ${phase.glowColor}`,
        }}
        animate={{
          opacity: isActive ? 1 : 0.6,
          scale: isActive ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
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
              <p className="text-white/80 text-sm md:text-base">
                {phase.tools}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcesoGarra() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const horizontalContainer = horizontalContainerRef.current;

    if (!section || !horizontalContainer) return;

    let scrollTrigger: ScrollTrigger | null = null;
    let animation: gsap.core.Tween | null = null;

    const initScrollTrigger = () => {
      // Limpiar instancias anteriores
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });

      // Obtener el ancho del viewport
      const viewportWidth = window.innerWidth;

      // Asegurar que el contenedor tenga el ancho correcto
      horizontalContainer.style.width = `${phases.length * 100}vw`;

      // Forzar reflow para que el navegador calcule el ancho correcto
      void horizontalContainer.offsetWidth;

      // Calcular el ancho total: cada fase ocupa 100vw
      const totalWidth = phases.length * viewportWidth;

      // La distancia de scroll es el ancho total menos el viewport
      const scrollDistance = totalWidth - viewportWidth;

      // Crear el wrapper para el pin
      const pinWrapper = section.querySelector(".pin-wrapper") as HTMLElement;
      if (!pinWrapper) {
        console.error("No se encontró el pin-wrapper");
        return;
      }

      // Resetear posición del contenedor y asegurar que esté visible
      gsap.set(horizontalContainer, {
        x: 0,
        clearProps: "transform",
      });

      // Crear la animación horizontal
      animation = gsap.to(horizontalContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: pinWrapper,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onStart: () => {
            console.log("ScrollTrigger iniciado");
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const phaseIndex = Math.min(
              Math.floor(progress * phases.length),
              phases.length - 1
            );
            setCurrentPhase(phaseIndex);
            // Log temporal para debug
            if (Math.floor(progress * 100) % 25 === 0) {
              console.log(
                `Progress: ${(progress * 100).toFixed(
                  0
                )}%, Phase: ${phaseIndex}, X: ${
                  horizontalContainer.style.transform ||
                  gsap.getProperty(horizontalContainer, "x")
                }`
              );
            }
          },
          onEnter: () => {
            console.log("Entrando en la sección");
          },
          onLeave: () => {
            console.log("Saliendo de la sección");
          },
        },
      });

      // Guardar referencia al scrollTrigger
      scrollTrigger = animation.scrollTrigger;

      console.log("Animación creada:", animation);
      console.log("ScrollTrigger creado:", scrollTrigger);

      // Manejar resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    // Esperar a que el DOM esté listo
    const timeoutId = setTimeout(() => {
      initScrollTrigger();
    }, 500);

    // También inicializar cuando la página carga completamente
    if (document.readyState === "complete") {
      clearTimeout(timeoutId);
      initScrollTrigger();
    } else {
      window.addEventListener("load", () => {
        clearTimeout(timeoutId);
        initScrollTrigger();
      });
    }

    return () => {
      clearTimeout(timeoutId);
      if (scrollTrigger) scrollTrigger.kill();
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
      style={{ minHeight: "200vh" }}
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

      {/* Contenedor principal con altura fija para el pin */}
      <div
        className="pin-wrapper relative z-10 w-full"
        style={{ height: "100vh" }}
      >
        {/* Título principal - fuera del contenedor horizontal */}
        <div className="absolute top-20 left-0 right-0 z-10 text-center px-6 pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
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
            className="text-cyan-400 text-sm md:text-base max-w-3xl mx-auto"
          >
            Un viaje interactivo a través de las cinco fases clave de nuestro
            proyecto de ingeniería, desde la idea inicial hasta el modelo final
            renderizado en Autodesk Fusion 360.
          </motion.p>
        </div>

        {/* Contenedor horizontal que se mueve con el scroll vertical */}
        <div
          ref={horizontalContainerRef}
          className="flex flex-row items-center h-full relative z-20"
          style={{
            willChange: "transform",
            width: `${phases.length * 100}vw`,
            height: "70vh",
            position: "relative",
          }}
        >
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isActive={index === currentPhase}
            />
          ))}
        </div>

        {/* Timeline y controles - fijos en la parte inferior */}
        <div className="absolute bottom-8 left-0 right-0 z-30 px-6 pointer-events-auto">
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Línea de progreso */}
            <div className="relative h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentPhase + 1) / phases.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Puntos de fase */}
            <div className="flex justify-between mt-4">
              {phases.map((phase, index) => (
                <div
                  key={phase.id}
                  className="flex flex-col items-center gap-2"
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
                      index <= currentPhase ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    {phase.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Indicador de paso */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
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
