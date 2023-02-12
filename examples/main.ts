import { createApp } from "vue";
import App from "./src/app.vue";
import { Button } from "yuan-design";
import "yuan-design/es/style.css";
const app = createApp(App);
app.use(Button)

app.mount("#app");
