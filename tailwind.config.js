const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      custom: ['Gotham-Black', 'Gotham-Book', 'Gotham-Medium'],
    },
    extend: {
      colors: {
        primary: {
          100: '#f0ffcc',
          200: '#e1ff99',
          300: '#d2ff66',
          400: '#c3ff33',
          DEFAULT: '#b4ff00',
          600: '#90cc00',
          700: '#6c9900',
          800: '#486600',
          900: '#243300',
          light: '#83CA32',
        },
      },
      fontSize: {
        '16-c': ['16px', '28px'],
        '32-c': ['32px', '36px'],
        '38-c': ['38px', '50px'],
      },
      spacing: {
        7.5: '1.875rem',
        /* 84: '21rem',
        88: '22rem',
        92: '23rem', */
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
