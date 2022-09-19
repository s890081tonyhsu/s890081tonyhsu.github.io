// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'OtomeSound - A newbie Frontend Developer with additional Backend skills.'
        return args
      })
  }
}
