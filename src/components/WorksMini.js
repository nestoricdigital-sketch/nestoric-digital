import React, { useRef, useEffect, useState, useCallback } from "react";
//import bgImg from "/images/lead-gen-bg.jpg"; // background image
// import w1 from "./images/works/work 1.png";
// import w2 from "./images/works/work 2.png";
// import w3 from "./images/works/work 3.png";
// import bgw1 from "./images/works/workBgLeadGen.jpg";
// import bgw2 from "./images/works/workBgSocial.jpg";
// import bgw3 from "./images/works/workBgWebDev.jpg";
// import carbr from "./images/works/carbr.png";
// import car from "./images/works/car.png";
// import vasurabg from "./images/works/vasurabg.png";
// import vasura from "./images/works/vasura.png";
import { Fade } from "react-awesome-reveal";
import testimonArrow from "./images/icons/testimoonArrow.png";
// new images
import vasura from "./images/worksRecent/vasura.jpg";
import carzen from "./images/worksRecent/cazen_web.jpg";
import vhTech from "./images/worksRecent/vhTech.jpg";
import wawa from "./images/worksRecent/wawa_web.jpg";

import surya from "./images/worksRecent/surya.jpg";
import magnum from "./images/worksRecent/magnum.jpg";
import nandi from "./images/worksRecent/nandi.jpg";

import bg1 from "./images/worksRecent/bg1.jpg";
import bg2 from "./images/worksRecent/bg2.jpg";

const serviceCategories = [
  {
    category: "Website Development",
    bg: bg1,

    projects: [
      {
        image: vasura,
        name: "Vasura Virtual Experience",
        alt: "Website Dev 1",
        web: "https://www.vasuravirtual.com/",
        services: ["Branding", "Designing", "Development"],
        description:
          "A 360° virtual experience platform designed to showcase spaces and projects through immersive, interactive digital tours.",
      },
      {
        image: carzen,
        name: "Carzen Logistics",
        web: "",
        services: ["Branding", "Designing", "Development"],
        alt: "Website Dev 2",
        description:
          "We’ve helped businesses across industries achieve their goals. Here are some of our selected works.",
      },
      {
        image: wawa,
        name: "WAWA ",
        web: "",
        services: ["Branding", "Designing", "Development"],
        alt: "Website Dev 3",
        description:
          "A seamless digital platform for car bookings, family tours, and one-day or multi-day travel packages.",
      },
      {
        image: vhTech,
        name: "VHTech Sphere",
        alt: "Website Dev 3",
        web: "",
        services: ["Branding", "Designing", "Development"],
        description:
          "An IT services platform providing laptops, desktops, and server solutions for mid-level enterprises.",
      },
    ],
  },
  {
    category: "Lead Generation",
    bg: bg2,

    // services: ["Designing", "Development", "Advertising"],
    projects: [
      {
        image: surya,
        name: "Surya City",
        web: "",
        services: ["Lead Generation"],
        alt: "Lead Gen 1",
        description:
          "Targeted lead generation campaigns delivering high-intent enquiries through Google and Meta ads.",
      },
      {
        image: nandi,
        name: "Nandi Urban City",
        web: "",
        services: ["Lead Generation"],
        alt: "Lead Gen 3",

        description:
          "A structured lead funnel delivering qualified prospects and steady enquiries for real estate sales teams.",
      },
      {
        image: magnum,
        name: "Magnum Opus",
        web: "",
        services: ["Lead Generation"],
        alt: "Lead Gen 2",
        description:
          "ROI-driven performance campaigns delivering cost-efficient, high-quality enquiries.",
      },

      // {
      //   image: w3,
      //    name: "Magnum Op",
      //   alt: "Lead Gen 4",
      //   description: "Scalable growth funnels.",
      // },
    ],
  },
];

export default function WorksMini() {
  // const scrollRef = useRef(null);
  // const indexRef = useRef(0);

  // -----------
  const [categoryIndex, setCategoryIndex] = useState(0);
  const projectIndexRef = useRef(0);
  const projectScrollRef = useRef(null);
  const scrollProject = (index, instant = false) => {
    if (!projectScrollRef.current) return;

    const width = projectScrollRef.current.clientWidth;

    projectScrollRef.current.scrollTo({
      left: width * index,
      behavior: instant ? "auto" : "smooth",
    });
  };

  // const scrollRef = useRef(null);
  // const scrollToProject = (index, instant = false) => {
  //   const width = scrollRef.current.clientWidth;

  //   scrollRef.current.scrollTo({
  //     left: width * index,
  //     behavior: instant ? "auto" : "smooth",
  //   });
  // };
  // const slides = serviceCategories.flatMap((category, cIdx) =>
  //   category.projects.map((project, pIdx) => ({
  //     category: category.category,
  //     services: category.services,
  //     ...project,
  //     cIdx,
  //     pIdx,
  //   }))
  // );

  // const scrollToIndex = (index, instant = false) => {
  //   const width = scrollRef.current.clientWidth;

  //   scrollRef.current.scrollTo({
  //     left: width * index,
  //     behavior: instant ? "auto" : "smooth",
  //   });
  // };

  // ------------

  // const scrollToIndex = (index, instant = false) => {
  //   const width = scrollRef.current.clientWidth;

  //   scrollRef.current.scrollTo({
  //     left: width * index,
  //     behavior: instant ? "auto" : "smooth",
  //   });
  // };

  // Auto scroll
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     indexRef.current = (indexRef.current + 1) % serviceSections.length;
  //     scrollToIndex(indexRef.current);
  //   }, 6000); // auto scroll delay

  //   return () => clearInterval(interval);
  // }, []);

  const next = useCallback(() => {
    const category = serviceCategories[categoryIndex];

    if (projectIndexRef.current < category.projects.length - 1) {
      projectIndexRef.current += 1;
    } else {
      setCategoryIndex((prev) => (prev + 1) % serviceCategories.length);
      projectIndexRef.current = 0;
    }

    scrollProject(projectIndexRef.current);
  }, [categoryIndex]);

  const prev = () => {
    if (projectIndexRef.current > 0) {
      projectIndexRef.current -= 1;
    } else {
      setCategoryIndex((prev) => {
        const newIndex =
          (prev - 1 + serviceCategories.length) % serviceCategories.length;

        projectIndexRef.current =
          serviceCategories[newIndex].projects.length - 1;

        return newIndex;
      });
    }

    scrollProject(projectIndexRef.current);
  };

  useEffect(() => {
    scrollProject(0, true);
  }, [categoryIndex]);

  // useEffect(() => {
  //   const interval = setInterval(next, 6000);
  //   return () => clearInterval(interval);
  // }, []);
  // eslint-disable-next-line
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <div className=" mt-10  md:mt-28"></div>

        <section
          className=" relative  flex flex-col md:flex-row items-center justify-center w-full"
          id="recentworks"
        >
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-4xl sm:text-5xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Recent Works
          </h2>
        </section>

        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute  md:left-6 left-0 top-[550px] md:top-[400px] -translate-y-1/2
  z-50 
   p-2 rounded-full
  flex  items-center justify-center"
          >
            <img
              src={testimonArrow}
              className="w-6 h-6 sm:w-7 sm:h-7 rotate-180 "
              alt="arrow button"
            />
          </button>

          {/* Scroll Container */}
          <section className="relative mx-2 md:mx-0 min-h-[600px] lg:min-h-[794px] text-white overflow-hidden">
            {/* Sticky Background */}
            <div
              className="absolute inset-0 bg-center rounded-2xl bg-cover "
              style={{
                backgroundImage: `url(${serviceCategories[categoryIndex].bg})`,
              }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col h-full px-6 md:px-20   py-20 pb-12">
              {/* Category Title (kept minimal like image) */}
              <h2 className="sr-only">
                {serviceCategories[categoryIndex].category}
              </h2>

              {/* Project Slider */}
              <div
                ref={projectScrollRef}
                className="flex overflow-hidden snap-x snap-mandatory h-full"
              >
                {serviceCategories[categoryIndex].projects.map(
                  ({ image, name, web, services, alt, description }, i) => (
                    <div
                      key={i}
                      className="min-w-full snap-start flex flex-col lg:flex-row
             gap-10 h-full"
                    >
                      {/* LEFT — TEXT BLOCK */}
                      <div className="w-full  md:mb-4 lg:min-h-[760px]  lg:w-[30%] flex flex-col justify-between h-full gap-2  md:gap-10">
                        {/* Top description */}
                        <p className="text-sm md:text-lg leading-relaxed opacity-90">
                          {description}
                        </p>

                        {/* Bottom title block */}
                        <div className="mt-10 h-28">
                          <div className="text-sm  text-white flex h-[22px]">
                            {String(i + 1).padStart(2, "0")} / {"  "}
                            <div className=" mx-1 opacity-30">
                              {String(
                                serviceCategories[categoryIndex].projects.length
                              ).padStart(2, "0")}
                            </div>
                          </div>

                          <p className="text-3xl md:text-5xl font-bold mb-4">
                            {name}
                          </p>
                        </div>
                      </div>

                      {/* CENTER — IMAGE */}
                      <div className="flex-1 flex justify-center items-center">
                        {web ? (
                          <a
                            href={web}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={image}
                              alt={alt}
                              className="object-contain w-[260px] sm:w-[380px] md:w-[500px]
      lg:w-[700px] xl:w-[850px] cursor-pointer"
                            />
                          </a>
                        ) : (
                          <img
                            src={image}
                            alt={alt}
                            className="object-contain w-[260px] sm:w-[380px] md:w-[500px]
    lg:w-[700px] xl:w-[850px]"
                          />
                        )}
                      </div>

                      {/* RIGHT — SERVICES */}
                      <div className="w-full md:mb-2 lg:min-h-[760px] lg:w-[30%] flex flex-col items-start lg:items-end justify-end h-full">
                        {/* Year */}
                        {/* <p className="text-sm md:text-base opacity-80 hidden ">
                          2025
                        </p> */}

                        {/* Services */}
                        <ul className="space-y-3 text-left lg:text-right mt-10 mb-4">
                          <li className="text-xl underline">Services</li>
                          {services.map((s, idx) => (
                            <li
                              key={idx}
                              className="text-sm md:text-lg font-light"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Right Arrow */}
          {/* <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
        bg-white shadow-md p-2 rounded-full hidden md:flex"
          >
            <div>Right side</div>
          </button> */}
          <button
            onClick={next}
            className="absolute md:right-6 right-0 top-[550px] md:top-[400px] -translate-y-1/2
  z-50 
  p-2 rounded-full
 flex items-center justify-center"
          >
            <img
              src={testimonArrow}
              className="w-6 h-6 sm:w-7 sm:h-7 "
              alt="arrow button"
            />
          </button>
        </div>
      </Fade>
    </>
  );
}

//
