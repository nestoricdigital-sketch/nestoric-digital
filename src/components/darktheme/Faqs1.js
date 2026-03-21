import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";
import plus from "../darktheme/icons/f_plus.webp";
import minus from "../darktheme/icons/f_minus.webp";
import sideAr from "../images/sideArrow.png";

const faqs = [
  {
    q: "What services does Nestoric Digital offer ?",
    a: "We provide a full spectrum of digital marketing and web solutions including SEO optimisation, social-media management, website design & development, and performance-driven lead generation.",
  },
  {
    q: " Who can benefit from these services ?",
    a: "Any business looking to grow its online presence, generate more leads, improve search-engine visibility or build a high-impact website — from startups to established firms — can benefit from our expertise.",
  },
  {
    q: "How long does it take to see results ?",
    a: "Absolutely. You can cancel or pause your subscription anytime — no hidden feesThe timeline depends on the service: SEO improvements may take 3-6 months for substantial visibility growth; paid campaigns and lead-gen efforts can produce quicker outcomes (weeks) once everything is live. Website build times depend on complexity. We’ll give a clearer timeframe during the proposal stage.",
  },
  {
    q: "What are your pricing/payment models ?",
    a: "We offer flexible pricing depending on scope and goals — typically monthly retainers for ongoing services, one-time fees for projects (e.g., website build), and pay-per-lead or performance models where applicable. We accept standard digital payments as discussed during onboarding.",
  },
  {
    q: "How can I get started or get a quote ?",
    a: "You can reach out to us via our contact page on the website or call/WhatsApp us directly. We’ll arrange a free consultation to assess your needs and provide a tailored quote. (nestoricdigital.com)",
  },
  {
    q: "Do you manage social-media content ?",
    a: "Yes — social media is one of our core services. We create content strategies, manage posts, monitor engagement and run ad campaigns that align with your lead generation or brand-building objectives. (nestoricdigital.com)",
  },
];

const FaqItem = memo(({ faq, index, activeIndex, toggle }) => {
  const isOpen = activeIndex === index;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="text-sm md:text-base">{faq.q}</span>

        <img
          src={isOpen ? minus : plus}
          alt={isOpen ? "minus icon" : "plus icon"}
          loading="lazy"
          decoding="async"
          className="w-7 h-7 object-contain"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 overflow-hidden"
          >
            <p className="pb-5 text-sm text-stone-50 font-light">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const Faq1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-10 py-6 lg:py-16 relative bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-5xl text-center font-light mb-16"
          style={{
            textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
          }}
        >
          Frequently asked <br /> Questions
        </h2>

        <div className="relative">
          <div
            className="absolute inset-0 -z-10 opacity-30
            [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_2px)]
            [background-size:24px_24px]"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                activeIndex={activeIndex}
                toggle={toggle}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-xl md:text-2xl font-light mb-6">
            Let’s Shape the Future Together.
          </h3>

          <button
            onClick={() => handleScrollToSection("contact")}
            className="mx-auto group flex items-center bg-[#7a4dbe] text-white px-5 py-[5px] rounded-full transition-all duration-300 cursor-pointer"
          >
            <span className="text-[18px] transform transition-transform duration-300 group-hover:-translate-x-2">
              Contact
            </span>

            <img
              src={sideAr}
              alt="side arrow"
              loading="lazy"
              decoding="async"
              className="w-7 h-7 p-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq1;
