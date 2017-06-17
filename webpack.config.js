var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    all: './source/stylesheets/site.css.scss'
  },
  output: {
    path: path.join(__dirname, '.tmp/dist'),
    filename: 'stylesheets/all.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("stylesheets/all.css"),
  ]
};
