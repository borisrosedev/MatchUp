const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: "./main.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  resolve: {
    alias: {
      "liquidjs$": "liquidjs/dist/liquid.browser.esm",
      "alpinesjs$": "alpinejs/dist/module.esm",
      "vue$": "vue/dist/vue.esm-browser.js"
    },
    extensions: [".ts", ".js", ".vue", ".scss", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "index.html"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets"
        },
        {
          from: "data",
          to: "data"
        }
      ]
    })
  ]
};
