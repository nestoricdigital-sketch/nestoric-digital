import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
// import PortfolioLogos from "./PortfolioLogos"; // your scrolling logos
import sideAr from "../images/sideArrow.png";

import w_mg_op from "../images/worksRecent/magnum.jpg";
import w_nandi from "../images/worksRecent/nandi.jpg";
import w_suryacity from "../images/worksRecent/surya.jpg";
import w_rak from "../images/worksRecent/rak_work.webp";
import car_gen from "../images/worksgrid/carzen.jpg";
// import digi_chain from "../images/works/digichain-site.webp";
import digi_chain from "../images/worksRecent/main_digi_site.webp";
import w_vhs from "../images/works/vh-site.webp";
import w_vasura from "../images/works/vasura.webp";
import w_simplus from "../images/works/simplus.webp";
import w_cityscape from "../images/worksRecent/w_cityscape.webp";
import w_thinkright from "../images/worksRecent/think_right.webp";

import suryacity from "./logos/suryacity_logo.webp";
import cargen from "./logos/cargen_logo.webp";
import digichain from "./logos/digic_logo.webp";
import simplus from "./logos/simplus_logo.webp";
import vasura from "./logos/vasura_logo.webp";
import vhs from "./logos/vhs_logo.webp";
import mag from "./logos/mag_op_logo.webp";
import rak from "./logos/rak.webp";
import cityscape from "./logos/cityscape.webp";
import think from "./logos/think.webp";
import little from "./logos/little.webp";
import eena from "./logos/eena.webp";
import ramki from "./logos/ramki.webp";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioLogos = [
  {
    name: "Magnum Opus",
    service: "Social Media Marketing",
    logo: mag,
  },
  {
    name: "Simplus",
    service: "Social Media Marketing",
    logo: simplus,
  },

  {
    name: "Surya City",
    service: "Lead Generation",
    logo: suryacity,
  },
  {
    name: "VHS TechSphere",
    service: "Website Development",
    logo: vhs,
  },
  {
    name: "Vasura Virtual Experience",
    service: "Website Development",
    logo: vasura,
  },
  {
    name: "Digichain",
    service: "Website Development",
    logo: digichain,
  },
  {
    name: "Carzen logistics",
    service: "Website Development",
    logo: cargen,
  },
  {
    name: "Cityscape Realty",
    service: "Lead Generation & Social Media Marketing",
    logo: cityscape,
  },
  {
    name: "Think Tech",
    service: "Website Development",
    logo: think,
  },
  {
    name: "Little Angles",
    service: "Website Development",
    logo: little,
  },
  {
    name: "Eena",
    service: "Logo Design",
    logo: eena,
  },
  {
    name: "Ramki Solutions",
    service: "Leads & Social Media Marketing",
    logo: ramki,
  },
  {
    name: "RAK",
    service: "Lead Generation & Social Media Marketing",
    logo: rak,
  },
];
const portfolioProjects = [
  {
    id: 1,
    type: "large",
    image: car_gen,
    cate: "Website Design & Development",
  },
  {
    id: 2,
    type: "small",
    image: [w_mg_op, w_rak],
    cate: "Leads & Social Media Marketing",
  },
  {
    id: 3,
    type: "small",
    image: [w_suryacity, w_nandi],
    cate: "Leads & Social Media Marketing",
  },
  {
    id: 4,
    type: "large",
    image: digi_chain,
    cate: "Website Design & Development",
  },
  {
    id: 5,
    type: "large",
    image: w_vhs,
    cate: "Website Design & Development",
  },
  {
    id: 6,
    type: "large",
    image: w_vasura,
    cate: "Website Design & Development",
  },
  {
    id: 7,
    type: "large",
    image: w_simplus,
    cate: "Leads & Social Media Marketing",
  },
  {
    id: 8,

    type: "small",

    image: [w_cityscape, w_suryacity],
  },
  {
    id: 9,
    type: "large",
    image: w_thinkright,
    cate: "Website Design & Development",
  },
];
const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const currentProject = portfolioProjects[current];

  const totalSlides = portfolioProjects.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);
  // ---------

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % portfolioProjects.length);
  //   }, 4000);

  //   return () => clearInterval(timer);
  // }, []);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % portfolioProjects.length);
  // };

  // const prevSlide = () => {
  //   setCurrent(
  //     (prev) =>
  //       (prev - 1 + portfolioProjects.length) % portfolioProjects.length,
  //   );
  // };
  return (
    <section
      id="portfolio"
      className="relative max-w-7xl mx-auto bg-black text-white py-16 lg:py-24 px-4 md:px-10 lg:px-10 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7a4dbe]/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-sm text-stone-50 tracking-widest uppercase">
            Our Companies
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mt-2"
            style={{
              textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
            }}
          >
            Portfolio
          </h2>
        </div>

        {/* <button className="hidden md:flex items-center gap-2 text-sm bg-white/10 px-5 py-2 rounded-full hover:bg-white/20 transition">
          View All →
        </button> */}
        <Link to="/work">
          <button
            // onClick={handleScrollToRecentWorks}
            className="group flex items-center bg-[#353535] text-white px-5 py-[5px] rounded-full 
                                             transition-all duration-300 
                                             cursor-pointer"
          >
            <span className="text-[18px] transform transition-transform duration-300 group-hover:-translate-x-2">
              View All
            </span>

            <img
              src={sideAr}
              className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              alt="side arrow"
            />
          </button>
        </Link>
      </div>

      {/* Logo Slider */}
      {/* <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {portfolioLogos.map((item, index) => (
          <div
            key={index}
            className="min-w-[273px] h-[194px] 
                 flex flex-col justify-between 
                 bg-white/5 backdrop-blur-md p-6 
                 rounded-2xl border border-white/10 
                 hover:border-white/30 transition"
          >
            
            <div className="flex items-start justify-start">
              <img
                src={item.logo}
                alt={item.name}
                className="h-12 w-28 object-contain"
              />
            </div>

            {/* Service Text 
            <p className="text-white/60 text-sm mt-auto">{item.service}</p>
          </div>
        ))}
      </div> */}
      <div
        className="logo-scale provide md:-mx-20 relative flex flex-col items-center justify-start
               content-center  md:min-h-[118px] min-h-10 md:mt-[60px] mt-[40px] "
      >
        {/* LEFT EDGE BLUR (touches screen) */}
        {/* <div
          className="pointer-events-none fixed top-auto left-0 h-[200px] w-20 md:w-40 z-20
    bg-gradient-to-r from-black via-white/100   opacity-100 "
        /> */}

        {/* RIGHT EDGE BLUR (touches screen) */}
        {/* <div
          className="pointer-events-none fixed top-auto right-0 h-[200px] w-20 md:w-40 z-20
    bg-gradient-to-l from-white via-white/100 opacity-100 "
        />
        <div
          className="mt-2 md:mt-0 absolute  md:scale-100 text-center  left-1/2 -translate-x-1/2 
      
        w-[101vw]
          "
          // style={{ transform: "scale(2, 2)" }}
        ></div> */}
        {/* <div
          className="pointer-events-none fixed top-auto right-0 h-[200px] w-20 md:w-40 z-20
    bg-gradient-to-l from-white via-white/100 opacity-100 "
        /> */}
        <LogoMarquee logos={portfolioLogos} />
      </div>

      {/* Bottom Grid */}
      {/* <div className="grid lg:grid-cols-2 gap-8 mt-16">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={mg_op}
            alt="Magnum"
            className="w-full h-[700px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          {portfolioProjects
            .filter((item) => item.type === "small")
            .map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt="Project"
                  className="w-full h-[337px] object-cover"
                />
              </div>
            ))}
        </div>
      </div> */}

      <div className="relative mt-32 md:mt-16 px-0 sm:px-6 lg:px-0">
        {currentProject.type === "large" ? (
          <div className="rounded-2xl overflow-hidden">
            <img
              src={currentProject.image}
              alt=""
              loading={current === 0 ? "eager" : "lazy"}
              fetchPriority={current === 0 ? "high" : "auto"}
              decoding="async"
              className="w-full h-[260px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm px-4 py-3">
              <h3 className="text-white text-base md:text-xl font-semibold">
                {currentProject.cate}
              </h3>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {currentProject.image.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[260px] sm:h-[350px] md:h-[500px] lg:h-[700px] object-fill"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm px-4 py-3">
                  <h3 className="text-white text-base md:text-xl font-semibold">
                    {currentProject.cate}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div>
        <button onClick={prevSlide}></button>
        <button onClick={nextSlide}></button>
      </div> */}
      <div className="flex gap-4  justify-end mt-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a] transition"
        >
          <ChevronLeft size={30} strokeWidth={1.7} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="w-14 h-14 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a] transition"
        >
          <ChevronRight size={30} strokeWidth={1.7} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

function LogoMarquee({ logos }) {
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(20);

  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

  const calculate = useCallback(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    setWidth(trackWidth);

    const screenWidth = window.innerWidth;

    const speed = screenWidth < 640 ? 28 : screenWidth < 1024 ? 45 : 70;

    setDuration(trackWidth / speed);
  }, []);

  useEffect(() => {
    calculate();

    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(calculate, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(timeout);
    };
  }, [calculate]);

  return (
    <motion.div
      className="flex gap-4 sm:gap-6 md:gap-10 mt-6 md:mt-0"
      animate={{ x: [0, -width] }}
      transition={{
        ease: "linear",
        duration,
        repeat: Infinity,
      }}
    >
      <div ref={trackRef} className="flex gap-4 sm:gap-6 md:gap-12">
        {duplicatedLogos.map((item, index) => (
          <div
            key={index}
            className="
          min-w-[180px]
          sm:min-w-[220px]
          md:min-w-[273px]

          h-[150px]
          sm:h-[170px]
          md:h-[194px]

          flex flex-col justify-between

          bg-white/5 backdrop-blur-md
          px-4 py-4 md:px-6 md:py-5

          rounded-2xl
          border border-white/10
          hover:border-white/30
          transition
        "
          >
            <div className="flex items-start h-[40px] sm:h-[48px] md:h-[56px]">
              <img
                src={item.logo}
                alt={item.name}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                className="
              h-full
              w-auto
              max-w-[90px]
              sm:max-w-[110px]
              md:max-w-[120px]
              object-contain scale-105
            "
              />
            </div>

            <p
              className="
            text-stone-50
            text-[10px]
            sm:text-xs
            md:text-sm
            leading-snug
            min-h-[32px]
            md:min-h-[40px]
          "
              style={{
                textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
              }}
            >
              {item.service}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
//  <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
//           <div>
//             <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
//               Our Companies
//             </p>
//             <h2 className="text-3xl md:text-5xl font-light">Portfolio</h2>
//           </div>

//           <button className="self-start md:self-auto px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
//             View All →
//           </button>
//         </div>

//         <div className="mb-20"><PortfolioLogos /></div>

//         <div className="grid lg:grid-cols-2 gap-8">

//           <div className="rounded-2xl overflow-hidden">
//             <img
//               src="/portfolio/magnum.jpg"
//               alt="Magnum Opus"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex flex-col gap-8">
//             <div className="rounded-2xl overflow-hidden">
//               <img
//                 src="/portfolio/carzen.jpg"
//                 alt="Carzen Logistics"
//                 className="w-full object-cover"
//               />
//             </div>

//             <div className="rounded-2xl overflow-hidden">
//               <img
//                 src="/portfolio/digichain.jpg"
//                 alt="Digichain"
//                 className="w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
