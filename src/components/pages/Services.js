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
      subtitle: "Conversion-Focused Digital Experiences",
      image: webDe,
      description:
        "We create conversion-optimized, high-performing websites engineered to strengthen your digital ecosystem, increase qualified traffic, generate leads, and improve sales performance. Every website is built with conversion-first architecture, SEO-ready foundations, and scalable design systems that support future digital growth.",

      buttons: [
        "Custom Website Design",
        "Strategic UX/UI Design",
        "Expert Web Development",
        "Corporate & Portfolio Websites",
        "SEO Copywriting",
        "Project Management",
        "Analytics Integration",
      ],

      deliverables: [
        "Mobile-first responsive design",
        "Fast-loading architecture",
        "SEO-ready structure",
        "Lead capture optimization",
      ],

      highlights: [
        "Premium UI systems",
        "Conversion-first strategy",
        "Scalable digital foundation",
      ],
    },

    {
      title: "Search Engine Optimisation (SEO)",
      subtitle: "Organic Growth That Compounds",
      image: seo,
      description:
        "We build long-term digital authority through ethical, data-driven SEO strategies designed to improve rankings, attract high-intent traffic, and generate sustainable lead flow. Instead of chasing algorithms, we focus on technical excellence, content depth, and search visibility that delivers lasting business impact.",

      buttons: [
        "Technical SEO",
        "On-Page Optimization",
        "Keyword Strategy",
        "Authority Building",
        "Content SEO",
        "Analytics Setup",
      ],

      deliverables: [
        "Keyword opportunity mapping",
        "Technical site audits",
        "Search visibility growth",
        "Ranking improvement reports",
      ],

      highlights: [
        "High-intent traffic",
        "Authority growth",
        "Future-proof SEO systems",
      ],
    },

    {
      title: "Online Reputation Management",
      subtitle: "Protecting Brand Trust Digitally",
      image: onlineR,
      description:
        "Your digital reputation directly impacts customer trust, conversions, and business credibility. We actively monitor digital sentiment, suppress harmful visibility, strengthen positive narratives, and implement ethical ORM strategies that protect your long-term brand value.",

      buttons: [
        "Review Management",
        "Negative Content Suppression",
        "Brand Monitoring",
        "Crisis Response",
        "Trust Building",
        "Reputation Recovery",
      ],

      deliverables: [
        "Review monitoring systems",
        "Brand sentiment analysis",
        "Positive content strategy",
        "Crisis escalation support",
      ],

      highlights: [
        "Revenue protection",
        "Trust preservation",
        "Confidential execution",
      ],
    },

    {
      title: "Social Media Management",
      subtitle: "Brand Presence That Converts",
      image: soMedia,
      description:
        "We transform social platforms into active growth channels through strategic content systems, audience engagement frameworks, and measurable campaign execution that strengthen brand visibility and drive business results.",

      buttons: [
        "Content Strategy",
        "Creative Content",
        "Community Management",
        "Platform Growth",
        "Lead Generation",
        "Performance Reporting",
      ],

      deliverables: [
        "Monthly content calendars",
        "Audience engagement strategy",
        "Growth reporting",
        "Brand consistency execution",
      ],

      highlights: [
        "Brand visibility",
        "Audience trust",
        "Conversion-focused content",
      ],
    },

    {
      title: "Performance Marketing",
      subtitle: "Paid Campaigns Built for ROI",
      image: perM,
      description:
        "We execute high-performance paid media strategies focused on measurable ROI, scalable acquisition, and revenue growth across search, social, and display channels. Every campaign is continuously optimized against business KPIs.",

      buttons: [
        "Google Ads",
        "Meta Ads",
        "Campaign Scaling",
        "Audience Targeting",
        "Conversion Tracking",
        "Creative Testing",
      ],

      deliverables: [
        "KPI-focused campaigns",
        "Budget optimization",
        "Landing page alignment",
        "Performance reporting",
      ],

      highlights: [
        "True ROI focus",
        "Rapid optimization",
        "Transparent reporting",
      ],
    },

    {
      title: "Content Development",
      subtitle: "Strategic Content That Builds Authority",
      image: cont,
      description:
        "We develop strategic content ecosystems that educate audiences, strengthen authority, improve discoverability, and support every stage of the customer journey through powerful storytelling and conversion-ready messaging.",

      buttons: [
        "Website Copy",
        "Blogs & Articles",
        "Long-Form Content",
        "Video Scripts",
        "Email Copy",
        "Social Content",
      ],

      deliverables: [
        "Authority-driven messaging",
        "SEO content planning",
        "Brand storytelling",
        "Multi-format production",
      ],

      highlights: [
        "Thought leadership",
        "SEO content depth",
        "Cross-channel consistency",
      ],
    },
  ];
  // const handleScrollToServices = () => {
  //   const section = document.getElementById("p_services");
  //   // section?.scrollIntoView({ behavior: "smooth" });

  //   // const section = document.getElementById("services-section");
  //   if (!section) return;

  //   const y = section.getBoundingClientRect().top + window.scrollY;

  //   window.__smoothScrollTo?.(y);
  // };
  const handleScrollToSection = (sectionId) => {
    console.log("se", sectionId);
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative">
      <div className=" max-w-7xl lg:px-10 mx-auto ">
        <Fade delay={1e2} cascade damping={1e-1}>
          <section className="w-full overflow-hidden">
            <div className="font-inter min-h-[600px] md:min-h-[712px] relative flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat pt-32 md:pt-60">
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
                  <span>Our Creative</span>

                  <div className="flex justify-center mx-2 md:mx-4">
                    <img
                      src={h_1}
                      alt="decorative circle"
                      loading="lazy"
                      className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                    />
                  </div>

                  <span className="text-[#7A4DBE] italic">Services</span>
                </div>

                {/* LINE 2 */}
                <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                  <span>Excellence</span>

                  <div className="flex justify-center mx-2 md:mx-4">
                    <img
                      src={h_2}
                      alt="decorative circle"
                      loading="lazy"
                      className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                    />
                  </div>

                  <span>Delivered</span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 md:mt-20 text-base md:text-lg max-w-2xl mx-auto">
                  Insights, inspiration, and strategies from the creative
                  frontier— exploring design development, and the tools that
                  power exceptional digital experiences
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-6 md:mt-20 flex justify-center text-center ">
                <button
                  onClick={() => handleScrollToSection("p_services")}
                  className="group flex items-center bg-[#7a4dbe]  text-white px-4 py-[5px] rounded-full 
                           transition-all duration-300 
                           cursor-pointer"
                >
                  <span className="text-[18px] text-center transform transition-transform duration-300 group-hover:-translate-x-2">
                    View Services
                  </span>

                  <img
                    src={sideAr}
                    className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                    alt="side arrow"
                  />
                </button>
                {/* <button
                onClick={handleScrollToServices}
                className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
          transition-all duration-300 shadow-lg shadow-slate-500/40 cursor-pointer"
              >
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                  View Services
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

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-10 md:opacity-30"></div>
      <section
        id="p_services"
        className="max-w-7xl mx-auto px-4 lg:px-10 sm:px-6 md:px-10 py-14 md:py-20 bg-black"
      >
        <div className="space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[35%_62%] gap-8 md:gap-10 border-b border-[#222] pb-14 md:pb-16"
            >
              {/* Left Side */}
              <div className="md:sticky md:top-28 h-fit pr-0 md:pr-4">
                <p className="uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                  {service.subtitle}
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Right Side */}
              <div>
                {/* Image */}
                <div className="overflow-hidden rounded-2xl md:rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[220px] sm:h-[300px] md:h-[460px] object-cover rounded-2xl md:rounded-3xl transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Description */}
                <p className="mt-6 md:mt-8 text-white text-sm sm:text-base md:text-[18px] leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                {/* <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
                  {service.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 md:px-4 py-2 rounded-full bg-[#151515] border border-[#2f2f2f] text-xs sm:text-sm text-[#d1d1d1]"
                    >
                      {item}
                    </span>
                  ))}
                </div> */}

                {/* Deliverables */}
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm md:text-base text-gray-400
                      tracking-widest 
                      "
                    >
                      {/* <span className="w-2 h-2 rounded-full bg-white"></span> */}
                      [ {item} ]
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3">
                  {service.buttons.map((btn, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#565656] text-[#cdcdcd] rounded-full text-xs sm:text-sm"

                      // className="px-3 md:px-4 py-2 rounded-full bg-[#1b1b1b] border border-[#333] text-xs sm:text-sm text-[#bdbdbd]"
                    >
                      {btn}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
/*----------- service title----------- */
/* <Fade direction="up" triggerOnce ascade damping={0.2}>
        <section className="relative mt-10 md:mt-28 flex flex-col md:flex-row items-center justify-center w-full">
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-40 sm:opacity-10 text-nowrap text-white"
          >
            Services
          </h2>
        </section>
      </Fade> */
