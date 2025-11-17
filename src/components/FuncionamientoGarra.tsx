import { motion } from "framer-motion";

interface PhasePanelProps {
  phase: "apertura" | "cierre" | "agarre";
  title: string;
  parameter: string;
  value: string;
  index: number;
}

function PhasePanel({
  phase,
  title,
  parameter,
  value,
  index,
}: PhasePanelProps) {
  // Placeholder de imagen - reemplazar con ruta real cuando tengas las imágenes
  const getImagePlaceholder = () => {
    // Por ahora usamos un placeholder visual, luego puedes reemplazar con:
    // return `/images/funcionamiento/${phase}.jpg` o similar
    return null; // null indica que usaremos el placeholder visual
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      {/* Contenedor de la imagen */}
      <div className="relative w-full aspect-square bg-linear-to-b from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-lg border border-cyan-500/30 overflow-hidden mb-4">
        {/* Grid de fondo con efecto de brillo */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Brillo desde abajo */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-cyan-500/30 to-transparent" />

        {/* Imagen o placeholder */}
        {getImagePlaceholder() ? (
          <img
            src={getImagePlaceholder()!}
            alt={`Garra mecánica - Fase ${title}`}
            className="w-full h-full object-cover relative z-10"
          />
        ) : (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Placeholder visual */}
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-slate-700/50 border-2 border-cyan-500/50 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-cyan-400/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-cyan-400/70 text-sm font-medium">
                {title}
              </p>
              <p className="text-white/40 text-xs mt-1">
                Imagen placeholder
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Título de la fase */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className="text-2xl md:text-3xl font-bold text-white mb-2"
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}

export default function FuncionamientoGarra() {
  const phases: Array<{
    phase: "apertura" | "cierre" | "agarre";
    title: string;
    parameter: string;
    value: string;
  }> = [
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

  return (
    <section
      id="funcionamiento"
      className="relative min-h-screen w-full bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Título principal */}
      <div className="mb-12 md:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          MECÁNICA DE FUNCIONAMIENTO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 text-lg md:text-xl"
        >
          Diseño y Simulación en Autodesk Fusion 360
        </motion.p>
      </div>

      {/* Tres paneles de fases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {phases.map((phaseData, index) => (
          <PhasePanel
            key={phaseData.phase}
            phase={phaseData.phase}
            title={phaseData.title}
            parameter={phaseData.parameter}
            value={phaseData.value}
            index={index}
          />
        ))}
      </div>

      {/* Indicadores de parámetros técnicos */}
      <div className="relative mt-8">
        {/* Línea horizontal */}
        <div className="relative h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />

        {/* Contenedor de indicadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {phases.map((phaseData, index) => (
            <motion.div
              key={`param-${phaseData.phase}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Círculo indicador */}
              <div className="relative mb-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                {/* Línea vertical conectando con la línea horizontal */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-8 w-0.5 bg-linear-to-t from-cyan-500/50 to-transparent" />
              </div>

              {/* Información del parámetro */}
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {phaseData.title}
                </h4>
                <p className="text-cyan-400/80 text-sm mb-1">
                  {phaseData.parameter}:
                </p>
                <p className="text-white font-bold text-xl">
                  {phaseData.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
