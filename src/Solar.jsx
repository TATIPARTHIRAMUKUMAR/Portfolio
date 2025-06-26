// File: src/components/SolarSystem.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { styles } from './styles';
import AdvancedAnimatedImage from './components/canvas/Image';
import ig from './assets/me.jpeg';
import ProfileSphere from './ProfileSphere'; // add this import
import profileImage from './assets/profile.jpeg'; // adjust path if needed
import { Stars } from '@react-three/drei';

const TechPlanet = ({ size, distance, color, speed, label }) => {
    const ref = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        ref.current.position.x = Math.sin(t) * distance;
        ref.current.position.z = Math.cos(t) * distance;
        ref.current.rotation.y += 0.002;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshStandardMaterial color={color} />
            <Html
                position={[0, size + 1, 0]}
                distanceFactor={8}
                style={{
                    color: 'white',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px black',
                    pointerEvents: 'none',
                }}
            >
                {label}
            </Html>
        </mesh>
    );
};

const OrbitRing = ({ radius }) => {
    const points = [];
    for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
    }

    return (
        <line>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flat())}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#888888" linewidth={1.2} />
        </line>
    );
};

const SolarSystemCanvas = () => {
    const techStack = [
        { label: 'React', color: '#61dafb', size: 2, distance: 10, speed: 0.3 },
        { label: 'Next', color: '#ffffff', size: 1.9, distance: 14, speed: 0.19 },
        { label: 'JS', color: '#f7df1e', size: 1.8, distance: 18, speed: 0.25 },
        { label: 'TS', color: '#3178c6', size: 1.8, distance: 22, speed: 0.19 },
        { label: 'Tailwind', color: '#38bdf8', size: 1.9, distance: 26, speed: 0.2 },
        { label: 'Redux', color: '#764abc', size: 1.8, distance: 30, speed: 0.11 },
        { label: 'HTML', color: '#e34c26', size: 1.7, distance: 34, speed: 0.15 },
        { label: 'CSS', color: '#264de4', size: 1.7, distance: 38, speed: 0.18 },
        { label: 'Git', color: '#f05032', size: 1.8, distance: 42, speed: 0.13 },
        { label: 'Vite', color: '#646cff', size: 1.7, distance: 46, speed: 0.12 },
    ];

    return (
        <Canvas camera={{ position: [0, 20, 80], fov: 45 }} shadows>
            <Stars
                radius={100}       // how far the stars are
                depth={50}         // how deep the field is
                count={5000}       // number of stars
                factor={7}         // star size factor
                saturation={10}     // grayscale
                fade               // fade at edges
                speed={1}          // animation speed
            />

            <ambientLight intensity={0.6} />
            <pointLight position={[0, 0, 0]} intensity={3.5} color="#ffffaa" castShadow />
            <mesh>
                <sphereGeometry args={[6, 64, 64]} />
                <meshStandardMaterial emissive="#ffcc00" emissiveIntensity={2.5} color="#ffcc00" />
            </mesh>
            {/* <ProfileSphere imageUrl={profileImage} size={6} /> */}

            {techStack.map((tech, index) => (
                <React.Fragment key={index}>
                    <OrbitRing radius={tech.distance} />
                    <TechPlanet {...tech} />
                </React.Fragment>
            ))}
            <OrbitControls autoRotate autoRotateSpeed={0.25} enableZoom={false} enablePan={false} />
        </Canvas>
    );
};



export default function SolarSystem() {
    return (
        <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className={`absolute inset-0 top-[20px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915EFF]">Ramukumar</span></h1>
                    <p className={`${styles.heroSubText}  text-white-100`}>I develop user interfaces and web applications</p>
                    <p className="text-[16px] md:text-15px text-[#b0b0b0] mt-2">
                        This space maps my experience — from launches to milestones across tech galaxies.
                    </p>

                </div>
            </div>

            <div className="w-full h-[800px] md:h-[720px]">
                <SolarSystemCanvas />
            </div>

            <div className="flex gap-6 mb-6 justify-center z-10 relative">
                <a
                    href="/Resume.pdf"
                    download
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg shadow-xl transition-all duration-300"
                >
                    Download My Resume
                </a>
                <a
                    href="#work"
                    className="border border-purple-500 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-lg shadow-xl transition-all duration-300"
                >
                    View My Work
                </a>
            </div>


            <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
                <a href="#about">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                        className="w-8 h-8 text-3xl flex justify-center items-center"
                        style={{ transform: 'rotate(180deg)' }}
                    >
                        🚀
                    </motion.div>
                </a>
            </div>

        </section>
    );
}
