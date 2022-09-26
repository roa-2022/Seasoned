const path = require('path')

// For .env file
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',

  // For .env file
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        APP_ID: JSON.stringify(process.env.APP_ID),
        EDAMAM_API_KEY: JSON.stringify(process.env.EDAMAM_API_KEY),
        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
        AUTH0_AUDIENCE: JSON.stringify(process.env.AUTH0_AUDIENCE),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
