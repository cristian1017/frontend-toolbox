const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { runtime } = require('webpack');

const rulesForStyle = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}

const rulesForJS = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          }
        ],
      ]
    },
  }
}

const rules = [rulesForJS, rulesForStyle]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: { rules },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};