import React, { useRef, useState, useEffect } from "react";
// import circle from "../images/nd_circle.webp";
// import circle from "../../images/nd_circle.webp";
import circle from "./../darktheme/images/nd_circle.webp";

const Statement1 = () => {
  const text =
    "We partner with ambitious digital startups to build sharper brands and websites      with clarity, speed, and zero hassle.";
  const sectionRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      // TUNE THESE: control when reveal starts/ends (fractions of viewport)
      // startOffsetFactor: fraction of viewport height at which the reveal STARTS (near bottom)
      // endOffsetFactor: fraction of viewport height at which the reveal ENDS (higher on the screen)
      const startOffsetFactor = 0.95; // start when section top is near bottom of viewport
      const endOffsetFactor = 0.25; // finish reveal when section top has moved up to 25% of viewport

      const start = winH * startOffsetFactor;
      const end = winH * endOffsetFactor;

      // progress ranges from 0 -> 1 while rect.top moves from `start` -> `end`
      const raw = (start - rect.top) / (start - end);
      const progress = Math.min(Math.max(raw, 0), 1);

      // Map progress to number of revealed letters
      const totalLetters = text.length;
      const revealed = Math.floor(progress * totalLetters);

      setRevealedCount(revealed);
    };

    // run once to initialize
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text]);

  // Colors: not-revealed = black, revealed = #666666
  const unrevealed = { r: 220, g: 220, b: 220 };
  const revealedColor = { r: 100, g: 100, b: 100 };

  // scroll-down
  const lottieRef = useRef();
  const lottieRef2 = useRef();

  useEffect(() => {
    if (lottieRef.current || lottieRef2.current) {
      // Slow down animation
      lottieRef.current.setSpeed(0.4); // try 0.2 / 0.15 / 0.1
      lottieRef2.current.setSpeed(0.4);
    }
  }, []);

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Center Background Image */}
      <div
        className="absolute top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-1/2
             w-[800px] h-[800px] 
             md:w-[1200px] md:h-[1200px]
             bg-center bg-no-repeat bg-contain
             pointer-events-none"
        style={{ backgroundImage: `url(${circle})` }}
      />
      <section
        ref={sectionRef}
        className=" md:min-h-[70vh] my-16  lg:min-h-[10vh]  font-inter  text-center  px-2 md:px-0 "
      >
        <h1
          className="text-2xl md:text-5xl font-semibold  leading-relaxed  md:leading-[3.9rem] max-w-5xl md:px-6 mx-auto"
          style={{ whiteSpace: "normal", wordBreak: "break-word" }}
        >
          {text.split("").map((char, i) => {
            // decide if this character is revealed
            const isRevealed = i < revealedCount;

            const color = isRevealed
              ? `rgb(${revealedColor.r}, ${revealedColor.g}, ${revealedColor.b})`
              : `rgb(${unrevealed.r}, ${unrevealed.g}, ${unrevealed.b})`;

            return (
              <span
                key={i}
                style={{
                  color,
                  transition: "color 300ms linear", // short smooth transition on each letter
                  whiteSpace: "normal", // preserve spaces exactly
                  textShadow: isRevealed
                    ? `
            0 0 8px rgba(255,255,255,0.18),
            0 0 16px rgba(255,255,255,0.08)
          `
                    : "none",
                }}
              >
                {/* {char} */}
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </h1>
      </section>

      {/* <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-[48px] leading-relaxed md:leading-snug">
          <span className="text-[#8D8D8D]">We partner with</span>{" "}
          <span className="text-white">ambitious digital startups</span>{" "}
          <span className="text-white">
            to build sharper brands and websites — with clarity, speed, and zero
            hassle.
          </span>
        </h2>
      </div> */}
    </section>
  );
};

export default Statement1;
