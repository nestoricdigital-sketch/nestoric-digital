import React from "react";
import blogDesign from "../images/designBlog.jpeg";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import blog2 from "../images/blog2.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Blog = () => {
  const blogPosts = [
    {
      image: blogDesign,
      title: "Design & Development",
      description:
        "Designs and developments aren’t separate silos they’re two sides of the same creative process. When these teams collaborate from the start, magic happens: visuals that are not just beautiful but built to perform. This blogs dives into how we approach projects with shared in language, mutual respect, and early alignment. We talk systems, spacing, dev-ready Figma files, and the power of thinking in components. We’ll also touch on how structured workflows reduce revisions, eliminate disconnect, and speed up the delivery. Because when design and dev constraints  and dev understands design intent  everyone wins.",
      tags: ["UI/UX", "Branding", "Development"],
    },
    {
      image: blog2,
      title: "Social Media Marketing",
      description:
        "Designs and developments aren’t separate silos  they’re two sides of the same creative process. When these teams collaborate from the start, magic happens: visuals that are not just beautiful but built to perform. This blogs dives into how we approach projects with shared in language, mutual respect, and early alignment. We talk systems, spacing, dev-ready Figma files, and the power of thinking in components. We’ll also touch on how structured workflows reduce revisions, eliminate disconnect, and speed up the delivery. Because when design and dev constraints  and dev understands design intent  everyone wins.",
      tags: ["Campaign", "Advertising", "Reach"],
    },
  ];

  return (
    <>
      <Fade delay={1e2} cascade damping={1e-1}>
        <section className="w-full text-gray-800">
          {/* === HERO SECTION === */}
          <div
            className="font-inter  min-h-[600px] md:min-h-[712px] relative flex flex-col items-center justify-center text-center  px-6 md:px-12 bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage: `url(${heroBg})`,
            // }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="font-inter relative z-10 max-w-5xl mx-auto">
              <div className="font-inter md:h-[62px] md:mb-[20px]  flex flex-wrap md:flex-nowrap justify-center items-center text-4xl max-w-5xl md:text-5xl font-semibold leading-tight mb-4">
                <span>Our Blog</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_1}
                    alt="circle-1"
                    className="w-10 h-10 sm:w-7 sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover  animate-float-slow"
                  />
                </div>
                <span className="text-purple-600 italic">Insights</span>
              </div>
              <div className=" font-inter md:h-[62px] md:mb-[20px]  flex flex-wrap flex-row  md:flex-nowrap justify-center text-slate-800 text-4xl md:text-5xl font-semibold leading-tight mb-6">
                <div className="text-[#666666] ">Behind the</div>
                {/* <span className="text-[#666666] "> the</span> */}
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_2}
                    alt="circle-3"
                    className="w-10 h-10 sm:w-7  sm:h-5 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <div className="text-slate-800">Builts</div>
              </div>

              <p className="mt-6 md:mt-20 text-[#666666] text-base md:text-lg max-w-2xl mx-auto">
                Insights, inspiration, and strategies from the creative
                frontier—exploring design development, and the tools that power
                exceptional digital experiences
              </p>
            </div>
            {/* BUTTON */}
            <div className="mt-6  md:mt-20 flex justify-center text-center">
              <Link to="/services">
                <button
                  className="h-[48px] group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
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
                    className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                    alt="side arrow"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Fade>
      {/* bg blog insights */}
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <section className="relative mt-28 md:mt-28 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          {/* <p
    
        >
          (Why clients love Nestoric Digital)
        </p> */}
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Blog Insights
          </h2>
        </section>
        {blogPosts.map((blog, index) => (
          <section key={index} className="mx-2 md:mx-4 pb-9">
            <div className="relative w-full">
              <img
                src={blog.image}
                className="w-full h-auto object-cover rounded-[15px]"
                alt="this is blog post"
              />

              <div className="relative z-10 text-center my-6">
                <h1 className="text-slate-800 text-[20px] md:text-5xl text-start font-semibold">
                  {blog.title}
                </h1>

                <p className="text-justify text-slate-700 text-[14px] md:text-[18px] mt-4">
                  {blog.description}
                </p>

                {/* Buttons */}
                {/* <div className="mt-8 mb-8 flex flex-row items-center justify-center lg:justify-start flex-wrap gap-4 md:gap-[48px]">
                  {blog.tags.map((tag, i) => (
                    <button
                      key={i}
                      className="px-6 py-2 bg-[#353535] shadow-lg shadow-slate-500/40 text-white rounded-full text-sm font-medium transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div> */}
                <div className="flex justify-center   content-center mt-4 md:mt-[86px] md:mb-[86px] px-4 md:px-0">
                  <div className="flex flex-wrap md:w-[60%]  justify-center content-center text-center gap-3 md:gap-8 min-w-0 md:min-w-48 mx-0 md:mx-36">
                    {blog.tags.map((btn, i) => (
                      <button
                        key={i}
                        className="px-4 sm:px-6 py-2 bg-[#353535] shadow-lg shadow-slate-500/40 text-white rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Fade>
    </>
  );
};

export default Blog;
