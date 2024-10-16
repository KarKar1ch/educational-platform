/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			navbar: '0px 0px 10px black'
  		},
  		fontFamily: {
  			'aclonica': ['Aclonica','san-serif']
  		},
      backgroundColor:{
        'dBlue-lBlue':'linear-gradient(to bottom, #124AE4, #4C77EC);'
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

