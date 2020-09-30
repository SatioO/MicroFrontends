module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      danger: "var(--color-danger)",
      warning: "var(--color-warning)",
      info: "var(--color-info)",
      background: "var(--color-background)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      overlay: "var(--color-overlay)"
    },
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
