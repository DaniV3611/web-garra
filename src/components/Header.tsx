import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Anatomía", href: "#anatomia" },
    { name: "Funcionamiento", href: "#funcionamiento" },
    // { name: "Especificaciones", href: "#especificaciones" },
    { name: "Proceso", href: "#proceso" },
  ];

  // Calcular la opacidad del fondo basada en el scroll
  const backgroundOpacity = Math.min(scrollY / 30, 1);

  // Calcular la opacidad del borde basada en el scroll
  const borderOpacity = Math.min(scrollY / 30, 1);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity * 0.8})`,
        borderBottom: `1px solid rgba(6, 182, 212, ${borderOpacity * 0.2})`,
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-cyan-400"
          >
            {/* Garra mecánica simplificada */}
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
          <span className="text-white font-semibold text-lg">
            GARRA MECÁNICA
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-white/90 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Download Button */}
        <motion.a
          href="https://drive.google.com/file/d/1V-7jhVNMzbN0HSHBkYr-fCW1wdWg5AUu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
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
            className="hidden sm:block"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="sm:hidden">Descargar</span>
          <span className="hidden sm:inline">
            Descargar Archivos para Impresión 3D
          </span>
        </motion.a>
      </div>
    </motion.header>
  );
}
