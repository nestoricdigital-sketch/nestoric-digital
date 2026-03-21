import React, { useEffect } from "react";

// import designBlog from "../images/designBlog.jpeg";
import arrow from "../images/about/goal.png";
import analysis from "../images/about/analysis.png";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import { useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Contact1 from "../darktheme/Contact1";
const About = () => {
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // const handleScrollToForm = () => {
  //   const section = document.getElementById("downform");
  //   if (!section) return;

  //   const y = section.getBoundingClientRect().top + window.scrollY;

  //   window.__smoothScrollTo?.(y);
  // };

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (!id) return;

    let rafId;

    const scrollToSection = () => {
      const section = document.getElementById("footer");
      if (!section) {
        rafId = requestAnimationFrame(scrollToSection);
        return;
      }

      window.__smoothScrollTo?.(section.offsetTop);
    };

    scrollToSection();

    return () => cancelAnimationFrame(rafId);
  }, [location]);

  // useEffect(() => {
  //   if (location.pathname === "/form" || location.hash === "#form") {
  //     handleScrollToForm();
  //   }
  // }, [location]); // runs each time route/hash changes

  const sections = [
    {
      title: "Mission",
      image: arrow,
      heading: "Creating Change That Matters",
      description:
        "Nestoric was built on the belief that brands deserve more than visibility — they deserve measurable digital growth. We partner with businesses ready to scale through strategy, creativity, and performance.",

      rightBlocks: [
        {
          title: "Strategic Execution",
          text: "We design digital systems that connect branding, marketing, and technology into one growth engine.",
        },
        {
          title: "Our Approach",
          text: "Every campaign is built around measurable outcomes, clarity, and long-term business impact.",
        },
      ],

      stats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "85%", label: "Client Retention" },
        { value: "7+", label: "Industries Served" },
      ],
    },

    {
      title: "Vision",
      image: analysis,
      heading: "Turning Ideas Into Impact",
      description:
        "We envision brands growing through intelligent digital ecosystems where creativity and technology work together to unlock meaningful market impact.",

      rightBlocks: [
        {
          title: "Future Focus",
          text: "We build strategies that help brands adapt quickly in changing digital environments.",
        },
        {
          title: "Growth Mindset",
          text: "Every execution is designed to create scalable business opportunities.",
        },
      ],

      stats: [
        { value: "10+", label: "Campaigns Running" },
        { value: "5+", label: "Markets Served" },
        { value: "100%", label: "Performance Focused" },
      ],
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="max-w-7xl lg:px-10 mx-auto ">
          <Fade delay={1e2} cascade damping={1e-1}>
            <section className="w-full text-white overflow-hidden">
              <div className="font-inter relative min-h-[600px] md:min-h-[712px] flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat pt-32 md:pt-60">
                {/* Overlay */}
                <div className="absolute inset-0 pointer-events-none"></div>

                {/* Content */}
                <div
                  className="font-inter text-zinc-50 text-center relative z-10 max-w-5xl mx-auto px-4"
                  style={{
                    textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
                  }}
                >
                  {/* LINE 1 */}
                  <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                    <span>Meet</span>

                    <div className="flex justify-center mx-2 md:mx-4">
                      <img
                        src={h_1}
                        alt="decorative circle"
                        loading="lazy"
                        className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                      />
                    </div>

                    <span className="text-[#7A4DBE] italic">
                      Nestoric Digital
                    </span>
                  </div>

                  {/* LINE 2 */}
                  <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                    <span>Real Impact</span>

                    <div className="flex justify-center mx-2 md:mx-4">
                      <img
                        src={h_2}
                        alt="decorative circle"
                        loading="lazy"
                        className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                      />
                    </div>

                    <span>Driven</span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 md:mt-20  text-base md:text-lg max-w-3xl mx-auto">
                    Crafting next-generation experiences through design,
                    technology, and purpose. At Nestoric Digital, innovation
                    isn't just a concept — it's the core of who we are.
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-6 md:mt-20 flex justify-center text-center">
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    // onClick={handleScrollToForm}
                    className="group flex items-center bg-[#7a4dbe]  text-white px-4 py-[5px] rounded-full 
                           transition-all duration-300 
                           cursor-pointer"
                  >
                    <span className="text-[18px] text-center transform transition-transform duration-300 group-hover:-translate-x-2">
                      Connect to get featured
                    </span>

                    <img
                      src={sideAr}
                      className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      alt="side arrow"
                    />
                  </button>
                  {/* <button
                  onClick={handleScrollToForm}
                  className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
          transition-all duration-300 shadow-lg shadow-slate-500/40 cursor-pointer"
                >
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                    Connect to get featured
                  </span>

                  <img
                    src={sideAr}
                    className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                    alt="side arrow"
                  />
                </button> */}
                </div>
              </div>
            </section>
          </Fade>
        </div>

        <Fade direction="up" triggerOnce cascade damping={0.2}>
          <div className="w-full space-y-24 md:space-y-32">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_right,#4c1d95_0%,#000_60%)] opacity-40"></div>

            {sections.map((item, index) => (
              <section key={index} className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-start mb-8 md:mb-12">
                  <h2
                    className="text-2xl  md:text-3xl lg:text-5xl font-light text-stone-50"
                    style={{
                      textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
                    }}
                  >
                    {item.title}
                  </h2>
                </div>

                {/* Image */}
                <div className="w-full mb-10">
                  <div className="w-full aspect-[1400/750] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                  {/* Left */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
                      {item.heading}
                    </h3>

                    <p className="text-sm md:text-lg leading-relaxed text-justify text-gray-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="space-y-8">
                    {item.rightBlocks.map((block, i) => (
                      <div key={i}>
                        <h4 className="text-xl md:text-2xl font-light mb-2">
                          {block.title}
                        </h4>

                        <p className="text-sm md:text-lg leading-relaxed text-gray-300 text-justify">
                          {block.text}
                        </p>
                      </div>
                    ))}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                      {item.stats.map((stat, i) => (
                        <div key={i}>
                          <p className="text-xs md:text-sm text-gray-400">
                            [ {stat.label} ]
                          </p>
                          <h5 className="text-2xl md:text-4xl font-bold mt-2">
                            {stat.value}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Fade>
      </div>
      <Contact1 />
    </>
  );
};

export default About;
