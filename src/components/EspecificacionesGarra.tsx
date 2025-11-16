import { useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SpecificationCard {
  id: string;
  title: string;
  icon: ReactNode;
  frontContent: {
    mainValue: string;
    mainLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
  backContent: {
    items: Array<{ label: string; value: string }>;
    description: string;
  };
  gradient: string;
  glowColor: string;
}

const specifications: SpecificationCard[] = [
  {
    id: "dimensiones",
    title: "DIMENSIONES",
    icon: (
      <svg
        className="w-16 h-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 3L21 21M3 21L21 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V21M3 12H21"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="3" cy="3" r="2" />
        <circle cx="21" cy="3" r="2" />
        <circle cx="3" cy="21" r="2" />
        <circle cx="21" cy="21" r="2" />
      </svg>
    ),
    frontContent: {
      mainValue: "350mm",
      mainLabel: "Longitud",
      secondaryValue: "2.5kg",
      secondaryLabel: "Peso",
    },
    backContent: {
      items: [
        { label: "Longitud total", value: "350mm" },
        { label: "Ancho máximo", value: "180mm" },
        { label: "Altura", value: "120mm" },
        { label: "Peso total", value: "2.5kg" },
        { label: "Alcance máximo", value: "200mm" },
      ],
      description:
        "Diseño compacto optimizado para espacios reducidos con excelente relación peso-resistencia.",
    },
    gradient: "from-cyan-500 via-blue-500 to-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "materiales",
    title: "MATERIALES",
    icon: (
      <svg
        className="w-16 h-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="9" y1="9" x2="12" y2="12" strokeLinecap="round" />
        <line x1="15" y1="9" x2="12" y2="12" strokeLinecap="round" />
        <line x1="9" y1="15" x2="12" y2="12" strokeLinecap="round" />
        <line x1="15" y1="15" x2="12" y2="12" strokeLinecap="round" />
      </svg>
    ),
    frontContent: {
      mainValue: "Aluminio 6061",
      mainLabel: "Estructura",
      secondaryValue: "PLA+",
      secondaryLabel: "Componentes",
    },
    backContent: {
      items: [
        { label: "Chasis principal", value: "Aluminio 6061-T6" },
        { label: "Dedos", value: "PLA+ reforzado" },
        { label: "Articulaciones", value: "Acero inoxidable" },
        { label: "Recubrimiento", value: "Anodizado tipo II" },
        { label: "Tornillería", value: "Acero grado 8.8" },
      ],
      description:
        "Combinación de materiales de alta calidad para máxima durabilidad y resistencia a la corrosión.",
    },
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "capacidades",
    title: "CAPACIDADES",
    icon: (
      <svg
        className="w-16 h-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 4V2M12 22V20M4 12H2M22 12H20M6.34 6.34L4.93 4.93M19.07 19.07L17.66 17.66M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
          strokeLinecap="round"
        />
      </svg>
    ),
    frontContent: {
      mainValue: "20N",
      mainLabel: "Fuerza de agarre",
      secondaryValue: "0.5 m/s",
      secondaryLabel: "Velocidad",
    },
    backContent: {
      items: [
        { label: "Fuerza máxima", value: "20N" },
        { label: "Velocidad de cierre", value: "0.5 m/s" },
        { label: "Precisión", value: "±0.1mm" },
        { label: "Ciclos de vida", value: ">100,000" },
        { label: "Tiempo de respuesta", value: "<50ms" },
      ],
      description:
        "Rendimiento optimizado para aplicaciones de manipulación precisa con alta repetibilidad.",
    },
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
  {
    id: "aplicaciones",
    title: "APLICACIONES",
    icon: (
      <svg
        className="w-16 h-16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="4" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="22" strokeLinecap="round" />
        <line x1="2" y1="12" x2="4" y2="12" strokeLinecap="round" />
        <line x1="20" y1="12" x2="22" y2="12" strokeLinecap="round" />
      </svg>
    ),
    frontContent: {
      mainValue: "Manipulación",
      mainLabel: "Precisa",
      secondaryValue: "Automatización",
      secondaryLabel: "Industrial",
    },
    backContent: {
      items: [
        { label: "Robótica industrial", value: "Pick & Place" },
        { label: "Laboratorios", value: "Manipulación de muestras" },
        { label: "Logística", value: "Embalaje automatizado" },
        { label: "Manufactura", value: "Ensamblaje de precisión" },
        { label: "Investigación", value: "Prototipado rápido" },
      ],
      description:
        "Versátil para múltiples industrias, desde manufactura hasta investigación científica avanzada.",
    },
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
];

function SpecificationCard({
  card,
  index,
}: {
  card: SpecificationCard;
  index: number;
}) {
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
      {/* Contenedor de la card con flip */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Frente de la card */}
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
            {/* Patrón de fondo decorativo */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 2px 2px, white 1px, transparent 0)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Contenido frontal */}
            <div className="relative z-10">
              {/* Icono animado */}
              <motion.div
                className="text-white mb-6"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {card.icon}
              </motion.div>

              {/* Título */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {card.title}
              </h3>
            </div>

            {/* Valores principales */}
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

            {/* Indicador de flip */}
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

        {/* Reverso de la card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden cursor-pointer rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full bg-slate-900 p-8 flex flex-col border-2 border-cyan-500/30 shadow-2xl">
            {/* Brillo de borde */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                boxShadow: `inset 0 0 30px ${card.glowColor}`,
              }}
            />

            {/* Grid de fondo */}
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

            {/* Contenido trasero */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Título en reverso */}
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
                {card.title}
              </h3>

              {/* Lista de especificaciones */}
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

              {/* Descripción */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-white/60 text-xs leading-relaxed">
                  {card.backContent.description}
                </p>
              </div>

              {/* Indicador de flip */}
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

export default function EspecificacionesGarra() {
  return (
    <section
      id="especificaciones"
      className="relative min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos de fondo animados */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10">
        {/* Título principal */}
        <div className="mb-16 text-center">
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
            ESPECIFICACIONES TÉCNICAS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-400 text-lg md:text-xl"
          >
            Detalles completos del diseño y capacidades
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specifications.map((card, index) => (
            <SpecificationCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Instrucción de interacción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <span>Haz clic en las tarjetas para ver más detalles</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
