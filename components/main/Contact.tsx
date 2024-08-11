"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
        <>
            <section className="text-gray-600 body-font">
                <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
                    <div className="md:w-4/12 w-full text-center md:text-start">
                        <h1 className="text-4xl text-white sm:text-4xl font-bold title-font mb-4">Contact Me</h1>
                        <div className="mb-12 w-full">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <MdEmail size={25} className="rounded-md bg-teal-400-100 text-teal-700" />
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold">
                                        Email
                                    </p>
                                    <p className="text-neutral-500 ">
                                        syedyawaraliturab@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <FaPhoneSquareAlt size={25} className="rounded-md bg-teal-400-100 text-teal-700" />
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold ">
                                        Phone Number
                                    </p>
                                    <p className="text-neutral-500 ">
                                        +92 323-215-9603
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="leading-relaxed text-xl text-gray-500 mt-8">
                            Connect with us on social media:
                        </p>
                        <div className="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
                            <a href="https://www.linkedin.com/in/ali-turab-naqvi/" className="p-2 z-[999] rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="https://x.com/yawaraliturab" className="p-2 z-[999] rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                                    <FaXTwitter size={20} />
                            </a>
                            <a href="https://github.com/aliturab99" className="p-2 z-[999] rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                                    <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-8/12 w-full mt-10 md:mt-0 md:pl-28 z-[998]">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                                <div className="text-center pb-6">
                                    <h1 className="text-3xl">Leave a message for me!</h1>
                                    <p className="text-gray-300">
                                        Fill up the form below to send me a message.
                                    </p>
                                </div>
                                <form action="" method="post" >
                                    <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 z-[999] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" name="name" />
                                    <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 z-[999] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" />
                                    <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 z-[999] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" name="_subject" />
                                    <textarea className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 z-[999] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type your message here..." name="message" style={{ height: "121px" }}></textarea>
                                    <div className="flex justify-between">
                                        <input className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 z-[999] rounded focus:outline-none focus:shadow-outline" type="submit" value="Send ➤" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
