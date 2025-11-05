import React from "react";
//import bgImg from "/images/lead-gen-bg.jpg"; // background image
import w1 from "./images/works/work 1.png";
import w2 from "./images/works/work 2.png";
import w3 from "./images/works/work 3.png";
import bgw1 from "./images/works/workBgLeadGen.jpg";
import bgw2 from "./images/works/workBgSocial.jpg";
import bgw3 from "./images/works/workBgWebDev.jpg";

export default function Works() {
  return (
    <>
      <section  className=" m-2 relative mt-48 flex flex-col md:flex-row items-center justify-center w-full" id='recentworks'>
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
      <section  className="relative w-full min-h-screen flex flex-col items-center justify-between text-white overflow-hidden rounded-[15px] mb-12">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-md scale-105"
          style={{ backgroundImage: `url(${bgw1})` }}
        ></div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Top Title */}
        <div className="relative z-10 pt-12 flex justify-between items-center w-full px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Lead Generation
          </h2>
          {/* <div className="text-xl md:text-2xl font-semibold">2025</div> */}
        </div>

        {/* Center Image */}
        <div className="relative z-10 flex justify-center items-center w-full py-8">
          <img
            src={w1}
            alt="Lead Generation"
            className="w-[300px] md:w-[400px] lg:w-[800px] object-contain rounded"
          />
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between justify-items-end  items-end w-full px-8  gap-8 mb-12">
          {/* Paragraph (Left) */}
          <p className="text-sm md:text-base w-full md:w-[40%] leading-relaxed ">
            We specialize in driving meaningful leads through targeted campaigns
            and intelligent digital strategies that connect your brand to the
            right audience.
          </p>

          {/* Ordered List (Right) */}
          <ul className=" list-inside space-y-4 text-left mr-9 text-sm md:text-base md:self-end">
            <li className="text-xl underline underline-offset-4">Services</li>
            <li>Branding</li>
            <li>Designing</li>
            <li>Development</li>
            <li>Advertising</li>
          </ul>
        </div>
      </section>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between text-white overflow-hidden rounded-[15px] mb-12">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-md scale-105"
          style={{ backgroundImage: `url(${bgw3})` }}
        ></div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Top Title */}
        <div className="relative z-10 pt-12 flex justify-between items-center w-full px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Website Developement
          </h2>
          {/* <div className="text-xl md:text-2xl font-semibold">2025</div> */}
        </div>

        {/* Center Image */}
        <div className="relative z-10 flex justify-center items-center w-full py-8">
          <img
            src={w2}
            alt="Lead Generation"
            className="w-[300px] md:w-[400px] lg:w-[800px] object-contain rounded"
          />
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between justify-items-center items-end  w-full px-8  gap-8 mb-12">
          {/* Paragraph (Left) */}
          <p className="text-sm md:text-base w-full md:w-[40%] leading-relaxed ">
            We specialize in driving meaningful leads through targeted campaigns
            and intelligent digital strategies that connect your brand to the
            right audience.
          </p>

          {/* Ordered List (Right) */}
          <ul className=" list-inside space-y-4 text-left mr-9 text-sm md:text-base md:self-end">
            <li className="text-xl underline underline-offset-4">Services</li>
            <li>Branding</li>
            <li>Designing</li>
            <li>Development</li>
            <li>Advertising</li>
          </ul>
        </div>
      </section>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between text-white overflow-hidden rounded-[15px]">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-md scale-105 "
          style={{ backgroundImage: `url(${bgw2})` }}
        ></div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Top Title */}
        <div className="relative z-10 pt-12 flex justify-between items-center w-full px-8 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Social Media Marketing
          </h2>
          {/* <div className="text-xl md:text-2xl font-semibold">2025</div> */}
        </div>

        {/* Center Image */}
        <div className="relative z-10 flex justify-center items-center w-full py-8">
          <img
            src={w3}
            alt="Lead Generation"
            className="w-[300px] md:w-[400px] lg:w-[800px] object-contain rounded"
          />
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between justify-items-center items-end w-full px-8 mb-12 gap-8">
          {/* Paragraph (Left) */}
          <p className="text-sm md:text-base w-full md:w-[40%] leading-relaxed ">
            We specialize in driving meaningful leads through targeted campaigns
            and intelligent digital strategies that connect your brand to the
            right audience.
          </p>

          {/* Ordered List (Right) */}
          <ul className=" list-inside space-y-4 text-left mr-9 text-sm md:text-base md:self-end">
            <li className="text-xl underline underline-offset-4">Services</li>
            <li>Branding</li>
            <li>Designing</li>
            <li>Development</li>
            <li>Advertising</li>
          </ul>
        </div>
      </section>
    </>
  );
}
