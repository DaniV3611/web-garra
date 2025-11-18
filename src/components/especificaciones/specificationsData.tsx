import type { ReactNode } from "react";

export interface SpecificationCardData {
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

export const specifications: SpecificationCardData[] = [
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
        <path d="M3 3L21 21M3 21L21 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V21M3 12H21" strokeLinecap="round" strokeLinejoin="round" />
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

