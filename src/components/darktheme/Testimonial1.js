import React, { useMemo } from "react";
import { motion } from "framer-motion";
// import { Star } from "lucide-react";
import star from "./../darktheme/icons/star.webp";
const testimonials = [
  {
    text: "Working with this team was a breath of fresh air. They understood our vision instantly and delivered beyond expectations.",
    name: "Naveen.",
    role: "Founder, Vasura",
  },
  {
    text: "Their real estate lead generation campaigns brought quality leads and improved our project visibility significantly. Great strategy and smooth execution throughout.",
    name: "Srinivas",
    role: "Manager, Surya City",
  },
  {
    text: "The website perfectly streamlined our booking services for corporate travel, airport transfers, event transportation, and car rental solutions across India. The design and user experience exceeded our expectations.",
    name: "Sanjay",
    role: "CEO, CargenLogistics",
  },
  {
    text: "Working with the team was a great experience. They clearly understood my requirements and delivered excellent design and web solutions. I’m very happy with the outcome.",
    name: "Varun Gupta",
    role: "CEO, Digichain Pioneers",
  },

  {
    text: "They developed a beautiful and engaging website for our preschool that reflects our vision perfectly. The design is clean, parent-friendly, and gives a professional online presence.",
    name: "Bhavya Doshi",
    role: "Founder, Little Angels Preschool",
  },
  {
    text: "The website perfectly represents our IT solutions and sales business. Their team delivered a professional, fast, and user-friendly platform that showcases our laptop, desktop, networking, and servers effectively.",
    name: "Harish",
    role: "Founder, VHS TechSphere",
  },
  {
    text: "Professional, creative, and incredibly easy to work with. They brought our brand to life.",
    name: "Aanya R.",
    role: "Marketing Head, BloomSocial",
  },

  {
    text: "They nailed the user experience and aesthetics in one go.",
    name: "Tara V.",
    role: "Creative Director, HelloChai",
  },
];

const TestimonialCard = React.memo(({ item }) => (
  <div
    className={`relative
    w-[320px] md:w-[380px]
    min-h-[300px]
    flex-shrink-0
    rounded-2xl
    border border-purple-500/20
    bg-white/5
    backdrop-blur-xl
    p-5 md:p-6
    overflow-hidden
    cursor-pointer
    hover:bg-white/10
    transition-colors duration-300
    `}
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_40%)]" />

    {/* Dot Pattern */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[size:18px_18px]" />

    <div className="relative z-10 h-full flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={star}
              className="w-4 h-4 md:w-5 md:h-5"
              alt="star icon"
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          "{item.text}"
        </p>
      </div>

      {/* Bottom */}
      <div className="flex gap-4 items-center mt-8">
        {/* Optional Image */}
        {/* 
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        */}

        <div>
          <p className="text-white font-semibold text-base">{item.name}</p>

          <p className="text-sm text-gray-400">{item.role}</p>
        </div>
      </div>
    </div>
  </div>
));

const Testimonial1 = () => {
  const duplicatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    [],
  );

  return (
    <section className="relative glow-text py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-col gap-12 lg:gap-16 items-start">
        {/* Left Content */}
        <div className="w-full  lg:sticky lg:top-0">
          <p className="text-sm  mb-4">Testimonials</p>

          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight"
            style={{
              textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
            }}
          >
            Clients who believed. <br /> Results they received.
          </h2>
        </div>

        {/* Right Side */}
        {/* <div className="w-full lg:w-8/12 h-[400px] md:h-[500px] overflow-hidden flex gap-4 md:gap-6"> */}
        <div
          className=" flex gap-6 w-max"
          // className="w-full overflow-hidden py-6"
        >
          {/* Left Column */}
          <motion.div
            className="marquee flex gap-6 w-max"
            onMouseOver={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
            // animate={{
            //   x: ["0%", "-50%"],
            // }}
            // transition={{
            //   duration: 60,
            //   repeat: Infinity,
            //   ease: "linear",
            // }}
          >
            {/* {duplicatedTestimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))} */}

            {duplicatedTestimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </motion.div>

          {/* Right Column */}
          {/* <motion.div
            style={{ willChange: "transform" }}
            animate={{ y: ["-50%", "0%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col w-1/2 mt-8 md:mt-12"
          >
            {duplicatedTestimonials.map((item, index) => (
              <TestimonialCard key={`right-${index}`} item={item} />
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};
export default Testimonial1;
