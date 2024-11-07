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
  			'navbar': '0px 0px 10px black',
        'auth':'0px 0px 8px black'
  		},
  		fontFamily: {
  			'aclonica': ['Aclonica']
  		},
      backgroundColor:{
        'dBlue-lBlue':'linear-gradient(to bottom, #124AE4, #4C77EC)',
      },
      backgroundImage:{
        'blueTriangle':'linear-gradient(158deg, white 45%, rgba(76, 119, 236,0.7) 45.09%, #4C77EC 55%)'
      },
      transitionProperty:{
        'bg-in-out':'transition:background-color',
        
      },
      transitionDuration: {
        '500': '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      animation:{
        'open-menu':'open-menu forwards ease 0.4s',
        'close-menu':'close-menu forwards ease 0.4s'
      },
      keyframes:{
        'open-menu':{
          '0%':{width:'0px',overflow:'hidden',padding:'0'},
          '100%':{width:'250px'}

        },
        'close-menu':{
          '0%':{width:'250px'},
          '100%':{width:'0',padding:'0',visibility:'hidden',overflow: 'hidden'}

        }
      },
      colors:{
        'erorrs':'#D4557B'
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

