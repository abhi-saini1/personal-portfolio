"use client";
import React, { useEffect, useRef, useState } from "react";
import LetterPullup from "./Ui/LetterAnimation/LetterPullUp";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { BiLink } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import SliderBtn from "./Ui/SliderBtn/SliderBtn";
import type { Swiper as SwiperType } from "swiper";

const Projects: React.FC = () => {
  const [project, setProject] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(currentIndex);
  };

  return (
    <div className="px-20 pt-10 pb-10">
      <div className="text-7xl flex  font-Lora items-center justify-center pb-5 text-[#46f5d5]">
        <LetterPullup words="Projects" delay={0.7} />
      </div>
      <div className="gs_reveal reveal_left flex flex-col xl:flex-row xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-center lg:flex-row md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center items-center justify-center mb-10 pt-10 pb-20">
        <div className="xl:w-[500px] xl:text-start lg:text-start text-center">
          <h2 className="xl:text-5xl font-JetBrains font-Lora text-white mb-3 text-3xl">
            01
          </h2>
          <h1 className="xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-white font-JetBrains font-semibold pb-3 ">
            E-commerce
          </h1>

          <div
            className="xl:flex pt-2 xl:justify-start lg:justify-start flex items-center justify-center  gap-2 pb-3
          "
          >
            <Image
              src="/react.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/nextjs.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/mongodb.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/stripe.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/tailwind.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
          </div>

          <div className="flex gap-2 xl:items-start xl:justify-start lg:items-start lg:justify-start items-center justify-center">
            <Link
              href="https://github.com/abhi-saini1/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <GrGithub className="text-2xl text-white" />
              </div>
            </Link>

            <Link
              href="https://e-commerce-psi-khaki.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <BiLink className="text-2xl text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:w-[500px] lg:w-[500px] md:w-[400px] sm:w-[400px] w-full sm:pt-8 pt-8 xl:flex xl:items-start xl:justify-start lg:flex lg:items-start lg:justify-start md:flex md:items-center md:justify-center sm:flex sm:items-center sm:justify-center flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[500px] xl:w-[500px]  rounded-lg"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Image
                src="/projects/e1.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 1 - Image 1"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[250px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e2.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 1 - Image 2"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e3.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 1 - Image 3"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e4.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 1 - Image 4"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e5.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 1 - Image 5"
                className="xl:w-xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>

            {/* slider btn */}
            <div>
              <SliderBtn
                containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-20 z-20 w-full  justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent bg-white hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </div>
          </Swiper>
        </div>
      </div>

      {/* project 2 */}
      <div className=" gs_reveal reveal_right flex flex-col xl:flex-row xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-center lg:flex-row md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center items-center justify-center lg:gap-5 mb-10">
        <div className="xl:w-[500px] xl:text-start lg:text-start xl:order-2 lg:order-2 text-center">
          <h2 className="xl:text-5xl font-JetBrains font-Lora text-white mb-3 text-3xl">
            02
          </h2>
          <h1 className="xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-white font-JetBrains font-semibold pb-3 ">
            Todo
          </h1>

          <div className="xl:flex xl:justify-start lg:justify-start flex items-center justify-center  gap-2 pb-3">
            <Image
              src="/react.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/nextjs.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/mongodb.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/tailwind.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
          </div>

          <div className="flex gap-2 xl:items-start xl:justify-start lg:items-start lg:justify-start items-center justify-center">
            <Link
              href="https://github.com/abhi-saini1/Todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <GrGithub className="text-2xl text-white" />
              </div>
            </Link>

            <Link
              href="https://todo-six-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <BiLink className="text-2xl text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:w-[500px] lg:w-[500px] md:w-[400px] sm:w-[400px] w-full sm:pt-8 pt-8 xl:flex xl:items-start xl:justify-start lg:flex lg:items-start lg:justify-start md:flex md:items-center md:justify-center sm:flex sm:items-center sm:justify-center flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[500px] rounded-lg"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Image
                src="/projects/todo1.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 2 - Image 1"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/todo2.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 2 - Image 2"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/todo3.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 2 - Image 3"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>

            {/* slider btn */}
            <div>
              <SliderBtn
                containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-20 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent bg-white hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </div>
          </Swiper>
        </div>
      </div>

      {/* project 3 */}
      <div className=" gs_reveal reveal_left flex flex-col xl:flex-row xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-center lg:flex-row md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center items-center justify-center">
        <div className="xl:w-[500px] xl:text-start  lg:text-start text-center">
          <h2 className="xl:text-5xl font-JetBrains font-Lora text-white pb text-3xl">
            03
          </h2>
          <h1 className="xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-white font-JetBrains font-semibold pb-3 ">
            Dashboard
          </h1>
          <div className="xl:flex xl:justify-start lg:justify-start flex items-center justify-center  gap-2 pb-3">
            <Image
              src="/react.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/nextjs.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/mongodb.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/stripe.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
            <Image
              src="/tailwind.png"
              alt=""
              className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] md:h-[45px] md:w-[45px] sm:h-[45px] sm:w-[45px]"
              width={300}
              height={300}
            />
          </div>
          <div className="flex gap-2 xl:items-start xl:justify-start lg:items-start lg:justify-start items-center justify-center">
            <Link href="/">
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <GrGithub className="text-2xl text-white" />
              </div>
            </Link>

            <Link href="/">
              <div className="xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] h-[32px] w-[32px] bg-transparent rounded-full border border-white flex items-center justify-center">
                <BiLink className="text-2xl text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="xl:w-[500px] lg:w-[500px] md:w-[400px] sm:w-[400px] w-full sm:pt-8 pt-8 xl:flex xl:items-start xl:justify-start lg:flex lg:items-start lg:justify-start md:flex md:items-center md:justify-center sm:flex sm:items-center sm:justify-center flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[500px] rounded-lg"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Image
                src="/projects/e1.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 3 - Image 1"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e2.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 3 - Image 2"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e3.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 3 - Image 3"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e4.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 3 - Image 4"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/projects/e5.png"
                quality={100}
                width={500}
                height={360}
                alt="Project 3 - Image 5"
                className="xl:w-[500px] xl:h-[360px] lg:w-[500px] lg:h-[360px] w-full h-[300px]"
              />
            </SwiperSlide>

            {/* slider btn */}
            <div>
              <SliderBtn
                containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] xl:bottom-20 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent bg-white hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
