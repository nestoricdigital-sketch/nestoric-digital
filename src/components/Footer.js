
import { Link } from "react-router-dom";
//import footerBg from "./images/bg_footer.png";
import instaLogo from "./images/icons/instaLogo.png";
import faceLogo from "./images/icons/faceLogo.png";
import twtLogo from "./images/icons/twtLogo.png";
import youtubeLogo from "./images/icons/youtubeLogo.png";
import deskfooter from './images/footerDesktop.png'
// import locationLogo from './images/icons/location.png';

// import test1 from './images/testi/test 3.png'
export default function Footer() {
  return (
<footer
  className="mt-40 mx-2 md:mx-4  relative  min-h-[800px] text-gray-300 
   md:bg-footer-bg md:bg-cover md:bg-start
    md:bg-no-repeat rounded-[16px]"
  style={{
    backgroundImage: `url(${deskfooter})`,
    // backgroundSize: "cover",
   backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for contrast */}
  <div className="absolute inset-0"></div>

  {/* === MAIN CONTENT === */}
   
  <div className="relative flex flex-col items-center justify-between px-6 md:px-2 py-12 md:pt-28 text-slate-600 md:text-white">
    {/* ==== Top Section ==== */}
    <div className="w-full max-w-4xl flex flex-col md:flex-row md:flex-wrap justify-between gap-8 md:gap-2 text-center z-10">
      {/* Company */}
      <div className="flex-1 text-xs max-w-[200px] justify-center text-start ml-1 lg:ml-6">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-2 text-sm ">
          <li><Link to="/work" className="hover:text-white">Work</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
        </ul>
      </div>

      {/* Legals */}
      <div className="flex-1 text-xs max-w-[200px] text-start ml-1 lg:ml-6">
        <h3 className="text-lg font-semibold mb-2">Legals</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="flex-1 text-xs max-w-[200px] text-start ml-1 lg:ml-6">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <ul className="space-y-2 text-sm">
          <li><p>+91 6361985560</p></li>
          <li>
            <p>
              786, 9th A Main Rd, Stage 2, Hoysala Nagar, Indiranagar,
              Bengaluru, Karnataka - 566038
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
        <div className="flex flex-wrap md:justify-start gap-10 ">
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
      </div> 

    {/* ==== Bottom Section ==== */}
  <div className="flex  flex-col md:flex-row w-full mt-16  md:text-slate-800  gap-3 md:gap-0 
  items-start md:items-center justify-start md:justify-around">
  
  {/* Left text */}
  <p className="text-start text-sm opacity-80">
    ©2025 Nestoric Digital. All rights reserved.
  </p>

  {/* Middle text with icon */}
  <p className="flex items-center justify-start md:justify-center gap-2 text-start text-sm opacity-80">
    {/* <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90">
      <img src={locationLogo} alt="location" className="w-4 h-4" />
    </span> */}
    Bangalore
  </p>

  {/* Right text */}
  <p className="text-start text-sm opacity-80 md:text-center">
    Back to top
  </p>
</div>



  </div>
</footer>


  );
}
