/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ["RobotoMono", "sans-serif"],
        Oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        textWhite: "#82A3A1",
        bgCustom: "#0d1821",
        lightGreen: "#2CD196",
        lightBg: "#233849",
      },
      fontSize: {
        sizeText: "18px",
        sizeButton: "24px",
        sizeTitre: "48px",
        sizeTitreMobile: "32px",
      },
    },
  },
  plugins: [],
};
