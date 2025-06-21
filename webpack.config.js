const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  mode: "production",
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/i, // ✅ This handles .css files
            use: ['style-loader', 'css-loader']
        }
    ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '.' },
        { from: 'public/react.png', to: '.' },
        { from: 'src/background.js', to: '.' }
      ]
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    static: "./dist",
    hot: true
  }
};
