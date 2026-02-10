import React, { useState, useRef, useEffect } from "react";
import sideAr from "./images/sideArrow.png";
import h1 from "./images/heroSectionLogo/h 1.png";
import h2 from "./images/heroSectionLogo/h2.png";
import h3 from "./images/heroSectionLogo/h3_3_11zon.jpg";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import logoScroll from "./assets/logosScroll.json";
// import digi from "./assets/digichain_logo.webp";
import carzen from "./assets/carzenLogo.webp";
import vasura from "./assets/vasuraLogo.webp";
// import vh from "./assets/vhtLogo.webp";
import mg from "./assets/mgLogo.webp";
import surya from "./assets/suryacityLogo.webp";
// import digi from "./assets/digiLogo.webp";
import digi from "./assets/digi_t2Logo.png";
// import simplus from "./assets/simplusLogo.webp";
// import simplus from "./assets/simplus_tLogo.webp";
import simplus from "./assets/simplus_t3Logo.webp";
import vht from "./assets/vhs_tLogo.webp";
// import gp from "./assets/gproperties.webp";
import gp from "./assets/new_gp.webp";

const logos = [vht, carzen, vasura, mg, surya, digi, simplus, gp];

const HeroSection = () => {
  const containerRef = useRef(null);
  // eslint-disable-next-line
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);
  const handleScrollToRecentWorks = () => {
    const section = document.getElementById("recentworks");
    // section?.scrollIntoView({ behavior: "smooth" });

    // const section = document.getElementById("services-section");
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY;

    window.__smoothScrollTo?.(y);
  };

  // const lottieRef = useRef();

  // useEffect(() => {
  //   if (lottieRef.current) {
  //     // Slow down animation
  //     lottieRef.current.setSpeed(0.4); // try 0.2 / 0.15 / 0.1
  //   }
  // }, []);
  return (
    <>
      <section className="bg-white text-slate-800   min-h-[600px] md:min-h-[712px]  flex items-center justify-center ">
        {" "}
        {/* pt accounts for the fixed navbar height */}
        <div className="max-w-4xl  px-2  text-center justify-center w-full">
          <div className=" font-inter ">
            <Fade delay={1e2} cascade damping={1e-1}>
              {/* LINE 1 */}
              <div className="mt-10 md:mt-20 flex md:h-[62px] mb-4 md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-4xl  md:text-5xl font-semibold leading-tight">
                <span>Effortless</span>
                <div className="flex justify-center mx-2 md:mx-4 ">
                  <img
                    src={h1}
                    alt="circle-1"
                    // className="  h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover bg-contain animate-float-slow"
                    className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                  />
                </div>
                <span className=" text-[#7A4DBE]">Design</span>
              </div>

              {/* LINE 2 */}
              <div className="flex md:h-[62px]  mb-4 md:mb-[20px]  flex-wrap md:flex-nowrap justify-center items-center text-4xl sm:text-1xl md:text-5xl font-semibold leading-tight text-[#666666]">
                <span>for</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h2}
                    alt="circle-2"
                    className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"

                    // className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow "
                  />
                </div>
                <span className="text-slate-800">Digital</span>
                <span className="ml-2 text-slate-800 mx-2 md:mx-4">
                  {/* Startups */}
                  Aspirants
                </span>
              </div>

              {/* LINE 3 */}
              <div className="flex md:h-[62px] flex-wrap md:flex-nowrap justify-center items-center text-4xl sm:text-1xl md:text-5xl font-semibold leading-tight text-[#666666]">
                <span className="mx-2 md:mx-4">Companies</span>
                <span className=" text-slate-800">in</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h3}
                    alt="circle-3"
                    className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"

                    // className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <span className="text-slate-800">
                  {/* Bangalore */}
                  India
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 md:mt-12 pt-4 text-base sm:text-lg md:text-[18px] text-[#666666] max-w-3xl mx-auto px-2">
                <p>
                  {/* We help startups launch, grow, and scale effortlessly with clean,
              conversion-focused designs — fast, smooth, and hassle-free. */}
                  We empower startups to launch, grow, and scale with ease —
                  delivering clean conversion-driven designs that are fast,
                  seamless, and stress-free.
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-6 md:mt-20 flex justify-center text-center h-[48px]">
                {/* <button className=" flex bg-slate-700 text-slate-100 px-6 mt-9 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-600 transition">
              view projects

            <img src={sideAr} className="w-7 h-7 p-1" />
            </button> */}
                <button
                  onClick={handleScrollToRecentWorks}
                  className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
                           transition-all duration-300 shadow-lg shadow-slate-500/40
                           cursor-pointer"
                >
                  {/* Text slides left on hover */}
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                    View Projects
                  </span>

                  {/* Arrow slides right on hover */}
                  <img
                    src={sideAr}
                    className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                    alt="side arrow"
                  />
                </button>
              </div>
              {/* logos scrolling */}
              <div
                className="logo-scale provide md:-mx-20 relative flex flex-col items-center justify-start
               content-center  md:min-h-[118px] min-h-10 md:mt-[60px] mt-[40px]  bg-white"
              >
                {/* LEFT EDGE BLUR (touches screen) */}
                <div
                  className="pointer-events-none fixed top-auto left-0 h-[118px] w-20 md:w-40 z-20
    bg-gradient-to-r from-white via-white/100   opacity-100 "
                />

                {/* RIGHT EDGE BLUR (touches screen) */}
                <div
                  className="pointer-events-none fixed top-auto right-0 h-[118px] w-20 md:w-40 z-20
    bg-gradient-to-l from-white via-white/100 opacity-100 "
                />
                <div
                  className="mt-2 md:mt-0 absolute  md:scale-100 text-center  left-1/2 -translate-x-1/2 
      
        w-[101vw]
          "
                  // style={{ transform: "scale(2, 2)" }}
                >
                  {/* new logos scrolling */}

                  <LogoMarquee logos={logos} />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
function LogoMarquee({ logos }) {
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(20);
  // eslint-disable-next-line
  const [key, setKey] = useState(0); // force re-animation

  const calculate = () => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    setWidth(trackWidth);

    const screenWidth = window.innerWidth;

    let speed; // pixels per second

    if (screenWidth < 640) {
      speed = 28; // mobile (slow)
    } else if (screenWidth < 1024) {
      speed = 45; // tablet
    } else {
      speed = 70; // desktop (your good speed)
    }

    setDuration(trackWidth / speed);
    setKey((prev) => prev + 1); // restart animation cleanly
  };

  useEffect(() => {
    calculate();

    window.addEventListener("resize", calculate);
    window.addEventListener("orientationchange", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      window.removeEventListener("orientationchange", calculate);
    };
  }, []);

  return (
    <motion.div
      className="flex gap-6 sm:gap-10 md:gap-12 will-change-transform"
      animate={{ x: [0, -width] }}
      transition={{
        ease: "linear",
        duration,
        repeat: Infinity,
      }}
    >
      <div ref={trackRef} className="flex gap-6 md:gap-28">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              min-w-[80px]  md:min-w-[260px] 
            "
          >
            <img
              src={logo}
              alt="logo"
              className="
                h-9  md:h-14
               object-contain
             
               
                
              "
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
