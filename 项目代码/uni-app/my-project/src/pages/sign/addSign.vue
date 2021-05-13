<template>
    <div class="addSign">
        <h2>面试信息</h2>
        <div class="from">
            <view class="weui-cell weui-cell_input">
                <span>公司名称</span
                ><input
                    class="weui-input"
                    maxlength="10"
                    v-model="company"
                    placeholder="请输入公司名称"
                />
            </view>
            <view class="weui-cell weui-cell_input">
                <span>公司电话</span
                ><input
                    class="weui-input"
                    maxlength="11"
                    v-model="phone"
                    placeholder="请输入面试联系人电话"
                />
            </view>
            <view class="weui-cell weui-cell_input">
                <span>面试时间</span
                ><input
                    class="weui-input"
                    v-model="start_time"
                    disabled
                    @click="getTime"
                />

                <div @click="totalmsg" class="vant_warning">!</div>
                <van-toast id="van-toast"> </van-toast>
            </view>
            <view class="weui-cell weui-cell_input">
                <span>面试地址</span
                ><input
                    class="weui-input"
                    placeholder="请选择面试地址"
                    v-model="address.address"
                    @click="addrresSearch"
                    disabled
                />
            </view>
        </div>
        <h2>备注信息</h2>
        <div class="bei_zhu">
            <textarea
                class="fileFid"
                maxlength="100"
                v-model="description"
                placeholder="备注信息（可选,100字以内）"
            >
            </textarea>
        </div>
        <button type="default" class="sureBtn" @click="addsign">确认</button>
        <van-popup
            :show="show"
            :overlay="false"
            position="bottom"
            custom-style="height: 45%"
        >
            <view>
                <div class="btns">
                    <span @click="cancel_el">取消</span>
                    <span @click="cancel_el">确认</span>
                </div>
            </view>
            <picker-view
                :indicator-style="indicatorStyle"
                :value="value"
                @change="bindChange"
                class="picker-view"
            >
                <picker-view-column>
                    <view
                        class="item"
                        v-for="(item, index) in days"
                        :key="index"
                        >{{ item }}号</view
                    >
                </picker-view-column>
                <picker-view-column>
                    <view
                        class="item"
                        v-for="(item, index) in Hours"
                        :key="index"
                        >{{ item }}点</view
                    >
                </picker-view-column>
                <picker-view-column>
                    <view
                        class="item"
                        v-for="(item, index) in Minutes"
                        :key="index"
                        >{{ item }}分</view
                    >
                </picker-view-column>
            </picker-view>
        </van-popup>
        <van-dialog id="van-dialog"> </van-dialog>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "@vant/weapp/dist/toast/toast.js";
import Dialog from "@vant/weapp/dist/dialog/dialog";
import { addSign } from "../../servers/index";
export default {
    data() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const days = [];
        const day = date.getDate();
        const Hours = [];
        const Minutes = [];
        const Hour = date.getHours();

        for (let i = day; i <= 14; i++) {
            days.push(i);
        }
        for (let i = Hour; i <= 22; i++) {
            Hours.push(i + 1);
        }
        for (let i = 0; i <= 5; i++) {
            Minutes.push(i + "0");
        }
        const Minute = Minutes[0];
        return {
            start_time: "",
            show: false,
            year,
            month,
            days,
            day,
            Hours,
            Hour,
            Minute,
            Minutes,
            company: this.$store.state.company,
            phone: this.$store.state.phone,
            description: "",
        };
    },
    created() {
        this.start_time = `${this.year}-${this.month}-${this.day} ${this.Hour}:${this.Minute}`;
    },
    updated() {
        this.start_time = `${this.year}-${this.month}-${this.day} ${this.Hour}:${this.Minute}`;
    },
    computed: {
        ...mapState({
            // companys: (state) => state.addsign.company,
            // phones: (state) => state.addsign.phone,
            address: (state) => state.addsign.address,
        }),
    },
    methods: {
        ...mapMutations({
            updateState: "addsign/updateState",
        }),
        getTime() {
            this.show = true;
        },
        totalmsg() {
            Toast("在面试前一个小时我们谁通知你哦");
        },
        cancel_el() {
            this.show = false;
        },
        addrresSearch() {
            this.updateState({ key: "company", value: this.company });
            this.updateState({ key: "phone", value: this.phone });
            wx.navigateTo({ url: "/pages/sign/suggestionsite" });
        },
        async addsing() {
            //获取坐标
            let { longitude, latitude } = wx.getStorageSync("site");
            let start_time = new Date(this.start_time).getTime();
            let location = {
                lat: this.address.latitude,
                lng: this.address.longitude,
            };
            let address = { ...this.address, location };
            let result = await addSign({
                company: this.company,
                phone: this.phone,
                form_id: "1566sb",
                address: JSON.stringify(address),
                longitude,
                latitude,
                start_time,
                description: this.description,
            });
        },
        //添加面试
        addsign() {
            //手机正则匹配
            let phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
            //非空判断
            if (this.company === "") {
                Toast("请输入公司名称");
                return;
            }
            //手机号验证
            if (!phoneReg.test(this.phone)) {
                Toast("请输入面试联系人手机或座机");
                return;
            }
            Dialog.confirm({
                title: "添加面试",
                message: "添加面试成功",
            })
                .then(() => {
                    this.addsing();
                    //跳转到面试列表
                    wx.navigateTo({ url: "/pages/sign/signList" });
                })
                .catch(() => {
                    return false;
                });
        },
        bindChange: function(e) {
            const val = e.detail.value;
            this.day = this.days[val[0]];
            this.Hour = this.Hours[val[1]] - 1;
            this.Minute = this.Minutes[val[2]];
            if (this.day === new Date().getDate()) {
                this.Hours = [];
                let date = new Date().getHours();
                for (let i = date; i <= 24; i++) {
                    this.Hours.push(i);
                }
            } else {
                this.Hours = [];
                for (let i = 0; i <= 24; i++) {
                    this.Hours.push(i);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.addSign {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f6f6f6;
    > h2 {
        width: 100%;
        height: 40px;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        margin-left: 5%;
    }
    .from {
        width: 100%;
        height: 215px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #fff;
        .weui-cell {
            display: flex;
            width: 95%;
            align-items: center;
            line-height: 50px;
            margin-left: 20px;
            border-bottom: 1px solid #ccc;
            > span {
                color: #666666;
                margin-left: 2%;
                padding-right: 5%;
            }
        }
    }
    .vant_warning {
        width: 30px;
        height: 30px;
        background: #ccc;
        text-align: center;
        line-height: 30px;
        color: #fff;
        border-radius: 50%;
        background: #197dbf;
        margin-left: 10%;
    }
    .bei_zhu {
        width: 100%;
        height: 140px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .fileFid {
            width: 90%;
            height: 110px;
            border: 1px solid #999999;
            border-radius: 2px;
        }
    }
    .sureBtn {
        width: 100%;
        height: 40px;
        background: #999999;
        color: #fff;
        border-radius: 0%;
    }
    .btns {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            margin-left: 5%;
        }
        span:nth-child(2) {
            margin-right: 5%;
            color: #fa8a1c;
        }
    }
    .picker-view {
        width: 750rpx;
        height: 600rpx;
        margin-top: 20rpx;
    }
    .pickerViewTop {
        width: 100%;
        height: 100rpx;
        display: flex;
        justify-content: space-around;
    }
    .item {
        height: 50px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
</style>
