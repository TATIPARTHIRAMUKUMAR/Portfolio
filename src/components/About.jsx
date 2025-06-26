import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SatelliteOrbit = () => (
  <div className="satellite-wrapper">
    <div className="satellite-track">
      <span className="satellite">🛰️</span>
    </div>
    <style>{`
      .satellite-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .satellite-track {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: orbit 10s linear infinite;
      }

      .satellite {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 20px;
        filter: drop-shadow(0 0 5px #00f0ff);
      }

      @keyframes orbit {
        0% { transform: translate(0%, 0%); }
        25% { transform: translate(100%, 0%); }
        50% { transform: translate(100%, 100%); }
        75% { transform: translate(0%, 100%); }
        100% { transform: translate(0%, 0%); }
      }
    `}</style>
  </div>
);

const HoverAstronaut = () => (
  <div className="astronaut-wrapper">
    <span className="astronaut">👨‍🚀</span>
    <div className="scanner"></div>
    <style>{`
      .astronaut-wrapper {
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: floatAstronaut 3s ease-in-out infinite;
        pointer-events: none;
      }

      .astronaut {
        font-size: 24px;
        filter: drop-shadow(0 0 3px white);
      }

      .scanner {
        width: 4px;
        height: 30px;
        background: linear-gradient(to bottom, #00f0ff, transparent);
        margin-top: 5px;
        animation: scanBeam 1s ease-in-out infinite;
      }

      @keyframes floatAstronaut {
        0%, 100% { transform: translate(-50%, 0); }
        50% { transform: translate(-50%, -10px); }
      }

      @keyframes scanBeam {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.2; }
      }
    `}</style>
  </div>
);

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full relative overflow-visible group">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full p-[1px] rounded-[20px] shadow-card relative"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 relative overflow-visible bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] border border-[#3f3f5e] shadow-lg"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        <div className="hidden group-hover:block">
          <SatelliteOrbit />
          <HoverAstronaut />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] space-y-4"
      >
        <p>With around 6 years of experience in frontend development, I’ve always believed in the power of technology to improve lives. My journey has taken me through roles at Dell, Boston Scientific, and several startups, where I’ve built user-focused web and mobile applications that merge clean design with seamless functionality. Whether contributing to large enterprise platforms or fast-paced startup builds, I focus on crafting intuitive, responsive experiences that deliver real value.</p>
        <p>At Dell, I worked on optimizing internal platforms to improve operational workflows and data visualization for enterprise users. At Boston Scientific, I helped develop tools to support medical professionals, enhancing the usability and reliability of their internal systems. These roles strengthened my skills in scalable frontend architecture and cross-functional collaboration. I also developed an AI chatbot using React.js.</p>
        <p>Outside of work, I’m passionate about entrepreneurship and mentoring in tech. I founded SkillMentor: Elevating Interview Success and Beyond, a platform designed to help individuals prepare for interviews and grow their career confidence through curated resources and personalized guidance. I regularly attend local tech meetups and volunteer at events that inspire young developers. If you’re interested in chatting about frontend engineering, product ideas, or startup journeys, I’d love to connect.</p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 z-10 relative">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");