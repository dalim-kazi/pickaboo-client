const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'tablet': '465px',
      'laptop': "1391px",
      "mobile":"729px"
    },
  },
  plugins: [],
});

