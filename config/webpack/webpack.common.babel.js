import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
    })
  ]
};
