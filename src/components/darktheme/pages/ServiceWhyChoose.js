import { motion } from "framer-motion";

export default function ServiceWhyChoose({ data }) {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-10 gap-y-5">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              className={`
        relative
        rounded-3xl
        border border-white/10
        p-[1px]
        w-full
        md:w-[300px]
        lg:w-[335px]
        min-h-[320px]
        animate-border
        overflow-hidden

        [background:
        linear-gradient(45deg,#050505,#0a0a0a_50%,#050505)_padding-box,
        conic-gradient(
          from_var(--border-angle),
          rgba(168,85,247,0.12)_80%,
          #a855f7_86%,
          #c084fc_90%,
          #a855f7_94%,
          rgba(168,85,247,0.12)
        )_border-box]

        ${index % 2 === 0 ? "md:justify-self-center" : "md:justify-self-center"}
      `}
            >
              {/* INNER CARD */}
              <div className="relative h-full rounded-3xl bg-white/[0.03] backdrop-blur-xl p-10">
                {/* CORNER ACCENTS */}
                <span className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/40"></span>

                <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/40"></span>

                <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/40"></span>

                <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/40"></span>

                {/* NUMBER */}
                <p className="text-sm text-white/50 mb-6">0{index + 1}</p>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white leading-snug">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-base text-white/70 leading-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
