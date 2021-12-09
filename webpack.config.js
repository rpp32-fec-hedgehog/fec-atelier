const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/src',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '/client/dist')
  },
  module: {
    rules: [
      {
        test: '/\.jsx?/',
        include: path.join(__dirname, '/client/src'),
        use: 'babel-loader'
      }
    ]
  }
}