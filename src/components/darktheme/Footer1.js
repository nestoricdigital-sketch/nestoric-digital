import React from "react";
import Orb from "./Orb";
import { Link } from "react-router-dom";
import instaLogo from "../images/icons/n_in.png";
import faceLogo from "../images/icons/n_fb.png";
import twtLogo from "../images/icons/n_x.png";
import youtubeLogo from "../images/icons/n_y.png";
// import liLogo from "./images/icons/n_ig.png";
import liLogo from "../images/icons/n_ig.png";
import phoLogo from "../images/icons/phone.png";

// import { Phone, Mail } from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

const Footer1 = () => {
  return (
    <footer
      id="footer"
      className="relative  lg:h-[649px] text-white lg:pt-[5rem] pb-12 overflow-hidden"
    >
      {/* Purple Arc Glow */}
      {/* <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-600 rounded-full blur-[180px] opacity-40"></div> */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <div
          className="
            relative
            w-[260vw]
            h-[260vw]
            -top-[130vw]

            min-[375px]:w-[220vw]
            min-[375px]:h-[220vw]
            min-[375px]:-top-[110vw]

            min-[414px]:w-[190vw]
            min-[414px]:h-[200vw]
            min-[414px]:-top-[95vw]

            
            lg:w-[190vw]
            lg:h-[200vw]
            lg:scale-x-150
            max-w-none
            lg:-mb-[140vw]
            
          
            "
        >
          {/*  // lg:-top-[95vw] h-[200vw] max-w-none mb-[120vw] -px-[90px] */}
          <Orb
            hue={0}
            hoverIntensity={0}
            rotateOnHover
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl px-4 lg:px-10 mx-auto flex flex-col h-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-1 justify-between">
          {/* Locations */}
          <div className="text-stone-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 lg:gap-10 lg:w-6/12">
            {/* Bangalore */}
            <div className="font-geist font-light">
              <h4 className=" mb-4">Bangalore</h4>
              <p className="text-sm  leading-relaxed mb-4">
                786, 9th A Main Rd, Stage 2, Hoysala Nagar,
                <br />
                Indiranagar, Bengaluru, Karnataka - 560038
              </p>

              <div className="flex items-center gap-3 text-sm mb-2">
                {/* <Phone size={16} /> */}
                <img src={phoLogo} className="h-5 w-5" alt="phone" />
                +91 63619 85560
              </div>

              <Link
                to="https://maps.app.goo.gl/5UQn1SqHx24rzvRr5"
                target="_blank"
                className="text-sm underline underline-offset-4 mt-2 inline-block opacity-80"
              >
                Map View
              </Link>
            </div>

            {/* Delhi */}
            <div className="font-light">
              <h4 className=" mb-4">Delhi</h4>
              <p className="text-sm  leading-relaxed mb-4">
                Westend Marg Khasra, 275, Ground Floor,
                <br />
                Saidulajab, Saket, New Delhi - 110030
              </p>

              <div className="flex items-center gap-3 text-sm mb-2">
                {/* <Phone size={16} /> */}
                <img src={phoLogo} className="h-5 w-5" alt="phone" />
                +91 99864 59376
              </div>

              <Link
                to="https://maps.app.goo.gl/zBsGcVpZwV5hDJ2w7"
                target="_blank"
                className="text-sm underline underline-offset-4 mt-2 inline-block opacity-80"
              >
                Map View
              </Link>
            </div>
            <div className="font-light">
              <h4 className=" mb-4">Mumbai</h4>
              <p className="text-sm leading-relaxed mb-4">
                Andheri East , mumbai, Maharashtra - 400093
              </p>

              <div className="flex items-center gap-3 text-sm mb-2">
                {/* <Phone size={16} /> */}
                <img src={phoLogo} className="h-5 w-5" alt="phone" />
                +91 9986459376
              </div>
            </div>
          </div>

          {/* Brand + Social */}
          <div className="flex flex-col items-start lg:items-end">
            <h2 className="font-josefin text-3xl md:text-6xl font-bold  mb-0">
              Nestoric Digital
            </h2>

            <p className="text-[10px] text-gray-400 mb-3">Timeless Growth</p>

            <div className="flex items-center gap-4 mb-3 mt-3">
              {/* <Mail size={16} /> */}
              <span className="text-sm">info@nestoricdigital.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-300 mt-3">
              <div className="flex w-full   justify-center gap-4 md:gap-6 xl:gap-12">
                <Link
                  to="https://facebook.com/61581184183440/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={faceLogo}
                    alt="Facebook"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  />
                </Link>

                <Link
                  to="https://www.instagram.com/nestoricdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={liLogo}
                    alt="Instagram"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  />
                </Link>

                <Link
                  to="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={instaLogo}
                    alt="LinkedIn"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  />
                </Link>

                <Link
                  to="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={youtubeLogo}
                    alt="YouTube"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  />
                </Link>

                <Link
                  to="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={twtLogo}
                    alt="Twitter"
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  />
                </Link>
              </div>
              {/* <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" /> */}
            </div>
          </div>
        </div>

        <div
          className="mt-6 w-full px-0  md:px-0 py-2  md:py-6 
                flex flex-col md:flex-row 
                justify-between items-start md:items-end 
                gap-6 text-sm font-thin"
        >
          {/* LEFT */}
          <p className="w-full md:w-auto">
            © 2026 Nestoric Digital. All rights reserved.
          </p>

          {/* RIGHT */}
          <div
            className="w-full md:w-auto 
                  flex flex-col md:items-end gap-4"
          >
            {/* Company Row */}
            <div className="flex flex-wrap gap-5 items-center">
              <p className="font-semibold text-white">Company</p>
              <Link to="/work" className="hover:text-gray-400 transition">
                Work
              </Link>
              <Link to="/about" className="hover:text-gray-400 transition">
                About
              </Link>
              <Link to="/services" className="hover:text-gray-400 transition">
                Services
              </Link>
              <Link to="/blog" className="hover:text-gray-400 transition">
                Blog
              </Link>
            </div>

            {/* Legal Row */}
            <div className="flex flex-wrap gap-5">
              <p className="font-semibold text-white">Legals</p>
              <Link
                to="/privacy-policy"
                className="hover:text-gray-400 transition"
              >
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-gray-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
