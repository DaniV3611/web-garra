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
      "Todo comenzó con una pregunta: ¿cómo crear una garra funcional? Exploramos diseños existentes y bocetamos ideas, definiendo lo esencial: una garra con movimiento de apertura y cierre, ligera y fácil de ensamblar. Nuestros primeros dibujos capturaron la forma básica y el mecanismo de agarre.",
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
      "El concepto tomó vida digital en Fusion 360. Diseñamos cada componente individualmente: la base de soporte, los dedos articulados, los conectores y el sistema de engranajes. Fue un proceso de prueba y error, ajustando formas y dimensiones hasta que cada pieza encajaba perfectamente con las demás.",
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
      "Con todas las piezas modeladas, llegó el momento de ensamblarlas virtualmente. Verificamos que los dedos se movieran sin chocar entre sí, que los ejes giraran correctamente y que el mecanismo de apertura y cierre funcionara de manera fluida. Cada ajuste nos acercaba más a un diseño funcional.",
    tools: "Herramientas: Fusion 360 (ensamblajes), simulación de movimiento",
    gradient: "from-emerald-600 via-teal-500 to-green-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    icon: "⚙️",
    image: "/garra.png",
  },
  {
    id: 4,
    name: "Refinamiento",
    title: "Ajustes y Mejoras",
    date: "ABRIL 2024",
    description:
      "Después de ver el ensamblaje completo, identificamos áreas de mejora. Reforzamos puntos débiles, simplificamos formas complicadas, redujimos peso innecesario y suavizamos bordes afilados. También verificamos que las piezas fueran imprimibles sin soportes excesivos. El diseño se volvió más elegante y práctico.",
    tools: "Herramientas: Fusion 360, iteración de diseño, optimización",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.4)",
    icon: "🔧",
    image: "/garra.png",
  },
  {
    id: 5,
    name: "Impresión 3D",
    title: "Impresión 3D y Resultado",
    date: "MAYO 2024",
    description:
      "El momento de la verdad: exportamos los archivos e imprimimos cada pieza en 3D. Ver cómo el diseño digital se materializaba capa por capa fue emocionante. Después de algunas horas de impresión, ensamblamos las piezas físicas y la garra cobró vida. El proyecto pasó de ser una idea abstracta a un objeto real y funcional.",
    tools:
      "Herramientas: Impresora 3D, exportación de archivos STL, ensamblaje físico",
    gradient: "from-rose-600 via-pink-500 to-red-400",
    glowColor: "rgba(225, 29, 72, 0.4)",
    icon: "✨",
    image: "/garra.png",
  },
];
