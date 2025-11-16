import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { ErrorBoundary } from "./ErrorBoundary";

interface AnimatedModelProps {
  phase: "apertura" | "cierre" | "agarre";
  autoAnimate?: boolean;
}

function AnimatedModel({ phase, autoAnimate = true }: AnimatedModelProps) {
  const { scene } = useGLTF("/models/garra.glb", true);
  const { gl } = useThree();
  const boxRef = useRef<THREE.Box3>(new THREE.Box3());
  const sizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const centerRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const sceneRef = useRef<THREE.Group>(null);
  const fingersRef = useRef<THREE.Object3D[]>([]);
  const timeRef = useRef(0);
  const objectMeshRef = useRef<THREE.Mesh | null>(null);

  // Configurar el modelo
  useEffect(() => {
    boxRef.current.setFromObject(scene);
    boxRef.current.getSize(sizeRef.current);
    boxRef.current.getCenter(centerRef.current);

    scene.position.x = -centerRef.current.x;
    scene.position.y = -centerRef.current.y - 2;
    scene.position.z = -centerRef.current.z;
    scene.rotation.x = -Math.PI / 2;

    sceneRef.current = scene;

    // Buscar dedos/partes móviles del modelo
    // Intentar encontrar objetos que puedan ser los dedos
    const findFingers = (obj: THREE.Object3D, depth = 0): THREE.Object3D[] => {
      const fingers: THREE.Object3D[] = [];
      if (depth > 5) return fingers; // Limitar profundidad

      obj.children.forEach((child) => {
        // Buscar objetos con nombres que sugieran dedos o partes móviles
        const name = child.name.toLowerCase();
        if (
          name.includes("finger") ||
          name.includes("dedo") ||
          name.includes("claw") ||
          name.includes("pinza") ||
          (child.children.length > 0 && depth < 3)
        ) {
          fingers.push(child);
        }
        fingers.push(...findFingers(child, depth + 1));
      });

      return fingers;
    };

    fingersRef.current = findFingers(scene);
    // Si no encontramos dedos específicos, usar los primeros hijos como referencia
    if (fingersRef.current.length === 0 && scene.children.length > 0) {
      fingersRef.current = scene.children.slice(0, 4); // Asumir hasta 4 dedos
    }

    // Ajustar materiales
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.metalness = 0.3;
          child.material.roughness = 0.4;
        }
      }
    });

    const maxDimension = Math.max(
      sizeRef.current.x,
      sizeRef.current.y,
      sizeRef.current.z
    );
    const targetSize = 6;
    const scale = targetSize / maxDimension;
    scene.scale.set(scale, scale, scale);
  }, [scene]);

  // Manejar objeto para fase de agarre
  useEffect(() => {
    if (!sceneRef.current) return;

    if (phase === "agarre" && !objectMeshRef.current) {
      const geometry = new THREE.SphereGeometry(0.8, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: "#9ca3af",
        metalness: 0.2,
        roughness: 0.8,
      });
      const object = new THREE.Mesh(geometry, material);
      object.position.set(0, 0.5, 0);
      object.castShadow = true;
      object.receiveShadow = true;
      sceneRef.current.add(object);
      objectMeshRef.current = object;
    } else if (phase !== "agarre" && objectMeshRef.current) {
      // Remover objeto si no estamos en fase de agarre
      sceneRef.current.remove(objectMeshRef.current);
      objectMeshRef.current.geometry.dispose();
      if (objectMeshRef.current.material instanceof THREE.Material) {
        objectMeshRef.current.material.dispose();
      }
      objectMeshRef.current = null;
    }

    return () => {
      if (objectMeshRef.current && sceneRef.current) {
        sceneRef.current.remove(objectMeshRef.current);
        objectMeshRef.current.geometry.dispose();
        if (objectMeshRef.current.material instanceof THREE.Material) {
          objectMeshRef.current.material.dispose();
        }
        objectMeshRef.current = null;
      }
    };
  }, [phase]);

  // Animación según la fase
  useFrame((state, delta) => {
    if (!sceneRef.current) return;

    timeRef.current += delta;

    // Aplicar rotación a los dedos según la fase
    fingersRef.current.forEach((finger, index) => {
      if (!finger) return;

      let targetRotation = 0;
      const angleOffset = (index % 2 === 0 ? 1 : -1) * 0.1; // Alternar dirección

      switch (phase) {
        case "apertura":
          // Dedos completamente abiertos (90 grados)
          targetRotation = Math.PI / 2 + angleOffset; // 90 grados
          break;
        case "cierre":
          // Dedos parcialmente cerrados (45 grados) con animación
          if (autoAnimate) {
            targetRotation =
              Math.PI / 4 + Math.sin(timeRef.current * 1.5) * 0.2 + angleOffset;
          } else {
            targetRotation = Math.PI / 4 + angleOffset; // 45 grados
          }
          break;
        case "agarre":
          // Dedos completamente cerrados (0 grados)
          targetRotation = 0 + angleOffset;
          break;
      }

      // Intentar rotar en diferentes ejes según la estructura
      // Eje Z (más común para dedos)
      finger.rotation.z = THREE.MathUtils.lerp(
        finger.rotation.z,
        targetRotation,
        0.15
      );

      // También intentar rotar en eje X (para algunos modelos)
      if (phase === "apertura" || phase === "cierre") {
        finger.rotation.x = THREE.MathUtils.lerp(
          finger.rotation.x,
          targetRotation * 0.3,
          0.15
        );
      }

      // Rotar hijos recursivamente
      finger.traverse((child) => {
        if (child instanceof THREE.Mesh && child !== finger) {
          child.rotation.z = THREE.MathUtils.lerp(
            child.rotation.z,
            targetRotation * 0.5,
            0.1
          );
        }
      });
    });

    // Rotación suave del modelo completo (solo en apertura y agarre)
    if (autoAnimate && phase !== "cierre") {
      sceneRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <primitive object={scene} />
    </>
  );
}

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

function Scene3D({ phase }: { phase: "apertura" | "cierre" | "agarre" }) {
  return (
    <>
      <CameraSetup />
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

      {/* Luz desde abajo para efecto de grid brillante */}
      <pointLight position={[0, -3, 0]} intensity={0.5} color="#00ffff" />

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
            <AnimatedModel phase={phase} />
          </Center>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      {/* Contenedor del modelo 3D */}
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

        {/* Canvas 3D */}
        <Canvas
          camera={{ position: [0, 1, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          className="relative z-10"
        >
          <Scene3D phase={phase} />
        </Canvas>
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
