module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "border-header": "#e5e5e5",
      },
      width: {
        "100%": "100%",
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
    },
  },
  plugins: [],
};
