import { useEffect, useRef, useMemo, useState } from "react";
import blogDesign from "../images/designBlog.jpeg";
import sideAr from "../images/sideArrow.png";
import h_1 from "../images/heroSectionLogo/h 1.png";
import h_2 from "../images/heroSectionLogo/h2.png";
import blog2 from "../images/blog2.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Blog = () => {
  const blogPosts = useMemo(
    () => [
      {
        image: blogDesign,
        date: "19 March 2026",
        author: "Nestoric Team",

        title: "Design & Development",

        description:
          "Design and development create the foundation of every strong digital product. A successful website, application, or digital platform depends on how effectively visual thinking and technical execution are aligned from the beginning. When these two disciplines work together, businesses gain products that are visually consistent, technically stable, and built for long-term growth.",

        tags: ["UI/UX", "Branding", "Development"],

        sections: [
          {
            heading: "Why It Is Required",
            content:
              "Digital users expect seamless experiences across every screen size, device, and interaction point. Design defines how users perceive a product, while development determines how reliably that experience performs in real-world usage. Without strong integration between both areas, even visually attractive interfaces may fail to deliver usability, speed, or technical stability. Businesses today need digital products that combine brand identity, accessibility, responsiveness, and performance in a unified system.",
          },
          {
            heading: "Key Considerations",
            content:
              "Successful design and development begin with clear project architecture. Layout systems, typography hierarchy, reusable components, interaction states, and responsive breakpoints must be considered before development begins. Design files should communicate spacing logic, behavior patterns, and component states clearly so developers can translate them accurately. Technical decisions such as asset optimization, loading strategy, code maintainability, and browser compatibility should also be planned early to avoid future rework.",
          },
          {
            heading: "Collaboration Between Teams",
            content:
              "Projects perform best when designers and developers collaborate throughout the process rather than working in isolated stages. Early alignment reduces misunderstandings, improves implementation speed, and helps identify limitations before they become costly revisions. Shared systems such as component libraries and structured design documentation improve consistency while allowing both teams to move efficiently.",
          },
          {
            heading: "Business Impact",
            content:
              "When design and development are aligned, businesses launch faster, reduce revision cycles, and deliver stronger user experiences. A technically optimized product also improves engagement, conversion rates, search visibility, and long-term scalability. Well-built digital systems reduce maintenance complexity and support future feature expansion more effectively.",
          },
          {
            heading: "Conclusion",
            content:
              "Strong digital experiences are not created through design alone or development alone. They emerge when creative intent and technical precision support each other at every stage of execution. Businesses that treat design and development as one integrated process build digital assets that perform better, adapt faster, and create stronger long-term value.",
          },
        ],
      },
      {
        image: blog2,
        date: "19 March 2026",
        author: "Nestoric Team",

        title: "Social Media Marketing",

        description:
          "Social media marketing has become one of the strongest channels for brand visibility, customer engagement, and digital growth. A strategic presence across platforms helps businesses connect with audiences consistently while building trust, reach, and measurable outcomes.",

        tags: ["Campaign", "Advertising", "Reach"],

        sections: [
          {
            heading: "Why It Is Required",
            content:
              "Consumers now spend significant time discovering products, services, and brands through social platforms before making decisions. Businesses without a structured social media presence often lose visibility in highly competitive markets. Social media allows brands to communicate directly with audiences, create recall, and remain relevant in everyday digital conversations.",
          },
          {
            heading: "Key Considerations",
            content:
              "A strong social media strategy requires more than regular posting. Content planning must reflect audience behavior, platform relevance, campaign goals, and brand tone. Visual consistency, messaging clarity, posting frequency, and content variety all influence long-term performance.",
          },
          {
            heading: "Performance and Optimization",
            content:
              "Successful campaigns depend on continuous performance review. Reach, engagement, click-through rate, audience retention, and conversion signals help businesses understand what content creates real impact. Paid promotions should be optimized regularly to improve cost efficiency and targeting quality.",
          },
          {
            heading: "Business Impact",
            content:
              "A strong social media system increases brand familiarity, improves audience trust, drives lead generation, and supports broader marketing campaigns. It also creates direct channels for customer interaction and faster market feedback.",
          },
          {
            heading: "Conclusion",
            content:
              "Social media delivers business value when creativity is supported by clear strategy and measurable execution. Brands that invest in meaningful content and performance tracking build stronger digital relationships over time.",
          },
        ],
      },
    ],
    [],
  );

  const sectionRefs = useRef([]);
  const leftRefs = useRef([]);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setPositions((prev) => {
          const reset = blogPosts.map(() => "relative");
          return JSON.stringify(prev) !== JSON.stringify(reset) ? reset : prev;
        });
        return;
      }

      const newPositions = blogPosts.map((_, index) => {
        const section = sectionRefs.current[index];
        const left = leftRefs.current[index];

        if (!section || !left) return "relative";

        const sectionRect = section.getBoundingClientRect();
        const leftHeight = left.offsetHeight;
        const topOffset = 100;

        if (
          sectionRect.top <= topOffset &&
          sectionRect.bottom > leftHeight + topOffset
        ) {
          return "fixed";
        }

        if (sectionRect.bottom <= leftHeight + topOffset) {
          return "bottom";
        }

        return "relative";
      });

      setPositions((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newPositions)
          ? newPositions
          : prev,
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [blogPosts]);

  return (
    <div className="relative">
      <div className=" max-w-7xl lg:px-10 mx-auto ">
        <Fade delay={1e2} cascade damping={1e-1}>
          <section className="w-full overflow-hidden">
            <div className="font-inter min-h-[600px] md:min-h-[712px] relative flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat pt-32 md:pt-60">
              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none"></div>

              {/* Content */}
              <div
                className="font-inter text-zinc-50 text-center relative z-10 max-w-5xl mx-auto px-4"
                style={{
                  textShadow: `
      0 0 8px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.15)
    `,
                }}
              >
                {/* LINE 1 */}
                <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                  <span>Our Blog</span>

                  <div className="flex justify-center mx-2 md:mx-4">
                    <img
                      src={h_1}
                      alt="decorative circle"
                      loading="lazy"
                      className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                    />
                  </div>

                  <span className="text-[#7A4DBE] italic">Insights</span>
                </div>

                {/* LINE 2 */}
                <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                  <span>Behind the</span>

                  <div className="flex justify-center mx-2 md:mx-4">
                    <img
                      src={h_2}
                      alt="decorative circle"
                      loading="lazy"
                      className="hidden md:block w-16 h-10 md:w-14 md:h-14 lg:w-24 lg:h-16 rounded-full object-cover animate-float-slow"
                    />
                  </div>

                  <span>Builts</span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 md:mt-20  text-base md:text-lg max-w-2xl mx-auto">
                  Insights, inspiration, and strategies from the creative
                  frontier— exploring design development, and the tools that
                  power exceptional digital experiences
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-6 md:mt-20 flex justify-center text-center h-[48px]">
                <Link to="/services">
                  <button
                    className="group flex items-center bg-[#7a4dbe]  text-white px-4 py-[5px] rounded-full 
                                         transition-all duration-300 
                                         cursor-pointer"
                  >
                    <span className="text-[18px] text-center transform transition-transform duration-300 group-hover:-translate-x-2">
                      View Services
                    </span>

                    <img
                      src={sideAr}
                      className="w-7 h-7 p-1 mt-[0px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      alt="side arrow"
                    />
                  </button>
                  {/* <button
                  className="group flex items-center bg-[#353535] text-white px-6 py-3 rounded-full 
            transition-all duration-300 shadow-lg shadow-slate-500/40 cursor-pointer"
                >
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                    View Services
                  </span>

                  <img
                    src={sideAr}
                    className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                    alt="side arrow"
                  />
                </button> */}
                </Link>
              </div>
            </div>
          </section>
        </Fade>
      </div>
      {/* bg blog insights */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,#4c1d95_0%,#000_60%)] opacity-20 md:opacity-30"></div>
      <div className="space-y-20">
        {blogPosts.map((blog, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12"
          >
            {/* LEFT SIDE */}
            <div
              className="w-full  lg:w-[35%] relative"
              style={{
                minHeight:
                  window.innerWidth >= 1024
                    ? leftRefs.current[index]?.offsetHeight || 300
                    : "auto",
              }}
            >
              <div
                ref={(el) => (leftRefs.current[index] = el)}
                style={{
                  width:
                    positions[index] === "fixed" && window.innerWidth >= 1024
                      ? `${leftRefs.current[index]?.parentElement.offsetWidth}px`
                      : "100%",
                }}
                className={`transform transition-all duration-500 ease-out ${
                  positions[index] === "fixed"
                    ? "fixed top-24"
                    : positions[index] === "bottom"
                      ? "absolute bottom-0"
                      : "relative"
                }`}
              >
                <h1 className="font-inter w-full md:w-[290px] text-[24px] md:text-3xl lg:text-5xl font-light leading-tight">
                  {blog.title}
                </h1>

                <div className="mt-4 space-y-2 text-sm md:text-base text-[#666]">
                  <p>Date: {blog.date}</p>
                  <p>Author: {blog.author}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {blog.tags.map((btn, i) => (
                    <button
                      key={i}
                      className="px-4 py-2 bg-[#565656] text-[#cdcdcd] rounded-full text-xs sm:text-sm"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[65%] space-y-8">
              <img
                src={blog.image}
                className="w-full rounded-[15px]"
                alt={blog.title}
              />

              <p className="text-[14px] md:text-[18px] leading-relaxed text-justify">
                {blog.description}
              </p>

              <div className="space-y-8">
                {blog.sections?.map((section, i) => (
                  <div key={i} className="border-l-2 pl-4">
                    <h3 className="font-semibold text-lg">{section.heading}</h3>
                    <p className="mt-2 text-[#555] leading-7">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blog;
//  {blogPosts.map((blog, index) => (
//           <section key={index} className="mx-2 md:mx-4 pb-9">
//             <div className="relative w-full">
//               <img
//                 src={blog.image}
//                 className="w-full h-auto object-cover rounded-[15px] mb-4 md:mb-[32px]"
//                 alt="this is blog post"
//               />

//               <div className="relative z-10 text-center my-0">
//                 <h1 className="font-inter text-[20px] md:text-5xl  text-start font-semibold">
//                   {blog.title}
//                 </h1>

//                 <p className="font-inter text-justify text-[14px] md:text-[18px] mt-0 md:mt-[32px]">
//                   {blog.description}
//                 </p>

//                 <div className="flex justify-center   content-center mt-4 md:mt-[40px] md:mb-[86px] px-4 md:px-0">
//                   <div className="flex flex-wrap md:w-[80%]  justify-center content-center text-center gap-3 md:gap-8 min-w-0 md:min-w-48 mx-0 md:mx-36">
//                     {blog.tags.map((btn, i) => (
//                       <button
//                         key={i}
//                         className="px-4 sm:px-6 py-2 bg-[#565656] shadow-lg shadow-slate-500/40 text-[#cdcdcd] rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap"
//                       >
//                         {btn}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ))}
