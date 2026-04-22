import { useState, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<any>();
  const { mouse, viewport } = useThree();
  
  const [positions] = useState(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Smooth idle rotation
    ref.current.rotation.x += delta * 0.05;
    ref.current.rotation.y += delta * 0.03;

    // React to mouse
    const targetX = mouse.x * (viewport.width / 2);
    const targetY = mouse.y * (viewport.height / 2);
    
    ref.current.position.x += (targetX * 0.05 - ref.current.position.x) * 0.1;
    ref.current.position.y += (targetY * 0.05 - ref.current.position.y) * 0.1;
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2dd4bf"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
