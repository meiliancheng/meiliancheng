import { pay } from "@/servers/index";

const state = {
    payInfo: {},
};
const getters = {};
const mutations = {
    updateState(state, payload) {
        state.payInfo = payload;
    },
};
const actions = {
    async getPayInfo({ commit }, payload) {
        let result = await pay(payload);

        commit("updateState", result.data);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
