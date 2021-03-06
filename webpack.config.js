const { resolve } = require('path')

module.exports = {

  entry: `${__dirname}/src/index.js`,

  output: {
    filename: 'bundle.js',

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [ 'babel-loader', ],
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
        {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
}
