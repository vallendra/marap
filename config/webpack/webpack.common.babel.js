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
      favicon: path.resolve('src/images/icons/favicon.ico'),
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
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/images/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/images/icons/large-icon.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    })
  ]
};
