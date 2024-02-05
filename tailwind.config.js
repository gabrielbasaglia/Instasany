/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#1D3531",
        "green-actived": "#5D8A83",
      },
      maxWidth: {
        grid: "77.5rem",
      },
    },
  },
  plugins: [],
};
