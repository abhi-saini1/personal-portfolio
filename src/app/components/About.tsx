"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LetterPullup from "./Ui/LetterAnimation/LetterPullUp";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SplitText from "./Ui/SplitText/SplitText";
import { Animatelistdemo } from "./Ui/AnimatedList/Animatelistdemo";
const About = () => {
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
    <div className="pt-20 px-20 pb-10" ref={ref}>
      <div className="flex flex-col xl:items-start xl:justify-between xl:flex-row lg:items-start lg:flex-row lg:justify-between pt-10 items-center justify-center">
        {/* Image */}
        <div className="gs_reveal reveal_left  xl:order-1 lg:order-1 order-2">
          <Image
            src="/about.jpg"
            className="xl:w-[500px] xl:h-[500px] lg:w-[500
            px] lg:h-[500px] sm:h-[450px] sm:w-[450px]  md:w-[450px] md:h-[450px]  rounded-sm h-full  w-full"
            width={500}
            height={500}
            alt="/about.jpg"
          />
        </div>

        {/* about me  text*/}

        <div className="gs_reveal reveal_right w-full max-w-md lg:max-w-lg xl:flex xl:flex-col xl:items-start lg:items-start flex flex-col  items-center justify-center xl:order-1 lg:order-1 order-1">
          <motion.div
            className="text-6xl font-Lora mb-3 text-[#46f5d5]"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <LetterPullup words="About Me" delay={0.7} />
          </motion.div>

          <div className="flex items-center justify-center flex-col mt-2">
            <p className="text-gray-300 xl:text-[18px] lg:text-[18px] text-16px xl:text-start lg:text-start text-center">
            
            Hello, I'm Abhishek, a dedicated frontend developer specializing in crafting visually appealing and functional websites. Reach out to me to collaborate on your next web development project!
            </p>

            <div>
              <h4 className="text-white mt-5 xl:text-[18px] lg:text-[18px] md:text-[24px] sm:text-[24px] font-medium xl:text-start lg:text-start text-center text-[24px]">
                My Education:-
              </h4>
              <div className="">
                <Animatelistdemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
