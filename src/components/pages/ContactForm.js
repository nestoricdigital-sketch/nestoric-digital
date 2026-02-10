import React, { useState } from "react";
import bgConnect from "../images/contactbg.jpg";
import { supabase } from "../superbase/SuperClient";
import { Fade } from "react-awesome-reveal";
import Select from "react-select";

//  import axios from 'axios';
export default function ProjectForm() {
  const [selectedService, setSelectedService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    description: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, mobile, service, description } = formData;
    // 🔥 Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(mobile)) {
      setPhoneError(
        "Please enter a valid 10-digit mobile number starting with 6–9.",
      );
      setLoading(false);
      return;
    } else {
      setPhoneError("");
    }

    try {
      const { error } = await supabase
        .from("NestoricForm")
        .insert([{ name, email, mobile, service, description }]);

      if (error) throw error;

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        description: "",
      });
      setSelectedService(null); // 🔥 clears react-select
    } catch (err) {
      console.error("Supabase error:", err.message);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.6)",
      borderRadius: 0,
      boxShadow: "none",
      minHeight: "40px",
      fontSize: "inherit", // ✅ inherit from className
    }),

    valueContainer: (base) => ({
      ...base,
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: "inherit",
    }),

    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      color: "#fff",
    }),

    placeholder: (base) => ({
      ...base,
      marginLeft: 0,
      fontSize: "inherit",
      color: "rgba(255,255,255,0.6)",
    }),

    singleValue: (base) => ({
      ...base,
      marginLeft: 0,
      fontSize: "inherit",
      color: "#fff",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#E2E8F0",
      fontSize: "14px", // mobile default
    }),

    option: (base, state) => ({
      ...base,
      fontSize: "14px",
      backgroundColor: state.isSelected
        ? "#CBD5E1"
        : state.isFocused
          ? "#F1F5F9"
          : "transparent",
      color: "#000",
      cursor: "pointer",
    }),
  };

  // ✅ Disable button if any field is empty
  const isDisabled =
    !formData.name ||
    !formData.email ||
    !formData.mobile ||
    !formData.service ||
    !formData.description ||
    phoneError;

  const serviceOptions = [
    { value: "digital marketing", label: "Digital Marketing" },
    { value: "seo optimisation", label: "SEO Optimisation" },
    { value: "content writing", label: "Content Writing" },
    {
      value: "website design & development",
      label: "Website Design & Development",
    },
    {
      value: "online reputation management",
      label: "Online Reputation Management",
    },
    { value: "performance marketing", label: "Performance Marketing" },
  ];

  return (
    <>
      <Fade
        direction="up"
        triggerOnce
        ascade
        damping={0.2}
        className="mx-0 md:-mx-20"
      >
        <div className=" mt-28  md:mt-60"></div>
        <section className="relative   flex flex-col md:flex-row items-center justify-center w-full">
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-5xl sm:text-6xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Let's Connect
          </h2>
        </section>
        <section
          className=" flex  rounded-[15px]  p-2  mx-2 md:mx-4  flex-col items-center  justify-center "
          id="downform"
          style={{
            backgroundImage: `url(${bgConnect})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Main 2-column Section */}

          <div
            className="flex flex-col px-2 md:flex-row max-w-7xl w-full text-white rounded-2xl  md:p-10 gap-16"
            // style={{
            //   backgroundImage: `url(${bgConnect})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            {/* Left Column */}
            <div className="flex flex-col justify-start flex-1 space-y-6 text-start md:text-left">
              <h1 className="text-4xl  md:text-6xl font-bold text-white">
                Got a project in mind?
              </h1>
              <p className="text-xl text-white">
                Let’s make something happen together.
              </p>
            </div>

            {/* Right Column (Form) */}
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-1 gap-3 text-white md:gap-[28px]"
              >
                {/* Name */}
                <div>
                  <label className="block text-[14px] md:text-[16px]  font-medium mb-1 md:mb-[14px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    maxLength={35}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-transparent py-2 text-[14px] md:text-[16px] border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70 focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[14px] md:text-[16px]  font-medium mb-1 md:mb-[14px]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent py-2 text-[14px] md:text-[16px] border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70  focus:outline-none"
                    required
                  />
                </div>

                {/* Mobile */}
                <div className="">
                  <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px]">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    // onChange={handleChange}
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setFormData((prev) => ({ ...prev, mobile: value }));

                      // live validation (optional)
                      if (value.length === 10 && !/^[6-9]\d{9}$/.test(value)) {
                        setPhoneError("Invalid phone number.");
                      } else {
                        setPhoneError("");
                      }
                    }}
                    className={`w-full bg-transparent border-b placeholder-white/70 outline-none py-2 text-sm 
      ${
        phoneError
          ? "border-red-500"
          : "border-gray-400 focus:border-indigo-500"
      }`}
                    disabled={loading}
                    placeholder="Enter your mobile number"
                    // className="w-full bg-transparent text-[14px] md:text-[16px] border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70  focus:outline-none"
                    required
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px] text-white">
                    Select Your Service
                  </label>

                  <Select
                    options={serviceOptions}
                    placeholder="Select your service"
                    styles={customStyles}
                    components={{ IndicatorSeparator: null }}
                    className="text-[14px] md:text-[16px]"
                    classNamePrefix="react-select"
                    value={selectedService} // ✅ controlled value
                    onChange={(selected) => {
                      setSelectedService(selected); // for react-select
                      setFormData({ ...formData, service: selected.value }); // for form submit
                    }}
                  />
                  {/* <Select
                    options={serviceOptions}
                    placeholder="Select your service"
                    styles={customStyles}
                    className="text-[14px] md:text-[16px]"
                    components={{
                      IndicatorSeparator: null, // 🔥 removes the span
                    }}
                    onChange={(selected) =>
                      setFormData({ ...formData, service: selected.value })
                    }
                    // className="border-b border-white/60 focus:border-indigo-500"
                    classNamePrefix="react-select"
                  /> */}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[16px] font-medium mb-1 md:mb-[14px]">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    className="w-full bg-transparent border-b text-[14px] md:text-[16px] border-white/60 focus:border-indigo-500 text-white placeholder-white/70 focus:outline-none resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isDisabled || loading}
                  className={`py-3  rounded-[25px] font-semibold transition ${
                    isDisabled || loading
                      ? "bg-slate-100 cursor-not-allowed text-slate-800"
                      : "bg-slate-200 hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <div className="relative overflow-hidden w-full max-w-6xl py-10 shadow-inner rounded-2xl ">
            {/* Blurred fade effect on both sides */}
            <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l  to-transparent z-10"></div>

            {/* Scrolling text */}
            <div className="absolute w-full overflow-hidden">
              <div className="marquee flex whitespace-nowrap text-slate-100 font-medium text-2xl">
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
                <span className="mr-10">
                  info<span className="text-purple-500">@</span>
                  nestoricdigital.com
                </span>
              </div>
            </div>

            {/* Inline CSS for scrolling animation */}
            <style>
              {`
  .marquee {
    display: inline-flex;
    animation: scroll 12s linear infinite;
  }

  @keyframes scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-20%); }
  }
`}
            </style>
          </div>

          {/* Inline CSS for scrolling animation */}
          {/* <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        `}
      </style>         */}
        </section>
      </Fade>
    </>
  );
}
