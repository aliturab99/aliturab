"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';

const About = () => {
  const { scrollY } = useScroll();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie animation JSON data
    const fetchAnimation = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/7d10fb81-dd1b-41ca-9f5b-30996a4ae7cf/kljVTaMvpf.json"
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation", error);
      }
    };

    fetchAnimation();
  }, []);

  // Define the scroll-based transformations
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY = useTransform(scrollY, [0, 300], [20, 0]);

  return (
    <section
      id="about"
      className="relative w-full h-auto flex flex-col items-center justify-center pt-20 px-5 bg-gray-900 text-white animate-jump-in animate-once animate-ease-in-out"
    >
      <motion.div
        style={{ opacity, translateY }}
        className="flex justify-center text-center"
      >
        <div className='w-1/2'>
          <motion.div
            style={{ opacity }}
            className='text-4xl font-bold text-center mb-6'
          >
            Who I Am?
          </motion.div>
          <motion.div
            style={{ opacity }}
            className='text-2xl text-gray-300 mb-8 text-center'
          >
            Problem Solver, Good Team Mate, and Self Learner
          </motion.div>
          <p className="text-lg">
            Hi, I&apos;m Ali Turab, a passionate Full Stack Developer with a strong background in both frontend and backend technologies. With experience in various frameworks and tools, I strive to create innovative and efficient solutions for web applications. I&apos;m passionate about creating cutting-edge, pixel-perfect interfaces and delivering beautifully designed, intuitive user experiences. I am equally dedicated to developing optimized, high-performance backends that ensure robust and fast operations.
          </p>
        </div>
        <div className='w-1/2 h-auto flex items-center justify-center'>
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              className="" // Adjust the size and margin as needed
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
