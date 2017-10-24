const { environment } = require('@rails/webpacker')

environment.loaders.set('coffee', {
  test: /\.coffee$/,
  use: ['cjsx-loader', 'coffee-loader']
})

module.exports = environment
