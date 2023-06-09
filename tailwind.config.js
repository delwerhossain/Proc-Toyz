/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          dark: "#815B5B",

          secondary: "#9E7676",

          primary: "#594545",

          neutral: "#4E5259",

          third: "#FFF8EA",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};

{
  /* 
color continuation --

white -- F9F7F7
light blue - DBE2EF
blue - 3F72AF
blue dark - 112D4E

            */
}
