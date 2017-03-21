const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: [
	  	'react-hot-loader/patch',
	    './index.js'
	  ]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NamedModulesPlugin(),
  	new HtmlWebpackPlugin({
  		template: './index.html'
  	})
  ],
  devServer: {
  	port: 8081,
  	contentBase: path.resolve(__dirname, 'dist'),
  	hot: true
  }
}