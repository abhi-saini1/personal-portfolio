"use client";
import React, { useEffect } from "react";
import { IconCloud } from "./Ui/IconsCloud";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";
import { Line } from "rc-progress";
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
        <div className="gs_reveal reveal_left w-full xl:w-1/2  xl:text-start lg:text-start">
          <motion.ul
            className="text-white text-[16px] xl:flex xl:flex-col xl:items-start lg:items-start flex flex-col items-center justify-center"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { skill: "HTML", percent: 98 },
              { skill: "CSS", percent: 97 },
              { skill: "JAVASCRIPT", percent: 95 },
              { skill: "BOOTSTRAP5", percent: 98 },
              { skill: "TAILWIND CSS", percent: 95 },
              { skill: "REACT", percent: 85 },
              { skill: "NEXT JS", percent: 85 },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="mb-2 "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[14px]">{item.skill}</span>
                <Line
                  percent={item.percent}
                  strokeWidth={1}
                  strokeColor="#2E933C"
                  className=" w-full h-[5px] bg-white rounded-full"
                />
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
