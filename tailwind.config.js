/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      animation: {
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1'
      }
    }
  }
};
