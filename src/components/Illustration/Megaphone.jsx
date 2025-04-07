import React from 'react';
import { motion } from 'framer-motion';
import OrbitRing from './OrbitRing';
import IconGroup from './IconGroup';

const Megaphone = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Main megaphone SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-64 h-64 relative z-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Megaphone cone */}
        <motion.path
          d="M60,120 L140,80 L140,120 L60,140 Z"
          fill="white"  // White fill
          className="drop-shadow-lg"
        />
        
        {/* Green edges */}
        <motion.path
          d="M60,120 L140,80 L145,82 L65,122 Z"
          fill="#9EF01A"  // Neon green top edge
        />
        <motion.path
          d="M140,80 L140,120 L145,118 L145,82 Z"
          fill="#9EF01A"  // Neon green side edge
        />
        
        {/* Handle */}
        <motion.rect
          x="50"
          y="125"
          width="12"
          height="20"
          fill="#000"
          className="drop-shadow-lg"
        />

        {/* Sound waves */}
        <motion.g
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <path
            d="M145,100 Q165,100 165,90"
            stroke="#9EF01A"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M145,100 Q170,100 170,85"
            stroke="#9EF01A"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M145,100 Q175,100 175,80"
            stroke="#9EF01A"
            strokeWidth="3"
            fill="none"
          />
        </motion.g>
      </motion.svg>

      {/* Orbital rings */}
      <OrbitRing className="absolute" />

      {/* Social icons */}
      <IconGroup />

      {/* Decorative stars */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-[#9EF01A] transform rotate-45" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <div className="w-2 h-2 bg-[#9EF01A] transform rotate-45" />
      </motion.div>
    </div>
  );
};

export default Megaphone; 