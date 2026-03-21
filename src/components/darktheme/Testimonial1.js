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
    text: "We’ve seen a 35% increase in engagement since the revamp!",
    name: "Sanjay",
    role: "CEO, CargenLogistics",
  },
  {
    text: "They nailed the user experience and aesthetics in one go.",
    name: "Riya",
    role: "CEO, Digital Tech",
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
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 mb-4 md:mb-6 w-full">
    {/* Stars */}
    <div className="flex gap-1 mb-3 md:mb-4 text-white">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={star}
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          alt="star icon"
        />
      ))}
    </div>

    {/* Text */}
    <p className="text-xs sm:text-sm md:text-sm w-full text-gray-300 leading-relaxed mb-4 md:mb-6">
      "{item.text}"
    </p>

    {/* Profile */}
    <div className="flex gap-3 sm:gap-4 items-center">
      {/* <img
        src="https://i.pravatar.cc/100?img=3"
        alt="profile"
        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover"
      /> */}

      <div>
        <p className="text-sm sm:text-base font-semibold">{item.name}</p>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          {item.role}
        </p>
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
    <section className="relative text-white py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Content */}
        <div className="w-full lg:w-4/12 lg:sticky lg:top-32">
          <p className="text-sm text-stone-50 mb-4">Testimonials</p>

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
        <div className="w-full lg:w-8/12 h-[400px] md:h-[500px] overflow-hidden flex gap-4 md:gap-6">
          {/* Left Column */}
          <motion.div
            style={{ willChange: "transform" }}
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col w-1/2"
          >
            {duplicatedTestimonials.map((item, index) => (
              <TestimonialCard key={`left-${index}`} item={item} />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial1;
