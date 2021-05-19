<template>
    <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
    props: ["wh"],
    mounted() {
        setTimeout(() => {
            this.setCharts();
        });
    },
    watch: {
        wh() {
            this.myChart.resize();
        },
    },
    methods: {
        setCharts() {
            this.myChart = echarts.init(this.$refs.container);
            let option;
            option = {
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    top: "5%",
                    left: "center",
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["40%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: "center",
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "40",
                                fontWeight: "bold",
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: "搜索引擎" },
                            { value: 735, name: "直接访问" },
                            { value: 580, name: "邮件营销" },
                            { value: 484, name: "联盟广告" },
                            { value: 300, name: "视频广告" },
                        ],
                    },
                ],
            };
            option && this.myChart.setOption(option);
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>
