const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/parkbirdApp", {
      target: "https://www.puniaokeji.com/", //服务器接口地址
      changeOrigin: true,
      secure: false,
    })
  );
};
