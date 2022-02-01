module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgBlue: {
          light: "#1b7ac2",
          DEFAULT: "#1fb6ff",
          dark: "#2e51a2",
        },
      },
      screens: {
        custombp: { raw: "(max-height: 600px)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
