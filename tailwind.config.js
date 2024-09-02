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
      keyframes: {
        topToBottom: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        topToBottom: 'topToBottom 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
