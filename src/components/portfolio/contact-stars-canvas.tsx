import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  BufferGeometry,
  Color,
  DataTexture,
  Float32BufferAttribute,
  LinearFilter,
  PointsMaterial,
  RGBAFormat,
  type Group,
} from "three";

function createParticleSprite() {
  const size = 64;
  const pixels = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x + 0.5) / size - 0.5;
      const dy = (y + 0.5) / size - 0.5;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const falloff = Math.max(0, Math.min(1, (0.5 - distance) / 0.32));
      const alpha = falloff * falloff * (3 - 2 * falloff);
      const offset = (y * size + x) * 4;
      pixels[offset] = 255;
      pixels[offset + 1] = 255;
      pixels[offset + 2] = 255;
      pixels[offset + 3] = Math.round(alpha * 255);
    }
  }

  const texture = new DataTexture(pixels, size, size, RGBAFormat);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function createParticleGeometry(count: number, minRadius: number, maxRadius: number, seed = 0) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [new Color("#F4F4F5"), new Color("#38BDF8"), new Color("#F97316")] as const;

  for (let index = 0; index < count; index += 1) {
    const sequenceIndex = index + seed;
    const radialFraction = ((sequenceIndex + 0.5) * 0.61803398875) % 1;
    const vertical = 1 - 2 * (((sequenceIndex + 0.5) * 0.75487766625) % 1);
    const angle = 2 * Math.PI * (((sequenceIndex + 0.5) * 0.569840296) % 1);
    const radius = Math.cbrt(minRadius ** 3 + radialFraction * (maxRadius ** 3 - minRadius ** 3));
    const ringRadius = Math.sqrt(1 - vertical * vertical);
    const offset = index * 3;
    positions[offset] = Math.cos(angle) * ringRadius * radius;
    positions[offset + 1] = Math.sin(angle) * ringRadius * radius;
    positions[offset + 2] = vertical * radius;

    const color = palette[sequenceIndex % palette.length] ?? palette[0];
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
  return geometry;
}

function createParticleMaterial(sprite: DataTexture, size: number, opacity: number) {
  const material = new PointsMaterial({
    map: sprite,
    size,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity,
    depthWrite: false,
  });

  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vNearGlow;")
      .replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvNearGlow = 1.0 - smoothstep(0.65, 5.5, -mvPosition.z);",
      )
      .replace(
        "#include <logdepthbuf_vertex>",
        "gl_PointSize = min(gl_PointSize, 30.0);\n#include <logdepthbuf_vertex>",
      );
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vNearGlow;")
      .replace(
        "outgoingLight = diffuseColor.rgb;",
        "diffuseColor.rgb *= 0.55 + vNearGlow * 1.7;\ndiffuseColor.a *= 0.35 + vNearGlow * 0.65;\noutgoingLight = diffuseColor.rgb;",
      );
  };
  material.customProgramCacheKey = () => `contact-particle-depth-glow-${size}`;
  return material;
}

function Starfield() {
  const field = useRef<Group>(null);
  const geometries = useMemo(
    () => ({
      ambient: createParticleGeometry(1200, 2, 7),
      foreground: createParticleGeometry(400, 0.8, 3.2, 1200),
    }),
    [],
  );
  const sprite = useMemo(createParticleSprite, []);
  const ambientMaterial = useMemo(() => createParticleMaterial(sprite, 0.035, 0.68), [sprite]);
  const foregroundMaterial = useMemo(() => createParticleMaterial(sprite, 0.055, 0.9), [sprite]);

  useEffect(
    () => () => {
      geometries.ambient.dispose();
      geometries.foreground.dispose();
      ambientMaterial.dispose();
      foregroundMaterial.dispose();
      sprite.dispose();
    },
    [ambientMaterial, foregroundMaterial, geometries, sprite],
  );

  useFrame((state, delta) => {
    if (!field.current) return;
    field.current.rotation.y += delta * 0.035;
    field.current.rotation.x += (state.pointer.y * 0.025 - field.current.rotation.x) * delta;
  });

  return (
    <group ref={field}>
      <points geometry={geometries.ambient} material={ambientMaterial} />
      <points geometry={geometries.foreground} material={foregroundMaterial} />
    </group>
  );
}

export function ContactStarsCanvas() {
  return (
    <div className="contact-stars-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 3.2], fov: 48 }}
      >
        <Starfield />
      </Canvas>
    </div>
  );
}
