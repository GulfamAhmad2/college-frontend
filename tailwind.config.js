/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#003A6A",
          2: "#4782b2",
          3: "#fecd0b",
          4: "#FFFFFF",
          5: "#5191c2",
          6: "#a7aaac",
          7: "#000000",
          8: "#d5dbe0",
          9: "#004884",
          10: "#8ab5d6",
          11:"#00569d",
          12:"#EFEFEF",
          13:"#666666",
          
        },
      },
      
      boxShadow: {
        custom: "0 2px 20px rgba(34, 30, 31, 0.4)",
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        
        Inria: "var(--font-Inria)",
        
      },
    },
  },
  // plugins: [], #F4B11F #1E3A70 #2D3E50 #696969 #F5F5F5 #475660
};
