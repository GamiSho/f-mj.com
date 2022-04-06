/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './nuxt.config.ts',
  ],
  theme: {
    colors: {
      blue: '#015a8b',
      red: '#ef4637',
      purple: '#c4a2ef',
      white: '#fff',
      black: '#1a1a1a',
      green: '#2cb642',
      yellow: '#fde047',
      gray: {
        100: 'rgb(243 244 246)',
        200: 'rgb(229 231 235)',
        400: 'rgb(156 163 175)',
        600: 'rgb(75 85 99)',
        900: 'rgb(17 24 39)',
      },
      transparent: 'transparent',
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: 0,
        lg: 0,
      },
    },
    fontFamily: {
      body: [
      '"Noto Sans"',
      '"Noto Sans JP"',
      '"Noto Serif"',
      '"Noto Serif JP"',
      ],
    },
    fontSize: {
      sm: ['12px', '24px'],
      base: ['14px', '24px'],
      md: ['16px', '24px'],
      ml: ['18px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '24px'],
      '2xl': ['28px', '36px'],
      '3xl': ['32px', '40px'],
      '4xl': ['40px', '48px'],
      '5xl': ['48px', '56px'],
      '6xl': ['54px', '56px'],
    },
  },
  variants: {
    extend: {
      gridColumn: ['first'],
    },
  },
}
