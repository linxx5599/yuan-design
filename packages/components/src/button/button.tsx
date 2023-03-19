import { computed, defineComponent, ref } from "vue";
import type { VNode } from "vue";
import { buttonProps, ButtonType, ButtonSize } from "./types";
import { flattenChildren } from "@yuan-design/utils";

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

// type Loading = boolean | number;
import "./style/index.less";
export default defineComponent({
  name: "YButton",
  inheritAttrs: false,
  __YUAN_BUTTON: true,
  props: buttonProps,
  slots: ["icon"],
  setup(props, { slots, attrs, emit }) {
    // const innerLoading: Ref<Loading> = ref(false);
    // const { icon = slots.icon?.() } = props;
    // const iconNode = icon && !innerLoading.value ? icon : 123;
    const activeBtn = ref(false);
    const insertSpace = (child: VNode, needInserted: boolean) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = (child.children as string).trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return <span>{text}</span>;
      }
      return child;
    };
    const children = flattenChildren(slots.default?.());
    const kids = children.map((child) => insertSpace(child, false));
    // const { icon = slots.icon?.() } = props;

    const classBtn = computed(() => {
      let classs: any = {
        "y-btn": true
      };
      if (
        props.type !== "default" &&
        ButtonType.includes(props.type)
      ) {
        classs[`y-btn-${props.type}`] = true;
      }
      if (
        props.size !== "middle" &&
        ButtonSize.includes(props.size)
      ) {
        const btnKey = `y-btn-${props.size === 'large' ? 'lg' : 'sm'}`
        classs[btnKey] = true;
      }
      return classs;
    });

    const handleClick = (event: Event) => {
      activeBtn.value && (activeBtn.value = false);
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      setTimeout(() => {
        activeBtn.value = true;
        setTimeout(() => {
          activeBtn.value = false;
        }, 300);
      }, 300);
      emit("click", event);
    };

    const attrsProps = computed(() => ({
      ...attrs,
      onClick: handleClick,
      class: [classBtn.value, attrs.class],
      disabled: props.disabled,
      "y-click-animating-without-extra-node":
        activeBtn.value && props.type !== "link" && !props.disabled
    }));

    return () => (
      <button type="button" {...attrsProps.value}>
        {/* {iconNode} */}
        {kids}
      </button>
    );
  }
});
