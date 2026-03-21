import React from "react";
import { motion } from "framer-motion";
import circle from "../darktheme/images/circle2_gif.gif";
const values = [
  {
    id: "1",
    title: "Innovation",
    desc: "Embracing bold ideas and new solutions that transform industries, drive growth, and create new opportunities for people and businesses.",
  },
  {
    id: "2",
    title: "Sustainability",
    desc: "Supporting companies that prioritize environmental and social responsibility, driving a more sustainable future for generations to come.",
  },
  {
    id: "3",
    title: "Entrepreneurship",
    desc: "Fostering a spirit of entrepreneurship, providing resources, expertise, and guidance to help founders succeed, grow, and thrive.",
  },
  {
    id: "4",
    title: "Positive Impact",
    desc: "Creating lasting value for people and the planet, investing in companies that make a meaningful difference in the world and contribute to a better future.",
  },
];

// const floatAnimation = {
//   animate: {
//     y: [0, -15, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

const Values1 = () => {
  return (
    <div className="bg-black">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-60"></div> */}
      <section
        className="
    relative
    max-w-7xl
    mx-auto
    text-white
    py-28
    px-4
    md:px-10
    min-h-[180vh]
  "
      >
        {/* Background image only desktop */}
        <div
          className="
      hidden md:block
      absolute inset-0
      bg-center
      bg-no-repeat
      bg-contain
      md:bg-fixed
      pointer-events-none
    "
          style={{
            backgroundImage: `url(${circle})`,
          }}
        />

        {/* Overlay */}

        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-24">
            <p className="text-xs tracking-widest text-stone-50 uppercase mb-4">
              Our Values
            </p>
            <h2
              className="text-3xl md:text-5xl font-light"
              style={{
                textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
              }}
            >
              What We Value
            </h2>
          </div>

          {/* Original Layout Preserved */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-20">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  style={{
                    gridRowStart: index + 1,
                    animationDelay: `${index * 0.8}s`,
                  }}
                  className={`
      relative
      rounded-xl
      border border-white/20
      p-[1px]
      w-full
      md:w-[360px]
      h-[300px]
      animate-border
      [background:linear-gradient(45deg,#050505,#0a0a0a_50%,#050505)_padding-box,conic-gradient(from_var(--border-angle),rgba(168,85,247,0.15)_80%,#a855f7_86%,#c084fc_90%,#a855f7_94%,rgba(168,85,247,0.15))_border-box]
      ${
        index % 2 === 0
          ? "md:col-start-1 md:justify-self-start"
          : "md:col-start-2 md:justify-self-end"
      }
    `}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-8 h-full content-center">
                    {/* Corner Accents */}
                    <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white"></span>
                    <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white"></span>
                    <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white"></span>
                    <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white"></span>

                    {/* Content */}
                    <p className="text-xs text-gray-400 mb-4">0{value.id}</p>

                    <h3 className="text-lg md:text-[18px] mb-4 font-medium">
                      {value.title}
                    </h3>

                    <p className="text-base text-stone-50 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values1;
