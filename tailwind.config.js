/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-boost-desktop": "url('./src/assets/bg-boost-desktop.svg')",
        "bg-shorten-desktop": "url('./src/assets/bg-shorten-desktop.svg')",
        "bg-boost-mobile": "url('./src/assets/bg-boost-mobile.svg')",
        "bg-shorten-mobile": "url('./src/assets/bg-shorten-mobile.svg')",
      },
    },
    backgroundPosition: {
      "boost-position": "2.5rem -3.5rem",

      "shorten-position": "2.5rem -3.5rem",
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
