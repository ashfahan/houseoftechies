module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#B4B4B4",
          light: "#7A7A7A",
          DEFAULT: "#2A2A2A",
          dark: "#1a1a1a",
        },
        secondary: "#FEAD74",
      },
    },
  },
  important: true,
  plugins: [],
}
