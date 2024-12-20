'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-white transform origin-left z-10'
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default SmoothScroll;