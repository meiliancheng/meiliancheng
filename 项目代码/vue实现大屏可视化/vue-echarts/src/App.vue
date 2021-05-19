<template>
    <div id="app">
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
        >
            <grid-item
                v-for="item in layout"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
            >
                <component
                    :wh="item.w * item.h"
                    :is="item.component || 'span'"
                    >{{ item.i }}</component
                >
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";

//引入组件
import echart1 from "./views/echarts/Echart1";
import echart2 from "./views/echarts/Echart2";
import echart3 from "./views/echarts/Echart3";
import Mapechart from "./views/echarts/mapEchart";

export default {
    name: "App",
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 4, h: 6, i: "1", component: echart1 },
                { x: 4, y: 0, w: 4, h: 6, i: "2", component: echart2 },
                { x: 8, y: 0, w: 4, h: 6, i: "3", component: echart3 },
                { x: 3, y: 0, w: 6, h: 10, i: "4", component: Mapechart },
                { x: 0, y: 0, w: 3, h: 5, i: "5" },
                { x: 9, y: 0, w: 3, h: 5, i: "6" },
                { x: 0, y: 5, w: 3, h: 5, i: "7" },
                { x: 9, y: 0, w: 3, h: 5, i: "8" },
            ],
        };
    },
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        echart1,
        echart2,
        echart3,
        Mapechart,
    },
};
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
.vue-grid-item > div {
    width: 100%;
    height: 100%;
}
.vue-grid-layout {
    background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
        no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
