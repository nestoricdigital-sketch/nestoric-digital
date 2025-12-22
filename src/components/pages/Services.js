import React from "react";
// import imge from "../images/designBlog.jpeg";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import webDe from "../images/services/S_websiteDevlop.png";
import seo from "../images/services/S_seo.png";
import soMedia from "../images/services/S_socialMedia.png";
import perM from "../images/services/S_performanceMark.png";
import cont from "../images/services/S_content.png";
import onlineR from "../images/services/S_onlineRep.png";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  const services = [
    {
      title: "Website Design & Development",
      image: webDe,
      description:
        "We create conversion-optimized, high-performing websites from the bottom up to complement your entire digital marketing strategy to increase traffic, leads, and sales. We believe in Conversion-First Design that guides visitors toward a desired action (lead, purchase, subscription). Top Google rankings and smooth integration to support next digital efforts are guaranteed by our SEO success.",
      buttons: [
        "Strategic Web Design",
        "Expert Web Development",
        "Professional Copywriting (SEO-optimized)",
        "Dedicated Project Manager",
        "Google Analytics & Tag Manager Setup",
      ],
    },
    {
      title: "Search Engine Optimisation (SEO)",
      image: seo,
      description:
        "Traffic is the lifeblood of any online business, but not all traffic is equal. At Nestoric Digital, we specialise in ethical, data-driven Search Engine Optimisation (SEO) that moves your business to the top of Google. We don't chase algorithms; we build digital authority—ensuring that the customers ready to buy find you, not your competition",
      buttons: [
        "Sustainable Lead Flow",
        "Authority & Trust ",
        "High-Intent Traffic",
        "	Future-Proofing",
        "On-Page & Content SEO",
        "Google Analytics & Tag Manager Setup",
      ],
    },
    {
      title: "Online Reputation Management",
      image: onlineR,
      description:
        "In the digital age, a single negative review, news article, or social media post can instantly erode years of brand building. Our Online Reputation Management (ORM) service is your dedicated shield and strategist. We actively monitor, suppress, and counter negative content while amplifying the authentic, positive stories that win customer trust and secure your business future.",
      buttons: [
        "Revenue Protection",
        "	Crisis Mitigation",
        "Talent Attraction",
        "	Crisis Response ",
        "	Confidential and Ethical Approach ",
        "Review Generation ",
      ],
    },
    {
      title: "Social media management",
      image: soMedia,
      description:
        "In today's digital world, social media is your brand's primary voice and an invaluable conversion channel. At Nestoric Digital, we combine data-driven strategy with creative content to build a thriving social community that amplifies your brand, drives targeted traffic, and generates measurable revenue. Strategic value and measurable results matters. ",
      buttons: [
        "Brand Visibility & Trust",
        "	Targeted Lead Generation",
        "	Optimised ROI",
        "Strategy & Setup",
        "	Content & Engagement",
        "Reporting and Transparency",
      ],
    },
    {
      title: "Performance Marketing",
      image: perM,
      description:
        "We are an outcome-driven agency where success is measured by your KPIs—not vanity metrics. We deploy, test, and optimize advertising campaigns across every relevant digital channel, ensuring every dollar you spend is a direct investment in a trackable, profitable customer action.",
      buttons: [
        "True ROI Focus",
        "Hyper-Targeted Reach",
        "Full Transparency",
        "Data-Informed Optimization",
        "Creative & Technical Setup",
        "Rapid Scaling",
      ],
    },
    {
      title: "Content Development",
      image: cont,
      description:
        "We don't just write words; we craft compelling narratives, build educational resources, and produce engaging content that positions your brand as a trusted authority and drives measurable results. Our content development services cover the full spectrum of media formats needed to engage with you at every stage of your journey.",
      buttons: [
        "Blogging & Articles",
        "Website Copy",
        "Long-Form Content",
        "Video Scripts & Production",
        "Email & Newsletter Copy",
        "Social Media Content",
      ],
    },
  ];
  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    // section?.scrollIntoView({ behavior: "smooth" });

    // const section = document.getElementById("services-section");
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY;

    window.__smoothScrollTo?.(y);
  };
  return (
    <div className=" ">
      <Fade delay={1e2} cascade damping={1e-1}>
        <section className="  w-full text-gray-800">
          {/* === HERO SECTION === */}
          <div
            className=" min-h-[600px] md:min-h-[712px] relative flex flex-col items-center justify-center text-center py-32 px-4 md:px-12 bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage: `url(${heroBg})`,
            // }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 pointer-events-none"></div>

            <div className="font-inter text-center relative z-10 max-w-5xl mx-auto px-4">
              {/* LINE 1 */}
              <div className="flex md:h-[62px] md:mb-[20px]  flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-5xl font-semibold leading-tight text-slate-800 mb-4">
                <span>Our Creative</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_1}
                    alt="decorative circle"
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <span className="text-purple-600 italic">Services</span>
              </div>

              {/* LINE 2 */}
              <div className="flex md:h-[62px] md:mb-[20px]  flex-wrap md:flex-nowrap justify-center items-center text-4xl md:text-5xl font-semibold leading-tight text-slate-800 mb-6">
                <span className="text-[#666666]">Excellence</span>
                <div className="flex justify-center mx-2 md:mx-4">
                  <img
                    src={h_2}
                    alt="decorative circle"
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover animate-float-slow"
                  />
                </div>
                <span className="text-slate-800">Delivered</span>
              </div>

              {/* DESCRIPTION */}
              {/* <div className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl ">
            </div> */}
              <p className="mt-6 md:mt-20 text-[#666666] text-base md:text-lg max-w-2xl mx-auto">
                Insights, inspiration, and strategies from the creative
                frontier—exploring design development, and the tools that power
                exceptional digital experiences
              </p>
            </div>

            {/* BUTTON */}
            {/* <div className="mt-6 flex justify-center text-center">
            <button className=" flex bg-slate-800 text-slate-100 px-6 mt-9 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-600 transition  duration-300">
              View Services
              <img src={sideAr} className="w-7 h-7 p-1" alt=" side arrow" />
            </button>
          </div> */}
            <div className="mt-6  md:mt-20 flex justify-center text-center h-[48px]">
              <button
                onClick={handleScrollToServices}
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
                  className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  alt="side arrow"
                />
              </button>
            </div>
          </div>
        </section>
      </Fade>
      {/*----------- service title----------- */}
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <section className="relative mt-10 md:mt-28 flex flex-col md:flex-row items-center justify-center w-full">
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Services
          </h2>
        </section>
      </Fade>
      <section className=" px-2 md:px-8">
        <div className="grid grid-cols-1 gap-16" id="services">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col  md:items-start  text-start mb-5"
            >
              <Fade direction="up" triggerOnce ascade damping={0.2}>
                {/* Title on the right (align right on desktop) */}

                {/* Image */}
                <div className="w-full mb-4 md:mb-[32px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl shadow-lg "
                  />
                </div>
                <h3 className="font-inter text-xl md:text-[24px] font-semibold  text-start text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-justify md:mt-[48px] text-[14px] md:text-[18px] text-gray-600  w-full">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-center w-full mt-2 md:mt-[86px] md:mb-[86px]">
                  <div className="flex flex-wrap md:h-[23px] justify-center text-center gap-4 min-w-48 mx-36 ">
                    {service.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="px-6 py-2 m-2  bg-[#353535] shadow-lg shadow-slate-500/40 text-white rounded-full text-sm font-medium transition"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* <hr /> */}
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
