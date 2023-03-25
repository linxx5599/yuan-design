import Input from "./input.js";
Input.install = function(app) {
  app.component(Input.name, Input);
  return app;
};
export {
  Input as default
};
