<template>
    <div>
        <p>
            面试地址：<span>{{ address.address }}</span>
        </p>
        <p>面试时间：{{ signDetail.start_time | formatTime }}</p>
        <p>
            联系方式: <span>{{ signDetail.phone }}</span>
        </p>
        <section>
            <button @click="goSign">去打卡</button>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState({
            signDetail: (state) => state.sign.signDetail,
        }),
        address() {
            if (this.signDetail.address) {
                return JSON.parse(this.signDetail.address);
            } else {
                return {};
            }
        },
    },
    watch: {
        signDetail() {
            if (this.signDetail.company) {
                wx.setNavigationBarTitle({ title: this.signDetail.company });
            }
        },
    },
    methods: {
        ...mapActions({
            getSignDetail: "sign/getSignDetail",
        }),
        goSign() {
            wx.navigateTo({ url: "/pages/sign/sign" });
        },
    },
    onShow() {
        console.log("this...", this, this.$mp.query);
        let { id } = this.$mp.query;
        this.getSignDetail(id);
    },
};
</script>

<style lang="scss" scoped>
div {
    p {
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
    }
    p:nth-child(1),
    p:nth-child(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        > span {
            color: #11c366;
        }
    }
    button {
        width: 150px;
        margin-top: 20px;
        color: #fff;
        background: #197dbf;
    }
}</style
>>
