"use client";

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  const { scrollY } = useViewportScroll();

  // Define horizontal parallax transformations
  const x1 = useTransform(scrollY, [0, 500], [0, 250]);
  const x2 = useTransform(scrollY, [0, 500], [0, -100]);
  const x3 = useTransform(scrollY, [0, 500], [0, -1000]);
  const x4 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          style={{ x: x2 }}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[90%] md:max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-sm">There <br /></span>
            I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Ali Turab </span>
            <span className="text-2xl md:text-3xl"> <br /> Full Stack Web Developer</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          style={{ x: x3 }}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[90%] md:max-w-[600px]"
        >
          I&apos;m a Full Stack Developer with experience in Website,
          and Web Application.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          style={{ x: x4 }}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[90%] md:max-w-[200px] mx-auto"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        style={{ x: x1 }}
        className="w-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={350}
          width={350}
          className="w-full max-w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
