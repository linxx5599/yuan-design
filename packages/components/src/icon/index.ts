import type { App, Plugin } from "vue";
import Icon from "./icon";

/* istanbul ignore next */
Icon.install = function (app: App) {
  app.component(Icon.name, Icon);
  return app;
};

export default Icon as typeof Icon & Plugin;
