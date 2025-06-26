import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingProfileSatellite = ({ imageUrl }) => {
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  const meshRef = useRef();
  const blastRef = useRef();

  const [startTime] = useState(() => performance.now());
  const [settled, setSettled] = useState(false);
  const [blastVisible, setBlastVisible] = useState(false);
  const [blastStartTime, setBlastStartTime] = useState(null);
  const [blastCount, setBlastCount] = useState(0);

  texture.center.set(0.5, 0.5);
  texture.rotation = 0.2;

  useFrame(() => {
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;

    if (elapsed >= 4.8 && blastCount < 2 && !blastVisible) {
      setBlastVisible(true);
      setBlastStartTime(elapsed);
    }

    if (elapsed < 5) {
      const t = elapsed;
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.position.set(20, 20 + Math.sin(t * 2) * 2, 20);
    } else if (!settled) {
      const currentPos = meshRef.current.position;
      const target = new THREE.Vector3(0, 0, 0);
      currentPos.lerp(target, 0.05);

      if (currentPos.distanceTo(target) < 0.1) {
        meshRef.current.position.set(0, 0, 0);
        setSettled(true);
      }

      meshRef.current.rotation.y += 0.01;
    } else {
      meshRef.current.position.set(0, 0, 0);
      meshRef.current.rotation.y += 0.01;
    }

    if (blastVisible && blastRef.current) {
      const blastElapsed = elapsed - blastStartTime;
      const scale = 1 + blastElapsed * 10;
      const opacity = Math.max(1 - blastElapsed * 2, 0);

      blastRef.current.scale.set(scale, scale, scale);
      blastRef.current.material.opacity = opacity;

      if (opacity <= 0) {
        setBlastVisible(false);
        setBlastCount(prev => prev + 1); // increment blast count
      }
    }
  });

  return (
    <>
      {blastVisible && blastCount < 3 && (
        <mesh ref={blastRef} position={[0, 0, 0]}>
          <ringGeometry args={[1, 2, 64]} />
          <meshBasicMaterial
            color="#ff4500"
            side={THREE.DoubleSide}
            transparent
            opacity={1}
          />
        </mesh>
      )}

      <mesh ref={meshRef}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default FloatingProfileSatellite;
