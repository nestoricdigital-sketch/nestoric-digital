import React from "react";
// import suryacity from "./logos/suryacity_logo.webp";
import suryacity from "../../darktheme/logos/suryacity_logo.webp";
import cargen from "../../darktheme/logos/cargen_logo.webp";
import digichain from "../../darktheme/logos/digic_logo.webp";
import simplus from "../../darktheme/logos/simplus_logo.webp";
import vasura from "../../darktheme/logos/vasura_logo.webp";
import vhs from "../../darktheme/logos/vhs_logo.webp";
import mag from "../../darktheme/logos/mag_op_logo.webp";
import rak from "../../darktheme/logos/rak.webp";
import cityscape from "../../darktheme/logos/cityscape.webp";
import think from "../../darktheme/logos/think.webp";
import little from "../../darktheme/logos/little.webp";
import eena from "../../darktheme/logos/eena.webp";
import ramki from "../../darktheme/logos/ramki.webp";
import reck from "../../darktheme/logos/reckon.webp";
import LogoMarquee from "../../darktheme/LogoMarquee";

const portfolioLogos = [
  {
    name: "Magnum Opus",
    service: "Social Media Marketing",
    logo: mag,
  },
  {
    name: "Simplus",
    service: "Social Media Marketing",
    logo: simplus,
  },
  {
    name: "Artrex",
    service: "Branding, Logo Design, Website Development",
    logo: null,
  },
  {
    name: "Vika",
    service: "Logo Design",
    logo: null,
  },

  {
    name: "Surya City",
    service: "Lead Generation",
    logo: suryacity,
  },
  {
    name: "VHS TechSphere",
    service: "Website Development",
    logo: vhs,
  },
  {
    name: "Vasura Virtual Experience",
    service: "Website Development",
    logo: vasura,
  },
  {
    name: "Digichain",
    service: "Website Development",
    logo: digichain,
  },
  {
    name: "Carzen logistics",
    service: "Website Development",
    logo: cargen,
  },
  {
    name: "Cityscape Realty",
    service: "Lead Generation & Social Media Marketing",
    logo: cityscape,
  },
  {
    name: "Think Tech",
    service: "Website Development",
    logo: think,
  },
  {
    name: "Little Angles",
    service: "Website Development",
    logo: little,
  },
  {
    name: "Eena",
    service: "Logo Design",
    logo: eena,
  },
  {
    name: "Ramki Solutions",
    service: "Leads & Social Media Marketing",
    logo: ramki,
  },
  {
    name: "RAK",
    service: "Lead Generation & Social Media Marketing",
    logo: rak,
  },
  {
    name: "Reckonext",
    service: "Lead Generation & Social Media Marketing",
    logo: reck,
  },
];
const Logos = () => {
  return (
    <div className="glow-text relative max-w-7xl mx-auto bg-black  py-16 lg:py-24 px-4 md:px-10 lg:px-10 overflow-hidden">
      <div
        className="logo-scale provide max-w-7xl mx-auto md:-mx-20 relative flex flex-col items-center justify-start
               content-center  md:min-h-[118px] min-h-10 md:mt-[60px] mt-[40px] "
      >
        <LogoMarquee logos={portfolioLogos} />
      </div>
    </div>
  );
};

export default Logos;
