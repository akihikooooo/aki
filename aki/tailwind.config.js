/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      Montserrat:["Montserrat"],
      HindSiliguri:["Hind Siliguri"],
      Lora:["Lora"],
      MontBSub:["Montserrat-SubrayadaB"],
      MontRSub:["Montserrat-SubrayadaR"]
    },
    colors: {
      bg: 'hsl(360, 100%, 70%)',
      muted: 'hsl(360, 100%, 95%)',
      font: 'hsl(360, 100%, 20%)',
      light: 'hsl(360, 100%, 90%)',
    }
  },
  },
  plugins: [],
}