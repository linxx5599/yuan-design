import type { App, Plugin } from "vue";
import Space from "./space";

/* istanbul ignore next */
Space.install = function (app: App) {
  app.component(Space.name, Space);
  return app;
};

export default Space as typeof Space & Plugin;
