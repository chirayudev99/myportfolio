import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function FloatingForm() {
  const form = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!form.current) return;
    const t = Math.min(delta, 0.05);
    form.current.rotation.x += (state.pointer.y * 0.2 - form.current.rotation.x) * t * 2;
    form.current.rotation.y += (state.pointer.x * 0.26 + state.clock.elapsedTime * 0.08 - form.current.rotation.y) * t * 2;
    form.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.08;
  });

  return (
    <group ref={form}>
      <mesh rotation={[0.28, 0.15, 0.2]}>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshPhysicalMaterial color="#9bd5d5" metalness={0.48} roughness={0.2} transparent opacity={0.82} clearcoat={0.8} />
      </mesh>
      <mesh rotation={[0.28, 0.15, 0.2]} scale={1.015}>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshBasicMaterial color="#e8ffff" wireframe transparent opacity={0.48} />
      </mesh>
      <mesh rotation={[0.8, 0.2, -0.45]}>
        <torusGeometry args={[1.58, 0.012, 8, 120]} />
        <meshBasicMaterial color="#d5b894" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[-0.45, 0.65, 0.8]}>
        <torusGeometry args={[1.82, 0.008, 8, 120]} />
        <meshBasicMaterial color="#94c9d4" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-label="A gently rotating interactive geometric sculpture">
      <Canvas dpr={[1, 1.5]} frameloop="always" gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} camera={{ position: [0, 0, 5.1], fov: 38 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[2, 3, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-2, -1, 2]} intensity={12} color="#a8d9df" />
        <FloatingForm />
      </Canvas>
      <span className="scene-caption">DESIGNING SYSTEMS THAT SCALE</span>
    </div>
  );
}