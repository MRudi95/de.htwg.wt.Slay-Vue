//const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",
  transpileDependencies: ["vuetify"],

  /*
  configureWebpack: {
    plugins: [new GenerateSW()]
  },
  */

  pwa: {
    name: "Slay PWA",
    themeColor: "#fff",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
      // ...other Workbox options...
    },
    manifestOptions: {
      name: "Slay PWA",
      short_name: "Slay",
      start_url: "/",
      display: "fullscreen" //standalone
    }
  }
};
