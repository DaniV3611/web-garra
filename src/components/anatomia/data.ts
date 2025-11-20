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
      "El corazón de la garra: cuatro dedos curvos que se abren y cierran como pétalos de una flor mecánica. Diseñamos cada dedo con una superficie de contacto texturizada para maximizar el agarre sin dañar los objetos. El movimiento sincronizado permite sostener desde objetos pequeños hasta formas irregulares con sorprendente estabilidad.",
    image: "/agarre.png",
  },
  {
    number: "02",
    title: "ARTICULACIONES",
    description:
      "Los puntos de pivote que dan vida al movimiento. Cada articulación utiliza ejes cilíndricos que permiten una rotación suave y precisa. Diseñamos las uniones con el espacio justo para evitar fricciones innecesarias, pero lo suficientemente ajustadas para mantener la firmeza. Es el equilibrio perfecto entre flexibilidad y control.",
    image: "/articulaciones.png",
  },
  {
    number: "03",
    title: "BASE ESTRUCTURAL",
    description:
      "La fundación que sostiene todo el sistema. Una plataforma robusta con orificios de montaje estratégicamente ubicados para facilitar la instalación en robots o brazos mecánicos. Su diseño compacto distribuye el peso uniformemente, proporcionando estabilidad sin sacrificar portabilidad. Es la columna vertebral invisible pero esencial.",
    image: "/base.png",
  },
  {
    number: "04",
    title: "SISTEMA DE TRANSMISIÓN",
    description:
      "El puente entre la fuerza y el movimiento. Un conjunto de engranajes y palancas convierte la rotación de un servo en el cierre coordinado de los dedos. Diseñamos este sistema para multiplicar la fuerza y sincronizar el movimiento, logrando que un simple motor genere un agarre firme y controlado. La magia de la mecánica en su forma más pura.",
    image: "/transmision.png",
  },
];
