const state = {
    address: {},
    company: "",
    phone: "",
    id: "",
};
const getters = {};
const mutations = {
    updateState(state, payload) {
        state[payload.key] = payload.value;
    },
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
