export interface AnatomiaBlock {
  number: string;
  title: string;
  description: string;
}

export const anatomiaBlocks: AnatomiaBlock[] = [
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

