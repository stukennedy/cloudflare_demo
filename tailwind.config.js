/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './functions/**/*.ts'],
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        continuata: {
          primary: '#03CAF5',
          secondary: '#43a047',
          accent: '#18b251',
          neutral: '#1c2025',
          'base-100': '#282C34',
          info: '#7E9EE7',
          success: '#71E0C8',
          warning: '#FBB83C',
          error: '#F36B59',

          '--rounded-btn': '0.3rem',
          '.btn': {
            'font-weight': '500',
            height: '2.6rem',
            'min-height': '2.6rem',
            'line-height': '1.75',
            'letter-spacing': '0.02857em',
          },
        },
      },
    ],
  },
};
