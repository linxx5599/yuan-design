import {
  computed,
  defineComponent,
  VNode,
  RendererNode,
  RendererElement
} from "vue";
import { spaceProps, aligns, sizes } from "./types";

import "./style/index.less";
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
      const gapSize = sizes.includes(propSize)
        ? propSize
        : isNaN(propSize)
        ? "middle"
        : propSize || "middle";
      const gap = (sizeMap[gapSize] || gapSize) + "px";
      const calssArr = ["y-space", `y-space-align-${align}"`];
      if (props.direction === "vertical") calssArr.push(`y-space-vertical`);
      return {
        class: calssArr,
        style: {
          gap
        }
      };
    });
    const childs: VNode<RendererNode, RendererElement>[] | undefined =
      slots?.default?.() || [];

    return () => (
      <div {...attrsProps.value}>
        {childs.map((chid) => {
          return <div class="y-space-item">{chid}</div>;
        })}
      </div>
    );
  }
});
