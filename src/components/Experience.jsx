import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="relative bg-[#0b0c2a] bg-opacity-80 border border-indigo-400 rounded-2xl shadow-[0_0_30px_rgba(93,93,255,0.6)] p-8 text-white w-[800px] max-w-full backdrop-blur-md transform hover:scale-[1.04] transition duration-300 hover:shadow-[0_0_50px_#7f5af0]"
  >
    <div className="relative -top-6 mx-auto w-14 h-14 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg border border-white">
      <img
        src={experience.image}
        alt={experience.company_name}
        className="w-9 h-9 object-contain"
      />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-cyan-300 mb-1">{experience.title}</h3>
      <p className="text-gray-400 text-xs italic mb-4">{experience.date}</p>
    </div>
    <ul className="list-disc list-inside space-y-3 text-sm text-gray-300 max-h-[220px] overflow-y-auto pr-2">
      {experience.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  useEffect(() => {
    document.body.classList.add("night-mode");
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#000010] via-[#0a0a23] to-[#000010] overflow-hidden py-20 px-4">
      <motion.div variants={textVariant()} className="text-center mb-16 z-10 relative">
        <p className={styles.sectionSubText}>Journey Through the Galaxy</p>
        <h2 className={styles.sectionHeadText}>My Cosmic Work Experience</h2>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-20">
        <div className="w-1 bg-gradient-to-b from-cyan-400 to-purple-600 h-full absolute left-1/2 transform -translate-x-1/2 top-0 z-0"></div>
        {experiences.map((exp, i) => (
          <div key={i} className="relative z-10 flex items-center gap-10">
            <div className="w-4 h-4 rounded-full bg-white border-4 border-indigo-500 z-20"></div>
            <ExperienceCard experience={exp} index={i} />
          </div>
        ))}
      </div>

      {/* Solar Background SVGs */}
      <svg className="absolute -top-20 left-1/4 w-[150px] h-[150px] opacity-20 animate-spin-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="url(#sunGradient)" />
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff176" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
      </svg>

      <svg className="absolute top-[15%] left-[10%] w-[100px] h-[100px] animate-spin-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" fill="url(#planet2)" />
        <defs>
          <radialGradient id="planet2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0e7ff" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
        </defs>
      </svg>

      <svg className="absolute top-[70%] right-[20%] w-[120px] h-[120px] animate-pulse" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="32" fill="url(#planet3)" />
        <defs>
          <radialGradient id="planet3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
      </svg>

      {/* Black Hole Effect */}
      <div className="absolute bottom-[25%] left-[5%] w-[250px] h-[250px] bg-gradient-radial from-black via-[#1f1f1f] to-transparent rounded-full animate-spin-slow opacity-30 blur-3xl"></div>

      {/* Additional Space Theme Elements */}
      <div className="absolute top-[60%] left-[70%] w-[180px] h-[180px] bg-gradient-radial from-white via-indigo-300 to-transparent rounded-full opacity-10 animate-ping"></div>

      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-purple-800 to-blue-900 opacity-20 blur-3xl rounded-full -z-10"></div>

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="meteor absolute w-[2px] h-[100px] bg-white opacity-20 animate-[meteorFall_10s_linear_infinite]"
          style={{ left: `${Math.random() * 100}vw`, top: `-${Math.random() * 100 + 100}px`, animationDelay: `${i * 2}s` }}
        ></div>
      ))}

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes meteorFall {
          0% { transform: translateY(0) rotate(45deg); opacity: 0.7; }
          100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .night-mode {
          background-color: #000010;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Experience, "work");