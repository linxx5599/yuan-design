import type { App, Plugin } from "vue";
import Input from "./input";

/* istanbul ignore next */
Input.install = function (app: App) {
  app.component(Input.name, Input);
  return app;
};

export default Input as typeof Input & Plugin;
