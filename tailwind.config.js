const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
        "screen-cut": ["calc(100vh - 4rem)", "calc(100dvh - 4rem)"],
      },
      minHeight: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },

      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Nunito", "Noto Sans Lao", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
