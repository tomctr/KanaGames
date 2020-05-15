module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}

module.exports = {
  pwa: {
    name: 'Kana Learn',
    manifestOptions: {
      name : 'Kana Learn',
      icons: [
        {
          'src': 'img/icons/logo-196.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
      ]
    }
    ,
    appleMobileWebAppStatusBarStyle: '#1B1B2E',
    themeColor: '#1B1B2E',
  }
}