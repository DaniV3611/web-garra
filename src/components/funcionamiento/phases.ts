export type PhaseType = "apertura" | "cierre" | "agarre";

export interface PhaseInfo {
  phase: PhaseType;
  title: string;
  parameter: string;
  value: string;
}

export const PHASES: PhaseInfo[] = [
  {
    phase: "apertura",
    title: "APERTURA",
    parameter: "Apertura máx",
    value: "90°",
  },
  {
    phase: "cierre",
    title: "CIERRE",
    parameter: "Velocidad",
    value: "1.5 rad/s",
  },
  {
    phase: "agarre",
    title: "AGARRE",
    parameter: "Fuerza de agarre",
    value: "50 N",
  },
];

