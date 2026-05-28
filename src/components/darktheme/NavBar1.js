import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import webLogo from "../images/mainNDlogo.png";
import sideAr from "../images/sideArrow.png";

const NavBar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Work", path: "/work" },
    {
      name: "Services",
      path: "/services",
      subLinks: [
        {
          name: "SEO",
          path: "/services/seo",
        },
        {
          name: "Website Development",
          path: "/services/website-development",
        },
        {
          name: "Mobile App Development",
          path: "/services/mobile-app-development",
        },
        {
          name: "Social Media Marketing",
          path: "/services/social-media-marketing",
        },
        {
          name: "Content Development",
          path: "/services/content-development",
        },
        {
          name: "Performance Marketing",
          path: "/services/performance-marketing",
        },
        {
          name: "Online Reputation Management",
          path: "/services/online-reputation-management",
        },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];
  // moe to form
  // const moveToForm = (id) => {
  //   if (id === "footer") {
  //     if (true) {
  //       // Same route → scroll directly
  //       // document
  //       //   .getElementById("downform")
  //       //   ?.scrollIntoView({ behavior: "smooth" });

  //       //
  //       const section = document.getElementById("footer");
  //       if (!section) return;

  //       section.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     } else {
  //       // Different route → navigate with state
  //       navigate("/about", { state: { scrollTo: "footer" } });
  //     }
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50  px-0 md:px-0 py-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={webLogo}
            alt="nestoric digital logo"
            className="w-32 md:w-40 lg:w-52 object-contain  md:scale-110"
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="hidden md:flex items-center gap-8 text-stone-50 font-light"
          style={{
            textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
          }}
        >
          {/* {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition text-[18px] hover:text-white ${
                location.pathname === link.path ? " font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
            
          ))} */}
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {/* NORMAL NAV LINK */}
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition hover:text-white ${
                  location.pathname === link.path
                    ? "text-white font-medium"
                    : ""
                }`}
              >
                {link.name}
              </Link>

              {/* DROPDOWN */}
              {link.subLinks && (
                <div className="absolute left-0 top-full hidden min-w-[260px] rounded-xl bg-black p-4 group-hover:block">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base transition hover:bg-white/10 ${
                        location.pathname === subLink.path
                          ? "text-white font-medium"
                          : "text-gray-300"
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact Button */}
          <Link to="/contact">
            <button
              // onClick={() => moveToForm("footer")}
              className="group flex items-center bg-[#7a4dbe]  px-5 py-[6px] rounded-full transition-all duration-300"
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
          </Link>
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
      {/* Mobile Menu */}
      <div
        className={`
    md:hidden
    bg-black
    transition-all
    duration-500
    overflow-hidden

    ${isOpen ? "max-h-[1000px] py-6" : "max-h-0"}
  `}
      >
        <div className="flex flex-col gap-2 text-gray-300 px-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              {/* MAIN LINK */}
              <div
                className="
            flex
            items-center
            justify-between
          "
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
              text-lg
              py-3
              transition
              hover:text-white

              ${location.pathname === link.path ? "text-white font-medium" : ""}
            `}
                >
                  {link.name}
                </Link>

                {/* DROPDOWN TOGGLE */}
                {link.subLinks && (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name,
                      )
                    }
                    className="
                text-white
                text-xl
                px-2
              "
                  >
                    {openDropdown === link.name ? "−" : "+"}
                  </button>
                )}
              </div>

              {/* SUB LINKS */}
              {link.subLinks && (
                <div
                  className={`
              overflow-hidden
              transition-all
              duration-300

              ${
                openDropdown === link.name
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
                >
                  <div className="pl-4 pb-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={`
                      block
                      py-3
                      text-base
                      transition
                      hover:text-white

                      ${
                        location.pathname === subLink.path
                          ? "text-white font-medium"
                          : "text-gray-400"
                      }
                    `}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CONTACT BUTTON */}
          <Link to="/contact">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="
          group
          flex
          items-center
          justify-center
          bg-[#7A4DBE]
          text-white
          px-6
          py-3
          rounded-full
          transition-all
          duration-300
          mt-4
        "
            >
              <span
                className="
            transition-transform
            duration-300
            group-hover:-translate-x-2
          "
              >
                Contact
              </span>
            </button>
          </Link>
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
