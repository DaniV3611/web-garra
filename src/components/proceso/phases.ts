export interface ProcessPhase {
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

export const phases: ProcessPhase[] = [
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

