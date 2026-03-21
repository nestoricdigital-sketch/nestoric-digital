import React, { memo } from "react";
import sideAr from "../images/sideArrow.png";
import { Link } from "react-router-dom";
import blog1 from "../images/designBlog.jpeg";
import blog2 from "../images/blog2.jpg";

const articles = [
  {
    category: "Insights",
    date: "10.15.2025",
    title: "Design & Development",
    image: blog1,
  },
  {
    category: "Guides",
    date: "10.02.2025",
    title: "Social Media Marketing",
    image: blog2,
  },
  {
    category: "Trends",
    date: "09.17.2025",
    title: "The Rise of Deep Tech: What VCs Need to Know",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
  },
];

const Blogs1 = memo(() => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-10 py-6 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
              Newsroom
            </p>
            <h2 className="text-3xl md:text-5xl font-light">
              News and Articles
            </h2>
          </div>

          <Link to="/blog">
            <button className="group flex items-center bg-[#353535] text-white px-5 py-[5px] rounded-full transition-all duration-300">
              <span className="text-[18px] transform transition-transform duration-300 group-hover:-translate-x-2">
                View All
              </span>

              <img
                src={sideAr}
                alt="side arrow"
                loading="lazy"
                decoding="async"
                className="w-7 h-7 p-1 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-400 mb-3">{article.date}</p>

                <h3 className="text-lg font-medium leading-snug group-hover:text-gray-300 transition">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Blogs1;
