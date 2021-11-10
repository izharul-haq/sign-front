module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'botticelli': {
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#EEF1F6',
          '500': '#CCD5E5',
          '600': '#AAB9D4',
          '700': '#889DC3',
          '800': '#6782B1',
          '900': '#4D6898'
        },
        'victoria': {
          '50': '#DBD5EB',
          '100': '#CDC4E2',
          '200': '#B0A1D2',
          '300': '#937FC1',
          '400': '#765CB1',
          '500': '#5E4793',
          '600': '#483671',
          '700': '#32264E',
          '800': '#1C152C',
          '900': '#060509'
        },
        'lightning-yellow': {
          '50': '#FFFDF9',
          '100': '#FEF6E0',
          '200': '#FDE6AE',
          '300': '#FCD77C',
          '400': '#FAC84B',
          '500': '#F9B919',
          '600': '#D99D06',
          '700': '#A87904',
          '800': '#765503',
          '900': '#443102'
        },
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
