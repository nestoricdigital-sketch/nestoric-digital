import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import webLogo from "../images/mainNDlogo.png";

const Thanks = () => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17647418071/JnjmCLHivM8cENf1-N5B",
        value: 1.0,
        currency: "INR",
      });
    }
  }, []);
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/" className="flex justify-center mb-8">
            <img
              src={webLogo}
              alt="nestoric digital logo"
              className="w-32 md:w-40 lg:w-52 object-contain"
            />
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Thank You!
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Your submission has been received successfully.
        </motion.p>

        {/* Additional Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="text-gray-400 mb-10"
        >
          Our team will review your details and get back to you shortly.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Thanks;
