"use client";
import React, { useEffect } from "react";
import { IconCloud } from "./Ui/IconsCloud";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import LetterPullup from "./Ui/LetterAnimation/LetterPullUp";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const skillsData = [
    {
      skill: 'HTML', percent: 100,level: "Advanced"
    },
    {
      skill: 'CSS', percent: 98,level: "intermediate"
    },
    {
      skill: 'JAVASCRIPT', percent: 90,level: "intermediate"
    },
    {
      skill: 'BOOTSTRAP5', percent: 100,level: "Advanced"
    },
    {
      skill: 'TAILWIND CSS', percent: 100,level: "Advanced"
    },
    {
      skill: 'REACT', percent: 95,level: "intermediate"
    },
    {
      skill: 'NEXT.JS', percent: 95,level: "intermediate"
    },

  ]
  return (
    <div className="pt-10 pb-10 px-20 " ref={ref}>
      <motion.div
        className="text-7xl flex items-center  font-Lora justify-center pb-10 text-[#46f5d5]"
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <LetterPullup words="Skills" delay={0.7} />
      </motion.div>
      <div className="flex flex-col xl:flex-row xl:items-center  xl:justify-between  lg:flex lg:items-center lg:justify-center  lg:flex-row md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center items-center justify-center">
        {/* Text */}
      <div className="gs_reveal reveal_left w-full xl:w-1/2 flex flex-col xl:items-start lg:items-start items-center">
  <motion.ul
    className="text-white text-[16px] flex flex-wrap gap-6 justify-center xl:justify-start"
    initial="hidden"
    animate={controls}
    variants={itemVariants}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    {skillsData.map((item, i) => (
      <motion.li
        key={i}
        className="flex flex-col items-center gap-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <CircularProgressbar
          value={item.percent}
          text={`${item.percent}%`}
          styles={buildStyles({
            textSize: '20px',
            textColor: '#fff',
            pathColor:
            item.level === "Advanced"
              ? "#2CDD38" // Green
              : item.level === "Intermediate"
              ? "#F2BB05" 
              : "#F2BB05",
          trailColor: "#fff",
     
          })}
          className="w-20 h-20"
        />
        <span className="text-[14px]">{item.skill}</span>
      </motion.li>
    ))}
  </motion.ul>
</div>



        {/* Skills */}
        <div className="gs_reveal reveal_right xl:w-[400px] lg:w-[400px] w-full md:w-[250px] sm:w-[250px]">
          <IconCloud />
        </div>
      </div>
    </div>
  );
};

export default Skills;
