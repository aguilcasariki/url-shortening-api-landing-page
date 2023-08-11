/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "CTA-hover-bg": "#94E7E7",
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
