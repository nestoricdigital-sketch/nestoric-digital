// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         scroll: "scroll 25s linear infinite",
//       },
//       keyframes: {
//         // Top line: from top-right toward center
//         scroll: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//         // dark theme services marquee
//         marquee: {
//           from: { transform: "translateX(0)" },
//           to: { transform: "translateX(-50%)" },
//         },
//         "scroll-down": {
//           "0%": { transform: "translate(0)" },
//           "100%": { transform: "translate(-50%)" },
//         },
//         // Bottom line: from bottom-left toward center
//         "scroll-up": {
//           "0%": { transform: "translate(-50%)" },
//           "100%": { transform: "translate(0)" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//       },
//       animation: {
//         // dark theme services marquee
//         marquee: "marquee 25s linear infinite",

//         left: "scroll-down 10s linear infinite",
//         right: "scroll-up 10s linear infinite",

//         "float-slow": "float 4s ease-in-out infinite",
//       },
//     },
//     fontFamily: {
//       inter: ["Inter", "sans-serif"],
//       josefin: ['"Josefin Sans"', "sans-serif"],
//       mada: ["Mada", "sans-serif"],
//       geist: ['"Geist"', "sans-serif"],
//       instrument: ['"Instrument Serif"', "serif"],
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 4s linear infinite",
        scroll: "scroll 25s linear infinite",
        // marquee: "marquee 25s linear infinite",
        // left: "scroll-down 10s linear infinite",
        // right: "scroll-up 10s linear infinite",
        // "float-slow": "float 4s ease-in-out infinite",
      },

      keyframes: {
        border: {
          to: {
            "--border-angle": "360deg",
          },
        },
        // scroll: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-50%)" },
        // },

        // marquee: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-50%)" },
        // },

        // "scroll-down": {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-50%)" },
        // },

        // "scroll-up": {
        //   "0%": { transform: "translateX(-50%)" },
        //   "100%": { transform: "translateX(0)" },
        // },

        // float: {
        //   "0%, 100%": { transform: "translateY(0)" },
        //   "50%": { transform: "translateY(-10px)" },
        // },
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      josefin: ['"Josefin Sans"', "sans-serif"],
      mada: ["Mada", "sans-serif"],
      geist: ['"Geist"', "sans-serif"],
      instrument: ['"Instrument Serif"', "serif"],
    },
  },

  plugins: [],
};
