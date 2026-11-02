/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', '"Yu Gothic"', 'sans-serif'],
        serif: ['"Noto Serif JP"', '"Shippori Mincho"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
      },
    },
  },
  plugins: [],
};
