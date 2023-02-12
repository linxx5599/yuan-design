import { defineComponent, computed, createVNode } from "vue";
import "./style/index.less.js";
import "./font/iconfont.js";
import { iconProps } from "./types.js";
const icon = /* @__PURE__ */ defineComponent({
  name: "YIcon",
  inheritAttrs: false,
  __YUAN_ICON: true,
  props: iconProps,
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.name}`;
    });
    const iconClass = computed(() => {
      return `y-icon y-${props.name}`;
    });
    return () => createVNode("i", {
      "class": iconClass.value
    }, [createVNode("svg", {
      "width": "1em",
      "height": "1em",
      "vertical-align": "-0.15em",
      "fill": "currentColor",
      "overflow": "hidden",
      "aria-hidden": "true"
    }, [createVNode("use", {
      "xlink:href": iconName.value
    }, null)])]);
  }
});
export {
  icon as default
};
