import { createApp } from "vue";
import App from "./src/app.vue";
import { Button, Space } from "yuan-design/index";
import "yuan-design/es/style.css";
const app = createApp(App);
app.use(Button).use(Space);

app.mount("#app");
