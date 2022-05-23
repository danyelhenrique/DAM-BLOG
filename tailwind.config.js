const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "border-header": "#e5e5e5",
        "border-default": "#e5e5e5",
      },
      width: {
        "100%": "100%",
      },
      height: {
        "100%": "100%",
        "100vh": "100vh",
      },
      maxWidth: {
        "section-max": "100rem",
        "home-left-max": "1600px",
      },
      padding: {
        "section-padding": "4rem",
      },
      gridTemplateRows: {
        "home-first-section-left": "minmax(2.5rem, auto) 1fr",
      },
      gap: {
        "home-left-area-gap": "2rem",
      },
      border: {
        "default-light-border-color": "#e5e5e5",
      },
      backgroundImage: {
        "news-letter-bg": 'url("/news-letter-bg.jpg")',
      },
      lineHeight: {
        "custom-line-height-md": "1.1875em",
      },
      fontFamily: {
        BrandonText: ["BrandonText", ...defaultTheme.fontFamily.sans],
        Druk: ["Druk", ...defaultTheme.fontFamily.sans],
        LabGrotesque: ["LabGrotesque", ...defaultTheme.fontFamily.sans],
        ProximaNova: ["ProximaNova", ...defaultTheme.fontFamily.sans],
        WiredMono: ["WiredMono", ...defaultTheme.fontFamily.mono],
        BreveText: ["BreveText", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
