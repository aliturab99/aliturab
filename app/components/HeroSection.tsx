'use client'
import React from 'react';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import Slider from "react-slick";

function HeroSection() {

    const settings = {
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    return (
        <div className='w-full flex flex-col py-[12%] items-center justify-center relative'>
            <h2 className="text-xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Hi there, I am Ali Turab</h2>
            <main className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-animation-container mx-auto text-center p-4">
                <p className="font-mono">
                    <span className="text-red-500">Cons</span>
                    <span className="text-yellow-500">ole</span>
                    <span className="text-blue-500">.</span>
                    <span className="text-green-500">log</span>
                    <span className="text-purple-500">{"('"}</span>
                </p>
                    <div className='w-96'>
                        <Slider {...settings}>
                                <div className="bg-[#20a7d8]"><div>Full Stack Developer</div></div>
                                <div className="bg-[#CD921E]"><div>Front-End Developer</div></div>
                                <div className="bg-[#c10528]"><div>Back-End Developer</div></div>
                        </Slider>
                    </div>
                <p className="font-mono">
                    <span className="text-purple-500">{"')"}</span>
                    <span className="text-blue-500">;</span>
                </p>
            </main>

            <p className='lg:absolute text-center my-3 lg:m-0 bottom-0 left-0 text-sm md:text-md text-white w-96'>As a Full Stack Developer, I have expertise in JavaScript, Python, Java, and frameworks like React, Node, Express, and Django.</p>
            <div className='flex gap-2 lg:absolute text-center my-3 lg:m-0 right-0 bottom-0'>
                <TiSocialLinkedin className='text-2xl' />
                <FaXTwitter className='text-2xl' />
                <CgMail className='text-2xl' />
            </div>
        </div>
    );
}

export default HeroSection;
