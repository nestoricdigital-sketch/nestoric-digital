import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import webLogo from "../images/mainNDlogo.png";
import sideAr from "../images/sideArrow.png";

const NavBar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];
  // moe to form
  const moveToForm = (id) => {
    if (id === "footer") {
      if (true) {
        // Same route → scroll directly
        // document
        //   .getElementById("downform")
        //   ?.scrollIntoView({ behavior: "smooth" });

        //
        const section = document.getElementById("footer");
        if (!section) return;

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Different route → navigate with state
        navigate("/about", { state: { scrollTo: "footer" } });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50  px-0 md:px-0 py-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={webLogo}
            alt="nestoric digital logo"
            className="w-32 md:w-40 lg:w-52 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-stone-50 font-light">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition text-[18px] hover:text-white ${
                location.pathname === link.path ? "text-white font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <button
            onClick={() => moveToForm("footer")}
            className="group flex items-center bg-[#7a4dbe] text-white px-5 py-[6px] rounded-full transition-all duration-300"
          >
            <span className="text-[18px] transition-transform duration-300 group-hover:-translate-x-2">
              Contact
            </span>
            <img
              src={sideAr}
              className="w-5 h-5 ml-2 mt-1 transition-transform duration-300 group-hover:translate-x-2"
              alt="arrow"
            />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition hover:text-white ${
                location.pathname === link.path ? "text-white font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            // onClick={() => moveToForm("footer")}

            onClick={() => {
              setIsOpen(false);
              moveToForm("footer");
            }}
            className="group flex items-center bg-[#7a4dbe] text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              Contact
            </span>
            <img
              src={sideAr}
              className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-2"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;

// <nav className="relative  bg-black z-10 flex items-center justify-between px-6 md:px-16 py-6">
//   {/* Logo */}
//   <div className="flex items-center gap-2">
//     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
//       N
//     </div>
//     <span className="text-lg font-semibold tracking-wide">
//       Nestoric Digital
//     </span>
//   </div>

//   {/* Nav Links */}
//   <div className="hidden md:flex items-center gap-8 text-gray-300">
//     <a href="#" className="hover:text-white transition">
//       Work
//     </a>
//     <a href="#" className="hover:text-white transition">
//       Services
//     </a>
//     <a href="#" className="hover:text-white transition">
//       Blog
//     </a>
//     <a href="#" className="hover:text-white transition">
//       About
//     </a>

//     <button className="ml-4 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
//       Contact →
//     </button>
//   </div>
// </nav>
