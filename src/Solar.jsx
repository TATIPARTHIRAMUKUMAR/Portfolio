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
            // case 0:
            //     ref.current.position.x = 0;
            //     ref.current.position.z = distance * (index % 2 === 0 ? 1 : -1);
            //     break;
            case 0:
                if (index < 2) {
                    ref.current.position.x = 5;
                    ref.current.position.z = 5;
                } else {
                    ref.current.position.x = Math.sin(t) * distance;
                    ref.current.position.z = Math.cos(t) * distance;
                }
                break;
            case 8:
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

const Meteor = ({ startX, startZ, speed }) => {
    const ref = useRef();
    const [y, setY] = useState(50);

    useFrame(() => {
        if (!ref.current) return;
        setY((prev) => {
            const newY = prev - speed;
            if (newY < -10) return 50;
            return newY;
        });

        ref.current.position.set(startX, y, startZ);
        ref.current.rotation.x += 0.1;
        ref.current.rotation.y += 0.05;
    });

    return (
        <group ref={ref}>
            {/* Meteor head */}
            <mesh>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color="#ffa500" emissive="#ff4500" emissiveIntensity={2} />
            </mesh>

            {/* Meteor trail */}
            <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.3, 1.5, 8]} />
                <meshStandardMaterial color="#ff6347" transparent opacity={0.6} />
            </mesh>
        </group>
    );
};


const EventVisuals = ({ eventIndex }) => {
    switch (eventIndex) {
        case 1: // ☄️ Meteor Storm Surge
            return (
                <group>
                    {[...Array(30)].map((_, i) => {
                        const startX = Math.random() * 100 - 50;
                        const startZ = Math.random() * 100 - 50;
                        const speed = 0.2 + Math.random() * 0.3;

                        return (
                            <Meteor key={i} startX={startX} startZ={startZ} speed={speed} />
                        );
                    })}
                </group>
            );


        case 2:
            return (
                <mesh>
                    <sphereGeometry args={[10, 64, 64]} />
                    <meshStandardMaterial color="#ffcc00" emissive="#ffff99" emissiveIntensity={5} transparent opacity={0.6} />
                </mesh>
            );
        case 3:
            return (
                <mesh>
                    <planeGeometry args={[300, 300]} />
                    <meshBasicMaterial color="black" transparent opacity={0.5} />
                </mesh>
            );
        case 4:
            return (
                <group>
                    <Float floatIntensity={2} rotationIntensity={2}>
                        <Sparkles count={200} scale={[100, 100, 100]} speed={2} size={4} color="#00ffff" />
                    </Float>
                </group>
            );
        case 5:
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
        case 6:
            return (
                <Float floatIntensity={1}>
                    <Sparkles count={300} scale={[80, 80, 80]} speed={1} size={6} color="#ff66cc" />
                </Float>
            );
        case 7: // 🧿 Wormhole Pulse
            return (
                <group position={[0, 0, 0]}>
                    {/* Fading spiral cone */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <coneGeometry args={[20, 60, 64, 1, true]} />
                        <meshStandardMaterial
                            color="#00ffff"
                            transparent
                            opacity={0.15}
                            emissive="#0033ff"
                            wireframe={true}
                            side={2}
                        />
                    </mesh>

                    {/* Floating light sphere in middle of vortex */}
                    <Float floatIntensity={2} speed={1.5}>
                        <mesh>
                            <sphereGeometry args={[2, 32, 32]} />
                            <meshStandardMaterial color="#ffffff" emissive="#00ccff" emissiveIntensity={4} />
                        </mesh>
                    </Float>

                    {/* Swirling sparkles */}
                    <Sparkles count={200} scale={[30, 60, 30]} speed={2} size={3} color="#00ffff" />
                </group>
            );

        default:
            return null;
    }
};


const SolarSystemCanvas = ({ eventIndex }) => {
    // const [eventIndex, setEventIndex] = useState(0);

    // const eventNames = [
    //     // "🌌 Planetary Alignment",
    //     "🌠 Twin Conjunction",
    //     "☄️ Meteor Storm Surge",
    //     "🌞 Hyper Solar Flare",
    //     "🌑 Full Lunar Veil",
    //     "🌀 Gravitational Twist",
    //     "🛸 Alien Signal Burst",
    //     "🌈 Nebula Bloom",
    //     "🧿 Wormhole Pulse",
    //     "🛰️ Orbit Freeze"
    // ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setEventIndex((prev) => (prev + 1) % eventNames.length);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    const techStack = [
        { label: 'React', color: '#61dafb', size: 2, distance: 10, speed: 0.3 },
        { label: 'Next', color: '#ffffff', size: 1.9, distance: 14, speed: 0.19 },
        { label: 'JS', color: '#f7df1e', size: 1.8, distance: 18, speed: 0.25 },
        { label: 'TS', color: '#3178c6', size: 1.8, distance: 22, speed: 0.19 },
        { label: 'Python', color: '#38bdf8', size: 1.9, distance: 26, speed: 0.2 },
        { label: 'NodeJs', color: '#764abc', size: 1.8, distance: 30, speed: 0.11 },
        { label: 'GraphQL', color: '#e34c26', size: 1.7, distance: 34, speed: 0.15 },
        { label: 'Vite', color: '#264de4', size: 1.7, distance: 38, speed: 0.18 },
        { label: 'Azure', color: '#f05032', size: 1.8, distance: 42, speed: 0.13 },
        { label: 'AWS', color: '#646cff', size: 1.7, distance: 46, speed: 0.12 },
    ];

    return (
        <Canvas camera={{ position: [0, 20, 80], fov: 45 }} shadows>
            <Stars radius={120} depth={70} count={7000} factor={8} saturation={20} fade speed={2} />

            <ambientLight intensity={0.7} />
            <pointLight position={[0, 0, 0]} intensity={4} color="#ffffcc" castShadow />
            {/* Original Glowing Sun */}
            <group>
                {/* Subtle Sun - faded visual anchor */}
                <mesh>
                    <sphereGeometry args={[6, 64, 64]} />
                    <meshStandardMaterial
                        color="#ffcc00"
                        emissive="#ffe066"
                        emissiveIntensity={0.3} // low glow
                        transparent
                        opacity={0.4} // super subtle
                    />
                </mesh>

                {/* MY SKILL SET - Glowing core text inside the Sun */}
                <Html
                    position={[0, 0, 0]}
                    distanceFactor={8}
                    center
                    style={{
                        transform: 'translate(-50%, -50%)', // this centers the div around the sphere
                        fontSize: '140px',
                        fontWeight: '900',
                        color: '#ffe066',
                        fontFamily: 'Orbitron, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textAlign: 'center',
                        textShadow: '0 0 30px #ffaa00, 0 0 60px #ffcc00',
                        animation: 'pulseText 3s ease-in-out infinite alternate',
                        pointerEvents: 'none',
                        lineHeight: 1,
                    }}
                >
                    MY SKILL SET
                </Html>

            </group>







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


    const [eventIndex, setEventIndex] = useState(0);
    const eventNames = [
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
        }, 7000);
        return () => clearInterval(interval);
    }, []);



    const fullText = "Building scalable, user-focused applications across the full stack.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            <div className="absolute bottom-10 right-10 z-20">
                <div className="bg-black/60 backdrop-blur-md border border-cyan-400 text-cyan-100 px-6 py-3 rounded-lg shadow-lg font-orbitron text-xs sm:text-sm md:text-base tracking-wider uppercase">
                    ⚡ Cosmic Event: <span className="text-white">{eventNames[eventIndex]}</span>
                </div>
            </div>
            <div className={`absolute inset-0 top-[20px] max-w-10xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                {/* <div className="relative flex flex-col items-center justify-center h-[400px]">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 shadow-2xl z-20"
                    />

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        className="absolute w-32 h-32 border border-purple-400 rounded-full z-10"
                    />

                    <div className="absolute flex flex-col gap-1 mt-20">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [0, 40, 0], opacity: [0.4, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                className="w-[2px] bg-gradient-to-b from-purple-500 to-transparent mx-auto"
                            />
                        ))}
                    </div>

                    <div className="absolute top-0 text-xs font-mono text-purple-300 opacity-60 select-none animate-pulse">
                        INIT :: CORE-LINK :: READY
                    </div>
                </div> */}





                <div className="flex flex-col gap-6 mt-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#ffd400] bg-clip-text text-transparent tracking-tight drop-shadow-lg animate-fadeIn">
                        I’m Ramukumar, Full Stack Developer
                    </h1>






                    {/* Typewriter Effect Text */}
                    <p className="text-[18px] sm:text-xl md:text-2xl font-mono text-white/90 max-w-3xl border-l-4 border-purple-500 pl-4 animate-pulse">
                        {displayedText}
                        <span className="text-purple-400">|</span>
                    </p>
                </div>



            </div>
            <div className="w-full h-[800px] md:h-[720px]">
                <SolarSystemCanvas eventIndex={eventIndex} />
            </div>
            <div className="flex gap-6 mb-6 justify-start z-10 relative pl-10">
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