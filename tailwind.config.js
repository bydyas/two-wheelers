/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pgo: {
          100: '#FCF7D7',
          200: '#FAEFB1',
          300: '#F2DE87',
          400: '#E6CA66',
          500: '#D3AF37',
          600: '#B69127',
          700: '#98751B',
          800: '#7A5A11',
          900: '#654709',
        },
        sgr: {
          100: '#CFFDD8',
          200: '#9FFBBA',
          300: '#6FF4A3',
          400: '#48EA97',
          500: '#13DD89',
          600: '#0DBE87',
          700: '#099E7E',
          800: '#068071',
          900: '#036A67',
        },
        inb: {
          100: '#CDFAFD',
          200: '#99F1FD',
          300: '#66DFFA',
          400: '#40C9F7',
          500: '#04A7F2',
          600: '#0281D0',
          700: '#0161AE',
          800: '#01458C',
          900: '#003174',
        },
        way: {
          100: '#FDFDD9',
          200: '#FEFBB6',
          300: '#FBF891',
          400: '#F7F375',
          500: '#F1EC48',
          600: '#D0CA34',
          700: '#AFA824',
          800: '#8C8616',
          900: '#736F0C',
        },
        dre: {
          100: '#FFEDDF',
          200: '#FFD6C0',
          300: '#FFBAA1',
          400: '#FF9F89',
          500: '#FF7362',
          600: '#DB4C48',
          700: '#B73138',
          800: '#941F2F',
          900: '#7A1229',
        },
        neu: {
          100: '#FFFFFF',
          200: '#D0E1E9',
          300: '#A1B5C0',
          400: '#6A7885',
          500: '#252C33',
          600: '#1B222C',
          700: '#121824',
          800: '#0B111D',
          900: '#080C18',
        },
      }
    },
  },
  plugins: [],
}