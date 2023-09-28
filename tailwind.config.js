/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '800px' },
      // => @media (max-width: 800px) { ... }

      'sm': { 'max': '650px' },
      // => @media (max-width: 450px) { ... }
    },

    extend: {
      colors: {
        theme:{
          1: '#0263C1',
          2: '#053C7D',
          3: '#042449',
        },
        light: {
          1: '#F0F0F4',
          2: '#DFDFE8'
        },
        dark: {
          1: '#3C3C3C',
          2: '#242424',
          3: '#303030'
        },
      },
      fontFamily: {
        'tlc': ['tlc', 'sans-serif'],
      },
    },
  },
  plugins: [],
}