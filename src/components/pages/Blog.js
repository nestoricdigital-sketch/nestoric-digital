import React from "react";
import blogDesign from "../images/designBlog.jpeg";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import blog2 from "../images/blog2.jpg";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <section className="w-full text-gray-800">
        {/* === HERO SECTION === */}
        <div
          className="font-inter  h-screen relative flex flex-col items-center justify-center text-center  px-6 md:px-12 bg-cover bg-center bg-no-repeat"
          // style={{
          //   backgroundImage: `url(${heroBg})`,
          // }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 pointer-events-none"></div>

          <div className="font-inter relative z-10 max-w-5xl mx-auto">
            <div className="font-inter flex flex-wrap md:flex-nowrap justify-center items-center text-4xl max-w-5xl md:text-7xl font-extrabold leading-tight mb-4">
              <span>Our Blog</span>
              <div className="flex justify-center mx-2">
                <img
                  src={h_1}
                  alt="circle-1"
                  className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover  animate-float-slow"
                />
              </div>
              <span className="text-purple-600 italic">Insights</span>
            </div>
            <div className="font-inter flex flex-row text-slate-800 text-3xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-slate-400">Behind the</span>

              <img
                src={h_2}
                alt="circle-3"
                className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
              />
              <span className="text-slate-800">Builts</span>
            </div>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Insights, inspiration, and strategies from the creative
              frontier—exploring design development, and the tools that power
              exceptional digital experiences
            </p>
          </div>
          {/* BUTTON */}
          <div className="mt-6 flex justify-center text-center">
            <Link to="/services">
              <button
                className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
                          transition-all duration-300 shadow-lg shadow-slate-500/40
                          cursor-pointer"
              >
                {/* Text slides left on hover */}
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                  View Services
                </span>

                {/* Arrow slides right on hover */}
                <img
                  src={sideAr}
                  className="w-7 h-7 p-1 mt-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  alt="side arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* bg blog insights */}
      <section className="relative mt-32 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Background text */}
        {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
        {/* <p
    
        >
          (Why clients love Nestoric Digital)
        </p> */}
        <h2
          className=" absolute bottom-[90%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
        >
          Blog Insights
        </h2>
      </section>

      <section className="w-full  m-1 pb-9">
        {/* === BLOG HERO IMAGE === */}
        <div
          className="relative w-full "
          // style={{
          //   backgroundImage: `url(${blogHero})`,
          // }}
        >
          {/* Overlay */}
          <img
            src={blogDesign}
            className="w-full  h-auto rounded-[15px] "
            alt="this is blog about design & developement"
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center   my-6">
            <h1 className="text-slate-800 text-2xl md:text-3xl text-start font-extrabold">
              Design & Development
            </h1>
            <p className="text-slate-700 text-left mt-4 ">
              Designs and developments aren’t separate silos — they’re two sides
              of the same creative process. When these teams collaborate from
              the start, magic happens: visuals that are not just beautiful but
              built to perform. This blogs dives into how we approach projects
              with shared in language, mutual respect, and early alignment. We
              talk systems, spacing, dev-ready Figma files, and the power of
              thinking in components. We’ll also touch on how structured
              workflows reduce revisions, eliminate disconnect, and speed up the
              delivery. Because when design and dev constraints — and dev
              understands design intent — everyone wins.
            </p>

            {/* Buttons */}
            <div className="mt-8 mb-8 flex flex-col sm:flex-row items-center justify-start gap-4">
              <button className="px-6 py-2 m-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition">
                Website Design
              </button>
              <button className="px-6 py-2 m-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition">
                Development
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full m-1 pb-9 ">
        {/* === BLOG HERO IMAGE === */}
        <div
          className="relative w-full "
          // style={{
          //   backgroundImage: `url(${blogHero})`,
          // }}
        >
          {/* Overlay */}
          <img
            src={blog2}
            className="w-full  h-auto object-cover rounded-[15px]"
            alt="this is blog post "
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center my-6 ">
            <h1 className="text-slate-800 text-2xl md:text-3xl text-start font-extrabold m-1">
              Social Media Marketing
            </h1>
            <p className="text-slate-700 text-left ">
              Designs and developments aren’t separate silos — they’re two sides
              of the same creative process. When these teams collaborate from
              the start, magic happens: visuals that are not just beautiful but
              built to perform. This blogs dives into how we approach projects
              with shared in language, mutual respect, and early alignment. We
              talk systems, spacing, dev-ready Figma files, and the power of
              thinking in components. We’ll also touch on how structured
              workflows reduce revisions, eliminate disconnect, and speed up the
              delivery. Because when design and dev constraints — and dev
              understands design intent — everyone wins.
            </p>

            {/* Buttons */}
            <div className="mt-8 mb-8 flex flex-col sm:flex-row items-center justify-start gap-4">
              <button className="px-6 py-2 m-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition">
                Website Design
              </button>
              <button className="px-6 py-2 m-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition">
                Development
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
