import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { ErrorBoundary } from "./ErrorBoundary";

function Model3D() {
  const { scene } = useGLTF("/models/garra.glb", true);
  const boxRef = useRef<THREE.Box3>(new THREE.Box3());
  const sizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const centerRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const sceneRef = useRef<THREE.Group>(null);

  // Calcular bounding box y centrar el modelo
  useEffect(() => {
    // Calcular el bounding box del modelo completo
    boxRef.current.setFromObject(scene);
    boxRef.current.getSize(sizeRef.current);
    boxRef.current.getCenter(centerRef.current);

    // Centrar el modelo en el origen y subirlo un poco
    scene.position.x = -centerRef.current.x;
    scene.position.y = -centerRef.current.y - 2;
    scene.position.z = -centerRef.current.z;

    // Rotación inicial para mostrar vista frontal (90 grados alrededor del eje X)
    scene.rotation.x = -Math.PI / 2; // -90 grados para vista frontal

    // Guardar referencia al scene para la rotación
    sceneRef.current = scene;

    // Ajustar materiales y sombras
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Mejorar el material para que se vea mejor
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.metalness = 0.3;
          child.material.roughness = 0.4;
        }
      }
    });

    // Calcular la escala adecuada para que quepa en el viewport
    const maxDimension = Math.max(
      sizeRef.current.x,
      sizeRef.current.y,
      sizeRef.current.z
    );
    const targetSize = 7; // Tamaño objetivo en unidades 3D
    const scale = targetSize / maxDimension;
    scene.scale.set(scale, scale, scale);
  }, [scene]);

  // Rotación continua solo del objeto 3D
  useFrame((state, delta) => {
    if (sceneRef.current) {
      // Rotación continua alrededor del eje Z (horizontal, como una rueda)
      sceneRef.current.rotation.z += delta * 0.5; // Velocidad de rotación
    }
  });

  return <primitive object={scene} />;
}

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    // Ajustar la cámara para ver el modelo completo
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

function Scene() {
  return (
    <>
      {/* Configurar cámara */}
      <CameraSetup />

      {/* Iluminación mejorada para mejor visibilidad */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.5}
        color="#00ffff"
      />
      <pointLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" />
      <Environment preset="studio" />

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
          <Center>
            <Model3D />
          </Center>
        </Suspense>
      </ErrorBoundary>

      {/* OrbitControls deshabilitado para que solo rote el modelo */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
      />
    </>
  );
}

export default function HeroGarra() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Borde derecho turquesa */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500 z-10" />

      {/* Contenedor principal: dos columnas */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Columna izquierda: Texto */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start w-full md:w-1/2 h-full py-20 md:py-0">
          {/* Título principal con efecto cromático */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-left"
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
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-left"
          >
            Diseño de Ingeniería 3D | Autodesk Fusion 360
          </motion.p>

          {/* Botón CTA */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-white rounded-lg font-semibold text-base md:text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2 group"
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
        </div>

        {/* Columna derecha: Modelo 3D */}
        <div className="flex-1 w-full md:w-1/2 h-full relative">
          <div className="w-full h-full bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50">
            <Canvas
              camera={{ position: [0, 1, 5], fov: 50 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Flecha indicadora abajo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
    </section>
  );
}
