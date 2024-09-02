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
       
      },
    },
  },
  plugins: [],
}
