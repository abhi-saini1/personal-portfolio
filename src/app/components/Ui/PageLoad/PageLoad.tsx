import { motion } from 'framer-motion';
import React from 'react';

const PageLoad: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen w-screen bg-[#11052c] fixed top-0 bottom-0"
      initial={{ height: '0vh' }}
      animate={{ height: '100vh' }}
      exit={{ height: '100vh' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px' }}
    >
      {/* Text content */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center cursor-default text-[10rem] font-Lora font-bold text-white z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.7 }} // Delay text animation
      >
        Portfolio.
      </motion.div>

      {/* Green background animation */}
      <motion.div
        className="h-screen w-screen bg-[#ebca60] fixed  bottom-0"
        initial={{ bottom: '-100vw' }}
        animate={{ bottom: '0vw' }}
        exit={{ bottom: '100vw' }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.09}} // Delay green animation
        style={{ borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}
      />
    </motion.div>
  );
};

export default PageLoad;
