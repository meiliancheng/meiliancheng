const Fly = require("flyio/dist/npm/wx");
const fly = new Fly();

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://sign.jasonandjay.com";
//添加请求拦截器
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    let openid = wx.getStorageSync("openid");
    if (openid) {
        request.headers["openid"] = openid;
    }

    return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data;
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
        wx.showToast({
            title: err.toString(),
        });
    }
);
export default fly;
