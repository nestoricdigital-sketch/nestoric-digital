import { Link } from "react-router-dom";
//import footerBg from "./images/bg_footer.png";
// import instaLogo from "./images/icons/instaLogo.png";
// import faceLogo from "./images/icons/faceLogo.png";
// import twtLogo from "./images/icons/twtLogo.png";
// import youtubeLogo from "./images/icons/youtubeLogo.png";
// import liLogo from "./images/icons/lnkdLogo.png";
import instaLogo from "./images/icons/n_in.png";
import faceLogo from "./images/icons/n_fb.png";
import twtLogo from "./images/icons/n_x.png";
import youtubeLogo from "./images/icons/n_y.png";
import liLogo from "./images/icons/n_ig.png";

import emailLogo from "./images/icons/email.png";
import connect from "./images/heroSectionLogo/connect.webp";

// import deskfooter from "./images/footerDesktop.webp";
import deskfooter from "./images/footer.webp";
import footermb from "./images/footer_mb.jpg";

// import locLogo from "./images/icons/locationN.png";
import phoLogo from "./images/icons/phone.png";
// import upArrow from "./images/icons/upArrow.png";
import sideAr from "./images/sideArrow.png";

// import locationLogo from './images/icons/location.png';

// import test1 from './images/testi/test 3.png'
import { useModal } from "./modal/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer id='footer'
      className="
       footer-bg
    mt-2 mx-2 md:-mx-16 text-white rounded-2xl
    bg-no-repeat
    bg-[position:90%_10%]
    md:bg-center
    md:bg-cover           flex   p-2   flex-col items-center  justify-center 

  "
      style={{
        "--footer-desktop": `url(${deskfooter})`,
        "--footer-mobile": `url(${footermb})`,
      }}
    >
      {/* TOP SECTION */}
      <div className=" font-josefin max-w-7xl w-full mx-2 lg:mx-2 px-2 lg:px-10 pt-10">
        <div
          className="
   
    grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1.1fr]
    gap-5
  "
        >
          {/* CTA BLOCK */}
          <div className="max-w-[422px] lg:border-r lg:border-white/40">
            <h4 className="font-semibold opacity-50 mb-3 text-[#ffffff]">
              Reach Out Any Time
            </h4>

            <h2 className="text-3xl md:text-3xl font-light leading-tight">
              Ready to Automate Smarter?
            </h2>

            <div className="font-josefin mt-4  flex flex-wrap items-center gap-2 text-2xl sm:text-3xl">
              <span className="font-light">let’s</span>

              <span className="font-bold">Build</span>

              <span className="flex items-center gap-2">
                <img
                  src={connect}
                  alt="connect"
                  className="
            w-8 h-8
            sm:w-10 sm:h-10
            md:w-14 md:h-14
            lg:w-24 lg:h-16
            rounded-full
            object-cover
            animate-float-slow
          "
                />
              </span>
              <span className="font-bold">Together</span>
            </div>

            <p className="text-sm md:text-[16px] opacity-80 mt-3">
              Schedule a Call and Begin Automating
            </p>

            {/* <button
              className="mt-6 h-[48px] inline-flex items-center gap-2 bg-[#353535] text-white px-6 py-3 rounded-full hover:bg-black/80 transition"
              onClick={openModal}
            >
              Book A Free Call <span><img scr={sideAr} className=""/></span>
            </button> */}
            <button
              onClick={openModal}
              className="group mt-6 h-[48px] flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
                                       transition-all duration-300 shadow-lg shadow-slate-500/40
                                       cursor-pointer"
            >
              {/* Text slides left on hover */}
              <span className="mt-1 transform transition-transform duration-300 group-hover:-translate-x-2">
                Book A Free Call
              </span>

              {/* Arrow slides right on hover */}
              <img
                src={sideAr}
                className="w-7 h-7 p-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                alt="side arrow"
              />
            </button>
          </div>

          {/* BANGALORE */}
          <div className="max-w-[310px] mr-2">
            <h4 className="font-semibold opacity-50 mb-3">Bangalore</h4>
            <p className="text-[14px] md:text-[16px] lg:h-[95px] opacity-90  text-justify">
              786, 9th A Main Rd, Stage 2, Hoysala Nagar, Indiranagar,
              Bengaluru, Karnataka – 560038
            </p>

            <li className="flex gap-2 md:gap-3 mt-4">
              <img src={phoLogo} className="h-5 w-5" alt="phone" />
              <p>+91 63619 85560</p>
            </li>

            <Link
              to="https://maps.app.goo.gl/5UQn1SqHx24rzvRr5"
              target="_blank"
              className="text-sm underline underline-offset-4 mt-2 inline-block opacity-80"
            >
              Map View
            </Link>
          </div>

          {/* DELHI */}
          <div className="max-w-[350px]">
            <h4 className="font-semibold opacity-50 mb-3">Delhi</h4>
            <p className="text-[14px] md:text-[16px] lg:h-[95px] opacity-90 text-justify">
              Westend Marg Khasra, 275, Ground Floor, Westend Marg, Saidulajab,
              Saiyad Ul Ajaib Extension, Saket, New Delhi, Delhi - 110030
            </p>

            <li className="flex gap-2 md:gap-3 mt-4">
              <img src={phoLogo} className="h-5 w-5" alt="phone" />
              <p>+91 99990 96680</p>
            </li>

            <Link
              to="https://maps.app.goo.gl/zBsGcVpZwV5hDJ2w7"
              target="_blank"
              className="text-sm underline underline-offset-4 mt-2 inline-block opacity-80"
            >
              Map View
            </Link>
          </div>

          {/* EMAIL (Centered under Bangalore + Delhi) */}
          <div className="lg:col-start-2 lg:col-span-2 text-center mt-2 lg:mr-14 md:mt-0">
            <a
              href="mailto:info@nestoricdigital.com"
              className="text-xl opacity-90 hover:opacity-100"
            >
              <li className="flex gap-2 justify-center  md:gap-6">
                <img src={emailLogo} className="h-5 w-5 mt-1" alt="email" />
                <p>info@nestoricdigital.com</p>
              </li>
            </a>
          </div>

          {/* SOCIAL ICONS (Centered under Bangalore + Delhi) */}
          <div className="lg:col-start-2 lg:col-span-2 mt-4 flex md:justify-center justify-between lg:mr-0">
            <div className="flex w-full   justify-between sm:gap-10 md:gap-16 xl:gap-28">
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
          </div>
        </div>

        {/* SOCIAL ICONS */}
        {/* <div className="flex justify-center gap-6 mt-6">
        {["f", "x", "i", "in"].map((icon) => (
          <div
            key={icon}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 cursor-pointer"
          >
            {icon}
          </div>
        ))}
      </div> */}

        {/* BRAND NAME */}
        <div className="">
          <h1 className="hero-title text-center lg:h-[130px]  font-josefin font-bold text-[#7A4DBE] mt-9 lg:mt-24">
            Nestoric Digital
          </h1>
          <p className="text-end lg:mr-16 text-[14px] md:text-xl  mt-1 md:mt-8 text-[#868686]">
            Timeless Growth
          </p>
        </div>
        {/* <p className="text-start text-[#868686] text-[14px] md:text-[16px] opacity-80 md:text-center cursor-pointer">
            Back to top
          </p> */}
        {/* <div
          className="relative flex gap-3 justify-end items-center mt-4 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        
          <div
            className="
      absolute bottom-full right-0 mb-3
      opacity-0 group-hover:opacity-100
      transition duration-300
      pointer-events-none
    "
          >
            <div className="relative rounded px-3 py-1 text-xs text-black">
              Scroll to top
              <span
                className="
          absolute right-3 top-full
          h-2 w-2 rotate-45
        "
              ></span>
            </div>
          </div>

         
          <img
            src={upArrow}
            className="animate-float-slow w-4 h-4 md:w-[16px] md:h-[16px]"
            alt="Scroll to top"
          />
        </div> */}

        {/* BOTTOM BAR */}
        <div className="border-t border-black/10 mt-10">
          <div className="max-w-8xl mx-auto px-0 py-6 flex flex-col md:flex-row justify-between items-start text-sm text-[#565656]">
            {/* LEFT: COPYRIGHT */}
            <p className="mb-4 md:mb-0">
              © 2025 Nestoric Digital. All rights reserved.
            </p>

            {/* RIGHT: COMPANY + LEGALS */}
            <div className="flex flex-col items-start md:items-end">
              {/* COMPANY ROW */}
              <div className="flex gap-5 items-center">
                <p className="font-semibold">Company</p>
                <Link to="/work" className="hover:text-gray-500">
                  Work
                </Link>
                <Link to="/about" className="hover:text-gray-500">
                  About
                </Link>
                <Link to="/services" className="hover:text-gray-500">
                  Services
                </Link>
                <Link to="/blog" className="hover:text-gray-500">
                  Blog
                </Link>
              </div>

              {/* LEGALS BELOW */}
              <div className="flex gap-5 mt-3">
                <p className="font-semibold">Legals</p>
                <Link to="/privacy-policy" className="hover:text-gray-500">
                  Privacy Policy
                </Link>
                <Link to="#" className="hover:text-gray-500">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
