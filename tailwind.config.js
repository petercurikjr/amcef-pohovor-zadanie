module.exports = {
  content: ['./apps/**/*.{ts,html}', './libs/ui/src/**/*.{ts,html}'],
  theme: {
    fontSize: {
      h1: ['5rem', '7rem'],
      h2: ['2.5rem', '2.75rem'],
      h3: ['1.75rem', '2rem'],
      h4: ['1.25rem', '1.5rem'],
      h5: ['0.85rem', '1rem'],
      h6: ['0.6875rem', '0.875rem'],
    },
    fontFamily: {
      // This will be applied by default
      sans: 'Quicksand, sans-serif',
      // State explicitly to apply (class="font-appTitle")
      appTitle: 'Pushster, sans-serif',
    },
    colors: {
      primary: {
        grey: '#535353',
        white: '#fff',
        blue: '#3866e6',
      },
      secondary: {
        lightGrey: '#f3f3f3',
        darkGrey: '#282828',
        pink: '#ff0074',
        pink2: '#ef0081',
        purple: '#800080',
      },
    },
    screens: {
      md: { max: '599px' },
      lg: { min: '600px' },
      'md-lg': { min: '0px', max: '1023px' },
      xl: { min: '1024px' },
      '2-xl': { min: '1440px' },
    },
  },
};
