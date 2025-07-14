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
      bg: 'hsl(0, 100%, 70%)',
      muted: 'hsl(0, 100%, 95%)',
      font: 'hsl(0, 100%, 20%)',
      light: 'hsl(0, 100%, 90%)',
    }
  },
  },
  plugins: [],
}