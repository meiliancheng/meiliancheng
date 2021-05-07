<template>
    <div>
        <map :latitude="latitude" :longitude="longitude" show-location></map>
        <cover-view class="footer">
            <cover-image
                @click="getCurLocation"
                src="https://img-u-4.51miz.com/Element/00/18/66/56/aa6dc0f7_E186656_c28f55f4.png!/quality/90/unsharp/true/compress/true/format/png/fh/320"
            ></cover-image>
            <cover-image
                @click="goMyPage"
                src="https://img2.baidu.com/it/u=1612602403,1081151383&fm=26&fmt=auto&gp=0.jpg"
            ></cover-image>
            <button @click="goAddSign">添加面试</button>
        </cover-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            longitude: "",
            latitude: "",
        };
    },
    methods: {
        getCurLocation() {
            wx.getLocation({
                success: (res) => {
                    this.longitude = res.longitude;
                    this.latitude = res.latitude;
                    wx.setStorageSync("site", {
                        longitude: res.longitude,
                        latitude: res.latitude,
                    });
                },
            });
        },
        goAddSign() {
            wx.navigateTo({ url: "/pages/sign/addSign" });
        },
        goMyPage() {
            wx.navigateTo({ url: "/pages/my/index" });
            // 小程序路由跳转
            /**
             * navigateTo: 追加，路由最多十层
             * redirectTo: 替换
             * navigateBack: 返回
             * reluanch：重新加载
             * switchTab: 切换tab
             */
        },
    },
    created() {
        this.getCurLocation();
    },
};
</script>

<style scoped>
map {
    width: 100%;
    height: calc(100vh - 100rpx);
}

.footer cover-image:first-child {
    position: fixed;
    bottom: 120rpx;
    left: 50rpx;
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
}

.footer cover-image:nth-child(2) {
    position: fixed;
    bottom: 120rpx;
    right: 50rpx;
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
}
.footer button {
    height: 100rpx;
}
</style>
