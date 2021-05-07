<template>
    <view class="box">
        <div class="head_top">
            <picker mode="region" @change="regionChange">
                <span class="picker"> {{ region[0] }} | </span>
            </picker>
            <input type="text" v-model="key" @input="keyChange" />
        </div>

        <div class="Addresslist">
            <li
                v-for="(item, index) in addressList"
                :key="index"
                @click="goaddSign(item)"
            >
                <img src="@/static/IMG/listP.png" alt="" />
                <div>
                    <p>{{ item.title }}</p>
                    <p>{{ item.address }}</p>
                </div>
            </li>
        </div>
    </view>
</template>

<script>
import QQMapWX from "@/utils/qqmap-wx-jssdk.js";
const key = "WCLBZ-Q6L6S-C4NO6-6BPPE-OEV2F-52FGA";

export default {
    data() {
        return {
            region: ["北京"],
            city: "",
            key: "",
            addressList: [],
        };
    },
    methods: {
        regionChange(e) {
            this.region = e.target.value;
        },
        keyChange(e) {
            let _this = this;
            if (!e.target.value) {
                return;
            }
            // 调用接口
            this.qqmapsdk.search({
                keyword: e.target.value,
                region: this.region[1],
                success: function(res) {
                    _this.addressList = res.data;
                },
            });
        },
        goaddSign(item) {
            wx.navigateTo({ url: "/pages/sign/addSign" });
            this.$store.commit("getAddress", item.address);
        },
    },
    created() {
        this.qqmapsdk = new QQMapWX({
            key,
        });
    },
};
</script>

<style lang="scss" scoped>
.box {
    .head_top {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10%;
        input {
            margin-left: 5%;
        }
    }
    .Addresslist {
        width: 100%;
        height: 400px;
        li {
            width: 100%;
            height: 60px;
            line-height: 30px;
            padding-left: 5%;
            display: flex;
            align-items: center;
            border-top: 1px solid #eee;
            img {
                width: 30px;
                height: 30px;
                padding-left: 2%;
            }
            div {
                padding-left: 3%;
                p:nth-child(1) {
                    font-size: 18px;
                    color: #333;
                }
                p:nth-child(2) {
                    color: #cccccc;
                    width: 70%;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        li:last-child {
            border-bottom: 1px solid #eee;
        }
    }
}
</style>
