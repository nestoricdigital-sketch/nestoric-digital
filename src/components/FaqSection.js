// import { useState } from "react";

// export default function FaqSection() {
//   const faqs = [
//     {
//       question: "Why’s Agero instead of full-time designer?",
//       answer:
//         "Hiring Agero gives you flexibility, speed, and high-quality designs without the cost of a full-time designer. You get access to a professional design team on demand.",
//     },
//     {
//       question: "How quick is quick?",
//       answer:
//         "For most designs, we’re talking 2–3 business days. We balance speed with quality, ensuring you get top-notch designs swiftly.",
//     },
//     {
//       question: "Speed of design delivery?",
//       answer:
//         "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
//     },
//     {
//       question: "What’s the Agero process like?",
//       answer:
//         "Once you submit your request, we assign it, work our magic, and deliver within a couple of days. You review, we revise if needed — and done!",
//     },
//     {
//       question: "How to request a design?",
//       answer:
//         "Easy! Just fill out our request form with the details and assets. The clearer you are, the faster we can hit the mark.",
//     },
//     {
//       question: "What if I don’t like the design?",
//       answer:
//         "No worries — we offer unlimited revisions until you're happy. Your satisfaction is part of our process.",
//     },
//     {
//       question: "Are there any refunds?",
//       answer:
//         "Since this is a creative service, we don't offer refunds. But we’ll keep refining the design until you love it — that’s our promise.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // open one, close others
//   };

//   return (
//     <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
//       {/* === HEADER === */}
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Your questions, answered
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Helping you understand our process and offerings at Ndigital.
//         </p>
//       </div>

//       {/* === FAQ GRID === */}
//       <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
//         {faqs.slice(0, 6).map((faq, index) => (
//           <div
//             key={index}
//             className="flex-1 min-w-[300px] max-w-[500px] bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             {/* === QUESTION === */}
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-gray-900 text-left">
//                 {faq.question}
//               </h3>
//               <span className="text-2xl font-bold text-gray-700 select-none">
//                 {openIndex === index ? "−" : "+"}
//               </span>
//             </div>

//             {/* === ANSWER === */}
//             <div
//               className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                 openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <p className="text-gray-600 text-left">{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import plus from "../components/images/icons/N_plus.png";
import minus from "../components/images/icons/N_minus.png";

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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fade delay={1e2} cascade damping={1e-1}>
      <section className="font-inter  mx-auto   w-full text-center md:mx-0 mt-24 md:pt-28">
        <p className="text-[#5C5C5C] text-center my-4">(FAQ's)</p>
        <h2 className="text-2xl m-2  text-center  md:text-7xl font-bold leading-tight  text-[#131313]">
          Your Questions, Answered
        </h2>
        <p className="text-[14px] m-2 md:text-[20px] text-[#5C5C5C]  text-center my-4 md:my-6">
          Helping you understand our process and offerings at Nestoric digital
        </p>

        {/* Independent columns */}
        <div className="grid grid-cols-1 mx-2 md:grid-cols-2 gap-6 items-start py-6 md:pt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl bg-[#f0f0f0] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-[14px] md:text-[20px] w-full flex justify-between items-center p-5 text-left  rounded-2xl text-[#131313] font-medium "
              >
                <span>{faq.q}</span>

                {/* + / - icon */}
                <span
                  className={`text-2xl font-bold transition-transform duration-500 ${
                    openIndex === index
                      ? "text-purple-600 rotate-180"
                      : "text-slate-500 rotate-0"
                  }`}
                >
                  {openIndex === index ? (
                    <img src={minus} className="h-5 w-5" alt="minus icon" />
                  ) : (
                    <img src={plus} className="h-5 w-5" alt="plus icon" />
                  )}
                </span>
              </button>

              {/* Smooth expand area */}
              <div
                className={`bg-[#f0f0f0] grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 text-justify pb-4 text-[14px] md:text-[20px]  text-[#5C5C5C] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
