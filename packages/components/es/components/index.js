import "../button/index.js";
import "../icon/index.js";
import "../space/index.js";
import Button from "../button/button.js";
import Icon from "../icon/icon.js";
import Space from "../space/space.js";
const components = [Button, Icon, Space];
const index = {
  install(app) {
    components.forEach((component) => {
      app.use(component);
    });
  }
};
export {
  Button,
  Icon,
  Space,
  index as default
};
