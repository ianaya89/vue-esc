const path = require('path')

const libraryName = 'vue-esc'
const projectRoot = path.resolve(__dirname, '/')

const config = {
  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/dist`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = `${libraryName}.js`
    config.devtool = false
  }

  if (argv.mode === 'production') {
    config.output.filename = `${libraryName}.min.js`
    config.devtool = 'source-map'
  }

  return config
}
