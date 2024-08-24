const plugins = [
  require('./main'),
  require('./sass'),
  require('./javascript'),
  require('./html'),
  require('./assets'),
]

const { merge } = require('webpack-merge')

module.exports = (argv, config, override) => {
  const options = plugins.map((p) => p(override, argv))
  const webpackOptions = merge(...options, config)
  return webpackOptions
}
