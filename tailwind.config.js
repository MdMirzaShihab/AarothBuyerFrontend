/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earthy-yellow': '#D4A373',
        'earthy-brown': '#8C644A',
        'earthy-beige': '#F5ECD9',
        'earthy-tan': '#E6D5B8',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
};
