// // for framer motin cards-------
// import { motion, useTransform, motionValue, useScroll } from "framer-motion";
// import { useRef } from "react";
// const WorkCards = ({
//   i,
//   title,
//   description,
//   src,
//   url,
//   color,
//   range,
//   progress, // must be a MotionValue from parent
//   targetScale, // e.g., 0.8
// }) => {
//   //const container = useRef(null);

//   return (
//     <div className="flex bg-white max-w-[90%] h-full mx-auto px-10 gap-20 rounded-3xl shadow-xl">
//       {/* LEFT SIDE */}
//       <div className="flex-1 grid content-center gap-10">
//         <h2 className="text-4xl lg:text-8xl">{title}</h2>

//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
//           sapiente nam quidem quas adipisci architecto necessitatibus atque.
//         </p>

//         <button className="p-2 px-4 border border-black rounded-full mr-auto">
//           Find out more
//         </button>
//       </div>

//       {/* RIGHT SIDE IMAGE BOX */}
//       <div className="flex-1 h-full py-10">
//         <img
//           src={src}
//           className="w-full h-full"
//           // className={`${colors[imgBackground]} w-full h-full rounded-tr-[200px]`}
//         />
//       </div>
//     </div>
//   );
// };

// export default WorkCards;
