const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  mode: "production",
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ], 
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
  performance: {
    hints: false
  }
}
