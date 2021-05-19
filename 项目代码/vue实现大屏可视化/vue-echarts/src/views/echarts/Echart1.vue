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
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: "line",
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
