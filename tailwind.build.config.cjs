/**** Tailwind build config for precompiling package styles ****/
const preset = require('./tailwind.preset.js');

module.exports = {
  presets: [preset],
  content: [
    // Only need to scan our own sources for classnames used in CSS via @apply or within our compiled outputs
    './src/**/*.{ts,tsx,css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
