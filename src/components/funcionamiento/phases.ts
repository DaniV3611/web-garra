export type PhaseType = "apertura" | "cierre" | "agarre";

export interface PhaseInfo {
  phase: PhaseType;
  title: string;
  parameter: string;
  value: string;
  image: string;
  imageAlt: string;
}

export const PHASES: PhaseInfo[] = [
  {
    phase: "apertura",
    title: "APERTURA",
    parameter: "Apertura máx",
    value: "90°",
    image: "/abierta.png",
    imageAlt: "Garra mecánica totalmente abierta",
  },
  {
    phase: "cierre",
    title: "CIERRE",
    parameter: "Velocidad",
    value: "1.5 rad/s",
    image: "/cerrando.png",
    imageAlt: "Garra mecánica cerrándose",
  },
  {
    phase: "agarre",
    title: "AGARRE",
    parameter: "Fuerza de agarre",
    value: "50 N",
    image: "/cerrada.png",
    imageAlt: "Garra mecánica asegurando el agarre",
  },
];
