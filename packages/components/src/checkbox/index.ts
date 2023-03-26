import type { App, Plugin } from "vue";
import Checkbox from "./checkbox";

/* istanbul ignore next */
Checkbox.install = function (app: App) {
  app.component(Checkbox.name, Checkbox);
  return app;
};

export default Checkbox as typeof Checkbox & Plugin;
