import type { App } from "vue";
import Button from "./src/button";
import Icon from "./src/icon";


const components = [Button, Icon];

export { Button, Icon };

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component);
    });
  }
};
