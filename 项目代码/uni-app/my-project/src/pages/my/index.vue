<template>
    <div class="index">
        <div class="topMessage">
            <div class="image">
                <navigator
                    url="../my/index"
                    class="iconfont icon-wode2"
                ></navigator>
            </div>
            <div>{{ phone }}</div>
        </div>
        <div class="navBtn">
            <navigator
                class="nav"
                :url="item.url"
                v-for="(item, index) in arr"
                :key="index"
            >
                <div>
                    <icon
                        class="icon-box-img"
                        :type="item.type"
                        size="20"
                    ></icon>
                    <span>{{ item.title }}</span>
                </div>
                <text class="iconfont icon-jiantou"></text>
            </navigator>
        </div>
    </div>
</template>

<script>
import { decrypt } from "@/servers/index";
export default {
    data() {
        return {
            arr: [
                {
                    type: "waiting",
                    title: "我的面试",
                    url: "../sign/signList",
                },
                {
                    type: "info",
                    title: "客服中心",
                    url: "./service",
                },
                {
                    type: "success",
                    title: "支持项目",
                    url: "./pay",
                },
            ],
            phone: "",
        };
    },
    created() {
        let phone = wx.getStorageSync("phone");
        this.phone = phone;
    },
};
</script>

<style scoped>
.topMessage {
    height: 300rpx;
    background: rgb(251, 251, 251);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.icon-wode2 {
    color: rgb(25, 125, 191);
    font-size: 70rpx;
}
.image {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 50%;
    width: 110rpx;
    height: 110rpx;
}
.navBtn {
}
.nav {
    padding: 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1rpx solid rgb(238, 238, 238);
}
.nav div {
    display: flex;
    align-items: center;
}
.nav div span {
    margin-left: 30rpx;
}
</style>
