import { defineComponent, computed, createVNode } from "vue";
import { spaceProps, aligns, spaceSize } from "./types.js";
import "./style/index.less.js";
import { flattenChildren } from "../utils/index.js";
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
      const gapSize = spaceSize.includes(propSize) ? propSize : isNaN(propSize) ? "middle" : propSize || "middle";
      const gap = (sizeMap[gapSize] || gapSize) + "px";
      const calssArr = ["y-space", `y-space-align-${align}"`];
      if (props.direction === "vertical")
        calssArr.push(`y-space-vertical`);
      if (props.wrap)
        calssArr.push(`y-space-wrap`);
      return {
        class: calssArr,
        style: {
          gap
        }
      };
    });
    const slotsDefaults = ((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) || [];
    if (slotsDefaults.length === 0) {
      return null;
    }
    const childs = flattenChildren(slotsDefaults);
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
