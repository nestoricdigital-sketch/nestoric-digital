import React, { useState } from "react";
import contact_img from "../darktheme/images/contact_img.webp";
import Select from "react-select";
import { supabase } from "../superbase/SuperClient";
const Contact1 = () => {
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
    <section
      id="contact"
      className="relative bg-black text-white py-24 px-4 md:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-60"></div>

      <div className="relative z-10 max-w-7xl lg:px-10 mx-auto grid lg:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div>
          <h2
            className="text-2xl  md:text-3xl lg:text-5xl font-light leading-tight max-w-xl
          "
            style={{
              textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
            }}
          >
            “Ready to build your brand or website? Fill out the form and let’s
            create something great together.”
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10 text-stone-50">
          {/* Info Label */}
          <p className="text-xs tracking-widest  uppercase">Info</p>

          {/* FORM */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* 2 Column Inputs */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs">NAME</label>
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
                {/* <input
                  type="text"
                  placeholder="First Last"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white"
                /> */}
              </div>

              <div>
                <label className="text-xs">PHONE</label>
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

              <div>
                <label className="text-xs">SERVICES</label>
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
              </div>

              <div>
                <label className="text-xs">EMAIL</label>
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
            </div>

            {/* Message */}
            <div>
              <label className="text-xs ">MESSAGE</label>
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
            {/* <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              Submit
            </button> */}
            <button
              type="submit"
              disabled={isDisabled || loading}
              className={`py-2 px-6 rounded-[25px] bg-white/10 transition ${
                isDisabled || loading
                  ? "bg-slate-100 cursor-not-allowed "
                  : "bg-slate-200 hover:bg-slate-100 "
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={contact_img}
              alt="Team working"
              className="w-full h-[440px] object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase mb-2">General</p>
              <p className="text-lg">
                info@nestoricdigital.com / +91 63619 85560
              </p>
            </div>

            {/* <div>
              <p className="text-xs text-gray-400 uppercase mb-2">Socials</p>
              <div className="flex gap-6 text-lg">
                <span>X</span>
                <span>Fb</span>
                <span>In</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
