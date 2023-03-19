import { defineComponent, computed, createVNode } from "vue";
import { spaceProps, aligns, sizes } from "./types.js";
import "./style/index.less.js";
const Space = /* @__PURE__ */ defineComponent({
  name: "YSpace",
  inheritAttrs: false,
  __YUAN_SPACE: true,
  props: spaceProps,
  setup(props, {
    slots
  }) {
    var _a;
    const attrsProps = computed(() => {
      const align = aligns.includes(props.align) ? props.align : "center";
      const sizeMap = {
        small: 4,
        middle: 8,
        large: 16
      };
      const propSize = props.size;
      const gapSize = sizes.includes(propSize) ? propSize : isNaN(propSize) ? "middle" : propSize || "middle";
      const gap = (sizeMap[gapSize] || gapSize) + "px";
      const calssArr = ["y-space", `y-space-align-${align}"`];
      if (props.direction === "vertical")
        calssArr.push(`y-space-vertical`);
      return {
        class: calssArr,
        style: {
          gap
        }
      };
    });
    const childs = ((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) || [];
    return () => createVNode("div", attrsProps.value, [childs.map((chid) => {
      return createVNode("div", {
        "class": "y-space-item"
      }, [chid]);
    })]);
  }
});
export {
  Space as default
};
