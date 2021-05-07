<template>
    <ul>
        <button open-type="contact">打开客服会话</button>
        <button open-type="share">分享</button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            获取手机号
        </button>
        <button @click="getUserProfile">获取用户信息</button>
        <button open-type="launchApp">打开app</button>
        <button open-type="openSetting">授权页面</button>
        <button open-type="feedback">反馈页面</button>
    </ul>
</template>

<script>
import { decrypt } from "@/servers/index";
export default {
    methods: {
        getUserProfile() {
            wx.getUserProfile({
                desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res);
                },
            });
        },
        async getPhoneNumber(res) {
            let { iv, encryptedData } = res.detail;
            let result = await decrypt({ iv, encryptedData });
            console.log(result);
        },
    },
};
</script>

<style></style>
