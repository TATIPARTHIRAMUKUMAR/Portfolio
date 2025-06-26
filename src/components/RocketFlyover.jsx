// File: src/components/RocketFlyover.jsx
import React from "react";
import { motion } from "framer-motion";

const RocketFlyover = () => {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: '100vw', opacity: 1 }}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
      className="fixed top-[30%] left-0 z-50 flex items-center gap-1 pointer-events-none"
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.3,
        }}
        className="text-orange-500 text-xl"
      >
        🔥
      </motion.div>
      <div className="text-4xl">🚀</div>
    </motion.div>
  );
};

export default RocketFlyover;
