"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();

  // Define the scroll-based transformations
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY = useTransform(scrollY, [0, 300], [20, 0]);

  return (
    <section
      id="about"
      className="relative w-full h-auto flex flex-col items-center justify-center py-20 px-5 bg-gray-900 text-white"
    >
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
      <motion.div
        style={{ opacity, y: translateY }}
        className="flex flex-col items-center text-center"
      >
        <p className="text-lg mb-6">
          Hi, I&apos;m Ali Turab, a passionate Full Stack Developer with a strong background in both frontend and backend technologies. With experience in various frameworks and tools, I strive to create innovative and efficient solutions for web applications. I&apos;m passionate about creating cutting-edge, pixel-perfect interfaces and delivering beautifully designed, intuitive user experiences. I am equally dedicated to developing optimized, high-performance backends that ensure robust and fast operations.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
