import DefaultTheme from "vitepress/theme";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import { EnhanceAppContext } from "vitepress";
import { Button } from "yuan-design";
import "yuan-design/es/style.css";
import "../style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component("YButton", Button);
    ctx.app.component("demo-preview", AntDesignContainer);
  }
};
