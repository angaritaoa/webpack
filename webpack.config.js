const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsx_rules = {
  test: /\.tsx?$/,
  use: [
    { loader: 'ts-loader' }
  ],
  include: path.resolve(__dirname, 'src')
}

const css_rules = {
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader'   }
  ],
  include: path.resolve(__dirname, 'src')
}

const rules = [ tsx_rules, css_rules ]

module.exports = {
  entry: {
    main: './src/index.ts'
  },
  devServer: {
    watchFiles: ['src/**/*'],
    port: 9000,
  },
  module: { rules },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: "body",
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
};
