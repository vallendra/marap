import paths from './paths';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      root: paths.root
    })
  ],
  devtool: 'source-map'
};
