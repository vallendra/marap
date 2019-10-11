import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

import path from 'path';
import paths from './paths';
import rules from './rules';

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Marap App',
      template: paths.templatePath,
      favicon: path.resolve('public/images/icons/favicon.ico'),
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/src-sw.js',
      swDest: 'sw.js'
    }),
    new WebpackPwaManifest({
      name: 'MAPAR - My Mantap React App',
      short_name: 'Mapar',
      description: 'Build PWA-ready React Project',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      crossorigin: null, // can be null, use-credentials or anonymous
      ios: {
        'apple-mobile-web-app-title': 'Mapar',
        'apple-mobile-web-app-status-bar-style': 'black'
      },
      icons: [
        {
          src: path.resolve('public/images/icons/icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true
        },
        {
          src: path.resolve('public/images/icons/large-icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup'
        },
        {
          src: path.resolve('public/images/icons/icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android')
        }
      ]
    })
  ]
};
