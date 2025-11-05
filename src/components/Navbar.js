import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import webLogo from './images/NdMainLogo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
    const links = ["Work", "Services",  "Blog","About"];
  const navigate = useNavigate();

  const moveToForm = () => {
    console.log('clicked')
    navigate("/about#form");
  };


  return (
    <nav className=" font-inter w-full bg-white text-black  z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to='/' className="text-2xl font-extrabold tracking-wide cursor-pointer ">
          <img src={webLogo} alt='nestoric digital logo' className="w-16 h-auto sm:w-14 md:w-16 lg:w-24 object-contain"
 />
        </Link>

        {/* Desktop Nav Links */}
        {/* <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((item) => (
            <NavLink
             key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group cursor-pointer transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul> */}
    <ul className="hidden md:flex space-x-8 font-medium">
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



        {/* Get Started Button (Desktop only) */}
        <button className="hidden md:block  bg-[#353535] text-white px-5 py-2 rounded-full shadow-lg shadow-slate-500/40"
        onClick={moveToForm}
        >
          Contact
        </button>

     {/* Mobile Menu Button */}
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
      ${menuOpen ? 'opacity-0 -rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
    fill="none"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>

  {/* Close X (front) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`absolute inset-0 m-auto h-7 w-7 transform transition-all duration-700 ease-in-out
      ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'}`}
    fill="none"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

      </div>

      {/* Mobile Dropdown Menu */}
    {/* Mobile Dropdown Menu (kept in DOM so transitions run) */}
<div
  className={`md:hidden bg-slate-100 shadow-inner overflow-hidden transition-all duration-700 ease-in-out
    ${menuOpen ? 'max-h-[600px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}
>
  <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
    {links.map((item, idx) => (
      <Link
        key={item}
        to={`/${item.toLowerCase()}`}
        onClick={toggleMenu}
        className={`relative block cursor-pointer transition-all duration-500 ease-out
          ${menuOpen ? 'translate-y-0 opacity-100 delay-75' : 'translate-y-3 opacity-0'}`}
        style={{ transitionDelay: `${idx * 40}ms` }} // stagger
      >
        <span className="inline-block px-4">{item}</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    ))}

    <button
      className={` bg-[#353535] shadow-lg shadow-slate-500/40 text-white px-5 py-2 rounded-full transition-colors duration-300
        ${menuOpen ? 'opacity-100  translate-y-0' : 'opacity-0 translate-y-2'}`}
      onClick={moveToForm}>
      Contact
    </button>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;
