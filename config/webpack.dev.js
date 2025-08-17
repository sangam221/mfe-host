const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("../package.json");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new Dotenv({
      path: './.env.development', // Path to your .env file
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        aimhub: "aimhub@http://localhost:3001/remoteEntry.js",
        ft: "ft@http://localhost:3002/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});