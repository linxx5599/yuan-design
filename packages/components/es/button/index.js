import Button from "./button.js";
Button.install = function(app) {
  app.component(Button.name, Button);
  return app;
};
export {
  Button as default
};
