import React from 'react';

function HeroSection() {
    return (
        <div className='h-full flex flex-col items-center justify-center p-6'>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Hi there, I am Ali Turab</h2>

            <main className="text-animation-container mx-auto text-center">
                <p className="font-mono">
                    <span className="text-red-500">Cons</span>
                    <span className="text-yellow-500">ole</span>
                    <span className="text-blue-500">.</span>
                    <span className="text-green-500">log</span>
                    <span className="text-purple-500">{"('"}</span>
                </p>
                <section className="animation">
                    <div className="first"><div>Full Stack Developer</div></div>
                    <div className="second"><div>Front-End Developer</div></div>
                    <div className="third"><div>Back-End Developer</div></div>
                </section>
                <p className="font-mono">
                    <span className="text-purple-500">{"')"}</span>
                    <span className="text-blue-500">;</span>
                </p>
            </main>
        </div>
    );
}

export default HeroSection;
