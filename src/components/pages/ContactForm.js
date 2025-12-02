import React, { useState } from "react";
import bgConnect from "../images/contactbg.jpg";
import { supabase } from "../superbase/SuperClient";
import { Fade } from "react-awesome-reveal";

//  import axios from 'axios';
export default function ProjectForm() {
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
        "Please enter a valid 10-digit mobile number starting with 6–9."
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
    } catch (err) {
      console.error("Supabase error:", err.message);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // ✅ Disable button if any field is empty
  const isDisabled =
    !formData.name ||
    !formData.email ||
    !formData.mobile ||
    !formData.service ||
    !formData.description ||
    phoneError;

  return (
    <>
      <Fade direction="up" triggerOnce ascade damping={0.2}>
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
          id="form"
          style={{
            backgroundImage: `url(${bgConnect})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Main 2-column Section */}

          <div
            className="flex flex-col md:flex-row max-w-6xl w-full text-white rounded-2xl  md:p-10 gap-16"
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
                    className="w-full bg-transparent text-[14px] md:text-[16px] border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70 focus:outline-none"
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
                    className="w-full bg-transparent text-[14px] md:text-[16px] border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70  focus:outline-none"
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
                    className={`w-full bg-transparent border-b outline-none py-2 text-sm 
      ${
        phoneError ? "border-red-500" : "border-gray-400 focus:border-teal-400"
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
                  <label className="block text-[16px] md:text-[20px] text-xl font-medium mb-1 md:mb-[14px]">
                    Select Your Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="text-[14px] md:text-[16px] w-full bg-transparent border-b border-white/60 focus:border-indigo-500 text-white  focus:outline-none"
                    required
                  >
                    <option value="" className="bg-gray-900 text-white">
                      Select your service
                    </option>
                    <option
                      value="digital marketing"
                      className="bg-gray-100 text-black"
                    >
                      Digital Marketing
                    </option>
                    <option
                      value="seo optimisation"
                      className="bg-gray-100 text-black"
                    >
                      SEO Optimisation
                    </option>
                    <option
                      value="content writing"
                      className="bg-gray-100 text-black"
                    >
                      Content Writing
                    </option>
                    <option
                      value="website design & development"
                      className="bg-gray-100 text-black"
                    >
                      Website Design & Development
                    </option>
                    <option
                      value="online reputation management"
                      className="bg-gray-100 text-black"
                    >
                      Online Reputation Management
                    </option>
                    <option
                      value="performance marketing"
                      className="bg-gray-100 text-black"
                    >
                      Performance Marketing
                    </option>
                  </select>
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
