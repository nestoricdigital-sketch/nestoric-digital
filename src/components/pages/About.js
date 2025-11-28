import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
// import designBlog from "../images/designBlog.jpeg";
import arrow from "../images/about/goal.png";
import analysis from "../images/about/analysis.png";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import { useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const About = () => {
  const location = useLocation();
  // handleScrollToForm
  const handleScrollToForm = () => {
    const section = document.getElementById("form");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (location.pathname === "/form" || location.hash === "#form") {
      handleScrollToForm();
    }
  }, [location]); // runs each time route/hash changes
  return (
    <div>
      <Fade delay={1e2} cascade damping={1e-1}>
        <section className="w-full text-gray-800">
          {/* === HERO SECTION === */}
          <div
            className="relative   min-h-[600px] md:min-h-[712px] flex flex-col items-center justify-center text-center md:py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage: `url(${heroBg})`,
            // }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="font-inter text-center relative z-10 max-w-5xl mx-auto px-4">
              {/* LINE 1 */}
              <div className="flex md:h-[62px] md:mb-[20px]  flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-5xl font-semibold leading-tight text-slate-800 mb-4">
                <span>Meet</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_1}
                    alt="decorative circle"
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <span className="text-purple-600 italic">Nestoric Digital</span>
              </div>

              {/* LINE 2 */}
              <div className="flex md:h-[62px]  md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-5xl font-semibold leading-tight text-slate-800 mb-6">
                <span className=" text-[#666666]">Real Impact</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_2}
                    alt="decorative circle"
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <span className="text-slate-800">Driven</span>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6  md:mt-20  text-base sm:text-lg md:text-xl text-[#666666] max-w-4xl mx-auto px-2">
                <p>
                  Crafting next-generation experiences through design,
                  technology, and purpose. At Nestoric Digital, innovation isn't
                  just a concept — it's the core of who we are.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            {/* <div className="mt-6 flex justify-center text-center">
            <button className=" flex bg-slate-700 text-slate-100 px-6 mt-9 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-600 transition">
              View Projects
              <img src={sideAr} className="w-7 h-7 p-1" />
            </button>
          </div> */}

            <div className=" mt-6 md:mt-20 flex justify-center text-center h-[48px]">
              <button
                onClick={handleScrollToForm}
                className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
                         transition-all duration-300 shadow-lg shadow-slate-500/40
                         cursor-pointer"
              >
                {/* Text slides left on hover */}
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                  Connect to get fetured
                </span>

                {/* Arrow slides right on hover */}
                <img
                  src={sideAr}
                  className="w-7 h-7 p-1 mt-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  alt="side arrow"
                />
              </button>
            </div>
          </div>
        </section>
      </Fade>

      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <section className="relative mt-28 md:mt-28 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Mission
          </h2>
        </section>
        <section className="relative  mb-9 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          {/* <h2
          className=" absolute bottom-[84%] sm:bottom-[80%] lg:bottom-[90%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-0
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10"
        >
          Mission
        </h2> */}

          {/* Left: Image */}
          <div className="   md:w-1/2 flex justify-center items-center z-10">
            <div className="w-full mx-2 max-w-[650px] aspect-[650/500]">
              <img
                src={arrow}
                alt="Mission"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 md:p-10 p-2 z-10 flex flex-col justify-center text-gray-800">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Creating Change That Matters
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              To be a globally recognized digital marketing and branding leader,
              known for blending creativity, technology, and data-driven
              strategies to inspire meaningful engagement with people.
            </p>
          </div>
        </section>

        <section className="relative mt-28 md:mt-60 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Vission
          </h2>
        </section>
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-center w-full">
          {/* Background text */}

          {/* Right: Content */}
          <div className="w-full md:w-1/2 md:p-10 p-2 z-10 flex flex-col justify-center text-gray-800">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              {" "}
              Turning Ideas into Impact
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              To be a globally recognized digital marketing and branding leader,
              known for blending creativity, technology, and data-driven
              strategies to inspire meaningful engagement with people.
            </p>
          </div>

          {/* Left: Image */}
          <div className=" md:w-1/2  flex justify-center items-center z-10">
            <div className="w-full mx-2 max-w-[650px] aspect-[650/500] ">
              <img
                src={analysis}
                alt="vision"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>
      </Fade>
      <ContactForm />
    </div>
  );
};

export default About;
