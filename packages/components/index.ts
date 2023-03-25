import type { App } from "vue";
import Button from "./src/button";
import Icon from "./src/icon";
import Space from "./src/space";
import Input from "./src/input";


const components = [Button, Icon, Space, Input];

export { Button, Icon, Space, Input };

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component);
    });
  }
};
