const { join } = require('path')

module.exports = (override, argv) => {
  return {
    mode: argv.mode || 'development',
    devtool: "source-map",
    watch: argv.mode !== 'production',
    watchOptions: {
      poll: true
    },
    target: ['web', 'es5'],
    output: {
      filename: '[name].bundle.js',
      crossOriginLoading: false,
      publicPath: '/',
    },
    optimization: {
      minimize: false,
    },
    entry: {
      webpack: join(__dirname, '../src/index.js')
    },
  }
}