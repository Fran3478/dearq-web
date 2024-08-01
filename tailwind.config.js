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
      "lg-1": "970px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      "3xl": "1790px",
      "4xl": "2190px",
      "5xl": "2560px"
    },
    extend: {
      fontFamily: {
        'lastica': ['Lastica', 'sans-serif'],
        'segoe': ['Segoe Script', 'sans-serif'],
      },
      boxShadow: {
        "innerFull": "inset 0px 0px 9px 0px rgb(0 0 0 / 0.3)"
      }
      
    },
  },
  plugins: [],
}