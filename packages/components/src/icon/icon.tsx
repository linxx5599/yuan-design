import { defineComponent, computed } from "vue";
import "./style/index.less";
import "./font/iconfont.js";
import { iconProps } from "./types";
export default defineComponent({
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
    return () => (
      <i class={iconClass.value}>
        <svg
          width="1em"
          height="1em"
          vertical-align="-0.15em"
          fill="currentColor"
          overflow="hidden"
          aria-hidden="true"
        >
          <use xlink:href={iconName.value}></use>
        </svg>
      </i>
    );
  }
});
