/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fafc",
          500: "#64748b",
          900: "#0f172a",
        },
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
};
