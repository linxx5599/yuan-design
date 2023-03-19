import Space from "./space.js";
Space.install = function(app) {
  app.component(Space.name, Space);
  return app;
};
export {
  Space as default
};
