import { motion } from 'framer-motion';

interface SplitTextProps {
    text: string;
  }
  
const SplitText:React.FC<SplitTextProps> = ({ text }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 ,},
  };

  return (
    <motion.span variants={variants} initial="hidden" animate="visible">
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;