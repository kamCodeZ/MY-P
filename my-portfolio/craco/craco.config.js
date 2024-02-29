// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@calculator': path.resolve(__dirname, '../src/apps/calculator'),
      '@quote-generator': path.resolve(__dirname, '../src/apps/quote-generator'),
    },
  },
};
