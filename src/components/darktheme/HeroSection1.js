import React from "react";
// import { Link } from "react-router-dom";
// import NavBar1 from "./NavBar1";
// import sideAr from "./images/sideArrow.png";
import sideAr from "../images/sideArrow.png";
import Orb from "./Orb";

const HeroSection1 = () => {
  // const handleScrollToRecentWorks = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // };
    // console.log("it is clcked");
    // const section = document.getElementById("portfolio");

    // if (!section) return;

    // section.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  };
  // const section = document.getElementById("portfolio");
  // console.log("se:", section);

  // if (!section) return;

  // const y = section.getBoundingClientRect().top + window.scrollY;

  // window.__smoothScrollTo?.(y);

  return (
    <div className="font-inter relative min-h-[600px] md:min-h-[790px] text-white overflow-hidden">
      {/* 🔥 OGL Orb Background */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <div
          className="
        relative
        w-[220vw] sm:w-[180vw] md:w-[190vw]
        h-[140vw] sm:h-[110vw] md:h-[95vw]
        scale-x-150 md:scale-x-150
        max-w-none
        -mb-[55vw] sm:-mb-[45vw] md:-mb-[60vw]
      "
        >
          <Orb
            hue={0}
            hoverIntensity={0}
            rotateOnHover
            forceHoverState={false}
          />
        </div>
      </div>

      {/* Navbar */}
      {/* <NavBar1 /> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 pt-32 md:pt-60">
        {/* Heading */}
        <h1
          className="text-3xl text-zinc-50 md:text-6xl font-light
             leading-snug md:leading-[1.3]
             max-w-3xl tracking-tight"
          style={{
            textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
          }}
        >
          We Build Brands That Grow <br />
          Faster in the
          <span
            className="mx-4 text-[#7A4DBE] font-semibold font-instrument"
            style={{
              textShadow: `
        0 0 10px rgba(255,255,255,0.2),
        0 0 20px rgba(122,77,190,0.35)
      `,
            }}
          >
            Digital World
          </span>
        </h1>

        {/* Sub Text */}
        <p className="mt-6 text-white font-semibold text-sm md:text-base  max-w-[690px]">
          Nestoric Digital helps businesses scale through high-performance
          websites, data-driven marketing, and creative digital experiences
          designed to convert visitors into customers.
        </p>

        {/* Buttons */}
        <div className="font-mada medium mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleScrollToSection("portfolio")}
            className="group flex items-center bg-[#353535] text-white px-5 py-[5px] rounded-full 
                           transition-all duration-300 
                           cursor-pointer"
          >
            <span className="text-[18px] transform transition-transform duration-300 group-hover:-translate-x-2">
              View Projects
            </span>

            <img
              src={sideAr}
              className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              alt="side arrow"
            />
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="group flex items-center bg-[#7a4dbe]  text-white px-4 py-[5px] rounded-full 
                           transition-all duration-300 
                           cursor-pointer"
          >
            <span className="text-[18px] text-center transform transition-transform duration-300 group-hover:-translate-x-2">
              Know More
            </span>

            <img
              src={sideAr}
              className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              alt="side arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;

/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[600px] bg-purple-600/30 rounded-full blur-[180px]"></div>
      </div> */

/* Bottom Arc Glow */

/* Glowing Ring */

/* <div className="absolute bottom-[-200px] right-[-200px] w-[800px] h-[800px] bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 rounded-full blur-[160px] opacity-30"></div> */

/* <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition">
            View Projects →
          </button> */

/* <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
            Know more
            <img
              src={sideAr}
              className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              alt="side arrow"
            />
          </button> */
