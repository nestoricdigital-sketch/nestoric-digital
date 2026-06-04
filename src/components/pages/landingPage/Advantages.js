import React from "react";

const advantages = [
  {
    number: "01",
    title: "All Channels, One Team",
    desc: "SEO, Google Ads, Social Media, Web Design and Branding managed under one strategic team.",
  },
  {
    number: "02",
    title: "Industry-Specific Strategies",
    desc: "Tailored growth plans for Education, Healthcare, Real Estate, E-commerce, Manufacturing and more.",
  },
  {
    number: "03",
    title: "ROI Over Vanity Metrics",
    desc: "We focus on leads, revenue, conversions and business growth—not likes and impressions.",
  },
  {
    number: "04",
    title: "Certified Specialists",
    desc: "Experienced professionals with expertise across digital marketing channels.",
  },
  {
    number: "05",
    title: "100% Transparency",
    desc: "Clear reporting, measurable KPIs, and complete visibility into campaign performance.",
  },
  {
    number: "06",
    title: "Fast Execution",
    desc: "Quick implementation, faster campaign launches, and agile optimization cycles.",
  },
];
const Advantages = () => {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-4 md:px-16  bg-black text-white ">
      <div className="container mx-auto ">
        <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
          Why Nestoric Digital
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          We Work Like Your In-House Growth Team
        </h2>

        <p className="max-w-2xl text-gray-400 mt-6">
          More than an agency. We become your strategic growth partner focused
          on leads, revenue, visibility, and long-term business success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-purple-500/70 hover:text-purple-500/70  transition"
            >
              <span className="text-5xl font-bold text-purple-500/30">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
