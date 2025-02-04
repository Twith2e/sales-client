module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        navy: "#1E3A8A",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
