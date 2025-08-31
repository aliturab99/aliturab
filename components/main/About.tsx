"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";


const About = () => {
  return (
  <section className="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-10 gap-10 md:gap-20">
      {/* Left: Artistic Profile Image with Abstract Background */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="relative w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
          {/* Abstract brush-stroke background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 via-purple-200 to-pink-100 blur-2xl scale-110 z-0"></div>
          <img
            src="/p2.png"
            alt="Profile"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-white z-10"
          />
        </div>
      </div>
      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Turning Vision Into Reality With Code And Design.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 mb-6 font-medium"
        >
          Hi, I&apos;m Ali Turab, a Full Stack Developer skilled in React, Next.js, and Django. I build scalable web apps, craft beautiful user experiences, and deliver robust backend solutions. Let&apos;s create something amazing together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mt-2 w-full md:w-auto justify-center md:justify-start"
        >
          <a
            href="/SyedYawarAliTurab.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-gray-900 text-white font-bold shadow hover:bg-gray-800 flex items-center gap-2 text-base md:text-lg transition-all duration-200"
          >
            Resume <FiExternalLink size={20} />
          </a>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 text-base md:text-lg transition-all duration-200"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
