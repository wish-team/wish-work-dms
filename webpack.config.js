const path = require("path");

module.exports = {
  //   mode: "production",
  entry: "./dist/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd", // Important
    umdNamedDefine: true, // Important
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "asset/resource/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
