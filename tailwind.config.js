/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "boost-desktop": "url('./src/assets/bg-boost-desktop.svg')",
        "shorten-desktop": "url('./src/assets/bg-shorten-desktop.svg')",
        "boost-mobile": "url('./src/assets/bg-boost-mobile.svg')",
        "shorten-mobile": "url('./src/assets/bg-shorten-mobile.svg')",
      },
    },
    backgroundPosition: {
      "position-boost": "0rem -0.8rem",

      "position-shorten": "2.5rem -3.5rem",
      "position-none": "unset",
    },
    colors: {
      "bg-app": "#F0F1F6",
      white: "#ffffff",
      cyan: "hsl(180, 66%, 49%)",
      "dark-violet": "hsl(257, 27%, 26%)",

      red: "hsl(0, 87%, 67%)",

      gray: "hsl(0, 0%, 75%)",
      "grayish-violet": " hsl(257, 7%, 63%)",
      "very-dark-blue": "hsl(255, 11%, 22%)",
      "very-dark-violet": "hsl(260, 8%, 14%)",
    },
  },
  plugins: [],
};
