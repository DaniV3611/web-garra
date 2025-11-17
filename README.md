# 🦾 PROYECTO GARRA MECÁNICA

<div align="center">

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     ██████╗  █████╗ ██████╗ ██████╗  █████╗             ║
║     ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗            ║
║     ██████╔╝███████║██████╔╝██████╔╝███████║            ║
║     ██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══██║            ║
║     ██║  ██║██║  ██║██║  ██║██║  ██║██║  ██║            ║
║     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝            ║
║                                                           ║
║     ███╗   ███╗███████╗ ██████╗ █████╗ ███╗   ██╗        ║
║     ████╗ ████║██╔════╝██╔════╝██╔══██╗████╗  ██║        ║
║     ██╔████╔██║█████╗  ██║     ███████║██╔██╗ ██║        ║
║     ██║╚██╔╝██║██╔══╝  ██║     ██╔══██║██║╚██╗██║        ║
║     ██║ ╚═╝ ██║███████╗╚██████╗██║  ██║██║ ╚████║        ║
║     ╚═╝     ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

**Una experiencia web inmersiva que da vida a un diseño mecánico 3D**

[![Astro](https://img.shields.io/badge/Astro-5.15.7-FF5D01?style=for-the-badge&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=for-the-badge&logo=three.js)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 🌟 Descripción

**La Garra Cobra Vida** es una página web interactiva diseñada para mostrar un proyecto de garra mecánica creado en Autodesk Fusion 360. Combina visualización 3D avanzada, animaciones fluidas y una experiencia de usuario inmersiva con estética cyberpunk/tecnológica.

Este proyecto transforma un modelo 3D estático en una experiencia web dinámica donde los usuarios pueden explorar la anatomía, funcionamiento y especificaciones técnicas de la garra mecánica a través de interacciones intuitivas y animaciones sincronizadas con el scroll.

---

## ✨ Características Principales

### 🎯 Secciones Interactivas

- **🎬 Hero Section**: Modelo 3D rotando automáticamente con controles de interacción manual
- **🔬 Anatomía**: Vista explosionada con animaciones GSAP sincronizadas al scroll
- **⚙️ Funcionamiento**: Animación de las fases de movimiento (apertura, cierre, agarre)
- **📊 Especificaciones**: Tarjetas flip interactivas con información técnica detallada
- **📈 Proceso**: Timeline horizontal con scroll que muestra el proceso de diseño
- **🧭 Navegación**: Header fijo con efectos de scroll y smooth scrolling

### 🎨 Tecnologías y Efectos

- **Visualización 3D**: Three.js + React Three Fiber + Drei
- **Animaciones**: GSAP ScrollTrigger + Framer Motion
- **Smooth Scroll**: Lenis para desplazamiento fluido
- **Estética**: Paleta cyberpunk con acentos cyan/blue
- **Responsive**: Diseño adaptativo para todos los dispositivos

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18+
- **npm** o **pnpm**

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd web-garra

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

---

## 📁 Estructura del Proyecto

```
web-garra/
├── public/
│   └── models/
│       └── garra.glb          # Modelo 3D exportado de Fusion 360
├── src/
│   ├── components/
│   │   ├── HeroGarra.tsx              # Sección hero con modelo 3D
│   │   ├── AnatomiaGarra.tsx          # Vista explosionada
│   │   ├── FuncionamientoGarra.tsx    # Animación de movimiento
│   │   ├── EspecificacionesGarra.tsx   # Tarjetas flip
│   │   ├── ProcesoGarra.tsx            # Timeline horizontal
│   │   ├── Header.tsx                  # Navegación fija
│   │   ├── Footer.tsx                  # Footer técnico
│   │   ├── SmoothScroll.tsx            # Smooth scroll wrapper
│   │   └── ErrorBoundary.tsx           # Manejo de errores
│   ├── layouts/
│   │   └── Layout.astro                # Layout principal
│   ├── pages/
│   │   └── index.astro                 # Página principal
│   └── styles/
│       └── global.css                  # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠️ Stack Tecnológico

### Core

- **[Astro](https://astro.build)** - Framework web moderno
- **[React](https://react.dev)** - Biblioteca UI para componentes interactivos
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático

### 3D y Visualización

- **[Three.js](https://threejs.org)** - Librería 3D WebGL
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer para Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers útiles para R3F

### Animaciones

- **[GSAP](https://greensock.com/gsap/)** - Animaciones de alto rendimiento
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones React
- **[Lenis](https://github.com/studio-freight/lenis)** - Smooth scrolling

### Estilos

- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first

---

## 🎨 Paleta de Colores

```
Fondos:
  slate-900  ████████████  #0f172a
  slate-950  ████████████  #020617

Acentos:
  cyan-400   ████████████  #22d3ee
  cyan-500   ████████████  #06b6d4
  blue-600   ████████████  #2563eb

Texto:
  white      ████████████  #ffffff
  white/80   ████████████  rgba(255,255,255,0.8)
```

---

## 🎯 Funcionalidades Clave

### Modelo 3D Interactivo

- Rotación automática cuando no hay interacción del usuario
- Control manual mediante drag & drop
- Iluminación optimizada con múltiples luces
- Carga asíncrona con Suspense

### Animaciones Scroll

- **GSAP ScrollTrigger**: Animaciones sincronizadas con el scroll
- **Vista Explosionada**: Partes que se separan al hacer scroll
- **Timeline Horizontal**: Scroll vertical que mueve contenido horizontalmente

### Tarjetas Flip

- Efecto 3D de rotación en Y-axis
- Información técnica detallada
- Gradientes personalizados por categoría

### Smooth Scrolling

- Desplazamiento fluido con Lenis
- Integración con GSAP ScrollTrigger
- Optimizado para performance

---

## 📦 Dependencias Principales

```json
{
  "astro": "^5.15.7",
  "react": "^19.2.0",
  "three": "^0.181.1",
  "@react-three/fiber": "^9.4.0",
  "@react-three/drei": "^10.7.7",
  "gsap": "^3.13.0",
  "framer-motion": "^12.23.24",
  "@studio-freight/lenis": "^1.0.42",
  "tailwindcss": "^4.1.17"
}
```

---

## 🎬 Uso del Modelo 3D

El modelo debe estar en formato `.glb` y ubicado en `/public/models/garra.glb`.

### Exportación desde Fusion 360

1. Abre tu modelo en Autodesk Fusion 360
2. File → Export → `.glb`
3. Optimiza el modelo (<50k polígonos recomendado)
4. Coloca el archivo en `/public/models/`

### Optimización

Para mejorar el rendimiento:

- Usa Draco compression si es necesario
- Reduce la resolución de texturas
- Simplifica geometrías complejas

---

## 🎨 Personalización

### Modificar Colores

Edita los valores en los componentes o en `tailwind.config`:

```tsx
// Ejemplo: Cambiar acento principal
className = "text-cyan-400"; // Cambiar a tu color preferido
```

### Ajustar Animaciones

Las animaciones GSAP están en los componentes individuales:

```typescript
// Ejemplo: Velocidad de scroll animation
scrollTrigger: {
  scrub: 1,  // Aumentar para más suavidad
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `/src/components/`
2. Importa en `index.astro`
3. Agrega con `client:load`

---

## 🐛 Solución de Problemas

### El modelo 3D no carga

- Verifica que el archivo `.glb` existe en `/public/models/`
- Revisa la consola del navegador para errores
- Asegúrate de que el modelo no esté corrupto

### Animaciones no funcionan

- Verifica que GSAP ScrollTrigger esté registrado
- Asegúrate de que los elementos tengan altura suficiente
- Revisa que `SmoothScroll` esté envolviendo el contenido

### Performance lenta

- Reduce la calidad del modelo 3D
- Optimiza imágenes y assets
- Usa `client:visible` en lugar de `client:load` si es posible

---

## 📝 Notas de Desarrollo

- Todos los componentes React deben usar `client:load` en Astro
- El modelo 3D es el elemento central - optimízalo bien
- Mantén coherencia en la paleta de colores cyan/slate
- Las animaciones deben ser fluidas (60fps objetivo)

---

## 🚧 Roadmap

- [ ] Modo "rayos X" para ver el interior
- [ ] Comparación con objetos cotidianos (escala)
- [ ] Cursor personalizado tipo mira técnica
- [ ] Sonidos sutiles al interactuar (opcional)
- [ ] Descarga de especificaciones en PDF
- [ ] Modo oscuro/claro toggle

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico para el curso de Diseño 3D.

---

## 👨‍💻 Autor

**Diseño y Desarrollo**

- Modelo 3D: Autodesk Fusion 360
- Desarrollo Web: [Tu Nombre]

---

## 🙏 Agradecimientos

- **Autodesk Fusion 360** por las herramientas de diseño
- **Three.js Community** por la excelente documentación
- **GSAP** por las animaciones de alto rendimiento
- **Astro Team** por el framework increíble

---

<div align="center">

**La garra mecánica cobra vida en tu navegador** 🦾✨

</div>
