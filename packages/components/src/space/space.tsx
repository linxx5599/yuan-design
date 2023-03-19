import { computed, defineComponent } from "vue";
import { spaceProps, aligns, spaceSize } from "./types";

import "./style/index.less";
import { flattenChildren } from "@yuan-design/utils";

export default defineComponent({
  name: "YSpace",
  inheritAttrs: false,
  __YUAN_SPACE: true,
  props: spaceProps,
  setup(props, { slots }) {
    const attrsProps = computed(() => {
      const align = aligns.includes(props.align) ? props.align : "center";
      const sizeMap: any = {
        small: 4,
        middle: 8,
        large: 16
      };
      const propSize: any = props.size;
      const gapSize = spaceSize.includes(propSize)
        ? propSize
        : isNaN(propSize)
        ? "middle"
        : propSize || "middle";
      const gap = (sizeMap[gapSize] || gapSize) + "px";
      const calssArr = ["y-space", `y-space-align-${align}"`];
      if (props.direction === "vertical") calssArr.push(`y-space-vertical`);
      if (props.wrap) calssArr.push(`y-space-wrap`);
      return {
        class: calssArr,
        style: {
          gap
        }
      };
    });
    const slotsDefaults = slots?.default?.() || [];
    if (slotsDefaults.length === 0) {
      return null;
    }
    const childs = flattenChildren(slotsDefaults)

    return () => (
      <div {...attrsProps.value}>
        {childs.map((chid) => {
          return <div class="y-space-item">{chid}</div>;
        })}
      </div>
    );
  }
});
