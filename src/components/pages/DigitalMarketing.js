import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
// import Services1 from "../darktheme/Services1";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { supabase } from "../superbase/SuperClient";
import ServicesLanding from "../darktheme/ServicesLanding";
import Logos from "./landingPage/Logos";
import Advantages from "./landingPage/Advantages";

const DigitalMarketing = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    budget: "",
    company: "",
    description: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, mobile, service, budget, company, description } =
      formData;
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
        .insert([
          { name, email, mobile, service, budget, company, description },
        ]);

      if (error) throw error;

      alert("Form submitted successfully!");
      // Redirect to home page
      navigate("/");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        service: "",
        budget: "",
        company: "",
        description: "",
      });
      setSelectedService(null);
      setSelectedBudget(null);
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
    !formData.budget ||
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
      value: "APP development",
      label: "APP Development",
    },
    {
      value: "online reputation management",
      label: "Online Reputation Management",
    },
    { value: "performance marketing", label: "Performance Marketing" },
  ];
  const budgetOptions = [
    { value: "under-10k", label: "Under ₹10,000" },
    { value: "10k-25k", label: "₹10,000 - ₹25,000" },
    { value: "25k-50k", label: "₹25,000 - ₹50,000" },
    { value: "50k-100k", label: "₹50,000 - ₹1,00,000" },
    { value: "100k-plus", label: "₹1,00,000+" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24  text-white glow-text">
        {/* Background Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 via-transparent to-purple-600/10" /> */}
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className=" relative max-w-7xl mx-auto z-10 px-4 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
                🚀 Trusted Growth Partner for Businesses Across India
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Stop Wasting
                <span className="block bg-gradient-to-r from-purple-900 to-purple-400 bg-clip-text text-transparent">
                  Marketing Budget.
                </span>
                Start Generating Qualified Leads.
              </h1>

              {/* Subheading */}
              {/* <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
                Nestoric Digital helps businesses grow through ROI-focused
                Google Ads, SEO, Social Media Marketing, Website Development,
                and Branding strategies that turn visitors into customers.
              </p> */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Web Design & Development",
                  "SEO",
                  "Social Media Marketing",
                  "Performance Marketing",
                  "App Development",
                  "Online Reputation Management",
                  "Content Development",
                ].map((service) => (
                  <div
                    key={service}
                    className="
        px-5
        py-2.5
        rounded-full
        border
        border-white/15
        bg-white/5
        backdrop-blur-sm
        text-sm
        md:text-base
        text-gray-300
        hover:bg-white/10
        hover:border-white/30
        transition-all
        duration-300
        cursor-default
      "
                  >
                    {service}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="group inline-flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-4 font-semibold transition hover:bg-purple-900">
                    Get Free Consultation
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </Link>

                {/* <button className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                  Book Free SEO Audit
                </button> */}
              </div>

              {/* Trust Points */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  "Google Ads & SEO Experts",
                  "Performance-Driven Campaigns",
                  "Transparent Reporting",
                  "24/7 Campaign Monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle size={18} className="text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Stats Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
              <div className="mb-8">
                Get a Free Consultation
                <br /> Fill in below — our team responds within 24 hours.
              </div>
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
                      className="w-full bg-transparent py-2 text-[14px] md:text-[16px] border-b border-white focus:border-indigo-500  placeholder-white/90 focus:outline-none"
                      required
                    />
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
                        if (
                          value.length === 10 &&
                          !/^[6-9]\d{9}$/.test(value)
                        ) {
                          setPhoneError("Invalid phone number.");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      className={`w-full bg-transparent border-b placeholder-white outline-none py-2 text-sm 
      ${
        phoneError
          ? "border-red-500"
          : "border-white/90 focus:border-indigo-500"
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
                    <label className="text-xs"> BUDGET</label>

                    <Select
                      options={budgetOptions}
                      placeholder="Select budget range"
                      styles={customStyles}
                      components={{ IndicatorSeparator: null }}
                      className="text-[14px] md:text-[16px]"
                      classNamePrefix="react-select"
                      value={selectedBudget}
                      onChange={(selected) => {
                        setSelectedBudget(selected);
                        setFormData({
                          ...formData,
                          budget: selected.value,
                        });
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
                      className="w-full bg-transparent py-2 text-[14px] md:text-[16px] border-b border-white focus:border-indigo-500  placeholder-white/90  focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs">COMPANY NAME</label>
                    <input
                      type="text"
                      name="company"
                      maxLength={50}
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full bg-transparent py-2 text-[14px] md:text-[16px] border-b border-white focus:border-indigo-500  placeholder-white/90 focus:outline-none"
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
                    className="w-full bg-transparent py-2 border-b text-[14px] md:text-[16px] border-white focus:border-indigo-500  placeholder-white/90 focus:outline-none resize-none"
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
                      : "bg-slate-200 hover:bg-purple-800 "
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Logos />

      <ServicesLanding />
      <Advantages />
    </>
  );
};

export default DigitalMarketing;
