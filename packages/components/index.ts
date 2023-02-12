import type { App, Plugin } from "vue";
import button from "./src/button/button";
import icon from "./src/icon/icon";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: any) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp);
  };
  return comp as SFCWithInstall<T>;
};

const Button = withInstall(button);
const Icon = withInstall(icon);

const components = [Button, Icon];

export { Button, Icon };

export default {
  install(app: App) {
    components.forEach((component: any) => {
      app.component(component.name, component);
    });
  }
};
