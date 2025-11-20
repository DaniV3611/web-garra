import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const authors = [
    "Fabián Rincón Suarez",
    "Nicolás Rodríguez Forero",
    "Daniel Velasco González",
  ];

  const handleDownloadPDF = () => {
    // Placeholder para descargar PDF de especificaciones
    // En producción, aquí iría la lógica para descargar el PDF
    alert(
      "Descarga de especificaciones PDF - Funcionalidad próximamente disponible"
    );
  };

  return (
    <footer className="relative w-full bg-slate-950 border-t border-cyan-500/20">
      {/* Efecto de gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Columna 1: Información del Proyecto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-cyan-400"
              >
                <path
                  d="M12 4L8 8L12 12L16 8L12 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L6 10L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8L18 10L16 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12L12 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold text-white">GARRA MECÁNICA</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Proyecto de diseño 3D. Modelo completo diseñado y renderizado en
              Autodesk Fusion 360.
            </p>
            <p className="text-white/50 text-xs">
              © {currentYear} Proyecto Garra Mecánica. Todos los derechos
              reservados.
            </p>
          </motion.div>

          {/* Columna 2: Herramientas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Herramientas
            </h4>
            <div className="space-y-3">
              {/* Logo Autodesk Fusion 360 */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                    <path
                      d="M2 17L12 22L22 17M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    Autodesk Fusion 360
                  </p>
                  <p className="text-white/50 text-xs">Modelado 3D</p>
                </div>
              </div>

              {/* Otras herramientas */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-white/70 text-xs">
                  React Three Fiber
                </span>
                <span className="px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-white/70 text-xs">
                  Three.js
                </span>
                <span className="px-3 py-1 bg-slate-800/50 border border-cyan-500/20 rounded-full text-white/70 text-xs">
                  Astro
                </span>
              </div>
            </div>
          </motion.div>

          {/* Columna 3: Enlaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Anatomía", href: "#anatomia" },
                // { name: "Funcionamiento", href: "#funcionamiento" },
                { name: "Especificaciones", href: "#especificaciones" },
                { name: "Proceso", href: "#proceso" },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-cyan-500/10 my-8" />

        {/* Sección inferior: Botón de descarga y créditos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Botón de descarga PDF */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            onClick={handleDownloadPDF}
            className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar Archivos para Impresión 3D
          </motion.button>

          {/* Créditos de autores */}
          <div className="text-center md:text-left">
            <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-2">
              Hecho por
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {authors.map((author) => (
                <span
                  key={author}
                  className="px-3 py-1 rounded-full border border-cyan-500/30 bg-white/5 text-white text-xs font-medium backdrop-blur-sm"
                >
                  {author}
                </span>
              ))}
            </div>
          </div>

          {/* Créditos y links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/50 text-xs">
            <div className="flex items-center gap-2">
              <span>•</span>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Ver proyecto completo
              </a>
            </div>
          </div>
        </div>

        {/* Efecto de partículas decorativas en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
    </footer>
  );
}
