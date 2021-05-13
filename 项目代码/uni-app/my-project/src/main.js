import Vue from "vue";
import App from "./App";
import store from "./store";
Vue.config.productionTip = false;
Vue.prototype.$store = store;
function formatTime(val) {
    let date = new Date(+val);
    let year = date.getFullYear(),
        month = String(date.getMonth() + 1).padStart(2, "0"),
        day = String(date.getDate()).padStart(2, "0"),
        hour = String(date.getHours()).padStart(2, "0"),
        min = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${min}`;
}
Vue.filter("formatTime", formatTime);
App.mpType = "app";

const app = new Vue({
    ...App,
    store,
});
app.$mount();
