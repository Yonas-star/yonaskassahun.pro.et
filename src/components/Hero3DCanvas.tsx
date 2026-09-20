"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth responsive mouse follow
    const mouseX = state.pointer.x * 0.4;
    const mouseY = state.pointer.y * 0.4;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY + t * 0.2, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX + t * 0.25, 0.05);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.35;
      ring2Ref.current.rotation.z = t * 0.45;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group>
        {/* Central Fluid Wave Sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.35, 64, 64]} />
          <MeshDistortMaterial
            color="#ffffff"
            roughness={0.12}
            metalness={0.85}
            distort={0.42}
            speed={2.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Outer Orbiting Harmonic Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.0, 0.022, 16, 100]} />
          <meshStandardMaterial
            color="#2563eb"
            roughness={0.2}
            metalness={0.9}
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Outer Orbiting Harmonic Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.3, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#eab308"
            roughness={0.2}
            metalness={0.9}
            emissive="#ca8a04"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Ambient Subtle Particle Dust */}
        <Sparkles
          count={45}
          scale={5.5}
          size={2.5}
          speed={0.4}
          opacity={0.6}
          color="#3b82f6"
        />
        <Sparkles
          count={45}
          scale={5.5}
          size={2.5}
          speed={0.4}
          opacity={0.6}
          color="#facc15"
        />
      </group>
    </Float>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] relative flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient Studio Illumination */}
        <ambientLight intensity={0.8} />

        {/* Key Front-Top Light */}
        <directionalLight position={[0, 6, 6]} intensity={1.6} />

        {/* Blue Rim Light from the Left */}
        <pointLight position={[-6, 1, 3]} color="#3b82f6" intensity={4.5} distance={12} />

        {/* Yellow Rim Light from the Right */}
        <pointLight position={[6, -1, 3]} color="#facc15" intensity={4.5} distance={12} />

        {/* Interactive 3D Sculpture */}
        <FloatingSculpture />

        {/* Controlled user interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.6}
        />
      </Canvas>
    </div>
  );
}
