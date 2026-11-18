import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { BufferGeometry, Float32BufferAttribute, type Group } from "three";

function CrystalParticles() {
  const particles = useRef<Group>(null);
  const geometry = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < count; index += 1) {
      const vertical = 1 - (index / (count - 1)) * 2;
      const ringRadius = Math.sqrt(1 - vertical * vertical);
      const angle = goldenAngle * index;
      const radius = 1.9 + ((index * 17) % 25) / 100;
      const offset = index * 3;
      positions[offset] = Math.cos(angle) * ringRadius * radius;
      positions[offset + 1] = vertical * radius;
      positions[offset + 2] = Math.sin(angle) * ringRadius * radius;
    }

    const result = new BufferGeometry();
    result.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return result;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (particles.current) particles.current.rotation.y += delta * 0.025;
  });

  return (
    <group ref={particles}>
      <points geometry={geometry}>
        <pointsMaterial
          color="#38BDF8"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.68}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function FloatingForm() {
  const form = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!form.current) return;
    const t = Math.min(delta, 0.05);
    form.current.rotation.x += (state.pointer.y * 0.2 - form.current.rotation.x) * t * 2;
    form.current.rotation.y +=
      (state.pointer.x * 0.26 + state.clock.elapsedTime * 0.08 - form.current.rotation.y) * t * 2;
    form.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.08;
  });

  return (
    <group ref={form}>
      <mesh rotation={[0.28, 0.15, 0.2]}>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshPhysicalMaterial
          color="#38BDF8"
          metalness={0.48}
          roughness={0.2}
          transparent
          opacity={0.82}
          clearcoat={0.8}
        />
      </mesh>
      <mesh rotation={[0.28, 0.15, 0.2]} scale={1.015}>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshBasicMaterial color="#F4F4F5" wireframe transparent opacity={0.48} />
      </mesh>
      <mesh rotation={[0.8, 0.2, -0.45]}>
        <torusGeometry args={[1.58, 0.012, 8, 120]} />
        <meshBasicMaterial color="#F97316" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[-0.45, 0.65, 0.8]}>
        <torusGeometry args={[1.82, 0.008, 8, 120]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.5} />
      </mesh>
      <CrystalParticles />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-label="A gently rotating interactive geometric sculpture">
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 5.1], fov: 38 }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[2, 3, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-2, -1, 2]} intensity={9} color="#38BDF8" />
        <FloatingForm />
      </Canvas>
      <span className="scene-caption">DESIGNING SYSTEMS THAT SCALE</span>
    </div>
  );
}
