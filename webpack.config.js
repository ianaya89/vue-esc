const isProd = process.env.ENV === 'prod'
const path = require('path')

const libraryName = 'vue-esc'
const projectRoot = path.resolve(__dirname, '/')
const outputFile = isProd ? `${libraryName}.min.js` : `${libraryName}.js`

const config = {
  entry: `${__dirname}/src/index.js`,

  devtool: isProd ? 'source-map' : false,

  output: {
    path: `${__dirname}/dist`,
    filename: outputFile,
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

module.exports = config
