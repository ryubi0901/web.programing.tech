module.exports = {
  content: ['./src/components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '3rem',
        lg: '4rem',
        xl: '8.25rem',
        '2xl': '10.5rem',
      },
    },
    fontFamily: {
      sans: ['var(--font-noto)', 'sans-serif'],
      english: ['var(--font-lato)', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    letterSpacing: {
      xs: '-.1em',
      sm: '-0.5em',
      normal: '0',
      lg: '.05em',
      xl: '.1em',
      '2xl': '.15em',
      '3xl': '.2em',
    },
    extend: {
      colors: {
        green: {
          900: '#22654c',
          700: '#297a5c',
          500: '#32936f',
          200: '#99c9b7',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {},
}
