import { RouteRecordRaw } from "vue-router";
export const vueRouters = function (): Array<RouteRecordRaw> {
  let routerList: Array<RouteRecordRaw> = [];
  const modules = import.meta.glob("../views/*/index.vue");
  Object.keys(modules).forEach((key) => {
    const [_, name] = key.match(/^..\/views\/(.+)\/index.vue/) || [];
    if (name) {
      routerList.push({
        path: `/${name}`,
        name,
        component: modules[key]
      });
    }
  });
  return routerList;
};
