const CopyWebpackPlugin = require('copy-webpack-plugin')
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ favicon }) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: join(__dirname, '../index.html'),
        favicon,
      }),
      /*
        new CopyWebpackPlugin(
          [
            {
              from: join(__dirname, '../src/index.html'),
              to: 'index.html'
            }
          ]
        )
        /**/
    ],
    module: {
      rules: [{
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }]
    }
  }
}
