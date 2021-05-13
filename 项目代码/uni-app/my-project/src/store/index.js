import Vuex from "vuex";
// import createLogger from "vuex/dist/logger";
import Vue from "vue";
// 引入子模块
import addsign from "./modules/addsign.js";
import sign from "./modules/sign";
import pay from "./modules/pay.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        addsign,
        sign,
        pay,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    // plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});

export default store;
