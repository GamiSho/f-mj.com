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
        0: 'rgba(0, 0, 0, 0.2)',
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
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
      'sans': ['"Noto Sans"', '"Noto Sans JP"'],
      'serif': ['"Noto Serif"', '"Noto Serif JP"'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      md: '16px',
      ml: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '38px',
      '6xl': '40px',
    },
  },
  variants: {
    extend: {
      gridColumn: ['first'],
    },
  },
}
