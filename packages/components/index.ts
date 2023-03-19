import type { App } from "vue";
import Button from "./src/button";
import Icon from "./src/icon";
import Space from "./src/space";


const components = [Button, Icon, Space];

export { Button, Icon, Space };

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component);
    });
  }
};
