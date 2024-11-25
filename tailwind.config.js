/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgAnimals': "url('/src/assets/images/backgroundBruna.png')",
        'custom-gradient': 'linear-gradient(to right,  #D2DBEB, #FFE1DD, #BDF6E3, #E2D2F4)',
      },
      colors: {
        primary: '#ffe2de',
        primaryOp: '#ffe2de9a',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
