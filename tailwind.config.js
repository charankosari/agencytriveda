/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'customPaddingMobile': '1rem', 
        'customPadding': '5rem', 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'sora': ['Sora', 'sans-serif'], 
      },
      colors: {
        'main': '#1D4ED8', 
        'accent': '#F59E0B', 
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
          '100%': { opacity: 1 },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },  // Move by 50% to cover half of the total width since we're duplicating
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
      },


    },
  },
  plugins: [],
}
