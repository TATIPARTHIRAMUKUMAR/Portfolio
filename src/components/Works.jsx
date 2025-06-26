import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#0a0a23] border border-indigo-600 rounded-2xl p-6 w-[350px] h-[400px] flex flex-col justify-between shadow-[0_0_25px_rgba(93,93,255,0.4)] hover:scale-[1.03] transition duration-300 backdrop-blur-md hover:shadow-[0_0_40px_#7f5af0]"
    >
      <div className="relative w-full h-[180px] flex items-center justify-center rounded-full overflow-hidden">
        <img src={image} alt={name} className="object-cover w-[120px] h-[120px] rounded-full border-2 border-white shadow-lg z-10" />
        <div className="absolute w-[160px] h-[160px] rounded-full border border-dashed border-cyan-400 animate-spin-slow z-0"></div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-cyan-300 mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        <div className="flex justify-center flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-xs ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </div>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className="absolute top-3 right-3 bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition cursor-pointer"
      >
        <img src={github} alt="github" className="w-5 h-5 object-contain" />
      </div>
    </motion.div>
  );
};

const Works = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (audioRef.current && !audioRef.current.playing) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0b0c2a] via-[#0a0a23] to-[#000010] py-20 px-6 overflow-hidden">
      <audio ref={audioRef} src="/cosmic-scroll.mp3" preload="auto" />

      <motion.div variants={textVariant()} className="text-center mb-12 z-10 relative">
        <p className={styles.sectionSubText}>Explore the Galactic Lab</p>
        <h2 className={styles.sectionHeadText}>Orbiting Projects</h2>
      </motion.div>

      <div className="relative z-10 flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Meteor Shower */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="meteor absolute w-[2px] h-[100px] bg-white opacity-20 animate-[meteorFall_10s_linear_infinite]"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `-${Math.random() * 100 + 100}px`,
            animationDelay: `${i * 2}s`,
          }}
        ></div>
      ))}

      <style>{`
        @keyframes meteorFall {
          0% { transform: translateY(0) rotate(45deg); opacity: 0.7; }
          100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Works, "projects");