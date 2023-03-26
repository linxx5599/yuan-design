import { defineComponent, ref, computed, createVNode, mergeProps } from "vue";
import { buttonProps, ButtonType, ButtonSize } from "./types.js";
import { flattenChildren } from "../utils/index.js";
import "./style/index.less.js";
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
const Button = /* @__PURE__ */ defineComponent({
  name: "YButton",
  inheritAttrs: false,
  __YUAN_BUTTON: true,
  props: buttonProps,
  slots: ["icon"],
  setup(props, {
    slots,
    attrs,
    emit
  }) {
    var _a;
    const activeBtn = ref(false);
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    const children = flattenChildren((_a = slots.default) == null ? void 0 : _a.call(slots));
    const kids = children.map((child) => insertSpace(child, false));
    const classBtn = computed(() => {
      let classs = {
        "yuan-btn": true
      };
      if (props.type !== "default" && ButtonType.includes(props.type)) {
        classs[`yuan-btn-${props.type}`] = true;
      }
      if (props.size !== "middle" && ButtonSize.includes(props.size)) {
        const btnKey = `yuan-btn-${props.size === "large" ? "lg" : "sm"}`;
        classs[btnKey] = true;
      }
      return classs;
    });
    const handleClick = (event) => {
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
      "yuan-click-animating-without-extra-node": activeBtn.value && props.type !== "link" && !props.disabled
    }));
    return () => createVNode("button", mergeProps({
      "type": "button"
    }, attrsProps.value), [kids]);
  }
});
export {
  Button as default
};
