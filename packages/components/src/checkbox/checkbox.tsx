import { computed, defineComponent, ref, watch } from "vue";
import { checkboxProps } from "./types";

import { CreateNamespace } from "@yuan-design/utils";

import "./style/index.less";

export default defineComponent({
  name: "YCheckbox",
  inheritAttrs: false,
  __YUAN_CHECKBOX: true,
  props: checkboxProps,
  emits: ["change", "click", "update:checked"],
  setup(props, { slots, emit, expose }) {
    const namespace = new CreateNamespace({ comCls: "checkbox" });
    const checked = ref(
      props.checked === undefined ? props.defaultChecked : props.checked
    );
    const inputRef = ref<HTMLInputElement>();
    watch(
      () => props.checked,
      () => {
        checked.value = props.checked;
      }
    );
    expose({
      focus() {
        inputRef.value?.focus();
      },

      blur() {
        inputRef.value?.blur();
      }
    });
    const eventShiftKey = ref();
    const handleChange = (e: any) => {
      if (props.disabled) {
        return;
      }
      checked.value = e.target.checked;
      emit("update:checked", checked.value);
      e.shiftKey = eventShiftKey.value;
      const eventObj = {
        target: {
          ...props,
          checked: e.target.checked
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      };

      emit("change", eventObj);
      eventShiftKey.value = false;
    };
    const onClick = (e: MouseEvent) => {
      emit("click", e);
      // onChange没能获取到shiftKey，使用onClick hack
      eventShiftKey.value = e.shiftKey;
    };

    const checkboxCls = computed(() => {
      const cls = [namespace.fix("wrapper")];
      if (checked.value) cls.push(namespace.fix("wrapper-checked"));
      return cls;
    });

    const checkboxWrapperCls = computed(() => {
      return namespace.n();
    });
    const inputProps = {
      type: "checkbox",
      class: namespace.fix("input"),
      checked: !!checked.value,
      onChange: handleChange,
      onClick
    };
    return () => (
      <label class={checkboxCls.value}>
        <span class={checkboxWrapperCls.value}>
          <input {...inputProps} />
          <span class={namespace.fix("inner")}></span>
        </span>
        <span>{slots.default?.()}</span>
      </label>
    );
  }
});
