const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    // new WebpackPwaManifest({
    //   name: "Petgram - Tu app de fotos de mascotas",
    //   short_name: "Petgram 🐱",
    //   description:
    //     "Con Petgran puedes encontrar fotos de animales domésticos muy facilmente.",
    //   background_color: "#ffffff",
    //   theme_color: "#b1a",
    //   crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    //   icons: [
    //     {
    //       src: path.resolve("src/assets/icon.png"),
    //       sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
    //     },
    //   ],
    // }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3008,
    open: true,
  },
};
