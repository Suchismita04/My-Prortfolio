"use client";

import Image from "next/image";
import heroData from "@/data/hero.json";

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center md:justify-between items-center
        bg-gradient-to-br from-white to-slate-100
        px-[clamp(1.25rem,8%,7.5rem)] pt-32 pb-16 gap-10"
    >
      {/* Text */}
      <div className="max-w-full md:max-w-[55%] text-center md:text-left">
        <h1 className="text-[40px] font-bold mb-3 leading-tight">
          Hi, I&apos;m {heroData.name}
        </h1>

        {/* Typing animation */}
        <div
          className="text-[clamp(1.2rem,3vw,2rem)] font-semibold text-indigo-600
            border-r-[3px] border-indigo-600 whitespace-nowrap overflow-hidden w-0
            animate-typing mx-auto md:mx-0 mb-5"
        >
          {heroData.title}
        </div>

        <p className="text-gray-500 text-[1.05rem] mb-7 max-w-[480px] mx-auto md:mx-0">
          {heroData.description}
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="px-7 py-3 bg-indigo-600 text-white font-semibold rounded-lg
              shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)]
              hover:-translate-y-0.5 transition-all duration-300 text-[0.95rem]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="px-7 py-3 bg-transparent text-indigo-600 font-semibold rounded-lg
              border-2 border-indigo-600 hover:bg-indigo-50
              hover:-translate-y-0.5 transition-all duration-300 text-[0.95rem]"
          >
            Let&apos;s Talk
          </a>
           
        </div>
      </div>

      {/* Image */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: "clamp(220px, 30vw, 320px)",
          height: "clamp(220px, 30vw, 320px)",
        }}
      >
        <Image
          src={heroData.image}
          alt={`${heroData.name} profile photo`}
          fill
          className="object-cover border-8 border-white shadow-xl animate-morph"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
      </div>
    </section>
  );
}
