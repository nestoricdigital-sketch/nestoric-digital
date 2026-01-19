import React, { useState } from "react";
import { supabase } from "../superbase/SuperClient";
// import webDe from "../images/services/S_websiteDevlop.png";
// import seo from "../images/services/S_seo.png";
// import soMedia from "../images/services/S_socialMedia.png";
// import perM from "../images/services/S_performanceMark.png";
// import cont from "../images/services/S_content.png";
// import onlineR from "../images/services/S_onlineRep.png";
const Form = ({ onClose, showClose = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    description: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const [loading, setLoading] = useState(false);

  // const marketingImages = [
  //   { src: seo, label: "SEO Optimization" },
  //   { src: seo, label: "Lead Generation" },
  //   { src: soMedia, label: "Social Media Marketing" },
  //   { src: perM, label: "Performance Marketing" },
  //   { src: webDe, label: "Website Development" },
  //   { src: cont, label: "Content Marketing" },
  // ];

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) =>
  //       prev === marketingImages.length - 1 ? 0 : prev + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* left side */}
        <div className="hidden md:flex flex-col justify-center bg-gray-50 rounded-xl p-2 relative overflow-hidden">
          {/* IMAGE SLIDER */}
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="640"
              src="https://www.youtube.com/embed/R_Cu4-Td6Yw?autoplay=1&mute=1&loop=1&playlist=R_Cu4-Td6Yw"
              title="YouTube Short"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>

            {/* {marketingImages.map((item, index) => (
              <div
                key={index}
                className={`
          absolute inset-0
          transition-all duration-700 ease-in-out
          ${
            index === activeIndex
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-2 scale-95"
          }
        `}
              >
              
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />

             
                <div
                  className="
          absolute bottom-0 left-0 right-0
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
          px-4 py-3
        "
                >
                  <p className="text-start text-sm font-semibold text-white tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
        {/* STATIC BENEFITS */}
        {/* <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              🚀 Growth-focused strategy
            </li>
            <li className="flex items-center gap-2">🎯 High-quality leads</li>
            <li className="flex items-center gap-2">
              📊 Data-driven decisions
            </li>
            <li className="flex items-center gap-2">⚡ Faster conversions</li>
          </ul> */}
        {/* right side */}
        <div className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit}
            className="m-2 flex flex-col gap-3 md:gap-[28px] text-gray-800"
          >
            {/* Name */}
            <div>
              <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px] text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                maxLength={35}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent text-[14px] md:text-[16px]
        border-b border-gray-300
        focus:border-indigo-500
        text-gray-800 placeholder-gray-400
        focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px] text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent text-[14px] md:text-[16px]
        border-b border-gray-300
        focus:border-indigo-500
        text-gray-800 placeholder-gray-400
        focus:outline-none"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px] text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setFormData((prev) => ({ ...prev, mobile: value }));

                  if (value.length === 10 && !/^[6-9]\d{9}$/.test(value)) {
                    setPhoneError("Invalid phone number.");
                  } else {
                    setPhoneError("");
                  }
                }}
                placeholder="Enter your mobile number"
                className={`w-full bg-transparent text-[14px] md:text-[16px]
        border-b py-2 outline-none
        ${
          phoneError
            ? "border-red-500"
            : "border-gray-300 focus:border-indigo-500"
        }
        text-gray-800 placeholder-gray-400`}
                disabled={loading}
                required
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="block text-[14px] md:text-[16px] font-medium mb-1 md:mb-[14px] text-gray-700">
                Select Your Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-transparent text-[14px] md:text-[16px]
        border-b border-gray-300
        focus:border-indigo-500
        text-gray-800 focus:outline-none"
                required
              >
                <option value="" className="text-gray-400">
                  Select your service
                </option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="seo optimisation">SEO Optimisation</option>
                <option value="content writing">Content Writing</option>
                <option value="website design & development">
                  Website Design & Development
                </option>
                <option value="online reputation management">
                  Online Reputation Management
                </option>
                <option value="performance marketing">
                  Performance Marketing
                </option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[16px] font-medium mb-1 md:mb-[14px] text-gray-700">
                Project Description
              </label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project..."
                className="w-full bg-transparent text-[14px] md:text-[16px]
        border-b border-gray-300
        focus:border-indigo-500
        text-gray-800 placeholder-gray-400
        focus:outline-none resize-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isDisabled || loading}
              className={`py-3  lg:mt-10 rounded-[25px] font-semibold transition
      ${
        isDisabled || loading
          ? "bg-gray-200 cursor-not-allowed text-gray-500"
          : "bg-[#353535]  text-white"
      }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* <button onClick={onClose}>Close</button> */}
    </>
  );
};

export default Form;
