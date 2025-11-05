import React from 'react'
import sideAr from './images/sideArrow.png'
import h1 from './images/heroSectionLogo/h 1.png'
import h2 from './images/heroSectionLogo/h2.png'
import h3 from './images/heroSectionLogo/h3_3_11zon.jpg'

const HeroSection = () => {
const handleScrollToRecentWorks = () => {
  const section = document.getElementById("recentworks");
  section?.scrollIntoView({ behavior: "smooth" });
};
  return (
<section className="bg-white text-slate-800  h-screen flex items-center justify-center ">      {/* pt accounts for the fixed navbar height */}
      <div className="max-w-4xl px-4 sm:px-6 text-center justify-center w-full">
        <div className=" font-inter ">
          
          {/* LINE 1 */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center text-4xl  md:text-7xl font-extrabold leading-tight">
            <span>Effortless</span>
            <div className="flex justify-center mx-2">
              <img
                src={h1}
                alt="circle-1"
                className="  h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover bg-contain animate-float-slow"
              />
            </div>
            <span className=" text-[#7A4DBE] italic">Design</span>
          </div>

          {/* LINE 2 */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center text-4xl sm:text-1xl md:text-7xl font-extrabold leading-tight text-slate-600">
            <span>for</span>
            <div className="flex justify-center mx-2">
              <img
                src={h2}
                alt="circle-2"
                className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow "
              />
            </div>
            <span className="text-slate-800">Design</span>
            <span className="ml-2 text-slate-800">Startups</span>
          </div>

          {/* LINE 3 */}
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center text-4xl sm:text-1xl md:text-7xl font-extrabold leading-tight text-slate-600">
            <span>based</span>
            <span className="mx-2 text-slate-800">in</span>
            <div className="flex justify-center mx-2">
              <img
                src={h3}
                alt="circle-3"
                className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
              />
            </div>
            <span className="text-slate-800">Bangalore</span>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6 pt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            <p>
              We help startups launch, grow, and scale effortlessly with clean,
              conversion-focused designs — fast, smooth, and hassle-free.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center text-center">
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
                  className="w-7 h-7 p-1 mt-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  alt="side arrow"
                />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


