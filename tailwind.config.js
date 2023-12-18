const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0E0A0F',
      white: '#FFFFFF',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        1: '#40BFAA',
        2: '#4D66E5',
        4: '#F04242',
      },
      gray: {
        90: '#d3d3d3',
        92: '#dfdcdc',
        94: '#F0EEF1',
        98: '#FAF9FA',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
