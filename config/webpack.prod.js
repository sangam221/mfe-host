const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("../package.json");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "/app/dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.PROD_REMOTE1_URL': JSON.stringify(process.env.PROD_REMOTE1_URL),
        'process.env.PROD_REMOTE2_URL': JSON.stringify(process.env.PROD_REMOTE2_URL),    
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        aimhub: "aimhub@http://13.49.23.114/aimhub/remoteEntry.js",
        ft: "ft@http://13.49.23.114/ft/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});