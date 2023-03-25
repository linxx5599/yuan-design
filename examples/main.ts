import { createApp } from "vue";
import App from "./src/app.vue";
import router from "@examples/router";
import { Button, Space } from "yuan-design/index";
import "yuan-design/es/style.css";
const app = createApp(App);
app.use(router).use(Button).use(Space);

app.mount("#app");
