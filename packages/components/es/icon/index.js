import Icon from "./icon.js";
Icon.install = function(app) {
  app.component(Icon.name, Icon);
  return app;
};
export {
  Icon as default
};
