import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { name: 'Anatomía', href: '#anatomia' },
    { name: 'Funcionamiento', href: '#funcionamiento' },
    { name: 'Especificaciones', href: '#especificaciones' },
    { name: 'Proceso', href: '#proceso' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
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
          <span className="text-white font-semibold text-lg">GARRA MECÁNICA</span>
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
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
        >
          Descargar
        </motion.button>
      </div>
    </header>
  );
}

