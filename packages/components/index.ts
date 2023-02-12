import type { App, Plugin } from "vue";
import button from "./src/button/button";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: any) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp);
  };
  return comp as SFCWithInstall<T>;
};
const Button = withInstall(button);

export { Button }; 