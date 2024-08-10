"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Fetch the Lottie animation JSON data
        const fetchAnimation = async () => {
            try {
                const response = await fetch(
                    "https://lottie.host/952f2438-0ff9-4ca5-bb78-bf8ee9f88c78/uV8jTlBYz4.json"
                );
                const data = await response.json();
                setAnimationData(data);
            } catch (error) {
                console.error("Failed to load Lottie animation", error);
            }
        };

        fetchAnimation();
    }, []);

    return (
        <div
            id="contact"
            className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Contact
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        Me
                        {" "}
                    </span>
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center absolute z-[20] w-full h-auto">
                <div className="flex justify-center group cursor-pointer h-auto bg-white bg-opacity-30 py-10 text-white w-full">
                    <div className="flex items-center text-start">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center text-gray-200 space-x-2">
                                <FaPhone className="text-xl" />
                                <span className="text-lg">+92-323-2159-603</span>
                            </div>
                            <div className="flex items-center text-gray-200 space-x-2">
                                <FaEnvelope className="text-xl" />
                                <span className="text-lg">syedyawaraliturab@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center space-x-4 mt-4">
                                <a href="https://www.linkedin.com/in/ali-turab-naqvi/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-2xl text-gray-200 hover:text-cyan-500" />
                                </a>
                                <a href="https://github.com/aliturab99" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-2xl text-gray-200 hover:text-cyan-500" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-2xl text-gray-200 hover:text-cyan-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {animationData && (
                        <Lottie
                            animationData={animationData}
                            loop={true}
                            className="w-[300px] h-[300px]" // Adjust the size as needed
                        />
                    )}
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto"
                    src="/encryption.webm/"
                />
            </div>
        </div>
    );
};

export default Contact;
