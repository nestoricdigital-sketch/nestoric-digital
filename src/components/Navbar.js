import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import webLogo from './images/NdMainLogo.png'
import webLogo from "./images/mainNDlogo.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const links = ["Work", "Services", "Blog", "About"];
  const navigate = useNavigate();
  const location = useLocation();

  // const moveToForm = () => {
  //   if (location.pathname === "/about") {
  //     const form = document.getElementById("form");
  //     if (!form) return;

  //     const y = form.getBoundingClientRect().top + window.scrollY;
  //     window.__smoothScrollTo?.(y);
  //   } else {
  //     navigate("/about", {
  //       state: { scrollTo: "form" },
  //     });
  //   }
  // };
  const moveToForm = (id) => {
    if (id === "footer") {
      if (location.pathname === "/about") {
        // Same route → scroll directly
        // document
        //   .getElementById("downform")
        //   ?.scrollIntoView({ behavior: "smooth" });

        //
        const section = document.getElementById("footer");
        if (!section) return;

        const y = section.getBoundingClientRect().top + window.scrollY;

        window.__smoothScrollTo?.(y);
      } else {
        // Different route → navigate with state
        navigate("/about", { state: { scrollTo: "footer" } });
      }
    }
  };

  return (
    <nav className=" font-inter w-full bg-white text-black  z-50">
      <div className="flex justify-between items-center px-4 md:px-2 py-4 gap-4">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img
              // loading="lazy"
              src={webLogo}
              alt="nestoric digital logo"
              className="w-28 h-auto sm:w-28 md:w-34 lg:w-56 object-contain"
            />
          </Link>
        </div>

        {/* Nav */}
        <ul className="hidden md:flex space-x-8 font-medium justify-center">
          {links.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              end
            >
              {item}
              <span className="underline"></span>
            </NavLink>
          ))}
        </ul>

        {/* Button */}
        <div className="flex-1 flex justify-end">
          <button
            className="hidden md:block bg-[#353535] text-white px-5 py-2 rounded-full shadow-lg shadow-slate-500/40"
            onClick={() => moveToForm("footer")}
          >
            Contact
          </button>
          <button
            className="relative md:hidden w-8 h-8 focus:outline-none text-slate-800"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {/* Hamburger (behind) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`absolute inset-0 m-auto h-7 w-7 transform transition-all duration-700 ease-in-out
          ${
            menuOpen
              ? "opacity-0 -rotate-45 scale-75"
              : "opacity-100 rotate-0 scale-100"
          }`}
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Close X (front) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`absolute inset-0 m-auto h-7 w-7 transform transition-all duration-700 ease-in-out
          ${
            menuOpen
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-75"
          }`}
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* Mobile Dropdown Menu (kept in DOM so transitions run) */}
      <div
        className={`md:hidden bg-slate-100 shadow-inner overflow-hidden transition-all duration-700 ease-in-out
    ${menuOpen ? "max-h-[600px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
          {links.map((item, idx) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={toggleMenu}
              className={`relative block cursor-pointer transition-all duration-500 ease-out
          ${
            menuOpen
              ? "translate-y-0 opacity-100 delay-75"
              : "translate-y-3 opacity-0"
          }`}
              style={{ transitionDelay: `${idx * 40}ms` }} // stagger
            >
              <span className="inline-block px-4">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <button
            className={` bg-[#353535] shadow-lg shadow-slate-500/40 text-white px-5 py-2 rounded-full transition-colors duration-300
        ${menuOpen ? "opacity-100  translate-y-0" : "opacity-0 translate-y-2"}`}
            onClick={() => moveToForm("footer")}
          >
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
