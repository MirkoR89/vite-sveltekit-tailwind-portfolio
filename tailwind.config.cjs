/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "polarNight0": "#2E3440",
        "polarNight1": "#3B4252",
        "polarNight2": "#434C5E",
        "polarNight3": "#4C566A",
        "snowStorm0": "#D8DEE9",
        "snowStorm1": "#E5E9F0",
        "snowStorm2": "#ECEFF4",
        "frostGreen": "#8FBCBB",
        "frostAqua": "#88C0D0",
        "frostIce": "#81A1C1",
        "frostBlue": "#5E81AC",
        "auroraRed": "#BF616A",
        "auroraOrange": "#D08770",
        "auroraYellow": "#EBCB8B",
        "auroraGreen": "#A3BE8C",
        "auroraViolet": "#B48EAD"
      },
    },
  },
  plugins: [],
}
