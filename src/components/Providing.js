import React from "react";
import Lottie from "lottie-react";
import scrollingText from "./assets/test_scroll.json"; 
import scroll from "./assets/scroll.json"; 
import webLogo from './images/providingLogos/website.png'
import interfaceLogo from './images/providingLogos/interface.png'
import logo from './images/providingLogos/logo.png'
import markLogo from './images/providingLogos/marketing.png'
import strLogo from './images/providingLogos/strategy.png'
import brandLogo from './images/providingLogos/branding.png'


export default function Providing() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center md:min-h-96 min-h-28 w-full overflow-hidden bg-white">
    
         <div className="absolute top-1/3 left-0 w-full rotate-[-12deg]">
  <Lottie animationData={scrollingText} loop autoplay />
</div>

<div className="absolute top-1/3 left-0 w-full rotate-[12deg]">
  <Lottie animationData={scroll} loop autoplay />
</div>
     
   
      {/* <div className="absolute top-1/4 left-0 w-full rotate-[-5deg] overflow-hidden">
        <div className="inline-block whitespace-nowrap animate-left text-white text-center bg-purple-600 py-2 font-medium text-lg">
          <span className="mx-8">Performance Marketing *</span>
          <span className="mx-8">Brand Design *</span>
          <span className="mx-8">Web Development *</span>
          <span className="mx-8">Lead Generation *</span>
          <span className="mx-8">Logo Designing *</span>
          <span className="mx-8">Website Designing *</span>
          <span className="mx-8">Social Marketing *</span>
        
          <span className="mx-8">Performance Marketing *</span>
          <span className="mx-8">Brand Design *</span>
          <span className="mx-8">Web Development *</span>
        </div>
      </div> */}

      {/* <div className="absolute top-1/4 left-0 w-full rotate-[5deg] overflow-hidden">
        <div className="inline-block whitespace-nowrap animate-right text-white bg-black py-2 font-medium text-lg">
          <span className="mx-8">Over 100 Customers *</span>
          <span className="mx-8">Senior Designer *</span>
          <span className="mx-8">15 years of Experience *</span>
          <span className="mx-8">UI/UX Design *</span>
          <span className="mx-8">Creative Direction *</span>
      
          <span className="mx-8">Over 100 Customers *</span>
          <span className="mx-8">Senior Designer *</span>
        </div>
      </div> */}

      {/* <h1 className="relative   text-purple-600 text-3xl font-semibold">
        (Hello)
      </h1> */}
      </div>
      <section className="flex font-inter flex-col items-center justify-center text-center  bg-white px-6 pb-16">
      {/* Headline */}
      {/* <h1 className="text-gray-600   md:text-lg">
            Hello
          </h1> */}
      <h1 className="md:mt-15  text-1xl md:text-3xl lg:text-4xl  font-semibold text-center max-w-4xl leading-tight text-gray-900 mb-10">
        We partner with ambitious digital startups to build sharper brands and websites — with clarity, speed, and zero hassle.
      </h1>

      {/* Buttons */}
       {/* Buttons */}
        <div className="flex justify-center w-full">
<div className="flex flex-wrap justify-center gap-4 max-w-md">
  {[
    { label: "Logo", icon: logo },
    { label: "Website", icon: webLogo },
    { label: "Branding", icon: brandLogo },
    { label: "Interface", icon: interfaceLogo},
    { label: "Strategy", icon: strLogo },
    { label: "Marketing", icon: markLogo },
  ].map(({ label, icon }) => (
    <button
      key={label}
      className="flex  px-4 py-2  bg-[#353535] hover:opacity-60 text-white rounded-full text-sm  transition"
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
