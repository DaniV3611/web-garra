import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { ErrorBoundary } from "../ErrorBoundary";

interface Model3DProps {
  isUserInteracting: boolean;
  setIsUserInteracting: (value: boolean) => void;
}

function Model3D({ isUserInteracting, setIsUserInteracting }: Model3DProps) {
  const { scene } = useGLTF("/models/garra.glb", true);
  const { gl } = useThree();
  const boxRef = useRef<THREE.Box3>(new THREE.Box3());
  const sizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const centerRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const sceneRef = useRef<THREE.Group>(null);
  const isDraggingRef = useRef(false);
  const lastMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    boxRef.current.setFromObject(scene);
    boxRef.current.getSize(sizeRef.current);
    boxRef.current.getCenter(centerRef.current);

    scene.position.x = -centerRef.current.x;
    scene.position.y = -centerRef.current.y - 2;
    scene.position.z = -centerRef.current.z;

    scene.rotation.x = -Math.PI / 2;

    sceneRef.current = scene;

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
    const targetSize = 7;
    const scale = targetSize / maxDimension;
    scene.scale.set(scale, scale, scale);
  }, [scene]);

  useEffect(() => {
    const canvas = gl.domElement;

    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      lastMousePositionRef.current = { x: e.clientX, y: e.clientY };
      setIsUserInteracting(true);
      canvas.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !sceneRef.current) return;

      const deltaX = e.clientX - lastMousePositionRef.current.x;
      const deltaY = e.clientY - lastMousePositionRef.current.y;

      sceneRef.current.rotation.y += deltaX * 0.01;
      sceneRef.current.rotation.x += deltaY * 0.01;

      lastMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      setIsUserInteracting(false);
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerUp);
    canvas.style.cursor = "grab";

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerUp);
    };
  }, [gl, setIsUserInteracting]);

  useFrame((_, delta) => {
    if (sceneRef.current && !isUserInteracting && !isDraggingRef.current) {
      sceneRef.current.rotation.z += delta * 0.5;
    }
  });

  return <primitive object={scene} />;
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

function SceneLights() {
  return (
    <>
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
    </>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        opacity={0.5}
        transparent
      />
    </mesh>
  );
}

function Scene() {
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  return (
    <>
      <CameraSetup />
      <SceneLights />
      <ErrorBoundary fallback={<LoadingFallback />}>
        <Suspense fallback={<LoadingFallback />}>
          <Center>
            <Model3D
              isUserInteracting={isUserInteracting}
              setIsUserInteracting={setIsUserInteracting}
            />
          </Center>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export function HeroSceneCanvas() {
  return (
    <div className="flex-1 w-full md:w-1/2 h-5/6 relative">
      <div className="w-full h-full bg-transparent">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/models/garra.glb");

