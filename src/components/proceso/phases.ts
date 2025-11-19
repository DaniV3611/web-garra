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
  image: string;
}

export const phases: ProcessPhase[] = [
  {
    id: 1,
    name: "Concepto",
    title: "De la Idea al Papel",
    date: "ENERO 2024",
    description:
      "Todo comenzó con una pregunta: ¿cómo crear una garra funcional? Exploramos diseños existentes y bocetamos ideas, definiendo lo esencial: una garra con movimiento de apertura y cierre, ligera y fácil de ensamblar.",
    tools:
      "Herramientas: Bocetos a mano, referencias visuales, diagramas simples",
    gradient: "from-purple-600 via-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    icon: "💡",
    image: "/concepto.png",
  },
  {
    id: 2,
    name: "Modelado",
    title: "Creación Pieza por Pieza",
    date: "FEBRERO 2024",
    description:
      "El concepto tomó vida digital en Fusion 360. Diseñamos cada componente individualmente: el mecanismo de agarre, las articulaciones, la base estructural y el sistema de actuación.",
    tools: "Herramientas: Autodesk Fusion 360, Modelado 3D",
    gradient: "from-cyan-600 via-blue-500 to-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    icon: "🎨",
    image: "/garra.png",
  },
  {
    id: 3,
    name: "Ensamblaje",
    title: "Uniendo las Piezas",
    date: "MARZO 2024",
    description:
      "Con todas las piezas modeladas, llegó el momento de ensamblarlas virtualmente. Verificamos que los dedos se movieran sin chocar entre sí, que los ejes giraran correctamente y que el mecanismo de apertura y cierre funcionara de manera fluida.",
    tools: "Herramientas: Fusion 360 (ensamblajes), simulación de movimiento",
    gradient: "from-emerald-600 via-teal-500 to-green-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    icon: "⚙️",
    image: "/garra.png",
  },
  {
    id: 4,
    name: "Impresión 3D",
    title: "Impresión 3D",
    date: "MAYO 2024",
    description:
      "El momento de la verdad: exportamos los archivos e imprimimos cada pieza en 3D. Ver cómo el diseño digital se materializaba capa por capa fue emocionante. Después de algunas horas de impresión, ensamblamos las piezas físicas y el proyecto pasó de ser una idea abstracta a un objeto real y funcional.",
    tools:
      "Herramientas: Impresora 3D, exportación de archivos STL, ensamblaje físico",
    gradient: "from-rose-600 via-pink-500 to-red-400",
    glowColor: "rgba(225, 29, 72, 0.4)",
    icon: "✨",
    image: "/garra.png",
  },
];
