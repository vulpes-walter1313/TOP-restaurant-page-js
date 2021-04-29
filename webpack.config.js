const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "img/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: ""},
        }, "css-loader",
            "sass-loader"]
      },
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },
  ]
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    host: '0.0.0.0',
  }
};