import { createApp } from "vue";
import App from "./src/app.vue";
import router from "@examples/router";
import yntd from "yuan-design/index";
import "yuan-design/es/style.css";
const app = createApp(App);
app.use(router).use(yntd);

app.mount("#app");
