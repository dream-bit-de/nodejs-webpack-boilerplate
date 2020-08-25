/*****************************************
 * The PROD Config for Webpack.          *
 * @see https://webpack.js.org/concepts/ *
 *****************************************/

const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'node',
  externals: [nodeExternals({ modulesFromFile: true }), 'utf-8-validate', 'bufferutil'],
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  optimization: {
    moduleIds: 'hashed',
    concatenateModules: true,
    usedExports: true
  }
};
