/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xl': '1280px',
        '1.5xl': '1440px',
        '2xl': '1536px',
      },
      padding: {
        'customPaddingMobile': '1rem', 
        'customPadding': '5rem', 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'sora': ['Sora', 'sans-serif'], 
        'body':   ["Open Sans", 'sans-serif']
      },
      colors: {
        'black': '#000000', 
        'light': ' #060606', 
        'inputColor':"#1A1D21",
        'borderColor':'#505050',
        'background': '#F3F4F6', 
        'textPrimary': '#dc2626', 
        'textSecondary': '#6B7280', 
        'buttonColor': '#f8fafc', 
      },
      keyframes: {
        topToBottom: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 5 },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },  
        },
      
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)',
        'gradient-to-l': 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)',
      },
      animation: {
        topToBottom: 'topToBottom 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        scroll: 'scroll 20s linear infinite',
        float: 'float 5s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
      },


    },
  },
  plugins: [
    require('tailwindcss-fluid-typography'),
  ]
}
