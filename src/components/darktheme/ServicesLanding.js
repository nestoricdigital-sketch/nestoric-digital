import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CodeXml,
  Share2,
  Smartphone,
  SearchCheck,
  TrendingUp,
  ShieldCheck,
  PenTool,
} from "lucide-react";
// AnimatePresence
const services = [
  {
    title: "Web Design & Development",
    icon: CodeXml,
    desc: "We create conversion-optimized, high-performing websites from the bottom up to complement your entire digital marketing strategy to increase traffic, leads, and sales. We believe in Conversion-First Design that guides visitors toward a desired action (lead, purchase, subscription). Top Google rankings and smooth integration to support next digital efforts are guaranteed by our SEO success.",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,

    desc: "In today's digital world, social media is your brand's primary voice and an invaluable conversion channel. At Nestoric Digital, we combine data-driven strategy with creative content to build a thriving social community that amplifies your brand, drives targeted traffic, and generates measurable revenue. Strategic value and measurable results matters.",
  },
  {
    title: "App Development",
    icon: Smartphone,
    desc: "We design and develop scalable mobile applications for Android, iOS, and cross-platform platforms that help businesses improve customer engagement and streamline operations. From UI/UX design to backend development, API integration, and deployment, we build secure, high-performance apps tailored for growth. Delivers smooth user experiences with fast performance.",
  },

  {
    title: "Search Engine Optimisation (SEO)",
    icon: SearchCheck,
    desc: "Traffic is the lifeblood of any online business, but not all traffic is equal. At Nestoric Digital, we specialise in ethical, data-driven Search Engine Optimisation (SEO) that moves your business to the top of Google. We don't chase algorithms; we build digital authority—ensuring that the customers ready to buy find you, not your competition",
  },
  {
    title: "Performance Marketing",
    icon: TrendingUp,
    desc: "We are an outcome-driven agency where success is measured by your KPIs—not vanity metrics. We deploy, test, and optimize advertising campaigns across every relevant digital channel, ensuring every dollar you spend is a direct investment in a trackable, profitable customer action",
  },
  {
    title: "Online Reputation Management",
    icon: ShieldCheck,
    desc: "In the digital age, a single negative review, article, or social post can impact years of brand building. Our Online Reputation Management (ORM) service helps monitor, suppress, and counter negative content while strengthening positive brand visibility, customer trust,Supports long-term brand value and long-term credibility.",
  },

  {
    title: "Content Development",
    icon: PenTool,
    desc: "We don't just write words; we craft compelling narratives, build educational resources, and produce engaging content that positions your brand as a trusted authority and drives measurable results. Our content development services cover the full spectrum of media formats needed to engage with you at every stage of your journey",
  },
];
const ServicesLanding = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    setIndex((prev) => (prev + visibleCards >= services.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? services.length - visibleCards : prev - 1,
    );
  };

  return (
    <section id="services" className="relative glow-text py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#7a4dbe_0%,#000_60%)] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl  leading-tight"
            style={{
              textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
            }}
          >
            <span className=" md:leading-[1.5]">Our</span> Creative
            Services{" "}
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${index * 360}px`,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="w-[330px] sm:w-[300px] md:w-[341px] min-h-[338px]
             flex-shrink-0 rounded-2xl border border-transparent p-[1px]
             animate-border
             [background:linear-gradient(45deg,#050505,#0a0a0a_50%,#050505)_padding-box,conic-gradient(from_var(--border-angle),rgba(168,85,247,0.18)_80%,#a855f7_86%,#c084fc_90%,#a855f7_94%,rgba(168,85,247,0.18))_border-box]"
              >
                <div className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl h-full">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:18px_18px] opacity-40 pointer-events-none"></div>

                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon
                        size={60}
                        strokeWidth={1.75}
                        className="text-primary"
                      />
                      <h3 className="text-lg md:text-xl font-medium">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm  leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex gap-4  justify-end mt-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a] transition"
          >
            <ChevronLeft size={30} strokeWidth={1.7} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a] transition"
          >
            <ChevronRight size={30} strokeWidth={1.7} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesLanding;
