import { defineComponent, computed, ref, watch, createVNode, mergeProps } from "vue";
import { inputProps } from "./types.js";
import createNamespace from "../utils/CreateNamespace.js";
import "./style/index.less.js";
const Input = /* @__PURE__ */ defineComponent({
  name: "YInput",
  inheritAttrs: false,
  __YUAN_INPUT: true,
  props: inputProps,
  emits: ["update:value"],
  setup(props, {
    slots,
    emit
  }) {
    var _a, _b;
    const modelValue = computed({
      get() {
        return props.value === void 0 ? props.defaultValue : props.value;
      },
      set(newVal) {
        emit("update:value", newVal);
      }
    });
    const focused = ref(false);
    watch(() => props.value, () => {
      modelValue.value = props.value;
    });
    watch(() => props.disabled, () => {
      if (props.value !== void 0) {
        modelValue.value = props.value;
      }
      if (props.disabled) {
        focused.value = false;
      }
    });
    const onFocus = (e) => {
      var _a2;
      focused.value = true;
      (_a2 = props == null ? void 0 : props.onFocus) == null ? void 0 : _a2.call(props, e);
    };
    const onBlur = (e) => {
      var _a2;
      focused.value = false;
      (_a2 = props == null ? void 0 : props.onBlur) == null ? void 0 : _a2.call(props, e);
    };
    const setModelValue = (value, callback) => {
      if (modelValue.value === value)
        return;
    };
    const handleChange = (e) => {
      const {
        value,
        composing
      } = e.target;
      if (e.isComposing || composing || modelValue.value === value)
        return;
      const newVal = e.target.value;
      setModelValue(newVal);
    };
    const inputFnProps = {
      onChange: (e) => {
        var _a2;
        handleChange(e);
        (_a2 = props == null ? void 0 : props.onChange) == null ? void 0 : _a2.call(props, e);
      },
      onInput: (e) => {
        var _a2;
        handleChange(e);
        (_a2 = props == null ? void 0 : props.onInput) == null ? void 0 : _a2.call(props, e);
      },
      onFocus,
      onBlur
    };
    const namespace = new createNamespace({
      comCls: "input"
    });
    const inputDomProps = computed(() => {
      return {
        type: props.type,
        placeholder: props.placeholder,
        disabled: props.disabled,
        class: {
          [namespace.n()]: true
        }
      };
    });
    const inputDom = () => createVNode("input", mergeProps(inputFnProps, inputDomProps.value), null);
    let prefix = ((_a = slots == null ? void 0 : slots.prefix) == null ? void 0 : _a.call(slots)) || props.prefix || null;
    let suffix = ((_b = slots == null ? void 0 : slots.suffix) == null ? void 0 : _b.call(slots)) || props.suffix || null;
    if (!prefix && !suffix)
      return inputDom;
    const attrsProps = computed(() => {
      return {
        disabled: props.disabled,
        class: {
          [namespace.fix("affix-wrapper")]: true
        }
      };
    });
    return () => createVNode("span", attrsProps.value, [prefix ? createVNode("span", {
      "class": namespace.fix("prefix")
    }, [prefix]) : prefix, inputDom(), suffix ? createVNode("span", {
      "class": namespace.fix("suffix")
    }, [suffix]) : suffix]);
  }
});
export {
  Input as default
};
