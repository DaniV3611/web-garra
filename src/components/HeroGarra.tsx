import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { ErrorBoundary } from "./ErrorBoundary";

function Model3D() {
  const { scene } = useGLTF("/models/garra.glb", true);

  // Ajustar la escala y posición del modelo según sea necesario
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Environment preset="city" />

      <ErrorBoundary>
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#00ffff"
                wireframe
                opacity={0.5}
                transparent
              />
            </mesh>
          }
        >
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model3D />
          </Float>
        </Suspense>
      </ErrorBoundary>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}

export default function HeroGarra() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Borde derecho turquesa */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500 z-10" />

      {/* Canvas 3D */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Contenido sobre el canvas */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Título principal con efecto cromático */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-center"
          style={{
            textShadow: `
              2px 0 0 #00ffff,
              -2px 0 0 #ff00ff,
              0 2px 0 #00ffff,
              0 -2px 0 #ff00ff
            `,
            filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
          }}
        >
          PROYECTO GARRA MECÁNICA
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/80 text-lg md:text-xl mb-12 text-center"
        >
          Diseño 3D | Autodesk Fusion 360
        </motion.p>

        {/* Botón CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          className="px-8 py-4 border-2 border-cyan-400 text-white rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2 group"
        >
          INICIAR EXPLORACIÓN
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-400"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        {/* Flecha indicadora abajo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-400"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
