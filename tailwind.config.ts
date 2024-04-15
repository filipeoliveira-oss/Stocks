import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          100: "#d2d2d2",
          200: "#a4a4a4",
          300: "#777777",
          400: "#494949",
          500: "#1c1c1c",
          600: "#161616",
          700: "#111111",
          800: "#0b0b0b",
          900: "#060606"
        },
        'pyellow': {
          100: "#ffeecc",
          200: "#fedc9a",
          300: "#fecb67",
          400: "#fdb935",
          500: "#fda802",
          600: "#ca8602",
          700: "#986501",
          800: "#654301",
          900: "#332200"
},
      },
      spacing: {
        '40r':'40rem',
        '32r':'32rem',
        '90p':'95%'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
