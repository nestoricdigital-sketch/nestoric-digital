import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

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
          transition       animate-border
      [background:linear-gradient(45deg,#050505,#0a0a0a_50%,#050505)_padding-box,conic-gradient(from_var(--border-angle),rgba(168,85,247,0.15)_80%,#a855f7_86%,#c084fc_90%,#a855f7_94%,rgba(168,85,247,0.15))_border-box]
        "
          >
            <div className="flex items-start h-[40px] sm:h-[48px] md:h-[56px] ">
              {/* <img
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
              /> */}
              {item.logo ? (
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
      md:max-w-[190px]
      object-contain
      scale-105
    "
                />
              ) : (
                <span
                  className="
      text-2xl
    
      md:text-3xl
      font-bold
      text-white
      whitespace-nowrap
    "
                >
                  {item.name}
                </span>
              )}
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
export default LogoMarquee;
