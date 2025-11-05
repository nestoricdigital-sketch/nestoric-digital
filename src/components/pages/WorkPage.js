import React from "react";
import Works from "../Works";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";

const WorkPage = () => {
    const handleScrollToProjects = () => {
  const section = document.getElementById("recentworks");
  section?.scrollIntoView({ behavior: "smooth" });
};
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
          <div className="absolute inset-0 pointer-events-non"></div>

          <div className="font-inter text-center relative z-10 max-w-5xl mx-auto px-4">
            {/* LINE 1 */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-7xl font-extrabold leading-tight text-slate-800 mb-4">
              <span>Our Work</span>
              <div className="flex justify-center mx-2">
                <img
                  src={h_1}
                  alt="decorative circle"
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                />
              </div>
              <span className="text-purple-600 italic">In Action</span>
            </div>

            {/* LINE 2 */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-7xl font-extrabold leading-tight text-slate-800 mb-4">
              <span>Featured</span>
              <div className="flex justify-center mx-2">
                <img
                  src={h_2}
                  alt="decorative circle"
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                />
              </div>
              <span className="text-slate-800">Work</span>
            </div>

            {/* DESCRIPTION */}
            {/* <div className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
              <p>
                Insights, inspiration, and strategies from the creative
                frontier—exploring design development, and the tools that power
                exceptional digital experiences.
              </p>
            </div> */}
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mt-9 mx-auto">
              Insights, inspiration, and strategies from the creative
              frontier—exploring design development, and the tools that power
              exceptional digital experiences
            </p>
          </div>

          {/* BUTTON */}
          {/* <div className="mt-6 flex justify-center text-center">
            <button className=" flex bg-slate-700 text-slate-100 px-6 mt-9 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-600 transition"
             onClick={handleScrollToProjects}
>
              view projects
              <img src={sideAr} className="w-7 h-7 p-1" />
            </button>
          </div> */}
          <div className="mt-6 flex justify-center text-center">
                      <button onClick={handleScrollToProjects}
                        className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
                                   transition-all duration-300 shadow-lg shadow-slate-500/40
                                   cursor-pointer"
                      >
                        {/* Text slides left on hover */}
                        <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                          View Works 
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
      <Works />
    </>
  );
};

export default WorkPage;
