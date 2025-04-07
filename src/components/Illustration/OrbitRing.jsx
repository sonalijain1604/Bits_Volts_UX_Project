import React from 'react';
import { motion } from 'framer-motion';

const OrbitRing = ({ className }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Large orbit ring */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[400px] h-[200px] border border-[#9EF01A] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-[30deg]" />
      </motion.div>

      {/* Medium orbit ring */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[300px] h-[150px] border border-[#9EF01A] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-[60deg]" />
      </motion.div>

      {/* Small orbit ring */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[200px] h-[100px] border border-[#9EF01A] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-[15deg]" />
      </motion.div>
    </div>
  );
};

export default OrbitRing; 