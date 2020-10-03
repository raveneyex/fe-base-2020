/**
 * 2020 Raveneyex's Front-End Base Project
 * MIT License
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
const transformJsx = require('babel-plugin-transform-react-jsx');

// Output config
const output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'public')
};

// Config for webpack-dev-server
const devServer = {
  contentBase: path.resolve(__dirname, 'public/assets'),
  stats: 'errors-only',
  open: true,
  port: 8080,
  compress: true
};

// Plugins list
const plugins = [
  new HtmlWebpackPlugin({ template: 'index.html' }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename: 'index.scss' }),
];

// File-loader config
const fileLoaderRule = {
  test: /\.(jpg|png|gif|svg)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: './assets/'
    }
  }]
};

const sassLoadersRule = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
};

const jsLoaderRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'stage-0', 'react'],
      plugins: [
        transformObjectRestSpread,
        transformJsx
      ]
    }
  }
};

// Rules
const rules = [fileLoaderRule, sassLoadersRule, jsLoaderRule];

// Config object
module.exports = {
  context: path.resolve(__dirname, 'src/main'),
  entry: './index.js',
  output,
  plugins,
  devServer,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules
  }
}
