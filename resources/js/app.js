require("./bootstrap");
window.Vue = require("vue");
import VueRouter from "vue-router";
import WelcomeComponent from "./components/WelcomeComponent.vue";
import About from "./components/About.vue";

//VUE ROUTER
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: WelcomeComponent
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
});

//DEFINE APP

const app = new Vue({
    el: "#app",
    router,
    components: { WelcomeComponent }
});
