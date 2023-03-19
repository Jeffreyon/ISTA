/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    50: "#FFFAFF",
    100: "#FFAAF2",
    200: "#EB96DE",
    300: "#C36EB6",
    400: "#9B468E",
    DEFAULT: "#87327A",
    600: "#7D2870",
    700: "#69145C",
    800: "#550048",
    // black shades
    900: "#646464",
    930: "#282828",
    950: "#252641",
    955: "#505050",
    953:"#E6E1E5",
    // #blog page
    // primary header color
    960: "#87327A",
    965:"#0F7990",
    // about bg
    1000: "#F5F5F5",
  },
  secondary: {
    50: "#D7FFFF",
    100: "#AFFFFF",
    200: "#9BFFFF",
    300: "#87F1FF",
    400: "#73DDF4",
    DEFAULT: "#4BB5CC",
    600: "#5FC9E0",
    700: "#37A1B8",
    800: "#238DA4",
    900: "#0F7990",
  },
  tertiary: {
    50: "#FFFAD2",
    100: "#FFE6BE",
    200: "#FFBE96",
    300: "#FF966E",
    400: "#FF825A",
    DEFAULT: "#EF6E46",
    600: "#DB5A32",
    700: "#C7461E",
    800: "#B3320A",
  },
  supplementary: {
    50: "#FFFFBC",
    100: "#FFFF94",
    200: "#FFEB6C",
    300: "#FFD758",
    400: "#FFC344",
    DEFAULT: "#F4AF30",
    600: "#E09B1C",
    700: "#CC8708",
    800: "#B87300",
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: colors.primary.DEFAULT,
          secondary: colors.secondary.DEFAULT,
          tertiary: "#EF6E46",
          neutral: "#84cc16",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
