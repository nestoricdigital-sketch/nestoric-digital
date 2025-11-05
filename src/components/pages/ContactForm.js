import React ,{useState} from "react";
 import bgConnect from '../images/bgConnect.jpg';
 import { supabase } from "../superbase/SuperClient";

//  import axios from 'axios';
export default function ProjectForm() {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, mobile, service, description } = formData;

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
    !formData.description;
  
  return (
    <>
     <section className="relative mt-52 flex flex-col md:flex-row items-center justify-center w-full">
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
    
    
    <section className=" flex  rounded-[30px]  p-2  mx-2 md:mx-4  lg:mx-1 flex-col items-center  justify-center " id='form'
     style={{
        backgroundImage: `url(${bgConnect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
      }}>
      
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
        <h1 className="text-4xl mt-4 md:text-6xl font-bold text-white">
          Got a project in mind?
        </h1>
        <p className="text-lg text-white">
          Let’s make something happen together.
        </p>
      </div>

      {/* Right Column (Form) */}
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-white">
          {/* Name */}
          <div>
            <label className="block text-xl font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-transparent text-sm border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70  focus:outline-none"
              required
            />
          </div>

          {/* Mobile */}
          <div className="">
            <label className="block text-xl font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full bg-transparent text-sm border-b border-white/60 focus:border-indigo-500 text-white placeholder-white/70  focus:outline-none"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-xl font-medium mb-1">Select Your Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="appearance-none text-sm  w-full bg-transparent border-b border-white/60 focus:border-indigo-500 text-white  focus:outline-none"
              required
            >
              <option value="" className="bg-gray-900 text-white">
                Select your service
              </option>
              <option value="digital marketing" className="bg-gray-900 text-white">
                Digital Marketing
              </option>
              <option value="seo optimisation" className="bg-gray-900 text-white">
                SEO Optimisation
              </option>
              <option value="content writing" className="bg-gray-900 text-white">
                Content Writing
              </option>
              <option value="website design & development" className="bg-gray-900 text-white">
                Website Design & Development
              </option>
              <option value="online reputation management" className="bg-gray-900 text-white">
                Online Reputation Management
              </option>
              <option value="performance marketing" className="bg-gray-900 text-white">
                Performance Marketing
              </option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xl font-medium mb-1">Project Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              className="w-full bg-transparent border-b text-sm border-white/60 focus:border-indigo-500 text-white placeholder-white/70 focus:outline-none resize-none"
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
  <div className="absolute whitespace-nowrap text-slate-100 font-medium animate-scroll text-2xl">
     info<span className="text-purple-500">@</span>nestoricdigital.com    <span className="mx-4"> </span>      info<span className="text-purple-500">@</span>nestoricdigital.com   <span className="mx-4"> </span> info<span className="text-purple-500">@</span>nestoricdigital.com   <span className="mx-4"></span> info<span className="text-purple-500">@</span>nestoricdigital.com
  </div>

  {/* Inline CSS for scrolling animation */}
  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-scroll {
        animation: scroll 12s linear infinite;
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
    </>
  );
}

