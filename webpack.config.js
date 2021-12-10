const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/client/dist')
  },
  module: {
    rules: [
      {
        test: '/\.jsx?/',
        exclude: /node_modules/,
        include: path.join(__dirname, '/client/src'),
        use: 'babel-loader'
      }
    ]
  }
}
