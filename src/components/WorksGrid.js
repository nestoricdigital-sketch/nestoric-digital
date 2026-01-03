// import vasura from "./images/worksRecent/vasura.jpg";
// import carzen from "./images/worksRecent/cazen_web.jpg";
// import vhTech from "./images/worksRecent/vhTech.jpg";
// import wawa from "./images/worksRecent/wawa_web.jpg";

import surya from "./images/worksRecent/surya.jpg";
import magnum from "./images/worksRecent/magnum.jpg";
// import nandi from "./images/worksRecent/nandi.jpg";
// grid iamges
import vasura from "./images/worksgrid/vasura.png";
import carzen from "./images/worksgrid/carzen.jpg";
import sideAr from "./images/sideArrow.png";

import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// const works = {
//   left: [
//     {
//       id: 1,
//       title: "Carzen Logistics",
//       image: carzen,
//       grow: "flex-[1]",
//     },
//     {
//       id: 2,

//       title: "Magnum Opus",
//       image: magnum,
//       grow: "flex-[2.2]",
//     },
//   ],

//   right: [
//     {
//       id: 3,
//       title: "Vasura Virtual Experience",
//       image: vasura,
//       grow: "flex-[0.6]",
//     },
//     {
//       id: 4,
//       title: "Surya City",
//       image: surya,
//       grow: "flex-[1.8]",
//     },
//   ],
// };

export default function WorksGrid() {
  const navigate = useNavigate();

  const moveToWork = (id) => {
    navigate("/work", { state: { scrollTo: id } });
  };
  return (
    <div className="mx-2">
      <Fade direction="up" triggerOnce ascade damping={0.2}>
        <div className=" mt-16  md:mt-32"></div>
        <section
          className=" relative  flex flex-col md:flex-row items-center justify-center w-full"
          id="recentworks"
        >
          {/* Background text */}
          {/* <h1 className="absolute  left-10 text-[6rem] md:text-[12rem] font-extrabold text-gray-500 opacity-30 select-none z-10">
        Mission
      </h1> */}
          <h2
            className=" absolute bottom-[80%] sm:bottom-[80%] lg:bottom-[80%] left-1/2 -translate-x-1/2
             text-4xl sm:text-5xl md:text-7xl lg:text-9xl
             font-extrabold text-transparent bg-clip-text
             bg-gradient-to-b from-black via-gray-800 to-slate-100
             z-0 select-none text-center pointer-events-none
             opacity-20 sm:opacity-10 text-nowrap"
          >
            Recent Works
          </h2>
        </section>
        <section
          className="
    w-full px-2 md:px-4 py-6
     rounded-2xl
    lg:max-h-[1390px] lg:overflow-hidden
  "
        >
          <div className="max-w-8xl mx-auto">
            <div
              className="
        grid grid-cols-1
        lg:grid-cols-[1.6fr_1fr]
        gap-6 md:gap-20
        lg:h-full
      "
            >
              {/* ================= LEFT COLUMN ================= */}
              <div className="flex flex-col gap-6 md:gap-16 lg:h-full">
                <Fade direction="left" triggerOnce ascade damping={0.2}>
                  {/* Carzen – FULL HEIGHT ON MOBILE */}
                  <div
                    className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[24/14] overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => moveToWork("carzen")}
                  >
                    <img
                      src={carzen}
                      alt="Carzen Logistics"
                      className="w-full h-full md:object-cover object-fill  transition-transform duration-700 ease-out
               hover:scale-110"
                    />
                  </div>
                </Fade>
                {/* <Fade direction="up" triggerOnce damping={0.3}> */}
                {/* Magnum – BIG ON MOBILE */}
                <div
                  className="w-full aspect-[3/4] md:aspect-[4/3] lg:flex-1 lg:min-h-[280px] lg:max-h-[750px] overflow-hidden cursor-pointer"
                  onClick={() => moveToWork("magnum")}
                >
                  <Fade direction="left" triggerOnce ascade damping={0.3}>
                    <img
                      src={magnum}
                      alt="Magnum Opus"
                      className="w-full h-full object-cover  transition-transform duration-700 ease-out
               hover:scale-110"
                    />
                  </Fade>
                </div>
                {/* </Fade> */}
              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <div className="flex flex-col gap-6 lg:justify-between lg:h-full">
                <Fade direction="right" triggerOnce ascade damping={0.2}>
                  {/* Vasura – TALL ON MOBILE */}
                  <div
                    className="w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[24/29] overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer"
                    onClick={() => moveToWork("vasura")}
                  >
                    <img
                      src={vasura}
                      alt="Vasura"
                      className="w-full h-full object-cover  transition-transform duration-700 ease-out
               hover:scale-110"
                    />
                  </div>
                </Fade>
                {/* CTA Button */}
                {/* <div className="flex items-center justify-center py-4 lg:py-8 flex-shrink-0">
                  <Link
                    to="/work"
                    className="
              group flex items-center
              bg-[#353535] text-white
              px-6 py-3 rounded-full
              transition-all duration-300
              shadow-lg shadow-slate-500/40
            "
                  >
                    <span className="text-[20px] md:text-[31px] transition-transform duration-300 group-hover:-translate-x-2">
                      View Projects
                    </span>
                    <img
                      src={sideAr}
                      className="w-6 h-6 ml-2 mt-1 md:mt-2 transition-transform duration-300 group-hover:translate-x-2"
                      alt="arrow"
                    />
                  </Link>
                </div> */}
                <Link to="/work">
                  <button
                    className="mx-auto flex items-center justify-center w-[187px]
             bg-[#353535] text-white px-0 py-3 rounded-full
             transition-all duration-300 shadow-lg shadow-slate-500/40
             cursor-pointer group"
                  >
                    {/* Text */}
                    <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                      View Projects
                    </span>

                    {/* Arrow */}
                    <img
                      src={sideAr}
                      className="w-7 h-7 p-1 mt-[2px] ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      alt="side arrow"
                    />
                  </button>
                </Link>

                <Fade direction="right" triggerOnce ascade damping={0.3}>
                  {/* Surya – FULL IMAGE ON MOBILE */}
                  <div
                    className="w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[24/25] overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer"
                    onClick={() => moveToWork("surya")}
                  >
                    <img
                      src={surya}
                      alt="Surya City"
                      className="w-full h-full object-cover  transition-transform duration-700 ease-out
               hover:scale-110"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
