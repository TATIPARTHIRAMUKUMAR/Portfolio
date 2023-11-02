import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

import { useThree } from '@react-three/fiber';

function ImagePlane({ imageUrl }) {
    const texture = useLoader(TextureLoader, imageUrl);
    const mesh = useRef();
    const [isRotating, setIsRotating] = useState(true); // State to track rotation

    // Toggle rotation on click
    const toggleRotation = () => {
        setIsRotating(!isRotating);
    };

    useFrame(() => {
        if (mesh.current && isRotating) {
            mesh.current.rotation.y += 0.01;
            mesh.current.rotation.x += 0.01;
        }
    });

    return (
        <group ref={mesh} position={[0, -1.4, 0]}>
            <mesh onClick={toggleRotation}>
                <sphereBufferGeometry args={[2.6, 23, 23]} />
                <meshBasicMaterial map={texture} />
            </mesh>
        </group>
    );
}


const Stars = () => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 8 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
            <PointMaterial
                transparent
                color='#f272c8'
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
};

export default function AdvancedAnimatedImage({ imageUrl }) {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 100 }}>
            <ambientLight intensity={0.9} />
            <pointLight position={[10, 10, 10]} />
            {/* <ImagePlane imageUrl={imageUrl} /> */}
            <Stars />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
