const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

//IMPORTANTE!!
//Change currentGameName to switch between Games
//Used to:
// - figure out which project/game folder to use
const currentGameName = 'demo';

module.exports = {
  entry: `./src/${currentGameName}/app.js`,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', currentGameName, 'img'),
          to: path.resolve(__dirname, 'dist', 'tile_img'),
        },
        {
          from: path.resolve(__dirname, 'src', currentGameName, 'index.html'),
          to: path.resolve(__dirname, 'dist', 'index.html'),
        },
      ],
    }),
  ],
};