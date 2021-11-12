module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'jordy-blue': {
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F6FBFE',
          '300': '#D1ECF9',
          '400': '#ADDEF5',
          '500': '#89CFF0',
          '600': '#57BBEA',
          '700': '#25A7E3',
          '800': '#1885B9',
          '900': '#116287'
        },
        'shocking': {
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FCF0F6',
          '300': '#F4CFE1',
          '400': '#EDADCC',
          '500': '#E58CB7',
          '600': '#DB5E9A',
          '700': '#D0307E',
          '800': '#A42562',
          '900': '#761B47'
        },
      },
      fontFamily: {
        'logo': ['Great Vibes']
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
