import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ from = 0, to, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

const Numbers1 = () => {
  return (
    <section className=" max-w-9xl mx-auto px-4 lg:px-8 py-12  relative text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-[#7a4dbe]/30 blur-[160px] rounded-full"></div>

      <div className="relative z-10 mt-10 ">
        {/* Top Section */}
        {/* <div className="flex flex-col md:flex-row md:items-end  md:justify-between mb-16 gap-6">
          <div>
            <p className="text-base tracking-widest text-[#C2C2C2] uppercase mb-4">
              Firm Highlights
            </p>
            <h2 className="text-3xl md:text-5xl font-light">The Numbers</h2>
          </div>

          <p className="text-[#E0E0E0] max-w-sm text-sm md:text-base">
            We’re a network-powered VC growing and supporting the startup
            ecosystem
          </p>
        </div> */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-16">
          {/* Left Side */}
          <div className="flex flex-col justify-end">
            <p className="text-base tracking-widest text-stone-50 font-light uppercase mb-4">
              Firm Highlights
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              The Numbers
            </h2>
          </div>

          {/* Right Side */}
          <div className="md:self-end lg:w-[350px]">
            <p className="text-stone-50 font-light max-w-sm text-sm md:text-base">
              We’re a network-powered VC growing and supporting the startup
              ecosystem
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center md:text-left">
          {/* Projects */}
          <div className=" text-center">
            <h3
              className="text-5xl md:text-[100px] font-geist"
              style={{
                textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
              }}
            >
              <Counter from={0} to={26} suffix="+" />
            </h3>
            <p className="mt-4 text-[13px] text-stone-50 font-light tracking-widest  uppercase">
              Completed Projects
            </p>
          </div>

          {/* Happy Clients */}
          <div className=" text-center">
            <h3
              className="text-5xl md:text-[100px] font-geist"
              style={{
                textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
              }}
            >
              <Counter from={0} to={96} suffix="%" />
            </h3>
            <p className="mt-4 text-[13px] text-[#c2c2c2] tracking-widest uppercase">
              Happy Clients
            </p>
          </div>

          {/* Success Rate */}
          <div className=" text-center">
            <h3
              className="text-5xl md:text-[100px] font-geist"
              style={{
                textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
              }}
            >
              <Counter from={0} to={97} suffix="%" />
            </h3>
            <p className="mt-4 text-[13px] text-[#c2c2c2] tracking-widest  uppercase">
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers1;
