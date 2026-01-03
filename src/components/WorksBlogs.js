import React from "react";
// import vasura from "./images/worksRecent/vasura.jpg";
// import carzen from "./images/worksRecent/cazen_web.jpg";
// import vhTech from "./images/worksRecent/vhTech.jpg";
import vasura from "./images/works/vasura.jpg";
import carzen from "./images/works/carzen.jpg";
import vhTech from "./images/works/vhs.jpg";
import surya from "./images/works/surya.jpg";
import nandi from "./images/works/nandi.jpg";
import magnum from "./images/works/magnum.jpg";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import surya from "./images/worksRecent/surya.jpg";
// import nandi from "./images/worksRecent/nandi.jpg";
const WorksBlogs = () => {
  const location = useLocation();

  const works = [
    {
      id: "carzen",
      title: "Carzen Logistics",
      image: carzen,
      description:
        "For Carzen Logistics, we delivered a conversion focused website design along with performance driven digital campaigns. The website was structured to clearly showcase logistics services and improve user navigation. We executed targeted Meta and Google campaigns to generate high-intent business enquiries. Ad creatives and messaging were optimized for the logistics audience. Continuous performance tracking helped improve lead quality. The project resulted in better visibility and consistent inbound leads.",
      buttons: [
        "Strategic Web Design",
        "Expert Web Development",
        "Professional Copywriting (SEO-optimized)",
        "Dedicated Project Manager",
        "Google Analytics & Tag Manager Setup",
      ],
    },
    {
      id: "vasura",
      title: "Vasura Virtual Experience",
      image: vasura,
      description:
        "We created the complete brand identity and digital presence for Vasura Virtual Experience. We designed a distinctive logo that reflects innovation, technology, and immersive experiences. We developed a modern, user-friendly website to effectively showcase their virtual solutions. The website structure was optimized for clarity, engagement, and conversions. We planned and executed targeted digital campaigns to reach the right audience. Visual storytelling was used to highlight the immersive nature of the product. Performance optimization ensured better reach and engagement. Our approach helped build strong brand recall. Vasura Virtual Experience now stands as a premium, future-ready digital brand.",
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
      id: "vhTech",
      title: "VH’s Techsphere",
      image: vhTech,
      description:
        " We created a modern and scalable website for VH’s Techsphere to establish a strong digital foundation. The website was designed with a clean UI and clear content structure to showcase their technology offerings. We focused on user experience and easy navigation to improve engagement. A conversion-oriented layout was implemented to support lead generation. Alongside the website, we planned and executed targeted digital campaigns. These campaigns were optimized to reach the right tech-focused audience. Creative messaging highlighted their core solutions. Continuous performance tracking improved campaign efficiency. The project strengthened VH’s Techsphere’s online visibility and lead flow.",
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
      id: "magnum",
      title: "Magnum Opus",
      image: magnum,
      description:
        "We created a result-driven digital marketing strategy for Magnum Opus with a strong focus on SEO and lead generation. We optimized the website structure and content to improve search engine visibility. Location-based and high-intent keywords were targeted to attract qualified buyers. We executed lead generation campaigns across Meta and Google platforms. Landing pages were optimized for higher conversions. Creative ads were designed to appeal to premium homebuyers. Continuous monitoring helped improve lead quality. Data-driven optimization reduced acquisition costs. The project achieved consistent enquiries and improved online presence.",
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
      id: "surya",
      title: "Surya City",
      image: surya,
      description:
        "We created focused digital campaigns for Surya City with the objective of generating high-quality real estate leads. We planned and executed targeted Meta and Google lead campaigns. Location-based audience targeting was used to reach genuine homebuyers. Call and WhatsApp campaigns were optimized for quick enquiries. Ad creatives highlighted key project benefits and location advantages. Continuous performance tracking improved campaign efficiency. Lead quality was monitored and refined regularly. Cost per lead was optimized through data-driven decisions. The campaigns delivered a steady flow of qualified enquiries.",
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
      id: "nandi",
      title: "Nandi Urban City",
      image: nandi,
      description:
        "We created a performance-driven digital campaign strategy for Nandi Urban City to generate consistent real estate leads. We executed targeted Meta and Google campaigns focused on buyer intent. Location-based and investment-focused audiences were carefully selected. Call and lead form campaigns were optimized for higher conversions. Ad creatives highlighted project features, connectivity, and investment value. Continuous monitoring helped improve lead quality. Campaign budgets were optimized based on performance data. Cost per lead was reduced through regular testing and refinement. The campaigns delivered a strong and steady flow of qualified enquiries.",
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

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    let rafId;

    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (!section) {
        rafId = requestAnimationFrame(scrollToSection);
        return;
      }

      window.__smoothScrollTo?.(section.offsetTop);
    };

    scrollToSection();

    return () => cancelAnimationFrame(rafId);
  }, [location]);

  return (
    <div>
      <div className=" mt-16  md:mt-32"></div>
      <section
        className=" relative  flex flex-col md:flex-row items-center justify-center w-full"
        id="recentworks"
      >
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
      <section className="w-full px-2 md:px-4">
        <div className="grid grid-cols-1 gap-16" id="services">
          {works.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="flex flex-col  md:items-start text-center md:text-left mb-5"
            >
              <Fade>
                {/* Title on the right (align right on desktop) */}

                {/* Image */}
                <div className="w-full mb-4 md:mb-[32px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto md:h-[580px] object-cover rounded-2xl "
                  />
                </div>
                <h3 className="font-inter text-[20px] md:text-[24px] lg:text-5xl font-semibold text-start text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="  text-justify
  md:mt-[48px] text-[14px] md:text-[18px] text-gray-600  w-full"
                >
                  {service.description}
                </p>

                {/* Buttons */}
                {/* Buttons */}
                <div className="flex justify-center   content-center mt-4 md:mt-[86px] md:mb-[86px] px-4 md:px-0">
                  <div className="flex flex-wrap md:w-[60%]  justify-center content-center text-center gap-3 md:gap-8 min-w-0 md:min-w-48 mx-0 md:mx-36">
                    {service.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="px-4 sm:px-6 py-2 bg-[#353535] shadow-lg shadow-slate-500/40 text-white rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap"
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

export default WorksBlogs;
