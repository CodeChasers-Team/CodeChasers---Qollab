/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      "-primary-100": "#ecf1fe",
      "-primary-200": "#c3d5fd",
      "-primary-300": "#83adfb",
      "-primary-400": "#2488F2",
      "-primary-500": "#1864b5",
      "-primary-600": "#0d427b",
      "-primary-700": "#042346",
      },
    },
  },
  plugins: [],
};
