module.exports = process.env.ENVIRONMENT === 'development' ? {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
} : {
  publicPath: "/Vue3WhatsapperJS/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
};
