import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import * as filters from "./filters/index";

const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters;
