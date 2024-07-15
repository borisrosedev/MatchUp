const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const path = require("path")

module.exports = {
	mode: "development",
	entry: "./main.ts",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /.ts$/,
				use: "ts-loader"
			},
			{
				test: /.(png|gif|jpe?g)$/,
				type: "asset/resource"
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: "index.html"
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "assets",
					to: "assets"
				}
			]
		})
	]
}
