import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="overflow-hidden">
          <Hero />
        </div>
        <About />
        <div className="w-full">
          <Skills />
        </div>
        <Contact />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
