import React from "react";
//import bgImg from "/images/lead-gen-bg.jpg"; // background image
import w1 from "./images/works/work 1.png";
// import w2 from "./images/works/work 2.png";
import w3 from "./images/works/work 3.png";
import bgw1 from "./images/works/workBgLeadGen.jpg";
import bgw2 from "./images/works/workBgSocial.jpg";
// import bgw3 from "./images/works/workBgWebDev.jpg";
import carbr from "./images/works/carbr.png";
import car from "./images/works/car.png";
import vasurabg from "./images/works/vasurabg.png";
import vasura from "./images/works/vasura.png";
import { Fade } from "react-awesome-reveal";
export default function Works() {
  const serviceSections = [
    {
      title: "Website Development",
      bg: vasurabg,
      image: vasura,

      // bg: bgw1,
      // image: w1,
      alt: "Lead Generation",
      description:
        "We’ve collaborated with companies from diverse sectors to turn their visions into reality. Here’s a look at some of our featured work.",
      services: ["Branding", "Designing", "Development", "Advertising"],
    },

    {
      title: "Website Development",
      bg: carbr,
      image: car,
      // bg: bgw3,
      // image: w2,
      alt: "Website Development",
      description:
        "We’ve helped businesses across industries achieve their goals. Here are some of our selected works.",
      services: ["Designing", "Development", "Advertising"],
    },
    {
      title: "Lead Generation",

      bg: bgw1,
      image: w1,
      alt: "Lead Generation",
      description:
        "We’ve collaborated with companies from diverse sectors to turn their visions into reality. Here’s a look at some of our featured work.",
      services: ["Branding", "Designing", "Development", "Advertising"],
    },
    {
      title: "Social Media Marketing",
      bg: bgw2,
      image: w3,
      alt: "Social Media Marketing",
      description:
        "We’ve helped businesses across industries achieve their goals. Here are some of our selected works.",
      services: ["Designing", "Development", "Advertising"],
    },
  ];

  return (
    <>
      {" "}
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <div className=" mt-14  md:mt-28"></div>

        <section
          className=" relative flex flex-col md:flex-row items-center justify-center w-full"
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
        {serviceSections.map(
          ({ title, bg, image, alt, description, services }, i) => (
            <section
              key={i}
              className="relative mx-2 md:mx-4 
    min-h-[600px] md:min-h-[966px] 
    flex flex-col items-center justify-between 
    text-white overflow-hidden rounded-[15px] mb-12"
            >
              {/* Blurred Background */}
              <div
                className="absolute inset-0 bg-center bg-cover blur-md scale-105"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Top Title */}
              <div className="relative z-10 pt-12 flex justify-between items-center w-full px-6 md:px-16">
                <h2 className="text-2xl md:text-5xl font-bold drop-shadow-lg">
                  {title}
                </h2>
              </div>

              {/* Center Image */}
              <div className="relative z-10 flex justify-center items-center w-full py-6 md:py-0">
                <img
                  src={image}
                  alt={alt}
                  className="w-[260px] sm:w-[340px] md:w-[500px] lg:w-[850px] xl:w-[900px] 
        object-contain rounded"
                />
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-end w-full px-6 md:px-16 gap-8 mb-12">
                {/* Paragraph */}
                <p className="text-[14px] md:text-[20px] w-full md:w-[30%] leading-relaxed">
                  {description}
                </p>

                {/* Services */}
                <ul className="list-inside space-y-3 text-left text-sm md:text-base">
                  <li className="text-xl md:text-[24px] underline underline-offset-4">
                    Services
                  </li>
                  {services.map((item, idx) => (
                    <li key={idx} className="text-[14px] md:text-[20px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        )}
      </Fade>
    </>
  );
}
