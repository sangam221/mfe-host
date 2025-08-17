const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("../package.json");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new Dotenv({
      path: './.env.production', // Path to your .env file
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        aimhub: "aimhub@${process.env.PROD_AIMHUB_URL}/remoteEntry.js",
        ft: "ft@${process.env.PROD_FT_URL}/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});