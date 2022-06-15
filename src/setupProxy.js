
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware("/api",{
            target:"https://bang.360.cn/",
            changeOrigin:true,
            pathRewrite:{"^/api":""},
            secure:"false"
        })
    )
};
