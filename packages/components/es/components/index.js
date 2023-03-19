import "../button/index.js";
import "../icon/index.js";
import Button from "../button/button.js";
import Icon from "../icon/icon.js";
const components = [Button, Icon];
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
  index as default
};
