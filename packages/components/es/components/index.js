import button from "../button/button.js";
import icon from "../icon/icon.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Button = withInstall(button);
const Icon = withInstall(icon);
const components = [Button, Icon];
const index = {
  install(app) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  }
};
export {
  Button,
  Icon,
  index as default
};
