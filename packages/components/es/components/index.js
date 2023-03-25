import "../button/index.js";
import "../icon/index.js";
import "../space/index.js";
import "../input/index.js";
import Button from "../button/button.js";
import Icon from "../icon/icon.js";
import Space from "../space/space.js";
import Input from "../input/input.js";
const components = [Button, Icon, Space, Input];
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
  Input,
  Space,
  index as default
};
