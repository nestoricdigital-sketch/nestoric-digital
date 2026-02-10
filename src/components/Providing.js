import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
// import scrollingText from "./assets/test_scroll.json";
import scrollingText from "./assets/blackFlow3.json";

// import scroll from "./assets/scroll.json";
import scroll from "./assets/textFlow.json";

import webLogo from "./images/providingLogos/website.png";
import interfaceLogo from "./images/providingLogos/interface.png";
import logo from "./images/providingLogos/logo.png";
import markLogo from "./images/providingLogos/marketing.png";
import strLogo from "./images/providingLogos/strategy.png";
import brandLogo from "./images/providingLogos/branding.png";

export default function Providing() {
  const text =
    "We partner with ambitious digital startups to build sharper brands and websites — with clarity, speed, and zero hassle.";
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
  const unrevealed = { r: 102, g: 102, b: 102 };
  const revealedColor = { r: 0, g: 0, b: 0 };

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
    <>
      <div
        id="text-scale"
        className=" provide md:mt-0 md:-mx-20 relative flex flex-col items-center content-center  md:min-h-[16rem] my-28  bg-white"
        // style={{ 'overflow-x': 'hidden'}}
      >
        {/* First Scrolling Text black */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 
      
        w-[101vw]
          rotate-[-8deg]"
        >
          <Lottie
            animationData={scrollingText}
            lottieRef={lottieRef}
            loop
            autoplay
          />
        </div>

        {/* Second Scrolling Text pink */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 
        w-[101vw] rotate-[8deg]"
        >
          <Lottie animationData={scroll} lottieRef={lottieRef2} loop autoplay />
        </div>
      </div>
      <section
        ref={sectionRef}
        className=" md:min-h-[70vh] my-16  lg:min-h-[10vh]  font-inter  text-center  bg-white px-2 md:px-0 "
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
                }}
              >
                {/* {char} */}
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </h1>

        {/* Buttons */}
        <div className="flex mt-[20px] md:mt-[70px] justify-center w-full">
          <div className="flex flex-wrap justify-center gap-4 max-w-md">
            {[
              { label: "Logo", icon: logo },
              { label: "Website", icon: webLogo },
              { label: "Branding", icon: brandLogo },
              { label: "Interface", icon: interfaceLogo },
              { label: "Strategy", icon: strLogo },
              { label: "Marketing", icon: markLogo },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="flex  px-4 py-2  bg-[#353535] hover:opacity-60 shadow-lg shadow-slate-500/40 text-white rounded-full text-sm  transition"
              >
                <img src={icon} alt={label} className="w-5 h-5 p-1" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
