import React, { useRef, useState, useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import smm from "../images/designBlog.jpeg";
import { Link } from "react-router-dom";

// import web_Dep from "./asseets/images/web_D.png";
import seoImg from "../images/services/S_seo.png";
import onlineReo from "../images/services/S_onlineRep.png";
import perf from "../images/services/S_performanceMark.png";
import socialM from "../images/services/S_socialMedia.png";
//  import cont from "../images/services/S_content.png";
import webD from "../images/services/S_websiteDevlop.png";
import testimonArrow from "../images/icons/testimoonArrow.png";
import cont from "../images/services/S_content.png";

// import orm from "./asseets/images/orm.png";
// import perMan from "./asseets/images/performance_ma.png";
import { Fade } from "react-awesome-reveal";

export default function Work() {
  const services = [
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and increase organic traffic.",
      image: seoImg,
    },
    {
      title: "Web Development",
      description: "Build responsive and scalable websites for your business.",
      image: webD,
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage your audience and grow your brand with targeted campaigns.",
      image: socialM,
    },

    {
      title: "Online Reputation Management",
      description: "Create engaging content to connect with your audience.",
      image: onlineReo,
    },
    {
      title: "Performance Marketing",
      description: "Turn visitors into leads with targeted campaigns.",
      image: perf,
    },
    {
      title: "Content Development",
      description:
        "TWe don't just write words; we craft compelling narratives, build educational resources.",
      image: cont,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Responsive slidesToShow (2 for lg+, 1 for sm/md)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Navigation
  const nextService = () => {
    setCurrentIndex((prev) => (prev + slidesToShow) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) =>
      prev - slidesToShow < 0
        ? services.length - slidesToShow
        : prev - slidesToShow,
    );
  };

  // ✅ Fade-in when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Determine visible slides
  const visibleSlides = services.slice(
    currentIndex,
    currentIndex + slidesToShow,
  );

  // ✅ Handle wrapping (when reaching end of array)
  if (visibleSlides.length < slidesToShow) {
    visibleSlides.push(
      ...services.slice(0, slidesToShow - visibleSlides.length),
    );
  }

  return (
    <>
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <div className=" mt-28  md:mt-60"></div>
        <section className="relative flex flex-col md:flex-row items-center justify-center w-full">
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
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

        {/* <section className="py-16 px-4 bg-white"> */}
        {/* <div className="container mx-auto text-center mb-10">
        <p className="text-base text-start text-slate-400">(services)</p>
        <h2 className="text-4xl font-bold text-gray-800 text-left mb-4">What We Do</h2>
        <hr></hr>
     
      </div> */}

        {/* Embla Carousel */}
        <div className="mx-0 md:mx-1   overflow-hidden" ref={sectionRef}>
          <section
            className={`relative w-full flex flex-col items-center justify-center transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Arrows + Slides Wrapper */}
            <div className="relative w-full flex items-center justify-center">
              {/* ⬅️ Left Arrow */}
              <button
                onClick={prevService}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 
                   p-2 sm:p-3 bg-white/10 hover:bg-white/20 
                   rounded-full transition z-10"
                aria-label="Previous Service"
              >
                <img
                  src={testimonArrow}
                  className="w-6 h-6 sm:w-7 sm:h-7 rotate-180"
                  alt="Previous arrow"
                />
              </button>

              {/* 💠 Slides */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-6 w-full transition-transform duration-500 ease-in-out">
                {visibleSlides.map((service, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-lg 
                       text-white w-[95%] sm:w-[80%] lg:w-[48%] 
                       group transition-all duration-500 cursor-pointer"
                  >
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Hover Text */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ➡️ Right Arrow */}
              <button
                onClick={nextService}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 
                   p-2 sm:p-3 bg-white/10 hover:bg-white/20 
                   rounded-full transition z-10"
                aria-label="Next Service"
              >
                <img
                  src={testimonArrow}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  alt="Next arrow"
                />
              </button>
            </div>
          </section>
        </div>

        <Link
          to="/services"
          className="block sm:text-base text-[#4D4D4D] text-right m-4 md:text-[18px] font-semibold underline underline-offset-4"
        >
          Know more
        </Link>
        <div className="mx-2 md:mx-4   mt-9 ">
          <h2 className=" text-[14px] md:text-[24px] font-bold text-gray-800 text-left mb-4 md:mb-6 ">
            What We Do
          </h2>
          <p className="text-justify text-[#515151] text-[14px] md:text-[20px]  leading-8">
            we craft impactful digital experiences through strategy, design, and
            technology. Our services cover everything from brand identity and
            website design to seamless development and performance optimization
            — all tailored to elevate your online presence. We focus on clarity,
            creativity, and functionality, ensuring every project runs smoothly
            from concept to completion. With a commitment to innovation and
            detail, we transform ideas into bold, user-centric digital solutions
            that drive results and leave a lasting impression.{" "}
          </p>
        </div>
      </Fade>
      {/* 
    </section> */}
    </>
  );
}
