// export default function ServiceFAQ({
//   faq,
// }) {
//   return (
//     <section className="py-20">

//       <div className="container mx-auto px-4 max-w-4xl">

//         <h2 className="text-4xl font-bold mb-12">
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-8">

//           {faq.map((item, index) => (

//             <div
//               key={index}
//               className="border-b pb-6"
//             >
//               <h3 className="text-xl font-semibold mb-3">
//                 {item.question}
//               </h3>

//               <p className="text-gray-600 leading-7">
//                 {item.answer}
//               </p>
//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

import { memo, useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const FaqItem = memo(({ item, isOpen, onToggle }) => {
  return (
    <div
      className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          overflow-hidden
        "
    >
      {/* BUTTON */}
      <button
        onClick={onToggle}
        className="
            w-full
            flex
            items-center
            justify-between
            gap-6
            px-6
            py-6
            text-left
          "
      >
        <h3 className="text-lg md:text-xl font-medium text-white">
          {item.question}
        </h3>

        {/* PLUS ICON */}
        <div
          className={`
              flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              border
              border-white/20
              text-white
              text-xl
              shrink-0
              transition-transform
              duration-300
              ${isOpen ? "rotate-45" : ""}
            `}
        >
          +
        </div>
      </button>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-white/70 leading-8">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function ServiceFAQ({ faq }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* HEADER */}
        <div className="mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-white/40">
            FAQs
          </span>

          <h2 className="text-2xl md:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ WRAPPER */}
        <div className="relative">
          {/* GRID BACKGROUND */}
          <div
            className="
              absolute
              inset-0
              -z-10
              opacity-20

              [background-image:
              radial-gradient(
                rgba(255,255,255,0.15)_1px,
                transparent_2px)]

              [background-size:24px_24px]
            "
          />

          {/* FAQ LIST */}
          <div className="space-y-5">
            {faq.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={activeIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
