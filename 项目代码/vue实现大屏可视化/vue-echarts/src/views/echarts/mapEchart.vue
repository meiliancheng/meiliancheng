<template>
    <div ref="container"></div>
</template>

<script>
import * as echarts from "echarts";
import "../../map/js/china.js";

export default {
    props: ["wh"],
    mounted() {
        setTimeout(() => {
            this.setCharts();
            this.myChart.on("click", (params) => {
                console.log(params);
            });
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
            function randomData() {
                return Math.round(Math.random() * 1000);
            }
            option = {
                tooltip: {},
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [""],
                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    left: "10%",
                    top: "bottom",
                    text: ["高", "低"],
                    calculable: true,
                    color: ["#0b50b9", "#c3e2f4"],
                },
                selectedMode: "single",
                series: [
                    {
                        name: "",
                        type: "map",
                        mapType: "china",
                        itemStyle: {
                            normal: {
                                borderColor: "rgba(0, 0, 0, 0.2)",
                            },
                            emphasis: {
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                        showLegendSymbol: true,
                        label: {
                            normal: {
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        data: [
                            {
                                name: "北京",
                                value: randomData(),
                                map: require("../../map/js/province/beijing"),
                            },
                            {
                                name: "天津",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/tianjin"),
                            },
                            {
                                name: "上海",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/shanghai"),
                            },
                            {
                                name: "重庆",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/chongqing"),
                            },
                            {
                                name: "河北",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/hebei"),
                            },
                            {
                                name: "河南",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/henan"),
                            },
                            {
                                name: "云南",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/yunnan"),
                            },
                            {
                                name: "辽宁",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/liaoning"),
                            },
                            {
                                name: "黑龙江",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/heilongjiang"),
                            },
                            {
                                name: "湖南",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/hunan"),
                            },
                            {
                                name: "安徽",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/anhui"),
                            },
                            {
                                name: "山东",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/shandong"),
                            },
                            {
                                name: "新疆",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/xinjiang"),
                            },
                            {
                                name: "江苏",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/jiangsu"),
                            },
                            {
                                name: "浙江",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/zhejiang"),
                            },
                            {
                                name: "江西",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/jiangxi"),
                            },
                            {
                                name: "湖北",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/hebei"),
                            },
                            {
                                name: "广西",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/guangxi"),
                            },
                            {
                                name: "甘肃",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/gansu"),
                            },
                            {
                                name: "山西",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/shanxi"),
                            },
                            {
                                name: "内蒙古",
                                value: randomData(),
                                value: randomData(),
                                map: require("../../map/js/province/neimenggu"),
                            },
                            {
                                name: "陕西",
                                value: randomData(),
                                map: require("../../map/js/province/shanxi1"),
                            },
                            {
                                name: "吉林",
                                value: randomData(),
                                map: require("../../map/js/province/jilin"),
                            },
                            {
                                name: "福建",
                                value: randomData(),
                                map: require("../../map/js/province/fujian"),
                            },
                            {
                                name: "贵州",
                                value: randomData(),
                                map: require("../../map/js/province/guizhou"),
                            },
                            {
                                name: "广东",
                                value: randomData(),
                                map: require("../../map/js/province/guangdong"),
                            },
                            {
                                name: "青海",
                                value: randomData(),
                                map: require("../../map/js/province/beijing"),
                            },
                            {
                                name: "西藏",
                                value: randomData(),
                                map: require("../../map/js/province/xizang"),
                            },
                            {
                                name: "四川",
                                value: randomData(),
                                map: require("../../map/js/province/sichuan"),
                            },
                            {
                                name: "宁夏",
                                value: randomData(),
                                map: require("../../map/js/province/ningxia"),
                            },
                            {
                                name: "海南",
                                value: randomData(),
                                map: require("../../map/js/province/hainan"),
                            },
                            {
                                name: "台湾",
                                value: randomData(),
                                map: require("../../map/js/province/taiwan"),
                            },
                            {
                                name: "香港",
                                value: randomData(),
                                map: require("../../map/js/province/xianggang"),
                            },
                            {
                                name: "澳门",
                                value: randomData(),
                                map: require("../../map/js/province/aomen"),
                            },
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
