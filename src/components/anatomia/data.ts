export interface AnatomiaBlock {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const anatomiaBlocks: AnatomiaBlock[] = [
  {
    number: "01",
    title: "MECANISMO DE AGARRE",
    description:
      "Descripción detallada del mecanismo de agarre, incluyendo las pinzas y su funcionamiento.",
    image: "https://placehold.co/700x700/0f172a/67e8f9?text=Mecanismo+de+Agarre",
  },
  {
    number: "02",
    title: "ARTICULACIONES",
    description:
      "Análisis de las articulaciones, sus grados de libertad y los materiales empleados para su construcción.",
    image: "https://placehold.co/700x700/0f172a/67e8f9?text=Articulaciones",
  },
  {
    number: "03",
    title: "BASE ESTRUCTURAL",
    description:
      "Información sobre el chasis principal, los puntos de montaje y la integridad estructural del diseño.",
    image: "https://placehold.co/700x700/0f172a/67e8f9?text=Base+Estructural",
  },
  {
    number: "04",
    title: "SISTEMA DE ACTUACIÓN",
    description:
      "Detalles sobre los motores, servos o sistema neumático que potencian el movimiento de la garra.",
    image: "https://placehold.co/700x700/0f172a/67e8f9?text=Sistema+de+Actuacion",
  },
];
