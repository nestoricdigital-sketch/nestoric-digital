// import ServiceHero from "./ServiceHero";
import ServiceContentSection from "./ServiceContentSection";
import ServiceWhyChoose from "./ServiceWhyChoose";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import { Fade } from "react-awesome-reveal";
import sideAr from "../../images/sideArrow.png";

export default function ServicePageLayout({ service }) {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="relative flex flex-col items-center justify-center">
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
                  <span>Our Creative</span>

                  <div className="flex justify-center mx-2 md:mx-2"></div>

                  <span className="text-[#7A4DBE] italic">Services</span>
                </div>

                {/* LINE 2 */}
                <div className="flex md:h-[62px] md:mb-[20px] flex-wrap md:flex-nowrap justify-center items-center text-3xl md:text-6xl font-light leading-tight mb-4">
                  <span>Excellence</span>

                  <div className="flex justify-center mx-2 md:mx-2"></div>

                  <span>Delivered</span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 md:mt-20 text-base md:text-lg max-w-2xl mx-auto">
                  Insights, inspiration, and strategies from the creative
                  frontier— exploring design development, and the tools that
                  power exceptional digital experiences
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-6 md:mt-20 flex justify-center text-center ">
                <button
                  onClick={() => handleScrollToSection("p_services")}
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
              </div>
            </div>
          </section>
        </Fade>
      </div>
      {/* HERO */}
      {/* <ServiceHero service={service} />

      {service.sections?.map((section, index) => (
        <ServiceContentSection key={index} section={section} />
      ))} */}

      {/* ----------- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24" id="p_services">
        <div
          className="
            grid
            lg:grid-cols-[35%_60%]
            gap-16
            items-start
          "
        >
          {/* LEFT STICKY */}
          <div
            className="
              lg:sticky
    lg:top-24
    h-fit
    bg-black
    z-20
            "
          >
            {service.hero.badge && (
              <span className="text-sm mx-auto uppercase tracking-widest text-gray-400">
                {service.hero.badge}
              </span>
            )}

            <h1
              className="
                text-2xl
                lg:text-5xl
                font-bold
                mt-4
                leading-tight
              "
            >
              {service.hero.title}
            </h1>
          </div>
          {/* RIGHT SCROLL */}
          <div>
            {/* HERO CONTENT */}
            <div>
              {service.hero.image && (
                <img
                  src={service.hero.image}
                  alt={service.hero.title}
                  className="
                    w-[100%]
                    rounded-3xl
                    object-contain
                  "
                  loading="eager"
                />
              )}

              {service.hero.description && (
                <p className="text-lg  text-gray-300 mt-8 break-words">
                  {service.hero.description}
                </p>
              )}
            </div>

            {/* CONTENT SECTIONS */}
            <div className="mt-24">
              {service.sections?.map((section) => (
                <ServiceContentSection
                  key={section.heading}
                  section={section}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      {service.whyChooseUs && <ServiceWhyChoose data={service.whyChooseUs} />}

      {/* FAQ */}
      {service.faq && <ServiceFAQ faq={service.faq} />}

      {/* CTA */}
      {service.cta && <ServiceCTA cta={service.cta} />}
    </div>
  );
}
