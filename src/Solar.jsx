// File: src/components/SolarSystem.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars, Sparkles, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { styles } from './styles';

const TechPlanet = ({ size, distance, color, speed, label, eventIndex, index }) => {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime() * speed;

        switch (eventIndex) {
            case 0:
                ref.current.position.x = 0;
                ref.current.position.z = distance * (index % 2 === 0 ? 1 : -1);
                break;
            case 1:
                if (index < 2) {
                    ref.current.position.x = 5;
                    ref.current.position.z = 5;
                } else {
                    ref.current.position.x = Math.sin(t) * distance;
                    ref.current.position.z = Math.cos(t) * distance;
                }
                break;
            case 9:
                break;
            default:
                ref.current.position.x = Math.sin(t) * distance;
                ref.current.position.z = Math.cos(t) * distance;
                break;
        }

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

const EventVisuals = ({ eventIndex }) => {
    switch (eventIndex) {
        case 2:
            return (
                <group>
                    {[...Array(40)].map((_, i) => (
                        <mesh key={i} position={[Math.random() * 100 - 50, 30, Math.random() * 100 - 50]}>
                            <sphereGeometry args={[0.25, 8, 8]} />
                            <meshStandardMaterial color="white" emissive="cyan" />
                        </mesh>
                    ))}
                </group>
            );
        case 3:
            return (
                <mesh>
                    <sphereGeometry args={[10, 64, 64]} />
                    <meshStandardMaterial color="#ffcc00" emissive="#ffff99" emissiveIntensity={5} transparent opacity={0.6} />
                </mesh>
            );
        case 4:
            return (
                <mesh>
                    <planeGeometry args={[300, 300]} />
                    <meshBasicMaterial color="black" transparent opacity={0.5} />
                </mesh>
            );
        case 5:
            return (
                <group>
                    <Float floatIntensity={2} rotationIntensity={2}>
                        <Sparkles count={200} scale={[100, 100, 100]} speed={2} size={4} color="#00ffff" />
                    </Float>
                </group>
            );
        case 6:
            return (
                <group>
                    {[...Array(3)].map((_, i) => (
                        <mesh key={i}>
                            <ringGeometry args={[8 + i * 2, 8.5 + i * 2, 64]} />
                            <meshBasicMaterial color="#00ffcc" side={2} transparent opacity={0.4} />
                        </mesh>
                    ))}
                </group>
            );
        case 7:
            return (
                <Float floatIntensity={1}>
                    <Sparkles count={300} scale={[80, 80, 80]} speed={1} size={6} color="#ff66cc" />
                </Float>
            );
        case 8:
            return (
                <mesh position={[0, 0, -40]}>
                    <torusKnotGeometry args={[10, 2, 100, 16]} />
                    <meshStandardMaterial color="#00ffff" emissive="#0033ff" wireframe />
                </mesh>
            );
        default:
            return null;
    }
};

const SolarSystemCanvas = () => {
    const [eventIndex, setEventIndex] = useState(0);

    const eventNames = [
        "🌌 Planetary Alignment",
        "🌠 Twin Conjunction",
        "☄️ Meteor Storm Surge",
        "🌞 Hyper Solar Flare",
        "🌑 Full Lunar Veil",
        "🌀 Gravitational Twist",
        "🛸 Alien Signal Burst",
        "🌈 Nebula Bloom",
        "🧿 Wormhole Pulse",
        "🛰️ Orbit Freeze"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setEventIndex((prev) => (prev + 1) % eventNames.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

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
            <Stars radius={120} depth={70} count={7000} factor={8} saturation={20} fade speed={2} />
            <ambientLight intensity={0.7} />
            <pointLight position={[0, 0, 0]} intensity={4} color="#ffffcc" castShadow />
            <mesh>
                <sphereGeometry args={[6, 64, 64]} />
                <meshStandardMaterial emissive="#ffe066" emissiveIntensity={3} color="#ffcc00" />
            </mesh>

            <Html
                position={[30, 30, 0]}
                distanceFactor={50}
                style={{
                    position: 'absolute',
                    right: 30,
                    top: 30,
                    background: 'radial-gradient(circle at top left, rgba(75,0,130,0.7), rgba(0,0,50,0.9))',
                    padding: '16px 36px',
                    borderRadius: '18px',
                    color: '#F0F8FF',
                    fontSize: '22px',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: '700',
                    border: '2px solid #7F00FF',
                    boxShadow: '0 0 20px #7F00FF',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    backdropFilter: 'blur(8px)',
                    animation: 'pulse 2s infinite'
                }}
            >
                ⚡ Cosmic Event: {eventNames[eventIndex]}
            </Html>

            <EventVisuals eventIndex={eventIndex} />

            {techStack.map((tech, index) => (
                <React.Fragment key={index}>
                    <OrbitRing radius={tech.distance} />
                    <TechPlanet {...tech} eventIndex={eventIndex} index={index} />
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
                    <p className={`${styles.heroSubText} text-white-100`}>I develop user interfaces and web applications</p>
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