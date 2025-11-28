import { useState, useEffect, useRef } from "react";
// import testi1 from "./images/testi/testi 2.png";
// import bgfooter from './images/bg_footer.png';
// import blog from './images/designBlog.jpeg'
import testSnow from "./images/testi/bg_testSnow.jpg";
import testNet from "./images/testi/bg_testSnow.jpg";
import testbox from "./images/testi/testBox.jpg";
// import testil3 from "./images/testi/testi3.png";
import testbg from "./images/testi/testbg2.jpg";
// import testArrow from './images/icons/testarrow.png';
import testimonArrow from "./images/icons/testimoonArrow.png";
import { Fade } from "react-awesome-reveal";

// import Testimon from './Testimon';
const testimonials = [
  {
    text: "Adithya turned our idea into a sharp, easy-to-use product.",
    author: "Naveen",
    role: "founder, Vasura",
    img1: testbg,
    count: "1",
  },
  {
    text: "The team delivered beyond our expectations, very professional.",
    author: "Riya",
    role: "CEO, Digital tech",
    img1: testSnow,
    count: "2",
  },
  {
    text: "Amazing experience, would highly recommend them!",
    author: "Sanjay",
    role: "Founder, flowPipe",
    img1: testNet,
    count: "3",
  },
];

export default function Testimon() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, success: 0 });
  const sectionRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (inView) {
      const duration = 1500; // ms
      const steps = 60;
      const interval = duration / steps;

      const increment = (target, key) => {
        let current = 0;
        const stepValue = target / steps;
        const counter = setInterval(() => {
          current += stepValue;
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(Math.round(current), target),
          }));
          if (current >= target) clearInterval(counter);
        }, interval);
      };

      increment(26, "projects");
      increment(96, "clients");
      increment(97, "success");
    }
  }, [inView]);

  return (
    <>
      {" "}
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <div ref={sectionRef} className="  mt-28  md:mt-60">
          {/* <p className="text-center text-slate-400 my-40">
          {/* (Why clients love Nestoric Digital) *
        </p> 
        */}
        </div>
        <section className="relative flex flex-col md:flex-row items-center justify-center w-full">
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Testimonials
          </h2>
        </section>

        {/* Foreground Content */}
        <div className=" font-inter mx-2 md:mx-4 relative z-10 flex flex-col lg:flex-row gap-4 ">
          {/* Left Column (Stats) */}
          <div
            className="w-full overflow-hidden h-96 md:h-[493px] lg:w-1/4 flex flex-col justify-center gap-6 text-center lg:text-left object-cover  text-slate-100 p-6 rounded-[15px]  bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(${testbox})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundColor: "red", // test visibility
            }}
          >
            <div className="md:mt-6">
              <h3 className="text-5xl font-bold">{counts.projects}+</h3>
              <p className="text-gray-300 md:mt-6  text-[14px] md:text-[20px]">
                Finalized Projects
              </p>
            </div>
            {/* <img src={testi1} className="w-full " /> */}
            <div className="md:mt-6">
              <h3 className="text-5xl font-bold">{counts.clients}%</h3>
              <p className="text-gray-300 text-[14px] md:text-[20px]  md:mt-6">
                Happy Clients
              </p>
            </div>
            <div className="md:mt-6">
              <h3 className="text-5xl font-bold">{counts.success}%</h3>
              <p className="text-gray-300 text-[14px] md:text-[20px] md:mt-6">
                Success Rate
              </p>
            </div>
          </div>

          {/* Right Column (Testimonials) */}
          <div
            className="w-full lg:w-3/4 relative p-6 sm:p-8 rounded-[15px] shadow-md text-white flex flex-col justify-between min-h-[350px]"
            style={{
              backgroundImage: `url(${testimonials[currentIndex].img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Optional overlay for text contrast */}
            <div className="absolute inset-0 rounded-[15px] z-0"></div>

            {/* Testimonial Text */}
            <div className="relative z-10 flex-1 flex items-start justify-between text-center px-4">
              <p className="text-[14px] md:text-[20px] leading-relaxed font-medium text-gray-300 drop-shadow-md opacity-3">
                {testimonials[currentIndex].count}/3
              </p>
              <p className=" text-[16px] md:text-[20px] leading-relaxed font-medium drop-shadow-md">
                {testimonials[currentIndex].text}
              </p>
            </div>

            {/* Author Info */}
            <div className="relative z-10 text-start mt-6">
              <p className="font-semibold text-[16px] md:text-[24px]">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-200 text-[14px] md:text-[20px]">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 right-4 flex gap-3 z-10">
              <button
                onClick={prevTestimonial}
                className=" p-2 rounded-full transition"
              >
                <img
                  src={testimonArrow}
                  className="w-6 h-6 sm:w-7 sm:h-7 rotate-180 "
                  alt="arrow button"
                />
              </button>
              <button
                onClick={nextTestimonial}
                className=" p-2 rounded-full transition"
              >
                <img
                  src={testimonArrow}
                  className="w-6 h-6 sm:w-7 sm:h-7 "
                  alt="arrow button"
                />
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
