/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffe2de',
        primaryOp: 'ffe2de9a',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right,  #EBF8FF, #FDE2E4, #F3D1E2, #E0F4F1, #FFE7BA, #CBBEAE)',
    },
  },
  },
  plugins: [],
}