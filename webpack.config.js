/**
 * 2020 Raveneyex's Front-End Base Project
 * MIT License
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  new MiniCssExtractPlugin({ filename: 'index.css' }),
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
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    MiniCssExtractPlugin.loader,
    'css-loader', 
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    },
    'postcss-loader'
  ]
};

const jsLoaderRule = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};

// Rules
const rules = [fileLoaderRule, sassLoadersRule, jsLoaderRule];

// Config object
module.exports = function(env = { production: false }) {
  return {
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
    },
    devtool: env.production ? false : 'eval-sourcemap'
  };
}