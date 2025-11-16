# INSTRUCCIONES PARA CREAR PÁGINA WEB DE GARRA MECÁNICA 3D

## CONTEXTO

Crear una página web para exponer una garra mecánica diseñada en Autodesk Fusion 360. Debe ser visualmente impactante, moderna y tecnológica.

## STACK TECNOLÓGICO

- Framework: Astro
- Estilos: Tailwind CSS
- Lenguaje: TypeScript
- Componentes interactivos: React
- Librerías requeridas:
  - three + @react-three/fiber + @react-three/drei (modelos 3D)
  - gsap (animaciones scroll)
  - framer-motion (animaciones React)
  - @studio-freight/lenis (smooth scroll)

## ESTRUCTURA DE LA PÁGINA

### 1. SECCIÓN HERO

- Pantalla completa con fondo oscuro (bg-slate-900)
- Modelo 3D de la garra rotando automáticamente
- Usar Canvas de @react-three/fiber
- Título grande en cyan (text-cyan-400) con efecto pulse
- El modelo debe cargarse desde archivo .glb exportado de Fusion

### 2. SECCIÓN ANATOMÍA

- Animación scroll donde las partes de la garra se separan
- Usar GSAP ScrollTrigger con scrub: 1
- Cada parte se mueve a posiciones diferentes al hacer scroll
- Especificaciones aparecen con fade-in desde la derecha
- Fondo: bg-slate-950
- Cards de especificaciones con borde cyan

### 3. SECCIÓN MOVIMIENTO

- Canvas 3D mostrando animación de apertura/cierre
- Layout: 50% canvas, 50% información
- Lista de fases del movimiento con bordes de colores
- Usar useFrame para animar el modelo

### 4. SECCIÓN ESPECIFICACIONES

- Grid de 3 columnas con tarjetas flip
- Al hacer click, las tarjetas rotan 180° mostrando detalles
- Frente: gradiente cyan-blue con título
- Reverso: fondo slate-800 con lista de datos
- Usar framer-motion con rotateY

### 5. BACKGROUND ANIMADO

- Canvas de partículas en posición fija
- Partículas cyan que se conectan cuando están cerca
- Efecto de profundidad tecnológica

## PALETA DE COLORES

- Fondos: slate-900, slate-950
- Acentos principales: cyan-400, cyan-500
- Secundarios: blue-600, orange-500
- Texto: white
- Bordes/efectos: cyan con transparencia

## COMPONENTES CLAVE A CREAR

### HeroGarra.tsx

```typescript
// Importar Canvas, OrbitControls, useGLTF de react-three
// Cargar modelo con useGLTF('/models/garra.glb')
// Componente Float para efecto flotante
// OrbitControls con autoRotate
// Luces: ambientLight + spotLight
```

### AnatomiaGarra.tsx

```typescript
// useEffect con gsap.context
// gsap.registerPlugin(ScrollTrigger)
// Animar cada parte con scrollTrigger
// scrub: 1 para sincronizar con scroll
// stagger en especificaciones
```

### MovimientoGarra.tsx

```typescript
// Canvas con modelo animado
// useFrame para animación continua
// Math.sin(time) para movimiento oscilante
// Layout flex con dos columnas
```

### EspecificacionesCards.tsx

```typescript
// useState para isFlipped
// motion.div con animate rotateY
// transformStyle: 'preserve-3d'
// Dos divs absolute para frente/reverso
// backface-visibility: hidden
```

### SmoothScroll.tsx

```typescript
// useEffect con Lenis
// duration: 1.2
// requestAnimationFrame loop
// destroy en cleanup
```

### ParticlesBackground.tsx

```typescript
// Canvas HTML5 con useRef
// Array de partículas con posiciones y velocidades
// Loop de animación con requestAnimationFrame
// Conectar partículas cercanas con líneas
// Canvas fijo con -z-10
```

## INTEGRACIÓN EN ASTRO

### Página principal (index.astro)

```astro
// Importar todos los componentes React
// Usar client:load en cada componente
// Envolver todo en SmoothScroll
// ParticlesBackground como capa de fondo
```

## CSS PERSONALIZADO NECESARIO

### En global.css o Tailwind config

```css
.perspective-1000 {
  perspective: 1000px;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
```

## EFECTOS ESPECIALES

### Cursor personalizado

- Ocultar cursor default con cursor: none
- Crear div con cruz técnica cyan
- Seguir posición del mouse con addEventListener
- mix-blend-mode: difference

### Animaciones de texto

- Contadores numéricos que crecen al entrar en viewport
- Efectos de glitch sutiles con clip-path
- Texto con efecto de máquina de escribir

## EXPORTACIÓN DEL MODELO 3D

- Desde Fusion: File → Export → .glb
- Optimizar polígonos (<50k)
- Colocar en carpeta /public/models/

## OPTIMIZACIONES

- Usar Suspense para modelos 3D
- client:visible en componentes pesados
- Lazy load de imágenes
- Comprimir archivo .glb con Draco

## ESTILO VISUAL

- Estética: Cyberpunk/tecnológica
- Tipografía: Monospace para títulos técnicos
- Efectos: Neón, glassmorphism sutil
- Animaciones: Suaves y fluidas (ease-out)
- Transiciones: 0.3s - 0.6s duration

## DISEÑO RESPONSIVE

- Desktop first
- Breakpoints Tailwind: md:, lg:
- Canvas 3D adapta aspect ratio
- Grid cambia a 1 columna en mobile
- Reducir tamaño de modelo 3D en mobile

## COMANDOS DE INSTALACIÓN (Ya están instaladas)

```bash
npm install three @react-three/fiber @react-three/drei
npm install gsap
npm install framer-motion
npm install @studio-freight/lenis
```

## ESTRUCTURA DE ARCHIVOS

```
src/
├── components/
│   ├── HeroGarra.tsx
│   ├── AnatomiaGarra.tsx
│   ├── MovimientoGarra.tsx
│   ├── EspecificacionesCards.tsx
│   ├── SmoothScroll.tsx
│   └── ParticlesBackground.tsx
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css

public/
└── models/
    └── garra.glb
```

## NOTAS IMPORTANTES

- Todos los componentes React deben usar client:load en Astro
- El modelo 3D es el elemento central de toda la página
- Mantener coherencia en la paleta de colores cyan/slate
- Las animaciones deben ser fluidas y sincronizadas con scroll
- Priorizar performance: modelos optimizados y lazy loading
