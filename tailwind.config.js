/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },

      fontSize: {
        h1: ["64px", "75px"],
        h2: ["36px", "40px"],
        h3: ["24px", "30px"],
        h4: ["18px", "20px"],
        h5: ["16px", "20px"],
        leadP: ["24px", "30px"],
        p: ["18px", "25px"],
      },

      colors: {
        bgBlack: "#111111",
        buttonBlue: "#009ED0",
        pGray: "#CFCFCF",
      },

      backgroundImage:{
        'hero1': "url('../src/assets/Hero1.png')",
        'hero2': "url('../src/assets/Hero2.png')",
        'hero3': "url('../src/assets/Hero3.png')",
        'hero4': "url('../src/assets/contact-bg.png')",
        
      }
    },
  },
  plugins: [],
};
