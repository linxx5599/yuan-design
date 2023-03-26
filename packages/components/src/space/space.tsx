import { computed, defineComponent } from "vue";
import { spaceProps, aligns, spaceSize } from "./types";

import "./style/index.less";
import { flattenChildren, CreateNamespace } from "@yuan-design/utils";

export default defineComponent({
  name: "YSpace",
  inheritAttrs: false,
  __YUAN_SPACE: true,
  props: spaceProps,
  setup(props, { slots }) {
    const namespace = new CreateNamespace({ comCls: "space" });

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
      const calssArr = [namespace.n(), namespace.fix(`align-${align}`)];
      if (props.direction === "vertical")
        calssArr.push(namespace.fix("vertical"));
      if (props.wrap) calssArr.push(namespace.fix("wrap"));
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
    const childs = flattenChildren(slotsDefaults);

    return () => (
      <div {...attrsProps.value}>
        {childs.map((chid) => {
          return <div class={namespace.fix("item")}>{chid}</div>;
        })}
      </div>
    );
  }
});
