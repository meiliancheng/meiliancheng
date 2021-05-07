import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        address: "",
        company: "",
        phone: "",
        id: "",
    },
    mutations: {
        getAddress(state, data) {
            //赋值地址
            state.address = data;
        },
        //存储公司名和手机号
        getObj(state, obj) {
            //分别进行赋值
            state.company = obj.company;
            state.phone = obj.phone;
        },
        getid(state, id) {
            console.log(id);
            state.id = id;
        },
    },
    actions: {},
    modules: {},
});
