import React from "react";
import { Spotlight } from "./Ui/Spotlight";
import { TypeAnimation } from "react-type-animation";
import Button from "./Ui/Button";
import Link from "next/link";
import Profile from "./Ui/Profile";
import { motion } from "framer-motion";
const Hero = () => {
  
  return (
    <div className="">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10  h-[80vh] w-[50vw] left-full"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="px-20 pb-20 ">
      <div className="flex flex-col xl:flex-row xl:justify-between items-center justify-between  lg:flex lg:items-center lg:justify-center lg:pt-16 lg:flex-row md:pt-48 md:flex md:flex-col md:items-center md:justify-center pt-48 pb-10 sm:pt-48 sm:flex sm:flex-col sm:items-center sm:justify-center">
        {/* Text */}
        <motion.div className="w-[300px] lg:w-[600px] md:w-[450px] sm:w-[350px] xl:w-[600px] text-center xl:text-start lg:text-start"
        initial={{opacity: 0, y:-50}}
        animate={{opacity: 1, y:0}}
        transition={{duration:1}}>
          <h3 className="h3 text-white uppercase mb-3 font-semibold">
            Hi There!
          </h3>
          <h2 className=" xl:h2 lg:h2 md:h2 sm:h2 text-[20px] text-white mb-3 font-Lora font-bold">
            I'M {""}
            <TypeAnimation
              sequence={[
                "A ABHISHEK",
                1000,
                "A FREELANCER",
                1000,
                "A FRONTEND DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-white text-[14px] xl:text-[16px] mb-5  ">
            I’m a Freelance Frontend Developer based in Chandigarh, India. I
            strives to build
            immersive and beautiful web applications through carefully crafted
            code and 
            user-centric design.
          </p>

          <div className="flex flex-col items-center xl:flex xl:items-start xl:justify-start  lg:flex lg:items-start lg:justify-start sm:flex-row gap-4 sm:items-center sm:justify-center">
            <Link href="/resume.pdf" download={true} target='_blank' rel='noopener noreferrer'>
              <Button type="submit">Downlaod CV</Button>
            </Link>
            <Link href="#Contact">
              <Button type="submit">Hire Me</Button>
            </Link>
          </div>

          
        </motion.div>
        {/* Image */}
        <motion.div className="xl:w-[400px] lg:w-[400px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
          <Profile/>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
