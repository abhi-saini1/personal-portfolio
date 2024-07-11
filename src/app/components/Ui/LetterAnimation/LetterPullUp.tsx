"use client";
import { motion } from "framer-motion";

interface LetterPullupProps {
  words: string;
  delay?: number;
}

export default function LetterPullup({
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
        duration: 0.5, // Adjust duration for smoothness
      ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  return (
    <div className="flex">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
