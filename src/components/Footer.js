import { Link } from "react-router-dom";
//import footerBg from "./images/bg_footer.png";
import instaLogo from "./images/icons/instaLogo.png";
import faceLogo from "./images/icons/faceLogo.png";
import twtLogo from "./images/icons/twtLogo.png";
import emailLogo from "./images/icons/email.png";

import youtubeLogo from "./images/icons/youtubeLogo.png";
import liLogo from "./images/icons/lnkdLogo.png";

import deskfooter from "./images/footerDesktop.png";
import locLogo from "./images/icons/locationN.png";
import phoLogo from "./images/icons/phone.png";
import upArrow from "./images/icons/upArrow.png";
// import locationLogo from './images/icons/location.png';

// import test1 from './images/testi/test 3.png'
export default function Footer() {
  return (
    <footer
      className="mt-40 -mx-2 md:-mx-20   relative  min-h-[830px] text-gray-300 
   md:bg-footer-bg md:bg-cover md:bg-start
    md:bg-no-repeat "
      style={{
        backgroundImage: `url(${deskfooter})`,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0"></div>

      {/* === MAIN CONTENT === */}

      <div className="relative flex flex-col items-center justify-between px-6 md:px-2 py-12 md:pt-28 text-slate-600 md:text-white">
        {/* ==== Top Section ==== */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap justify-between gap-8 md:gap-2 text-center z-10">
          <div className="flex-1  max-w-[300px] justify-start text-start ">
            <h3 className="text-[18px] font-semibold mb-2 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-4 text-[16px]  font-light">
              <li className="">
                <Link to="/work" className="hover:text-white ">
                  Work
                </Link>
              </li>
              <li className="">
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li className="">
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li className="">
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div className="flex-1  max-w-[300px] text-start ">
            <h3 className=" font-semibold mb-2 md:mb-6 text-[18px]">Legals</h3>
            <ul className="space-y-2 md:space-y-4  text-[16px] font-light">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1  max-w-[300px]  justify-start text-start ">
            <h3 className="text-[18px] font-semibold mb-2 md:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-2 md:space-y-4  text-[16px] font-light ">
              <li className="flex gap-2  md:gap-6">
                <img src={phoLogo} className="h-5 w-5" alt="phone" />
                <p>+91 6361985560</p>
              </li>
              <li className="flex gap-2  md:gap-6">
                <img src={emailLogo} className="h-5 w-5" alt="location" />
                <p>info@nestoricdigital.com</p>
              </li>
              <li className="flex gap-2  md:gap-6">
                <img src={locLogo} className="h-5 w-5" alt="location" />
                <p>
                  786, 9th A Main Rd, Stage 2, Hoysala Nagar, Indiranagar,
                  Bengaluru, Karnataka - 560038
                </p>
              </li>
            </ul>
          </div>

          {/* Socials */}
          {/* <div className="flex-1 max-w-[180px] text-start ml-1 lg:ml-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-start md:text-left">Socials</h3>
        <div className="flex flex-wrap md:justify-start gap-0">
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
          >
            <img src={instaLogo} alt="Instagram" className="h-5 w-5 md:h-7 md:w-7" />
          </Link>

          <Link
            to="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
          >
            <img src={youtubeLogo} alt="YouTube" className="h-5 w-5 md:h-7 md:w-7" />
          </Link>

          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
          >
            <img src={faceLogo} alt="Facebook" className="h-5 w-5 md:h-7 md:w-7" />
          </Link>

          <Link
            to="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
          >
            <img src={twtLogo} alt="X (Twitter)" className="h-5 w-5 md:h-7 md:w-7" />
          </Link>
        </div>
      </div> */}
        </div>
        <div className="flex-1 justify-center text-start mt-20">
          {/* <h3 className="text-lg md:text-xl font-semibold mb-2 text-start md:text-left">Socials</h3> */}
          <div className="flex flex-wrap md:justify-start gap-8 md:gap-10 ">
            <Link
              to="https://facebook.com/61581184183440/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
            >
              <img
                src={faceLogo}
                alt="Facebook"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </Link>

            <Link
              to="https://www.instagram.com/nestoricdigital?igsh=dGQxczhxN2N2Z2lh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
            >
              <img
                src={instaLogo}
                alt="Instagram"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </Link>

            <Link
              to="https://www.linkedin.com/in/nestoric-digital-46496638a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
            >
              <img
                src={liLogo}
                alt="linkedin logo"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </Link>

            <Link
              to="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
            >
              <img
                src={youtubeLogo}
                alt="YouTube"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </Link>

            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white text-gray-300 transition-transform duration-200 hover:scale-110"
            >
              <img
                src={twtLogo}
                alt="X (Twitter)"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </Link>
          </div>
        </div>

        {/* ==== Bottom Section ==== */}
        <div
          className="flex  flex-col md:flex-row w-full mt-16  md:text-slate-800  gap-3 md:gap-6 md:px-20 
  items-start md:items-center justify-start md:justify-between"
        >
          {/* Left text */}
          <p className="text-start text-sm md:text-[16px] opacity-80">
            ©2025 Nestoric Digital. All rights reserved.
          </p>

          {/* Middle text with icon */}
          {/* <p className="flex items-center justify-start md:justify-center gap-2 text-start text-sm opacity-80">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90">
      <img src={locationLogo} alt="location" className="w-4 h-4" />
    </span>
            Bangalore
          </p> */}

          {/* Right text */}
          <div
            className="flex gap-3 justify-center items-center"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <p className="text-start text-[14px] md:text-[16px] opacity-80 md:text-center cursor-pointer">
              Back to top
            </p>

            <img
              src={upArrow}
              className="w-4 h-4 md:w-[16px] md:h-[16px] cursor-pointer"
              alt="uparrow"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
