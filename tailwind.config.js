// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sakkal: ["Sakkal Majalla", "serif"],
        fontSize: 16,
        // إضافة خط Sakkal Majalla
      },
    },
  },
  plugins: [],
};
