import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      colors: {
        primary1: {
          50: '#f2f7fb',
          100: '#e7f0f8',
          200: '#d3e2f2',
          300: '#b9cfe8',
          400: '#9cb6dd',
          500: '#839dd1',
          600: '#6a7fc1',
          700: '#6374ae',
          800: '#4a5989',
          900: '#414e6e',
          950: '#262c40',
        },
        fern: {
          50: '#f6f9f4',
          100: '#e7f3e5',
          200: '#cfe7cb',
          300: '#a9d3a2',
          400: '#6faf64',
          500: '#58994e',
          600: '#457d3c',
          700: '#396332',
          800: '#30502b',
          900: '#284225',
          950: '#122310',
        },

      },
    },
  },
}
