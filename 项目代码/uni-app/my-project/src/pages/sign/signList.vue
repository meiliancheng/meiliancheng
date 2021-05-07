<template>
    <div class="list">
        <van-tabs
            :active="active"
            @onchange="onChange"
            title-active-color="#197DBF"
            color="#197DBF"
        >
            <van-tab title="未开始">
                <li
                    v-for="(item, index) in notlist"
                    :key="index"
                    @click="detailSign(item)"
                >
                    <h2>{{ item.company }} <span>已打卡</span></h2>
                    <p>{{ item.address.address || item.address }}</p>
                    <p>
                        面试时间:{{ dataTime(item.start_time * 1)
                        }}<span>已提醒</span>
                    </p>
                </li>
            </van-tab>
            <van-tab title="已打卡">
                <li v-for="(item, index) in Hasclock" :key="index">
                    <h2>{{ item.company }} <span>已打卡</span></h2>
                    <p>
                        {{ item.address.address || item.address }}
                    </p>
                    <p>
                        面试时间:{{ dataTime(item.start_time * 1) }}
                        <span>已提醒</span>
                    </p>
                </li>
            </van-tab>
            <van-tab title="已放弃">
                <li v-for="(item, index) in getup" :key="index">
                    <h2>{{ item.company }} <span>已打卡</span></h2>
                    <p>
                        {{ item.address.address || item.address }}
                    </p>
                    <p>
                        面试时间:{{ dataTime(item.start_time * 1) }}
                        <span>已提醒</span>
                    </p>
                </li>
            </van-tab>
            <van-tab title="全部">
                <li v-for="item in list" :key="item.create_time">
                    <h2>{{ item.company }}</h2>
                    <p>
                        {{ item.address.address || item.address }}
                    </p>
                    <p>面试时间:{{ dataTime(item.start_time * 1) }}</p>
                </li>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { getSignList } from "@/servers/index";
import time from "../../utils/dateTime";
export default {
    data() {
        return {
            list: [],
            active: 0,
            notlist: [],
            Hasclock: [],
            getup: [],
            dataTime: time,
            page: 1,
            pageSize: 20,
        };
    },
    async created() {
        //请求面试列表数据
        let { page, pageSize } = this;
        let notlist = await getSignList({ status: -1, remind: -1 });
        let Hasclock = await getSignList({ status: 0, remind: -1 });
        let getup = await getSignList({ status: 1, remind: -1 });
        let res = await getSignList({ page, pageSize });
        if (notlist.code === 0) {
            this.notlist = notlist.data.map((item) => {
                if (this.isJSON_test(item.address)) {
                    let address = JSON.parse(item.address);
                    item.address = address;
                    return item;
                } else {
                    return item;
                }
            });
        }
        if (Hasclock.code === 0) {
            this.Hasclock = Hasclock.data.map((item) => {
                if (this.isJSON_test(item.address)) {
                    let address = JSON.parse(item.address);
                    item.address = address;
                    return item;
                } else {
                    return item;
                }
            });
        }
        if (getup.code === 0) {
            this.getup = getup.data.map((item) => {
                if (this.isJSON_test(item.address)) {
                    let address = JSON.parse(item.address);
                    item.address = address;
                    return item;
                } else {
                    return item;
                }
            });
        }
        if (res.code === 0) {
            this.list = res.data.map((item) => {
                if (this.isJSON_test(item.address)) {
                    let address = JSON.parse(item.address);
                    item.address = address;
                    return item;
                } else {
                    return item;
                }
            });
        }
    },
    methods: {
        isJSON_test(str) {
            if (typeof str == "string") {
                try {
                    var obj = JSON.parse(str);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        },
        //详情数据
        detailSign(item) {
            //跳转带详情页
            wx.navigateTo({ url: `/pages/sign/signDetail` });

            this.$store.commit("getid", item.id);
        },
    },
    onChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.name}`,
            icon: "none",
        });
    },
};
</script>

<style lang="scss" scoped>
.list {
    width: 100%;
    height: 100%;
    display: flex;
    background: #eeeeee;
    flex-direction: column;
    li {
        width: 95%;
        height: 140px;
        background: #fff;
        line-height: 40px;
        margin-bottom: 5%;
        padding-left: 4%;
        h2 {
            font-size: 26px;
            span {
                float: right;
                font-size: 18px;
                display: inline-block;
                width: 80px;
                height: 35px;
                margin: 5px;
                text-align: center;
                line-height: 35px;
                background: #ecf6ff;
                border: #60aeff;
                color: #49a3ff;
            }
        }
        p:nth-child(2) {
            width: 100%;
            height: 35px;
            font-size: 18px;
            overflow: hidden;
            color: #a2a2a2;
        }
        p:nth-child(3) {
            width: 100%;
            height: 50px;
            color: #777777;
            font-size: 20px;
            span {
                float: right;
                font-size: 18px;
                display: inline-block;
                width: 80px;
                height: 35px;
                margin: 5px;
                border: #60aeff;
                color: #49a3ff;
                text-align: center;
                line-height: 35px;
                background: #ecf6ff;
            }
        }
    }
}
</style>
