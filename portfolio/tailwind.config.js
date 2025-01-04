// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rgb-border': 'rgbBorder 5s linear infinite',
      },
      keyframes: {
        rgbBorder: {
          '0%': { borderColor: 'rgb(255, 0, 0)' },
          '25%': { borderColor: 'rgb(0, 255, 0)' },
          '50%': { borderColor: 'rgb(0, 0, 255)' },
          '75%': { borderColor: 'rgb(255, 255, 0)' },
          '100%': { borderColor: 'rgb(255, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}