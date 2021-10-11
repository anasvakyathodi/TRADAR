module.exports = {
  purge: {
    enabled: true,
    content: ["src/**/*.js", "src/**/*.jsx", "src/**/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
