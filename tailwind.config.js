/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xxs": "375px",
      "xs": "465px",
      'sm': '640px',
      'md': '768px',
      "ml": "860px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'tt-commons-pro-expanded-bold': ['TT Commons Pro Expanded Bold', 'sans-serif'],
      },
      boxShadow: {
        "innerFull": "inset 0px 0px 9px 0px rgb(0 0 0 / 0.3)"
      }
      
    },
  },
  plugins: [],
}