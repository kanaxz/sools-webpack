const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|webm|stl|gltf|mp3)$/i,
          type: 'asset/resource',
        },
        /*
        {
          test: /\.ico$/,
          loader: 'file-loader'
        }
        */
      ],
    },
  }
}
