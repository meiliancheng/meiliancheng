<script>
const Fly = require("flyio/dist/npm/wx");
//实例化
const fly = new Fly();
export default {
    onLaunch: function() {
        wx.login({
            async success(res) {
                if (res.code) {
                    let result = await fly.post(
                        "https://sign.jasonandjay.com/user/code2session",
                        {
                            code: res.code,
                        }
                    );
                    wx.setStorageSync("phone", result.data.data.phone);
                    wx.setStorageSync("openid", result.data.data.openid);
                } else {
                    console.log("登录失败!", res.errMsg);
                }
            },
        });
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    },
};
</script>

<style>
/*每个页面公共css */
page {
    height: 100%;
    width: 100%;
}
</style>
