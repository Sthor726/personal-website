// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or wherever your source files live
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fcf8eb",
      },
      boxShadow: {
        cartoon: "6px 6px 0 #000",
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
