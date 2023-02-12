# 安装
**使用 npm 或 yarn 或 pnpm 安装**

推荐使用 pnpm 或 yarn 的方式进行开发

```js
pnpm add yuan-design
```

```js
yarn add ant-design-vue --save
```

```js
npm install ant-design-vue --save
```
## 示例
```js
import App from "./src/app.vue";
import { createApp } from "vue";
import { Button } from "yuan-design";
const app = createApp(App);
app.use(Button)
app.mount("#app");
```
#### 引入样式：
```js
import "yuan-design/es/style.css";
```
