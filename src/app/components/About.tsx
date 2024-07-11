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
      <div className="flex flex-col xl:items-start xl:justify-between xl:flex-row lg:items-start lg:flex-row lg:justify-between pt-10 justify-center items-center">
        {/* Image */}
        <div className="gs_reveal reveal_left   mb-10 lg:mb-0 xl:order-1 lg:order-1 order-2">
          <Image
            src="/about.jpg"
            className="xl:w-[500px] xl:h-[500px] lg:w-[500
            px] lg:h-[500px]  w-[450px] h-[450px] rounded-sm"
            width={500}
            height={500}
            alt="/about.jpg"
          />
        </div>

        {/* about me  text*/}

        <div className="gs_reveal reveal_right w-full max-w-md lg:max-w-lg xl:flex xl:flex-col xl:items-start lg:items-start flex flex-col  items-center justify-center xl:order-1 lg:order-1 order-1">
          <motion.div
            className="xl:text-5xl lg:text-5xl text-4xl font-Lora mb-3 text-[#46f5d5]"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <LetterPullup words="About Me" delay={0.7} />
          </motion.div>

          <div className="">
            <p className="text-white text-[20px]">
            
            Hello, I'm Abhishek, a dedicated frontend developer specializing in crafting visually appealing and functional websites. Reach out to me to collaborate on your next web development project!
            </p>

            <div>
              <h4 className="text-white mt-5 text-[20px] font-medium">
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
