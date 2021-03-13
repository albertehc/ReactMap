const path = require('path');

module.exports = {
  extensions: ['.js', '.jsx', '.scss'],
  alias: {
    '@components': path.resolve(__dirname, './src/components'),
    '@redux': path.resolve(__dirname, './src/redux'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@helpers': path.resolve(__dirname, './src/helpers'),
    '@services': path.resolve(__dirname, './src/services'),
  },
};
