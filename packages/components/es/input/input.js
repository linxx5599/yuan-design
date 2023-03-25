import { defineComponent, ref, computed, watch, createVNode } from "vue";
import { inputProps } from "./types.js";
import "./style/index.less.js";
const Input = /* @__PURE__ */ defineComponent({
  name: "YInput",
  inheritAttrs: false,
  __YUAN_INPUT: true,
  props: inputProps,
  emits: ["update:value"],
  setup(props, {
    slots,
    emit,
    expose
  }) {
    var _a, _b;
    const {
      placeholder,
      type
    } = props;
    const inputRef = ref();
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
    const blur = () => {
      var _a2;
      (_a2 = inputRef.value) == null ? void 0 : _a2.blur();
    };
    expose({
      blur,
      input: inputRef
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
    const inputDomProps = {
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
      onBlur,
      type,
      placeholder,
      ref: inputRef,
      disabled: props.disabled,
      class: {
        "y-input": true
      }
    };
    const inputDom = createVNode("input", inputDomProps, null);
    let prefix = ((_a = slots == null ? void 0 : slots.prefix) == null ? void 0 : _a.call(slots)) || props.prefix || null;
    let suffix = ((_b = slots == null ? void 0 : slots.suffix) == null ? void 0 : _b.call(slots)) || props.suffix || null;
    if (!prefix && !suffix)
      return () => inputDom;
    const attrsProps = computed(() => {
      return {
        disabled: props.disabled,
        class: {
          "y-input-affix-wrapper": true
        }
      };
    });
    return () => createVNode("span", attrsProps.value, [prefix ? createVNode("span", {
      "class": "y-input-prefix"
    }, [prefix]) : prefix, inputDom, suffix ? createVNode("span", {
      "class": "y-input-suffix"
    }, [suffix]) : suffix]);
  }
});
export {
  Input as default
};
