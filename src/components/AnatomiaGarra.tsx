import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnatomiaBlock {
  number: string;
  title: string;
  description: string;
}

const anatomiaBlocks: AnatomiaBlock[] = [
  {
    number: "01",
    title: "MECANISMO DE AGARRE",
    description:
      "Descripción detallada del mecanismo de agarre, incluyendo las pinzas y su funcionamiento.",
  },
  {
    number: "02",
    title: "ARTICULACIONES",
    description:
      "Análisis de las articulaciones, sus grados de libertad y los materiales empleados para su construcción.",
  },
  {
    number: "03",
    title: "BASE ESTRUCTURAL",
    description:
      "Información sobre el chasis principal, los puntos de montaje y la integridad estructural del diseño.",
  },
  {
    number: "04",
    title: "SISTEMA DE ACTUACIÓN",
    description:
      "Detalles sobre los motores, servos o sistema neumático que potencian el movimiento de la garra.",
  },
];

export default function AnatomiaGarra() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Registrar ScrollTrigger solo en el cliente
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!sectionRef.current) return;

    // Animación de fade-in para los bloques desde la derecha
    blocksRef.current.forEach((block, index) => {
      if (!block) return;

      gsap.fromTo(
        block,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="anatomia"
      className="relative min-h-screen w-full bg-slate-950 py-20 px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* Título principal */}
      <div className="mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          PROYECTO GARRA MECÁNICA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 text-lg md:text-xl"
        >
          Vista Explosionada / Diseño en Autodesk Fusion 360
        </motion.p>
      </div>

      {/* Layout de dos columnas */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Columna izquierda: Imagen/Modelo 3D */}
        <div className="flex-1 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-slate-900/50 rounded-lg border border-cyan-500/30 p-8"
          >
            {/* Placeholder para imagen/modelo 3D */}
            <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border-2 border-dashed border-cyan-500/30">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4 text-cyan-400/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-cyan-400/50 text-sm">
                  Vista Explosionada 3D
                </p>
              </div>
            </div>

            {/* Anotaciones técnicas simuladas */}
            <div className="absolute top-4 left-4 text-cyan-400 text-xs font-mono">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-16 h-0.5 bg-cyan-400/50 border-dashed border-t border-cyan-400"></div>
                <span>150mm</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-0.5 h-16 bg-cyan-400/50 border-dashed border-l border-cyan-400"></div>
                <span className="-ml-2">Ø25mm</span>
              </div>
            </div>

            {/* Sistema de coordenadas */}
            <div className="absolute bottom-4 left-4 text-cyan-400/70 text-xs font-mono">
              <div className="flex gap-4">
                <span>X</span>
                <span>Y</span>
                <span>Z</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Columna derecha: Bloques descriptivos */}
        <div className="flex-1 lg:w-1/2 flex flex-col gap-6">
          {anatomiaBlocks.map((block, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) blocksRef.current[index] = el;
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Número grande */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {block.number}
                  </span>
                </div>

                {/* Contenido */}
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
          ))}
        </div>
      </div>
    </section>
  );
}

