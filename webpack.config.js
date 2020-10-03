/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

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
  new HtmlWebpackPlugin({
    template: 'index.html',
    favicon: 'assets/favicon.ico'
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename: 'index.css' }),
  new BundleAnalyzerPlugin()
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

const baseConfig = {
  context: path.resolve(__dirname, 'src/main'),
  entry: './index.js',
  output,
  plugins,
  devServer,
  devtool: 'eval-sourcemap',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules
  },
};

const prodConfig = {
  ...baseConfig,
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    }
  }
};

// Config object
module.exports = function(env = { production: false }) {
  return env.production ? prodConfig : baseConfig;
};
