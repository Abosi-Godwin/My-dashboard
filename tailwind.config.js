/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-color-1": "#F2F9FD",
        "my-color-2": "#E5F1F9",
        "my-color-3": "#C4E3F3",
        "my-color-4": "#90CBE9",
        "my-color-5": "#55B1DB",
        "my-color-6": "#3097C7",
        "my-color-7": "#1E719D",
        "my-color-8": "#1B6189",
        "my-color-9": "#1A5272",
        "my-color-10": "#1B465F",
        "my-color-11": "#122D3F",
      },
      width: {
        "1/10": "15%",
        "9/10": "85%",
      },
    },
  },
  plugins: [],
};
