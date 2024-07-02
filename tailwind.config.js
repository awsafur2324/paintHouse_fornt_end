/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: '"Inter", sans-serif',
        display1: '"Lato", sans-serif',
        display2: '"Montserrat", sans-serif',
        display3: '"Open Sans", sans-serif',
        display4: '"Roboto", sans-serif',
        banner: '"Rancho", cursive',
      },
      colors: {
        dark: "#1E0342",
        blue: "#0E46A3",
        mid_light: "#9AC8CD",
        light: "#E1F7F5",
      },
      animation: {
        'scale': 'scale 20s  ease-in-out  infinite',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: ' scale(1.25)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
