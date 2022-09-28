const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    // path: path.resolve(__dirname, './dist'),
    filename: './build/bundle.js',
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({title: 'Development', template: 'index.html'})],
  devServer: {
    historyApiFallback: true,
    static: {
        directory: 'index.html',
      },
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          } 
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  }
}