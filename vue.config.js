module.exports = {
  css:{
    loaderOptions:{
      stylus:{
        //传递公共变量到stylus
        import:['~@/assets/css/global.styl','~@/assets/css/public.styl']
      }
    }
  }
}
