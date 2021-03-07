const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const ENV = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
	mode: ENV,
	entry: './src/app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[chunkhash].js',
	},

	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},

	module: {
		rules: [
			{

				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
				], 
			},

			{
 				test: /\.(png|jpe?g|gif)$/i,
        		use: [
          			{
            			loader: 'file-loader',
          			},
        		],
			},
		],
	},

	plugins: [

		new HtmlWebpackPlugin({
			template: './src/public/index.html'
		}),

		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),

		new CleanWebpackPlugin(),

		new CopyPlugin({
			patterns: [
			 	{
			 		from: './src/icon/icon.png',
			 		to: path.resolve(__dirname, 'dist')
			 	},
			 	{
			 		from: './src/png/right-arrow.png',
			 		to: path.resolve(__dirname, 'dist')
			 	}
			]
		})
	],
}