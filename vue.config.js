// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'OtomeSound - A Front-end Developer with additional back-end skills.'
        return args
      })
  }
}
