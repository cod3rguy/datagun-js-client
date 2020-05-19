const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'datagun.js',
    path: path.resolve(__dirname, 'dist'),
  },
}